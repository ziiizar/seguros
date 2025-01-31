"use client";

import { ClipboardList, EllipsisVertical, Mail, PhoneCallIcon, TrashIcon } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/Button";
import { Lead, surveyAnswers } from "@prisma/client";
import { useAction } from "@/hooks/use-action";
import { toast } from "sonner";
import { deleteLead } from "@/actions/lead/deleteLead/action";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
  } from "@/components/ui/dialog";
import { useEffect, useState } from "react";
import { getSurveyAnswerByLeadId } from "@/data/surveyAnswers";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Options = ({ lead }: { lead: Lead }) => {

      const [isDialogOpen, setIsDialogOpen] = useState(false);
      const [isSurveysDialogOpen, setIsSurveysDialogOpen] = useState(false);
      const [surveyAnswers, setSurveyAnswers] = useState<surveyAnswers []| null>(null);
    
     
      useEffect(() => {
        const fetchsurveyAnswers = async () => {
          const surveyAnswers = await getSurveyAnswerByLeadId(lead.id);
          setSurveyAnswers(surveyAnswers);
        };
    
        fetchsurveyAnswers();
      }, [lead]);


  

  const { execute, isLoading } = useAction(deleteLead, {
    onSuccess: (data, message) => {
        setIsDialogOpen(false)
      toast.success(message);
    },
    onError: (error) => {
      toast.error(error);
      setIsDialogOpen(false)

    },
  });

  const onSubmit = async () => {
    await execute({ id: lead.id, active: false });
  };

  const groupSurveysByDate = () => {
    if (surveyAnswers)
    return surveyAnswers.reduce((acc, answer) => {
      const date = new Date(answer.createdAt).toISOString().split('T')[0];
      if (!acc[date]) {
        acc[date] = [];
      }
      acc[date].push(answer);
      return acc;
    }, {} as Record<string, surveyAnswers[]>);
  };

  const groupedSurveys = groupSurveysByDate();


  return (
    <DropdownMenu>
  <DropdownMenuTrigger
    className="bg-zinc-800 size-8 border-none rounded-sm"
    asChild
  >
    <Button variant="outline">
      <EllipsisVertical />
    </Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent className="w-48">
    <DropdownMenuLabel>Options</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuGroup>
      <DropdownMenuItem asChild>
        <a href={`mailto:${lead.email}`}>
          Contact by email
          <DropdownMenuShortcut>
            <Mail />
          </DropdownMenuShortcut>
        </a>
      </DropdownMenuItem>
      {lead.phone && (
        <DropdownMenuItem asChild>
          <a
            href={`https://wa.me/${lead.phone}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Contact by Whatsapp
            <DropdownMenuShortcut>
              <PhoneCallIcon />
            </DropdownMenuShortcut>
          </a>
        </DropdownMenuItem>
      )}
    </DropdownMenuGroup>
    <DropdownMenuSeparator />
    <DropdownMenuItem onClick={() => setIsDialogOpen(true)}>
      Remove
      <DropdownMenuShortcut>
        <TrashIcon />
      </DropdownMenuShortcut>
    </DropdownMenuItem>


    {surveyAnswers && surveyAnswers.length > 0 && (
          <>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={() => setIsSurveysDialogOpen(true)}>
              View Surveys
              <DropdownMenuShortcut>
                <ClipboardList className="size-4" />
              </DropdownMenuShortcut>
            </DropdownMenuItem>
          </>
        )}


  </DropdownMenuContent>


  { groupedSurveys && <Dialog open={isSurveysDialogOpen} onOpenChange={setIsSurveysDialogOpen}>
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Survey Responses</DialogTitle>
            <DialogDescription>
              Survey history for {lead.name}
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-6">
            {Object.entries(groupedSurveys).map(([date, answers]) => (
              <Card key={date}>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">
                    {new Intl.DateTimeFormat('en-US', {
                      dateStyle: 'full',
                      timeStyle: 'short',
                    }).format(new Date(date))}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {answers.map((answer) => (
                    <div key={answer.id} className="space-y-1">
                      <p className="text-sm font-medium">{answer.question}</p>
                      <p className="text-sm text-muted-foreground">
                        {answer.answer}
                      </p>
                    </div>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>
        </DialogContent>
      </Dialog> }


  {/* Dialog fuera del Dropdown */}
  <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
    <DialogContent className="w-80">
      <DialogHeader>
        <DialogTitle>Delete Lead</DialogTitle>
        <DialogDescription>
          Are you sure you want to delete <span>{lead.name}</span>?
        </DialogDescription>
      </DialogHeader>
      <DialogFooter>
        <Button
          variant="ghost"
          onClick={() => {
            setIsDialogOpen(false);
          }}
        >
          Cancel
        </Button>
        <Button onClick={onSubmit} disabled={isLoading}>
          Accept
        </Button>
      </DialogFooter>
    </DialogContent>
  </Dialog>
</DropdownMenu>

  );
};

export default Options;

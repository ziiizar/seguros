"use client";

import { EllipsisVertical, Mail, PhoneCallIcon, TrashIcon } from "lucide-react";
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
import { Lead } from "@prisma/client";
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
import { useState } from "react";

const Options = ({ lead }: { lead: Lead }) => {

      const [isDialogOpen, setIsDialogOpen] = useState(false);
    

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
  </DropdownMenuContent>

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

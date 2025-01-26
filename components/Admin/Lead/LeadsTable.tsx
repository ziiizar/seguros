"use client";

import { updateLead } from "@/actions/lead/updateLead/action";
import { Button } from "@/components/ui/Button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useAction } from "@/hooks/use-action";
import { useState } from "react";
import { toast } from "sonner";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Lead, ClientStatus } from "@prisma/client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { EditIcon } from "lucide-react";
import Options from "./Options";

const LeadsTable = ({ leads }: { leads: Lead[] }) => {
  const [selectedLead, setSelectedLead] = useState<Lead | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState<ClientStatus | "">("");

  const { execute, isLoading } = useAction(updateLead, {
    onSuccess: (data, message) => {
      toast.success(message);
      setIsDialogOpen(false);
    },
    onError: (error) => {
      toast.error(error);
    },
  });

  const onSubmit = async () => {
    if (selectedLead && selectedStatus) {
      await execute({ id: selectedLead.id, status: selectedStatus });
    }
  };

  return (
    
    <div className="flex-1 h-full"> 
      
        <Table className="border-separate border-spacing-0 [&_td]:border-border [&_tfoot_td]:border-t  [&_th]:border-border [&_tr:not(:last-child)_td]:border-b [&_tr]:border-none text-white">
          <TableHeader className="sticky top-0 z-10 bg-zinc-900 backdrop-blur-sm ">
            <TableRow className="hover:bg-transparent">
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Phone</TableHead>
              <TableHead>Request Date</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="table-auto ">
            {leads?.map((lead) => (
              <TableRow key={lead.id}>
                <TableCell>{lead.name}</TableCell>
                <TableCell>{lead.email}</TableCell>
                <TableCell>{lead.phone}</TableCell>
                <TableCell>
                  {new Date(lead.createdAt).toLocaleDateString()}
                </TableCell>
                <TableCell>{lead.status}</TableCell>
                <TableCell className="flex gap-2">
                  <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                    <DialogTrigger asChild>
                      <div className="flex gap-2">
                        <Button
                          className="rounded-sm p-1 size-8"
                          onClick={() => {
                            setSelectedLead(lead);
                            setSelectedStatus(lead.status);
                          }}
                        >
                          <EditIcon />
                        </Button>
                      </div>
                    </DialogTrigger>
                    <DialogContent className="w-80">
                      <DialogHeader>
                        <DialogTitle>Edit status</DialogTitle>
                        <DialogDescription>
                          Change the status of the lead.
                        </DialogDescription>
                      </DialogHeader>
                      <Select
                        value={selectedStatus}
                        onValueChange={(value) =>
                          setSelectedStatus(value as ClientStatus)
                        }
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select status" />
                        </SelectTrigger>
                        <SelectContent>
                          {Object.values(ClientStatus).map((status) => (
                            <SelectItem key={status} value={status}>
                              {status}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <DialogFooter>
                        <Button
                          variant="ghost"
                          onClick={() => {
                            setSelectedLead(null);
                            setIsDialogOpen(false);
                          }}
                        >
                          Cancel
                        </Button>
                        {selectedLead && (
                          <Button
                            onClick={onSubmit}
                            disabled={isLoading || !selectedStatus}
                          >
                            Accept
                          </Button>
                        )}
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                  <Options lead={lead} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    
    
  );
};

export default LeadsTable;

"use client";

import { updateLeadStatus } from "@/actions/lead/updateLeadStatus/action";
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
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const LeadsTable = ({ leads }: { leads: Lead[] }) => {
  const [selectedLead, setSelectedLead] = useState<Lead | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState<ClientStatus | "">("");

  const { execute, isLoading } = useAction(updateLeadStatus, {
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
    <div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Request Date</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {leads?.map((lead) => (
            <TableRow key={lead.id}>
              <TableCell>{lead.name}</TableCell>
              <TableCell>{lead.email}</TableCell>
              <TableCell>
                {new Date(lead.createdAt).toLocaleDateString()}
              </TableCell>

              <TableCell>{lead.status}</TableCell>
              <TableCell>
                <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                  <DialogTrigger asChild>
                    <Button onClick={() => {
                      setSelectedLead(lead);
                      setSelectedStatus(lead.status);
                    }}>
                      Edit
                    </Button>
                  </DialogTrigger>

                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Edit status</DialogTitle>
                      <DialogDescription>
                        Change the status of the lead.
                      </DialogDescription>
                    </DialogHeader>

                    <Select
                      value={selectedStatus}
                      onValueChange={(value) => setSelectedStatus(value as ClientStatus)}
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
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default LeadsTable;

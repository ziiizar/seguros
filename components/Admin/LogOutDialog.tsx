"use client";

import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import { DialogTrigger } from "@radix-ui/react-dialog";
import { Button } from "../ui/Button";
import { LogOut } from "lucide-react";
import { useState } from "react";
import { signOutAction } from "@/actions/auth/signOut/action";

const LogOutDialog = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogTrigger className="text-white flex  gap-2 self-start underline-offset-4 hover:underline dark:text-neutral-50">
        <LogOut></LogOut> <span>Log out</span>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
        <DialogTitle>Log out</DialogTitle>
          </DialogHeader>
        <div className="flex flex-col gap-4">
          <h1>Are you sure you want to log out?</h1>
        </div>
        <DialogFooter>
          {" "}
          <div className="flex gap-4">
            <Button onClick={() => (signOutAction(), setIsDialogOpen(false))}>
              Yes
            </Button>
            <Button onClick={() => setIsDialogOpen(false)}>No</Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default LogOutDialog;

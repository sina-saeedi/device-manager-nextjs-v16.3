"use client";
import {IconLoader2, IconTrash} from "@tabler/icons-react";
import {useState, useTransition} from "react";
import {Button} from "#/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "#/components/ui/dialog";
import {deleteDeviceAction} from "../actions/delete-device";

interface DeleteButtonProps {
  // TODO: swap for whatever identifier(s) your server action actually needs
  id: string;
}

export function DeviceCardDeleteButton({id}: DeleteButtonProps) {
  const [open, setOpen] = useState(false);
  const [isPending, startTransition] = useTransition();

  function handleDelete() {
    startTransition(async () => {
      await deleteDeviceAction(id);
      setOpen(false);
    });
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger
        render={
          <Button variant="ghost" size="icon" aria-label="Delete">
            <IconTrash className="text-muted-foreground h-4 w-4" />
          </Button>
        }
      />
      <DialogContent>
        <DialogHeader>
          <DialogTitle>آیا مطمئن هستید؟</DialogTitle>
          <DialogDescription>این عملیات قابل برگشت نیست و دستگاه برای همیشه حذف خواهد شد.</DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button variant="outline" onClick={() => setOpen(false)} disabled={isPending}>
            انصراف
          </Button>
          <Button variant="destructive" onClick={handleDelete} disabled={isPending}>
            {isPending ? (
              <>
                <IconLoader2 className="mr-2 h-4 w-4 animate-spin" />
                درحال حذف
              </>
            ) : (
              "حذف کردن"
            )}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

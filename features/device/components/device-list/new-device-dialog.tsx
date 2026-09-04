"use client";
import {zodResolver} from "@hookform/resolvers/zod";
import {IconPlus} from "@tabler/icons-react";
import {IconLoader2} from "@tabler/icons-react";
import {useTransition} from "react";
import {useState} from "react";
import {Controller, useForm} from "react-hook-form";
import {Button} from "#/components/ui/button";
import {Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger} from "#/components/ui/dialog";
import {Input} from "#/components/ui/input";
import {Label} from "#/components/ui/label";
import {RadioGroup, RadioGroupItem} from "#/components/ui/radio-group";
import {addDeviceAction} from "../../actions/add-device";
import {Device, DeviceSchema, deviceSchema} from "../../models/device";

type AddDeviceDialogProps = {
  onAddOptimistic: (device: Device) => void;
};

export function AddDeviceDialog({onAddOptimistic}: AddDeviceDialogProps) {
  const [isPending, startTransition] = useTransition();
  const [open, setOpen] = useState(false);
  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: {errors}
  } = useForm<DeviceSchema>({
    resolver: zodResolver(deviceSchema),
    defaultValues: {name: "", ip: "", status: "online"}
  });

  function onSubmit(values: DeviceSchema) {
    setOpen(false);
    startTransition(async () => {
      onAddOptimistic({...values, lastPing: "-", id: String(Math.floor(Math.random() * 1000))});
      reset();
      await addDeviceAction(values);
    });
  }

  return (
    <Dialog
      open={open}
      onOpenChange={(next) => {
        setOpen(next);
        if (!next) reset();
      }}
    >
      <DialogTrigger
        render={
          <button className="border-muted-foreground/25 text-muted-foreground hover:border-muted-foreground/50 hover:bg-accent/50 hover:text-foreground flex h-full min-h-37 w-full flex-col items-center justify-center gap-2 rounded-xl border border-dashed shadow-none transition-colors">
            <span className="bg-muted flex h-10 w-10 items-center justify-center rounded-full">
              <IconPlus className="h-5 w-5" />
            </span>
            <span className="text-sm font-medium">دستگاه جدید</span>
          </button>
        }
      />
      <DialogContent className="sm:max-w-sm">
        <DialogHeader>
          <DialogTitle>اضافه کردن دستگاه</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">نام</Label>
            <Input id="name" placeholder="اکسس پوینت" aria-invalid={!!errors.name} {...register("name")} />
            {errors.name && <p className="text-destructive text-sm font-medium">{errors.name.message}</p>}
          </div>
          <div className="mt-5 space-y-2">
            <Label htmlFor="ip">آدرس آیپی</Label>
            <Input dir="ltr" id="ip" placeholder="192.168.1.1" aria-invalid={!!errors.ip} {...register("ip")} />
            {errors.ip && <p className="text-destructive text-sm font-medium">{errors.ip.message}</p>}
          </div>
          <div className="mt-5 space-y-2">
            <Label htmlFor="status">وضعیت</Label>
            <Controller
              control={control}
              name="status"
              render={({field}) => (
                <RadioGroup value={field.value} onValueChange={(v) => field.onChange(v)} className="flex gap-5">
                  <div className="flex items-center gap-3">
                    <RadioGroupItem value="online" id="r1" />
                    <Label htmlFor="r1">آنلاین</Label>
                  </div>
                  <div className="flex items-center gap-3">
                    <RadioGroupItem value="offline" id="r2" />
                    <Label htmlFor="r2">آفلاین</Label>
                  </div>
                  <div className="flex items-center gap-3">
                    <RadioGroupItem value="warning" id="r3" />
                    <Label htmlFor="r3">هشدار</Label>
                  </div>
                </RadioGroup>
              )}
            />
            {errors.status && <p className="text-destructive text-sm font-medium">{errors.status.message}</p>}
          </div>
          <DialogFooter>
            <Button type="submit" disabled={isPending}>
              {isPending && <IconLoader2 className="animate-spin" />}
              ذخیره
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}

"use client";
import {useOptimistic} from "react";
import {AddDeviceDialog} from "#/features/device/components/device-list/new-device-dialog";
import {Device} from "../../models/device";
import {DeviceCard} from "../device-card";

type Props = {
  initial: Device[];
};

export function List({initial}: Props) {
  const [devices, addDeviceOptimistically] = useOptimistic(initial, (state, device: Device) => [device, ...state]);

  if (devices.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center gap-1 py-16 text-center text-sm">
        <p className="font-medium">دستگاهی پیدا نشد</p>
        <p className="text-muted-foreground">دستگاه‌هایی که اضافه میکنید اینجا نمایش داده خواهند شد</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      <AddDeviceDialog onAddOptimistic={addDeviceOptimistically} />
      {devices.map((device) => (
        <DeviceCard key={device.id} {...device} />
      ))}
    </div>
  );
}

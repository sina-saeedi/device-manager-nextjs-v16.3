import {AddDeviceDialog} from "#/features/device/components/device-list/new-device-dialog";
import {fetchDevices} from "../../api";
import {Device} from "../../models/device";
import {DeviceCard, DeviceCardSkeleton} from "../device-card";

export async function DeviceList(props: PageProps<"/device">) {
  const searchParams = await props.searchParams;
  const query = (searchParams.q as string)?.trim() || "";
  const status = searchParams.status as Device["status"][];
  const devices = await fetchDevices({q: query, status: status});

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
      <AddDeviceDialog />
      {devices.map((device) => (
        <DeviceCard key={device.id} {...device} />
      ))}
    </div>
  );
}

export async function DeviceListSkeleton() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {[1, 2, 3, 4, 5, 6].map((value) => (
        <DeviceCardSkeleton key={value} />
      ))}
    </div>
  );
}

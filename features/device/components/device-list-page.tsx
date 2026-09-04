import {fetchDevices} from "../api";
import {DeviceCard, DeviceCardSkeleton} from "./device-card";

export async function DeviceList() {
  const devices = await fetchDevices();

  if (devices.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center gap-1 py-16 text-center text-sm">
        <p className="font-medium">دستگاهی پیدا نشد</p>
        <p className="text-muted-foreground">دستگاه‌هایی که اضافه میکنید اینجا نمایش داده خواهند شد</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-4 p-6 sm:grid-cols-2 lg:grid-cols-3">
      {devices.map(({id, ...device}) => (
        <DeviceCard key={id} {...device} />
      ))}
    </div>
  );
}

export async function DeviceListSkeleton() {
  return (
    <div className="grid grid-cols-1 gap-4 p-6 sm:grid-cols-2 lg:grid-cols-3">
      {[1, 2, 3, 4, 5, 6].map((value) => (
        <DeviceCardSkeleton key={value} />
      ))}
    </div>
  );
}

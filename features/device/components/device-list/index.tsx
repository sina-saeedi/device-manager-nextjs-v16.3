import {fetchDevices} from "../../api";
import {Device} from "../../models/device";
import {DeviceCardSkeleton} from "../device-card";
import {List} from "./list";

export async function DeviceList({searchParams}: PageProps<"/device">) {
  const search = await searchParams;
  const query = (search.q as string)?.trim() || "";
  const status = search.status as Device["status"][];
  const devices = await fetchDevices({q: query, status: status});

  return <List initial={devices} />;
}

export function DeviceListSkeleton() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {[1, 2, 3, 4, 5, 6].map((value) => (
        <DeviceCardSkeleton key={value} />
      ))}
    </div>
  );
}

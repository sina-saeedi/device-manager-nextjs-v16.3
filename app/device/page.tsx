import {Suspense} from "react";
import {Skeleton} from "#/components/ui/skeleton";
import {DeviceList, DeviceListSkeleton} from "#/features/device/components/device-list";
import {DeviceListFilters} from "#/features/device/components/device-list/device-list-filters";

export default function DeviceListPage(props: PageProps<"/device">) {
  return (
    <div className="group flex flex-col gap-8 pb-5">
      <Suspense fallback={<Skeleton className="h-8 w-full" />}>
        <DeviceListFilters />
      </Suspense>
      <Suspense fallback={<DeviceListSkeleton />}>
        <div className="group-has-data-pending:animate-pulse">
          <DeviceList {...props} />
        </div>
      </Suspense>
    </div>
  );
}

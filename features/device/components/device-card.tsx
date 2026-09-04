import {Card, CardContent, CardHeader, CardTitle} from "#/components/ui/card";
import {Skeleton} from "#/components/ui/skeleton";
import {cn} from "#/lib/utils";
import {Device} from "../models/device";
import {DeviceCardDeleteButton} from "./device-card-delete-button";

const STATUS_MAPPING: Record<Device["status"], {label: string; class: string}> = {
  online: {
    label: "آنلاین",
    class: "text-green-500"
  },
  offline: {
    label: "آفلاین",
    class: "text-red-500"
  },
  warning: {
    label: "هشدار",
    class: "text-yellow-500"
  }
} as const;

export function DeviceCard({id, name, ip, status, lastPing}: Device) {
  return (
    <Card className="pt-4 shadow-none">
      <CardHeader className="flex items-center justify-between pb-2">
        <CardTitle className="text-base font-medium">{name}</CardTitle>
        <DeviceCardDeleteButton id={id} />
      </CardHeader>
      <CardContent className="space-y-1.5 text-sm">
        <div className="text-muted-foreground flex justify-between">
          <span>آدرس آی‌پی</span>
          <span className="text-foreground">{ip}</span>
        </div>
        <div className="text-muted-foreground flex justify-between">
          <span>وضعیت</span>
          <span className={cn("flex items-center gap-1.5", STATUS_MAPPING[status].class)}>
            <span className="h-1.5 w-1.5 rounded-full bg-current" />
            {STATUS_MAPPING[status].label}
          </span>
        </div>
        <div className="text-muted-foreground flex justify-between">
          <span>آخرین پینگ</span>
          <span className="text-foreground">{lastPing}</span>
        </div>
      </CardContent>
    </Card>
  );
}

export function DeviceCardSkeleton() {
  return (
    <Card className="shadow-none">
      <CardHeader className="pb-2">
        <Skeleton className="h-4 w-28" />
      </CardHeader>
      <CardContent className="space-y-2.5">
        <div className="flex justify-between">
          <Skeleton className="h-3 w-16" />
          <Skeleton className="h-3 w-20" />
        </div>
        <div className="flex justify-between">
          <Skeleton className="h-3 w-12" />
          <Skeleton className="h-3 w-14" />
        </div>
        <div className="flex justify-between">
          <Skeleton className="h-3 w-16" />
          <Skeleton className="h-3 w-16" />
        </div>
      </CardContent>
    </Card>
  );
}

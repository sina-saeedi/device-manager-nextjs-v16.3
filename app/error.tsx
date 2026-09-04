"use client";
import {IconAlertTriangle} from "@tabler/icons-react";
import {useEffect} from "react";
import {Button} from "#/components/ui/button";

export default function Error({error, reset}: {error: Error & {digest?: string}; reset: () => void}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="mt-10 flex flex-col items-center justify-center gap-4 text-center">
      <IconAlertTriangle className="text-destructive size-30" />
      <div className="space-y-1">
        <h2 className="text-3xl font-semibold">یه اتفاق بد افتاد</h2>
        <p className="text-muted-foreground text-2xl">ظاهرا یه اتفاقی که نباید پیش می‌اومد پیش اومده...</p>
      </div>
      <Button onClick={() => reset()}>تلاش مجدد</Button>
    </div>
  );
}

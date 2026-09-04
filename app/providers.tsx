"use client";
import {DirectionProvider} from "@base-ui/react";
import {NuqsAdapter} from "nuqs/adapters/next/app";
import {ReactNode} from "react";
import {TooltipProvider} from "#/components/ui/tooltip";

type Props = {children: ReactNode};

export function Providers({children}: Props) {
  return (
    <NuqsAdapter>
      <DirectionProvider direction="rtl">
        <TooltipProvider>{children}</TooltipProvider>
      </DirectionProvider>
    </NuqsAdapter>
  );
}

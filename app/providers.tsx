"use client";
import {DirectionProvider} from "@base-ui/react";
import {ReactNode} from "react";
import {TooltipProvider} from "#/components/ui/tooltip";

type Props = {children: ReactNode};

export function Providers({children}: Props) {
  return (
    <DirectionProvider direction="rtl">
      <TooltipProvider>{children}</TooltipProvider>
    </DirectionProvider>
  );
}

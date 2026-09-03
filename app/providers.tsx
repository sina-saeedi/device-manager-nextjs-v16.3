import {TooltipProvider} from "#/components/ui/tooltip";
import {ReactNode} from "react";
import {DirectionProvider} from "@base-ui/react";

type Props = {children: ReactNode};

export function Providers({children}: Props) {
  return (
    <DirectionProvider direction="rtl">
      <TooltipProvider>{children}</TooltipProvider>
    </DirectionProvider>
  );
}

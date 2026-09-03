import {Icon, IconDeviceMobile, IconHome} from "@tabler/icons-react";
import type {Route} from "next";

type NavItems = {
  title: string;
  href: Route;
  Icon: Icon;
};

export const NAV_ITEMS = [
  {title: "داشبورد", href: "/", Icon: IconHome},
  {
    title: "دستگاه‌ها",
    href: "/device",
    Icon: IconDeviceMobile
  }
] as const satisfies NavItems[];

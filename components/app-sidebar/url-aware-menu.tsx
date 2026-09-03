"use client";
import Link from "next/link";
import {usePathname} from "next/navigation";
import {SidebarMenu, SidebarMenuButton, SidebarMenuItem} from "#/components/ui/sidebar";
import {NAV_ITEMS} from "#/constants/navigation-items";

export function URLAwareMenu() {
  const pathname = usePathname();

  return NAV_ITEMS.map((item) => {
    return (
      <SidebarMenu className="px-2" key={item.title}>
        <SidebarMenuItem key={item.href}>
          <SidebarMenuButton render={<Link href={item.href} />} isActive={pathname === item.href}>
            <item.Icon />
            {item.title}
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarMenu>
    );
  });
}

import {IconInnerShadowTop} from "@tabler/icons-react";
import Link from "next/link";
import {type ReactNode} from "react";
import {SidebarInset, SidebarProvider, SidebarTrigger} from "#/components/ui/sidebar";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem
} from "#/components/ui/sidebar";
import {URLAwareMenu} from "./url-aware-menu";
import {NavUser} from "./user-nav";

function SiteHeader() {
  return (
    <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
      <SidebarTrigger className="-ms-1" />
    </header>
  );
}

type AppSidebarProps = {
  children: ReactNode;
};

export function AppSidebar({children}: AppSidebarProps) {
  return (
    <SidebarProvider>
      <Sidebar side="right" collapsible="offcanvas">
        <SidebarHeader className="pt-2.5">
          <SidebarMenu>
            <SidebarMenuItem>
              <Link className="flex items-center gap-2" href="/">
                <IconInnerShadowTop className="size-5!" />
                <span className="text-base font-semibold">سیستم مدیریتی</span>
              </Link>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarHeader>
        <SidebarContent className="pt-3">
          <URLAwareMenu />
        </SidebarContent>
        <SidebarFooter>
          <NavUser
            user={{
              name: "ادمین",
              email: "m@example.com",
              avatar: ""
            }}
          />
        </SidebarFooter>
      </Sidebar>
      <SidebarInset>
        <SiteHeader />
        <SidebarContent className="px-4.5 pt-5">{children}</SidebarContent>
      </SidebarInset>
    </SidebarProvider>
  );
}

"use client";
import {Avatar, AvatarFallback, AvatarImage} from "#/components/ui/avatar";
import {SidebarMenuButton} from "#/components/ui/sidebar";

export function NavUser({
  user
}: {
  user: {
    name: string;
    email: string;
    avatar: string;
  };
}) {
  return (
    <SidebarMenuButton size="lg">
      <Avatar className="h-8 w-8 rounded-lg grayscale">
        <AvatarImage src={user.avatar} alt={user.name} />
        <AvatarFallback className="rounded-lg">D:</AvatarFallback>
      </Avatar>
      <div className="grid flex-1 text-sm leading-tight">
        <span className="truncate font-medium">{user.name}</span>
        <span className="text-muted-foreground truncate text-xs">{user.email}</span>
      </div>
    </SidebarMenuButton>
  );
}

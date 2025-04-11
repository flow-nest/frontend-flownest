"use client";

import type React from "react";

import { useState } from "react";
import { usePathname } from "next/navigation";
import {
  SidebarProvider,
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarFooter,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarInset,
  SidebarTrigger,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
} from "@/components/ui/sidebar";
import {
  BarChart3,
  Box,
  Home,
  Map,
  Settings,
  Truck,
  User,
  LogOut,
  Bell,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { ThemeToggle } from "@/components/theme-toggle";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const pathname = usePathname();
  const [notifications, setNotifications] = useState(3);

  return (
    <SidebarProvider>
      <div className="flex h-screen w-full overflow-hidden bg-background">
        <Sidebar variant="sidebar" collapsible="icon">
          <SidebarHeader className="flex items-center justify-between p-4">
            <div className="flex items-center gap-2 text-xl font-bold">
              <Box className="h-6 w-6" />
              <span>RoboTrack</span>
            </div>
          </SidebarHeader>
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupLabel>Navigation</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton
                      asChild
                      isActive={pathname === "/"}
                      tooltip="Dashboard"
                    >
                      <a href="/">
                        <Home className="h-5 w-5" />
                        <span>Dashboard</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton
                      asChild
                      isActive={pathname === "/robots"}
                      tooltip="Robots"
                    >
                      <a href="/robots">
                        <Truck className="h-5 w-5" />
                        <span>Robots</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton
                      asChild
                      isActive={pathname === "/inventory"}
                      tooltip="Inventory"
                    >
                      <a href="/inventory">
                        <Box className="h-5 w-5" />
                        <span>Inventory</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton
                      asChild
                      isActive={pathname === "/map"}
                      tooltip="Map"
                    >
                      <a href="/map">
                        <Map className="h-5 w-5" />
                        <span>Map</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton
                      asChild
                      isActive={pathname === "/analytics"}
                      tooltip="Analytics"
                    >
                      <a href="/analytics">
                        <BarChart3 className="h-5 w-5" />
                        <span>Analytics</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
            <SidebarGroup>
              <SidebarGroupLabel>Settings</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton
                      asChild
                      isActive={pathname === "/settings"}
                      tooltip="Settings"
                    >
                      <a href="/settings">
                        <Settings className="h-5 w-5" />
                        <span>Settings</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton
                      asChild
                      isActive={pathname === "/profile"}
                      tooltip="Profile"
                    >
                      <a href="/profile">
                        <User className="h-5 w-5" />
                        <span>Profile</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
          <SidebarFooter className="p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Avatar>
                  <AvatarImage src="/placeholder-user.jpg" alt="User" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-medium">John Doe</p>
                  <p className="text-xs text-muted-foreground">Admin</p>
                </div>
              </div>
              <Button variant="ghost" size="icon">
                <LogOut className="h-5 w-5" />
              </Button>
            </div>
          </SidebarFooter>
        </Sidebar>
        <SidebarInset>
          <div className="flex h-full flex-col">
            <header className="flex h-14 items-center gap-4 border-b bg-background px-4 lg:h-16 lg:px-6">
              <SidebarTrigger />
              <div className="w-full flex-1">
                <form>
                  <div className="relative">
                    <Input
                      placeholder="Search robots, inventory..."
                      className="w-full md:max-w-xs pl-8"
                    />
                    <div className="absolute inset-y-0 left-0 flex items-center pl-2 pointer-events-none">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-muted-foreground"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                      </svg>
                    </div>
                  </div>
                </form>
              </div>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="icon" className="relative">
                  <Bell className="h-5 w-5" />
                  {notifications > 0 && (
                    <Badge
                      className="absolute -right-1 -top-1 h-5 w-5 rounded-full p-0 flex items-center justify-center"
                      variant="destructive"
                    >
                      {notifications}
                    </Badge>
                  )}
                </Button>
                <ThemeToggle />
              </div>
            </header>
            <main className="flex-1 overflow-auto p-4 md:p-6">{children}</main>
          </div>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}

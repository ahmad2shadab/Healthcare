"use client"

import {
  BarChart3,
  Calendar,
  Clock,
  LayoutDashboard,
  MessageCircle,
  Settings,
  HelpCircle,
  ClipboardList,
} from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

const navigationItems = [
  {
    title: "Dashboard",
    url: "#",
    icon: LayoutDashboard,
    isActive: true,
  },
  {
    title: "History",
    url: "#",
    icon: Clock,
    isActive: false,
  },
  {
    title: "Calendar",
    url: "#",
    icon: Calendar,
    isActive: false,
  },
  {
    title: "Appointments",
    url: "#",
    icon: ClipboardList,
    isActive: false,
  },
  {
    title: "Statistics",
    url: "#",
    icon: BarChart3,
    isActive: false,
  },
]

const toolsItems = [
  {
    title: "Chat",
    url: "#",
    icon: MessageCircle,
    isActive: false,
  },
  {
    title: "Support",
    url: "#",
    icon: HelpCircle,
    isActive: false,
  },
]

export function AppSidebar() {
  return (
    <Sidebar className="border-r-0 bg-white">
      <SidebarHeader className="p-6">
        <div className="flex items-center gap-2">
          <div className="text-2xl font-bold">
            <span className="text-cyan-400">Health</span>
            <span className="text-gray-800">care.</span>
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent className="px-4">
        <SidebarGroup>
          <SidebarGroupLabel className="text-xs text-gray-400 uppercase tracking-wider mb-4">General</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-1">
              {navigationItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    isActive={item.isActive}
                    className={`w-full justify-start px-3 py-2 rounded-lg transition-colors ${
                      item.isActive
                        ? "bg-gray-900 text-white hover:bg-gray-800"
                        : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                    }`}
                  >
                    <a href={item.url} className="flex items-center gap-3">
                      <item.icon className="h-5 w-5" />
                      <span className="font-medium">{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup className="mt-8">
          <SidebarGroupLabel className="text-xs text-gray-400 uppercase tracking-wider mb-4">Tools</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-1">
              {toolsItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    className="w-full justify-start px-3 py-2 rounded-lg text-gray-600 hover:bg-gray-100 hover:text-gray-900 transition-colors"
                  >
                    <a href={item.url} className="flex items-center gap-3">
                      <item.icon className="h-5 w-5" />
                      <span className="font-medium">{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="p-4">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="w-full justify-start px-3 py-2 rounded-lg text-gray-600 hover:bg-gray-100 hover:text-gray-900 transition-colors"
            >
              <a href="#" className="flex items-center gap-3">
                <Settings className="h-5 w-5" />
                <span className="font-medium">Setting</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  )
}

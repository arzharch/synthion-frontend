import { DollarSign, FileText, Headphones, Home, Phone, Settings } from "lucide-react"
import Image from "next/image"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarFooter,
} from "@/components/ui/sidebar"
import Link from "next/link"

const menuItems = [
  {
    title: "Overview",
    url: "/",
    icon: Home,
  },
  {
    title: "Call Insights",
    url: "/call-insights",
    icon: Phone,
  },
  {
    title: "Costs",
    url: "/costs",
    icon: DollarSign,
  },
  {
    title: "Transcripts",
    url: "/transcripts",
    icon: FileText,
  },
  {
    title: "Recordings",
    url: "/recordings",
    icon: Headphones,
  },
  {
    title: "Settings",
    url: "/settings",
    icon: Settings,
  },
]

export function AppSidebar() {
  return (
    <Sidebar className="border-r border-sidebar-border bg-sidebar backdrop-blur-xl">
      <SidebarHeader className="border-b border-sidebar-border p-6">
        <div className="flex items-center gap-4">
          <div className="h-10 w-10 rounded-xl overflow-hidden flex items-center justify-center shadow-lg shadow-[#0099ff]/20">
            <Image
              src="/synthion-logo.png"
              alt="Synthion AI"
              width={40}
              height={40}
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h2 className="font-semibold text-sidebar-foreground text-lg">Synthion AI</h2>
            <p className="text-xs text-muted-foreground">Analytics Dashboard</p>
          </div>
        </div>
      </SidebarHeader>
      <SidebarContent className="px-3 py-4">
        <SidebarGroup>
          <SidebarGroupLabel className="text-muted-foreground text-xs uppercase tracking-wider font-medium px-3 mb-2">
            Navigation
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-1">
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    className="hover:bg-[#0099ff]/10 hover:text-[#0099ff] transition-all duration-200 group rounded-xl px-3 py-2.5 text-sidebar-foreground"
                  >
                    <Link href={item.url} className="flex items-center gap-3">
                      <item.icon className="h-5 w-5 group-hover:text-[#0099ff] transition-colors" />
                      <span className="font-medium">{item.title}</span>
                      {item.badge && (
                        <span className="ml-auto bg-[#0099ff] text-white text-xs px-2 py-1 rounded-full font-medium">
                          {item.badge}
                        </span>
                      )}
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="border-t border-sidebar-border p-6">
        <div className="flex items-center gap-3">
          <div className="h-6 w-6 rounded-xl overflow-hidden flex items-center justify-center shadow-sm shadow-[#0099ff]/20">
            <Image
              src="/synthion-logo.png"
              alt="Synthion AI"
              width={24}
              height={24}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="text-xs text-muted-foreground">© 2024 Synthion AI</div>
        </div>
      </SidebarFooter>
    </Sidebar>
  )
}

import {
  Calendar,
  Lightbulb,
  ListTodo,
  FolderKanban,
  Settings,
  ChevronRight,
  LayoutDashboard,
  Target,
  AlertTriangle,
  MessageSquareQuote,
  Video,
  TrendingUp,
  Layers,
} from "lucide-react";

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
  SidebarRail,
} from "@/components/ui/sidebar";
import { Link } from "@tanstack/react-router";
import { TechplanoraLogo } from "../techplanora-logo";

// Menu structure based on Prisma schema features, grouped logically
const menuGroups = [
  {
    label: null, // No label for main navigation
    items: [
      {
        title: "Dashboard",
        url: "/dashboard",
        icon: LayoutDashboard,
      },
      {
        title: "Activity Logs",
        url: "/dashboard/activity",
        icon: TrendingUp,
      },
    ],
  },
  {
    label: "Project Management",
    items: [
      {
        title: "Projects",
        url: "/dashboard/projects",
        icon: FolderKanban,
      },
      {
        title: "Milestones",
        url: "/projects/milestones",
        icon: Target,
      },
      {
        title: "Tasks",
        url: "/tasks",
        icon: ListTodo,
      },
      {
        title: "Architecture Decisions",
        url: "/projects/decisions",
        icon: Layers,
      },
    ],
  },
  {
    label: "Planning & Review",
    items: [
      {
        title: "Risks & Assumptions",
        url: "/projects/risks",
        icon: AlertTriangle,
      },
      {
        title: "Retrospectives",
        url: "/projects/retrospectives",
        icon: MessageSquareQuote,
      },
      {
        title: "Content Planner",
        url: "/content",
        icon: Lightbulb,
      },
    ],
  },
  {
    label: "Schedule & Communication",
    items: [
      {
        title: "Calls & Meetings",
        url: "/calls",
        icon: Video,
      },
      {
        title: "Calendar",
        url: "/calendar",
        icon: Calendar,
      },
    ],
  },
];

export function AppSidebar() {
  return (
    <Sidebar collapsible="icon">
      <SidebarHeader className="border-b">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg"  asChild>
              <Link to="/dashboard">
                <TechplanoraLogo className="size-8" showText />
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent>
        {menuGroups.map((group, index) => (
          <SidebarGroup key={index}>
            {group.label && <SidebarGroupLabel>{group.label}</SidebarGroupLabel>}
            <SidebarGroupContent>
              <SidebarMenu>
                {group.items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton tooltip={item.title} asChild>
                      <Link to={item.url}>
                        {item.icon && <item.icon className="size-4" />}
                        <span className="text-muted-foreground dark:text-sidebar-foreground">{item.title}</span>
                        <ChevronRight className="ml-auto size-4 opacity-50" />
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>

      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton>
              <Settings className="size-4" />
              <span className="text-sidebar-foreground">Settings</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>

      <SidebarRail />
    </Sidebar>
  );
}
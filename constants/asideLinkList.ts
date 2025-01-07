'use client'

import { routes } from "./routes";
import { Leads, Dashboard, Notification} from "@/Icons/Admin";

import { Links } from "@/types/links";


 export const AdminLinks: Links[] = [
    {
      name: "Dashboard",
      href: routes.admin,
      icon: Dashboard,
      // coloredIcon: DashboardColor,
      
    },
    // {
    //   name: "Notifications",
    //   href: routes.adminNotifications,
    //   icon: Notification,
      
    // },
    {
      name: "Leads",
      href: routes.adminLeads,
      icon: Leads,
  
    },

  ];
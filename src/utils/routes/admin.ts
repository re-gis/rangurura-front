"use client";
import { BiSolidDashboard } from "react-icons/bi";
import { IoPersonOutline } from "react-icons/io5";
import { FaCalendarAlt } from "react-icons/fa";
import { MdOutlineMessage } from "react-icons/md";
import { FaRegCalendarCheck } from "react-icons/fa";
import { IoSettings } from "react-icons/io5";
import { IoLogOut } from "react-icons/io5";
import { GiVote } from "react-icons/gi";

import { MdOutlineDashboard } from "react-icons/md";
import { IoPersonSharp } from "react-icons/io5";
import { MdMessage } from "react-icons/md";
import { FaRegCalendarAlt } from "react-icons/fa";
import { BsCalendar2CheckFill } from "react-icons/bs";
import { LuSettings } from "react-icons/lu";

export const adminRoutes = [
  {
    icon: MdOutlineDashboard,
    activeIcon: BiSolidDashboard,
    name: "home",
    path: "/app/admin",
  },
  {
    icon: IoPersonOutline,
    activeIcon: IoPersonSharp,
    name: "leaders",
    path: "/app/admin/leaders",
  },
  {
    icon: MdOutlineMessage,
    activeIcon: MdMessage,
    name: "problems",
    path: "/app/admin/problems",
  },
  {
    icon: FaRegCalendarAlt,
    activeIcon: FaCalendarAlt,
    name: "calendar",
    path: "/app/admin/calendar",
  },
  {
    icon: GiVote,
    activeIcon: GiVote,
    name: "suggestions",
    path: "/app/admin/suggestions",
  },
  {
    icon: FaRegCalendarCheck,
    activeIcon: BsCalendar2CheckFill,
    name: "events",
    path: "/app/admin/events",
  },
  {
    icon: LuSettings,
    activeIcon: IoSettings,
    name: "settings",
    path: "/app/admin/settings",
  },
];

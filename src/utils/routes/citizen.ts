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

export const citizensRoutes = [
  {
    icon: MdOutlineDashboard,
    activeIcon: BiSolidDashboard,
    name: "home",
    path: "/app/citizen",
  },
  {
    icon: MdOutlineMessage,
    activeIcon: MdMessage,
    name: "problems",
    path: "/app/citizen/problems",
  },
  {
    icon: GiVote,
    activeIcon: GiVote,
    name: "suggestions",
    path: "/app/citizen/suggestions",
  },
  {
    icon: IoPersonOutline,
    activeIcon: IoPersonSharp,
    name: "events",
    path: "/app/citizen/events",
  },
  {
    icon: LuSettings,
    activeIcon: IoSettings,
    name: "leaders",
    path: "/app/citizen/leaders",
  },
  {
    icon: LuSettings,
    activeIcon: IoSettings,
    name: "settings",
    path: "/app/citizen/settings",
  },
];

"use client";
import React from "react";
import Navbar from "@/components/core/Navbar";
import Sidebar from "@/components/core/Sidebar";
import SwitchLanguages from "@/components/core/SwitchLanguage";
import { ChatState } from "@/context/ChatContext";
import { adminRoutes } from "@/utils/routes/admin";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const { fontSize } = ChatState();
  return (
    <div
      className={`w-screen md:h-[140vh] flex items-center bg-[#EEF3F9] md:bg-[#021428] md:pr-8 text-[${fontSize}]`}
    >
      <Sidebar routes={adminRoutes} type={"leader"} />
      <div className="w-full md:w-[81%] md:h-[95%] rounded-[1.3rem] p-2 md:bg-[#EEF3F9] mb-10 pt-6 md:px-10 px-2 py-8">
        <Navbar type="leader" />
        {children}
      </div>
      <div className="justify-end p-3 bg-transparent fixed bottom-0 w-screen flex items-center">
        <SwitchLanguages color="black" />
      </div>
    </div>
  );
};

export default Layout;

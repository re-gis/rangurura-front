"use client";
import Banner from "@/components/Banner";
import Navbar from "@/components/core/Navbar";
import Sidebar from "@/components/core/Sidebar";
import SwitchLanguages from "@/components/core/SwitchLanguage";
import { citizensRoutes } from "@/utils/routes/citizen";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-screen md:h-[140vh] flex items-center bg-[#021428] md:pr-8">
      <Sidebar routes={citizensRoutes} type="citizen" />
      <div className="w-full md:w-[81%] md:h-[95%] rounded-[1.3rem] p-2 bg-[#EEF3F9] pt-6 px-10 py-8">
        <Navbar type="citizen" />
        {children}
      </div>

      <div className="justify-end p-3 bg-transparent fixed bottom-0 w-screen flex items-center">
        <SwitchLanguages color="black" />
      </div>
    </div>
  );
};

export default Layout;

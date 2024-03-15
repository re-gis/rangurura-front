"use client";
import Banner from "@/components/Banner";
import SwitchLanguages from "@/components/core/SwitchLanguage";
import React from "react";

const SharedLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      {children}
      <div className="justify-end p-3 bg-transparent fixed bottom-0 w-screen flex items-center">
        <SwitchLanguages color="black" />
      </div>
    </>
  );
};
export default SharedLayout;

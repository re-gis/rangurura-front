"use client";
import React, { useState } from "react";
import Link from "next/link";
import logo from "../../assets/images/rangurura_logo.png";
import ideas from "../../assets/images/ideas.svg";
import {
  CalendarDaysIcon,
  ChatBubbleBottomCenterTextIcon,
  ArrowLeftOnRectangleIcon,
  UserIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  ClipboardDocumentCheckIcon,
} from "@heroicons/react/24/outline";
import {
  RectangleGroupIcon,
  ChevronDoubleLeftIcon,
  Cog6ToothIcon,
} from "@heroicons/react/24/solid";

function Sidebar(props) {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div
      className={`sidebar fixed bg-darkblue-default text-white h-screen flex flex-col align-middle justify-between py-4 text-sm ${
        collapsed
          ? " w-20 transition-all duration-200"
          : " w-1/6 transition-all duration-200"
      }`}
    >
      <Link href="/">
        <img
          src={logo}
          alt="Rangurura"
          className={`sidebar-logo mx-auto mb-4 ${
            collapsed ? "w-2/3" : " w-1/2"
          }`}
        />
      </Link>
      <div className="navlinks space-y-4">
        <div className="flex items-center">
          <Link
            href="/"
            className="px-3 py-1 flex justify-center items-center active:bg-darkgreen-default "
          >
            <RectangleGroupIcon className="w-6 h-6 mx-5" />
            <span className={`${collapsed ? "hidden" : "block"}`}>
              Dashboard
            </span>
          </Link>
        </div>
        <div className="flex items-center">
          <Link
            href="/leaders"
            className="px-3 py-1 flex justify-center items-center active:bg-darkgreen-default  "
          >
            {" "}
            <UserIcon className="w-6 h-6 mx-5" />
            <span className={`${collapsed ? "hidden" : "block"}`}>
              All leaders
            </span>
          </Link>
        </div>
        <div className="flex items-center">
          <Link
            href="/problems"
            className="px-3 py-1 flex justify-center items-center active:bg-darkgreen-default "
          >
            {" "}
            <div className="flex mx-5">
              {" "}
              <UserIcon className="w-5 h-5" />{" "}
              <ChatBubbleOvalLeftEllipsisIcon className="w-4 h-3" />{" "}
            </div>
            <span className={`${collapsed ? "hidden" : "block"}`}>
              Problems
            </span>
          </Link>
        </div>
        <div className="flex items-center">
          <Link
            href="/calendar"
            className="px-3 py-1 flex justify-center items-center active:bg-darkgreen-default"
          >
            {" "}
            <CalendarDaysIcon className="w-6 h-6 mx-5" />
            <span className={`${collapsed ? "hidden" : "block"}`}>
              {" "}
              Calendar
            </span>
          </Link>
        </div>
        <div className="flex items-center">
          <Link
            href="/suggestions"
            className="px-3 py-1 flex justify-center items-center active:bg-darkgreen-default "
          >
            {" "}
            <img src={ideas} alt=" " className=" w-6 h-6 mx-5" />
            <span className={`${collapsed ? "hidden" : "block"}`}>
              {" "}
              Suggestions
            </span>
          </Link>
        </div>
        <div className="flex items-center">
          <Link
            href="/chats"
            className="px-3 py-1 flex justify-center items-center active:bg-darkgreen-default "
          >
            {" "}
            <ChatBubbleBottomCenterTextIcon className="w-6 h-6 mx-5" />
            <span className={`${collapsed ? "hidden" : "block"}`}> Chats</span>
          </Link>
        </div>
        <div className="flex items-center">
          <Link
            href="/events"
            className="px-3 py-1 flex justify-center items-center active:bg-darkgreen-default "
          >
            {" "}
            <ClipboardDocumentCheckIcon className="w-6 h-6 mx-5" />
            <span className={`${collapsed ? "hidden" : "block"}`}> Events</span>
          </Link>
        </div>
        <div className="flex items-center">
          <Link
            href="/settings"
            className="px-3 py-1 flex justify-center items-center active:bg-darkgreen-default "
          >
            {" "}
            <Cog6ToothIcon className="w-6 h-6 mx-5" />
            <span className={`${collapsed ? "hidden" : "block"}`}>
              {" "}
              Settings
            </span>
          </Link>
        </div>
      </div>
      <div className="settings my-5">
        <div className="flex items-center">
          <Link
            href="/account"
            className="p-3 flex justify-center items-center active:bg-darkgreen-default "
          >
            {" "}
            <img
              src={props.imgSrc}
              alt="account"
              className="w-6 h-6 mx-6 rounded-full"
            />{" "}
            <span className={`${collapsed ? "hidden" : "block"}`}>Account</span>
          </Link>
        </div>
        <div className="flex items-center">
          <button className=" p-3 flex justify-center items-center">
            <ArrowLeftOnRectangleIcon className="w-6 h-6 mx-5" />
            <span className={`${collapsed ? "hidden" : "block"}`}>Logout</span>
          </button>
        </div>
      </div>
      <button
        onClick={() => {
          setCollapsed(!collapsed);
        }}
        className={`w-6 h-6 mx-5 transition-all ease-in-out ${
          collapsed
            ? "rotate-180 ml-5 duration-150"
            : "rotate-0 ml-44 duration-150"
        }`}
      >
        <ChevronDoubleLeftIcon />
      </button>
    </div>
  );
}

export default Sidebar;

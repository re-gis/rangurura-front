import React from "react";
import Calendar from "./calendar";
import {
  ChatBubbleOvalLeftEllipsisIcon,
  UserIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";

function Overview() {
  return (
    <div>
      <div className="bg-darkblue-default h-700 w-80 block float-right mt-4 mr-12 rounded-xl">
        <div className="calendar rounded py-7">
          <Calendar />
        </div>
        <div className="dist-overview bg-white w-64 ml-7 pb-4 rounded-xl">
          <div className="title">
            <h1 className="text-lg font-bold text-black p-4">
              District Overview
            </h1>
          </div>
          <div className="dist-classes pl-6">
            <div className="w-11/12 h-10 bg-grey-default py-2 mb-3 rounded-lg">
              <h2 className="text-sm font-semibold float-left pl-4">Musanze</h2>
              <div className="icon flex gap-0 ml-3">
                <div className="user  ml-20 flex gap-x-0">
                  <UserIcon className="w-4 mb-3" />
                  <ChatBubbleOvalLeftEllipsisIcon className="w-4 mb-6" />
                </div>

                <div className=" bg-darkblue-default w-4 rounded-2xl h-4 mt-3">
                  <h3 className="text-white text-xs">3</h3>
                </div>
              </div>
            </div>
            <div className="w-11/12 h-10 bg-grey-default py-2 mb-3 rounded-lg">
              <h2 className="text-sm font-semibold float-left pl-4">Musanze</h2>
              <div className="icon flex gap-0 ml-3">
                <div className="user  ml-20 flex gap-x-0">
                  <UserIcon className="w-4 mb-3" />
                  <ChatBubbleOvalLeftEllipsisIcon className="w-4 mb-6" />
                </div>

                <div className=" bg-darkblue-default w-4 rounded-2xl h-4 mt-3">
                  <h3 className="text-white text-xs">3</h3>
                </div>
              </div>
            </div>
            <div className="w-11/12 h-10 bg-grey-default py-2 mb-3 rounded-lg">
              <h2 className="text-sm font-semibold float-left pl-4">Musanze</h2>
              <div className="icon flex gap-0 ml-3">
                <div className="user  ml-20 flex gap-x-0">
                  <UserIcon className="w-4 mb-3" />
                  <ChatBubbleOvalLeftEllipsisIcon className="w-4 mb-6" />
                </div>

                <div className=" bg-darkblue-default w-4 rounded-2xl h-4 mt-3">
                  <h3 className="text-white text-xs">3</h3>
                </div>
              </div>
            </div>
            <div className="w-11/12 h-10 bg-grey-default py-2 mb-3 rounded-lg">
              <h2 className="text-sm font-semibold float-left pl-4">Musanze</h2>
              <div className="icon flex gap-0 ml-3">
                <div className="user  ml-20 flex gap-x-0">
                  <UserIcon className="w-4 mb-3" />
                  <ChatBubbleOvalLeftEllipsisIcon className="w-4 mb-6" />
                </div>

                <div className=" bg-darkblue-default w-4 rounded-2xl h-4 mt-3">
                  <h3 className="text-white text-xs">3</h3>
                </div>
              </div>
            </div>
            <div className="w-11/12 h-10 bg-grey-default py-2 mb-3 rounded-lg">
              <h2 className="text-sm font-semibold float-left pl-4">Musanze</h2>
              <div className="icon flex gap-0 ml-3">
                <div className="user  ml-20 flex gap-x-0">
                  <UserIcon className="w-4 mb-3" />
                  <ChatBubbleOvalLeftEllipsisIcon className="w-4 mb-6" />
                </div>

                <div className=" bg-darkblue-default w-4 rounded-2xl h-4 mt-3">
                  <h3 className="text-white text-xs">3</h3>
                </div>
              </div>
            </div>
            <div className="more flex justify-end mr-6">
              <h5 className=" text-sm p-1 text-blue-500">Show more</h5>
              <ChevronRightIcon className="w-3 mt-1 text-blue-500" />
            </div>
          </div>

          <div></div>
        </div>
      </div>
    </div>
  );
}

export default Overview;

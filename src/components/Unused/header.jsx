import React from "react";
import {
  AdjustmentsHorizontalIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import { BellIcon } from "@heroicons/react/24/solid";
import profile from "@/assets/images/profile.png";
import chats from "@/assets/images/chats.svg";
import suggestions from "@/assets/images/suggestions.svg";

function header() {
  return (
    <div className=" flex">
      <div className="container">
        {/* header section */}
        <div className="header flex h-14 mt-2 justify-center items-center">
          <div className="flex mx-6 h-10">
            <button className=" text-black bg-white p-3 rounded-tl-md rounded-bl-md">
              <MagnifyingGlassIcon className="w-6 h-6" />
            </button>
            <input
              type="search"
              name="search"
              id="search"
              placeholder="Search here ... "
              className="p-2 pl-44 rounded-tr-md rounded-br-md"
            />
          </div>
          <button
            id="settings"
            className="p-1 ml-4 mr-10 bg-darkblue-default text-white rounded-md "
          >
            <AdjustmentsHorizontalIcon className="w-9 h-8" />
          </button>
          <button
            id="notifications"
            className="p-1 ml-28 mr-5  block bg-darkblue-default text-white rounded-md "
          >
            <BellIcon className="w-9 h-8" />
          </button>
          <button
            id="notifications"
            className="p-2 m-1 bg-white text-black rounded-md flex"
          >
            <img src={suggestions} alt="suggestions" />
          </button>
          <button
            id="notifications"
            className="p-2 m-1 bg-white text-black rounded-md flex"
          >
            <img src={chats} alt="suggestions" />
          </button>

          <div className="profile w-60 border-4 p-1 rounded-md text-center ml-16">
            <img src={profile} alt="profile" className=" float-left mt-2" />
            <p>Isamaza Sylvin</p>
            <p>Minister of Health</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default header;

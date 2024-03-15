import React, { useState } from "react";
import logo from "@/assets/images/logo-dark (1).png";
import Link from "next/link";
import Image from "next/image";

const NewEvent = () => {
  return (
    <div className="w-full h-full bg-white rounded-xl h-full w-full mt-[-2rem]">
      <div className="flex justify-center cursor-pointer">
        <Link href="/">
          <Image
            src={logo}
            alt="Logo"
            width={40}
            height={40}
            className="mt-8"
          />
        </Link>
      </div>
      <h3 className="text-[#001833] font-bold text-2xl text-center">
        Create Event
      </h3>
      <div className="w-full flex-col flex justify-center items-center">
        <form className=" w-full flex flex-col gap-2 justify-center md:px-3 px-2 pt-2">
          <div className="main_input">
            <div className="flex-col flex-1">
              <label htmlFor="id" className="font-bold">
                Event Name
              </label>
              <input
                type="text"
                className="sub_input"
                placeholder="Inama"
                id="id"
                name="id"
              />
            </div>
            <div className="flex-col flex-1">
              <label htmlFor="id" className="font-bold">
                Organisation Level
              </label>
              <input
                type="text"
                className="sub_input"
                placeholder="Umurenge"
                id="id"
                name="id"
              />
            </div>
          </div>
          <div className="main_input">
            <div className="flex-col flex-1">
              <label htmlFor="id" className="font-bold">
                Start Date
              </label>
              <input type="date" className="sub_input" id="id" name="id" />
            </div>
            <div className="flex-col flex-1">
              <label htmlFor="id" className="font-bold">
                End Date
              </label>
              <input type="date" className="sub_input" id="id" name="id" />
            </div>
          </div>
          <div className="main_input">
            <div className="flex-col flex-1">
              <label htmlFor="id" className="font-bold">
                Location
              </label>
              <input
                type="text"
                className="sub_input"
                placeholder="Ibiro by'umurenge"
                id="id"
                name="id"
              />
            </div>
            <div className="flex-col flex-1 ">
              <label htmlFor="akarere" className="font-bold">
                Categories
              </label>
              <select
                name="akarere"
                id="akarere"
                className="sub_input"
              ></select>
            </div>
          </div>
          <div className="main_input">
            <div className="flex-col flex-1">
              <label htmlFor="id" className="font-bold">
                Start Time
              </label>
              <input type="time" className="sub_input" id="id" name="id" />
            </div>
            <div className="flex-col flex-1">
              <label htmlFor="id" className="font-bold">
                End Time
              </label>
              <input type="time" className="sub_input" id="id" name="id" />
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <label className="font-semibold text-black">Description</label>
            <textarea
              rows={2}
              placeholder="Enter Description"
              className="border-[#C3C3C3] border-2 rounded-md p-2"
              style={{ resize: "none" }}
            ></textarea>
          </div>
          <div className="flex items-center justify-center">
            <button
              type="button"
              className="btn_primary py-2 rounded-md px-10 text-white"
            >
              Create Event
            </button>
          </div>
        </form>
      </div>

      <div></div>
    </div>
  );
};
export default NewEvent;

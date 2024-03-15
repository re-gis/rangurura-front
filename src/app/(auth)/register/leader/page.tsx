import React, { useState } from "react";
import logo from "@/assets/images/logo-dark (1).png";
import Link from "next/link";
import Image from "next/image";

const Register = () => {
  return (
    <section className="flex justify-center w-full bg-[#EEF3F9] h-full p-10">
      <div className="bg-white rounded-xl md:w-[60%] max-w-[550px] pb-10  w-full">
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
          Gufungura Konti
        </h3>
        <div className="w-full flex-col flex justify-center items-center">
          <div className="flex flex-row justify-center  md:w-[80%] w-full px-2 md:px-0 md:gap-10 gap-0 py-6">
            <div className="flex flex-col w-full">
              <div className="flex flex-row relative">
                <div className="text-yellow-400 bg-[#001833] w-[20px] h-[20px] flex items-center justify-center rounded-full z-50 ">
                  1
                </div>
                <div className="bg-[#001833] h-[5px]  w-full flex-1 absolute   rounded-md mt-2"></div>
              </div>
              <p className="text-xs md:hidden block">Address</p>
              <p className="text-xs md:block hidden">Personal info</p>
            </div>
            <div className="md:hidden flex flex-col items-center justify-center">
              <button className="btn_primary rounded-full text-white w-6">
                2
              </button>
              <p className="text-xs">Personal info</p>
            </div>
            <div className="flex flex-col gap-1 w-full">
              <div className="flex flex-row relative ">
                <div className="bg-[#001833]  w-full flex-1 h-[5px] rounded-md mt-2 "></div>
                <div className="text-white bg-[#001833] w-[20px] h-[20px] flex items-center justify-center rounded-full absolute right-0   top-0">
                  2
                </div>
                <div className="text-white md:hidden bg-[#001833] w-[20px] h-[20px] flex items-center justify-center rounded-full absolute right-0   top-0">
                  3
                </div>
              </div>
              <p className="text-xs text-right mt-2">Confirmation</p>
            </div>
          </div>
          <form
            className=" w-full flex flex-col gap-5 justify-center md:px-10 px-6 py-6"
            // onSubmit={handleSubmit}
          >
            <div className="main_input">
              <div className="flex-col flex-1">
                <label htmlFor="numbero_indangamuntu">
                  Numero y'indangamuntu
                </label>
                <input
                  type="text"
                  className="sub_input"
                  placeholder="2345678"
                  id="numbero_indangamuntu"
                  //   value={id}
                  //   onChange={(e) => setId(e.target.value)}
                />
              </div>
            </div>
            <div className="main_input">
              <div className="flex-col flex-1 ">
                <label htmlFor="intara">Intara</label>
                <select
                  name="intara"
                  id="intara"
                  className="sub_input"
                  //   onChange={(e) => setSelectedProvince(e.target.value)}
                >
                  {/* {address.items.map((province,i) => 
                    <option key={i} value={province.name}>{province.name}</option>
                  )} */}
                </select>
              </div>
            </div>
            <div className="main_input">
              <div className="flex-col flex-1">
                <label htmlFor="ijambo_banga">ijambo banga</label>
                <input
                  type="password"
                  className="sub_input"
                  placeholder="****************"
                  id="ijambo_banga"
                  name="ijambo_banga"
                />
              </div>
              <div className="flex-col flex-1">
                <label htmlFor="kwemeza_ijambo_banga">
                  Kwemeza ijambo banga
                </label>
                <input
                  type="password"
                  className="sub_input"
                  placeholder="*******************"
                  id="kwemeza_ijambo_banga"
                  name="kwemeza_ijambo_banga"
                />
              </div>
            </div>
            <div className="flex gap-3">
              <input type="checkbox" name="ndemera" id="ndemera" />
              <label htmlFor="ndemera">Ndemeza ko amakuru natanze ariyo</label>
            </div>
            <div className="flex items-center justify-center">
              <button className="btn_primary py-2 rounded-md px-10 text-white">
                Gukomeza
              </button>
            </div>
            <div className="flex items-center justify-center py-2">
              <div>
                <p>
                  Usanzwe ufite konti{" "}
                  <Link href="/login" className="text-[#368EF1]">
                    Injira
                  </Link>
                </p>
              </div>
            </div>
          </form>
        </div>

        <div></div>
      </div>
    </section>
  );
};
export default Register;

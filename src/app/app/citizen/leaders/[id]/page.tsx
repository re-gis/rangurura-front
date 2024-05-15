"use client";
import React, { useState, useEffect } from "react";
import { CiSquareChevLeft } from "react-icons/ci";
import { usePathname, useRouter } from "next/navigation";
import { ClipLoader } from "react-spinners";
import { useGet } from "@/utils/funcs/useGet";
import Image from "next/image";
import personImg from "@/assets/images/personImg.png";
export default function Leader() {
  const navigate = useRouter();
  const route = usePathname();
  const leaderId = route.split("/")[4];
  console.log(leaderId);
  const { data: leader, loading } = useGet({ src: `/leaders/${leaderId}` });
  console.log(leader);

  return (
    <div className="w-full md:h-[90%] p-8">
      <div className="w-full flex justify-start">
        <button className="cursor-pointer" onClick={() => navigate.back()}>
          <CiSquareChevLeft size={24} color="#000" />
        </button>
      </div>

      {loading ? (
        <div className="w-full flex justify-center items-center">
          <ClipLoader size={24} color="black" />
        </div>
      ) : (
        <div className="w-full flex flex-col items-center justify-center bg-white rounded-lg md:px-[10vw] h-[90%] mt-10">
          <div className="w-full flex justify-start gap-10">
            <Image
              src={personImg}
              alt=""
              width={100}
              height={100}
              className="w-1/3 rounded-lg"
            />
            <div className="flex flex-col gap-3 items-start">
              <h4 className="text-3xl font-extrabold">ISAMAZA Sylvin</h4>
              <h4 className="text-sm font-extrabold">+250788460119</h4>
              <h4 className="text-sm font-extrabold">sylvinisa@gmail.com</h4>
              <button className="text-[80%] self-start bg-[#0075FF] rounded-md py-2 px-3 text-white">
                Message
              </button>
            </div>
          </div>
          <p className="text-[80%] mt-8">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever
          </p>
          <div className="mt-10 w-full flex justify-start"></div>
        </div>
      )}
    </div>
  );
}

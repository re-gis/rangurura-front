"use client";
import React from "react";
import health from "../../assets/vector/health 3.png";
import education from "../../assets/vector/education 8.png";
import id from "../../assets/vector/id-card 8.png";
import handshake from "../../assets/vector/Handshake.png";
import industry from "../../assets/vector/Vector.png";
import problemSugge from "../../assets/images/leftSide.png";
import chatbox from "../../assets/vector/chat-box 2.png";
import Link from "next/link";
import Image from "next/image";
import { useTranslation } from "react-i18next";

const Report = () => {
  const { t, i18n } = useTranslation();

  return (
    <section
      className="flex flex-col justify-center items-center gap-6"
      id="qns"
    >
      <div className="flex flex-col w-full bg-[#20603D] pb-[10vh]">
        <div className="flex flex-col gap-4 items-center justify-center p-6">
          <h3 className="max-[575px]:text-[20px] max-[420px]:text-[15px] font-bold text-[2.4rem] text-[#ffffff]">
            {t("tips_section.prob_sugg")}
          </h3>
          <p className="font-light text-white">
            {t("tips_section.prob_sugg_desc")}
          </p>
        </div>

        <h5 className="ml-6 md:ml-[14vw] text-white font-bold text-xl mt-4">
          {t("tips_section.prob_tip_title")}
        </h5>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-x-0 px-[10vw]">
          <div className="md:w-full flex justify-center items-center mt-[-1rem]">
            <Image src={problemSugge} className="md:w-[80%]  " alt="" />
          </div>

          <div className="grid grid-cols-1 gap-y-10 text-white ml-[3rem] md:ml-0">
            <div className="flex flex-col gap-2 w-full md:ml-[-8rem]">
              <h3 className="font-bold flex w-full gap-6 items-center">
                {" "}
                <span className="ml-[-4rem] w-[30px] h-[30px] bg-white rounded-[100%] text-black flex items-center justify-center  ">
                  1.
                </span>{" "}
                {t("tips_section.prob_tip1")}
              </h3>
              <p className="text-sm">{t("tips_section.prob_tip1_desc")}</p>
            </div>
            <div className="flex flex-col gap-2 w-full">
              <h3 className="font-bold flex w-full gap-6 items-center">
                {" "}
                <span className="ml-[-4rem] w-[30px] h-[30px] bg-white rounded-[100%] text-black flex items-center justify-center  ">
                  2.
                </span>{" "}
                {t("tips_section.prob_tip2")}
              </h3>
              <p className="text-sm">{t("tips_section.prob_tip2_desc")}</p>
            </div>
            <div className="flex flex-col gap-2 w-full">
              <h3 className="font-bold flex w-full gap-6 items-center">
                {" "}
                <span className="ml-[-4rem] w-[30px] h-[30px] bg-white rounded-[100%] text-black flex items-center justify-center  ">
                  3.
                </span>{" "}
                {t("tips_section.prob_tip3")}
              </h3>
              <p className="text-sm">{t("tips_section.prob_tip3_desc")}</p>
            </div>
            <div className="flex flex-col gap-2 w-full md:ml-[-8rem]">
              <h3 className="font-bold flex w-full gap-6 items-center">
                {" "}
                <span className="ml-[-4rem] w-[30px] h-[30px] bg-white rounded-[100%] text-black flex items-center justify-center ">
                  4.
                </span>{" "}
                {t("tips_section.prob_tip4")}
              </h3>
              <p className="text-sm">{t("tips_section.prob_tip4_desc")}</p>
            </div>
          </div>
        </div>
        <h5 className="ml-6 md:ml-[14vw] text-white font-bold text-xl mt-4 my-4">
          {t("tips_section.sugg_tip_title")}
        </h5>
        <div className="flex flex-col gap-4 px-4 ml-[6rem] md:ml-[18vw] text-white">
          <div className="flex flex-col gap-2 w-full">
            <h3 className="font-bold flex w-full gap-6 items-center">
              {" "}
              <span className="ml-[-4rem] w-[30px] h-[30px] bg-white rounded-[100%] text-black flex items-center justify-center  ">
                1.
              </span>{" "}
              {t("tips_section.sugg_tip1")}
            </h3>
            <p className="text-sm md:w-1/2 w-[90%]">
              {" "}
              {t("tips_section.sugg_tip1_desc")}
            </p>
          </div>
          <div className="flex flex-col gap-2 w-full">
            <h3 className="font-bold flex w-full gap-6 items-center">
              {" "}
              <span className="ml-[-4rem] w-[30px] h-[30px] bg-white rounded-[100%] text-black flex items-center justify-center  ">
                2.
              </span>{" "}
              {t("tips_section.sugg_tip2")}
            </h3>
            <p className="text-sm md:w-1/2 w-[90%]">
              {" "}
              {t("tips_section.sugg_tip2_desc")}
            </p>
          </div>
        </div>

        <div className="w-full flex justify-center items-center mt-10 gap-8">
          <Link
            href={"/suggestion"}
            className="w-[17rem] py-3 border-2 border-[#2A94F4] flex items-center justify-center text-white font-semibold  rounded-lg bg-[#2A94F4] hover:bg-transparent"
          >
            {t("tips_section.sugg_btn")}
          </Link>
          <Link
            href={"/problem"}
            className="w-[17rem] py-3 border-2 border-white hover:border-[#2A94F4] flex items-center justify-center text-white font-semibold  rounded-lg hover:bg-[#2A94F4]"
          >
            {t("tips_section.prob_btn")}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Report;

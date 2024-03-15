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

const Report = () => {
  return (
    <section
      className="flex flex-col justify-center items-center gap-6"
      id="qns"
    >
      <div className="flex flex-col w-full bg-[#20603D] pb-[10vh]">
        <div className="flex flex-col gap-4 items-center justify-center p-6">
          <h3 className="max-[575px]:text-[20px] max-[420px]:text-[15px] font-bold text-[2.4rem] text-[#ffffff]">
            Problem and Suggestion
          </h3>
          <p className="font-light text-white">
            Rangurura a virtual assistant which will help you to report your
            problem and give your suggestion{" "}
          </p>
        </div>

        <h5 className="ml-6 md:ml-[14vw] text-white font-bold text-xl mt-4">
          Problem reporting tips
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
                Describe the problem precisely
              </h3>
              <p className="text-sm">
                Start by providing a clear and concise description of the
                problem. Avoid unnecessary details or jargon. State the problem
                in a single sentence if possible. Avoid using accusatory or
                aggressive language. Instead, focus on describing the problem
                objectively. Be respectful in your communication, even if you're
                frustrated with the issue
              </p>
            </div>
            <div className="flex flex-col gap-2 w-full">
              <h3 className="font-bold flex w-full gap-6 items-center">
                {" "}
                <span className="ml-[-4rem] w-[30px] h-[30px] bg-white rounded-[100%] text-black flex items-center justify-center  ">
                  2.
                </span>{" "}
                Explain the impact
              </h3>
              <p className="text-sm">
                Describe how the problem is affecting you or others. Explain the
                consequences or negative outcomes of the issue. If it's a
                recurring problem, mention how frequently it occurs. If
                applicable, attach screenshots, photos, or documents that
                illustrate the problem. Provide any supporting evidence that can
                help those addressing the issue understand it better
              </p>
            </div>
            <div className="flex flex-col gap-2 w-full">
              <h3 className="font-bold flex w-full gap-6 items-center">
                {" "}
                <span className="ml-[-4rem] w-[30px] h-[30px] bg-white rounded-[100%] text-black flex items-center justify-center  ">
                  3.
                </span>{" "}
                Identify any attempts to resolve
              </h3>
              <p className="text-sm">
                Mention if you've tried any troubleshooting steps or solutions
                on your own. Explain the results of these attempts, whether they
                were successful or unsuccessful.
              </p>
            </div>
            <div className="flex flex-col gap-2 w-full md:ml-[-8rem]">
              <h3 className="font-bold flex w-full gap-6 items-center">
                {" "}
                <span className="ml-[-4rem] w-[30px] h-[30px] bg-white rounded-[100%] text-black flex items-center justify-center ">
                  4.
                </span>{" "}
                Specify your Expectations
              </h3>
              <p className="text-sm">
                Clearly state what you expect as a resolution to the problem. Be
                realistic in your expectations. If you're uncertain about the
                solution, express your desire for guidance or assistance in
                resolving the issue.
              </p>
            </div>
          </div>
        </div>
        <h5 className="ml-6 md:ml-[14vw] text-white font-bold text-xl mt-4 my-4">
          Suggestion reporting tips
        </h5>
        <div className="flex flex-col gap-4 px-4 ml-[6rem] md:ml-[18vw] text-white">
          <div className="flex flex-col gap-2 w-full">
            <h3 className="font-bold flex w-full gap-6 items-center">
              {" "}
              <span className="ml-[-4rem] w-[30px] h-[30px] bg-white rounded-[100%] text-black flex items-center justify-center  ">
                1.
              </span>{" "}
              Describe your suggestion concisely:
            </h3>
            <p className="text-sm md:w-1/2 w-[90%]">
              {" "}
              Start by providing a clear and concise description of the
              suggestion. Avoid unnecessary details or jargon.State the
              suggestion in a single sentence if possible.Avoid using accusatory
              or aggressive language. Instead, focus on describing the
              suggestion objectively.
            </p>
          </div>
          <div className="flex flex-col gap-2 w-full">
            <h3 className="font-bold flex w-full gap-6 items-center">
              {" "}
              <span className="ml-[-4rem] w-[30px] h-[30px] bg-white rounded-[100%] text-black flex items-center justify-center  ">
                2.
              </span>{" "}
              Emphasize the Value:
            </h3>
            <p className="text-sm md:w-1/2 w-[90%]">
              {" "}
              In addition to clarity and conciseness, highlight the value of
              your suggestion. Clearly articulate the positive impact or
              benefits it brings without resorting to unnecessary details or
              aggressive language. A brief, value-focused statement enhances the
              appeal and consideration of your suggestion
            </p>
          </div>
        </div>

        <div className="w-full flex justify-center items-center mt-10 gap-8">
          <Link
            href={"/suggestion"}
            className="w-[17rem] py-3 border-2 border-[#2A94F4] flex items-center justify-center text-white font-semibold  rounded-lg bg-[#2A94F4] hover:bg-transparent"
          >
            Give Suggestion
          </Link>
          <Link
            href={"/problem"}
            className="w-[17rem] py-3 border-2 border-white hover:border-[#2A94F4] flex items-center justify-center text-white font-semibold  rounded-lg hover:bg-[#2A94F4]"
          >
            Report Problem
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Report;

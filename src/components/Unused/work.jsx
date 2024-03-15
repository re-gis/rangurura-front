import React from "react";
import logo from "../../assets/images/rangurura-removebg-preview 6.png";
import privacy from "../../assets/images/privacy-private-icon 2.png";
import message from "../../assets/images/suggestion.svg";
import track from "../../assets/images/transparent.svg";
import work from "@/assets/images/work.svg";
import Image from "next/image";
import flash from "@/assets/images/flash 3.svg";
import people from "@/assets/images/people.svg";

const Work = () => {
  return (
    <section className="bg-[#F4F4F4]  text-black flex flex-col justify-center items-center gap-4 p-6 pb-10">
      <h3 className="max-[400px]:text-[30px] font-bold text-[40px] text-[#000000]">
        How we work
      </h3>
      <p className="md:text-base text-xs">
        Make a difference in your community today. Report your concerns, and let
        us help you build a better tomorrow with Rangurura
      </p>
      <div className="w-full flex flex-col md:flex-row justify-evenly">
        <div className="flex flex-col md:gap-24 gap-6 py-4 justify-center items-center mt-3 md:mt-12">
          <div className="flex justify-center items-center">
            <Image src={work} alt="" className="md:w-[30rem] w-[24rem]" />
          </div>
        </div>
        <div className="w-full md:w-[45%] grid grid-cols-1 md:grid-cols-2 gap-x-5">
          {/* <div className='max-[400px]:flex-col flex flex-row justify-center items-start md:gap-16 gap-6 md:px-16 px-0'> */}
          {/* <div className="flex flex-col md:mt-32 gap-6 md:pt-[5rem]"> */}
          {/* <div className='flex flex-col md:gap-12 md:mt-32 gap-6'> */}
          <div className="flex flex-col md:gap-4 gap-1 justify-center items-start">
            {/* <Image src={flash} alt="" className="md:w-8 w-8 " /> */}
            <h4 className="font-bold md:text-md text-sm">Faster</h4>
            <p className="md:text-base text-xs">
              Problem reach to the destination safe and faster
            </p>
          </div>
          <div className="flex flex-col gap-4 justify-center items-start">
            {/* <Image src={privacy} alt="" className="md:w-8 w-8 " /> */}
            <h4 className="font-bold md:text-md text-sm">Privacy</h4>
            <p className="md:text-base text-xs">
              We ensure privacy by hiding the reporter’s information
            </p>
          </div>
          {/* </div> */}
          {/* <div className="flex flex-col md:gap-12 md:mt-20 gap-6 md:pt-[8rem]"> */}
          <div className="flex flex-col md:gap-4 gap-1 justify-center items-start">
            {/* <Image src={message} alt="" className="md:w-9 w-5" /> */}
            <h4 className="font-bold md:text-md text-sm">Report problems</h4>
            <p className="md:text-base text-xs">
              you can easily report it to your local government through our
              platform.
            </p>
          </div>
          <div className="flex flex-col md:gap-4 gap-1 justify-center items-start">
            {/* <Image src={track} alt="" className="md:w-9 w-5" /> */}
            <h4 className="font-bold md:text-md text-sm">
              Transparent process
            </h4>
            <p className="md:text-base text-xs">
              We ensure transparency by tracking the progress of your reports.
            </p>
          </div>
          {/* </div> */}
          <div className="flex flex-col justify-center items-start gap-4">
            {/* <Image src={people} alt="" className="md:w-8 w-8 " /> */}
            <h4 className="font-bold md:text-md text-sm">
              Community Engagement
            </h4>
            <p className="w-full md:text-base text-xs">
              Join hands with fellow citizens by reporting your concern
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;

import React from "react";
import frame3 from "../../assets/Frames/Frame 3.png";
import frame4 from "../../assets/Frames/Frame 4.png";
import frame5 from "../../assets/Frames/Frame 5.png";
import heart from "../../assets/images/heart.png";
import Image from "next/image";
import ubumweIcon from "@/assets/images/Handshake.png";
import idIcon from "@/assets/images/prob.png";

const Problem = () => {
  const imageLink = [{ image: frame3 }, { image: frame4 }, { image: frame5 }];
  return (
    <section>
      <div className="bg-white md:h-[70vh] text-black flex flex-col gap-10 items-center p-10 pt-5">
        <h3 className="max-[420px]:text-[30px] font-bold text-[2.4rem] text-[#000000]">
          Featured Problem
        </h3>
        <p className="text-center">
          Enhancing Citizen-Leader Communication for a Stronger Society — Dive
          into solutions that bridge the gap and empower citizens to connect
          more effectively with their leaders."
        </p>
        <div className="flex flex-col md:flex-row gap-5 justify-center items-center w-fit md:overflow-auto overflow-hidden">
          <div className="p-4 py-6 border-[1px] rounded-[10px] bg-[#F0F0F0]">
            <p className="text-[80%]">
              Sometimes, it's hard for people like me to get healthcare that's
              just right for us. The way things work now doesn't give us
              personalized help, and I think we need new ideas. Using innovative
              solutions can make healthcare better, so we get the right care and
              our health information is kept safe."
            </p>
            <div className="flex flex-row items-center mt-4">
              <Image src={heart} className="w-8 h-8 my-2 " alt="" />
              <h6 className="font-bold px-4">Ubuzima</h6>
            </div>
          </div>
          <div className="p-4 py-6 border-[1px] rounded-[10px] bg-[#F0F0F0]">
            <p className="text-[80%]">
              Getting my identity card has been a real challenge. The current
              process is complicated and often requires a lot of time. I believe
              we need better ways to make this easier for everyone, with
              innovative solutions that simplify the journey .
            </p>
            <div className="flex flex-row items-center mt-4">
              <Image src={idIcon} className="w-8 h-8 my-2 " alt="" />
              <h6 className="font-bold px-4">Irangamimerere</h6>
            </div>
          </div>
          <div className="p-4 py-6 border-[1px] rounded-[10px] bg-[#F0F0F0]">
            <p className="text-[80%]">
              Living in an area affected by wars is tough. It's not just about
              the danger; it's also the daily struggles like finding basic
              necessities and staying connected with loved ones. We urgently
              need practical solutions to make life safer and more manageable in
              conflict zones,
            </p>
            <div className="flex flex-row items-center mt-4">
              <Image src={ubumweIcon} className="w-8 h-8 my-2 " alt="" />
              <h6 className="font-bold px-4">Ubumwe</h6>
            </div>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </div>
    </section>
  );
};

export default Problem;

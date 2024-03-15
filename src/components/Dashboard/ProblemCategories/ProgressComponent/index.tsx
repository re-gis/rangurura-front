"use client";

import Image from "next/image";
import heart from "@/assets/images/heart.png";
import education from "@/assets/images/education.png";
import hands from "@/assets/images/Handshake.png";
import prob from "@/assets/images/prob.png";
import industry from "@/assets/images/industry.png";
import ProgressBar from "@/components/core/Progressbar";

interface Props {
  className?: string;
}
const ProgressComponent = ({ className }: Props) => {
  return (
    <div className={`w-full flex flex-col ${className} gap-3`}>
      <div className="w-full flex justify-between items-center h-8 gap-3">
        <Image src={heart} alt="" className="w-6 h-6 mt-1" />
        <ProgressBar size="md" color="#F52929" value={75} label="270" />
      </div>
      <div className="w-full flex justify-between items-center h-8 gap-3">
        <Image src={education} alt="" className="w-6 h-6 mt-1" />
        <ProgressBar size="md" color="#001833" value={8} label="30" />
      </div>
      <div className="w-full flex justify-between items-center h-8 gap-3">
        <Image src={prob} alt="" className="w-6 h-6 mt-1" />
        <ProgressBar size="md" color="#20603D" value={18} label="100" />
      </div>
      <div className="w-full flex justify-between items-center h-8 gap-3">
        <Image src={hands} alt="" className="w-6 h-6 mt-1" />
        <ProgressBar size="md" color="#000" value={93} label="100" />
      </div>
      <div className="w-full flex justify-between items-center h-8 gap-3">
        <Image src={industry} alt="" className="w-6 h-6 mt-1" />
        <ProgressBar size="md" color="#F52929" value={75} label="270" />
        {/* <ProgressBar size="md" color="#F52929" value={75} label="270"/> */}
      </div>
      <div className="w-full flex justify-between items-center h-8 gap-3">
        <Image src={education} alt="" className="w-6 h-6 mt-1" />
        <ProgressBar size="md" color="#001833" value={8} label="30" />
      </div>
    </div>
  );
};

export default ProgressComponent;

"use client";
import Image from "next/image";
import { FaRegCheckSquare } from "react-icons/fa";
import { PiClockFill } from "react-icons/pi";
import { FaRegCalendar } from "react-icons/fa6";
import { GiVote } from "react-icons/gi";
import { GrExpand } from "react-icons/gr";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";
import { Key, useMemo, useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import Header from "../Header";

type TimeFrame = {
  key: string;
  label: string;
};
const Activity = () => {
  const timeFrame = [
    {
      key: "day",
      label: "Daily",
    },
    {
      key: "week",
      label: "Weekly",
    },
    {
      key: "month",
      label: "Monthly",
    },
    {
      key: "year",
      label: "Yearly",
    },
  ];

  const [activeTimeFrame, setActiveTimeFrame] = useState<TimeFrame>(
    timeFrame[0],
  );
  const activityData = useMemo(() => {
    return {
      solvedProblems: 20,
    };
  }, [activeTimeFrame]);

  return (
    <>
      <Header header="Activity Overview" />
      <div className="w-full md:h-[80%] grid grid-cols-2 gap-y-4 gap-x-4">
        <div className="w-full h-full bg-[#00D56040] border-b-[3px] rounded-t-lg border-b-[#00D560] flex flex-col items-center justify-center">
          <FaRegCheckSquare size={18} />
          <h5 className="text-[#000] font-semibold mt-1">Solved problems</h5>
          <h4 className="text-[#000] font-extr text-[17px]">{20}</h4>
        </div>
        <div className="w-full md:h-full bg-[#F5292940] border-b-[3px] rounded-t-lg border-b-[#F52929] flex flex-col items-center justify-center">
          <PiClockFill size={20} />
          <h5 className="text-[#000] font-semibold mt-1">Unsolved problems</h5>
          <h4 className="text-[#000] font-extr text-[17px]">{32}</h4>
        </div>
        <div className="w-full md:h-full bg-[#00A1DE52] border-b-[3px] rounded-t-lg border-b-[#00A1DE] flex flex-col items-center justify-center">
          <FaRegCalendar size={18} />
          <h5 className="text-[#000] font-semibold mt-1">Events</h5>
          <h4 className="text-[#000] font-extr text-[17px]">{40}</h4>
        </div>
        <div className="w-full md:h-full bg-[#FAD20169] border-b-[3px] rounded-t-lg border-b-[#FAD201] flex flex-col items-center justify-center">
          <GiVote size={23} />
          <h5 className="text-[#000] font-semibold mt-1">suggestions</h5>
          <h4 className="text-[#000] font-extr text-[17px]">{20}</h4>
        </div>
      </div>
    </>
  );
};
export default Activity;

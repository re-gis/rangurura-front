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
import Header from "../../Header";
import Link from "next/link";
import { useGet } from "@/utils/funcs/useGet";

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


  const { data: solvedProblemsData, loading: solvedProblemsLoading } =
    useGet({ src: "/user-dashboard/number_of_probs_solvedforMe" });

  const { data: unsolvedProblemsData, loading: unsolvedProblemsLoading } =
    useGet({ src: "/user-dashboard/number_of_pending_probsForMe" });

  return (
    <>
      <Header header="Overview" style="font-bold text-md" />
      <div className="w-full md:h-[80%] flex flex-col gap-5">
        <div className="w-full h-1/2 gap-2 flex flex-col md:flex-row">
          <div className="w-full h-full bg-[#00d5605f] border-b-[4px] rounded-t-lg border-b-[#00D560] flex flex-col items-center justify-center">
            <FaRegCheckSquare size={18} />
            <h5 className="text-[#000] text-sm text-center font-semibold mt-1">
              Marked as Solved problems
            </h5>
            {solvedProblemsLoading ? (
              <p>Loading...</p>
            ) : (
              <h4 className="text-[#000] font-extr text-[17px]">
                {solvedProblemsData?.data}
              </h4>
            )}
          </div>
          <div className="w-full md:h-full bg-[#fad0016c] border-b-[4px] rounded-t-lg border-b-[#FAD201] flex flex-col items-center justify-center">
            <PiClockFill size={20} />
            <h5 className="text-[#000] text-sm text-center font-semibold mt-1">
              Unsolved problems
            </h5>
            {unsolvedProblemsLoading ? (
              <p>Loading...</p>
            ) : (
              <h4 className="text-[#000] font-extr text-[17px]">
                {unsolvedProblemsData?.data}
              </h4>
            )}
          </div>
        </div>
        <h6 className="w-full px-2 text-center text-sm font-bold leading-4">
          Don't forget to mark your suggestions and problems as solved if
          they've been addressed! 🌟 Your input makes a difference!
        </h6>
        <div className="w-full flex justify-between px-2">
          <Link
            href={"/app/citizen/problems"}
            className="py-3 w-full md:w-[48%] flex justify-center font-bold rounded-sm text-sm bg-[#00d5605f]"
          >
            View all problems
          </Link>
          <Link
            href={"/app/citizen/suggestions"}
            className="py-3 w-full md:w-[48%] flex justify-center font-bold rounded-sm text-sm bg-[#fad0016c]"
          >
            View all suggestions
          </Link>
        </div>
      </div>
    </>
  );
};
export default Activity;

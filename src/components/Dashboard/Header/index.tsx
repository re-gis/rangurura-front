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

type TimeFrame = {
  key: string;
  label: string;
};
const Header = ({
  header,
  showExpand,
  style,
}: {
  header: string;
  showExpand?: string;
  style?: string;
}) => {
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
      <header className="w-full flex justify-between items-center my-3 mb-5">
        <h3 className={`${style} font-light text-[#242222]`}>{header}</h3>

        <div className="flex items-center justify-center gap-4">
          <Dropdown>
            <DropdownTrigger className="bg-[#D9D9D9]">
              <Button className={"px-3"} variant="bordered">
                {activeTimeFrame.label}
                <MdKeyboardArrowDown />
              </Button>
            </DropdownTrigger>
            <DropdownMenu items={timeFrame} className="">
              {(item: TimeFrame) => (
                <DropdownItem
                  onClick={() => setActiveTimeFrame(item)}
                  key={item.key}
                  color={item.key === "delete" ? "danger" : "default"}
                  className={item.key === "delete" ? "text-danger" : ""}
                >
                  {item.label}
                </DropdownItem>
              )}
            </DropdownMenu>
          </Dropdown>
          {showExpand && (
            <span className="cursor-pointer">
              <GrExpand size={11} />
            </span>
          )}
        </div>
      </header>
    </>
  );
};
export default Header;

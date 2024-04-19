"use client";

import Activity from "@/components/Dashboard/Activity/Leader";
import ProblemsCategories from "@/components/Dashboard/ProblemCategories";
import dayjs from "dayjs";
import { useState } from "react";
import { Calendar } from "@mantine/dates";

const Page = () => {
  const [selected, setSelected] = useState<any>([]);
  const handleSelect = (date: Date) => {
    setSelected(() => [date]);
  };
  // };

  return (
    <div className="w-full md:h-[90%] pt-4">
      <h5 className="font-extrabold text-[1.6rem] my-3">Calendar</h5>
      <div className="w-full md:h-[44%] flex flex-col md:flex-row justify-between">
        <div className="my-2 md:my-0 md:w-[32%] bg-white rounded-lg px-3 flex justify-center">
          <Calendar
            getDayProps={(date: any) => ({
              selected: selected.some((s: any) =>
                dayjs(date).isSame(s, "date"),
              ),
              onClick: () => handleSelect(date),
            })}
            className="w-full h-full"
          />
        </div>
        <div className="my-2 md:my-0 md:w-[32%] bg-white rounded-lg px-3">
          <Activity />
        </div>
        <div className="my-2 md:my-0 md:w-[32%] bg-white rounded-lg px-3">
          <ProblemsCategories />
        </div>
      </div>
    </div>
  );
};

export default Page;

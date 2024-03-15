"use client";

import Activity from "@/components/Dashboard/Activity/Citizen";
import CustomTable from "@/components/Dashboard/Activity/SummaryTable";
import EventsTable from "@/components/core/Tables/Events";
import DistrictOverview from "@/components/Dashboard/DistrictsOverview";
import ProblemsCategories from "@/components/Dashboard/ProblemCategories";
import ReportProblems from "@/components/Dashboard/Reports";
import { events } from "@/constants";
import Link from "next/link";
import { FaAngleRight } from "react-icons/fa";

const Page = () => {
  
  return (
    <section className="w-full md:h-[90%] flex flex-col justify-between md:gap-0 mt-4">
      <div className="w-full h-[47%] flex flex-col md:flex-row justify-between gap-5 md:gap-0">
        <div className="md:w-[66%] md:h-full bg-white rounded-lg">
          <CustomTable />
        </div>
        <div className="md:w-[32%] bg-white rounded-lg py-3 px-3 md:py-0 mt-3 md:mt-0">
          <Activity />
        </div>
      </div>
      <div className="w-full md:h-[50%] flex flex-col bg-white">
        <div className="w-full flex justify-between px-6 items-center">
          <h1 className="text-2xl w-4/5 font-bold pt-2">Events</h1>
          <Link
            href={"/app/citizen/events"}
            className="text-sm text-[#0075FF] flex items-center gap-3"
          >
            View More <FaAngleRight />
          </Link>
        </div>
        <EventsTable
          dataProps={events.slice(0, 5)}
          showPagination={false}
          styles="h-full"
        />
      </div>
    </section>
  );
};

export default Page;

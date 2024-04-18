"use client";

import Activity from "@/components/Dashboard/Activity";
import CustomTable from "@/components/Dashboard/Activity/SummaryTable";
import DistrictOverview from "@/components/Dashboard/DistrictsOverview";
import ProblemsCategories from "@/components/Dashboard/ProblemCategories";
import ReportProblems from "@/components/Dashboard/Reports";
import {Skeleton} from "@nextui-org/react"
const DashboardSkeleton = () => {
  return (
    <section className="w-full md:h-[90%] flex flex-col justify-between md:gap-0 mt-4">
      <div className="w-full h-[47%] flex flex-col md:flex-row justify-between gap-5 md:gap-0">
        <Skeleton className="md:w-[32%] bg-neutral-500 rounded-lg py-3 px-3 md:py-0 mt-3 md:mt-0"/>
        <Skeleton className="md:w-[66%] md:h-full bg-neutral-500 rounded-lg"/>
      </div>
      <div className="w-full md:h-[47%] flex flex-col md:flex-row justify-between">
        <Skeleton className="my-2 md:my-0 md:w-[32%] bg-neutral-500 rounded-lg px-3"/>
        
        <Skeleton className="my-2 md:my-0 md:w-[32%] bg-neutral-500 rounded-lg px-3"/>
        <Skeleton className="my-2 md:my-0 md:w-[32%] bg-neutral-500 rounded-lg px-3"/>
      </div>
    </section>
  );
};

export default DashboardSkeleton;

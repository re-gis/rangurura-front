"use client";

import Activity from "@/components/Dashboard/Activity";
import CustomTable from "@/components/Dashboard/Activity/SummaryTable";
import DistrictOverview from "@/components/Dashboard/DistrictsOverview";
import ProblemsCategories from "@/components/Dashboard/ProblemCategories";
import ReportProblems from "@/components/Dashboard/Reports";

const Page = () => {
  return (
    <section className="w-full md:h-[90%] flex flex-col justify-between md:gap-0 mt-4">
      <div className="w-full h-[47%] flex flex-col md:flex-row justify-between gap-5 md:gap-0">
        <div className="md:w-[32%] bg-white rounded-lg py-3 px-3 md:py-0 mt-3 md:mt-0">
          <Activity />
        </div>
        <div className="md:w-[66%] md:h-full bg-white rounded-lg">
          <CustomTable problemsData={[]} suggestionsData={[]} loading={false}/>
        </div>
      </div>
      <div className="w-full md:h-[47%] flex flex-col md:flex-row justify-between">
        <div className="my-2 md:my-0 md:w-[32%] bg-white rounded-lg px-3">
          <ReportProblems />
        </div>
        <div className="my-2 md:my-0 md:w-[32%] bg-white rounded-lg px-3">
          <ProblemsCategories />
        </div>
        <div className="my-2 md:my-0 md:w-[32%] bg-white rounded-lg px-3">
          <DistrictOverview />
        </div>
      </div>
    </section>
  );
};

export default Page;

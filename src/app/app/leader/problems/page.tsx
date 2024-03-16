"use client";
import DistrictOverview from "@/components/Dashboard/DistrictsOverview";
import ReportProblems from "@/components/Dashboard/Reports";
import ProblemsTable from "@/components/core/Tables/Problems";
import { useEffect, useState } from "react";
import { ApiEndpoint } from "@/constants";

const Page = () => {
  const [loading, setLoading] = useState(false);
  const [problemsData, setProblemsData] = useState([]);
  useEffect(() => {
    setLoading(true);
    ApiEndpoint.get("/problems/local")
      .then((res) => {
        console.log(res.data?.data);
        if (res.data?.data?.message) {
          setProblemsData([]);
        } else {
          setProblemsData(res.data.data);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);
  return (
    <div className="w-full h-[90%] flex items-center justify-between mt-4">
      <div className="w-full md:w-[64%] h-full">
        <div className="w-full flex items-center justify-between">
          <h1 className="text-[1.5rem] font-extrabold">Problems</h1>
        </div>

        <div className="w-full h-[85%]">
          <ProblemsTable data={problemsData} loading={loading} />
        </div>
      </div>
      <div className="w-[34%] h-full hidden md:flex flex-col gap-5">
        <div className="my-2 md:my-0 w-full bg-white rounded-lg px-3">
          <DistrictOverview />
        </div>
        <div className="my-2 md:my-0 w-full bg-white rounded-lg px-3">
          <ReportProblems />
        </div>
      </div>
    </div>
  );
};

export default Page;

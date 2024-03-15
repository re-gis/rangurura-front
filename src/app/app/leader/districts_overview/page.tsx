"use client";

import DistrictsOverViewTable from "@/components/core/Tables/DistrictsOverview";

const Page = () => {
  return (
    <div className="w-full h-[90%] flex flex-col items-center">
      <h1 className="text-[1.6rem] font-extrabold">Districts Overview</h1>
      <div className="w-full">
        <DistrictsOverViewTable />
      </div>
    </div>
  );
};

export default Page;

"use client";

import { leaders } from "@/constants";
import Leader from "@/components/Leader";

const Page = () => {
  return (
    <div className="w-full md:h-[90%] mt-4">
      <div className="w-full flex items-center justify-between">
        <h1 className="text-[1.5rem] font-extrabold">All leaders</h1>
      </div>
      <div className="w-full h-[89%] overflow-y-auto">
        <div className="w-full h-[90%] max-[470px]:grid-cols-1 grid-cols-2 md:grid-cols-3 gap-x-2 gap-y-2 grid lg:grid-cols-4  pt-3 justify-start mt-1">
          {leaders.length ? (
            leaders.map((person, index) => {
              return <Leader profile={person} />;
            })
          ) : (
            <h6 className="mx-auto font-bold mt-9">No leader registered yet</h6>
          )}
        </div>
      </div>
    </div>
  );
};

export default Page;

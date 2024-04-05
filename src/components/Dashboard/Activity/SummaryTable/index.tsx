"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Problem } from "@/typings";
import { ApiEndpoint, problems as data } from "@/constants";
import { problemColumns, suggestionColumns } from "@/utils/columns";
import { DataTable } from "@/components/core/data-table";
import { useEffect, useState } from "react";
import { Tooltip, Button } from "@nextui-org/react";
import { FaRegCheckSquare } from "react-icons/fa";
import { ClipLoader } from "react-spinners";
import Image from "next/image";
import no_data from "@/assets/images/no_leader.gif";

const columns: ColumnDef<Problem>[] = [
  {
    accessorKey: "Description",
    header: ({ column }) => <h4>Description</h4>,
    cell: ({ row }) => (
      <h6 className="text-[80%]">
        {row.original.description.toString().length < 30
          ? row.original.description
          : `${row.original.description.slice(0, 38)} . . .`}
      </h6>
    ),
  },
  {
    accessorKey: "Level",
    header: ({ column }) => <FaRegCheckSquare color={"#ccc"} />,
    cell: ({ row }) => (
      <Tooltip content="Solved">
        <FaRegCheckSquare />
      </Tooltip>
    ),
  },
  {
    accessorKey: "Level",
    header: ({ column }) => <h4>Level</h4>,
    cell: ({ row }) => <h6 className="text-[80%]">{row.original.level}</h6>,
  },
];

const CustomTable = ({
  problemsData,
  suggestionsData,
  loading,
}: {
  problemsData: any[];
  suggestionsData: any[];
  loading: boolean;
}) => {
  const [activeButton, setActiveButton] = useState("problems");
  return (
    <div className="w-full h-full px-2">
      <div className="w-full flex justify-between items-center">
        <h5 className="text-2xl font-itaric pl-2">Recently Added</h5>
        <div className="border-b-[1px] my-4 flex">
          <button
            type="button"
            className={`w-[8rem] uppercase text-sm ${
              activeButton == "problems"
                ? "border-b-[3px] border-b-[#20603D] font-bold"
                : ""
            }`}
            onClick={() => setActiveButton("problems")}
          >
            Problems
          </button>
          <button
            type="button"
            className={`w-[8rem] uppercase text-sm ${
              activeButton == "suggestions"
                ? "border-b-[3px] border-b-[#20603D] font-bold"
                : ""
            }`}
            onClick={() => setActiveButton("suggestions")}
          >
            Suggestions
          </button>
        </div>
      </div>
      {loading ? (
        <div className="w-full h-full flex justify-center pt-[3rem]">
          <ClipLoader size={24} color="black" />
        </div>
      ) : activeButton == "suggestions" ? (
        suggestionsData.length == 0 ? (
          <div className="w-full flex flex-col items-center">
            <Image src={no_data} alt="No Data GIF" />
            <h1 className="mt-[1rem] font-bold">No Suggestions So Far!</h1>
          </div>
        ) : (
          <DataTable
            allowPagination={false}
            data={suggestionsData.slice(0, 5)}
            columns={suggestionColumns}
            tableClass=""
          />
        )
      ) : problemsData.length == 0 ? (
        <div className="w-full flex flex-col items-center">
          <Image src={no_data} alt="No Data GIF" />
          <h1 className="mt-[1rem] font-bold">No Problems So Far!</h1>
        </div>
      ) : (
        <DataTable
          allowPagination={false}
          data={problemsData.slice(0, 5)}
          columns={problemColumns}
          tableClass=""
        />
      )}
    </div>
  );
};
export default CustomTable;

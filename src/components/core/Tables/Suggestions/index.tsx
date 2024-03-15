"use client";
import { ColumnDef } from "@tanstack/react-table";
import { Problem } from "@/typings";
import { ApiEndpoint, problems as data } from "@/constants";
import { DataTable } from "@/components/core/data-table";
import { useEffect, useState } from "react";
import { FaRegCheckSquare } from "react-icons/fa";
import { HiDotsVertical } from "react-icons/hi";
import { HiClock } from "react-icons/hi2";

const columns: ColumnDef<Problem>[] = [
  {
    accessorKey: "Description",
    header: ({ column }) => <h4>Suggestion</h4>,
    cell: ({ row }) => (
      <h6 className="text-[80%]">
        {row.original.description.toString().length < 30
          ? row.original.description
          : `${row.original.description.slice(0, 58)} . . .`}
      </h6>
    ),
  },
  {
    accessorKey: "Completed",
    header: ({ column }) => <FaRegCheckSquare color={"#ccc"} />,
    cell: ({ row }) =>
      row.original.completed ? (
        <FaRegCheckSquare color="#00D560" />
      ) : (
        <HiClock color="#FA8701" />
      ),
  },
  {
    accessorKey: "Actions",
    header: ({ column }) => <></>,
    cell: ({ row }) => <HiDotsVertical />,
  },
];

const SuggestionsTable = () => {
  const [suggestionsData, setSuggestionsData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(()=>{
    setLoading(true);
    ApiEndpoint.get("/suggestions/mine")
      .then((res)=>{
         console.log(res.data);
         setSuggestionsData(res.data.data);
         setLoading(false);
        })
        .catch(err=>{
          console.log(err)
          setLoading(false);
       })
  },[])

  return (
    <div className="w-full h-full flex justify-center  px-2  mt-8">
      {suggestionsData.length == 0 ? <div>
          <h1 className="mt-[5rem]">No Data Found!</h1>
        </div>:
              <div className="w-full h-[80%] bg-white">
              <DataTable
                allowPagination={true}
                data={suggestionsData}
                columns={columns}
                tableClass=""
              />
              </div>
        }

    </div>
  );
};
export default SuggestionsTable;

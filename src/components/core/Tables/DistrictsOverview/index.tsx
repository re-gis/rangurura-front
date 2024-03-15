"use client";

import { ColumnDef } from "@tanstack/react-table";
import SortButton from "@/components/core/data-table/sort-button";
import { District, Event } from "@/typings";
import { districts as data } from "@/constants";
import { DataTable } from "@/components/core/data-table";
import { useState } from "react";
import { Tooltip, Button } from "@nextui-org/react";
import { FaRegCheckSquare } from "react-icons/fa";
import { MdOutlineTaskAlt } from "react-icons/md";
import { SlLocationPin } from "react-icons/sl";
import { RiUserLocationFill } from "react-icons/ri";
import { HiDotsVertical } from "react-icons/hi";
import { HiClock } from "react-icons/hi2";

const columns: ColumnDef<District>[] = [
  {
    accessorKey: "Name",
    header: ({ column }) => <h4>District name</h4>,
    cell: ({ row }) => (
      <h6 className="text-[80%]">
        {row.original.name.toString().length < 30
          ? row.original.name
          : `${row.original.name.slice(0, 58)} . . .`}
      </h6>
    ),
  },
  {
    accessorKey: "Problems",
    header: ({ column }) => <h4>Problems</h4>,
    cell: ({ row }) => <h6 className="text-[80%]">{row.original.problems}</h6>,
  },
  {
    accessorKey: "Suggestions",
    header: ({ column }) => <h4>Suggestions</h4>,
    cell: ({ row }) => (
      <h6 className="text-[80%]">{row.original.suggestions}</h6>
    ),
  },
  {
    accessorKey: "Leader",
    header: ({ column }) => <h4>Leader</h4>,
    cell: ({ row }) => <h6 className="text-[80%]">{row.original.leader}</h6>,
  },
];

const DistrictsOverViewTable = () => {
  return (
    <div className="w-full h-full px-2 bg-white mt-8">
      <div className="w-full h-[80%]">
        <DataTable
          allowPagination={true}
          data={data}
          columns={columns}
          tableClass=""
        />
      </div>
    </div>
  );
};
export default DistrictsOverViewTable;

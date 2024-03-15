"use client";

import { ColumnDef } from "@tanstack/react-table";
import SortButton from "@/components/core/data-table/sort-button";
import { Problem } from "@/typings";
import { ApiEndpoint, problems as data } from "@/constants";
import { DataTable } from "@/components/core/data-table";
import { useState, useEffect } from "react";
import { Tooltip, Button } from "@nextui-org/react";
import { FaRegCheckSquare } from "react-icons/fa";
import { MdOutlineTaskAlt } from "react-icons/md";
import { SlLocationPin } from "react-icons/sl";
import { RiUserLocationFill } from "react-icons/ri";
import { HiDotsVertical } from "react-icons/hi";
import { HiClock } from "react-icons/hi2";
import ProblemActions from "../../actions/Problems";
import { useDisclosure } from "@mantine/hooks";
import { Modal } from "@mantine/core";
import LocationTracker from "../../Modals/LocationTracker";
import TableSkeleton from "../../data-table/TableSkeleton";
import no_data from "@/assets/images/no_data_gif.gif"
import Image from "next/image";


const ProblemsTable = ({data, loading}:{data: any[], loading: boolean}) => {
  const [isOpened, { open, close }] = useDisclosure(false);

  const columns: ColumnDef<any>[] = [
    {
      accessorKey: "Description",
      header: ({ column }) => <h4>Problem Description</h4>,
      cell: ({ row }) => (
        <h6 className="text-[80%]">
          {row.original.ikibazo.toString().length < 30
            ? row.original.ikibazo
            : `${row.original.ikibazo.slice(0, 58)} . . .`}
        </h6>
      ),
    },
    {
      accessorKey: "Location",
      header: ({ column }) => (
        <div className="px-6 cursor-pointer">
          <SlLocationPin color={"#000"} style={{ fontWeight: "800" }} />
        </div>
      ),
      cell: ({ row }) => (
        <div className="px-6 cursor-pointer" onClick={open}>
          <RiUserLocationFill />
        </div>
      ),
    },
    {
      accessorKey: "Completed",
      header: ({ column }) => <FaRegCheckSquare color={"#ccc"} />,
      cell: ({ row }) =>
        row.original.status === "APPROVED" ? (
          <FaRegCheckSquare color="#00D560" />
        ) : (
          <HiClock color="#FA8701" />
        ),
    },
    {
      accessorKey: "Level",
      header: ({ column }) => <h4>Level</h4>,
      cell: ({ row }) => <h6 className="text-[80%]">{row.original.urwego}</h6>,
    },
    {
      accessorKey: "Actions",
      header: ({ column }) => <></>,
      cell: ({ row }) => <ProblemActions />,
    },
  ];

  return (
    <div className="w-full h-full px-2 mt-8">
      <Modal opened={isOpened} onClose={close} size={"auto"}>
        <LocationTracker username={"David"} location="Kicukiro" />
      </Modal>
      <div className="w-full h-[80%] flex flex-col items-center">
        {loading ? (
          <TableSkeleton columns={columns} />
        ) : 
          data?.length === 0 ? 
          <div className="flex flex-col items-center">
            <Image src={no_data} alt="No Data GIF"/>
            <h3 className="mt-[1rem] font-bold">No Reported Problems So Far!</h3>
          </div>
          :
          (
            <div className="w-full h-fit bg-white">
              <DataTable
              allowPagination={true}
              data={data}
              columns={columns}
              tableClass=""
              />
            </div>
          )
        }
      </div>
    </div>
  );
};
export default ProblemsTable;

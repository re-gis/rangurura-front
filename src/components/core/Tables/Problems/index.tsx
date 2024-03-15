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

const ProblemsTable = () => {
  const [isOpened, { open, close }] = useDisclosure(false);
  const [problemsData, setProblemsData] = useState([]);
  const [loading, setLoading] = useState(false);
  
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

  useEffect(() => {
    setLoading(true);
    ApiEndpoint.get("/problems/my/asked")
      .then((res) => {
        console.log(res.data);
        setProblemsData(res.data.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="w-full h-full px-2 bg-white mt-8">
      <Modal opened={isOpened} onClose={close} size={"auto"}>
        <LocationTracker username={"David"} location="Kicukiro" />
      </Modal>
      <div className="w-full h-[80%]">
        {loading ? (
          <TableSkeleton columns={columns} />
        ) : (
          <DataTable
            allowPagination={true}
            data={problemsData}
            columns={columns}
            tableClass=""
          />
        )}
      </div>
    </div>
  );
};
export default ProblemsTable;

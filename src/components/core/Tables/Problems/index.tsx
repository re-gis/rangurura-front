"use client";

import { ColumnDef } from "@tanstack/react-table";
import SortButton from "@/components/core/data-table/sort-button";
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
import no_data from "@/assets/images/no_data_gif.gif";
import Image from "next/image";
import { FaRegEye } from "react-icons/fa";
import { IoDocumentAttach } from "react-icons/io5";
import { MdOutlineFileDownload } from "react-icons/md";

type Problem = {
  level: string;
  completed: boolean;
  ikibazo: string;
  urwego: string;
  owner: string;
  proofUrl: string;
  recordUrl: string;
  status: string;
  category: string;
  phoneNumber: string;
};
const ProblemsTable = ({
  data,
  loading,
}: {
  data: any[];
  loading: boolean;
}) => {
  const [isOpened, { open, close }] = useDisclosure(false);
  // const [openView, { openV, closeV }] = useDisclosure(false);
  const [openedProblem, setOpenedProblem] = useState<Problem>();
  const [openV, setOpenV] = useState(false);

  const columns: ColumnDef<any>[] = [
    {
      accessorKey: "Description",
      header: ({ column }) => <h4>Problem Description</h4>,
      cell: ({ row }) => (
        <h6 className="text-[80%]">
          {row.original.ikibazo.toString().length < 45
            ? row.original.ikibazo
            : `${row.original.ikibazo.slice(0, 45)} . . .`}
        </h6>
      ),
    },
    {
      accessorKey: "View",
      header: ({ column }) => (
        <div className="cursor-pointer w-full flex justify-end">
          <h5>View</h5>
        </div>
      ),
      cell: ({ row }) => (
        <div
          className="pr-4 w-full flex justify-end cursor-pointer"
          onClick={() => {
            setOpenedProblem(row.original);
            setOpenV(true);
          }}
        >
          <FaRegEye />
        </div>
      ),
    },
    {
      accessorKey: "Location",
      header: ({ column }) => (
        <div className="px-6 cursor-pointer w-full flex justify-end">
          <SlLocationPin color={"#000"} style={{ fontWeight: "800" }} />
        </div>
      ),
      cell: ({ row }) => (
        <div
          className="px-6 cursor-pointer w-full flex justify-end"
          onClick={open}
        >
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
      cell: ({ row }) => <ProblemActions data={row.original}/>,
    },
  ];

  return (
    <div className="w-full h-full px-2 mt-8">
      <Modal opened={isOpened} onClose={close} size={"auto"}>
        <LocationTracker username={"David"} location="Kicukiro" />
      </Modal>
      <Modal opened={openV} onClose={() => setOpenV(false)} size={"lg"}>
        <div className="w-full h-full flex flex-col gap-4 pb-5 pl-5">
          <h6>Reported By: {openedProblem?.owner}</h6>
          <h6 className="mt-[-10px]">
            Phone Number: {openedProblem?.phoneNumber}
          </h6>
          <p>
            "
            <span className="font-bold font-italic text-justify">
              {openedProblem?.ikibazo}
            </span>
            "
          </p>
          <div className="w-full flex flex-col gap-3 items-center">
            {openedProblem?.proofUrl ? (
              <>
                <h5 className="flex flex-col items-center gap-2 ">
                  {" "}
                  <IoDocumentAttach color="#0075FF" size={28} /> Problem was
                  sent with attachment{" "}
                </h5>
                <button className="px-5 py-3 bg-[#0075FF] rounded-lg flex items-center gap-3">
                  <MdOutlineFileDownload />
                  Download attachment
                </button>
              </>
            ) : (
              <>
                <h5 className="flex flex-col items-center gap-2 ">
                  {" "}
                  <IoDocumentAttach color="#000" size={28} /> Problem was sent
                  with no attachment!{" "}
                </h5>
              </>
            )}
          </div>
        </div>
      </Modal>
      <div className="w-full flex flex-col items-center">
        {loading ? (
          <TableSkeleton columns={columns} />
        ) : data?.length === 0 ? (
          <div className="flex flex-col items-center">
            <Image src={no_data} alt="No Data GIF" />
            <h3 className="mt-[1rem] font-bold">
              No Reported Problems So Far!
            </h3>
          </div>
        ) : (
          <div className="w-full h-max bg-white">
            <DataTable
              allowPagination={true}
              data={data.reverse()}
              columns={columns}
              tableClass=""
            />
          </div>
        )}
      </div>
    </div>
  );
};
export default ProblemsTable;

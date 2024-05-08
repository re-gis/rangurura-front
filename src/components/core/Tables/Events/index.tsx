"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Event } from "@/typings";
import { events as data } from "@/constants";
import { DataTable } from "@/components/core/data-table";
import { FaRegCheckSquare, FaRegEye } from "react-icons/fa";
import { HiDotsVertical } from "react-icons/hi";
import { HiClock } from "react-icons/hi2";
// import { eventsColumns } from "@/utils/columns";
import { useState } from "react";
import { Modal } from "@mantine/core";

const EventsTable = ({
  dataProps,
  showPagination,
  styles,
}: {
  dataProps?: Event[];
  showPagination?: boolean;
  styles?: string;
}) => {
  const [openedEvent, setOpenedEvent] = useState<Event>();
  const [openV, setOpenV] = useState(false);
  const columns: ColumnDef<Event>[] = [
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
      accessorKey: "Event Name",
      header: ({ column }) => <h4>Event name</h4>,
      cell: ({ row }) => (
        <h6 className="text-[80%]">
          {row.original.eventName.toString().length < 30
            ? row.original.eventName
            : `${row.original.eventName.slice(0, 58)} . . .`}
        </h6>
      ),
    },
    {
      accessorKey: "Event Description",
      header: ({ column }) => <h4>Event description</h4>,
      cell: ({ row }) => (
        <h6 className="text-[80%]">
          {row.original.descriptions.toString().length < 30
            ? row.original.descriptions
            : `${row.original.descriptions.slice(0, 58)} . . .`}
        </h6>
      ),
    },
    {
      accessorKey: "Start Date Time",
      header: ({ column }) => <h4>Start Date Time</h4>,
      cell: ({ row }) => (
        <h6 className="text-[80%]">{row.original.startDateTime}</h6>
      ),
    },
    {
      accessorKey: "End Date Time",
      header: ({ column }) => <h4>End Date Time</h4>,
      cell: ({ row }) => (
        <h6 className="text-[80%]">{row.original.endDateTime}</h6>
      ),
    },
    {
      accessorKey: "Location",
      header: ({ column }) => <h4>Location</h4>,
      cell: ({ row }) => (
        <h6 className="text-[80%]">{row.original.location}</h6>
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
            setOpenedEvent(row.original);
            setOpenV(true);
          }}
        >
          <FaRegEye />
        </div>
      ),
    },
    // {
    //   accessorKey: "Duration",
    //   header: ({ column }) => <h4>Duration</h4>,
    //   cell: ({ row }) => <h6 className="text-[80%]">{row.original.duration}</h6>,
    // },
    {
      accessorKey: "Actions",
      header: ({ column }) => <></>,
      cell: ({ row }) => <HiDotsVertical />,
    },
  ];
  return (
    <div className="w-full h-max px-2 bg-white mt-8">
      <Modal opened={openV} onClose={() => setOpenV(false)} size={"lg"}>
        <div className="w-full h-full flex flex-col gap-4 pb-5 pl-5">
          <h3 className="text-[#20603D] font-extrabold text-center text-xl">Event information</h3>
          <div className="mt-[10px] mx-3">
            <h6><span className="font-extrabold text-md mx-2">Event name:</span> {openedEvent?.eventName}</h6>
          </div>
          <div className="mt-[10px] mx-3">
          <h6><span className="font-extrabold text-md mx-2">Description: </span> {openedEvent?.descriptions}</h6>
         </div>
         <div className="mt-[10px] mx-3">
          <h6> <span className="text-md font-extrabold mx-2">Organization Level: </span>{openedEvent?.organizationLevel}</h6>
         </div>
         <div className="mt-[10px] mx-3">
          <h6> <span className="font-extrabold text-md mx-2">Category:</span> {openedEvent?.category}</h6>
         </div>
         <div className="mt-[10px] mx-3">
          <h6> <span className="text-md font-extrabold mx-2">Start Date and Time :</span>{openedEvent?.startDateTime}</h6>
         </div>
         <div className="mt-[10px] mx-3">
          <h6><span className="text-md font-extrabold mx-2">End Date and Time: </span>{openedEvent?.endDateTime}</h6>
         </div>
         <div className="mt-[10px] mx-3">
          <h6> <span className="text-md font-extrabold mx-2">Location: </span>{openedEvent?.location}</h6>
         </div>
        </div>
      </Modal>
      <div className={`${styles} w-full h-[80%]`}>
        <DataTable
          allowPagination={showPagination ?? true}
          data={dataProps ?? data}
          columns={columns}
          tableClass=""
        />
      </div>
    </div>
  );
};
export default EventsTable;

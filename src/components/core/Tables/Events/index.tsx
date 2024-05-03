"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Event } from "@/typings";
import { events as data } from "@/constants";
import { DataTable } from "@/components/core/data-table";
import { FaRegCheckSquare } from "react-icons/fa";
import { HiDotsVertical } from "react-icons/hi";
import { HiClock } from "react-icons/hi2";
import { eventsColumns } from "@/utils/columns";

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
    cell: ({ row }) => <h6 className="text-[80%]">{row.original.location}</h6>,
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

const EventsTable = ({
  dataProps,
  showPagination,
  styles,
}: {
  dataProps?: Event[];
  showPagination?: boolean;
  styles?: string;
}) => {
  return (
    <div className="w-full h-max px-2 bg-white mt-8">
      <div className={`${styles} w-full h-[80%]`}>
        <DataTable
          allowPagination={showPagination ?? true}
          data={dataProps ?? data}
          columns={eventsColumns}
          tableClass=""
        />
      </div>
    </div>
  );
};
export default EventsTable;

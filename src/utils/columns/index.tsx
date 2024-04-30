import EventsActions from "@/components/core/actions/Events";
import SuggestionActions from "@/components/core/actions/Suggestions";
import { Event, Problem, Suggestion } from "@/typings";
import { Tooltip } from "@nextui-org/react";
import { ColumnDef } from "@tanstack/react-table";
import { FaRegCheckSquare } from "react-icons/fa";
import { HiClock } from "react-icons/hi";

export const problemColumns: ColumnDef<Problem>[] = [
  {
    accessorKey: "Description",
    header: ({ column }) => <h4>Description</h4>,
    cell: ({ row }) => (
      <h6 className="text-[80%]">
        {row.original.ikibazo.toString().length < 30
          ? row.original.ikibazo
          : `${row.original.ikibazo.slice(0, 38)} . . .`}
      </h6>
    ),
  },
  {
    accessorKey: "completed",
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
    cell: ({ row }) => <h6 className="text-[80%]">{row.original.urwego}</h6>,
  },
];
export const citizenProblemColumns: ColumnDef<Problem>[] = [
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
    accessorKey: "completed",
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

export const suggestionColumns: ColumnDef<Suggestion>[] = [
  {
    accessorKey: "Description",
    header: ({ column }) => <h4>Suggestion</h4>,
    cell: ({ row }) => (
      <h6 className="text-[80%]">
        {row.original.igitekerezo.toString().length < 30
          ? row.original.igitekerezo
          : `${row.original.igitekerezo.slice(0, 58)} . . .`}
      </h6>
    ),
  },
  {
    accessorKey: "completed",
    header: ({ column }) => <FaRegCheckSquare color={"#ccc"} />,
    cell: ({ row }) =>
      row.original.status ? (
        <FaRegCheckSquare color="#00D560" />
      ) : (
        <HiClock color="#FA8701" />
      ),
  },
  {
    accessorKey: "Actions",
    header: ({ column }) => <></>,
    cell: ({ row }) => <SuggestionActions data={row.original} />,
  },
];

export const eventsColumns: ColumnDef<Event>[] = [
  {
    accessorKey: "Completed",
    header: ({ column }) => <FaRegCheckSquare color={"#ccc"} />,
    cell: ({ row }) =>
      row.original?.completed ? (
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
        {row.original.eventName?.toString()?.length < 30
          ? row.original.eventName
          : `${row.original.eventName?.slice(0, 58)} . . .`}
      </h6>
    ),
  },
  {
    accessorKey: "Event Description",
    header: ({ column }) => <h4>Event Description</h4>,
    cell: ({ row }) => (
      <h6 className="text-[80%]">
        {row.original.descriptions?.toString()?.length < 30
          ? row.original.descriptions
          : `${row.original.descriptions?.slice(0, 58)} . . .`}
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
    accessorKey: "End Date",
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
  {
    accessorKey: "Actions",
    header: ({ column }) => <></>,
    cell: ({ row }) => <EventsActions data={row.original} />,
  },  
];

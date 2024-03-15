import { Column } from "@tanstack/react-table";
import React, { FC } from "react";
import { BsArrowDownUp } from "react-icons/bs";

type Props = {
  column: Column<any, unknown>;
  name: string;
};

const sortButton: FC<Props> = ({ name, column }) => {
  return (
    <button
      className="flex items-center"
      onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
    >
      {name}
      <BsArrowDownUp className="ml-2 h-4 w-4" />
    </button>
  );
};

export default sortButton;

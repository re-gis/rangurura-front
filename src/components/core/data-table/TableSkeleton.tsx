import { Skeleton } from "@mantine/core";
import { ColumnDef } from "@tanstack/react-table";
import React, { FC } from "react";
interface Props {
  columns: ColumnDef<any>[];
}

const TableSkeleton: FC<Props> = ({ columns }) => {
  return (
    <table className="w-full text-sm rounded-lg text-[rgba(67,67,67,0.71)]">
      <thead>
        <tr className="bg-[#0214281d] text-[rgba(48,7,98,0.8)] py-10 rounded-md">
          <th className="p-2  border-y-[5px] w-[30px] rounded-l-xl">
            <Skeleton height={30} width={30} />
          </th>
          {columns.map((column, i) => (
            <th
              key={i}
              className="p-3 font-semibold whitespace-nowrap border-[#EEF3F9] border-y-[5px] "
            >
              <Skeleton height={30} />
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {[...Array(10)].map((_, index) => (
          <tr key={index} className="">
            <td>
              <Skeleton height={30} />
            </td>
            {columns.map((column, i) => (
              <td key={i} className="p-2">
                <Skeleton height={30} />
              </td>
            ))}
            <Skeleton height={30} />
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableSkeleton;

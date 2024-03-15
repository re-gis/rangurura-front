import { IPaginatedQuery } from "./base.type";
import React from "react";

export interface PaginationState {
  isPaginated: boolean;
  setPaginateOpts: React.Dispatch<
    React.SetStateAction<IPaginatedQuery & { totalPages: number }>
  >;
  paginateOpts: IPaginatedQuery & { totalPages: number };
}

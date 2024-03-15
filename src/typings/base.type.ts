export interface IModel {
  id: string;
  createdAt?: string;
  updatedAt?: string;
  deletedAt?: string | null;
}

export interface ApiResponse<T = any> {
  data: T;
  success: boolean;
  message: string;
  error: any;
}

export interface IPagination<T = any[]> {
  content: T;
  empty: boolean;
  first: boolean;
  last: boolean;
  number: number;
  numberOfElements: number;
  pageable: Pageable;
  size: number;
  sort: Sort;
  totalElements: number;
  totalPages: number;
}

export interface Pageable {
  offset: number;
  pageNumber: number;
  pageSize: number;
  paged: boolean;
  sort: Sort;
  unpaged: boolean;
}

export interface Sort {
  empty: boolean;
  sorted: boolean;
  unsorted: boolean;
}

export interface IPaginatedQuery {
  limit?: number;
  page?: number;
  sort?: string;
  filter?: string;
}

export enum ERole {
  ADMIN = "ADMIN",
  STAFF = "STAFF",
  STUDENT = "STUDENT",
  TEACHER = "TEACHER",
  DS = "DS",
  PM = "PM",
  ACCOUNTANT = "ACCOUNTANT",
}

export type Role =
  | "ADMIN"
  | "STAFF"
  | "STUDENT"
  | "TEACHER"
  | "DS"
  | "PM"
  | "ACCOUNTANT";

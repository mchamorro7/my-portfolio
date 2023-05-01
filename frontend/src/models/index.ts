import type { Dispatch, SetStateAction } from "react";

export interface ProjectModel {
  title: string;
  description: string;
  date: string;
  stack: Array<string>;
  code?: string;
  demo?: string;
  thumbnail?: string;
}

export interface PaginationModel {
  setPage: Dispatch<SetStateAction<number>>;
  page: number;
  limit: number;
  itemsCount: number;
  total?: number;
}

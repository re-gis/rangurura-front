import { Select } from "@mantine/core";
import { Table } from "@tanstack/react-table";
import React from "react";

interface SearchFormProps {
  setInput: React.Dispatch<React.SetStateAction<string>>;
  searchType?: string;
  table?: Table<any>;
  searchKey?: string | string[];
}

const SearchForm = ({
  setInput,
  searchType: type,
  table,
  searchKey,
}: SearchFormProps) => {
  const [searchType, setSearchType] = React.useState(type ?? "table");

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (searchType === "table" && table) {
      table.setGlobalFilter(e.target.value);
    } else {
      setInput(e.target.value);
    }
  };

  return (
    <div className="flex flex-col md:px-2 gap-y-1 w-full">
      <span className="text-xs px-2 text-gray-600">
        Enter at least 3 letter
      </span>
      <div className="flex items-center">
        <input
          type="text"
          placeholder="Search..."
          className="border border-mainPurple max-w-[16em]  rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-mainPurple w-full"
          onChange={handleSearch}
        />
        <Select
          className="ml-2"
          w={150}
          data={[
            { value: "all", label: "All" },
            { value: "table", label: "This Table" },
          ]}
          defaultValue={searchType}
          onChange={(e: any) => {
            if (!e) return;
            setSearchType(e);
          }}
          placeholder="Search In"
          size="sm"
        />
      </div>
    </div>
  );
};

export default SearchForm;

import Image from "next/image";
import English from "@/assets/images/british.png";
import France from "@/assets/images/france.png";
import Rwanda from "@/assets/images/rwanda.png";
import { FiChevronDown } from "react-icons/fi";
import { HiDesktopComputer, HiDotsVertical } from "react-icons/hi";
import { MdPushPin } from "react-icons/md";
import { MdOutlineMarkEmailRead } from "react-icons/md";

import React from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";

export default function ProblemActions() {
  const [selectedKeys, setSelectedKeys] = React.useState(new Set(["English"]));
  const languages = ["English", "Kinyarwanda", "French"];
  const flags = [English, Rwanda, France];

  const selectedValue = React.useMemo(
    () => Array.from(selectedKeys).join(", ").replaceAll("_", " "),
    [selectedKeys],
  );

  return (
    <Dropdown>
      <DropdownTrigger>
        <span className="cursor-pointer">
          <HiDotsVertical />
        </span>
      </DropdownTrigger>
      <DropdownMenu
        aria-label="Single selection example"
        className=" py-2"
        variant="flat"
      >
        <DropdownItem key="text" className="hover:bg-[#ccc]">
          <span className=" flex items-center justify-start gap-4 w-full">
            <HiDesktopComputer />
            <h5>Hide</h5>
          </span>
        </DropdownItem>
        <DropdownItem
          key="number"
          className="hover:bg-[#ccc] flex items-center w-full"
        >
          <span className=" flex items-center justify-start gap-4 w-full">
            <MdPushPin />
            <h5>Pin</h5>
          </span>
        </DropdownItem>
        <DropdownItem
          key="date"
          className="hover:bg-[#ccc] flex items-center w-full"
        >
          <span className=" flex items-center justify-start gap-4 w-full">
            <MdOutlineMarkEmailRead />
            <h5>Mark as Read</h5>
          </span>
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}

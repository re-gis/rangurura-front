import { HiDesktopComputer, HiDotsVertical } from "react-icons/hi";
import { MdPushPin } from "react-icons/md";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { Modal } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import * as React from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";
import { ApiEndpoint } from "@/constants";
import toast from "react-hot-toast";
import { ClipLoader } from "react-spinners";

export default function SuggestionsActions({ data }: { data: any }) {
  const [opened, { open, close }] = useDisclosure(true);
  const [loading, setLoading] = React.useState(false);
  const deleteSuggestion = () => {
    setLoading(true);
    ApiEndpoint.delete(`/suggestions/delete/${data?.id}`)
      .then((data) => {
        console.log("Suggestion Deleted!");
        toast.success("Successfully Deleted Suggestion!");
      })
      .catch((err) => {
        console.log("Error while Deleting!");
      })
      .finally(() => setLoading(false));
  };
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
          className="bg-[#c44f4f] flex items-center w-full hover:bg-[#c44f4f]"
          onClick={deleteSuggestion}
        >
          <span
            className="flex items-center justify-start gap-4 w-full"
            onClick={() => open()}
          >
            {loading ? (
              <div className="w-full flex justify-center items-center">
                <ClipLoader size={24} color="black" />
              </div>
            ) : (
              <>
                <MdOutlineMarkEmailRead />
                <h5 className="font-bold text-white">Delete</h5>
              </>
            )}
          </span>
        </DropdownItem>
      </DropdownMenu>
      <Modal opened={opened} onClose={close} size={"sm"}>
        <h5 className="w-full text-center">
          Are you sure you want to logout ?
        </h5>
        <div className="flex w-full items-center justify-between px-4 mt-10">
          <button
            onClick={close}
            className="py-3 px-6 rounded-lg flex items-center justify-center bg-[#ccc] text-black"
          >
            cancel
          </button>
          <button
            onClick={deleteSuggestion}
            className="py-3 px-6 rounded-lg flex items-center justify-center bg-[#FF0000] text-white"
          >
            Delete
          </button>
        </div>
      </Modal>
    </Dropdown>
  );
}

"use client";

import NewEvent from "@/components/Events/NewEvent";
import EventsTable from "@/components/core/Tables/Events";
import { Modal, Button } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

const Page = () => {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <div className="w-full h-[90%] mt-4">
      <div className="w-full flex items-center justify-between">
        <h1 className="text-[1.6rem] font-extrabold">Events</h1>

        <button
          type="button"
          onClick={open}
          className="bg-[#20603D] w-[10rem] px-3 py-3 rounded-lg flex items-center justify-center text-white font-extrabold"
        >
          Create event
        </button>
      </div>

      <div className="w-full h-[85%] bg-white">
        <EventsTable />
      </div>
      <Modal
        opened={opened}
        onClose={close}
        h={"100vh"}
        closeOnClickOutside={false}
        className="overflow-y-hidden"
        size={"xl"}
      >
        <NewEvent />
      </Modal>
    </div>
  );
};

export default Page;

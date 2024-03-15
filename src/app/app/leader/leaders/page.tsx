"use client";

import { leaders } from "@/constants";
import Leader from "@/components/Leader";
import { useDisclosure } from "@mantine/hooks";
import { Modal, Button } from "@mantine/core";
import NewLeader from "@/components/NewLeader";

const Page = () => {
  const [opened, { open, close }] = useDisclosure(false);
  return (
    <div className="w-full md:h-[90%] mt-4">
      <div className="w-full flex items-center justify-between">
        <h1 className="text-[1.5rem] font-extrabold">All leaders</h1>

        <button
          type="button"
          onClick={open}
          className="bg-[#20603D] w-[10rem] px-3 py-3 rounded-lg flex items-center justify-center text-white font-extrabold"
        >
          New Leader
        </button>
      </div>
      <div className="w-full h-[92%] overflow-y-auto">
        <div className="w-full h-[97%] max-[470px]:grid-cols-1 grid-cols-2 md:grid-cols-3 gap-x-2 gap-y-2 grid lg:grid-cols-4  pt-3 justify-start my-1 ">
          {leaders.length ? (
            leaders.map((person, index) => {
              return <Leader profile={person} />;
            })
          ) : (
            <h6 className="mx-auto font-bold mt-9">No leader registered yet</h6>
          )}
        </div>
      </div>
      <Modal opened={opened} onClose={close} size={"lg"}>
        <NewLeader />
      </Modal>
    </div>
  );
};

export default Page;

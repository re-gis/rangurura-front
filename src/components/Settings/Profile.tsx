"use client";
import Image from "next/image";
import personImg from "@/assets/images/personImg.png";
import { Modal } from "@nextui-org/react";
import { useDisclosure } from "@mantine/hooks";
// import

const SettingsProfile = () => {
  const [opened, { open, close }] = useDisclosure(false);
  return (
    <div className="w-[70%] flex flex-col gap-5 items-start px-9">
      <div className="w-full flex justify-start gap-9">
        <Image
          src={personImg}
          alt=""
          className="w-[60px] h-[60px] rounded-[50%]"
        />
        <div className="flex flex-col justify-center">
          <h6 className="text-[90%] my-1 font-bold">ISAMAZA Sylvain</h6>
          <h6 className="text-[90%] my-1 font-bold">Ministry of health</h6>
        </div>
      </div>

      <div className="w-full flex gap-9">
        <button className="py-2 px-9 rounded-lg bg-[#F52929] text-white">
          Delete
        </button>
        <button className="py-2 px-9 rounded-lg bg-[#FD7900] text-white">
          Update
        </button>
      </div>
      <Modal opened={opened} close={close}></Modal>
    </div>
  );
};
export default SettingsProfile;

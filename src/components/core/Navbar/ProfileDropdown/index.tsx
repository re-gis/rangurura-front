import { HiDesktopComputer, HiDotsVertical } from "react-icons/hi";
import { MdPushPin } from "react-icons/md";
import { MdDeleteForever } from "react-icons/md";
import { FaEdit, FaRegCheckCircle } from "react-icons/fa";
import DeleteProblem from "@/components/core/Modals/DeleteProblem";
import React, { useEffect, useState } from "react";
import { Event, Problem } from "@/typings";
import { Modal, Menu, rem } from "@mantine/core";
import { LuMailCheck } from "react-icons/lu";
import DeleteEvent from "../../Modals/DeleteEvent";
import { getMyProfile } from "@/utils/funcs/funcs";
import { useRouter } from "next/navigation";
import { Skeleton } from "@nextui-org/react";
import Image from "next/image";
import personImg from "@/assets/images/personImg.png";
import { RiArrowDownSLine } from "react-icons/ri";
import { useDisclosure } from "@mantine/hooks";
import { setCookie } from "cookies-next";
import { notifications } from "@mantine/notifications";

export default function ProfileDropDown({ type }: { type: string }) {
  const [openDelete, setOpenDelete] = useState(false);
  const [loading, setLoading] = useState(true);
  const [opened, { open, close }] = useDisclosure(false);
  const [profile, setProfile] = useState({
    cell: "",
    district: "",
    name: "",
    nationalId: "",
    phoneNumber: "",
    province: "",
    role: "",
    sector: "",
    verified: true,
    village: "",
  });
  const navigate = useRouter();
  useEffect(() => {
    getMyProfile()
      .then((data: any) => {
        console.log("User Profile in Navbar -->", data);
        setProfile(data.data);
        setLoading(false);
      })
      .catch((err: any) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  const logout = () => {
    setCookie("token", undefined);
    notifications.show({
      title: "Come Again 👋",
      message: "Successfully Logged out!",
      autoClose: 5000,
      icon: <FaRegCheckCircle />,
    });
    navigate.push("/");
  };

  return (
    <>
      {loading ? (
        <Skeleton
          className={
            "md:w-3/5 h-12 border-2 border-[#ccc] flex items-center justify-evenly md:py-1 py-[0.2rem] px-1 gap-4 rounded-lg cursor-pointer"
          }
        />
      ) : (
        <Menu shadow="md" width={300}>
          <Menu.Target>
            <div className="md:w-3/5 border-2 border-[#ccc] flex items-center justify-evenly md:py-1 py-[0.2rem] px-1 gap-4 rounded-lg cursor-pointer">
              <Image
                src={personImg}
                alt=""
                className="w-14 h-14 rounded-[100%]"
              />
              <div className="flex-col hidden lg:flex">
                <h6 className="text-[11.4px] font-bold">{profile?.name}</h6>
                <p className="text-[11.4px] font-bold">
                  {(type == "leader" || type == "organisation") &&
                    profile?.district}
                </p>
              </div>
              <RiArrowDownSLine size={15} />
            </div>
          </Menu.Target>

          <Menu.Dropdown>
            <Menu.Item
            //   leftSection={
            //     <HiDesktopComputer
            //       style={{ width: rem(14), height: rem(14) }}
            //     />
            //   }
            >
              <p className="font-bold">Signed in as {profile?.name}</p>
            </Menu.Item>

            <Menu.Item key="settings" className="hover:bg-[#ccc]">
              My Report
            </Menu.Item>
            <Menu.Item key="analytics" className="hover:bg-[#ccc]">
              General Report
            </Menu.Item>
            <Menu.Item key="system" className="hover:bg-[#ccc]">
              System Settings
            </Menu.Item>
            <Menu.Item key="help_and_feedback" className="hover:bg-[#ccc]">
              Help & Feedback
            </Menu.Item>
            <Menu.Divider />

            <Menu.Label>Danger zone</Menu.Label>

            <Menu.Item
              onClick={open}
              color="red"
              leftSection={
                <MdDeleteForever style={{ width: rem(22), height: rem(22) }} />
              }
            >
              Log out
            </Menu.Item>
          </Menu.Dropdown>
          <Modal opened={opened} onClose={close}>
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
                onClick={logout}
                className="py-3 px-6 rounded-lg flex items-center justify-center bg-[#FF0000] text-white"
              >
                Logout
              </button>
            </div>
          </Modal>
        </Menu>
      )}
    </>
  );
}

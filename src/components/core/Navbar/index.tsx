"use client";
import { CiSearch } from "react-icons/ci";
// import
import { VscSettings } from "react-icons/vsc";
import { IoNotifications } from "react-icons/io5";
import { GoPersonAdd } from "react-icons/go";
import { RiArrowDownSLine } from "react-icons/ri";
import personImg from "@/assets/images/personImg.png";
import Image from "next/image";
import { rem } from "@mantine/core";
import { Spotlight, SpotlightActionData, spotlight } from "@mantine/spotlight";
import {
  IconHome,
  IconDashboard,
  IconFileText,
  IconSearch,
} from "@tabler/icons-react";
import { useDisclosure } from "@mantine/hooks";
import { Modal, Button } from "@mantine/core";
import NewLeader from "@/components/NewLeader";
import person from "@/assets/images/blckprob.png";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { setCookie } from "cookies-next";
import { useEffect, useState } from "react";
import { getMyProfile } from "@/utils/funcs/funcs";
import { notifications } from "@mantine/notifications";
import { FaRegCheckCircle } from "react-icons/fa";
interface Props {
  type: "citizen" | "leader" | "organisation";
}

const actions: SpotlightActionData[] = [
  {
    id: "home",
    label: "Home",
    description: "Get to home page",
    // onClick: () => console.log("Home"),
    leftSection: (
      <IconHome style={{ width: rem(24), height: rem(24) }} stroke={1.5} />
    ),
  },
  {
    id: "dashboard",
    label: "Dashboard",
    description: "Get full information about current system status",
    // onClick: () => console.log("Dashboard"),
    leftSection: (
      <IconDashboard style={{ width: rem(24), height: rem(24) }} stroke={1.5} />
    ),
  },
  {
    id: "documentation",
    label: "Documentation",
    description: "Visit documentation to lean more about all features",
    // onClick: () => console.log("Documentation"),
    leftSection: (
      <IconFileText style={{ width: rem(24), height: rem(24) }} stroke={1.5} />
    ),
  },
];

const Navbar = ({ type }: Props) => {
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
  const [openedLogout, { openL, closeL }] = useDisclosure(false);
  const navigate = useRouter();
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
  useEffect(() => {
    getMyProfile()
      .then((data: any) => {
        console.log("User Profile in Navbar -->", data);
        setProfile(data.data);
      })
      .catch((err: any) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <div className="w-full h-[15vh] md:h-[10vh] flex flex-col md:flex-row items-center justify-between mt-[10vh] md:mt-0">
        <Modal opened={openedLogout} onClose={closeL} size={"sm"}>
          <h5 className="w-full text-center">
            Are you sure you want to logout ?
          </h5>
          <div className="flex w-full items-center justify-between px-4 mt-10">
            <button
              onClick={closeL}
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
        <div className="w-full md:w-[49%] h-4/5 flex items-center gap-1">
          <div className="w-[95%] h-[85%] relative">
            <input
              placeholder="Search here . . ."
              className="w-[90%] h-[100%] bg-white p-2 pl-8 rounded-md text-[80%] outline-none"
            />
            <CiSearch size={14} className=" absolute top-5 md:top-4 left-2" />
          </div>
          <button
            className="w-[2.5rem] h-[2.5rem] rounded-lg flex items-center justify-center bg-[#001833]"
            onClick={spotlight.open}
          >
            <VscSettings
              color="white"
              size={18}
              className="font-extrabold cursor-pointer"
            />
          </button>
        </div>
        <div className="w-full md:w-[35%] h-4/5 flex items-center justify-center md:justify-end gap-5 mt-4 md:mt-0">
          <Link
            href={`/app/${type}/notifications`}
            className="w-[2.5rem] h-[2.5rem] rounded-lg flex items-center justify-center bg-[#001833]"
          >
            <IoNotifications
              color="white"
              size={18}
              className="font-extrabold"
            />
          </Link>
          {(type == "leader" || type == "organisation") && (
            <button
              onClick={open}
              className="w-[2.5rem] h-[2.5rem] rounded-lg flex items-center justify-center bg-[#FFF]"
            >
              <GoPersonAdd color="black" size={18} className="font-extrabold" />
            </button>
          )}
          <Link
            href={`/app/${type}/problems`}
            className="w-[2.5rem] h-[2.5rem] rounded-lg flex items-center justify-center bg-[#FFF]"
          >
            <Image src={person} alt="" className="w-6 h-6" />
          </Link>
          <Dropdown placement="bottom-start">
            <DropdownTrigger>
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
                      profile?.district + " District"}
                  </p>
                </div>
                <RiArrowDownSLine size={15} />
              </div>
            </DropdownTrigger>
            <DropdownMenu
              aria-label="User Actions"
              variant="flat"
              className={"bg-white px-3 py-5"}
            >
              <DropdownItem key="profile" className="h-14 gap-2">
                <p className="font-bold">Signed in as {profile?.name}</p>
              </DropdownItem>
              <DropdownItem key="settings" className="hover:bg-[#ccc]">
                My Report
              </DropdownItem>
              <DropdownItem key="analytics" className="hover:bg-[#ccc]">
                General Report
              </DropdownItem>
              <DropdownItem key="system" className="hover:bg-[#ccc]">
                System Settings
              </DropdownItem>
              <DropdownItem key="help_and_feedback" className="hover:bg-[#ccc]">
                Help & Feedback
              </DropdownItem>
              <DropdownItem
                key="logout"
                color="danger"
                className="hover:bg-[#FF0000] hover:text-white"
                onClick={openL}
              >
                Log Out
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </div>
        <Spotlight
          actions={actions}
          nothingFound="Nothing found..."
          highlightQuery
          searchProps={{
            leftSection: (
              <IconSearch
                style={{ width: rem(20), height: rem(20) }}
                stroke={1.5}
              />
            ),
            placeholder: "Search...",
          }}
        />
        <Modal opened={opened} onClose={close} size={"lg"}>
          <NewLeader close={close} />
        </Modal>
      </div>
    </>
  );
};
export default Navbar;

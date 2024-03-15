"use client";
import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/images/logo.png";
import { leaderRoutes } from "@/utils/routes/leader";
import { usePathname, useRouter } from "next/navigation";
import { CiLogout } from "react-icons/ci";
import { MdAccountBox } from "react-icons/md";
import { Modal, Button } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import toast from "react-hot-toast";
import { Route } from "@/typings";
import { FC } from "react";
import { useTranslation } from "react-i18next";
import { setCookie } from "cookies-next";
interface SidebarProps {
  routes: Route[];
}
const Sidebar: FC<SidebarProps> = ({ routes }) => {
  const navigate = useRouter();
  const [opened, { open, close }] = useDisclosure(false);
  const { t } = useTranslation();
  const path = usePathname();
  const isActive = (route: string): boolean => {
    if (path === route) return true;
    return false;
  };

  const logout = () => {
    setCookie("token", undefined);
    toast.success("Logged out successfully", {
      position: "top-right",
      duration: 4000,
    });
    navigate.push("/");
  };
  return (
    <>
      <div className="w-full h-[10vh] flex justify-between items-center fixed top-0 md:hidden bg-[#021428] z-50">
        <Link href={"/"} className="w-full flex items-center gap-6 px-8">
          <Image src={logo} alt="" />
        </Link>

        <div></div>
      </div>
      <div className="hidden h-full md:w-[19%] md:flex flex-col pt-12 md:">
        <Link href={"/"} className="w-full flex items-center gap-6 px-8">
          <Image src={logo} alt="" />
          <h4 className="text-white font-extrabold text-xl capitalize">
            RANGURURA
          </h4>
        </Link>

        <div className="w-full flex flex-col gap-0 mt-8">
          {routes.map((route) => {
            return (
              <Link
                href={route.path}
                className={`w-full py-5 flex items-center  text-white gap-7 hover:bg-[#5dc58c6e] ${
                  isActive(route.path)
                    ? "border-l-[3px] border-l-[#FFF] bg-[#20603D] px-9"
                    : "px-10"
                }`}
              >
                {isActive(route.path) ? (
                  <route.activeIcon size={20} />
                ) : (
                  <route.icon size={20} />
                )}
                <h5 className={isActive(route.path) ? "font-bold" : ""}>
                  {t(`sidebar.${route.name}`)}
                </h5>
              </Link>
            );
          })}

          {/* <div className="w-full mt-[5rem] flex flex-col "> */}
          <Link
            href={"/app/leader/profile"}
            className={`w-full py-5 flex items-center  text-white gap-7 mt-[5rem] hover:bg-[#5dc58c6e] ${
              isActive("/app/leader/profile")
                ? "border-l-[3px] border-l-[#FFF] bg-[#20603D] px-9"
                : "px-10"
            }`}
          >
            <MdAccountBox size={20} />
            <h5>{t("sidebar.my_account")}</h5>
          </Link>
          <button
            onClick={open}
            className={`w-full py-5 flex items-center  text-white gap-7 px-10 hover:bg-red-500`}
          >
            <CiLogout size={20} />
            <h5>{t("sidebar.logout")}</h5>
          </button>

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
                onClick={logout}
                className="py-3 px-6 rounded-lg flex items-center justify-center bg-[#FF0000] text-white"
              >
                Logout
              </button>
            </div>
          </Modal>
          {/* </div> */}
        </div>
      </div>
      <div className="w-full mx-1 fixed flex bg-[#FFF] bottom-0 z-50 min-[500px] md:hidden ">
        {routes.slice(0, 6).map((route) => {
          return (
            <Link
              href={route.path}
              className={`w-full py-5 flex items-center justify-center  text-white gap-7 hover:bg-[#5dc58c6e] ${
                isActive(route.path)
                  ? "md:border-l-[3px] md:border-l-[#FFF] bg-[#20603D] md:px-3 mx-1 md:mx-0"
                  : "md:px-4"
              }`}
            >
              {isActive(route.path) ? (
                <route.activeIcon size={20} color="black" />
              ) : (
                <route.icon size={20} color="black" />
              )}
            </Link>
          );
        })}
      </div>
    </>
  );
};
export default Sidebar;

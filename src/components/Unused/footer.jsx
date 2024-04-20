import React from "react";
import logo from "@/assets/images/logo-dark (1).png";
import appstore from "@/assets/vector/contactFooter/appstore.png";
import googleplay from "@/assets/vector/contactFooter/play-store 1.png";
import phone from "@/assets/vector/contactFooter/phone 4.png";
import facebook from "@/assets/vector/contactFooter/facebook 3.png";
import instagram from "@/assets/vector/contactFooter/instagram 2.png";
import mail from "@/assets/vector/contactFooter/Group.png";
import twitter from "@/assets/vector/contactFooter/Vector.png";
import Image from "next/image";
import vector from "@/assets/images/footer.svg";
import Link from "next/link";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t, i18n } = useTranslation();
  return (
    <section
      className="flex flex-col justify-between p-4 w-full gap-4 md:py-[6vh] footer-section"
      id="home"
    >
      <div className="flex max-[500px]:flex-col max-[500px]:items-center flex-row px-[3rem]">
        <div className="max-[500px]:w-full w-[50%] flex flex-col gap-4 md:justify-start justify-center text-white">
          <div className="flex gap-2 md:justify-start justify-center items-center">
            <a href="#home" className="no-underline mr-4">
              <Image src={logo} alt="" width={30} height={30} />
            </a>
            <h3 className="text-white font-bold text-lg">
              <a href="#home" className="no-underline">
                Rangurura
              </a>
            </h3>
          </div>
          <p className="text-left font-light">{t("footer.title_desc")}</p>
          <div className="flex flex-row justify-between font-semibold">
            <Link href="#home">{t("footer.home")}</Link>
            <Link href="#qns">{t("footer.problems")}</Link>
            <Link href="#contacts">{t("footer.contacts")}</Link>
            <Link href="/login">{t("footer.signin")}</Link>
            <Link href="/register">{t("footer.signup")}</Link>
          </div>
        </div>
        <div className="max-[500px]:w-full w-[50%] flex flex-col justify-end items-end gap-8">
          <div className="flex flex-col gap-6 justify-center items-center pt-10">
            <div className="flex flex-row items-center pl-4 gap-3 bg-white w-[15rem] h-[4rem] rounded pr-16 cursor-pointer">
              <Image
                src={appstore}
                alt=""
                width={5}
                height={31}
                className={"flex w-10 object-contain h-10 cursor-pointer"}
              />
              <div className="flex flex-col">
                <p className="font-bold">Download on</p>
                <h4 className="font-bold">App store</h4>
              </div>
            </div>
            <div className="flex flex-row items-center pl-4 gap-1 bg-white w-[15rem] h-[4rem] rounded pr-16 cursor-pointer">
              <Image
                src={googleplay}
                alt=""
                width={50}
                height={50}
                className="w-12 h-12 flex cursor-pointer"
              />
              <div className="flex flex-col">
                <p className="font-bold">Download on</p>
                <h4 className="font-bold">Play store</h4>
              </div>
            </div>
          </div>
          <div className="max-[500px]:w-full max-[500px]:flex-row max-[500px]:justify-between flex flex-col gap-2 justify-start items-start rounded max-[500px]:pr-0 pr-16">
            <div className="flex flex-row gap-1">
              <Image src={phone} alt="" className="w-6 h-6" />
              <p className="text-white font-light">+25078787878</p>
            </div>
            <div className="flex flex-row gap-6 pl-2 mt-2">
              <Image src={mail} alt="" className="w-8 h-5 cursor-pointer" />
              <Image src={facebook} alt="" className="w-6 h-6 cursor-pointer" />
              <Image
                src={instagram}
                alt=""
                className="w-6 h-6 cursor-pointer"
              />
              <Image src={twitter} alt="" className="w-6 h-6 cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-left px-[3rem] text-white font-bold mt-10">
        {" "}
        <span className="text-2xl mr-2"> &copy;</span> {t("footer.all_rights")}
      </div>
    </section>
  );
};

export default Footer;

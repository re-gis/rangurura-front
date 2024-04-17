"use client";
import { PinInput } from "@mantine/core";
import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/images/logo-dark (1).png";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { ClipLoader } from "react-spinners";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { getCookie } from "cookies-next";
import { useTranslation } from "react-i18next";
import { ApiEndpoint } from "@/constants";
import { notifications } from "@mantine/notifications";

const ForgotPassword = () => {
  const navigate = useRouter();
  const [loading, setLoading] = useState(false);
  const [pageLoading, setPageLoading] = useState(false);
  const [error, setError] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const { t } = useTranslation();
  const handleCodeSubmit = (e: any) => {
    e.preventDefault();
    setLoading(true);
    if (!phoneNumber) {
      setLoading(false);
      setError("Banza wandike Nimero Ubone kohereza");
      return;
    }
    ApiEndpoint.post("/users/otp/send", {
      phoneNumber: phoneNumber,
    })
      .then((res) => {
        setLoading(false);
        console.log(res.data);
        notifications.show({
          title: "Otp Sent",
          message: res.data.data,
          type: "success",
        });

        navigate.push("/verify");
      })
      .catch((err: any) => {
        setLoading(false);
        console.log(err);
        notifications.show({
          title: "Otp Sent",
          message: err?.response?.data.error,
          type: "error",
        });
      });
  };
  const resendVerification = () => {
    setError("");
    setPageLoading(true);
    setTimeout(() => {
      setPageLoading(false);
      toast.success("Verification code has been sent to your phone");
    }, 2300);
  };
  return (
    <div className="w-screen h-screen bg-[#EEF3F9] flex flex-col items-center justify-center px-5 md:px-0">
      <div className="w-full pb-10 flex flex-col items-center md:w-[35%] bg-white px-3 pb-10">
        <div className="w-full flex justify-start items-center py-2 mt-4">
          <span className="cursor-pointer" onClick={() => navigate.back()}>
            <MdKeyboardArrowLeft />
          </span>
        </div>
        <div className="flex justify-center cursor-pointer">
          <Link href="/">
            <Image src={logo} alt="Logo" width={40} height={40} />
          </Link>
        </div>
        <h3 className="text-[#001833] font-extrabold text-xl mt-2 text-center">
          {t("forgot.recover")}
        </h3>
        <div className="flex flex-row justify-center md:w-[80%] w-full px-2 md:px-0 md:gap-10 gap-3 py-6">
          <div className="flex flex-col w-full">
            <div className="flex flex-row relative">
              <div className="text-white bg-[#001833] w-[20px] h-[20px] flex items-center justify-center rounded-full z-50 ">
                1
              </div>
              <div className="bg-[#001833] h-[5px]  w-full flex-1 absolute   rounded-md mt-2"></div>
            </div>
            <p className="text-xs md:block hidden">{t("signup.info")}</p>
          </div>
          <div className="flex flex-col gap-3 w-full">
            <div className="flex flex-row relative ">
              <div className="bg-[#001833]  w-full flex-1 h-[5px] rounded-md mt-2 "></div>
              <div className="text-yellow-400 bg-[#001833] w-[20px] h-[20px] flex items-center justify-center rounded-full absolute right-0   top-0">
                2
              </div>
            </div>
            <p className="text-xs text-right mt-2">
              {t("signup.confirmation")}
            </p>
          </div>
        </div>
        <form
          onSubmit={handleCodeSubmit}
          className="w-full md:px-10 px-3 animate-fade-left flex items-center flex-col gap-y-6"
        >
          <div className="w-full flex flex-col gap-1">
            <p className="text-[#001833] text-[90%] font-semibold">
              {t("forgot.number")}
            </p>
            <input
              type="text"
              name="nationalId"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="border-[1.5px] text-[#001833] border-[#001833] outline-none py-[0.7rem] rounded-lg px-3"
              required
            />
          </div>
          {error ? <h6 className="text-[90%] text-red-600">{error}</h6> : <></>}
          <button
            type="submit"
            disabled={loading}
            className="bg-[#20603D] text-white py-3 px-6 w-52 rounded-lg"
          >
            {loading ? (
              <div className="w-full flex items-center justify-center">
                <ClipLoader size={18} color="white" />
              </div>
            ) : (
              t("forgot.continue")
            )}
          </button>
        </form>
      </div>
    </div>
  );
};
export default ForgotPassword;

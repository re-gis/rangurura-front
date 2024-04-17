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

const Verify = () => {
  const navigate = useRouter();
  const [loading, setLoading] = useState(false);
  const [pageLoading, setPageLoading] = useState(false);
  const [error, setError] = useState("");
  const [code, setCode] = useState("");
  const phoneNumber = getCookie("phone");
  const { t } = useTranslation();
  const handleCodeSubmit = (e: any) => {
    e.preventDefault();
    setLoading(true);
    if (!code) {
      setLoading(false);
      setError("Banza wandike Code Ubone Kwiyandikisha");
      return;
    }
    ApiEndpoint.post("/users/account/verify", {
      number: phoneNumber,
      otp: code,
    })
      .then((res) => {
        setLoading(false);
        console.log(res.data);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  };
  const resendVerification = () => {
    setError("");
    setPageLoading(true);
    ApiEndpoint.post("/users/otp/send", {
      phoneNumber: phoneNumber,
    })
      .then((res: any) => {
        console.log(res.data);
        notifications.show({
          title: "Resend Code",
          message: "Code Resent Successfully!",
          type: "info",
          autoClose: 5000,
        });
      })
      .catch((err: any) => {
        console.log(err);
        notifications.show({
          title: "Resend Code Error",
          message: err.response.data.error,
          type: "error",
          color: "#FF555D",
          autoClose: 5000,
        });
      })
      .finally(() => setPageLoading(false));
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
        <h3 className="text-[#001833] font-bold text-2xl text-center">
          {t("verify.verify")}
        </h3>
        <div className="flex flex-row justify-center md:w-[80%] w-full px-2 md:px-0 md:gap-10 gap-0 py-6">
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
        {pageLoading ? (
          <div className="w-full mt-8 flex items-center justify-center">
            <ClipLoader size={18} color="black" />
          </div>
        ) : (
          <>
            <form
              onSubmit={handleCodeSubmit}
              className=" animate-fade-left flex items-center flex-col gap-y-4"
            >
              <span className="font-bold text-sm opacity-80 text-center">
                {t("verify.tell")}{" "}
                <span className="text-[#1467C3]">{phoneNumber}</span>
              </span>
              <PinInput
                size="lg"
                placeholder=""
                inputMode="numeric"
                length={6}
                aria-label="One time code"
                className="font-poppins"
                onChange={(value: any) => {
                  setCode(value);
                }}
              />
              {error ? (
                <h6 className="text-[90%] text-red-600">{error}</h6>
              ) : (
                <></>
              )}
              <h6 className="font-bold">
                {t("verify.didntget")}{" "}
                <button
                  type="button"
                  onClick={resendVerification}
                  className="text-[#1467C3]"
                >
                  {t("verify.ask")}
                </button>
              </h6>
              <button
                type="submit"
                className="btn_primary text-white py-3 px-4 w-28 rounded-lg"
              >
                {loading ? (
                  <div className="w-full flex items-center justify-center">
                    <ClipLoader size={18} color="white" />
                  </div>
                ) : (
                  t("verify.verifyaccount")
                )}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};
export default Verify;

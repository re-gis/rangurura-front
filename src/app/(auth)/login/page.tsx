"use client";
import React, { useState } from "react";
import logo from "@/assets/images/logo-dark (1).png";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import axios from "axios";
import { ClipLoader } from "react-spinners";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { setCookie } from "cookies-next";
import { jwtDecode } from "jwt-decode";
import { ApiEndpoint } from "@/constants";
const Login = () => {
  const { t } = useTranslation();
  const navigate = useRouter();
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [displayText, setDisplayText] = useState<string>(t("login.login"));
  const [formData, setFormData] = useState({
    nationalId: "",
    password: "",
  });
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const login = (e: any) => {
    e.preventDefault();
    setLoading(true);
    axios
      .post("http://194.163.167.131:7400/api/v1/auth/login", formData)
      .then((res) => {
        setCookie("token", res.data.data);
        const decoded = jwtDecode(res.data.data) as { role: string };
        if (decoded.role == "UMUYOBOZI" || decoded.role == "ADMIN") {
          navigate.push("/app/leader");
          toast.success(t("Leader Logged in successfully!"));
        } else if (decoded.role == "UMUTURAGE") {
          navigate.push("/app/citizen");
          toast.success(t("Citizen Logged in successfully!"));
          setLoading(false);
          navigate.push("/app/citizen");
          setDisplayText("Redirecting ...");
        } else {
          toast.error("Role Not valid!");
        }
        setCookie("token", res?.data?.data);
      })
      .catch((err: any) => {
        console.log("Error occured: ", err.message);
        setLoading(false)
        if (err?.response?.data?.success) {
          if (
            String(err?.response?.data?.error) ==
            "Verify the account to continue!"
          ) {
            return navigate.push("/verify");
          }
          return toast.error(err?.response?.data?.error);
        } else {
          return toast.error(err.message);
        }
      });
  };
  return (
    <section
      className="flex justify-center items-center bg-[#EEF3F9] h-screen p-10"
      id="login"
    >
      <div className="bg-white p-7 rounded-xl w-full md:w-[60%] max-w-[450px]">
        <div className="flex justify-center cursor-pointer">
          <Link href="/">
            <Image src={logo} alt="Logo" width={40} height={40} />
          </Link>
        </div>
        <h3 className="text-[#001833] font-bold text-2xl text-center">
          {t("login.login")}
        </h3>
        <form
          className="flex flex-col justify-center py-6 gap-4"
          onSubmit={login}
        >
          <div className="flex flex-col gap-3">
            <p className="text-[#001833] text-base font-semibold">
              {t("login.id")}
            </p>
            <input
              type="text"
              name="nationalId"
              value={formData.nationalId}
              onChange={(e) => handleChange(e)}
              placeholder="123456789123457"
              className="sub_input  rounded-lg px-3"
              required
            />
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-[hsl(212,100%,10%)] text-base font-semibold ">
              {t("login.password")}
            </p>
            <div className=" flex flex-row  justify-start relative">
              <div className="w-full relative">
                <input
                  type={showPassword ? "text" : "password"}
                  className="sub_input"
                  placeholder="****************"
                  id="ijambo_banga"
                  name="password"
                  value={formData.password}
                  onChange={(e) => handleChange(e)}
                  required
                />
                <span
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute top-4 right-3 cursor-pointer"
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>
            </div>
          </div>
          <p className="text-end">
            <Link href="/forgot" className="text-cyan-600 no-underline">
              {t("login.forgot_password")}
            </Link>
          </p>
          <div className="flex flex-col items-center justify-center gap-3 py-2 font-semibold text-base">
            <button
              type="submit"
              className="btn_primary text-white py-3 px-10 rounded-lg"
            >
              {loading ? (
                <div className="w-full flex items-center justify-center">
                  <ClipLoader size={18} color="white" />
                </div>
              ) : (
                displayText
              )}
            </button>
            <p className="text-[#717070] font-medium">
              {t("login.first_time")}
              <span className="text-cyan-600 ml-2">
                <Link href="/register">{t("login.create_account")}</Link>
              </span>
            </p>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Login;

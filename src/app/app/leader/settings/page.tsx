"use client";
import { useState } from "react";
import personImg from "@/assets/images/personImg.png";
import closeImg from "@/assets/images/close.png";
import SettingsProfile from "@/components/Settings/Profile";
import SettingsTheme from "@/components/Settings/Theme";
import SettingsLanguage from "@/components/Settings/Language";
import { useRouter } from "next/navigation";
import Image from "next/image";

const ProblemsPage = () => {
  const navigate = useRouter();
  const [activated, setActivated] = useState("account");
  const handleActivate = (button: any) => {
    console.log(button);
    setActivated(button);
  };

  return (
    <div className="w-full h-screen flex flex-col justify-start items-center pt-9">
      <div className="w-[70%] h-[50%] bg-white rounded-[10px]">
        <div className="w-full py-4 px-4 flex justify-between items-center">
          <h6>Settings</h6>
          <Image src={closeImg} alt="" className="w-6 h-6 cursor-pointer" />
        </div>
        <hr className="w-[95%] mx-auto" />
        <div className="w-full h-4/5 px-4 flex justify-start gap-4 pl-3 py-3">
          <div className="w-[20%] flex flex-col">
            <button
              type="button"
              className={`py-2 px-4 rounded ${
                activated == "account" ? "bg-[#ccc]" : ""
              }  my-1`}
              onClick={() => setActivated("account")}
            >
              Account
            </button>
            <button
              type="button"
              className={`py-2 px-4 rounded ${
                activated == "theme" ? "bg-[#ccc]" : ""
              }  my-1`}
              onClick={() => setActivated("theme")}
            >
              Theme
            </button>
            <button
              type="button"
              className={`py-2 px-4 rounded ${
                activated == "language" ? "bg-[#ccc]" : ""
              }  my-1`}
              onClick={() => setActivated("language")}
            >
              Language
            </button>
          </div>

          {activated == "account" ? (
            <SettingsProfile />
          ) : activated == "theme" ? (
            <SettingsTheme />
          ) : (
            <SettingsLanguage />
          )}
        </div>
      </div>
    </div>
  );
};
export default ProblemsPage;

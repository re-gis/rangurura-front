"use client";
import { useState, useEffect } from "react";
import { getCookie, setCookie } from "cookies-next";
import { IoClose } from "react-icons/io5";
import { useTranslation } from "react-i18next";

const Banner = () => {
  const [showBanner, setShowBanner] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    const cookieValue = getCookie("showbanner");
    if (!cookieValue || cookieValue) {
      setShowBanner(true);
    }
  }, []);

  const closeBanner = () => {
    setCookie("showbanner", "false");
    setShowBanner(false);
  };

  return (
    <div className={`banner ${showBanner ? "banner-show" : "banner-hide"}`}>
      <h1 className="font-bold text-[120%]">
        Application Migration in Progress 🚀
      </h1>
      <h6>
        We're moving to a new server for better performance. Sorry for the
        inconvenience. Be back soon! 🛠️
      </h6>

      <span
        className="py-2 px-2 absolute right-7 top-7 cursor-pointer"
        onClick={closeBanner}
      >
        <IoClose size={17} />
      </span>
    </div>
  );
};

export default Banner;

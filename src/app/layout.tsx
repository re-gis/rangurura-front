"use client";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { NextUIProvider } from "@nextui-org/react";
import { Next13ProgressBar } from "next13-progressbar";
import { Suspense, useEffect } from "react";
import { BarLoader, ClipLoader } from "react-spinners";
import { MantineProvider } from "@mantine/core";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Toaster } from "react-hot-toast";
import Image from "next/image";
import logo from "@/assets/images/logo-dark (1).png";
import "@mantine/spotlight/styles.css";
import "@mantine/dates/styles.css";
import "@mantine/core/styles.css";
import { I18nextProvider } from "react-i18next";
import i18n from "../../i18n";
import { getCookie, setCookie } from "cookies-next";
import ChatProvider, { ChatState } from "@/context/ChatContext";
import Banner from "@/components/Banner";
import { store } from "@/store/index";
import { Provider } from "react-redux";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    if (!getCookie("lang")) {
      setCookie("lang", "ki");
    }
  }, []);

  const { fontSize } = ChatState();
  return (
    <html lang="en">
      <head>
        <title>Rangurura</title>
        <meta
          name="description"
          content="An All-In-On app for posting suggestions and problems but rwandan citizens"
        />
        <meta
          name="keywords"
          content="rangurura rangurura-app problems-postings"
        />
        <link rel="shortcut icon" href="/logo.png" type="image/x-icon" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,opsz,wght@1,6..12,300&family=Poppins:ital,wght@0,100;0,300;1,300&family=Roboto:wght@100&display=swap"
          rel="stylesheet"
        />
        <script
          type="module"
          src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"
        ></script>
        <script src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>
      </head>
      <body className={poppins.className + ` text-[${13}px] relative`}>
        <NextUIProvider>
          <MantineProvider>
            {/* <Provider store={store}> */}
            <Next13ProgressBar height={"4px"} color="#20603D" />
            <ChatProvider>
              <Suspense
                fallback={
                  <div className="w-screen h-screen bg-white flex flex-col gap-3 items-center justify-center">
                    <div className="flex gap-3 items-center">
                      <Image
                        alt="Rangurura Logo"
                        src={logo}
                        width={30}
                        height={30}
                      />
                      <h2 className="text-[1.6rem] font-extrabold">
                        RANGURURA
                      </h2>
                    </div>
                    <ClipLoader color="#001833" size={25} />
                  </div>
                }
              >
                <I18nextProvider i18n={i18n}>{children}</I18nextProvider>
              </Suspense>
            </ChatProvider>
            {/* </Provider> */}
          </MantineProvider>
        </NextUIProvider>
        <Toaster />
      </body>
    </html>
  );
}

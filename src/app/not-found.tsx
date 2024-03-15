"use client";
import Navbar from "@/components/core/Navbar";
import Link from "next/link";
import { useRouter } from "next/navigation";

function NotFoundPage() {
  const navigate = useRouter();
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center bg-white">
      <h5 className="text-[25px]">Ooops! Page Not Found.</h5>
      <h1 className="text-[20px]">You Are Lost!</h1>
      <button
        onClick={() => navigate.back()}
        className="py-3 px-9 mt-5 border-[1px] border-[#ccc] rounded-lg"
      >
        Return
      </button>
    </div>
  );
}

export default NotFoundPage;

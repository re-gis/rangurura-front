"use client";
import bg from "@/assets/images/background.png";
import { ChatState } from "@/context/ChatContext";
import { Chat } from "@/typings";
import Image from "next/image";
import { useEffect, useState } from "react";
import test from "@/assets/images/Plus.png";

const MessagesArea = () => {
  const { activeChatId } = ChatState();
  const [activeChat, setActiveChat] = useState(
    JSON.parse(
      localStorage.getItem("activeChat") ??
        JSON.stringify({
          image: test,
          user: "Dr. David Palliston",
          time: "11:30",
          latestMessage: "",
          id: 1,
          status: "Offline",
        }),
    ),
  );
  return (
    <div className="w-[64%] h-full bg-white rounded-lg chat-area">
      <div className="w-full h-16 rounded-t-[1rem] bg-[#0075FF] flex flex-col items-center justify-center pl-5">
        <div className="w-full flex items-start justify-start gap-4">
          <Image
            src={activeChat?.image}
            alt={`${activeChat?.user}`}
            className="w-10 h-10"
          />
          <div className="flex flex-col items-start font-bold text-white">
            <h5>{activeChat?.user}</h5>
            <h5 className="text-[80%] text-[#00FF00] font-semibold">
              {activeChat?.status}
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MessagesArea;

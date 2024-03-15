"use client";
import Image, { StaticImageData } from "next/image";
import test from "@/assets/images/Plus.png";
import test1 from "@/assets/images/Plus1.png";
import test2 from "@/assets/images/Plus2.png";
import test3 from "@/assets/images/Plus3.png";
import test4 from "@/assets/images/Plus4.png";
import test5 from "@/assets/images/Plus5.png";
import test6 from "@/assets/images/Plus6.png";
import { useEffect, useState } from "react";
import { Chat } from "@/typings";
import { ChatState } from "@/context/ChatContext";
const ChatsContainer = () => {
  const chats = [
    {
      image: test,
      user: "Dr. David Palliston",
      time: "11:30",
      latestMessage: "",
      id: 1,
      status: "Offline",
    },
    {
      image: test1,
      user: "Dr Joel Paulliston",
      time: "11:30",
      latestMessage: "Sent attachment",
      id: 2,
      status: "Online",
    },
    {
      image: test2,
      user: "Elizabeth Polson ",
      time: "11:30",
      latestMessage: "Sent attachment",
      id: 3,
      status: "Online",
    },
    {
      image: test3,
      user: "EG Subramani",
      time: "11:30",
      latestMessage: "Sent attachment",
      id: 4,
      status: "Offline",
    },
    {
      image: test4,
      user: "Ranjan Maari",
      time: "11:30",
      latestMessage:
        "Thank you for scheduling my appointment. I confirm that I will be present tomorrow at the designated time",
      id: 5,
      status: "Online",
    },
    {
      image: test5,
      user: "Philipile Gopal",
      time: "11:30",
      latestMessage: "Sent attachment",
      id: 6,
      status: "Offline",
    },
    {
      image: test6,
      user: "Sumanth Tinson",
      time: "11:30",
      latestMessage: "Sent attachment",
      id: 7,
      status: "Online",
    },
    {
      image: test,
      user: "Dr. David Palliston",
      time: "11:30",
      latestMessage: "Sent attachment",
      id: 8,
      status: "Online",
    },
  ];
  const [activeChatID, setActiveChatID] = useState(0);

  useEffect(() => {
    localStorage.setItem("activeChatID", String(0));
    localStorage.setItem("activeChat", JSON.stringify(chats[0]));
  }, []);
  return (
    <div className="w-[34%] h-full bg-white rounded-[1rem]">
      <div className="w-full h-16 rounded-t-[1rem] border-b border-b-[1px] border-b-[#ccc] flex flex-col items-center justify-center">
        <input
          type="text"
          name="search"
          id=""
          placeholder="Search"
          className="w-4/5 h-8 rounded-[0.8rem] text-[80%] border-none outline-none bg-[#9696961d] pl-5"
        />
      </div>
      <div className="w-full h-[90%] flex flex-col items-center pt-3">
        {chats.map((chat) => {
          return (
            <div
              className={`w-full flex justify-center hover:bg-[#E8F3FF] cursor-pointer ${
                chat.id === activeChatID ? "bg-[#E8F3FF]" : ""
              }`}
              onClick={() => {
                localStorage.setItem("activeChat", JSON.stringify(chat));
                localStorage.setItem("activeChatID", String(chat.id));
                setActiveChatID(chat.id);
              }}
            >
              <div className="w-[85%] flex justify-between items-start border-b border-b-[1px] border-b-[#E5E5E5] py-2">
                <Image src={chat.image} alt="" className="w-14 h-14" />
                <div className="w-[45%] h-full flex flex-col gap-2 mr-[4rem]">
                  <h5 className="text-[90%] font-bold text-[#283E58]">
                    {chat.user}
                  </h5>
                  <h5 className="text-[80%] text-[#969696]">
                    {chat.latestMessage && chat.latestMessage.length > 20
                      ? `${chat.latestMessage.slice(0, 18)} . . .`
                      : chat.latestMessage.length < 20 &&
                          chat.latestMessage.length != 0
                        ? chat.latestMessage
                        : "No message sent"}
                  </h5>
                </div>
                <h5 className="text-[80%] text-[#969696]">{chat.time}</h5>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default ChatsContainer;

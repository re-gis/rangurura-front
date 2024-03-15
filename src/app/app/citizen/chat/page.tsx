"use client";
import ChatsContainer from "@/components/Chat/ChatsContainer";
import MessagesArea from "@/components/Chat/MessageArea";

const Page = () => {
  return (
    <div className="w-full md:h-[90%] p-8">
      <header className="w-full flex items-center justify-between">
        <h5 className="pl-14 md:pl-0 text-[120%] font-bold text-[#374858]">
          Messages
        </h5>
      </header>
      <div className="w-full h-[90%] flex justify-between">
        <ChatsContainer />
        <MessagesArea />
      </div>
    </div>
  );
};
export default Page;

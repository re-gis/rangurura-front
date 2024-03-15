import { Chat } from "@/typings";
import {
  ReactComponentElement,
  ReactElement,
  createContext,
  useContext,
  useState,
} from "react";
import img from "@/assets/images/person.png";

const ChatContext = createContext<any>(0);
const ChatProvider = ({ children }: { children: ReactElement }) => {
  const [fontSize, setFontSize] = useState<number>(13);
  const [activeChat, setActiveChat] = useState<Chat>({
    image: img,
    user: "",
    time: "",
    latestMessage: "",
    id: 0,
    status: "",
  });
  const [activeChatID, setActiveChatID] = useState<number>(0);

  const handleSetActive = (chat: Chat) => {
    console.log(chat);
    localStorage.setItem("activeChat", JSON.stringify(chat));
  };

  return (
    <ChatContext.Provider
      value={{
        activeChat,
        setActiveChat,
        activeChatID,
        setActiveChatID,
        handleSetActive,
        fontSize,
        setFontSize,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};

export const ChatState = () => {
  return useContext(ChatContext);
};

export default ChatProvider;

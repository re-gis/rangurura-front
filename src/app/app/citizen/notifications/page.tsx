"use client"
import { notifications as notificationsData } from "@/constants";
import { TfiReload } from "react-icons/tfi";
import { MdOutlineMarkEmailRead } from "react-icons/md"; 
import { useState } from "react";

const Page = () => {
    const [notifications, setNotifications] = useState(notificationsData);
    const markAllAsRead = ()=>{
        setNotifications(
            notifications.map(notification=>({
                ...notification,
                read: true
            }))
        )
    }
    const markSingleAsRead = (notificationId: any) => {
        setNotifications((prevNotifications) =>
          prevNotifications.map((notification) =>
            notification.id === notificationId ? { ...notification, read: true } : notification
          )
        );
      };
  return (
    <div className="w-full h-[90%] flex items-center justify-between mt-4">
      <div className="w-full h-full">
        <div className="w-full flex items-center justify-between">
            <h1 className="text-[1.5rem] font-extrabold">Notifications</h1>
            <button
                type="button"
                className="text-[90%] bg-gradient-to-r from-gray-400 to-gray-300 flex items-center gap-2 text-white font-bold py-2 px-4 rounded-md"
                  onClick={markAllAsRead}
            >
                <MdOutlineMarkEmailRead />
                Mark All As Read
            </button>
        </div>
        <div className="w-full h-[90%] overflow-y-auto my-4 nofications-container">
            {notifications.map((notification: 
                {
                    id: number;
                    title: string;
                    date: string;
                    time: string;
                    description: string;
                    read: boolean;
                }, 
                    index
                )=>{
                return(
                    <div key={index} className={`w-[99%] px-2 py-3 border-l-5 rounded-r-lg ${notification.read ? "bg-[#e5eef9] border-l-[#8a8c8a5b]" : "bg-white border-l-green-400"} my-2`}>
                        <header className="w-full flex justify-between pb-2">
                            <h4 className="text-[80%]">{notification.title}</h4>
                            <h6 className="text-[80%]">{notification.date} at {notification.time}</h6>
                        </header>
                        <p className="text-[90%] relative w-full">
                            {notification.description}

                            {!notification.read &&
                             (
                                <button onClick={()=> markSingleAsRead(notification.id)} className="p-2 text-[80%] rounded-xl absolute right-0 bottom-[-0.5rem] bg-gradient-to-tl from-green-300  to-green-100 hover:from-blue-500  flex items-center gap-2">
                                    <MdOutlineMarkEmailRead/>
                                    Mark as Read
                                </button>
                            )}
                        </p>
                    </div>
                )
            })}
        </div>
      </div>
    </div>
  );
};
export default Page
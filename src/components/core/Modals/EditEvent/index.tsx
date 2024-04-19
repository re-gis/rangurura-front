import { Event } from "@/typings";
import { ApiEndpoint } from "@/constants/index";
import * as React from "react";
import { notifications } from "@mantine/notifications";
import { ClipLoader } from "react-spinners";
import { FaRegCheckCircle } from "react-icons/fa";
import { RxCrossCircled } from "react-icons/rx";

const EditEvent = ({ event, close }: { event: Event; close: Function }) => {
  const [loading, setLoading] = React.useState(false);
  const [newDesc, setNewDesc] = React.useState(event?.descriptions);
  const editEvent = () => {
    setLoading(true);
    const newEvent = {
      category: event.category,
      descriptions: newDesc,
      endDate: event.endDate,
      endTime: event.endTime,
      eventName: event.eventName,
      location: event.location,
      organizationLevel: event.organizationLevel,
      startDate: event.startDate,
      startTime: event.startTime,
    };
    ApiEndpoint.put(`/events/update_event/${event.id}`, newEvent)
      .then((res) => {
        notifications.show({
          title: "Edit Event",
          message: "Successfully Edited Event!",
          autoClose: 5000,
          icon: <FaRegCheckCircle />,
        });
        close();
      })
      .catch((err) => {
        notifications.show({
          title: "Edit Event",
          message: "Error occurred when editing an event!",
          color: "#FF555D",
          autoClose: 5000,
          icon: <RxCrossCircled />,
        });
      })
      .finally(() => setLoading(false));
  };
  return (
    <div className="w-full h-full flex flex-col gap-3 items-center">
      <header className="w-full text-center font-extrabold text-lg">
        Edit Announcement
      </header>
      <div className="w-full flex flex-col">
        <h2>Name: {event?.eventName}</h2>
        <h2 className="mt-3 text-[90%] mb-[-0.71rem] font-bold">
          Edit Description:{" "}
        </h2>
        <textarea
          value={newDesc}
          onChange={(e: any) => setNewDesc(e.target.value)}
          className="border border-[#ccc] outline outline-blue-500 caret-blue-500 my-3 p-2 text-justify rounded-lg text-[90%] bg-[#f1f6ff] resize-none"
        />
        <div className="w-full mt-5 flex justify-between md:px-[10%]">
          <button
            onClick={() => close()}
            className="py-3 px-8 rounded-3xl flex items-center justify-center bg-[#ccc] text-black"
          >
            Cancel
          </button>
          <button
            disabled={event.descriptions === newDesc}
            onClick={editEvent}
            className={`py-3 px-8 rounded-3xl flex items-center justify-center ${
              event.descriptions === newDesc && "cursor-not-allowed"
            } bg-[#0075FF] text-white`}
          >
            {loading ? (
              <div className="w-full h-full flex items-center justify-center">
                <ClipLoader size={24} color="white" />
              </div>
            ) : (
              "Save"
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditEvent;

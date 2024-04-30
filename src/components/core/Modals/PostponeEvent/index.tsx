import { Event } from "@/typings";
import { ApiEndpoint } from "@/constants/index";
import * as React from "react";
import { notifications } from "@mantine/notifications";
import { ClipLoader } from "react-spinners";
import { FaRegCheckCircle } from "react-icons/fa";
import { RxCrossCircled } from "react-icons/rx";

const PostponeEvent = ({ event, close }: { event: Event; close: Function }) => {
  const [loading, setLoading] = React.useState(false);
  const [formData, setFormData] = React.useState({
    otherEndDateTime: event?.endDateTime || "",
    otherStartDateTime: event?.startDateTime || "",
  });
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;

    // Check if the changed field is startDateTime or endDateTime
    if (name === "otherStartDateTime" || name === "otherEndDateTime") {
      const formattedDateTime = value.replace("T", " ");
      setFormData((prevState) => ({
        ...prevState,
        [name]: formattedDateTime,
      }));
    } else {
      setFormData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  const postponeEvent = () => {
    setLoading(true);
    ApiEndpoint.put(`/events/event/${event.id}/postpone`, formData)
      .then((res) => {
        notifications.show({
          title: "Postpone Event",
          message: "Successfully Postponed Event!",
          autoClose: 5000,
          icon: <FaRegCheckCircle />,
        });
        close();
      })
      .catch((err) => {
        notifications.show({
          title: "Postpone Event",
          message: "Error occurred when postponing an event!",
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
        Postpone Announcement
      </header>
      <div className="">
        <div className="flex-row flex-1">
          <label htmlFor="otherStartDateTime" className="font-bold">
            New Start Date and time
          </label>
          <input
            type="datetime-local"
            className="sub_input"
            id="otherStartDateTime"
            name="otherStartDateTime"
            value={formData.otherStartDateTime}
            onChange={handleChange}
            step={1}
          />
        </div>
        <div className="flex-row flex-1">
          <label htmlFor="otherEndDateTime" className="font-bold">
            New End Date and time
          </label>
          <input
            type="datetime-local"
            className="sub_input"
            id="otherEndDateTime"
            name="otherEndDateTime"
            value={formData.otherEndDateTime}
            onChange={handleChange}
            step={1}
          />
        </div>
      </div>
      <div className="w-full mt-5 flex justify-between md:px-[10%]">
        <button
          onClick={() => close()}
          className="py-3 px-8 rounded-3xl flex items-center justify-center bg-[#ccc] text-black"
        >
          Cancel
        </button>
        <button
          disabled={
            event.startDateTime === formData.otherStartDateTime ||
            event.endDateTime === formData.otherEndDateTime
          }
          onClick={postponeEvent}
          className={`py-3 px-8 rounded-3xl flex items-center justify-center ${
            event.startDateTime === formData.otherStartDateTime ||
            event.endDateTime === formData.otherEndDateTime
              ? "cursor-not-allowed"
              : ""
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
  );
};

export default PostponeEvent;

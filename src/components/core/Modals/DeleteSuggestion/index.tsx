import { Suggestion } from "@/typings";
import { ApiEndpoint } from "@/constants/index";
import * as React from "react";
import { notifications } from "@mantine/notifications";
import { ClipLoader } from "react-spinners";
import { FaRegCheckCircle } from "react-icons/fa";
import { RxCrossCircled } from "react-icons/rx";

const DeleteSuggestion = ({
  suggestion,
  close,
}: {
  suggestion: Suggestion;
  close: Function;
}) => {
  const [loading, setLoading] = React.useState(false);
  const deleteSuggestion = () => {
    setLoading(true);
    ApiEndpoint.delete(`/suggestions/delete/${suggestion.id}`)
      .then((res) => {
        notifications.show({
          title: "Delete Suggestion",
          message: "Successfully Deleted Suggestion!",
          autoClose: 5000,
          icon: <FaRegCheckCircle />,
        });
        close();
      })
      .catch((err) => {
        notifications.show({
          title: "Delete Problem",
          message: "Error occurred when deleting a suggestion!",
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
        Are you sure you want to delete this Suggestion?
      </header>
      <div className="w-full flex flex-col">
        <h2>Location: {suggestion?.location}</h2>
        <h2>Description: </h2>
        <p className="border border-[#ccc] my-3 p-2 text-justify rounded-lg text-[90%] bg-[#e6edfc]">
          {suggestion.igitekerezo}
        </p>
        <div className="w-full mt-5 flex justify-between md:px-[10%]">
          <button
            onClick={() => close()}
            className="py-3 px-8 rounded-3xl flex items-center justify-center bg-[#ccc] text-black"
          >
            Cancel
          </button>
          <button
            onClick={deleteSuggestion}
            className="py-3 px-8 rounded-3xl flex items-center justify-center bg-[#FF555D] text-black"
          >
            {loading ? (
              <div className="w-full h-full flex items-center justify-center">
                <ClipLoader size={24} color="white" />
              </div>
            ) : (
              "Delete"
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteSuggestion;

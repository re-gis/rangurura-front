// import { Event } from "@/typings";
// import { ApiEndpoint } from "@/constants/index";
// import * as React from "react";
// import { notifications } from "@mantine/notifications";
// import { ClipLoader } from "react-spinners";
// import { FaRegCheckCircle } from "react-icons/fa";
// import { RxCrossCircled } from "react-icons/rx";
// import { categories, organisationLevels } from "@/constants/Enums";
// import { Select } from "@mantine/core";

// const EditEvent = ({ event, close }: { event: Event; close: Function }) => {
//   const [loading, setLoading] = React.useState(false);
//   const [newDesc, setNewDesc] = React.useState(event?.descriptions);
//   const[newOrg,setNewOrg] = React.useState(event?.organizationLevel);
//   const[newCateg,setNewCateg] = React.useState(event?.category)
//   const[newEndDateTime,setNewEndDateTime] = React.useState(event?.endDateTime)
//   const[newStartDateTime,setNewStartDateTime] = React.useState(event?.startDateTime)
//   const [newLoc,setNewLoc]=React.useState(event?.location)
//   const [newName,setNewName] = React.useState(event?.eventName)
//   const editEvent = () => {
//     setLoading(true);
//     const newEvent = {
//       category: newCateg,
//       descriptions: newDesc,
//       endDateTime: newEndDateTime,
//       eventName: newName,
//       location: newLoc,
//       organizationLevel:newOrg,
//       startDateTime: newStartDateTime,
//     };
//     ApiEndpoint.put(`/events/update_event/${event.id}`, newEvent)
//       .then((res) => {
//         notifications.show({
//           title: "Edit Event",
//           message: "Successfully Edited Event!",
//           autoClose: 5000,
//           icon: <FaRegCheckCircle />,
//         });
//         close();
//       })
//       .catch((err) => {
//         notifications.show({
//           title: "Edit Event",
//           message: "Error occurred when editing an event!",
//           color: "#FF555D",
//           autoClose: 5000,
//           icon: <RxCrossCircled />,
//         });
//       })
//       .finally(() => setLoading(false));
//   };
//   return (
//     <div className="w-full h-full flex flex-col gap-3 items-center">
//       <header className="w-full text-center font-extrabold text-lg">
//         Edit Announcement
//       </header>
//       <div className="w-full flex flex-col">
//       <div className="flex-row flex-1">
//               <label htmlFor="eventName" className="font-bold">
//                 Name
//               </label>
//               <input
//                 type="text"
//                 className="sub_input"
//                 id="name"
//                 name="name"
//                 value={newName}
//                 onChange={(e: any) => setNewName(e.target.value)}
//               />
//             </div>
//         <h2 className="mt-3 text-[90%] mb-[-0.71rem] font-bold">
//           Edit Description:{" "}
//         </h2>
//         <textarea
//           value={newDesc}
//           onChange={(e: any) => setNewDesc(e.target.value)}
//           className="border border-[#ccc] outline outline-blue-500 caret-blue-500 my-3 p-2 text-justify rounded-lg text-[90%] bg-[#f1f6ff] resize-none"
//         />
//              <div className="flex-col flex-1">
//               <label htmlFor="organisationLevel" className="font-bold">
//                 Organisation Level
//               </label>
//               <Select
//                 value={newOrg}
//                 onChange={(value:any)=>setNewOrg(value)}
//                 data={organisationLevels}
//               />
//             </div>
//             <div className="">
//             <div className="flex-row flex-1">
//               <label htmlFor="startDateTime" className="font-bold">
//                 Start Date and time
//               </label>
//               <input
//                 type="datetime-local"
//                 className="sub_input"
//                 id="startDateTime"
//                 name="startDateTime"
//                 value={newStartDateTime}
//                 onChange={(e: any) => setNewStartDateTime(e.target.value)}
//                 step={1}
//               />
//             </div>
//             <div className="flex-row flex-1">
//               <label htmlFor="endDateTime" className="font-bold">
//                 End Date and time
//               </label>
//               <input
//                 type="datetime-local"
//                 className="sub_input"
//                 id="endDateTime"
//                 name="endDateTime"
//                 value={newEndDateTime}
//                 onChange={(e: any) => setNewEndDateTime(e.target.value)}
//                 step={1}
//               />
//             </div>
//           </div>
//           <div className="my-1">
//             <div className="flex-row flex-1">
//               <label htmlFor="location" className="font-bold">
//                 Location
//               </label>
//               <input
//                 type="text"
//                 className="sub_input"
//                 placeholder="Ibiro by'umurenge"
//                 id="location"
//                 name="location"
//                 value={newLoc}
//                 onChange={(e: any) => setNewLoc(e.target.value)}
//               />
//             </div>
//             <div className="flex-row flex-1">
//               <label htmlFor="category" className="font-bold">
//                 Categories
//               </label>
//               <Select
//                 data={categories}
//                 value={newCateg}
//                onChange={(value: any) => setNewCateg(value)}
//               />
//             </div>
//           </div>
//         <div className="w-full mt-5 flex justify-between md:px-[10%]">
//           <button
//             onClick={() => close()}
//             className="py-3 px-8 rounded-3xl flex items-center justify-center bg-[#ccc] text-black"
//           >
//             Cancel
//           </button>
//           <button
//             disabled={event.descriptions === newDesc || event.eventName === newName || event.location === newLoc || event.organizationLevel === newOrg || event.startDateTime === newStartDateTime || event.endDateTime === newEndDateTime || event.category === newCateg}
//             onClick={editEvent}
//             className={`py-3 px-8 rounded-3xl flex items-center justify-center ${
//               event.descriptions === newDesc || event.eventName === newName || event.location === newLoc || event.organizationLevel === newOrg || event.startDateTime === newStartDateTime || event.endDateTime === newEndDateTime || event.category === newCateg && "cursor-not-allowed"
//             } bg-[#0075FF] text-white`}
//           >
//             {loading ? (
//               <div className="w-full h-full flex items-center justify-center">
//                 <ClipLoader size={24} color="white" />
//               </div>
//             ) : (
//               "Save"
//             )}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default EditEvent;



import { Event } from "@/typings";
import { ApiEndpoint } from "@/constants/index";
import * as React from "react";
import { notifications } from "@mantine/notifications";
import { ClipLoader } from "react-spinners";
import { FaRegCheckCircle } from "react-icons/fa";
import { RxCrossCircled } from "react-icons/rx";
import { categories, organisationLevels } from "@/constants/Enums";
import { Select } from "@mantine/core";

const EditEvent = ({ event, close }: { event: Event; close: Function }) => {
  const [loading, setLoading] = React.useState(false);
  const [formData, setFormData] = React.useState({
    category: event?.category || "",
    descriptions: event?.descriptions || "",
    endDateTime: event?.endDateTime || "",
    eventName: event?.eventName || "",
    location: event?.location || "",
    organizationLevel: event?.organizationLevel || "",
    startDateTime: event?.startDateTime || "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    // Check if the changed field is startDateTime or endDateTime
    if (name === "startDateTime" || name === "endDateTime") {
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

  const editEvent = () => {
    setLoading(true);
    ApiEndpoint.put(`/events/update_event/${event.id}`, formData)
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
        <div className="flex-row flex-1">
          <label htmlFor="eventName" className="font-bold">
            Name
          </label>
          <input
            type="text"
            className="sub_input"
            id="eventName"
            name="eventName"
            value={formData.eventName}
            onChange={handleChange}
          />
        </div>
        <h2 className="mt-3 text-[90%] mb-[-0.71rem] font-bold">Edit Description:</h2>
        <textarea
          value={formData.descriptions}
          onChange={handleChange}
          className="border border-[#ccc] outline outline-blue-500 caret-blue-500 my-3 p-2 text-justify rounded-lg text-[90%] bg-[#f1f6ff] resize-none"
          name="descriptions"
        />
        <div className="flex-col flex-1">
          <label htmlFor="organisationLevel" className="font-bold">
            Organisation Level
          </label>
          <Select
            value={formData.organizationLevel}
            onChange={(value: any) => setFormData((prevState) => ({ ...prevState, organizationLevel: value }))}
            data={organisationLevels}
          />
        </div>
        <div className="">
          <div className="flex-row flex-1">
            <label htmlFor="startDateTime" className="font-bold">
              Start Date and time
            </label>
            <input
              type="datetime-local"
              className="sub_input"
              id="startDateTime"
              name="startDateTime"
              value={formData.startDateTime}
              onChange={handleChange}
              step={1}
            />
          </div>
          <div className="flex-row flex-1">
            <label htmlFor="endDateTime" className="font-bold">
              End Date and time
            </label>
            <input
              type="datetime-local"
              className="sub_input"
              id="endDateTime"
              name="endDateTime"
              value={formData.endDateTime}
              onChange={handleChange}
              step={1}
            />
          </div>
        </div>
        <div className="my-1">
          <div className="flex-row flex-1">
            <label htmlFor="location" className="font-bold">
              Location
            </label>
            <input
              type="text"
              className="sub_input"
              placeholder="Ibiro by'umurenge"
              id="location"
              name="location"
              value={formData.location}
              onChange={handleChange}
            />
          </div>
          <div className="flex-row flex-1">
            <label htmlFor="category" className="font-bold">
              Categories
            </label>
            <Select
              data={categories}
              value={formData.category}
              onChange={(value: any) => setFormData((prevState) => ({ ...prevState, category: value }))}
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
              event.descriptions === formData.descriptions ||
              event.eventName === formData.eventName ||
              event.location === formData.location ||
              event.organizationLevel === formData.organizationLevel ||
              event.startDateTime === formData.startDateTime ||
              event.endDateTime === formData.endDateTime ||
              event.category === formData.category
            }
            onClick={editEvent}
            className={`py-3 px-8 rounded-3xl flex items-center justify-center ${
              event.descriptions === formData.descriptions ||
              event.eventName === formData.eventName ||
              event.location === formData.location ||
              event.organizationLevel === formData.organizationLevel ||
              event.startDateTime === formData.startDateTime ||
              event.endDateTime === formData.endDateTime ||
              event.category === formData.category
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
    </div>
  );
};

export default EditEvent;
``


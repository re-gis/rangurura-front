import React, { useState } from "react";
import logo from "@/assets/images/logo-dark (1).png";
import Link from "next/link";
import Image from "next/image";
import SelectLevel from "@/components/core/Level";
import { ApiEndpoint } from "@/constants";
import toast from "react-hot-toast";
import { ClipLoader } from "react-spinners";
import { select } from "@nextui-org/theme";

const NewEvent = ({ close }: { close: Function }) => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    category: "",
    descriptions: "",
    endDate: "",
    endTime: "",
    eventName: "",
    location: "",
    organizationLevel: "",
    startDate: "",
    startTime: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    setLoading(true);
    e.preventDefault();
    ApiEndpoint.post("/events/send_event", formData)
      .then((res: any) => {
        toast.success(
          res.data?.data?.message ?? "Announcement sent successfully!",
        );
        setFormData({
          category: "",
          descriptions: "",
          endDate: "",
          endTime: "",
          eventName: "",
          location: "",
          organizationLevel: "",
          startDate: "",
          startTime: "",
        });
        close();
      })
      .catch((error: any) => {
        toast.error("Error occured when creating announcement!");
      })
      .finally(() => setLoading(false));
  };

  return (
    <div className="w-full h-full bg-white rounded-xl mt-[-2rem]">
      <div className="flex justify-center cursor-pointer">
        <Link href="/">
          <Image
            src={logo}
            alt="Logo"
            width={40}
            height={40}
            className="mt-8"
          />
        </Link>
      </div>
      <h3 className="text-[#001833] font-bold text-2xl text-center">
        Create Announcement
      </h3>
      <div className="w-full flex-col flex justify-center items-center">
        <form
          onSubmit={submit}
          className="w-full flex flex-col gap-2 justify-center md:px-3 px-2 pt-2"
        >
          <div className="main_input">
            <div className="flex-col flex-1">
              <label htmlFor="eventName" className="font-bold">
                Announcement Name
              </label>
              <input
                type="text"
                className="sub_input"
                placeholder="Inama"
                id="eventName"
                name="eventName"
                value={formData.eventName}
                onChange={handleChange}
              />
            </div>
            <div className="flex-col flex-1">
              <label htmlFor="organisationLevel" className="font-bold">
                Organisation Level
              </label>
              <select
                required
                className="border-[#C3C3C3] border-2 rounded-md p-2"
                value={formData.organizationLevel}
                onChange={(e) =>
                  setFormData((prevState) => ({
                    ...prevState,
                    organizationLevel: e.target.value,
                  }))
                }
                name="organizationLevel"
              >
                <option value="">Select Value</option>
                <option value="AKAGARI">Akagari</option>
                <option value="UMURENGE">Umurenge</option>
                <option value="AKARERE">Akarere</option>
                <option value="INTARA">Intara</option>
              </select>
            </div>
          </div>
          <div className="main_input">
            <div className="flex-col flex-1">
              <label htmlFor="startDate" className="font-bold">
                Start Date
              </label>
              <input
                type="date"
                className="sub_input"
                id="startDate"
                name="startDate"
                value={formData.startDate}
                onChange={handleChange}
              />
            </div>
            <div className="flex-col flex-1">
              <label htmlFor="endDate" className="font-bold">
                End Date
              </label>
              <input
                type="date"
                className="sub_input"
                id="endDate"
                name="endDate"
                value={formData.endDate}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="main_input">
            <div className="flex-col flex-1">
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
            <div className="flex-col flex-1 ">
              <label htmlFor="category" className="font-bold">
                Categories
              </label>
              <select
                name="category"
                id="category"
                className="sub_input"
                value={formData.category}
                onChange={handleChange}
              >
                <option value="">Select Value</option>
                <option value="UBUZIMA">Ubuzima</option>
                <option value="UBUREZI">Uburezi</option>
                <option value="IMIYOBORERE">Imiyoborere</option>
                <option value="IMYIDAGADURO">Imyidagaduro</option>
              </select>
            </div>
          </div>
          <div className="main_input">
            <div className="flex-col flex-1">
              <label htmlFor="startTime" className="font-bold">
                Start Time
              </label>
              <input
                type="time"
                className="sub_input"
                id="startTime"
                name="startTime"
                value={formData.startTime}
                onChange={handleChange}
              />
            </div>
            <div className="flex-col flex-1">
              <label htmlFor="endTime" className="font-bold">
                End Time
              </label>
              <input
                type="time"
                className="sub_input"
                id="endTime"
                name="endTime"
                value={formData.endTime}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <label className="font-semibold text-black">Description</label>
            <textarea
              rows={2}
              placeholder="Enter Description"
              className="border-[#C3C3C3] border-2 rounded-md p-2"
              style={{ resize: "none" }}
              name="descriptions"
              value={formData.descriptions}
              onChange={handleChange}
            ></textarea>
          </div>
          <div className="flex items-center justify-center">
            <button
              type="submit"
              className="btn_primary py-2 rounded-md px-10 text-white"
            >
              {loading ? <ClipLoader color="white" /> : "Create Announcement"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default NewEvent;

"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { MdOutlineFileUpload } from "react-icons/md";
import upload from "../../../../assets/images/upload.png";
import { useGet } from "@/utils/funcs/useGet";
import { ApiEndpoint } from "@/constants";
import { notifications } from "@mantine/notifications";
import { FaRegCheckCircle } from "react-icons/fa";
import { RxCrossCircled } from "react-icons/rx";
import { ClipLoader } from "react-spinners";

const Profile = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const { data, loading }: { data: any; loading: boolean } = useGet({
    src: "/users/me",
  });
  const { profile }: any = data;
  useEffect(() => {
    if (!loading && data) {
      setFormData({
        cell: data?.data?.cell || "",
        district: data?.data?.district || "",
        imageUrl: data?.data?.imageUrl || "",
        name: data?.data?.name || "",
        nationalId: data?.data?.nationalId || "",
        phoneNumber: data?.data?.phoneNumber || "",
        province: data?.data?.province || "",
        sector: data?.data?.sector || "",
        village: data?.data?.village || "",
      });
    }
  }, [data, loading]);

  const [formData, setFormData] = useState({
    cell: "",
    district: "",
    imageUrl: "",
    name: "",
    nationalId: "",
    phoneNumber: "",
    province: "",
    sector: "",
    village: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleImageUpload: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedImage(URL.createObjectURL(file));
    }
  };

  const editProfile = () => {
    ApiEndpoint.put(`/users/update_profile/`, formData)
      .then((res) => {
        notifications.show({
          title: "Edit Profile",
          message: "Successfully Edited Profile!",
          autoClose: 5000,
          icon: <FaRegCheckCircle />,
        });
        // Handle any logic after successful update
      })
      .catch((err) => {
        notifications.show({
          title: "Edit Profile",
          message: "Error occurred when editing profile!",
          color: "#FF555D",
          autoClose: 5000,
          icon: <RxCrossCircled />,
        });
      });
  };

  return (
    <div className="bg-white w-full h-[90%] mt-5 rounded-2xl pb-20 float-center">
      <div className="title text-center">
        <h2 className="text-2xl font-bold py-4 text-center">
          Hindura Umwirondoro
        </h2>
      </div>
      <div className="lg:flex md:flex block lg:ml-16 mx-10 lg:mx-0 mt-3">
        {selectedImage ? (
          <Image
            src={selectedImage}
            alt="upload"
            className=" w-4/12 h-36 rounded-2xl bg-contain"
            width="270"
            height="100"
          />
        ) : (
          <Image src={upload} alt="upload" />
        )}
        <div className="lg:ml-20 ml-10 w-56 lg:space-y-6">
          <h1 className="text-xl font-bold mt-16">Hindura ifoto</h1>
          <label
            htmlFor="imageUpload"
            className=" flex bg-[#20603D] py-2 rounded-md px-10 text-white"
          >
            <MdOutlineFileUpload className="w-4 m-1" />
            Change photo
          </label>
          <input
            type="file"
            id="imageUpload"
            style={{ display: "none" }}
            accept="image/*"
            onChange={handleImageUpload}
            //  disabled={true}
          />
        </div>
      </div>

      <form
        className="w-full flex flex-col gap-y- justify-center ml-6 md:px-10 px-10 pt-6"
        // onSubmit={handleSubmit}
      >
        <div className="main_input">
          <div className="flex-col flex-1">
            <label htmlFor="amazina">Amazina</label>
            <input
              type="text"
              className="sub_input "
              placeholder="Isamaza sylvain"
              id="amazina"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="flex-col flex-1">
            <label htmlFor="numero_indangamuntu">Numero y'indangamuntu</label>
            <input
              type="text"
              className="sub_input "
              placeholder="2345678"
              id="nationalId"
              value={formData.nationalId}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="main_input">
          <div className="flex-col flex-1 ">
            <label htmlFor="numero_telefone">Numero ya telefone</label>
            <input
              type="text"
              className="sub_input "
              placeholder="Isamaza sylvain"
              id="numero_telefone"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
            />
          </div>
          <div className="flex-col flex-1 ">
            <label htmlFor="intara">Intara</label>
            <input
              name="province"
              id="intara"
              className="sub_input "
              value={formData.province}
              onChange={handleChange}
            ></input>
          </div>
        </div>
        <div className="main_input">
          <div className="flex-col flex-1 ">
            <label htmlFor="akarere">Akarere</label>
            <input
              name="sector"
              id="akarere"
              className="sub_input "
              value={formData.district}
              onChange={handleChange}
            ></input>
          </div>
          <div className="flex-col flex-1 ">
            <label htmlFor="umurenge">Umurenge</label>
            <input
              name="sector"
              id="umurenge"
              className="sub_input "
              value={formData.sector}
              onChange={handleChange}
            ></input>
          </div>
        </div>
        <div className="main_input">
          <div className="flex-col flex-1 ">
            <label htmlFor="akagari">Akagari</label>
            <input
              name="cell"
              id="akagari"
              className="sub_input "
              value={formData.cell}
              onChange={handleChange}
            ></input>
          </div>
          <div className="flex-col flex-1 ">
            <label htmlFor="umudugudu">Umudugudu</label>
            <input
              name="village"
              id="umudugudu"
              className="sub_input "
              value={formData.village}
              onChange={handleChange}
            ></input>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <button
            type="button"
            className="bg-[#20603D] py-2 mt-4 rounded-md px-10 text-white"
          >
            Update profile
          </button>
        </div>
      </form>
    </div>
  );
};

export default Profile;

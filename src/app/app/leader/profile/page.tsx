"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { MdOutlineFileUpload } from "react-icons/md";
import upload from "../../../../assets/images/upload.png";
import { useGet } from "@/utils/funcs/useGet";

const Profile = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const { data, loading }: { data: any; loading: boolean } = useGet({
    src: "/users/me",
  });
  const { profile }: any = data;
  const handleImageUpload: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedImage(URL.createObjectURL(file));
    }
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
            disabled={true}
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
              className="sub_input cursor-not-allowed"
              placeholder="Isamaza sylvain"
              id="amazina"
              name="name"
              value={data?.data?.name}
              disabled
            />
          </div>
          <div className="flex-col flex-1">
            <label htmlFor="numero_indangamuntu">Numero y'indangamuntu</label>
            <input
              type="text"
              className="sub_input cursor-not-allowed"
              placeholder="2345678"
              id="numbero_indangamuntu"
              value={data?.data?.nationalId}
              disabled
            />
          </div>
        </div>
        <div className="main_input">
          <div className="flex-col flex-1 ">
            <label htmlFor="numero_telefone">Numero ya telefone</label>
            <input
              type="text"
              className="sub_input cursor-not-allowed"
              placeholder="Isamaza sylvain"
              id="numero_telefone"
              name="numero_telefone"
              value={data?.data?.phoneNumber}
              disabled
            />
          </div>
          <div className="flex-col flex-1 ">
            <label htmlFor="intara">Intara</label>
            <input
              name="intara"
              id="intara"
              className="sub_input cursor-not-allowed"
              value={data?.data?.province}
              disabled
            ></input>
          </div>
        </div>
        <div className="main_input">
          <div className="flex-col flex-1 ">
            <label htmlFor="akarere">Akarere</label>
            <input
              name="akarere"
              id="akarere"
              className="sub_input cursor-not-allowed"
              value={data?.data?.district}
              disabled
            ></input>
          </div>
          <div className="flex-col flex-1 ">
            <label htmlFor="umurenge">Umurenge</label>
            <input
              name="umurenge"
              id="umurenge"
              className="sub_input cursor-not-allowed"
              value={data?.data?.sector}
              disabled
            ></input>
          </div>
        </div>
        <div className="main_input">
          <div className="flex-col flex-1 ">
            <label htmlFor="akagari">Akagari</label>
            <input
              name="akagari"
              id="akagari"
              className="sub_input cursor-not-allowed"
              value={data?.data?.cell}
              disabled
            ></input>
          </div>
          <div className="flex-col flex-1 ">
            <label htmlFor="umudugudu">Umudugudu</label>
            <input
              name="umudugudu"
              id="umudugudu"
              className="sub_input cursor-not-allowed"
              value={data?.data?.village}
              disabled
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

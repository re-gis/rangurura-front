"use client";
import React, { useState } from "react";
import Image from "next/image";
import { MdOutlineFileUpload } from "react-icons/md";
import upload from "../../../../assets/images/upload.png";

const Profile = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const handleImageUpload: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedImage(URL.createObjectURL(file));
    }
  };

  return (
    <div className="bg-white w-[90%] h-[90%] mt-5 rounded-2xl pb-20 float-center">
      <div className="title text-center">
        <h2 className="text-2xl font-bold py-4 text-center">
          Hindura Umwirondoro
        </h2>
      </div>
      <div className=" lg:flex md:flex block lg:ml-16 mx-10 lg:mx-0 mt-3">
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
            Upload photo
          </label>
          <input
            type="file"
            id="imageUpload"
            style={{ display: "none" }}
            accept="image/*"
            onChange={handleImageUpload}
          />
        </div>
      </div>

      <form
        className="w-[90%] flex flex-col gap-y- justify-center ml-6 md:px-10 px-10 pt-6"
        // onSubmit={handleSubmit}
      >
        <div className="main_input">
          <div className="flex-col flex-1">
            <label htmlFor="amazina">Amazina</label>
            <input
              type="text"
              className="sub_input"
              placeholder="Isamaza sylvain"
              id="amazina"
              name="name"
              //   value={name}
              //   onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="flex-col flex-1">
            <label htmlFor="numero_indangamuntu">Numero y'indangamuntu</label>
            <input
              type="text"
              className="sub_input"
              placeholder="2345678"
              id="numbero_indangamuntu"
              //   value={id}
              //   onChange={(e) => setId(e.target.value)}
            />
          </div>
        </div>
        <div className="main_input">
          <div className="flex-col flex-1 ">
            <label htmlFor="numero_telefone">Numero ya telefone</label>
            <input
              type="text"
              className="sub_input"
              placeholder="Isamaza sylvain"
              id="numero_telefone"
              name="numero_telefone"
              //   value={phoneNumber}
              //   onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>
          <div className="flex-col flex-1 ">
            <label htmlFor="intara">Intara</label>
            <select
              name="intara"
              id="intara"
              className="sub_input"
              //   onChange={(e) => setSelectedProvince(e.target.value)}
            >
              {/* {address.items.map((province,i) => 
                    <option key={i} value={province.name}>{province.name}</option>
                  )} */}
            </select>
          </div>
        </div>
        <div className="main_input">
          <div className="flex-col flex-1 ">
            <label htmlFor="akarere">Akarere</label>
            <select
              name="akarere"
              id="akarere"
              className="sub_input"
              //   onChange={(e) => setSelectedDistrict(e.target.value)}
            >
              {/* {districts.map((district) => <option value={district}>{district}</option>)} */}
            </select>
          </div>
          <div className="flex-col flex-1 ">
            <label htmlFor="umurenge">Umurenge</label>
            <select
              name="umurenge"
              id="umurenge"
              className="sub_input"
              //   onChange={(e) => setSelectedSector(e.target.value)}
            >
              {/* {sectors.map((sector) => <option value={sector}>{sector}</option>)} */}
            </select>
          </div>
        </div>
        <div className="main_input">
          <div className="flex-col flex-1 ">
            <label htmlFor="akagari">Akagari</label>
            <select
              name="akagari"
              id="akagari"
              className="sub_input"
              //   onChange={(e)=>setSelectedCell(e.target.value)}
            >
              {/* {cells.map((cell) => <option value={cell}>{cell}</option>)} */}
            </select>
          </div>
          <div className="flex-col flex-1 ">
            <label htmlFor="umudugudu">Umudugudu</label>
            <select
              name="umudugudu"
              id="umudugudu"
              className="sub_input"
              //   onChange={(e) => setSelectedVillage(e.target.value)}
            >
              {/* {villages.map((village) => <option value={village}>{village}</option>)}  */}
            </select>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <button className="bg-[#20603D] py-2 mt-4 rounded-md px-10 text-white">
            Update profile
          </button>
        </div>
      </form>
    </div>
  );
};

export default Profile;

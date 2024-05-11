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
  const [selectedImage, setSelectedImage] = useState<any>(null);
  const [defaultPic,setDefaultPic] = useState< string| null>("")
  const [load, setLoad] = useState(false);
  const { data, loading }: { data: any; loading: boolean } = useGet({
    src: "/users/me",
  });
  const { profile }: any = data;
  useEffect(() => {
    if (!loading && data) {
      console.log(data);
      setFormData({
        cell: data?.data?.cell || "",
        district: data?.data?.district || "",
        name: data?.data?.name || "",
        nationalId: data?.data?.nationalId || "",
        phoneNumber: data?.data?.phoneNumber || "",
        province: data?.data?.province || "",
        sector: data?.data?.sector || "",
        village: data?.data?.village || "",
      });
      setDefaultPic(data?.data?.imageUrl || "")
    }
  }, [data, loading]);

  const [formData, setFormData] = useState({
    cell: "",
    district: "",
    name: "",
    nationalId: "",
    phoneNumber: "",
    province: "",
    sector: "",
    village: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const image = e.target.files?.[0];
    if (image) {
      const reader = new FileReader();
      reader.onload = () => {
        const imageDataUrl = reader.result as string;
        setSelectedImage(imageDataUrl);
      };
      reader.readAsDataURL(image);
    }
  };
  

  const editProfile = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    // if (!selectedImage) {
    //   notifications.show({
    //     title: "Profile pic not found",
    //     message: "Please select an image.",
    //     color: "#FF555D",
    //     autoClose: 5000,
    //     icon: <RxCrossCircled />,
    //   });
    //   return;
    // }
  
    setLoad(true);
    
    // Convert the details to query parameters
    const detailsQueryParam = encodeURIComponent(JSON.stringify(formData));
    const queryParams = `?details=${detailsQueryParam}`;
  
    // Create FormData object and append the selected image
    const formDataWithImage = new FormData();
    formDataWithImage.append("profile", selectedImage);
  
    ApiEndpoint.post(`/users/updateprofile${queryParams}`, formDataWithImage)
      .then((response) => {
        setLoad(false);
        notifications.show({
          title: "Edit Profile",
          message: "Successfully Edited Profile!",
          autoClose: 5000,
          icon: <FaRegCheckCircle />,
        });
      })
      .catch((error) => {
        setLoad(false);
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
        {defaultPic && defaultPic?.length > 0 && selectedImage == null ? (
          <Image
            src={defaultPic}
            alt="upload"
            id="profile"
            className=" w-4/12 h-64 rounded-2xl bg-contain"
            width="270"
            height="100"
          />
        ) : selectedImage ? (
          <Image
            src={selectedImage}
            alt="upload"
            id="profile"
            className=" w-4/12 h-64 rounded-2xl bg-contain"
            width="270"
            height="100"
          />
        ) : (
          <Image src={upload} alt="upload" />
        )}
        <div className="lg:ml-20 ml-10 w-56 lg:space-y-6">
          <h1 className="text-xl font-bold mt-16">Hindura ifoto</h1>
          <label
            htmlFor="profile_b"
            className=" flex bg-[#20603D] py-2 rounded-md px-10 text-white"
          >
            <MdOutlineFileUpload className="w-4 m-1" />
            Change photo
          </label>
          <input
            type="file"
            id="profile_b"
            style={{ display: "none" }}
            accept="image/*"
            onChange={handleImageUpload}
            //  disabled={true}
          />
        </div>
      </div>
      <form
        className="w-full flex flex-col gap-y- justify-center ml-6 md:px-10 px-10 pt-6"
        onSubmit={editProfile}
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
              name="district"
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
        <div className="flex items-center justify-center mt-10">
          <button
            type="submit"
            className="bg-[#20603D] text-white p-2 px-10 rounded-md"
          >
            {load ? (
              <div className="w-full h-full flex justify-center items-center">
                <ClipLoader size={18} color="white" />
              </div>
            ) : (
              "Update profile"
            )}
          </button>
        </div>
      </form>
    </div>
  );
};
export default Profile;

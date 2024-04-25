"use client";
import React, { useEffect, useState } from "react";
import logo from "@/assets/images/logo-dark (1).png";
import Link from "next/link";
import Image from "next/image";
import { ApiEndpoint, districts, notifications } from "@/constants";
import { Select } from "@mantine/core";
import {
  categories,
  leaderCategory,
  organisationLevels,
} from "@/constants/Enums";
import { Cells, Sectors, Districts, Provinces, Villages } from "rwanda";
import { ClipLoader } from "react-spinners";
import { FaRegCheckCircle } from "react-icons/fa";
import { jwtDecode } from "jwt-decode";
import { Modal } from "@nextui-org/react";
import toast from "react-hot-toast";

const NewLeader = ({ close }: { close: Function }) => {
  const[phoneNumber,setPhoneNumber]=useState('');
  const [name, setName] = useState("");
  const[province,setProvince]=useState('')
  const [district, setDistrict] = useState("");
  const[sector,setSector]=useState('')
  const[cell,setCell] = useState('')
  const[village,setVillage] = useState('')
  const [localLevels, setLocalLevels] = useState([]);
  const [organisationLevel, setOrganisationLevel] = useState("");
  const [category, setCategory] = useState("");
  const [leadCategory, setLeadCategory] = useState("");
  const [location, setLocation] = useState("");
  const [selected, setSelected] = useState<any>([]);
  const [loading, setLoading] = useState(false);
  const [userRole, setUserRole] = useState("");
  const [isModelOpen, setIsModelOpen] = useState(false);

  useEffect(() => {
    // Get token from localStorage or wherever it's stored
    const token = localStorage.getItem("token");
    if (token) {
      const decodedToken: any = jwtDecode(token);
      setUserRole(decodedToken.role);
      // Automatically set the organization level based on user's role
      if (decodedToken.role === "ADMIN") {
        setOrganisationLevel("INTARA");
      } else if (decodedToken.role === "UMUYOBOZI") {
        setOrganisationLevel(decodedToken.organisationLevel);
      }
    }
  }, []);

  const handleChange = async (e: any) => {
    const nationalId = e.target.value; // Get the value of the national ID from the input field
    try {
      // Make API request to get user by national ID
      const res = await ApiEndpoint.post(`users/get_user_by_national_id`,{nationalId});
      // Check if user data is found
      if (res?.data) {
        if (res?.data?.data?.role === "UMUTURAGE") {
          console.log("I'm umuturage");
          setPhoneNumber(res.data.phoneNumber);
          setCell(res?.data?.data?.cell);
          setDistrict(res?.data?.data?.district);
          setName(res?.data?.data?.name);
          setProvince(res?.data?.data.province);
          setSector(res?.data?.data.sector);
          setVillage(res?.data?.data.village);
        } else if (res?.data?.data?.role === "UMUYOBOZI") {
          console.log("Already a leader, let's update");
        } else{
          console.log("Do not have an account");
          setIsModelOpen(true); 
        }
      } else {
        console.log("No user found with the provided national ID");
      }
    } catch (err) {
      console.log("An error occurred", err);
    } finally {
      setLoading(false); // Set loading state to false after API request completes
    }
  };
  

  const submit = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    const leader = JSON.parse(selected ?? "{}");
    const formData = {
      category: category,
      cell: leader?.cell,
      district: leader?.district,
      location: location,
      name: leader?.name,
      nationalId: leader?.nationalId,
      organizationLevel: organisationLevel,
      phoneNumber: leader?.phoneNumber,
      province: leader?.province,
      role: leader?.role,
      sector: leader?.sector,
      village: leader?.village,
    };

    // Submit leader data
    ApiEndpoint.post("/leaders/addLeader", formData)
      .then((res: any) => {
        // Show success notification
        // notifications.show({
        //   title: "Assign Leader",
        //   message: "Leader Assigned successfully!",
        //   autoClose: 5000,
        //   icon: <FaRegCheckCircle />,
        // });
        toast.success("leader assigned successfully")
        setLoading(false)

        // Clear form data
        setCategory("");
        setLeadCategory("");
        setLocation("");
        close();
      })
      .catch((err: any) => {
        // Show error toast
        toast.error(err.message);
        console.log(err);
        setLoading(false);
      })
      .finally(() => setLoading(false));
  };

  const submitAdditionalInfo = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    const formData = {
      category: category,
      cell: cell,
      district: district,
      location: location,
      name: name,
      nationalId: selected?.nationalId,
      organizationLevel: organisationLevel,
      phoneNumber: phoneNumber,
      province: province,
      role: leadCategory,
      sector: sector,
      village: village,
    };
  
    // Submit additional information
    ApiEndpoint.post("/leaders/addLeader", formData)
      .then((res: any) => {
        // Show success notification
        toast.success("Additional information submitted successfully");
        setLoading(false);
        close();
      })
      .catch((err: any) => {
        // Show error toast
        toast.error(err.message);
        console.log(err);
        setLoading(false);
      })
      .finally(() => setLoading(false));
  };
  

  // Set local levels based on the selected organisation level
  useEffect(() => {
    const levels =
      organisationLevel === "AKAGARI"
        ? [...new Set(Cells())]
        : organisationLevel === "UMURENGE"
        ? [...new Set(Sectors())]
        : organisationLevel === "AKARERE"
        ? [...new Set(Districts())]
        : [...new Set(Provinces() as string[])];

    setLocalLevels(levels as never[]);
  }, [organisationLevel]);

  return (
    <div className="bg-white rounded-xl h-full w-full mt-[-2rem]">
      <div className="flex justify-center cursor-pointer">
        <Link href="/">
          <Image src={logo} alt="Logo" width={40} height={40} className="mt-8" />
        </Link>
      </div>
      <h3 className="text-[#001833] font-bold text-2xl text-center">
        Register Leader
      </h3>
      <div className="w-full flex-col flex justify-center items-center">
        <form
          onSubmit={submit}
          className="w-full flex flex-col gap-5 justify-center md:px-10 px-6 pt-4"
        >
          {/* National ID Input */}
          <div className="main_input">
            <div className="flex-col flex-1">
              <label htmlFor="nationalId" className="font-bold">
                National ID
              </label>
              <input
                type="text"
                name="nationalId"
                placeholder="123456789123457"
                className="sub_input rounded-lg px-3"
                required
                onChange={handleChange}
              />
            </div>
          </div>
          {/* Organisation Level Input */}
          <div className="main_input">
  <div className="flex-col flex-1">
    <label htmlFor="organisationLevel" className="font-bold">
      Organisation Level
    </label>
    <input
      type="text"
      name="organisationLevel"
      placeholder="Akagari"
      value={organisationLevel}
      className="sub_input rounded-lg px-3"
      required
      disabled
    />
  </div>
</div>

          {/* Categories Select */}
          <div className="main_input">
            <div className="flex-col flex-1">
              <label htmlFor="category" className="font-bold">
                Categories
              </label>
              <Select data={categories} value={category} onChange={setCategory} />
            </div>
          </div>
          {/* Role Select */}
          <div className="main_input">
            <div className="flex-col flex-1">
              <label htmlFor="role" className="font-bold">
                Role
              </label>
              <Select data={leaderCategory} value={leadCategory} onChange={setLeadCategory} />
            </div>
          </div>
          {/* Location Select */}
          <div className="main_input">
            <div className="flex-col flex-1">
              <label htmlFor="location" className="font-bold">
                Location
              </label>
              <Select data={localLevels} value={location} onChange={setLocation} />
            </div>
          </div>
          {/* Submit Button */}
          <div className="flex items-center justify-center">
            <button type="submit" className="btn_primary py-2 rounded-md px-10 text-white">
              {loading ? (
                <div className="w-full h-full flex items-center justify-center">
                  <ClipLoader size={20} color="white" />
                </div>
              ) : (
                "Grant"
              )}
            </button>
          </div>
        </form>
      </div>
      {/* Modal for Additional Information */}
      <Modal open={isModelOpen} onClose={() => setIsModelOpen(false)}>
  {/* Additional Information Form */}
  <form onSubmit={submitAdditionalInfo} className="flex flex-col gap-5">
    {/* Phone Number */}
    <input type="text" placeholder="Phone Number" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
    {/* Cell */}
    <Select data={Cells()} value={cell} onChange={(value:any) => setCell(value)} placeholder="Select Cell" />
    {/* District */}
    <Select data={Districts()} value={district} onChange={(value:any) => setDistrict(value)} placeholder="Select District" />
    {/* Name */}
    <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
    {/* Province */}
    <Select data={Provinces()} value={province} onChange={(value:any) => setProvince(value)} placeholder="Select Province" />
    {/* Sector */}
    <Select data={Sectors()} value={sector} onChange={(value:any) => setSector(value)} placeholder="Select Sector" />
    {/* Village */}
    <Select data={Villages()} value={village} onChange={(value:any) => setVillage(value)} placeholder="Select Village" />
    
    {/* Submit Button */}
    <button type="submit">Submit</button>
  </form>
</Modal>

    </div>
  );
};

export default NewLeader;

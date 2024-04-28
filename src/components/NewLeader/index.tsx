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
import { getCookies } from "cookies-next";

const NewLeader = ({ close }: { close: Function }) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [name, setName] = useState("");
  const [nationalId, setNationalId] = useState("");
  const [province, setProvince] = useState("");
  const [district, setDistrict] = useState("");
  const [sector, setSector] = useState("");
  const [cell, setCell] = useState("");
  const [village, setVillage] = useState("");
  const [localLevels, setLocalLevels] = useState([]);
  const [organisationLevel, setOrganisationLevel] = useState("");
  const [category, setCategory] = useState("");
  const [leadCategory, setLeadCategory] = useState("");
  const [location, setLocation] = useState("");
  const [loading, setLoading] = useState(false);
  const [userRole, setUserRole] = useState("");
  const [isModelOpen, setIsModelOpen] = useState(false);

  useEffect(() => {
    // Get token from cookies
    const { token } = getCookies();
    if (token) {
      const decodedToken: any = jwtDecode(token);
      setUserRole(decodedToken.role);
      // Automatically set the organisation level based on the user's role
      if (decodedToken.role === "ADMIN") {
        setOrganisationLevel("INTARA");
      } else if (
        decodedToken.role === "UMUYOBOZI" &&
        decodedToken.organisationLevel === "AKARERE"
      ) {
        setOrganisationLevel("UMURENGE");
      } else if (
        decodedToken.role === "UMUYOBOZI" &&
        decodedToken.organisationLevel === "UMURENGE"
      ) {
        setOrganisationLevel("AKAGARI");
      } else if (
        decodedToken.role === "UMUYOBOZI" &&
        decodedToken.organisationLevel === "AKAGARI"
      ) {
        setOrganisationLevel("UMUDUGUDU");
      }
    }
  }, []);

  const handleChange = async (e: any) => {
    const nationalId = e.target.value;
    try {
      const res = await ApiEndpoint.post(`users/get_user_by_national_id`, {
        nationalId,
      });
      console.log("API response:", res);
      if (res?.data) {
        if (res?.data?.data?.role === "UMUTURAGE") {
          console.log("I'm umuturage");
          setNationalId(nationalId);
          setPhoneNumber(res.data?.data?.phone);
          setCell(res?.data?.data?.cell);
          setDistrict(res?.data?.data?.district);
          setName(res?.data?.data?.realName);
          setProvince(res?.data?.data.province);
          setSector(res?.data?.data.sector);
          setVillage(res?.data?.data.village);
        } else if (res?.data?.data?.role === "UMUYOBOZI") {
          console.log("Already a leader, let's update");
          setNationalId(nationalId);
          setPhoneNumber(res.data?.data?.phone);
          setCell(res?.data?.data?.cell);
          setDistrict(res?.data?.data?.district);
          setName(res?.data?.data?.realName);
          setProvince(res?.data?.data.province);
          setSector(res?.data?.data.sector);
          setVillage(res?.data?.data.village);
        } else {
          console.log("Do not have an account");
          setNationalId(nationalId);
          setIsModelOpen(true);
        }
      } else {
        console.log("No user found with the provided national ID");
      }
    } catch (err) {
      console.log("An error occurred", err);
    } finally {
      setLoading(false);
    }
  };
  const submit = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    const formData = {
      category: category,
      cell: cell,
      district: district,
      location: location,
      name: name,
      nationalId: nationalId,
      organizationLevel: organisationLevel,
      phoneNumber: phoneNumber,
      province: province,
      role: leadCategory,
      sector: sector,
      village: village,
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
        toast.success("leader assigned successfully");
        setLoading(false);

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
              <Select
                data={categories}
                value={category}
                onChange={setCategory}
              />
            </div>
          </div>
          {/* Role Select */}
          <div className="main_input">
            <div className="flex-col flex-1">
              <label htmlFor="role" className="font-bold">
                Role
              </label>
              <Select
                data={leaderCategory}
                value={leadCategory}
                onChange={setLeadCategory}
              />
            </div>
          </div>
          {/* Location Select */}
          <div className="main_input">
            <div className="flex-col flex-1">
              <label htmlFor="location" className="font-bold">
                Location
              </label>
              <Select
                data={localLevels}
                value={location}
                onChange={setLocation}
              />
            </div>
          </div>
          {isModelOpen && (
            <div>
              <h2 className="">
                The user has no account in Rangurura so you will have to fill in
                additional information
              </h2>
              <div className="main_input">
                <div className="flex-col flex-1">
                  <label htmlFor="name" className="font-bold">
                    Phone number
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Isamaza Sylvin"
                    className="sub_input rounded-lg px-3"
                    required
                    onChange={(e: any) => setName(e.target.value)}
                  />
                </div>
              </div>
              <div className="main_input">
                <div className="flex-col flex-1">
                  <label htmlFor="phone" className="font-bold">
                    Phone number
                  </label>
                  <input
                    type="number"
                    name="phone"
                    placeholder="+250788006677"
                    className="sub_input rounded-lg px-3"
                    required
                    onChange={(e: any) => setPhoneNumber(e.target.value)}
                  />
                </div>
              </div>
              <div className="main_input">
                <div className="flex-col flex-1 ">
                  <label htmlFor="intara">Province</label>
                  <select
                    name="province"
                    id="intara"
                    className="sub_input"
                    onChange={(e: any) => setProvince(e.target.value)}
                    required
                  >
                    {/* <option></option> */}
                    {Provinces().map((province: string) => {
                      return <option value={province}>{province}</option>;
                    })}
                  </select>
                </div>
              </div>

              <div className="main_input">
                <div className="flex-col flex-1 ">
                  <label htmlFor="akarere">District</label>
                  <select
                    name="district"
                    id="akarere"
                    className={`sub_input`}
                    onChange={(e: any) => setDistrict(e.target.value)}
                    required
                    // disabled={formData.province === ""}
                  >
                    {/* <option></option> */}
                    {Districts(province)?.map((district: string) => {
                      return <option value={district}>{district}</option>;
                    })}
                  </select>
                </div>
              </div>
              <div className="main_input">
                <div className="flex-col flex-1 ">
                  <label htmlFor="umurenge">Sector</label>
                  <select
                    name="sector"
                    id="umurenge"
                    className="sub_input"
                    onChange={(e: any) => setSector(e.target.value)}
                    required
                  >
                    {/* <option></option> */}
                    {Sectors(province, district)?.map((sector: string) => {
                      return <option value={sector}>{sector}</option>;
                    })}
                  </select>
                </div>
              </div>
              <div className="main_input">
                <div className="flex-col flex-1 ">
                  <label htmlFor="akagari">Cell</label>
                  <select
                    name="cell"
                    id="akagari"
                    className="sub_input"
                    onChange={(e: any) => setCell(e.target.value)}
                    required
                  >
                    {/* <option></option> */}
                    {Cells(province, district, sector)?.map((cell: string) => {
                      return <option value={cell}>{cell}</option>;
                    })}
                  </select>
                </div>
              </div>
              <div className="main_input">
                <div className="flex-col flex-1 ">
                  <label htmlFor="umudugudu">Villages</label>
                  <select
                    name="village"
                    id="umudugudu"
                    className="sub_input"
                    onChange={(e: any) => setVillage(e.target.value)}
                    required
                  >
                    {/* <option></option> */}
                    {Villages(province, district, sector, cell)?.map(
                      (village: string) => {
                        return <option value={village}>{village}</option>;
                      },
                    )}
                  </select>
                </div>
              </div>
            </div>
          )}

          {/* Submit Button */}
          <div className="flex items-center justify-center">
            <button
              type="submit"
              className="btn_primary py-2 rounded-md px-10 text-white"
            >
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
    </div>
  );
};

export default NewLeader;

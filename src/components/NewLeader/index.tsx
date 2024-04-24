// import React, { useState } from "react";
// import logo from "@/assets/images/logo-dark (1).png";
// import Link from "next/link";
// import Image from "next/image";
// import { ApiEndpoint } from "@/constants";
// import { Select } from "@mantine/core";
// import { leaders, categories, organisationLevels } from "@/constants/Enums";
// import CustomMultiSelect from "../core/MultiSelect";
// import { Cells, Sectors, Districts, Provinces } from "rwanda";
// import toast from "react-hot-toast";
// import { ClipLoader } from "react-spinners";
// import { notifications } from "@mantine/notifications";
// import { FaRegCheckCircle } from "react-icons/fa";

// const NewLeader = ({ close }: { close: Function }) => {
//   const [localLevels, setLocalLevels] = useState([]);
//   const [organisationLevel, setOrganisationLevel] = useState("");
//   const [category, setCategory] = useState("");
//   const [location, setLocation] = useState("");
//   const [selected, setSelected] = useState<any>([]);
//   const [loading, setLoading] = useState(false);

//   const submit = async (e: any) => {
//     e.preventDefault();
//     setLoading(true);
//     const leader = JSON.parse(selected ?? "{}");
//     const formData = {
//       category: category,
//       cell: leader?.cell,
//       district: leader?.district,
//       location: location,
//       name: leader?.name,
//       nationalId: leader?.nationalId,
//       organizationLevel: organisationLevel,
//       phoneNumber: leader?.phoneNumber,
//       province: leader?.province,
//       sector: leader?.sector,
//       village: leader?.village,
//     };
//     ApiEndpoint.post("/leaders/addLeader", formData)
//       .then((res: any) => {
//         notifications.show({
//           title: "Assign Leader",
//           message: "Leader Assigned successfully!",
//           autoClose: 5000,
//           icon: <FaRegCheckCircle />,
//         });
//         setOrganisationLevel("");
//         setCategory("");
//         setLocation("");
//         close();
//       })
//       .catch((err: any) => {
//         toast.error(err.message);
//         console.log(err);
//       })
//       .finally(() => setLoading(false));
//   };
//   React.useEffect(() => {
//     const levels =
//       organisationLevel === "AKAGARI"
//         ? [...new Set(Cells())]
//         : organisationLevel === "UMURENGE"
//           ? [...new Set(Sectors())]
//           : organisationLevel === "AKARERE"
//             ? [...new Set(Districts())]
//             : [...new Set(Provinces() as string[])];

//     setLocalLevels(levels as never[]);
//   }, [organisationLevel]);
//   return (
//     <div className="bg-white rounded-xl h-full w-full mt-[-2rem]">
//       <div className="flex justify-center cursor-pointer">
//         <Link href="/">
//           <Image
//             src={logo}
//             alt="Logo"
//             width={40}
//             height={40}
//             className="mt-8"
//           />
//         </Link>
//       </div>
//       <h3 className="text-[#001833] font-bold text-2xl text-center">
//         Register Leader
//       </h3>
//       <div className="w-full flex-col flex justify-center items-center">
//         <form
//           onSubmit={submit}
//           className=" w-full flex flex-col gap-5 justify-center md:px-10 px-6 pt-4"
//         >
//           <div className="main_input">
//             <div className="flex-col flex-1">
//               <label htmlFor="id" className="font-bold">
//                 Leader
//               </label>
//               <CustomMultiSelect
//                 selected={selected}
//                 setSelected={setSelected}
//                 datasrc="/users/all"
//               />
//             </div>
//           </div>
//           <div className="main_input">
//             <div className="flex-col flex-1 ">
//               <label htmlFor="akarere" className="font-bold">
//                 Categories
//               </label>
//               <Select
//                 data={categories}
//                 value={category}
//                 onChange={setCategory}
//               />
//             </div>
//           </div>
//           <div className="main_input">
//             <div className="flex-col flex-1 ">
//               <label htmlFor="intara" className="font-bold">
//                 Organisation level
//               </label>
//               <Select
//                 data={organisationLevels}
//                 value={organisationLevel}
//                 onChange={setOrganisationLevel}
//               />
//             </div>
//           </div>
//           <div className="main_input">
//             <div className="flex-col flex-1 ">
//               <label htmlFor="umudugudu" className="font-bold">
//                 Location
//               </label>
//               <Select
//                 data={localLevels}
//                 value={location}
//                 onChange={setLocation}
//               />
//             </div>
//           </div>
//           <div className="flex items-center justify-center">
//             <button
//               type="submit"
//               className="btn_primary py-2 rounded-md px-10 text-white"
//             >
//               {loading ? (
//                 <div className="w-full h-full flex items-center justify-center">
//                   <ClipLoader size={20} color="white" />
//                 </div>
//               ) : (
//                 "Grant"
//               )}
//             </button>
//           </div>
//         </form>
//       </div>

//       <div></div>
//     </div>
//   );
// };
// export default NewLeader;

"use client"
import React, { ChangeEvent, useEffect, useState } from "react";
import logo from "@/assets/images/logo-dark (1).png";
import Link from "next/link";
import Image from "next/image";
import { ApiEndpoint, districts } from "@/constants";
import { Select } from "@mantine/core";
import { leaders,leaderCategory, categories, organisationLevels } from "@/constants/Enums";
import CustomMultiSelect from "../core/MultiSelect";
import { Cells, Sectors, Districts, Provinces ,Villages} from "rwanda";
import toast from "react-hot-toast";
import { ClipLoader } from "react-spinners";
import { notifications } from "@mantine/notifications";
import { FaRegCheckCircle } from "react-icons/fa";
import { jwtDecode } from "jwt-decode";
import { Modal } from "@nextui-org/react";

const NewLeader = ({ close }: { close: Function }) => {
  const [localLevels, setLocalLevels] = useState([]);
  const [organisationLevel, setOrganisationLevel] = useState("");
  const [category, setCategory] = useState("");
  const [leadCategory, setLeadCategory] = useState("");
  const [location, setLocation] = useState("");
  const [role, setRole] = useState("");
  const [selected, setSelected] = useState<any>([]);
  const [loading, setLoading] = useState(false);
const [userRole,setUserRole] =useState();
const [isModelOpen,setIsModelOpen] = useState(false);

  useEffect(() => {
    // Get token from localStorage or wherever it's stored
    const token = localStorage.getItem("token");
    if (token) {
      const decodedToken: any = jwt_decode(token);
      console.log(decodedToken);
      setUserRole(decodedToken.role);
      // Automatically set the organization level based on user's role
      if (decodedToken.role === "ADMIN") {
        setOrganisationLevel("INTARA");
      } else if (decodedToken.role === "UMUYOBOZI" && decodedToken.organisationLevel === "AKARERE") {
        setOrganisationLevel("UMURENGE");
      } else if (decodedToken.role === "UMUYOBOZI" && decodedToken.organisationLevel === "UMURENGE") {
        setOrganisationLevel("AKAGARI");
      } else if (decodedToken.role === "UMUYOBOZI" && decodedToken.organisationLevel === "AKAGARI") {
        setOrganisationLevel("UMUDUGUDU");
      } 
    }
  }, []);



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
      role:leader?.role,
      sector: leader?.sector,
      village: leader?.village,
    };
 
    const handleIdChange=(e:any)=>{
      e.preventDefault();
      const userId ={
        nationalId: leader?.nationalId,
      }
      ApiEndpoint.post(`/users/${userId}`, userId)
      .then((res: any) => {
         if(res?.data?.role === "leader"){
          console.log('already a leader let update')
         }else(res?.data?.role ==="")
      })
      .catch((err: any) => {
        console.log('user not found')
        setIsModelOpen(true);
      })
      .finally(() => setLoading(false));
  };
    ApiEndpoint.post("/leaders/addLeader", formData)
      .then((res: any) => {
        notifications.show({
          title: "Assign Leader",
          message: "Leader Assigned successfully!",
          autoClose: 5000,
          icon: <FaRegCheckCircle />,
        });
    
        setCategory("");
        setLeadCategory("");
        setLocation("");
        setRole("")
        close();
      })
      .catch((err: any) => {
        toast.error(err.message);
        console.log(err);
      })
      .finally(() => setLoading(false));
  };
  React.useEffect(() => {
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
  function handleIdChange(event: ChangeEvent<HTMLInputElement>): void {
    throw new Error("Function not implemented.");
  }

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
          className=" w-full flex flex-col gap-5 justify-center md:px-10 px-6 pt-4"
        >
          <div className="main_input">
            <div className="flex-col flex-1">
              <label htmlFor="nationalId" className="font-bold">
                National id
              </label>
              <input
              type="text"
              name="nationalId"
              placeholder="123456789123457"
              className="sub_input  rounded-lg px-3"
              required
              onChange={handleIdChange}
            />
            </div>
          </div>
          <div className="main_input">
            <div className="flex-col flex-1">
              <label htmlFor="organisationLevel" className="font-bold">
              Organisation Level
              </label>
              <input
              // type="text"
              name="organisationLevel"
              placeholder="Akagari"
              value={organisationLevel}
              className="sub_input  rounded-lg px-3"
              required
            />
            </div>
          </div>
          <div className="main_input">
            <div className="flex-col flex-1 ">
              <label htmlFor="akarere" className="font-bold">
                Categories
              </label>
              <Select
                data={categories}
                value={category}
                onChange={setCategory}
              />
            </div>
          </div>
          <div className="main_input">
            <div className="flex-col flex-1 ">
              <label htmlFor="intara" className="font-bold">
            Role
              </label>
              <Select
                data={leaderCategory}
                value={leadCategory}
                onChange={setLeadCategory}
              />
            </div>
          </div>
          <div className="main_input">
            <div className="flex-col flex-1 ">
              <label htmlFor="umudugudu" className="font-bold">
                Location
              </label>
              <Select
                data={localLevels}
                value={location}
                onChange={setLocation}
              />
            </div>
          </div>
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
     <Modal>
     <form
          onSubmit={submit}
          className=" w-full flex flex-col gap-5 justify-center md:px-10 px-6 pt-4"
        >
          <div className="main_input">
            <div className="flex-col flex-1">
              <label htmlFor="names" className="font-bold">
                Names
              </label>
              <input
              type="text"
              name="names"
              placeholder="Amazina"
              className="sub_input  rounded-lg px-3"
              required
            />
            </div>
          </div>
          <div className="main_input">
            <div className="flex-col flex-1">
              <label htmlFor="phoneNumber" className="font-bold">
              Phone number
              </label>
              <input
              type="number"
              name="phoneNumber"
              placeholder="phoneNumber"
              className="sub_input  rounded-lg px-3"
              required
            />
            </div>
          </div>
          <div className="main_input">
            <div className="flex-col flex-1 ">
              <label htmlFor="intara" className="font-bold">
                Intara
              </label>
              <Select
                data={Provinces}
                value={Provinces}
                // onChange={setProvince}
              />
            </div>
          </div>
          <div className="main_input">
            <div className="flex-col flex-1 ">
              <label htmlFor="akarere" className="font-bold">
                Akarere
              </label>
              <Select
                data={Districts}
                value={Districts}
                // onChange={setDistrict}
              />
            </div>
          </div>
          <div className="main_input">
            <div className="flex-col flex-1 ">
              <label htmlFor="intara" className="font-bold">
              Umurenge
              </label>
              <Select
                data={Sectors}
                value={Sectors}
                // onChange={setLeadCategory}
              />
            </div>
          </div>
          <div className="main_input">
            <div className="flex-col flex-1 ">
              <label htmlFor="akagari" className="font-bold">
               Akagari
              </label>
              <Select
                data={Cells}
                value={Cells}
                // onChange={setLocation}
              />
            </div>
          </div>
          <div className="main_input">
            <div className="flex-col flex-1 ">
              <label htmlFor="umudugudu" className="font-bold">
               Umudugudu
              </label>
              <Select
                data={Villages}
                value={Villages}
                // onChange={setLocation}
              />
            </div>
          </div>
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
     </Modal>
      <div></div>
    </div>
  );
};
export default NewLeader;

function jwt_decode(token: string): any {
  throw new Error("Function not implemented.");
}



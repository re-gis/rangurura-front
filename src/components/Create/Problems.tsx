"use client";
import { useRef, useState } from "react";
import logo from "@/assets/images/logo-dark (1).png";
import Link from "next/link";
import Image from "next/image";
import upload from "@/assets/images/upload.svg";
import { Provinces, Sectors, Cells, Districts, Villages } from "rwanda";
import { Modal, Select } from "@mantine/core";
import SelectLevel from "@/components/core/Level";
import toast from "react-hot-toast";
import { FaRegCircleCheck } from "react-icons/fa6";
import { useRouter } from "next/navigation";
import { useDisclosure } from "@mantine/hooks";
import { baseURL } from "@/constants";
import { ClipLoader } from "react-spinners";
import axios from "axios";
import { getMyProfile } from "@/utils/funcs/funcs";

const ReportProblemModel = ({ closeL }: { closeL: Function }) => {
  const navigate = useRouter();
  const [opened, { open, close }] = useDisclosure(false);
  const [organisationCategory, setOrganisationCategory] = useState<string>("");
  const [organisationLevel, setOrganisationLevel] = useState("");
  const [showUpload, setShowUpload] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [category, setCategory] = useState("");
  const [fileName, setFileName] = useState("");
  const [problem, setProblem] = useState("");
  const [loading, setLoading] = useState(false);
  const [level, setLevel] = useState("");
  const [nationalId, setNationalId] = useState("");

  const onChangeCategory = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setOrganisationCategory(e.target.value);
  };
  const handleSelectedFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      setFileName(file.name);
      console.log(file.name);
      setShowUpload(true);
      toast.success("Proof uploaded successfully.");
    }
  };
  const submitProblem = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const formData = {
      category: category,
      ikibazo: problem,
      urwego: organisationLevel.toUpperCase(),
      phoneNumber: phoneNumber,
      nationalId: nationalId,
    };
    console.log(formData)
    
    const formResponse = new FormData();
    getMyProfile()
    .then(data => {
        console.log("Profile User", data?.data?.nationalId)
        setNationalId(data?.data?.nationalId);
        setPhoneNumber(data?.data?.phoneNumber);
        formData.nationalId = data?.data?.nationalId
        formData.phoneNumber = data?.data?.phoneNumber
        if (selectedFile) {
            formResponse.append("proof", selectedFile);
        }
        formResponse.append("record", "");
        formResponse.append("details", JSON.stringify(formData));
      })
      .then(() => {
        console.log(formData)
        axios
          .post(`${baseURL}/problems/create`, formResponse)
          .then((response) => {
            setLoading(false);
            toast.success(response.data?.data?.message);
            console.log(response.data);
            closeL();
          })
          .catch((err: any) => {
            if (err.message === "Network Error") {
              toast.error(
                "Request unable to reach our servers. Slow Network Connection Problem!",
              );
            } else {
              toast.error(
                err.response?.data?.error ??
                "An Error Occured! If it persists contact the support at support@rangurura.com",
                {
                  duration: 5000,
                },
              );
            }
            console.log(err);
            setLoading(false);
          })
          .catch((err: any) => {
            if (err.message === "Network Error") {
              toast.error(
                "Request unable to reach our servers. Slow Network Connection Problem!",
              );
            } else {
              toast.error(
                err.response?.data?.error ??
                "An Error Occured! If it persists contact the support at support@rangurura.com",
                {
                  duration: 5000,
                },
              );
            }
          });
      });
  };

  return (
    <section className="flex justify-center items-center w-full h-full">
      <Modal
        opened={opened}
        onClose={close}
        withCloseButton
        closeOnClickOutside={false}
      >
        <form
          onSubmit={submitProblem}
          className="w-full flex flex-col justify-center py-5 pb-10 gap-2"
        >
          <div className="flex flex-col gap-1">
            <label className="font-semibold text-black">
              Hitamo Ubwoko bw'ikibazo cyawe{" "}
              <span className="text-red-600">*</span>
            </label>
            <select
              required
              className="border-[#C3C3C3] border-2 rounded-md p-2"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="">Select Value</option>
              <option value="UBUZIMA">Ubuzima</option>
              <option value="UBUREZI">Uburezi</option>
              <option value="IMIYOBORERE">Imiyoborere</option>
              <option value="IMYIDAGADURO">Imyidagaduro</option>
            </select>
          </div>
          <div className="flex items-center justify-center pt-3">
            <button
              onClick={open}
              className="btn_primary text-white p-2 px-10 rounded-md"
            >
              {loading ? (
                <div className="w-full h-full flex justify-center items-center">
                  <ClipLoader size={18} color="white" />
                </div>
              ) : (
                "Tanga ikibazo"
              )}
            </button>
          </div>
        </form>
      </Modal>
      <div
        className={`w-full flex flex-col bg-white rounded p-8 items-center justify-center ${
          showUpload ? "gap-2" : "gap-8"
        } gap-8`}
      >
        <div className="flex flex-col justify-center items-center">
          <Link href="/">
            <Image src={logo} alt="" width={60} />
          </Link>
          <h3 className="font-bold text-[#001833] text-2xl">Tanga ikibazo</h3>
        </div>
        <div className="w-full flex flex-col justify-center gap-2">
          <div className="flex flex-col gap-1">
            <label className="font-semibold text-black">
              Hitamo aho ushaka kugeza Ikibazo{" "}
              <span className="text-red-600">*</span>
            </label>
            <select
              required
              className="border-[#C3C3C3] border-2 rounded-md p-2"
              value={organisationCategory}
              onChange={(e) => onChangeCategory(e)}
            >
              <option value="">Select Value</option>
              <option value="Urwego Rw'Ibanze">Urwego rw'Ibanze</option>
              <option value="Ikigo cya Leta">Ikigo cya Leta</option>
            </select>
            {organisationCategory === "Ikigo cya Leta" && (
              <div className="flex flex-col gap-1">
                <label className="font-semibold text-black">
                  Hitamo aho ushaka kugeza Ikibazo{" "}
                  <span className="text-red-600">*</span>
                </label>
                <select
                  required
                  className="border-[#C3C3C3] border-2 rounded-md p-2"
                >
                  <option value="">Hitamo</option>
                  <option value="">MINALOC</option>
                  <option value="">MINISANTE</option>
                  <option value="">RIB</option>
                  <option value="">RDB</option>
                  <option value="">RGB</option>
                </select>
              </div>
            )}
            {organisationCategory === "Urwego Rw'Ibanze" && (
              <div className="flex flex-col gap-1">
                <label className="font-semibold text-black">
                  Hitamo {organisationCategory} ushaka kugeza Ikibazo{" "}
                  <span className="text-red-600">*</span>
                </label>
                <select
                  required
                  className="border-[#C3C3C3] border-2 rounded-md p-2"
                  onChange={(e) => setOrganisationLevel(e.target.value)}
                >
                  <option value="">Hitamo</option>
                  <option value="Akagari">Akagari</option>
                  <option value="Umurenge">Umurenge</option>
                  <option value="Akarere">Akarere</option>
                  <option value="Intara">Intara</option>
                </select>
              </div>
            )}
            <SelectLevel
              organisationCategory={organisationCategory}
              organisationLevel={organisationLevel}
              setLevel={setLevel}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="font-semibold text-black">
              Ikibazo <span className="text-red-600">*</span>
            </label>
            <textarea
              rows={2}
              value={problem}
              onChange={(e) => setProblem(e.target.value)}
              placeholder="Ikibazo"
              className="border-[#C3C3C3] border-2 rounded-md p-2"
              style={{ resize: "none" }}
            ></textarea>
          </div>
          <div className="w-full flex flex-col gap-1">
            <label className="font-semibold text-black">Proof</label>
            <div
              className={`p-9 rounded-md border-2 ${
                showUpload ? "border-[#294929]" : "border-[#C3C3C3]"
              } w-full flex items-center ${
                showUpload ? "bg-[#294929]" : ""
              } justify-center`}
            >
              <label htmlFor="proof" className="cursor-pointer">
                {showUpload ? (
                  <FaRegCircleCheck color="white" />
                ) : (
                  <Image src={upload} className="w-6 h-6" alt=""></Image>
                )}
              </label>
              <input
                type="file"
                id="proof"
                // ref={fileInput}
                className="hidden"
                onChange={handleSelectedFile}
              />
            </div>
            {showUpload ? (
              <h6 className="w-full text-center font-bold text-[#001833]">
                Uploaded {fileName} as Proof
              </h6>
            ) : (
              <></>
            )}
          </div>
          <div className="flex items-center justify-center pt-3">
            <button
              onClick={open}
              className="btn_primary text-white p-2 px-10 rounded-md"
            >
              Komeza
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReportProblemModel;

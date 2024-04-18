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
import { useRouter } from "next/navigation";
import { useDisclosure } from "@mantine/hooks";
import { ApiEndpoint, baseURL } from "@/constants";
import { ClipLoader } from "react-spinners";
import axios from "axios";
import {
  categories,
  governmentOrgs,
  organisationCategories,
  organisationLevels,
} from "@/constants/Enums";
import { notifications } from "@mantine/notifications";
import { RxCrossCircled } from "react-icons/rx";
import { FaRegCheckCircle } from "react-icons/fa";

const ReportProblemModel = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const [loading, setLoading] = useState(false);
  const navigate = useRouter();
  const [organisationCategory, setOrganisationCategory] = useState<string>("");
  const [organisationLevel, setOrganisationLevel] = useState("");
  const [level, setLevel] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [category, setCategory] = useState("");
  const [suggestion, setSuggestion] = useState("");
  const [nationalId, setNationalId] = useState("");

  const onChangeCategory = (e: any) => {
    setOrganisationCategory(e.target.value);
  };
  const submitSuggestion = (e: any) => {
    e.preventDefault();
    if (!category || !level || !nationalId || !phoneNumber) {
      console.log(level, category, suggestion, nationalId, phoneNumber);
      toast.error("Fill All Fields!");
      return;
    }
    setLoading(true);
    const formData = {
      category: category,
      igitekerezo: suggestion,
      urwego: organisationLevel.toUpperCase(),
      phoneNumber: phoneNumber,
      upperLevel: organisationLevel.toUpperCase(),
      location: level,
      nationalId: nationalId,
      target: level,
    };
    axios
      .post(`${baseURL}/suggestions/send_idea`, formData)
      .then((response) => {
        setLoading(false);
        notifications.show({
          title: "Report Suggestion",
          message: "Suggestion Reported Successfully!",
          autoClose: 5000,
          icon: <FaRegCheckCircle />,
        });
        setOrganisationLevel("");
        setOrganisationCategory("");
        setLevel("");
        setSuggestion("");
        close();

        console.log(response.data);
      })
      .catch((err: any) => {
        notifications.show({
          title: "Report Suggestion Error",
          message: err.response?.data.error,
          color: "#FF555D",
          autoClose: 5000,
          icon: <RxCrossCircled />,
        });
        console.log("Send suggestions error ", err);
        setLoading(false);
      });
  };
  return (
    <section className="flex justify-center items-center w-screen h-screen bg-[#EEF3F9]">
      <Modal
        opened={opened}
        onClose={close}
        withCloseButton
        closeOnClickOutside={false}
      >
        <form
          onSubmit={submitSuggestion}
          className="w-full flex flex-col justify-center py-5 pb-10 gap-2"
        >
          <div className="flex flex-col gap-1">
            <label className="font-semibold text-black">
              Hitamo Ubwoko bw'ikibazo cyawe{" "}
              <span className="text-red-600">*</span>
            </label>
            <Select
              value={category}
              data={categories}
              onChange={(e: any) => setCategory(e)}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="font-semibold text-black">
              Nimero y'Indangamuntu <span className="text-red-600">*</span>
            </label>
            <input
              value={nationalId}
              onChange={(e) => setNationalId(e.target.value)}
              placeholder="Nimero y'Indangamuntu"
              className="border-[#C3C3C3] border-2 rounded-md p-2"
              disabled={loading}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="font-semibold text-black">
              Nimero ya telephone <span className="text-red-600">*</span>
            </label>
            <input
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              placeholder="Nimero ya telephone"
              className="border-[#C3C3C3] border-2 rounded-md p-2"
              disabled={loading}
            />
          </div>
          <div className="flex items-center justify-center pt-3">
            <button
              onClick={open}
              className="btn_primary text-white p-2 px-10 rounded-md"
              disabled={loading}
            >
              {loading ? (
                <div className="w-full h-full flex justify-center items-center">
                  <ClipLoader size={18} color="white" />
                </div>
              ) : (
                "Tanga Igitekerezo"
              )}
            </button>
          </div>
        </form>
      </Modal>
      <div className="flex flex-col bg-white rounded p-8 items-center justify-center gap-8 w-[90%] md:w-[35%]">
        <div className="flex flex-col justify-center items-center">
          <Link href="/">
            <Image src={logo} alt="" width={60} />
          </Link>
          <h3 className="font-bold text-[#001833] text-2xl">
            Tanga Igitekerezo
          </h3>
        </div>
        <div className="w-full flex flex-col justify-center gap-2">
          <div className="flex flex-col gap-1">
            <label className="font-semibold text-black">
              Hitamo aho ushaka kugeza Igitekerezo{" "}
              <span className="text-red-600">*</span>
            </label>
            <Select
              value={organisationCategory}
              onChange={(value: any) => setOrganisationCategory(value)}
              data={organisationCategories}
            />
            {organisationCategory === "Ikigo cya Leta" && (
              <div className="flex flex-col gap-1">
                <label className="font-semibold text-black">
                  Hitamo aho ushaka kugeza Ikibazo{" "}
                  <span className="text-red-600">*</span>
                </label>
                <Select data={governmentOrgs} />
              </div>
            )}
            {organisationCategory === "Urwego Rw'Ibanze" && (
              <div className="flex flex-col gap-1">
                <label className="font-semibold text-black">
                  Hitamo {organisationCategory} ushaka kugeza Ikibazo{" "}
                  <span className="text-red-600">*</span>
                </label>
                <Select
                  value={organisationLevel}
                  onChange={(value: any) => setOrganisationLevel(value)}
                  data={organisationLevels}
                />
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
              Igitekerezo{" "}
              <span className="text-red-600 text-sm">
                * (Maximum Characters: 255)
              </span>
            </label>
            <textarea
              rows={2}
              maxLength={255}
              placeholder="Igitekerezo"
              className="min-h-[8rem] border-[#C3C3C3] border-2 rounded-md p-2"
              style={{ resize: "none" }}
              value={suggestion}
              onChange={(event) => setSuggestion(event.target.value)}
            ></textarea>
          </div>
          <div className="flex items-center justify-center pt-3">
            <button
              disabled={loading}
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

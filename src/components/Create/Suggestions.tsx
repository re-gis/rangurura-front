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
import { getMyProfile } from "@/utils/funcs/funcs";

const CreateSuggestionModal = ({ closeL }: { closeL: Function }) => {
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

  getMyProfile().then((data) => {
    setNationalId(data?.data?.nationalId);
    setPhoneNumber(data?.data?.phoneNumber);
  });
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
    // const formData = {
    //   "urwego": organisationLevel.toUpperCase(),
    //   "igitekerezo":suggestion,
    //   "category":"UBUZIMA",
    //   "target":"mukamira",
    //   "location":"nyabihu",
    //   "nationalId":" 12345678901",
    //   "upperLevel":"Nyabihu",
    //   "phoneNumber":"456"
    // };
    const formData = {
      category: category,
      igitekerezo: suggestion,
      urwego: organisationLevel.toUpperCase(),
      phoneNumber: phoneNumber,
      upperLevel: level,
      location: level,
      nationalId: nationalId,
      target: level,
    };
    axios
      .post(`${baseURL}/suggestions/send_idea`, JSON.stringify(formData), {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        setLoading(false);
        toast.success("Suggestion Reported Successfully!");
        setOrganisationLevel("");
        setOrganisationCategory("");
        setLevel("");
        setSuggestion("");
        close();

        console.log(response.data);
      })
      .catch((err: any) => {
        toast.error(err.response?.data.error, {
          duration: 5000,
        });
        console.log("Send suggestions error ", err);
        setLoading(false);
      });
  };
  return (
    <section className="flex justify-center items-center w-full h-full bg-[#EEF3F9]">
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
            <select
              required
              className="border-[#C3C3C3] border-2 rounded-md p-2"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              disabled={loading}
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
      <div className="flex flex-col bg-white rounded p-8 items-center justify-center gap-8 w-full">
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
                  value={organisationLevel}
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
              Igitekerezo <span className="text-red-600">*</span>
            </label>
            <textarea
              rows={2}
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

export default CreateSuggestionModal;

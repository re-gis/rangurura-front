"use client";
import CreateSuggestionModal from "@/components/Create/Suggestions";
import SuggestionsTable from "@/components/core/Tables/Suggestions";
import { Modal, Button } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IoClose } from "react-icons/io5";
import { useEffect, useState } from "react";
import { ApiEndpoint } from "@/constants";

const Page = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const [loading, setLoading] = useState(false);
  const [suggestionsData, setSuggestionsData] = useState([]);
  useEffect(() => {
    setLoading(true);
    ApiEndpoint.get("/suggestions/mine")
      .then((res) => {
        console.log(res.data?.data);
        if (res.data?.data?.message) {
          setSuggestionsData([]);
        } else {
          setSuggestionsData(res.data.data);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);
  return (
    <div className="w-full h-[90%] flex items-center justify-between mt-4">
      <div className="w-full h-full">
        <div className="w-full flex items-center justify-between">
          <h1 className="text-[1.5rem] font-extrabold">Suggestions</h1>
          <button
            type="button"
            onClick={open}
            className="bg-[#20603D] w-[15rem] px-3 py-3 rounded-lg flex items-center justify-center text-white font-extrabold"
          >
            Give New Suggestion
          </button>
        </div>

        <div className="w-full h-[85%]">
          <SuggestionsTable data={suggestionsData} loading={loading} />
        </div>
      </div>
      <Modal
        opened={opened}
        onClose={close}
        h={"100vh"}
        closeOnClickOutside={false}
        className="overflow-y-hidden relative"
        size={"xl"}
        withCloseButton={false}
      >
        <button className="absolute top-6 right-4" onClick={close}>
          <IoClose size={24} />
        </button>
        <CreateSuggestionModal closeL={close} />
      </Modal>
    </div>
  );
};

export default Page;

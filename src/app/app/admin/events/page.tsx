"use client";

import NewEvent from "@/components/Events/NewEvent";
import EventsTable from "@/components/core/Tables/Events";
import { Modal, Button } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { useEffect, useState } from "react";
import { ApiEndpoint } from "@/constants";
import { ClipLoader } from "react-spinners";
import Image from "next/image";
import no_data from "@/assets/images/no_leader.gif";
import { TfiReload } from "react-icons/tfi";

const Page = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const [loading, setLoading] = useState(false);
  const [events, setEvents] = useState([]);
  const refetchData = async () => {
    setLoading(true);
    try {
      const response = await ApiEndpoint.get("/events/mine");
      if (response.data?.data?.message) {
        setEvents([]);
      } else {
        setEvents(response.data?.data?.reverse());
      }
    } catch (err) {
      console.error("Error fetching events:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setLoading(true);
    ApiEndpoint.get("/events/mine")
      .then((res) => {
        console.log(res.data?.data);
        if (res.data?.data?.message) {
          setEvents([]);
        } else {
          setEvents(res.data?.data?.reverse());
        }
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
      });
  }, []);
  return (
    <div className="w-full h-[90%] mt-4">
      <div className="w-full flex items-center justify-between">
        <h1 className="text-[1.6rem] font-extrabold">Announcements</h1>
        <div className="flex flex-col md:flex-row gap-4">
          <button
            type="button"
            className="bg-[#20603D] flex items-center gap-2 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded-md"
            onClick={refetchData}
          >
            <TfiReload />
            Refresh
          </button>
          <button
            onClick={open}
            className="bg-[#20603D] px-3 py-3 rounded-lg flex items-center justify-center text-white font-extrabold"
          >
            Create Announcement
          </button>
        </div>
      </div>

      {loading ? (
        <div className="w-full flex justify-center mt-[2rem]">
          <ClipLoader size={24} color="black" />
        </div>
      ) : events.length == 0 ? (
        <div className="w-full flex flex-col items-center">
          <Image src={no_data} alt="No Data GIF" />
          <h1 className="mt-[1rem] font-bold">
            No Announcements found in your system!
          </h1>
        </div>
      ) : (
        <div className="w-full bg-white">
          <EventsTable dataProps={events} />
        </div>
      )}
      <Modal
        opened={opened}
        onClose={close}
        closeOnClickOutside={false}
        className="overflow-y-hidden"
        size={"xl"}
      >
        <NewEvent close={close} />
      </Modal>
    </div>
  );
};

export default Page;

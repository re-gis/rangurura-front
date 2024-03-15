"use client";
import { useState, useEffect } from "react";
import { FaPlay } from "react-icons/fa";
import { RiUserLocationFill } from "react-icons/ri";
import { FaArrowLeftLong } from "react-icons/fa6";
import LiveMap from "../../Maps";
import { useRouter } from "next/navigation";
interface Location {
  username: string;
  location: string;
}

const ViewMap = ({ setShowMap }: { setShowMap: Function }) => {
  const navigate = useRouter();
  return (
    <div className="w-full flex flex-col">
      <div className="w-full flex justify-start items-center pl-[10%]">
        <span
          className="px-5 py-4 cursor-pointer"
          onClick={() => setShowMap(false)}
        >
          <FaArrowLeftLong />
        </span>
      </div>
      <div className="w-full h-1/2 ">
        <LiveMap />
      </div>
    </div>
  );
};
const ViewLocation = ({
  location,
  setShowMap,
}: {
  location: string;
  setShowMap: Function;
}) => {
  return (
    <div className="w-full flex flex-col items-center gap-5">
      <RiUserLocationFill size={35} color="#000" />
      <h5 className="font-bold">Isamaza Sylvin is located at {location}</h5>
      <button
        className="bg-[#20603D] py-3 px-[7rem] text-white font-bold rounded-lg"
        onClick={() => setShowMap(true)}
      >
        View Map
      </button>
    </div>
  );
};

const LocationTracker = ({ username, location }: Location) => {
  const [loading, setLoading] = useState(true);
  const [showMap, setShowMap] = useState(false);
  // const handleShow = ()=>{
  //   setTimeout(()=>{
  //     setLoading(false)
  //   },5000)
  // }
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);
  return (
    <div className="w-[60vw] h-[75vh] flex flex-col items-center gap-16">
      <h6 className="font-extrabold text-[120%] mt-10">
        Tracking Location of {username}
      </h6>

      {loading ? (
        <span className="relative flex h-[10rem] w-[10rem] flex items-center justify-center">
          <span className="animate-ping absolute inline-flex h-[60%] w-[60%] rounded-full bg-[#20603D] opacity-80"></span>
          <span className="absolute z-50 bg-white flex items-center justify-center rounded-full h-[80%] w-[80%] border-2 border-[#20603D] cursor-pointer">
            <span className="absolute z-50 bg-white flex items-center justify-center rounded-full h-[80%] w-[80%] border-2 border-[#20603D] cursor-pointer">
              <RiUserLocationFill size={25} color="#20603D" />
            </span>
          </span>
        </span>
      ) : showMap ? (
        <ViewMap setShowMap={setShowMap} />
      ) : (
        <ViewLocation location={location} setShowMap={setShowMap} />
      )}
    </div>
  );
};

export default LocationTracker;

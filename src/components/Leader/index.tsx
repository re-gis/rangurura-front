import { getRoleFromLevel } from "@/utils/funcs/funcs";
import Image from "next/image";
import { GoPerson } from "react-icons/go";
import { SlLocationPin } from "react-icons/sl";

const Leader = ({ profile, leader }: { profile: any; leader: any }) => {
  const role = getRoleFromLevel(leader?.organizationLevel ?? "");
  return (
    <div className="w-full h-[250px] rounded-lg flex flex-col items-center gap-2 bg-white justify-start px-3">
      <Image
        src={profile.imageUrl}
        width={100}
        height={100}
        alt=""
        className="w-full h-[50%] rounded-lg"
      />
      <h6 className="text-left w-full font-bold text-black">
        {profile?.username ?? "Name Not Set"}
      </h6>
      <h6 className="text-left text-[90%] w-full font-bold text-black flex gap-3 items-center">
        <GoPerson size={13} />
        {role}
      </h6>
      <h6 className="text-left text-[90%] w-full font-bold text-black flex gap-3 mt-[-0.5rem] items-center">
        <SlLocationPin size={13} />
        {profile.district + " - " + profile.sector + " - " + profile.cell}
      </h6>

      <div className="w-full flex justify-between items-center">
        <button
          type="button"
          className="text-[80%] self-start bg-[#0075FF] rounded-md py-2 px-3 text-white"
        >
          Message
        </button>
        <button
          type="button"
          className="text-[80%] self-start bg-[#20603D] rounded-md py-2 px-4 text-white"
        >
          Profile
        </button>
      </div>
    </div>
  );
};

export default Leader;

import Image from "next/image";
import { GoPerson } from "react-icons/go";
import { SlLocationPin } from "react-icons/sl";

const Leader = ({ profile }: any) => {
  return (
    <div className="w-full aspect-3/4 rounded-lg flex flex-col items-center gap-2 bg-white justify-start px-3 pt-2">
      <Image
        src={profile.image}
        alt=""
        className="w-full h-[50%] rounded-lg "
      />
      <h6 className="text-left w-full font-bold text-black">{profile.name}</h6>
      <h6 className="text-left text-[90%] w-full font-bold text-black flex gap-3 items-center">
        <GoPerson size={13} />
        {profile.position}
      </h6>
      <h6 className="text-left text-[90%] w-full font-bold text-black flex gap-3 mt-[-0.5rem] items-center">
        <SlLocationPin size={13} />
        {profile.address.district}
      </h6>

      <div className="w-full flex justify-between items-center">
        <button
          type="button"
          className="text-[90%] self-start bg-[#0075FF] rounded-lg py-2 px-3 text-white"
        >
          Message
        </button>
        <button
          type="button"
          className="text-[90%] self-start bg-[#20603D] rounded-lg py-2 px-3 text-white"
        >
          Profile
        </button>
      </div>
    </div>
  );
};

export default Leader;

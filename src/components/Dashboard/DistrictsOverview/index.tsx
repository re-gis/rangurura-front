import Header from "../Header";
import { districts } from "@/constants";

const DistrictOverview = () => {
  return (
    <div className="w-full flex flex-col">
      <Header header="District Overview" />
      {districts.slice(0, 4).map((dis) => {
        return (
          <div className="h-[3rem] flex items-center justify-between px-3  bg-[#EEF3F9] mt-2">
            <h5>{dis.name}</h5>
            {/* <div> */}
            <span className="w-[20px] h-[20px] rounded-[20%] bg-[#001833] flex items-center justify-center">
              <h5 className="text-white text-[80%]">{dis.problems}</h5>
            </span>
            {/* </div> */}
          </div>
        );
      })}

      <button className="w-full text-[#1467C3] text-right mt-5 ">
        see More
      </button>
    </div>
  );
};
export default DistrictOverview;

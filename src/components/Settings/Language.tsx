import personImg from "@/assets/images/personImg.png";
import SwitchLanguages from "../core/SwitchLanguage";

const SettingsTheme = () => {
  return (
    <div className="w-[70%] h-full  flex flex-col px-9">
      <div className="w-full py-2 flex justify-between items-center mt-4">
        <h5 className="font-bold">Language</h5>

        <SwitchLanguages color={"black"} />
      </div>
    </div>
  );
};
export default SettingsTheme;

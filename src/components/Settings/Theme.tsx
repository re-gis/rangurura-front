import personImg from "@/assets/images/personImg.png";

const SettingsTheme = () => {
  return (
    <div className="w-[70%] h-full  flex flex-col px-9">
      <div className="w-full py-2 flex justify-between items-center mt-3">
        <h5 className="font-bold">Theme</h5>

        <select name="color" id="">
          <option value="default">Default</option>
          <option value="dark">Dark</option>
        </select>
      </div>
      <div className="w-full flex justify-between items-center">
        <h5 className="font-bold">Font size</h5>

        <input
          type="number"
          name="number"
          id="fontsize"
          value={16}
          className="w-20 py-3 px-2 border-[1px] rounded-lg border-[#CCC]"
        />
      </div>
    </div>
  );
};
export default SettingsTheme;

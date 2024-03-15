"use client";
import React, { useState } from "react";
import Link from "next/link";

const PersonalInfo = () => {
  const [selectedProvince, setSelectedProvince] = useState("");
  const provinces = [
    "Amajyaruguru",
    "Amagepfo",
    "Iburasirazuba",
    "Umujyi wa Kigali",
  ];
  const handleProvinceChange = (event) => {
    setSelectedProvince(event.target.value);
  };
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const districts = ["Bugesera", "Gatsibo", "Kayonza", ""];
  const handleDistrictChange = (event) => {
    setSelectedDistrict(event.target.value);
  };
  const [selectedSector, setSelectedSector] = useState("");
  const sectors = [
    "Amajyaruguru",
    "Amagepfo",
    "Iburasirazuba",
    "Umujyi wa Kigali",
  ];
  const handleSectorChange = (event) => {
    setSelectedSector(event.target.value);
  };
  const [selectedCell, setSelectedCell] = useState("");
  const cells = [
    "Amajyaruguru",
    "Amagepfo",
    "Iburasirazuba",
    "Umujyi wa Kigali",
  ];
  const handleCellChange = (event) => {
    setSelectedCell(event.target.value);
  };
  const [selectedVillage, setSelectedVillage] = useState("");
  const villages = [
    "Amajyaruguru",
    "Amagepfo",
    "Iburasirazuba",
    "Umujyi wa Kigali",
  ];
  const handleVillageChange = (event) => {
    setSelectedVillage(event.target.value);
  };
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };
  const [isChecked, setIsChecked] = useState(false);
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };
  return (
    <section className="flex justify-center  bg-[#EEF3F9] h-full p-10">
      <div className="bg-white p-7 rounded-md md:w-[60%] w-full">
        <div className="flex justify-center cursor-pointer">
          <Link href="/">
            <img src={logo} alt="Logo" />
          </Link>
        </div>
        <h3 className="text-[#001833] font-bold text-2xl text-center">
          Gufungura Konti
        </h3>
        <div className="flex flex-row justify-center  md:gap-12 gap-0 py-6">
          <div className="flex flex-col">
            <div className="flex flex-row gap-0">
              <button className="btn_primary rounded-full text-yellow-400 w-6">
                1
              </button>
              <div className="bg-[#001833] md:w-[215.009px] w-[100px] h-2 rounded-md mt-2"></div>
            </div>
            <p className="text-xs md:hidden block">Address</p>
            <p className="text-xs md:block hidden">Personal info</p>
          </div>
          <div className="md:hidden flex flex-col items-center justify-center">
            <button className="btn_primary rounded-full text-yellow-400 w-6">
              2
            </button>
            <p className="text-xs">Personal info</p>
          </div>
          <div className="flex flex-col">
            <div className="flex flex-row gap-0">
              <div className="bg-[#001833] md:w-[215.009px] w-[100px] h-2 rounded-md mt-2"></div>
              <button className="btn_primary rounded-full text-white w-6 md:block hidden">
                2
              </button>
              <button className="btn_primary rounded-full text-white w-6 md:hidden block">
                3
              </button>
            </div>
            <p className="text-xs text-right">Confirmation</p>
          </div>
        </div>
        <div>
          <form className="md:px-4 px-16 flex flex-col justify-center">
            <div className="flex  md:flex-row flex-col md:py-3 py-0 gap-6 justify-center items-center">
              <div>
                <p className="text-[px] font-semibold">Amazina</p>
                <input
                  type="text"
                  placeholder="isamaza sylvin"
                  className="sub_input px-3"
                />
              </div>
              <div>
                <p className="text-[px] font-semibold">Numero y'indangamuntu</p>
                <input
                  type="text"
                  placeholder="123456789123457"
                  className="sub_input px-3"
                />
              </div>
            </div>
            <div className="main_input">
              <div className="flex flex-col">
                <p className="text-[px] font-semibold">Numero ya Telefone</p>
                <input
                  type="text"
                  placeholder="0788888888"
                  className="sub_input px-3"
                />
              </div>
              <div className="md:flex hidden">
                <p className="text-[px] font-semibold">Intara</p>
                <select
                  value={selectedProvince}
                  onChange={handleProvinceChange}
                  className="sub_input px-3 select"
                >
                  <option className="text-[#5C5B5B]">Hitamo Intara</option>
                  {provinces.map((Province, index) => (
                    <option value={Province} key={index}>
                      {Province}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="md:flex hidden flex-row md:py-3 py-1 md:gap-6 gap-3 justify-center items-center">
              <div>
                <p className="text-[px] font-semibold">Akarere</p>
                <select
                  value={selectedDistrict}
                  onChange={handleDistrictChange}
                  className="sub_input px-3"
                >
                  <option className="text-[#5C5B5B]">Hitamo akarere</option>
                  {districts.map((District, index) => (
                    <option value={District} key={index}>
                      {District}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <p className="text-[px] font-semibold">Umurenge</p>
                <select
                  value={selectedSector}
                  onChange={handleSectorChange}
                  className="sub_input px-3"
                >
                  <option className="text-[#5C5B5B]">Hitamo Umurenge</option>
                  {sectors.map((Sector, index) => (
                    <option value={Sector} key={index}>
                      {Sector}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="md:flex hidden flex-row md:py-3 py-1 md:gap-6 gap-3 justify-center items-center">
              <div>
                <p className="text-[px] font-semibold">Akagari</p>
                <select
                  value={selectedCell}
                  onChange={handleCellChange}
                  className="sub_input px-3"
                >
                  <option className="text-[#5C5B5B]">Hitamo Akagari</option>
                  {cells.map((Cell, index) => (
                    <option value={Cell} key={index}>
                      {Cell}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <p className="text-[px] font-semibold">Umudugudu</p>
                <select
                  value={selectedVillage}
                  onChange={handleVillageChange}
                  className="sub_input px-3"
                >
                  <option className="text-[#5C5B5B]">Hitamo umudugudu</option>
                  {villages.map((Village, index) => (
                    <option value={Village} key={index}>
                      {Village}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="flex md:flex-row flex-col md:py-3 py-1 gap-6 justify-center items-center">
              <div>
                <p className="text-[px] font-semibold">Umubare w'ibanga</p>
                <div className="sub_input flex flex-row h-full justify-start">
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="*************"
                    className="password"
                  />
                  <div className="absolute md:right-[52%] right-[25.5%]">
                    <ion-icon
                      name={showPassword ? "eye-off-outline" : "eye-outline"}
                      onClick={togglePasswordVisibility}
                      style={{
                        cursor: "pointer",
                        color: "#595959",
                        height: "21px",
                        width: "24px",
                        "padding-top": "7px",
                      }}
                    ></ion-icon>
                  </div>
                </div>
              </div>
              <div>
                <p className="text-[px] font-semibold">
                  Imeza umubare w'ibanga
                </p>
                <div className="sub_input flex flex-row h-full justify-start">
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="*************"
                    className="password"
                  />
                  <div className="absolute right-[25.5%]">
                    <ion-icon
                      name={
                        showConfirmPassword ? "eye-off-outline" : "eye-outline"
                      }
                      onClick={toggleConfirmPasswordVisibility}
                      style={{
                        cursor: "pointer",
                        color: "#595959",
                        height: "21px",
                        width: "24px",
                        "padding-top": "7px",
                      }}
                    ></ion-icon>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row md:gap-2 gap-2 py-1 justify-center items-center">
              <input
                type="checkbox"
                checked={isChecked}
                onChange={handleCheckboxChange}
              />
              <p className="md:text-base text-xs">
                Ndemeza ko amakuru yatanzwe haruguru ari ukuri
              </p>
            </div>
            <div className="flex flex-col justify-center items-center py-2 gap-6">
              <Link href="/Confirm">
                <button className="btn_primary text-white p-2 w-28 rounded-sm md:block hidden">
                  Gukomeza
                </button>
              </Link>
              <Link href="/Confirm">
                <button className="btn_primary text-white p-2 w-28 rounded-sm md:hidden block">
                  Next
                </button>
              </Link>
              <p>
                Usanzwe ufite konti?
                <span className="text-cyan-600">
                  <Link href="/LoginClient">
                    <a href="#" className="no-underline">
                      Injira
                    </a>
                  </Link>
                </span>
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
export default PersonalInfo;

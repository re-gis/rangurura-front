import { setCookie } from "cookies-next";
import i18n from "../../../i18n";
import { ApiEndpoint } from "@/constants";

export const changeLanguage = (language: string) => {
  i18n.changeLanguage(language);
  console.log(language);
  setCookie("lang", language);
};

export const fetchCitizenProblems = async () => {
  const data = await ApiEndpoint.get("/problems/my/asked");
  console.log(data);
  return data;
};

export const getMyProfile = async () => {
  const data = await ApiEndpoint.get("/users/me");
  return data.data;
};

export const getAllLeaders = async () => {
  const data = await ApiEndpoint.get("/leaders/leaders");
  return data.data;
};

export const getRoleFromLevel = (level: string): string => {
  switch (level?.toLowerCase()) {
    case "district":
      return "Mayor";
    case "intara":
      return "Governor";
    case "umurenge":
      return "Executive Secretary of Sector";
    case "akagari":
      return "Executive Secretary of Cell";
    default:
      return "No Role Set";
  }
};

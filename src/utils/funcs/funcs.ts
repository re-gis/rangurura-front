import { setCookie } from "cookies-next";
import i18n from "../../../i18n";
import { ApiEndpoint } from "@/constants";

export const changeLanguage = (language: string) => {
  i18n.changeLanguage(language);
  console.log(language);
  setCookie("lang", language);
};

export const fetchCitizenProblems = async ()=>{
  const data = await ApiEndpoint.get("/problems/my/asked")
  console.log(data);
  return data
}

export const getMyProfile = async ()=>{
  const data = await ApiEndpoint.get("/users/me")
  return data.data
}
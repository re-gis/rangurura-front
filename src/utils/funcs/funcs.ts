import { setCookie } from "cookies-next";
import i18n from "../../../i18n";

export const changeLanguage = (language: string) => {
  i18n.changeLanguage(language);
  console.log(language);
  setCookie("lang", language);
};

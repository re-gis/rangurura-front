import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
import { getCookie } from "cookies-next";

const language = getCookie("lang");
i18n
  .use(Backend)
  .use(initReactI18next)
  .init({
    lng: language, // Default language
    fallbackLng: "ki", // Fallback language if translation is missing
    backend: {
      loadPath: "/locales/{{lng}}/{{ns}}.json", // Path to translation files
    },
    react: {
      useSuspense: false, // Set to true if you want to use Suspense for translations
    },
  });

export default i18n;

import Image from "next/image";
import en from "@/assets/images/british.png";
import fr from "@/assets/images/france.png";
import rw from "@/assets/images/rwanda.png";
import { FiChevronDown } from "react-icons/fi";
import { Trans, useTranslation } from "react-i18next";

import React from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";
import { getCookie, setCookie } from "cookies-next";

export default function SwitchLanguages({ color }: { color: any }) {
  const { i18n } = useTranslation();
  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
    i18n.changeLanguage(language);
    setCookie("lang", language);
  };
  const [selectedKeys, setSelectedKeys] = React.useState(
    new Set([getCookie("lang") ?? "Ki"]),
  );
  const languages = ["en", "ki", "fr"];
  const flags = [en, rw, fr];

  const selectedValue = React.useMemo(
    () => Array.from(selectedKeys).join(", ").replaceAll("_", " "),
    [selectedKeys],
  );

  return (
    <Dropdown>
      <DropdownTrigger>
        <Button
          variant="flat"
          className={`capitalize flex items-center justify-center gap-4 text-[${color}] font-bold bg-[#ccc] rounded-lg p-2`}
        >
          <Image
            src={flags[languages.indexOf(selectedValue)] ?? rw} // Provide a default image path "/ki"
            alt=""
            width={24}
            height={24}
          />
          {selectedValue}
          <FiChevronDown />
        </Button>
      </DropdownTrigger>
      <DropdownMenu
        aria-label="Single selection example"
        className="py-2"
        variant="flat"
        disallowEmptySelection
        selectionMode="single"
        selectedKeys={selectedKeys}
        onSelectionChange={setSelectedKeys}
      >
        {languages.map((lang, i) => {
          return (
            <DropdownItem
              onClick={() => changeLanguage(lang.slice(0, 2).toLowerCase())}
              key={lang}
              className={`${
                selectedKeys === new Set([lang]) ? "bg-black" : ""
              } flex items-center justify-center gap-4`}
            >
              {lang === "ki"
                ? "Kinyarwanda"
                : lang === "en"
                  ? "English"
                  : "French"}
            </DropdownItem>
          );
        })}
      </DropdownMenu>
    </Dropdown>
  );
}

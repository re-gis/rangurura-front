"use client";

import React, { useState } from "react";
import { GoPlus } from "react-icons/go";
import { LuMinus } from "react-icons/lu";
import { Accordion } from "@mantine/core";
import { useTranslation } from "react-i18next";

const Questions = () => {
  const { t, i18n } = useTranslation();
  const [opened, setOpened] = useState(null);
  const [show, setShow] = useState(false);

  const open = (id) => {
    setOpened(id === opened ? null : id);
    setShow(!show);
  };

  return (
    <section
      className="flex flex-col justify-start items-center gap-6 max-[420px]:p-6 p-10 bg-[#DCE0E6] md:pb-[10vh]"
      id="faqs"
    >
      <h3 className="font-bold max-[420px]:text-[30px] text-[2.4rem]">
        {t("faq_section.faq")}
      </h3>
      <p className="text-center">{t("faq_section.faq_desc")}</p>
      <Accordion className="grid grid-cols-2 max-[420px]:grid-cols-1 gap-x-8 gap-y-3 w-full mt-14 md:w-[95%]">
        <div className="flex flex-col gap-4 max-[420px]:w-full w-full">
          <Accordion.Item key={0} value="test" className="bg-white p-4 rounded">
            <Accordion.Control>{t("faq_section.faq1")}</Accordion.Control>
            <Accordion.Panel>{t("faq_section.faq1_desc")}</Accordion.Panel>
          </Accordion.Item>
          <Accordion.Item
            key={1}
            value="test1"
            className="bg-white p-4 rounded"
          >
            <Accordion.Control>{t("faq_section.faq2")}</Accordion.Control>
            <Accordion.Panel>{t("faq_section.faq2_desc")}</Accordion.Panel>
          </Accordion.Item>
        </div>
        <div className="flex flex-col gap-4 max-[420px]:w-full w-full">
          <Accordion.Item
            key={2}
            value="test2"
            className="bg-white p-4 rounded"
          >
            <Accordion.Control>{t("faq_section.faq3")}</Accordion.Control>
            <Accordion.Panel>{t("faq_section.faq3_desc")}</Accordion.Panel>
          </Accordion.Item>
          <Accordion.Item
            key={3}
            value="test3"
            className="bg-white p-4 rounded"
          >
            <Accordion.Control>{t("faq_section.faq4")}</Accordion.Control>
            <Accordion.Panel>{t("faq_section.faq4_desc")}</Accordion.Panel>
          </Accordion.Item>
        </div>
        <div className="flex flex-col gap-4 max-[420px]:w-full w-full">
          <Accordion.Item
            key={4}
            value="test4"
            className="bg-white p-4 rounded"
          >
            <Accordion.Control>{t("faq_section.faq5")}</Accordion.Control>
            <Accordion.Panel>{t("faq_section.faq5_desc")}</Accordion.Panel>
          </Accordion.Item>
        </div>
        <div className="flex flex-col gap-4 max-[420px]:w-full w-full">
          <Accordion.Item
            key={5}
            value="test5"
            className="bg-white p-4 rounded"
          >
            <Accordion.Control>{t("faq_section.faq6")}</Accordion.Control>
            <Accordion.Panel>{t("faq_section.faq6_desc")}</Accordion.Panel>
          </Accordion.Item>
        </div>
      </Accordion>
    </section>
  );
};

export default Questions;

"use client";

import React, { useState } from "react";
import { GoPlus } from "react-icons/go";
import { LuMinus } from "react-icons/lu";
import { Accordion } from "@mantine/core";

const Questions = () => {
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
        Frequently asked questions
      </h3>
      <p className="text-center">
        Lorem ipsum dolor sit, amet Nisi quasi itaque qui adipisci officia earum
        facere ducimus asperiores autem molestias! Facere doloremque at cum eum
        fugiat minima architecto!
      </p>
      <Accordion className="grid grid-cols-2 max-[420px]:grid-cols-1 gap-x-8 gap-y-3 w-full mt-14 md:w-[95%]">
        <div className="flex flex-col gap-4 max-[420px]:w-full w-full">
          <Accordion.Item key={0} value="test" className="bg-white p-4 rounded">
            <Accordion.Control>
              What types of problems are featured on the platform?
            </Accordion.Control>
            <Accordion.Panel>
              Lorem ipsum dolor sit, amet Nisi quasi itaque qui adipisci officia
              earum facere ducimus asperiores autem molestias! Facere doloremque
              at cum eum fugiat minima architecto!
            </Accordion.Panel>
          </Accordion.Item>
          <Accordion.Item
            key={1}
            value="test1"
            className="bg-white p-4 rounded"
          >
            <Accordion.Control>
              How can I stay updated on new challenges and project developments?
            </Accordion.Control>
            <Accordion.Panel>
              Lorem ipsum dolor sit, amet Nisi quasi itaque qui adipisci officia
              earum facere ducimus asperiores autem molestias! Facere doloremque
              at cum eum fugiat minima architecto!
            </Accordion.Panel>
          </Accordion.Item>
        </div>
        <div className="flex flex-col gap-4 max-[420px]:w-full w-full">
          <Accordion.Item
            key={2}
            value="test2"
            className="bg-white p-4 rounded"
          >
            <Accordion.Control>
              How is data privacy and security addressed in the submission
              process?
            </Accordion.Control>
            <Accordion.Panel>
              Lorem ipsum dolor sit, amet Nisi quasi itaque qui adipisci officia
              earum facere ducimus asperiores autem molestias! Facere doloremque
              at cum eum fugiat minima architecto!
            </Accordion.Panel>
          </Accordion.Item>
          <Accordion.Item
            key={3}
            value="test3"
            className="bg-white p-4 rounded"
          >
            <Accordion.Control>
              Are there any fees associated with participating in the
              challenges?
            </Accordion.Control>
            <Accordion.Panel>
              Lorem ipsum dolor sit, amet Nisi quasi itaque qui adipisci officia
              earum facere ducimus asperiores autem molestias! Facere doloremque
              at cum eum fugiat minima architecto!
            </Accordion.Panel>
          </Accordion.Item>
        </div>
        <div className="flex flex-col gap-4 max-[420px]:w-full w-full">
          <Accordion.Item
            key={4}
            value="test4"
            className="bg-white p-4 rounded"
          >
            <Accordion.Control>
              How can I provide feedback on the challenges and the platform
              itself?
            </Accordion.Control>
            <Accordion.Panel>
              Lorem ipsum dolor sit, amet Nisi quasi itaque qui adipisci officia
              earum facere ducimus asperiores autem molestias! Facere doloremque
              at cum eum fugiat minima architecto!
            </Accordion.Panel>
          </Accordion.Item>
        </div>
        <div className="flex flex-col gap-4 max-[420px]:w-full w-full">
          <Accordion.Item
            key={5}
            value="test5"
            className="bg-white p-4 rounded"
          >
            <Accordion.Control>
              Can I submit solutions to multiple challenges simultaneously?
            </Accordion.Control>
            <Accordion.Panel>
              Yes, participants can submit solutions to multiple challenges
              simultaneously. We encourage individuals to explore various
              problem domains and contribute their expertise across different
              areas.
            </Accordion.Panel>
          </Accordion.Item>
        </div>
      </Accordion>
    </section>
  );
};

export default Questions;

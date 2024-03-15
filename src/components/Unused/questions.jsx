"use client";

import React, { useState } from "react";
import { GoPlus } from "react-icons/go";
import { LuMinus } from "react-icons/lu";

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
      <div className="grid grid-cols-2 max-[420px]:grid-cols-1 gap-x-8 gap-y-3 w-full mt-14 md:w-[95%]">
        <div className="flex flex-col gap-4 max-[420px]:w-full w-full">
          <div className="flex max-[420px]:w-full flex-row justify-between bg-white p-4 rounded">
            <div>
              <h3
                onClick={() => open(1)}
                className="font-bold text-base cursor-pointer"
              >
                What types of problems are featured on the platform?
              </h3>
              <p
                className={
                  opened == 1 && show
                    ? "block  mt-3 mb-2 text-[90%]"
                    : "hidden" + " mt-3 mb-2 text-[90%]"
                }
              >
                Lorem ipsum dolor sit, amet Nisi quasi itaque qui adipisci
                officia earum facere ducimus asperiores autem molestias! Facere
                doloremque at cum eum fugiat minima architecto!
              </p>
            </div>
            <span onClick={() => open(1)}>
              {opened === 1 && show ? <LuMinus /> : <GoPlus />}
            </span>
          </div>
          <div className="flex max-[420px]:w-full flex-row justify-between bg-white p-4 rounded">
            <div>
              <h3 className="font-bold text-base cursor-pointer">
                How can I stay updated on new challenges and project
                developments?
              </h3>
              <p
                onClick={() => open(2)}
                className={
                  opened == 2 && show
                    ? "block text-[90%]"
                    : "hidden text-[90%]" +
                      " transition delay-150 duration-300 "
                }
              >
                Lorem ipsum dolor sit, amet Nisi quasi itaque qui adipisci
                officia earum facere ducimus asperiores autem molestias! Facere
                doloremque at cum eum fugiat minima architecto!
              </p>
            </div>
            <span>{opened === 2 && show ? <LuMinus /> : <GoPlus />}</span>
          </div>
        </div>
        <div className="flex flex-col gap-4 max-[420px]:w-full w-full">
          <div className="flex max-[420px]:w-full flex-row justify-between bg-white p-4 rounded">
            <div>
              <h3
                onClick={() => open(3)}
                className="font-bold text-base cursor-pointer"
              >
                How is data privacy and security addressed in the submission
                process?
              </h3>
              <p
                className={
                  opened == 3 && show
                    ? "block  mt-3 mb-2 text-[90%]"
                    : "hidden text-[90%]" + " mt-3 mb-2"
                }
              >
                Lorem ipsum dolor sit, amet Nisi quasi itaque qui adipisci
                officia earum facere ducimus asperiores autem molestias! Facere
                doloremque at cum eum fugiat minima architecto!
              </p>
            </div>
            <span onClick={() => open(3)}>
              {opened === 3 && show ? <LuMinus /> : <GoPlus />}
            </span>
          </div>
          <div className="flex max-[420px]:w-full flex-row justify-between bg-white p-4 rounded">
            <div>
              <h3
                onClick={() => open(4)}
                className="font-bold text-base cursor-pointer"
              >
                Are there any fees associated with participating in the
                challenges?
              </h3>
              <p
                className={
                  opened == 4 && show
                    ? "block  mt-3 mb-2 text-[90%]"
                    : "hidden text-[90%]" + " mt-3 mb-2"
                }
              >
                Lorem ipsum dolor sit, amet Nisi quasi itaque qui adipisci
                officia earum facere ducimus asperiores autem molestias! Facere
                doloremque at cum eum fugiat minima architecto!
              </p>
            </div>
            <span onClick={() => open(4)}>
              {opened === 4 && show ? <LuMinus /> : <GoPlus />}
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-4 max-[420px]:w-full w-full">
          <div className="flex max-[420px]:w-full flex-row justify-between bg-white p-4 rounded">
            <div>
              <h3
                onClick={() => open(5)}
                className="font-bold text-base cursor-pointer"
              >
                How can I provide feedback on the challenges and the platform
                itself?
              </h3>
              <p
                className={
                  opened == 5 && show
                    ? "block  mt-3 mb-2 text-[90%]"
                    : "hidden text-[90%]" + " mt-3 mb-2"
                }
              >
                Lorem ipsum dolor sit, amet Nisi quasi itaque qui adipisci
                officia earum facere ducimus asperiores autem molestias! Facere
                doloremque at cum eum fugiat minima architecto!
              </p>
            </div>
            <span onClick={() => open(5)}>
              {opened === 5 && show ? <LuMinus /> : <GoPlus />}
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-4 max-[420px]:w-full w-full">
          <div className="flex max-[420px]:w-full flex-row justify-between bg-white p-4 rounded">
            <div>
              <h3
                onClick={() => open(6)}
                className="font-bold text-base cursor-pointer"
              >
                Can I submit solutions to multiple challenges simultaneously?
              </h3>
              <p
                className={
                  opened == 6 && show
                    ? "block  mt-3 mb-2 text-[90%] text-justify"
                    : "hidden text-[90%] text-justify" + " mt-3 mb-2"
                }
              >
                Yes, participants can submit solutions to multiple challenges
                simultaneously. We encourage individuals to explore various
                problem domains and contribute their expertise across different
                areas.
              </p>
            </div>
            <span className="qsnicons" onClick={() => open(6)}>
              {opened === 6 && show ? <LuMinus /> : <GoPlus />}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Questions;

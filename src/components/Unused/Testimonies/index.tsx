"use client";
import { useState } from "react";
import { testimonies } from "./data";
import Image from "next/image";
import arrowLeft from "@/assets/images/arrow-left.svg";
import arrowRight from "@/assets/images/arrow-right.svg";
import toast from "react-hot-toast";

const Testimonies = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const updateIndex = (index: number) => {
    toast.success(`active index ${activeIndex}`);
    if (index < 0) {
      index = 0;
    } else if (index >= testimonies.length) {
      index = testimonies.length - 1;
    }

    setActiveIndex(index);
  };
  return (
    <div className="w-full flex flex-col items-center py-[2rem] h-[90vh] bg-[#F4F4F4]">
      <h3 className="max-[420px]:text-[30px] font-bold text-[2.4rem] text-[#000000]">
        Testimonials
      </h3>
      <p className="text-center">
        Testimonials from people who gave their problems and suggestions and
        they were solved and suggestions.
      </p>

      {/* <div className="relative"> */}
      <div className=" flex mt-10 h-[95%] overflow-x-auto gap-[5rem] relative">
        {testimonies.map((testimony, i) => {
          return (
            <div
              className={`carousel-item h-[90%] rounded-lg bg-white flex flex-col items-center justify-center`}
              style={{ transform: `translate(-${activeIndex * 100}%)` }}
            >
              <Image alt={testimony.name} src={testimony.image} />
              <p>{testimony.review}</p>
              <h5>{testimony.name}</h5>
              <h5>{testimony.location}</h5>
            </div>
          );
        })}
        <div
          className="fixed left-0 w-[3rem]"
          onClick={() => updateIndex(activeIndex - 1)}
        >
          <Image src={arrowLeft} alt="Previous" />
        </div>
        <div
          className="absolute right-0 w-[3rem]"
          onClick={() => updateIndex(activeIndex + 1)}
        >
          <Image src={arrowLeft} alt="Next" />
        </div>
      </div>
      {/* </div> */}
    </div>
  );
};
export default Testimonies;

import React from "react";
import {
  IdentificationIcon,
  HomeModernIcon,
  HeartIcon,
  HandThumbUpIcon,
} from "@heroicons/react/24/outline";
import { AcademicCapIcon } from "@heroicons/react/24/solid";

function Categories() {
  return (
    <div className=" flex">
      <div className="mt-3 rounded-3xl">
        {/* categories section */}
        <div className="title text-md font-semibold mt-16 float-left ml-16">
          <h2>Category</h2>
        </div>

        <div className="categories grid grid-cols-6 gap-32 ml-16 mt-24">
          <div className="category block bg-white w-32 h-32 rounded-xl items-center justify-center">
            <HeartIcon className="w-8 text-red-500 ml-12 mt-6" />
            <h2 className="text-xs">Ubuzima</h2>
            <h2 className="text-xs">30</h2>
          </div>

          <div className="category block bg-white w-32 h-32 rounded-xl items-center justify-center">
            <AcademicCapIcon className="w-8 text-darkblue-default ml-12 mt-6" />
            <h2 className="text-xs">Uburezi</h2>
            <h2 className="text-xs">30</h2>
          </div>

          <div className="category block bg-white w-32 h-32 rounded-xl items-center justify-center">
            <IdentificationIcon className="w-8 text-darkgreen-default ml-12 mt-6" />
            <h2 className="text-xs">Irangamimerere</h2>
            <h2 className="text-xs">30</h2>
          </div>

          <div className="category block bg-white w-32 h-32 rounded-xl items-center justify-center">
            <HandThumbUpIcon className="w-8 text-blue-500 ml-12 mt-6" />
            <h2 className="text-xs">Imibereho myiza y'abaturage</h2>
          </div>

          <div className="category block bg-white w-32 h-32 rounded-xl items-center justify-center">
            <HomeModernIcon className="w-8 text-darkblue-default ml-12 mt-6" />
            <h2 className="text-xs">Ibikorwa remezo n'inganda</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Categories;

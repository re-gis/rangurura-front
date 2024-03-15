import React from "react";
import {
  IdentificationIcon,
  HomeModernIcon,
  HeartIcon,
  HandThumbUpIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/outline";

const Category = ({ icon, percentage, iconColor, lineColor, problems }) => (
  <div className="category flex px-1 items-center bg-white py-2 mb-4">
    <div className={`icon-container w-8 h-8 rounded-full ${iconColor}`}>
      {icon}
    </div>
    <div className="percentage-line w-64 h-2 bg-lightgrey-default rounded ml-4">
      <div
        className={`h-full bg-${lineColor} rounded`}
        style={{ width: `${percentage}%` }}
      ></div>
      <p className="text-black font-medium mr-72">{percentage}%</p>
    </div>

    <p className="text-black font-xs ml-4">{problems}</p>
  </div>
);

const Categories = () => {
  const data = [
    {
      icon: <HeartIcon />,
      percentage: 90,
      iconColor: "text-red-500",
      lineColor: "red-500",
      problems: "270",
    },
    {
      icon: <AcademicCapIcon />,
      percentage: 50,
      iconColor: "text-darkblue-default",
      lineColor: "darkblue-default",
      problems: "300",
    },
    {
      icon: <IdentificationIcon />,
      percentage: 40,
      iconColor: "text-darkgreen-default",
      lineColor: "darkgreen-default",
      problems: "120",
    },
    {
      icon: <HandThumbUpIcon />,
      percentage: 75,
      iconColor: "text-blue-500",
      lineColor: "blue-500",
      problems: "220",
    },
    {
      icon: <HomeModernIcon />,
      percentage: 34,
      iconColor: "text-darkblue-default",
      lineColor: "darkblue-default",
      problems: "254",
    },
    {
      icon: <IdentificationIcon />,
      percentage: 30,
      iconColor: "text-darkgreen-default",
      lineColor: "darkgreen-default",
      problems: "120",
    },
  ];

  return (
    <div className="flex float-right">
      <div className="container  bg-white rounded-3xl px-4 py-4 mb-24 mr-[480px] mt-20">
        <div className="title text-md font-semibold text-start ml-10">
          <h2>Categories</h2>
        </div>
        <div className="categories block mt-4">
          {data.map((category, index) => (
            <Category key={index} {...category} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;

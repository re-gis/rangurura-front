"use client";
import { Card, DonutChart, Title } from "@tremor/react";

const cities = [
  {
    name: "New York",
    sales: 9800,
  },
  {
    name: "London",
    sales: 4567,
  },
  {
    name: "Hong Kong",
    sales: 3908,
  },
  {
    name: "San Francisco",
    sales: 2400,
  },
  {
    name: "Singapore",
    sales: 1908,
  },
  {
    name: "Zurich",
    sales: 1398,
  },
  {
    name: "Zurich",
    sales: 1398,
  },
];

const days = [
  {
    name: "Mon",
    color: "#FAD201",
  },
  {
    name: "Tue",
    color: "#20603D",
  },
  {
    name: "Wed",
    color: "#F48150",
  },
  {
    name: "Thu",
    color: "#0E86B4",
  },
  {
    name: "Fri",
    color: "#E109F4",
  },
  {
    name: "Sat",
    color: "#2B48AF",
  },
  {
    name: "Sun",
    color: "#FAD201",
  },
];

const valueFormatter = (number: number) =>
  `$ ${new Intl.NumberFormat("us").format(number).toString()}`;

// const customTooltip = ({ payload, active }: any) => {
//   if (!active || !payload) return null;
//   const categoryPayload = payload?.[0];
//   if (!categoryPayload) return null;
//   console.log('categoryPayload', categoryPayload);
//   return (
//     <div className={`w-56 rounded-tremor-default text-tremor-default bg-${categoryPayload?.color} p-2 shadow-tremor-dropdown border border-tremor-border`}>
//       <div className="flex flex-1 space-x-2.5">
//         <div className={`w-1.5 flex flex-col bg-${categoryPayload?.color} rounded`} />
//         <div className="w-full">
//           <div className="flex items-center justify-between space-x-8">
//             <p className=" text-tremor-content text-left">{categoryPayload.name}</p>
//             <p className="font-medium text-right whitespace-nowrap text-tremor-content-emphasis">
//               {categoryPayload.value}
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

export default function Graph() {
  return (
    <div className="w-full flex items-center">
      <DonutChart
        className="mt-6 w-full"
        data={cities}
        category="sales"
        index="name"
        valueFormatter={valueFormatter}
        colors={["#FF0000", "#00FF00", "indigo", "rose", "cyan", "amber"]}
      />

      <div className="flex flex-col gap-4 justify-center mr-9 mt-3">
        {days.map((day: { name: string; color: string }, i: number) => {
          return (
            <div key={i} className="flex items-center justify-start gap-3">
              <span className={`w-5 h-5 rounded-sm bg-[${day.color}]`}></span>
              <h6 className="text-[80%] font-bold">{day.name}</h6>
            </div>
          );
        })}
      </div>
    </div>
  );
}

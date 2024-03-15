import React, { useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

const Calendar = () => {
  const monthNames = [
    "Mutarama",
    "Gashyantare",
    "Werurwe",
    "Mata",
    "Gicurasi",
    "Kamena",
    "Nyakanga",
    "Kanama",
    "Nzeri",
    "Ukwakira",
    "Ugushingo",
    "Ukuboza",
  ];

  const [currentDate, setCurrentDate] = useState(new Date());

  const prevMonth = () => {
    const newDate = new Date(currentDate);
    newDate.setMonth(currentDate.getMonth() - 1);
    setCurrentDate(newDate);
  };

  const nextMonth = () => {
    const newDate = new Date(currentDate);
    newDate.setMonth(currentDate.getMonth() + 1);
    setCurrentDate(newDate);
  };

  const daysInMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1,
    0,
  ).getDate();

  const firstDayOfMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    1,
  ).getDay();

  const generateCalendar = () => {
    const calendar = [];
    let date = 1;

    for (let i = 0; i < 6; i++) {
      const week = [];

      for (let j = 0; j < 7; j++) {
        if ((i === 0 && j < firstDayOfMonth) || date > daysInMonth) {
          week.push(<td key={j}></td>);
        } else {
          week.push(<td key={j}>{date}</td>);
          date++;
        }
      }

      calendar.push(<tr key={i}>{week}</tr>);
    }

    return calendar;
  };

  return (
    <div className="w-64 mx-7 p-3 bg-white rounded-xl">
      <div className="flex justify-between items-center mb-6">
        <span className="cursor-pointer" onClick={prevMonth}>
          <ChevronLeftIcon className="text-black w-4 ml-6" />
        </span>
        <span className="text-lg">
          {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
        </span>
        <span className="cursor-pointer" onClick={nextMonth}>
          <ChevronRightIcon className="text-black w-4 mr-6" />
        </span>
      </div>
      <table className="table-fixed">
        <thead>
          <tr>
            <th className="w-2/12 text-sm p-1">Sun</th>
            <th className="w-2/12 text-sm p-1">Mon</th>
            <th className="w-2/12 text-sm p-1">Tue</th>
            <th className="w-2/12 text-sm p-1">Wed</th>
            <th className="w-2/12 text-sm p-1">Thu</th>
            <th className="w-2/12 text-sm p-1 text-blue-500">Fri</th>
            <th className="w-2/12 text-sm p-1 text-blue-500">Sat</th>
          </tr>
        </thead>
        <tbody>{generateCalendar()}</tbody>
      </table>
    </div>
  );
};

export default Calendar;

import React, { useState } from "react";
import {
  ChartBarIcon,
  ChartPieIcon,
  PresentationChartBarIcon,
} from "@heroicons/react/24/outline";
import {
  Chart,
  CategoryScale,
  LinearScale,
  BarElement,
  DoughnutController,
  Tooltip,
  Legend,
  LineController,
  PointElement,
  LineElement,
  ArcElement,
} from "chart.js";
import { Bar, Doughnut, Line } from "react-chartjs-2";

Chart.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
  DoughnutController,
  LineController,
  PointElement,
  LineElement,
  ArcElement,
);

const ChartB = () => {
  const [chartType, setChartType] = useState("bar");

  const data = {
    labels: ["Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Hours",
        data: [35, 50, 20, 40, 50, 60, 45],
        backgroundColor: "#20603D",
        borderRadius: 5,
        width: 5,
        type: chartType === "line" ? "line" : undefined,
      },
      {
        label: "Problems",
        data: [20, 35, 40, 30, 10, 45, 20],
        backgroundColor: "#fad201",
        borderRadius: 5,
        width: 5,
        type: chartType === "line" ? "line" : undefined,
      },
    ],
  };

  const barOptions = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    responsive: true,
    maintainAspectRatio: false,
    height: 300,
  };

  const DoughnutOptions = {
    responsive: true,
    maintainAspectRatio: false,
    height: 300,
  };

  const lineOptions = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    responsive: true,
    maintainAspectRatio: false,
    height: 300,
  };

  return (
    <div className="title text-md font-semibold float-left ml-16 mt-2">
      <h2 className="mr-[650px]">Statistics</h2>
      <div className="all flex justify-between mt-6">
        <div className="often grid grid-cols-4 gap-1 mb-3">
          <span className="text-xs">Daily</span>

          <span className="text-xs text-white bg-darkblue-default rounded">
            Weekly
          </span>
          <span className="text-xs">Monthly</span>
          <span className="text-xs">Yearly</span>
        </div>
        <div className="grid grid-cols-4 gap-4 ml-4">
          <PresentationChartBarIcon
            className={`w-4 ${
              chartType === "line" ? "text-darkblue-default" : ""
            }`}
            onClick={() => setChartType("line")}
          />
          <ChartBarIcon
            className={`w-4 text-white bg-darkblue-default rounded ${
              chartType === "bar" ? "opacity-50" : ""
            }`}
            onClick={() => setChartType("bar")}
          />
          <ChartPieIcon
            className={`w-4 ${
              chartType === "Doughnut" ? "text-darkblue-default" : ""
            }`}
            onClick={() => setChartType("Doughnut")}
          />
        </div>
      </div>
      <div className="h-96 p-1 w-500 rounded-xl pr-16 bg-white">
        <div className="grid-cols-3 w-1000 pl-10 rounded h-full">
          {chartType === "bar" ? (
            <Bar data={data} options={barOptions} />
          ) : chartType === "Doughnut" ? (
            <Doughnut data={data} options={DoughnutOptions} />
          ) : (
            <Line data={data} options={lineOptions} />
          )}
        </div>
      </div>
    </div>
  );
};

export default ChartB;

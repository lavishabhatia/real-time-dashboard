import React, { useEffect, useRef } from "react";
import { Line } from "react-chartjs-2";
import useSimulatedData from "../hooks/useSimulatedData";
import {
  Chart,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  LineController,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { useTheme } from "../context/ThemeContext";

Chart.register(
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  LineController,
  Title,
  Tooltip,
  Legend
);

const ChartWidget = ({ title }) => {
  const data = useSimulatedData(title);
  const chartRef = useRef(null);
  const { theme, toggleTheme } = useTheme();

  const widgetStyle = {
    background: theme === "dark" ? "#1a202c" : "#f7fafc",
    color: theme === "dark" ? "#cbd5e0" : "#1a202c",
    border: theme === "dark" ? "1px solid #2d3748" : "1px solid #e2e8f0",
  };
  const chartData = {
    labels: data?.map((_, index) => index),
    datasets: [
      {
        label: "Real-time Data",
        data: data,
        fill: false,
        backgroundColor: "rgba(75,192,192,0.6)",
        borderColor: "rgba(75,192,192,1)",
      },
    ],
  };

  useEffect(() => {
    return () => {
      if (chartRef?.current) {
        chartRef?.current?.chartInstance?.destroy();
      }
    };
  }, []);

  return (
    <div
      style={widgetStyle}
      className={`  bg-white dark:bg-gray-100"
      p-4 rounded-lg shadow`}
    >
      <h2 className="text-lg font-bold">{title}</h2>
      <Line data={chartData} ref={chartRef} />
    </div>
  );
};

export default ChartWidget;

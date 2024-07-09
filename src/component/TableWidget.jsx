import React from "react";
import useSimulatedData from "../hooks/useSimulatedData";
import { useTheme } from "../context/ThemeContext";

const TableWidget = ({ title }) => {
  const data = useSimulatedData(title);

  const { theme } = useTheme();

  const widgetStyle = {
    background: theme === "dark" ? "#1a202c" : "#f7fafc",
    color: theme === "dark" ? "#000" : "#1a202c",
    border: theme === "dark" ? "1px solid #2d3748" : "1px solid #e2e8f0",
  };

  return (
    <div
      className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow min-h-[85vh] overflow-scroll scrollbar-hide overflow-y-auto"
      style={widgetStyle}
    >
      <h2 className="text-lg font-bold  dark:!text-white">{title}</h2>
      <table className="min-w-full bg-white dark:bg-gray-800">
        <thead>
          <tr>
            <th className="py-2 dark:text-black">Time</th>
            <th className="py-2">Value</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((item, index) => (
            <tr key={index} className="border-t">
              <td className="py-2">{item.time}</td>
              <td className="py-2">{item.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableWidget;

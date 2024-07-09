import React, { useState } from "react";
import useSimulatedData from "../hooks/useSimulatedData";
import { useTheme } from "../context/ThemeContext";

const Widget = ({ title }) => {
  const data = useSimulatedData(title);
  const [filter, setFilter] = useState("");
  const { theme } = useTheme();

  const widgetStyle = {
    background: theme === "dark" ? "#1a202c" : "#f7fafc",
    color: theme === "dark" ? "#cbd5e0" : "#1a202c",
    border: theme === "dark" ? "1px solid #2d3748" : "1px solid #e2e8f0",
  };

  const filteredData = data.filter((item) => {
    if (filter === "") return true;
    return item.value.toString().includes(filter) || item.time.includes(filter);
  });

  const latestData = data.length > 0 ? data[data.length - 1] : {};
  return (
    <div
      style={widgetStyle}
      className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow"
    >
      <h2 className="text-lg font-bold">{title}</h2>
      <input
        type="text"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        className="mt-2 p-2 border rounded w-full"
        placeholder="Filter data..."
      />
      {latestData && (
        <p>
          Real-time data: {latestData?.time} - {latestData?.value}
        </p>
      )}
      <ul>
        {filteredData.map((item, index) => (
          <li key={index}>
            {item.time} - {item.value}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Widget;

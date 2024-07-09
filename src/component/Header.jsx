import React from "react";
import { useTheme } from "../context/ThemeContext";

const Header = () => {
  const { theme, toggleTheme } = useTheme();

  const textColor = theme === "light" ? "Dark Color" : "Light Color";
  return (
    <header
      className={`${theme === "light" ? "bg-gray-100" : "bg-black"} dark:bg-${
        theme === "light" ? "gray-900" : "black"
      } p-4 flex justify-between items-center sticky`}
    >
      <h1
        className={`${
          theme === "light" ? "text-black" : "text-white"
        } text-xl font-bold`}
      >
        Dashboard
      </h1>
      <button
        className={`${
          theme === "light" ? "bg-blue-500 " : "bg-black border border-white"
        }  p-2 rounded text-white`}
        onClick={toggleTheme}
      >
        {textColor}
      </button>
    </header>
  );
};

export default Header;

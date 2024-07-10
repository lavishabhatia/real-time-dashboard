import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FcLineChart } from "react-icons/fc";
import { CiViewTable } from "react-icons/ci";
import { BiStats } from "react-icons/bi";

const Sidebar = () => {
  const location = useLocation();
  const { pathname } = location;
  return (
    <div className="w-64 bg-gray-800 text-white h-screen">
      <div className="p-4">
        <h1 className="text-2xl font-bold">Admin Dashboard</h1>
      </div>
      <nav className="mt-4">
        <Link
          to="/charts"
          className={`flex gap-3 items-center py-2.5 px-4 rounded ${
            pathname === "/charts" ? "bg-gray-700" : ""
          } hover:bg-gray-700`}
        >
          <FcLineChart className="w-5 h-5 flex items-center" />
          Charts
        </Link>
        <Link
          to="/table"
          className={`flex gap-3 items-center py-2.5 px-4 rounded ${
            pathname === "/table" ? "bg-gray-700" : ""
          } hover:bg-gray-700`}
        >
          <CiViewTable className="w-5 h-5 flex items-center" />
          Table
        </Link>
        <Link
          to="/stats"
          className={`flex gap-3 items-center py-2.5 px-4 rounded ${
            pathname === "/stats" ? "bg-gray-700" : ""
          } hover:bg-gray-700`}
        >
          <BiStats className="w-5 h-5 flex items-center" />
          Stats
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;

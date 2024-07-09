import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="w-64 bg-gray-800 text-white h-screen">
      <div className="p-4">
        <h1 className="text-2xl font-bold">Admin Dashboard</h1>
      </div>
      <nav className="mt-4">
        <Link to="/charts" className="block py-2.5 px-4 rounded hover:bg-gray-700">
          Charts
        </Link>
        <Link to="/table" className="block py-2.5 px-4 rounded hover:bg-gray-700">
          Table
        </Link>
        <Link to="/stats" className="block py-2.5 px-4 rounded hover:bg-gray-700">
          Stats
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;

import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className=" bg-pink-600 shadow">
      <div className="container mx-auto px-6 py-12 flex justify-between items-center">
        
        <div className="flex items-center">
          <span className="text-emerald-700 font-bold justify-self-start text-2xl">Sotshintshi Spa</span>
        </div>

        {/* Navigation links */}
        <div className="flex space-x-12 text-3xl">
          <Link
            to="/"
            className="text-white hover:text-gray-200 font-medium transition duration-300  hover:bg-pink-300"
          >
            Home
          </Link>
          <Link
            to="/treatments"
            className="text-white hover:text-gray-200 font-medium transition duration-300  hover:bg-pink-300"
          >
            Treatments
          </Link>
          <Link
            to="/packages"
            className="text-white hover:text-gray-200 font-medium transition duration-300  hover:bg-pink-300"
          >
            Packages
          </Link>
          <Link
            to="/bookings"
            className="text-white hover:text-gray-200 font-medium transition duration-300  hover:bg-pink-300"
          >
            Bookings
          </Link>
          <Link
            to="/contactUs"
            className="text-white hover:text-gray-200 font-medium transition duration-300  hover:bg-pink-300"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

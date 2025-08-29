import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { Menu, X } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-6">
      <div className="max-w-7xl mx-auto px-6 lg:px-0 flex flex-col md:flex-row items-center md:justify-between gap-4">
        
          <div className="text-xl font-bold text-emerald-700">
          Sotshintshi Spa
        </div>

        <div className="flex space-x-4 justify-center md:justify-end mt-8">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"
             className="bg-gray-700 p-3 rounded-full hover:bg-red-500 transition-colors">
            <FaFacebookF />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"
             className="bg-gray-700 p-3 rounded-full hover:bg-pink-500 transition-colors">
            <FaInstagram />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"
             className="bg-gray-700 p-3 rounded-full hover:bg-blue-400 transition-colors">
            <FaTwitter />
          </a>
        </div>
      </div>

      <div className="text-gray-300 text-center mt-4">
        &copy; 2025 Sotshintshi Spa. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;

import React from "react";
import { FaInstagram, FaFacebookF } from "react-icons/fa";

const Footer = () => (
  <footer className="bg-[#050505] border-t border-gray-700 text-gray-300 py-10 px-6 md:px-20">
    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
      <div>
        <h3 className="text-blue-500 uppercase tracking-wider font-semibold text-lg">
          Lakshmi Hospital and Research Center
        </h3>
        <ul className="mt-6 space-y-2 text-sm">
          <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
          <li><a href="#" className="hover:text-white transition">Terms and Conditions</a></li>
          <li><a href="#" className="hover:text-white transition">Contact Us</a></li>
        </ul>
      </div>

      <div className="flex flex-col md:items-end gap-6 w-full md:w-auto">
        <div className="flex items-center gap-6 justify-center md:justify-end">
          <a href="#" aria-label="Instagram" className="text-gray-300 hover:text-white transition">
            <FaInstagram size={18} />
          </a>
          <a href="#" aria-label="Facebook" className="text-gray-300 hover:text-white transition">
            <FaFacebookF size={18} />
          </a>
        </div>
        <span className="text-xs tracking-wide md:text-right">
          © 2025 Full Rights Reserved
        </span>
      </div>
    </div>
  </footer>
);

export default Footer;

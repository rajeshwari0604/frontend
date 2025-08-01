import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => (
  <footer className="bg-[#050505] border-t border-gray-700 text-gray-300 py-12 px-6 md:px-20">
    <div className="max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
        {/* Project Info */}
        <div className="md:col-span-2">
          <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-4">
            Sign2Text
          </h3>
          <p className="text-gray-400 mb-4 leading-relaxed">
            Real-time sign language translation system using advanced AI and computer vision. 
            Bridging communication gaps for the deaf and hard-of-hearing community.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" aria-label="GitHub" className="text-gray-400 hover:text-white transition">
              <FaGithub size={20} />
            </a>
            <a href="#" aria-label="LinkedIn" className="text-gray-400 hover:text-white transition">
              <FaLinkedin size={20} />
            </a>
            <a href="#" aria-label="Email" className="text-gray-400 hover:text-white transition">
              <FaEnvelope size={20} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white transition">Documentation</a></li>
            <li><a href="#" className="hover:text-white transition">API Reference</a></li>
            <li><a href="#" className="hover:text-white transition">Demo</a></li>
            <li><a href="#" className="hover:text-white transition">Source Code</a></li>
          </ul>
        </div>

        {/* Academic Info */}
        <div>
          <h4 className="text-white font-semibold mb-4">Academic</h4>
          <ul className="space-y-2 text-sm">
            <li><span className="text-gray-400">Batch:</span> B6, Section CSE B</li>
            <li><span className="text-gray-400">Supervisor:</span> Dr. R. SriLakshmi</li>
            <li><span className="text-gray-400">Department:</span> Computer Science</li>
            <li><span className="text-gray-400">Year:</span> 2024-25</li>
          </ul>
        </div>
      </div>

      {/* Team Members */}
      <div className="border-t border-gray-700 pt-8 mb-8">
        <h4 className="text-white font-semibold mb-4 text-center">Development Team</h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center text-sm">
          <div>
            <p className="text-white font-medium">Rajeshwari Akella</p>
            <p className="text-gray-400">245322733133</p>
          </div>
          <div>
            <p className="text-white font-medium">CH. Thanu Sree</p>
            <p className="text-gray-400">245322733138</p>
          </div>
          <div>
            <p className="text-white font-medium">Sunkari Praneeth Narayan</p>
            <p className="text-gray-400">245322733060</p>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center text-sm">
        <span className="text-gray-400">
          © 2024 Sign2Text Project. All rights reserved.
        </span>
        <div className="flex gap-6 mt-4 md:mt-0">
          <a href="#" className="text-gray-400 hover:text-white transition">Privacy Policy</a>
          <a href="#" className="text-gray-400 hover:text-white transition">Terms of Use</a>
          <a href="#" className="text-gray-400 hover:text-white transition">Contact</a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
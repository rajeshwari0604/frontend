import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { NAVBAR_LINKS } from '../Data/Data';
import { Menu, X } from 'lucide-react';

const NavBar = ({ scrollToTop, scrollToServices }) => {
  const [SCROLLED, setSCROLLED] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setSCROLLED(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollOrNavigate = (target) => {
    setMenuOpen(false);
    if (location.pathname === '/') {
      if (target === 'top') scrollToTop();
      else if (target === 'services') scrollToServices();
    } else {
      navigate(`/?scroll=${target}`);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        SCROLLED ? 'bg-slate-900/70 backdrop-blur shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="flex justify-center items-center py-4 px-6 mx-auto transition-all duration-300">
        {/* Navigation links */}
        <nav className="hidden lg:flex gap-6 text-sm">
          <button
            onClick={() => handleScrollOrNavigate('top')}
            className="text-gray-100 hover:text-blue-400 transition-all duration-300 font-semibold tracking-wide"
          >
            Home
          </button>
          <button
            onClick={() => handleScrollOrNavigate('services')}
            className="text-gray-100 hover:text-blue-400 transition-all duration-300 font-semibold tracking-wide"
          >
            Services
          </button>
          {NAVBAR_LINKS.map((link, index) => (
            <Link
              to={link.link}
              key={index}
              className="text-gray-100 hover:text-blue-400 transition-all duration-300 font-semibold tracking-wide"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Center: Brand */}
        <div className="text-center flex-1 text-sm sm:text-base lg:text-lg font-extrabold bg-gradient-to-r from-[#428DFF] to-[#275599] text-transparent bg-clip-text">
          <Link to="/">SIGN2TEXT</Link>
        </div>

        {/* Appointment & Hamburger */}
        <div className="flex items-center gap-4">
          <Link
            to="/appointments"
            className="bg-[#D9D9D9] text-black rounded-2xl border-2 border-black px-4 py-2 text-sm font-semibold hover:bg-gray-400 transition duration-300 hidden md:block"
          >
            Book Appointment
          </Link>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white lg:hidden z-50 focus:outline-none"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-slate-900/90 px-6 py-4 animate-fade-in-down space-y-4">
          <button
            onClick={() => handleScrollOrNavigate('top')}
            className="block text-gray-100 hover:text-blue-400 text-base font-semibold transition-colors duration-300"
          >
            Home
          </button>
          <button
            onClick={() => handleScrollOrNavigate('services')}
            className="block text-gray-100 hover:text-blue-400 text-base font-semibold transition-colors duration-300"
          >
            Services
          </button>
          {NAVBAR_LINKS.map((link, index) => (
            <Link
              to={link.link}
              key={index}
              onClick={() => setMenuOpen(false)}
              className="block text-gray-100 hover:text-blue-400 text-base font-semibold transition-colors duration-300"
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/appointments"
            onClick={() => setMenuOpen(false)}
            className="w-full bg-blue-500 hover:bg-blue-600 text-white rounded-lg px-4 py-2 font-bold mt-4 block text-center"
          >
            Book Appointment
          </Link>
        </div>
      )}

      {/* Divider Line */}
      <div className="p-[2px] bg-gradient-to-r from-gray-700 to-gray-900" />

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes fade-in-down {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-down {
          animation: fade-in-down 0.4s ease-out forwards;
        }
      `}</style>
    </header>
  );
};

export default NavBar;

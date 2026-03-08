import React, { useState, useRef, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown, Menu, X } from 'lucide-react';

const serviceLinks = [
  { label: 'All Services', href: '/services' },
  { label: 'Drone Spraying', href: '/services/drone-spraying' },
  { label: 'Drone Spreading', href: '/services/drone-spreading' },
  { label: 'Multispectral Mapping', href: '/services/multispectral-mapping' },
];

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="container mx-auto px-6 h-20 flex justify-between items-center">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-agri-green rounded-lg flex items-center justify-center">
            <span className="text-white font-bold italic">A</span>
          </div>
          <span className="text-2xl font-bold text-agri-dark">SkyFeather</span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-10 font-medium text-gray-600">
          <a href="/" className="hover:text-agri-green transition">Home</a>
          <a href="/about" className="hover:text-agri-green transition">About</a>

          {/* Services Dropdown */}
          <div ref={dropdownRef} className="relative">
            <button
              onClick={() => setDropdownOpen((prev) => !prev)}
              className="flex items-center gap-1 hover:text-agri-green transition"
            >
              Services
              <ChevronDown
                size={16}
                className={`transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`}
              />
            </button>

            <AnimatePresence>
              {dropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.15 }}
                  className="absolute top-full mt-3 left-1/2 -translate-x-1/2 w-56 bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-50"
                >
                  {serviceLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      className="block px-5 py-2.5 text-sm text-gray-600 hover:bg-agri-light hover:text-agri-green transition"
                      onClick={() => setDropdownOpen(false)}
                    >
                      {link.label}
                    </a>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <a href="/contact" className="hover:text-agri-green transition">Contact</a>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-agri-dark"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden overflow-hidden bg-white border-t border-gray-100"
          >
            <div className="container mx-auto px-6 py-6 flex flex-col gap-4 text-gray-700 font-medium">
              <a href="/" onClick={() => setMobileOpen(false)}>Home</a>
              <a href="/about" onClick={() => setMobileOpen(false)}>About</a>
              <div className="flex flex-col gap-2">
                <span className="text-agri-dark font-bold text-sm uppercase tracking-wider">Services</span>
                {serviceLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="pl-4 text-sm text-gray-500 hover:text-agri-green transition"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
              <a href="/contact" onClick={() => setMobileOpen(false)}>Contact</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
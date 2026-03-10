import { useState, useRef, useEffect } from 'react';
import { ChevronDown, Menu, X, ArrowUpRight } from 'lucide-react';

const serviceLinks = [
  { label: 'All Services', href: '/services' },
  { label: 'Drone Spraying', href: '/services/drone-spraying' },
  { label: 'Drone Spreading', href: '/services/drone-spreading' },
  { label: 'Multispectral Mapping', href: '/services/multispectral-mapping' },
];

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(() => {
          setScrolled(window.scrollY > 20);
          ticking = false;
        });
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
    <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[60] focus:bg-agri-green focus:text-white focus:px-4 focus:py-2 focus:rounded-lg focus:text-sm focus:font-bold">
      Skip to main content
    </a>
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-[0_2px_20px_rgba(0,0,0,0.08)]'
          : 'bg-white/80 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* Logo */}
        <a href="/" className="flex items-center gap-2.5 shrink-0 group">
          <div className="w-9 h-9 bg-agri-green rounded-xl flex items-center justify-center shadow-md group-hover:scale-105 transition-transform duration-200">
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth={2.2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1M4.22 4.22l.7.7m13.86 13.86.7.7M3 12H2m20 0h-1M4.22 19.78l.7-.7M18.36 5.64l.7-.7" />
              <circle cx="12" cy="12" r="4" strokeWidth={2} />
            </svg>
          </div>
          <span className="text-[15px] font-bold text-agri-dark tracking-tight">SkyFeather Innovations</span>
        </a>

        {/* Desktop center nav — pill container */}
        <div className="hidden md:flex items-center gap-1 bg-gray-100/80 rounded-full px-2 py-1.5 text-[13px] font-medium">
          <a href="/" className="px-4 py-1.5 rounded-full text-gray-600 hover:bg-white hover:text-gray-900 hover:shadow-sm transition-all duration-150">
            Home
          </a>
          <a href="/about" className="px-4 py-1.5 rounded-full text-gray-600 hover:bg-white hover:text-gray-900 hover:shadow-sm transition-all duration-150">
            About
          </a>

          {/* Services dropdown */}
          <div ref={dropdownRef} className="relative">
            <button
              onClick={() => setDropdownOpen((prev) => !prev)}
              className={`flex items-center gap-1 px-4 py-1.5 rounded-full text-gray-600 hover:bg-white hover:text-gray-900 hover:shadow-sm transition-all duration-150 ${dropdownOpen ? 'bg-white shadow-sm text-gray-900' : ''}`}
            >
              Services
              <ChevronDown size={13} className={`transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`} />
            </button>
            <div
              className={`absolute top-full mt-2 left-1/2 -translate-x-1/2 w-56 bg-white rounded-2xl shadow-2xl border border-gray-100/80 py-2 z-50 overflow-hidden transition-all duration-150 origin-top ${
                dropdownOpen ? 'opacity-100 scale-100 translate-y-0 pointer-events-auto' : 'opacity-0 scale-95 translate-y-1.5 pointer-events-none'
              }`}
            >
              {serviceLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="flex items-center gap-2 px-4 py-2.5 text-[13px] text-gray-600 hover:bg-agri-green/8 hover:text-agri-green transition-colors"
                  onClick={() => setDropdownOpen(false)}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-agri-green/50 shrink-0" />
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <a href="/contact" className="px-4 py-1.5 rounded-full text-gray-600 hover:bg-white hover:text-gray-900 hover:shadow-sm transition-all duration-150">
            Contact
          </a>
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="/contact"
            className="btn-interactive group flex items-center gap-2 bg-agri-dark text-white text-[13px] font-semibold pl-4 pr-1.5 py-1.5 rounded-full hover:bg-indigo-600 hover:scale-[1.03] hover:shadow-lg hover:shadow-indigo-500/25 active:scale-[0.98] transition-all duration-200 shadow-md"
          >
            Get Started
            <span className="w-7 h-7 rounded-full bg-agri-green group-hover:bg-white/20 flex items-center justify-center shrink-0 transition-colors duration-200">
              <ArrowUpRight size={13} className="text-white" aria-hidden="true" />
            </span>
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden w-9 h-9 flex items-center justify-center rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-white/95 backdrop-blur-md border-t border-gray-100 shadow-xl transition-all duration-200 origin-top ${
          mobileOpen ? 'opacity-100 translate-y-0 max-h-[500px] pointer-events-auto' : 'opacity-0 -translate-y-2 max-h-0 pointer-events-none overflow-hidden'
        }`}
      >
            <div className="px-5 py-5 flex flex-col gap-1">
              {[
                { label: 'Home', href: '/' },
                { label: 'About', href: '/about' },
                { label: 'Contact', href: '/contact' },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="px-4 py-3 rounded-xl text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-agri-green transition-colors"
                >
                  {link.label}
                </a>
              ))}

              <div className="px-4 pt-2 pb-1">
                <span className="text-[11px] text-gray-400 uppercase tracking-widest font-semibold">Services</span>
              </div>
              {serviceLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm text-gray-500 hover:bg-gray-50 hover:text-agri-green transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-agri-green/50" />
                  {link.label}
                </a>
              ))}

              <div className="pt-3 px-1">
                <a
                  href="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-center gap-2 bg-agri-dark text-white py-3 rounded-2xl text-sm font-semibold w-full hover:bg-indigo-600 transition-colors"
                >
                  Get Started <ArrowUpRight size={14} />
                </a>
              </div>
            </div>
      </div>
    </nav>
    </>
  );
};

export default Navbar;
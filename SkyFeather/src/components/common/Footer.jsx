import React from 'react';
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, ArrowUpRight } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Contact', href: '/contact' },
];

const serviceLinks = [
  { label: 'Drone Spraying', href: '/services/drone-spraying' },
  { label: 'Drone Spreading', href: '/services/drone-spreading' },
  { label: 'Multispectral Mapping', href: '/services/multispectral-mapping' },
];



const Footer = () => (
  <footer className="bg-[#0f2b1a] text-white">

    {/* CTA band */}
    <div className="border-b border-white/8">
      <div className="container mx-auto px-6 py-14 flex flex-col md:flex-row items-center justify-between gap-8">
        <div>
          <p className="text-xs text-white/40 uppercase tracking-widest font-semibold mb-2">Ready to get started?</p>
          <h2 className="text-2xl md:text-3xl font-extrabold leading-tight">
            Transform your farm with{' '}
            <span className="text-agri-green">SkyFeather</span>
          </h2>
        </div>
        <a
          href="/contact"
          className="btn-interactive shrink-0 inline-flex items-center gap-3 bg-agri-green text-[#0f2b1a] font-bold px-7 py-3.5 rounded-full hover:bg-white hover:text-agri-dark hover:scale-[1.03] hover:shadow-lg hover:shadow-white/20 active:scale-[0.98] transition-all duration-300"
        >
          Get In Touch
          <span className="w-8 h-8 bg-[#0f2b1a]/15 rounded-full flex items-center justify-center">
            <ArrowUpRight size={15} />
          </span>
        </a>
      </div>
    </div>

    {/* Main grid */}
    <div className="container mx-auto px-6 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">

      {/* Brand */}
      <div className="space-y-6">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 bg-agri-green rounded-xl flex items-center justify-center shrink-0">
            <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
            </svg>
          </div>
          <span className="text-lg font-extrabold tracking-tight">SkyFeather</span>
        </div>
        <p className="text-white/40 text-sm leading-relaxed">
          Empowering UK farmers with smarter, more efficient farm management through precision drone technology.
        </p>
        {/* Socials */}
       
      </div>

      {/* Pages */}
      <div>
        <h4 className="text-xs font-bold uppercase tracking-widest text-white/40 mb-5">Pages</h4>
        <ul className="space-y-3">
          {navLinks.map(({ label, href }) => (
            <li key={label}>
              <a href={href} className="text-sm text-white/60 hover:text-agri-green transition">
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Services */}
      <div>
        <h4 className="text-xs font-bold uppercase tracking-widest text-white/40 mb-5">Services</h4>
        <ul className="space-y-3">
          {serviceLinks.map(({ label, href }) => (
            <li key={label}>
              <a href={href} className="text-sm text-white/60 hover:text-agri-green transition">
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Contact */}
      <div>
        <h4 className="text-xs font-bold uppercase tracking-widest text-white/40 mb-5">Contact</h4>
        <ul className="space-y-4">
          <li>
            <a href="mailto:email@example.com" className="flex items-center gap-3 group">
              <span className="w-8 h-8 bg-white/6 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-agri-green/20 transition">
                <Mail size={13} className="text-agri-green" />
              </span>
              <span className="text-sm text-white/60 group-hover:text-agri-green transition">email@example.com</span>
            </a>
          </li>
          <li>
            <a href="tel:5555555555" className="flex items-center gap-3 group">
              <span className="w-8 h-8 bg-white/6 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-agri-green/20 transition">
                <Phone size={13} className="text-agri-green" />
              </span>
              <span className="text-sm text-white/60 group-hover:text-agri-green transition">(555) 555-5555</span>
            </a>
          </li>
        </ul>
      </div>
    </div>

    {/* Bottom bar */}
    <div className="border-t border-white/8">
      <div className="container mx-auto px-6 py-6 flex flex-col sm:flex-row justify-center items-center gap-4 text-xs text-white/25">
        <p>&copy; 2026 SkyFeather Innovations. All rights reserved.</p>
        {/* <div className="flex gap-6">
          <a href="#" className="hover:text-white/60 transition">Privacy Policy</a>
          <a href="#" className="hover:text-white/60 transition">Terms of Service</a>
        </div> */}
      </div>
    </div>

  </footer>
);

export default Footer;
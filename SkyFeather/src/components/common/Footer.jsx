import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram, Youtube, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#1a2e0a] text-white">
      {/* Top: Brand + Contact */}
      <div className="container mx-auto px-6 pt-12 pb-10">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          {/* Left: Logo + Address */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-agri-green rounded-lg flex items-center justify-center">
                <span className="text-white font-bold italic text-lg">S</span>
              </div>
              <div>
                <span className="text-xl font-bold tracking-tight block leading-tight">SkyFeather</span>
                <span className="text-xs text-gray-400 leading-tight">Innovations</span>
              </div>
            </div>
            <div className="flex items-start gap-2 text-gray-400 text-sm max-w-sm">
              <MapPin size={16} className="text-agri-green mt-0.5 shrink-0" />
              <span>Precision Agriculture Solutions,<br />Drone-Powered Farm Technology, India</span>
            </div>
          </div>

          {/* Right: Phone */}
          <div className="text-right">
            <p className="text-gray-400 text-sm">SkyFeather Service</p>
            <a href="tel:+919876543210" className="flex items-center gap-2 text-2xl md:text-3xl font-bold mt-1 hover:text-agri-green transition justify-end">
              <Phone size={22} className="text-agri-green" />
              +91 98765-43210
            </a>
          </div>
        </div>
      </div>

      {/* Middle: Link Columns */}
      <div className="container mx-auto px-6 pb-10">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8">
          {/* Services */}
          <div>
            <h4 className="font-bold text-sm mb-4">Services</h4>
            <ul className="space-y-2.5 text-gray-400 text-sm">
              <li><a href="/services/drone-spraying" className="hover:text-agri-green transition">Drone Spraying</a></li>
              <li><a href="/services/drone-spreading" className="hover:text-agri-green transition">Drone Spreading</a></li>
              <li><a href="/services/multispectral-mapping" className="hover:text-agri-green transition">Multispectral Mapping</a></li>
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="font-bold text-sm mb-4">Solutions</h4>
            <ul className="space-y-2.5 text-gray-400 text-sm">
              <li><a href="/services" className="hover:text-agri-green transition">Precision Agriculture</a></li>
              <li><a href="/services" className="hover:text-agri-green transition">Crop Health Analysis</a></li>
              <li><a href="/services" className="hover:text-agri-green transition">Data Intelligence</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-bold text-sm mb-4">Resources</h4>
            <ul className="space-y-2.5 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-agri-green transition">Knowledge Base</a></li>
              <li><a href="#" className="hover:text-agri-green transition">FAQs</a></li>
              <li><a href="#" className="hover:text-agri-green transition">Case Studies</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-bold text-sm mb-4">Support</h4>
            <ul className="space-y-2.5 text-gray-400 text-sm">
              <li><a href="/contact" className="hover:text-agri-green transition">Contact Us</a></li>
              <li><a href="#" className="hover:text-agri-green transition">Request a Demo</a></li>
              <li><a href="#" className="hover:text-agri-green transition">Feedback</a></li>
            </ul>
          </div>

          {/* About Us */}
          <div>
            <h4 className="font-bold text-sm mb-4">About Us</h4>
            <ul className="space-y-2.5 text-gray-400 text-sm">
              <li><a href="/about" className="hover:text-agri-green transition">About SkyFeather</a></li>
              <li><a href="/about" className="hover:text-agri-green transition">Our Story</a></li>
              <li><a href="/contact" className="hover:text-agri-green transition">Contact</a></li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="font-bold text-sm mb-4">Social Media</h4>
            <ul className="space-y-2.5 text-gray-400 text-sm">
              <li><a href="#" className="flex items-center gap-2 hover:text-agri-green transition"><Facebook size={14} /> Facebook</a></li>
              <li><a href="#" className="flex items-center gap-2 hover:text-agri-green transition"><Twitter size={14} /> X</a></li>
              <li><a href="#" className="flex items-center gap-2 hover:text-agri-green transition"><Youtube size={14} /> Youtube</a></li>
              <li><a href="#" className="flex items-center gap-2 hover:text-agri-green transition"><Instagram size={14} /> Instagram</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>&copy; 2026 SkyFeather Innovations. All Rights Reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition">Privacy Policy</a>
            <a href="#" className="hover:text-white transition">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
import React from 'react';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import ContactForm from '../components/contact/ContactForm';
import SEO from '../components/common/SEO';
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';
import DroneSpraying1 from '../assest/images/Drone-Spraying1.jpg';
const Contact = () => (
  <div className="w-full" id="main-content">
    <SEO
      title="Contact Us"
      description="Get in touch with SkyFeather Innovations for precision agriculture drone services. Request a quote for mapping, spraying, or spreading across the UK."
      path="/contact"
    />
    <Navbar />

    {/* Hero split section */}
    <section className="relative min-h-screen flex items-stretch pt-20">

      {/* Left — dark bg with image overlay */}
      <div className="relative hidden lg:flex lg:w-1/2 flex-col justify-between p-14 overflow-hidden">
        {/* Background image */}
        <img
          src={DroneSpraying1}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover"
          width={900}
          height={1200}
          loading="lazy"
          decoding="async"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-[#0f2b1a]/80" />

        {/* Content */}
        <div className="relative z-10">
          <h1 className="text-4xl xl:text-5xl font-extrabold text-white leading-[1.15] mt-16">
            You Have Questions,<br />We Have Answers
          </h1>
          <p className="mt-5 text-white/50 text-sm leading-relaxed max-w-sm">
            Discover how SkyFeather drone technology can transform your farm operations — thoughtfully designed for UK farmers.
          </p>
        </div>

        <div className="relative z-10 space-y-8">
          {/* Location */}
          <div>
            <p className="text-white/50 text-xs uppercase tracking-widest font-semibold mb-2">Location</p>
            <div className="flex items-start gap-2">
              <MapPin size={14} className="text-agri-green mt-0.5 shrink-0" />
              <p className="text-white/70 text-sm leading-relaxed">
                SkyFeather Innovations<br />
                United Kingdom
              </p>
            </div>
          </div>

          {/* Email + Phone */}
          <div className="grid grid-cols-2 gap-6">
            <div>
              <p className="text-white/50 text-xs uppercase tracking-widest font-semibold mb-2">Email</p>
              <a href="mailto:email@example.com" className="text-white/70 hover:text-agri-green transition text-sm">email@example.com</a>
            </div>
            <div>
              <p className="text-white/50 text-xs uppercase tracking-widest font-semibold mb-2">Contact</p>
              <a href="tel:5555555555" className="text-white/70 hover:text-agri-green transition text-sm">(555) 555-5555</a>
            </div>
          </div>
        </div>
      </div>

      {/* Right — form */}
      <div className="w-full lg:w-1/2 bg-[#f7f8f6] flex items-center justify-center p-8 md:p-14">
        <div className="w-full max-w-lg">
          <ContactForm />
        </div>
      </div>
    </section>

    <Footer />
  </div>
);

export default Contact;
import React from 'react';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import ContactForm from '../components/contact/ContactForm';
import { Phone, Mail, Clock, MapPin } from 'lucide-react';

const Contact = () => (
  <div className="w-full bg-gray-50">
    <Navbar />
    {/* Page Header */}
    <section className="pt-32 pb-20 bg-agri-dark text-white text-center px-6">
      <h1 className="text-4xl md:text-6xl font-bold">Contact Our Precision <br /> Farming Experts</h1>
      <p className="mt-6 opacity-70 max-w-2xl mx-auto">Revolutionizing agriculture through advanced drone technology. Get a free consultation today.</p>
    </section>

    <section className="py-20">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-start">
        {/* Left: Contact Info */}
        <div className="space-y-12">
          <div>
            <span className="text-agri-green font-bold uppercase tracking-widest text-sm">Get In Touch</span>
            <h2 className="text-4xl font-bold text-agri-dark mt-4 leading-tight">Let's grow your productivity together.</h2>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-8">
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center shrink-0"><Phone className="text-agri-green w-5 h-5"/></div>
              <div><h4 className="font-bold">Phone</h4><p className="text-sm text-gray-500">+91 98765-43210</p></div>
            </div>
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center shrink-0"><Mail className="text-agri-green w-5 h-5"/></div>
              <div><h4 className="font-bold">Email</h4><p className="text-sm text-gray-500">hello@skyfeather.in</p></div>
            </div>
          </div>

          <div className="p-8 bg-white rounded-3xl border border-gray-100 shadow-sm flex items-center justify-between">
            <div className="flex gap-4 items-center">
              <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center">💬</div>
              <div><h4 className="font-bold">Chat on WhatsApp</h4><p className="text-xs text-gray-400">Response time: 5 mins</p></div>
            </div>
            <button className="bg-agri-green text-white px-6 py-2 rounded-lg font-bold text-sm">Message Now</button>
          </div>
        </div>

        {/* Right: Form */}
        <ContactForm />
      </div>
    </section>
    <Footer />
  </div>
);

export default Contact;
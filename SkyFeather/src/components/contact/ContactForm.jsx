import React from 'react';

const ContactForm = () => (
  <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-gray-100">
    <form className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-bold text-agri-dark mb-2">Full Name</label>
          <input type="text" placeholder="John Doe" className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-agri-green transition" />
        </div>
        <div>
          <label className="block text-sm font-bold text-agri-dark mb-2">Phone Number</label>
          <input type="text" placeholder="+91 00000-00000" className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-agri-green transition" />
        </div>
      </div>
      <div>
        <label className="block text-sm font-bold text-agri-dark mb-2">Location / Farm Address</label>
        <input type="text" placeholder="City, State" className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-agri-green transition" />
      </div>
      <div>
        <label className="block text-sm font-bold text-agri-dark mb-2">Service Required</label>
        <select className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-agri-green transition">
          <option>Select a service</option>
          <option>Drone Spraying</option>
          <option>Drone Spreading</option>
          <option>Multispectral Mapping</option>
        </select>
      </div>
      <div>
        <label className="block text-sm font-bold text-agri-dark mb-2">Your Message</label>
        <textarea rows="4" placeholder="Tell us about your farm needs..." className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-agri-green transition"></textarea>
      </div>
      <button className="w-full bg-agri-green text-white py-4 rounded-xl font-bold text-lg hover:bg-green-700 transition shadow-lg shadow-green-100 flex items-center justify-center gap-2">
        Request Free Quote <span>➤</span>
      </button>
    </form>
  </div>
);

export default ContactForm;
import React, { useState } from 'react';

const inputClass = 'w-full px-4 py-3 bg-white border border-gray-200 rounded-2xl text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-agri-green transition';

const ContactForm = () => {
  const [updates, setUpdates] = useState(false);

  return (
    <div>
      <h2 className="text-2xl font-extrabold text-agri-dark mb-1">Tell Us What You Need</h2>
      <p className="text-gray-400 text-sm mb-8">Our team is ready to assist you with every detail, big or small.</p>

      <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
        {/* Row 1 */}
        <div className="grid grid-cols-2 gap-4">
          <input type="text" placeholder="First Name" className={inputClass} />
          <input type="text" placeholder="Last Name" className={inputClass} />
        </div>

        {/* Row 2 */}
        <div className="grid grid-cols-2 gap-4">
          <input type="text" placeholder="Country" className={inputClass} />
          <input type="tel" placeholder="Phone Number" className={inputClass} />
        </div>

        {/* Email */}
        <input type="email" placeholder="Email Address" className={inputClass} />

        {/* Message */}
        <textarea
          rows="4"
          placeholder="Message"
          className={inputClass}
        />

       

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-[#0f2b1a] text-white font-bold py-3.5 rounded-2xl hover:brightness-125 transition text-sm tracking-wide"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
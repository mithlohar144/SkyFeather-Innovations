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
          <div>
            <label htmlFor="firstName" className="sr-only">First Name</label>
            <input id="firstName" type="text" placeholder="First Name" className={inputClass} />
          </div>
          <div>
            <label htmlFor="lastName" className="sr-only">Last Name</label>
            <input id="lastName" type="text" placeholder="Last Name" className={inputClass} />
          </div>
        </div>

        {/* Row 2 */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="country" className="sr-only">Country</label>
            <input id="country" type="text" placeholder="Country" className={inputClass} />
          </div>
          <div>
            <label htmlFor="phone" className="sr-only">Phone Number</label>
            <input id="phone" type="tel" placeholder="Phone Number" className={inputClass} />
          </div>
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="sr-only">Email Address</label>
          <input id="email" type="email" placeholder="Email Address" className={inputClass} />
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="sr-only">Message</label>
          <textarea
            id="message"
            rows="4"
            placeholder="Message"
            className={inputClass}
          />
        </div>

       

        {/* Submit */}
        <button
          type="submit"
          className="btn-interactive w-full bg-[#0f2b1a] text-white font-bold py-3.5 rounded-2xl hover:bg-violet-600 hover:shadow-lg hover:shadow-violet-500/25 hover:scale-[1.01] active:scale-[0.99] transition-all duration-300 text-sm tracking-wide"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
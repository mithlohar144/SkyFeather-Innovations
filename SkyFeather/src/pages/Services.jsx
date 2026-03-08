// src/pages/Services.jsx
import React from 'react';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import ServicesHero from '../components/services/ServicesHero';
import CoreSolutions from '../components/services/CoreSolutions';
import WhyPrecision from '../components/services/WhyPrecision';

const Services = () => (
  <div className="w-full">
    <Navbar />
    <div className="pt-20">
      <ServicesHero />
      <CoreSolutions />
      <WhyPrecision />
      {/* Ready to Optimize CTA Section (Template 8 bottom) */}
      <section className="bg-agri-green py-16 text-center text-white mx-6 rounded-3xl mb-20">
        <h2 className="text-3xl font-bold">Ready to optimize your farm?</h2>
        <p className="mt-4 opacity-90">Join hundreds of forward-thinking farmers who are scaling their operations.</p>
        <div className="flex justify-center gap-4 mt-8">
          <button className="bg-white text-agri-green px-8 py-3 rounded-lg font-bold">Contact Us</button>
          <button className="border border-white text-white px-8 py-3 rounded-lg font-bold">View Pricing</button>
        </div>
      </section>
    </div>
    <Footer />
  </div>
);

export default Services;
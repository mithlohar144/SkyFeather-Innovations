import React from 'react';
import { motion } from 'framer-motion';

const SpreadingHero = () => (
  <section className="py-20 bg-white">
    <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center gap-12">
      <div className="lg:w-1/2">
        <span className="bg-green-100 text-agri-green px-4 py-1 rounded-full text-xs font-bold uppercase">Professional Spreading Services</span>
        <h1 className="text-5xl font-bold text-agri-dark mt-6 leading-tight">
          Precision Spreading. <br />
          <span className="text-agri-green">Maximum Growth.</span>
        </h1>
        <p className="text-gray-600 mt-6 text-lg leading-relaxed">
          High-efficiency drone solutions for seeds, fertilizers, and granular applications with zero soil compaction. Boost your yields with surgical accuracy.
        </p>
        <div className="flex gap-4 mt-10">
          <button className="bg-agri-green text-white px-8 py-3 rounded-lg font-bold shadow-lg">Book a Demo</button>
        </div>
      </div>
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="lg:w-1/2"
      >
        <img 
          src="https://images.unsplash.com/photo-1589923188900-85dae523342b?q=70&w=900&auto=format&fit=crop&fm=webp" 
          alt="Drone Spreading" 
          className="rounded-3xl shadow-2xl"
          loading="lazy"
          decoding="async"
        />
      </motion.div>
    </div>
  </section>
);

export default SpreadingHero;
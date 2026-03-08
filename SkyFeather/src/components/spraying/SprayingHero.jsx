import React from 'react';
import { motion } from 'framer-motion';

const SprayingHero = () => (
  <section className="py-20 bg-white">
    <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center gap-12">
      <div className="lg:w-1/2">
        <h1 className="text-5xl font-bold text-agri-dark leading-tight">
          Precision Spraying. <br />
          <span className="text-agri-green">Maximized Yields.</span>
        </h1>
        <p className="text-gray-600 mt-6 text-lg leading-relaxed">
          Our automated drone spraying technology delivers precise pesticide and nutrient application with zero soil compaction.
        </p>
        <div className="flex gap-4 mt-8">
          <button className="bg-agri-green text-white px-8 py-3 rounded-lg font-bold">Get a Quote</button>
          <button className="border border-agri-green text-agri-green px-8 py-3 rounded-lg font-bold">Watch Demo</button>
        </div>
      </div>
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="lg:w-1/2 relative"
      >
        <img 
          src="https://images.unsplash.com/photo-1592982537447-7440770cbfc9?q=70&w=900&auto=format&fit=crop&fm=webp" 
          alt="Drone Spraying" 
          className="rounded-3xl shadow-2xl"
          loading="lazy"
          decoding="async"
        />
        <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-gray-100">
          <p className="text-agri-green font-bold text-2xl">100%</p>
          <p className="text-gray-500 text-xs uppercase font-bold tracking-widest">Application Accuracy</p>
        </div>
      </motion.div>
    </div>
  </section>
);

export default SprayingHero;
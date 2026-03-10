import React from 'react';
import { motion } from 'framer-motion';
import spreadingHeroImage from '../../assest/images/DroneSpreading.webp';

const SpreadingHero = () => (
  <section className="py-20 bg-white">
    <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center gap-12">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="lg:w-1/2"
      >
        <span className="bg-green-100 text-agri-green px-4 py-1 rounded-full text-xs font-bold uppercase">Professional Spreading Services</span>
        <h1 className="text-5xl font-bold text-agri-dark mt-6 leading-tight">
          <span className="text-agri-green">Drone Spreading</span>
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-agri-dark mt-4">
          Providing Everything You Need
        </h2>
        <p className="text-gray-600 mt-6 text-lg leading-relaxed">
          Aerial spreading for seeds, fertilisers, and specialist pelleted products with accurate coverage and zero heavy machinery compaction.
        </p>
      </motion.div>
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="lg:w-1/2"
      >
        <img 
          src={spreadingHeroImage}
          alt="Drone spreading services over agricultural fields" 
          className="rounded-3xl shadow-2xl hover:scale-[1.02] transition-transform duration-500"
          width={600}
          height={400}
          loading="lazy"
          decoding="async"
        />
      </motion.div>
    </div>
  </section>
);

export default SpreadingHero;
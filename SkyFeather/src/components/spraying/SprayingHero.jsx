import React from 'react';
import { motion } from 'framer-motion';
import sprayingHeroImage from '../../assest/images/Drone-Spraying.jpg';

const SprayingHero = () => (
  <section className="py-20 bg-white">
    <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center gap-12">
      <div className="lg:w-1/2">
        <span className="bg-green-100 text-agri-green px-4 py-1 rounded-full text-xs font-bold uppercase">Drone Application</span>
        <h1 className="text-5xl font-bold text-agri-dark leading-tight">
          <span className="text-agri-green">Drone Spraying Services</span>
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-agri-dark mt-4">
          Providing Everything You Need
        </h2>
        <p className="text-gray-600 mt-6 text-lg leading-relaxed">
          Practical aerial application for crops and structures, from biostimulants and natural pest control to liquid fertiliser and specialist treatment products.
        </p>
        <div className="flex gap-4 mt-10">
          <a href="/contact" className="bg-agri-green text-white px-8 py-3 rounded-lg font-bold shadow-lg hover:bg-green-700 transition-all">Get Started</a>
        </div>
      </div>
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="lg:w-1/2 relative"
      >
        <img 
          src={sprayingHeroImage}
          alt="Drone spraying services in crop field" 
          className="rounded-3xl shadow-2xl"
          loading="lazy"
          decoding="async"
        />
        <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-gray-100">
          <p className="text-agri-green font-bold text-2xl">Targeted</p>
          <p className="text-gray-500 text-xs uppercase font-bold tracking-widest">Low Compaction Coverage</p>
        </div>
      </motion.div>
    </div>
  </section>
);

export default SprayingHero;
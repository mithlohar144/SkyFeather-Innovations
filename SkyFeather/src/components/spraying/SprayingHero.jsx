import React from 'react';
import { motion } from 'framer-motion';
import sprayingHeroImage from '../../assest/images/Drone-Spraying.jpg';

const SprayingHero = () => (
  <section className="py-20 bg-white">
    <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center gap-12">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="lg:w-1/2"
      >
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
          <a href="/contact" className="btn-interactive bg-agri-green text-white px-8 py-3 rounded-lg font-bold shadow-lg hover:bg-indigo-600 hover:shadow-indigo-500/30 hover:scale-[1.03] active:scale-[0.98] transition-all duration-300">Get Started</a>
        </div>
      </motion.div>
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="lg:w-1/2 relative"
      >
        <img 
          src={sprayingHeroImage}
          alt="Drone spraying services in crop field" 
          className="rounded-3xl shadow-2xl hover:scale-[1.02] transition-transform duration-500"
          loading="lazy"
          decoding="async"
        />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-gray-100 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
        >
          <p className="text-agri-green font-bold text-2xl">Targeted</p>
          <p className="text-gray-500 text-xs uppercase font-bold tracking-widest">Low Compaction Coverage</p>
        </motion.div>
      </motion.div>
    </div>
  </section>
);

export default SprayingHero;
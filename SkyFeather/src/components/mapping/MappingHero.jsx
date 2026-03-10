import React from 'react';
import { motion } from 'framer-motion';
import vegi from '../../assest/images/vegi.png';

const MappingHero = () => (
  <section className="relative py-16 md:py-24 bg-gradient-to-br from-white via-green-50/30 to-white overflow-hidden">
    {/* Subtle background decoration */}
    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-agri-green/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />

    <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="lg:w-1/2 z-10"
      >
        <span className="inline-block bg-green-100 text-agri-green px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
          Precision Agriculture
        </span>
        <h1 className="text-4xl md:text-5xl font-bold text-agri-dark mt-6 leading-tight">
          <span className="text-agri-green">Multispectral Mapping</span>
        </h1>
        <h2 className="text-xl md:text-2xl font-semibold text-agri-dark/80 mt-3">
          Providing Everything You Need
        </h2>
        <p className="text-gray-500 mt-5 text-base md:text-lg leading-relaxed max-w-lg">
          Capture high-confidence field intelligence with vegetation indices, weed treatment mapping, and digital surface models that support faster, more precise decisions.
        </p>
        <div className="flex gap-4 mt-8">
          <a
            href="/contact"
            className="bg-agri-green text-white px-8 py-3.5 rounded-xl font-bold shadow-lg shadow-green-500/20 hover:shadow-green-500/40 hover:scale-[1.02] transition-all duration-300"
          >
            Get Started
          </a>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.15 }}
        className="lg:w-1/2 relative"
      >
        <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-black/10 ring-1 ring-black/5">
          <img
            src={vegi}
            alt="Multispectral vegetation index map"
            className="w-full h-auto object-cover"
            loading="lazy"
            decoding="async"
          />
          {/* Gradient overlay for legend readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
        </div>

        {/* Legend Card */}
        <div className="absolute bottom-4 right-4 md:bottom-6 md:right-6 bg-white/95 backdrop-blur-md px-5 py-3.5 rounded-xl shadow-xl z-20 border border-gray-100">
          <div className="flex items-center gap-2.5 mb-1.5">
            <div className="w-3 h-3 bg-red-500 rounded-full ring-2 ring-red-200" />
            <span className="text-xs font-semibold text-gray-700">Low Health</span>
          </div>
          <div className="flex items-center gap-2.5">
            <div className="w-3 h-3 bg-green-500 rounded-full ring-2 ring-green-200" />
            <span className="text-xs font-semibold text-gray-700">High Health</span>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default MappingHero;
import React from 'react';
import { motion } from 'framer-motion';
import mapping from '../../assest/images/mapping.avif';

const MappingHero = () => (
  <section className="relative py-20 bg-white overflow-hidden">
    <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center gap-12">
      <div className="lg:w-1/2 z-10">
        <span className="bg-green-100 text-agri-green px-4 py-1 rounded-full text-xs font-bold uppercase">Precision Agriculture</span>
        <h1 className="text-5xl font-bold text-agri-dark mt-6 leading-tight">
          <span className="text-agri-green">Multispectral Mapping</span>
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-agri-dark mt-4">
          Providing Everything You Need
        </h2>
        <p className="text-gray-600 mt-6 text-lg leading-relaxed">
          Capture high-confidence field intelligence with vegetation indices, weed treatment mapping, and digital surface models that support faster, more precise decisions.
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
          src={mapping}
          alt="Multispectral mapping drone survey" 
          className="rounded-3xl shadow-2xl z-10 relative"
          loading="lazy"
          decoding="async"
        />
        {/* Template Style Legend Card */}
        <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur p-4 rounded-xl shadow-xl z-20 border border-white/50">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <span className="text-[10px] font-bold">Low Health</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <span className="text-[10px] font-bold">High Health</span>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default MappingHero;
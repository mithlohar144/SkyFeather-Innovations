import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import mappingBg from '../../assest/images/mapping3.avif';

const MappingHero = () => (
  <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-agri-dark">
    {/* Background image with overlay */}
    {/* <div className="absolute inset-0">
      <img
        src={mappingBg}
        alt=""
        className="w-full h-full object-cover opacity-30"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-agri-dark via-agri-dark/80 to-agri-dark/50" />
      <div className="absolute inset-0 bg-gradient-to-r from-agri-dark/70 to-transparent" />
    </div> */}

    {/* Green glow accents */}
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-agri-green/8 rounded-full blur-[120px]" />
    </div>

    <div className="container mx-auto px-6 relative z-10 text-center max-w-3xl py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <span className="inline-block bg-agri-green/15 text-agri-green px-5 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest border border-agri-green/20">
          Precision Agriculture
        </span>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-4xl md:text-6xl lg:text-7xl font-light mt-8 leading-tight text-white"
      >
        Multispectral{' '}
        <span className="text-agri-green">Mapping</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.15 }}
        className="text-white/80 mt-4 font-light text-lg md:text-xl "
      >
        Providing Everything You Need to Maximise Yields
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-gray-400 mt-5 text-sm md:text-base font-extralight leading-relaxed max-w-2xl mx-auto"
      >
        Capture high-confidence field intelligence with vegetation indices, weed
        treatment mapping, and digital surface models that support faster, more
        precise decisions.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="flex flex-wrap justify-center gap-4 mt-10"
      >
        <a
          href="/contact"
          className="btn-interactive inline-flex items-center gap-2 bg-agri-green text-white px-8 py-3.5 rounded-xl font-bold shadow-lg shadow-green-500/20 hover:bg-amber-400 hover:text-gray-900 hover:shadow-amber-400/30 hover:scale-[1.03] active:scale-[0.98] transition-all duration-300"
        >
          Get Started
          <ArrowRight size={18} />
        </a>
       
      </motion.div>
    </div>
  </section>
);

export default MappingHero;

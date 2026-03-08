import { motion } from 'framer-motion';

const ServicesHero = () => (
  <section className="relative py-24 bg-agri-dark text-white text-center overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-b from-agri-dark to-agri-dark/95" />
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-agri-green/5 rounded-full blur-3xl" />

    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="relative z-10 container mx-auto px-6"
    >
      <span className="inline-block bg-agri-green/20 text-agri-green px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
        What We Offer
      </span>
      <h1 className="text-4xl md:text-6xl font-bold leading-tight max-w-3xl mx-auto">
        Comprehensive Drone <span className="text-agri-green">Solutions</span> for Modern Farms
      </h1>
      <p className="mt-6 text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
        From precision spraying to multispectral mapping, our full suite of autonomous drone services is designed to optimise every acre of your land.
      </p>
    </motion.div>
  </section>
);

export default ServicesHero;

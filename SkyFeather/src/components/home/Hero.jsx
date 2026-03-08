import { motion } from 'framer-motion';
import { ArrowDown, ArrowRight } from 'lucide-react';

const Hero = () => (
  <section className="relative min-h-screen overflow-hidden">
    {/* Full-screen background image */}
    <div className="absolute inset-0">
      <img
        src="https://images.unsplash.com/photo-1586771107445-d3ca888129ff?q=80&w=1920"
        alt="Drone spraying over green farmland"
        className="w-full h-full object-cover"
      />
      {/* Dark gradient overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
    </div>

    {/* Content */}
    <div className="relative z-10 container mx-auto px-6 min-h-screen flex flex-col justify-end pb-24 pt-32">
      {/* Floating drone image */}
      <motion.img
        src="https://png.pngtree.com/png-clipart/20231019/original/pngtree-agriculture-drone-spraying-pesticide-on-wheat-field-drone-fly-farm-png-image_13369407.png"
        alt="Agriculture drone"
        initial={{ opacity: 0, y: -30, x: 20 }}
        animate={{ opacity: 1, y: 0, x: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
        className="absolute top-1/2 right-8 -translate-y-1/2 w-[320px] md:w-[480px] lg:w-[580px] drop-shadow-[0_20px_40px_rgba(0,0,0,0.4)] pointer-events-none hidden md:block select-none"
      />

      <div className="flex flex-col lg:flex-row items-end justify-between w-full gap-10">
        {/* Left: Headline */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <h1 className="text-5xl md:text-7xl font-black text-white leading-[1.05] italic tracking-tight">
            Professional Drone<br />
            Solution Provider
          </h1>
          <p className="text-white/80 mt-5 text-lg leading-relaxed max-w-md">
            Empowering precision agriculture through advanced drone technology — saving time, cutting costs, and delivering healthier yields.
          </p>
          {/* Accent bar */}
          <div className="w-12 h-1 bg-agri-green rounded-full mt-6" />
        </motion.div>

        {/* Right: Featured service card */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="hidden md:flex bg-white/95 backdrop-blur rounded-2xl shadow-2xl overflow-hidden max-w-sm"
        >
          <div className="p-6 flex flex-col justify-center">
            <p className="text-xs text-gray-400 uppercase tracking-wider font-semibold">Our Services</p>
            <p className="text-xl font-bold text-agri-dark mt-1">Spraying &middot; Mapping &middot; Spreading</p>
            <a
              href="/services"
              className="inline-flex items-center gap-2 mt-4 bg-agri-green text-white px-5 py-2.5 rounded-lg text-sm font-bold hover:bg-green-700 transition w-fit"
            >
              Learn More <ArrowRight size={14} />
            </a>
          </div>
          <img
            src="https://images.unsplash.com/photo-1592982537447-7440770cbfc9?q=80&w=300"
            alt="Agriculture drone"
            className="w-36 h-auto object-cover"
          />
        </motion.div>
      </div>
    </div>

    {/* Scroll indicator */}
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.2 }}
      className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20"
    >
      <a
        href="#services"
        className="w-12 h-12 rounded-full bg-agri-dark/80 border-2 border-white/30 flex items-center justify-center hover:bg-agri-green transition-all"
      >
        <ArrowDown size={20} className="text-white animate-bounce" />
      </a>
    </motion.div>
  </section>
);

export default Hero;

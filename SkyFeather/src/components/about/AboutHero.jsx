import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

const AboutHero = () => (
  <section className="relative py-28 md:py-36 bg-agri-dark text-white overflow-hidden">
    {/* Layered background */}
    <div className="absolute inset-0 bg-gradient-to-br from-agri-dark via-agri-dark/95 to-agri-dark" />
    <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] bg-agri-green/5 rounded-full blur-3xl" />
    <div className="absolute bottom-[-100px] right-[-100px] w-[500px] h-[500px] bg-agri-green/3 rounded-full blur-3xl" />

    <div className="relative z-10 container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
      {/* Left Text */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
      >
        <span className="inline-block bg-agri-green/20 text-agri-green px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
          About SkyFeather
        </span>
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Where Agriculture{' '}
          <span className="text-agri-green">Meets Technology</span>
        </h1>
        <p className="mt-6 text-gray-400 text-lg leading-relaxed max-w-lg">
          Welcome to SkyFeather Innovations. We are revolutionising farm operations with drone-powered solutions — making precision farming accessible for all farmers, helping you save time, cut costs, and achieve healthier yields.
        </p>
        <div className="mt-8 flex items-center gap-3 text-agri-green">
          <ArrowDown size={18} className="animate-bounce" />
          <span className="text-sm font-semibold uppercase tracking-wider">Scroll to learn more</span>
        </div>
      </motion.div>

      {/* Right Stats Grid */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="grid grid-cols-2 gap-4"
      >
        {[
          { value: '2019', label: 'Year Founded', accent: false },
          { value: '500+', label: 'Farms Served', accent: true },
          { value: '50K+', label: 'Acres Covered', accent: true },
          { value: '25+', label: 'Team Members', accent: false },
        ].map((stat, i) => (
          <div
            key={i}
            className={`p-8 rounded-2xl text-center ${
              stat.accent
                ? 'bg-agri-green text-white'
                : 'bg-white/5 border border-white/10'
            }`}
          >
            <p className={`text-3xl md:text-4xl font-bold ${stat.accent ? 'text-white' : 'text-agri-green'}`}>
              {stat.value}
            </p>
            <p className={`text-xs mt-2 uppercase tracking-wider font-semibold ${stat.accent ? 'text-white/80' : 'text-gray-400'}`}>
              {stat.label}
            </p>
          </div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default AboutHero;

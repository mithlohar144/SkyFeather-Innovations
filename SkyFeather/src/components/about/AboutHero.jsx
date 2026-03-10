import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import PrecisionAgriculture from '../../assest/images/precision.jpg'
const AboutHero = () => (
  <section className="relative overflow-hidden bg-[#0f2b1a] text-white">
    {/* Background glow */}
    <div className="absolute top-0 left-0 w-175 h-175 bg-agri-green/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/3 pointer-events-none" />
    <div className="absolute bottom-0 right-0 w-100 h-100 bg-agri-green/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3 pointer-events-none" />

    <div className="relative z-10 container mx-auto px-6 py-28 md:py-36 grid lg:grid-cols-2 gap-16 items-center">

      {/* Left — copy */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <span className="inline-flex items-center gap-2 bg-white/10 text-agri-green border border-agri-green/20 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-agri-green inline-block" />
          Who we are
        </span>
        <h1 className="text-4xl md:text-5xl lg:text-[3.25rem] font-extrabold leading-[1.15]">
          Empowering{' '}
          <span className="text-agri-green">UK Farmers</span>{' '}
          with Smarter Farm Management
        </h1>
        <p className="mt-7 text-white/55 text-[1.05rem] leading-relaxed">
          Our drones deliver precise crop monitoring, field mapping, and targeted spraying and spreading — giving you actionable insights that save time, reduce waste, and boost yields.
        </p>
        <p className="mt-4 text-white/55 text-[1.05rem] leading-relaxed">
          We combine technology with practical farming expertise to help you make confident decisions and get the most from every acre.
        </p>
        <div className="mt-10">
          <a
            href="/contact"
            className="btn-interactive inline-flex items-center gap-3 bg-agri-green text-[#0f2b1a] font-bold px-7 py-3.5 rounded-full hover:bg-amber-400 hover:text-gray-900 hover:scale-[1.03] hover:shadow-lg hover:shadow-amber-400/30 active:scale-[0.98] transition-all duration-300"
          >
            Work With Us
            <span className="w-8 h-8 bg-[#0f2b1a]/15 rounded-full flex items-center justify-center">
              <ArrowUpRight size={16} aria-hidden="true" />
            </span>
          </a>
        </div>
      </motion.div>

      {/* Right — image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative"
      >
        <div className="relative rounded-3xl overflow-hidden h-105 lg:h-120 group">
          <img
            src={PrecisionAgriculture}
            alt="SkyFeather drone farming UK"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            width={600}
            height={480}
            loading="lazy"
            decoding="async"
          />
          <div className="absolute inset-0 bg-linear-to-t from-[#0f2b1a]/70 via-transparent to-transparent" />
        </div>


        {/* Floating tag top-right */}
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="absolute top-6 right-6 bg-agri-green text-[#0f2b1a] font-bold text-xs uppercase tracking-wider px-4 py-2 rounded-full"
        >
          Precision Agriculture
        </motion.div>
      </motion.div>
    </div>
  </section>
);

export default AboutHero;

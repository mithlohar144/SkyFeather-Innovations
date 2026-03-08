import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import droneImage from '../../assest/images/drone.png'
const PlatformSection = () => (
  <section className="py-28 bg-gray-50">
    <div className="container mx-auto px-6">
      {/* Heading */}
      <div className="text-center mb-20">
        <h2 className="text-4xl md:text-5xl font-bold text-agri-dark leading-tight">
          One Platform to Make{' '}
          <span className="bg-agri-green text-white px-4 py-1 rounded-full italic inline-block">
            Agriculture
          </span>{' '}
          Resilient
        </h2>
      </div>

      {/* Content: Image + Text */}
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* Left: Image */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="bg-blue-100/40 rounded-3xl p-4 md:p-6">
            <img
              src={droneImage}
              alt="Agriculture drone flying over green fields"
              className="rounded-2xl w-full object-cover aspect-[4/3] shadow-lg"
            />
          </div>
        </motion.div>

        {/* Right: Text */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="space-y-6"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-agri-dark leading-snug">
            Precision Farming That Drives Real Results
          </h3>
          <p className="text-gray-500 leading-relaxed text-lg">
            Our planet's population is growing rapidly — and so is the need for smarter agriculture. SkyFeather's drone-powered platform helps farmers monitor crop health, optimise input usage, and boost yields while reducing environmental impact.
          </p>
          <div className="flex items-center gap-4 pt-2">
            <a
              href="/services"
              className="bg-agri-dark text-white px-7 py-3.5 rounded-xl font-bold text-sm hover:bg-agri-green transition-all inline-flex items-center gap-2"
            >
              Explore Platform
            </a>
            <a
              href="/contact"
              className="w-11 h-11 rounded-full border-2 border-agri-green flex items-center justify-center text-agri-green hover:bg-agri-green hover:text-white transition-all"
            >
              <ArrowRight size={18} />
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default PlatformSection;

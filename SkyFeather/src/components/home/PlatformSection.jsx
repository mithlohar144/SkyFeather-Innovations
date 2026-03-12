import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import droneImage from '../../assest/images/drone.png'
import spreying2 from '../../assest/images/spreying2.avif'
const PlatformSection = () => (
  <section className="py-28 bg-gray-50">
    <div className="container mx-auto px-6">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        className="text-center mb-20"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-agri-dark leading-tight">
          One Platform to Make{' '}
          <span className="bg-agri-green text-white px-4 py-1 rounded-full italic inline-block">
            Agriculture
          </span>{' '}
          Resilient
        </h2>
      </motion.div>

      {/* Content: Image + Text */}
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* Left: Image */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.4 }}
        >
          <div className="bg-blue-100/40 rounded-3xl p-4 md:p-6">
            <img
              src={spreying2}
              alt="Agriculture drone flying over green fields"
              className="rounded-2xl w-full object-cover aspect-4/3 shadow-lg"
              width={600}
              height={450}
              loading="lazy"
              decoding="async"
            />
          </div>
        </motion.div>

        {/* Right: Text */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.4, delay: 0.1 }}
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
              href="/contact"
              className="btn-interactive bg-agri-dark text-white px-7 py-3.5 rounded-xl font-bold text-sm hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-500/25 hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 inline-flex items-center gap-2"
            >
              Contact Us
              <a
              href="/contact"
              aria-label="Contact us"
              className="btn-interactive w-8 h-8 rounded-full border-2  flex items-center justify-center   hover:text-white hover:scale-110 hover:shadow-lg hover:shadow-blue-500/25 active:scale-95 transition-all duration-300"
            >
              <ArrowRight size={18} aria-hidden="true" />
            </a>
            </a>
            
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default PlatformSection;

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import innovattionImage from '../../assest/images/drone_farmer.png'
import DroneSpraying1  from '../../assest/images/Drone-Spraying1.jpg'
const features = [
  {
    title: 'Precision Farming Tools',
    desc: "Our drone technology delivers targeted spraying and spreading with pinpoint accuracy, reducing waste and maximising every acre's potential.",
    highlight: false,
  },
  {
    title: 'Smart Irrigation System',
    desc: "Multispectral mapping identifies moisture-stressed zones so you apply water only where it's needed — cutting usage by up to 90%.",
    highlight: true,
  },
  {
    title: 'AI Crop Analytics',
    desc: 'Real-time NDVI analysis and AI-driven insights detect pests, disease, and nutrient deficiencies weeks before they become visible.',
    highlight: false,
  },
];

const InnovativeSolutions = () => (
  <section className="py-24 bg-white">
    <div className="container mx-auto px-6">

      {/* Top Row: Heading left, description right */}
      <div className="flex flex-col lg:flex-row justify-between items-start gap-8 mb-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-lg"
        >
          <h2 className="text-4xl md:text-5xl font-extralight text-agri-dark leading-tight">
            Innovative Solutions for Modern Farming
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-gray-500 text-base font-semibold leading-relaxed max-w-xs lg:text-right"
        >
          Our planet's population is growing rapidly and so is the need for more food. SkyFeather is here to make farming smarter, more efficient, and sustainable.
        </motion.p>
      </div>

      {/* More Service Button */}
      <motion.div
        initial={{ opacity: 0, x: -10 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="mb-6"
      >
        <a
          href="/services"
          className="inline-flex items-center gap-3 bg-agri-dark text-white px-6 py-3 rounded-full font-semibold text-sm hover:bg-agri-green transition-all"
        >
          More Service
          <span className="w-7 h-7 rounded-full border border-white/30 flex items-center justify-center">
            <ArrowRight size={13} />
          </span>
        </a>
      </motion.div>

      {/* Banner Image */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="rounded-3xl overflow-hidden shadow-xl mb-14"
      >
        <img
          src={innovattionImage}
          alt="Drones flying over a lush green farmland at golden hour"
          className="w-full h-[420px] object-cover object-center"
          loading="lazy"
          decoding="async"
        />
      </motion.div>

      {/* Three Feature Columns */}
      <div className="grid md:grid-cols-3 gap-0 divide-y md:divide-y-0 md:divide-x divide-gray-100">
        {features.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.12 }}
            className={`px-8 py-6 relative ${idx === 0 ? 'md:pl-0' : ''} ${idx === features.length - 1 ? 'md:pr-0' : ''}`}
          >
            {/* Green accent top border for highlighted item */}
            {item.highlight && (
              <div className="absolute top-0 left-8 right-8 h-0.5 bg-agri-green rounded-full" />
            )}
            <h4 className={`text-base font-bold mb-3 ${item.highlight ? 'text-agri-green' : 'text-agri-dark'}`}>
              {item.title}
            </h4>
            <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </div>

    </div>
  </section>
);

export default InnovativeSolutions;

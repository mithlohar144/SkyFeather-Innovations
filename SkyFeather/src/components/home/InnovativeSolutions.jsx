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
    desc: "Multispectral mapping identifies moisture-stressed zones so you apply water only where it's needed most, saving water and improving crop health.",
    highlight: true,
  },
  {
    title: ' Crop Analytics',
    desc: 'Real-time NDVI analysis and AI-driven insights, disease, and nutrient deficiencies weeks before they become visible.',
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
          viewport={{ once: true, amount: 0.2 }}
          className="max-w-lg"
        >
          <h2 className="text-4xl md:text-5xl font-extralight text-agri-dark leading-tight">
            Innovative Solutions for Modern Farming
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
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
        viewport={{ once: true, amount: 0.2 }}
        className="mb-6"
      >
        <a
          href="/services"
          className="btn-interactive inline-flex items-center gap-3 bg-agri-dark text-white px-6 py-3 rounded-full font-semibold text-sm hover:bg-violet-600 hover:shadow-lg hover:shadow-violet-500/25 hover:scale-[1.03] active:scale-[0.98] transition-all duration-300"
        >
          Learn More
          <span className="w-7 h-7 rounded-full border border-white/30 flex items-center justify-center">
            <ArrowRight size={13} aria-hidden="true" />
          </span>
        </a>
      </motion.div>

      {/* Banner Image */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.4 }}
        className="rounded-3xl overflow-hidden shadow-xl mb-14"
      >
        <img
          src={innovattionImage}
          alt="Drones flying over a lush green farmland at golden hour"
          className="w-full h-[420px] object-cover object-center hover:scale-[1.02] transition-transform duration-300"
          width={1200}
          height={420}
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
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: idx * 0.08 }}
            className={`px-8 py-6 relative ${idx === 0 ? 'md:pl-0' : ''} ${idx === features.length - 1 ? 'md:pr-0' : ''}`}
          >
            {/* Green accent top border for highlighted item */}
            {item.highlight && (
              <div className="absolute top-0 left-8 right-8 h-0.5 bg-agri-green rounded-full" />
            )}
            <h3 className={`text-base font-bold mb-3 ${item.highlight ? 'text-agri-green' : 'text-agri-dark'}`}>
              {item.title}
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </div>

    </div>
  </section>
);

export default InnovativeSolutions;

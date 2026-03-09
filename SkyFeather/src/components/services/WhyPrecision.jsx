import { motion } from 'framer-motion';
import { TrendingUp, ShieldCheck, Leaf, Zap } from 'lucide-react';

const reasons = [
  {
    icon: TrendingUp,
    title: 'Higher Yields',
    desc: 'Targeted application ensures every plant receives exactly what it needs, optimising results across every field.',
  },
  {
    icon: Leaf,
    title: 'Eco-Friendly',
    desc: 'Pinpoint accuracy protects soil and water resources, supporting a healthier and more sustainable farming environment.',
  },
  {
    icon: Zap,
    title: 'Rapid Coverage',
    desc: 'Cover large areas with ease. Autonomous flights operate efficiently across varied conditions and terrain.',
  },
  {
    icon: ShieldCheck,
    title: 'Reliable Operations',
    desc: 'Fully autonomous drone operations reduce manual effort and deliver consistent results every time.',
  },
];

const WhyPrecision = () => (
  <section className="py-24 bg-white">
    <div className="container mx-auto px-6 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-agri-dark mb-4">Why Precision Agriculture?</h2>
      <p className="text-gray-500 mb-16 max-w-2xl mx-auto">
        Traditional farming methods leave money on the table. Here's why smart farmers are switching to drone-powered precision.
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {reasons.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="p-8 rounded-2xl border border-gray-100 bg-gray-50 hover:shadow-lg hover:border-agri-green/30 transition-all group"
          >
            <div className="w-14 h-14 bg-agri-green/10 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:bg-agri-green/20 transition">
              <item.icon className="text-agri-green w-7 h-7" />
            </div>
            <h4 className="text-lg font-bold text-agri-dark mb-2">{item.title}</h4>
            <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyPrecision;

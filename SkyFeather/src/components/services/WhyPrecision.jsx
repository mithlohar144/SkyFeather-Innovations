import { motion } from 'framer-motion';
import { TrendingUp, ShieldCheck, Leaf, Zap } from 'lucide-react';

const reasons = [
  {
    icon: TrendingUp,
    title: 'Higher Yields',
    desc: 'Targeted application ensures every plant receives exactly what it needs, boosting output by up to 30%.',
  },
  {
    icon: Leaf,
    title: 'Eco-Friendly',
    desc: 'Reduce chemical usage by up to 90% with pinpoint accuracy, protecting soil and water resources.',
  },
  {
    icon: Zap,
    title: '5× Faster',
    desc: 'Cover hundreds of acres in hours, not days. Autonomous flights operate rain or shine.',
  },
  {
    icon: ShieldCheck,
    title: 'Operator Safety',
    desc: 'Remove human exposure to chemicals and hazardous terrains with fully autonomous operations.',
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

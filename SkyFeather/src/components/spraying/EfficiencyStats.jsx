import { motion } from 'framer-motion';
import { Zap, Leaf, Crosshair } from 'lucide-react';

const stats = [
  {
    icon: Zap,
    label: 'Rapid Coverage',
    sub: 'Across All Field Types',
    tag: 'Efficient & Reliable',
    accent: false,
  },
  {
    icon: Leaf,
    label: 'Sustainable',
    sub: 'Eco-Friendly Operations',
    tag: 'Responsible Farming',
    accent: true,
  },
  {
    icon: Crosshair,
    label: 'Precise',
    sub: 'Targeted Application',
    tag: 'Zero Soil Compaction',
    accent: false,
  },
];

const EfficiencyStats = () => (
  <section className="py-20 bg-white">
    <div className="container mx-auto px-6">

      {/* Section label */}
      <div className="flex items-center gap-2 mb-10">
        <span className="w-8 h-px bg-agri-green" />
        <span className="text-agri-green font-semibold uppercase tracking-widest text-xs">Performance</span>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {stats.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.12, duration: 0.5 }}
            className={`relative flex flex-col justify-between gap-8 p-8 rounded-3xl overflow-hidden group transition-all duration-300 hover:-translate-y-1 ${
              item.accent
                ? 'bg-[#0f2b1a] text-white hover:shadow-xl'
                : 'bg-[#f7f8f6] hover:shadow-xl hover:shadow-gray-200/50'
            }`}
          >
            {/* Ghost icon watermark */}
            <item.icon
              className={`absolute -bottom-4 -right-4 w-28 h-28 opacity-5 ${
                item.accent ? 'text-white' : 'text-agri-green'
              }`}
              strokeWidth={1}
            />

            {/* Icon pill */}
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
              item.accent ? 'bg-agri-green/20' : 'bg-agri-green/10 group-hover:bg-agri-green/20 transition'
            }`}>
              <item.icon className="text-agri-green w-6 h-6" />
            </div>

            {/* Text */}
            <div>
              <p className={`text-2xl font-extrabold mb-1 ${item.accent ? 'text-white' : 'text-agri-dark'}`}>
                {item.label}
              </p>
              <p className={`text-sm mb-3 ${item.accent ? 'text-white/60' : 'text-gray-500'}`}>
                {item.sub}
              </p>
              <span className={`inline-block text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full ${
                item.accent
                  ? 'bg-agri-green/20 text-agri-green'
                  : 'bg-agri-green/10 text-agri-green'
              }`}>
                {item.tag}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default EfficiencyStats;
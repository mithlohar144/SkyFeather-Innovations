import { motion } from 'framer-motion';
import { Target, Eye, Rocket } from 'lucide-react';

const cards = [
  {
    icon: Target,
    title: 'Our Mission',
    desc: 'To provide accessible and efficient drone technology that optimises crop yields while minimising environmental impact. We aim to make precision agriculture the standard for every UK farmer.',
    accent: 'from-green-500 to-emerald-600',
    iconBg: 'bg-green-500',
    hoverBg: 'hover:bg-green-50',
    hoverShadow: 'hover:shadow-green-200/50',
    hoverBorder: 'hover:border-green-200',
  },
  {
    icon: Eye,
    title: 'Our Vision',
    desc: 'To be the leading force in precision agriculture creating a future where technology and nature thrive together, ensuring food security through innovative, data-driven solutions.',
    accent: 'from-blue-500 to-indigo-600',
    iconBg: 'bg-blue-500',
    hoverBg: 'hover:bg-blue-50',
    hoverShadow: 'hover:shadow-blue-200/50',
    hoverBorder: 'hover:border-blue-200',
  },
  {
    icon: Rocket,
    title: 'Our Approach',
    desc: 'We combine cutting-edge drone hardware with intelligent software. From field assessment to actionable insights, every step is designed for accuracy, speed, and sustainability.',
    accent: 'from-amber-500 to-orange-600',
    iconBg: 'bg-amber-500',
    hoverBg: 'hover:bg-amber-50',
    hoverShadow: 'hover:shadow-amber-200/50',
    hoverBorder: 'hover:border-amber-200',
  },
];

const MissionVision = () => (
  <section className="py-20 md:py-28 bg-white">
    <div className="container mx-auto px-6">

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center max-w-2xl mx-auto mb-16"
      >
        <span className="inline-block bg-green-50 text-agri-green px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
          What Drives Us
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-agri-dark leading-tight">
          Mission, Vision & Approach
        </h2>
        <p className="text-gray-500 mt-4 leading-relaxed">
          Three pillars that guide everything we build, every field we serve, and every farmer we work with.
        </p>
      </motion.div>

      {/* Cards */}
      <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
        {cards.map((card, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1, duration: 0.45 }}
            className={`group relative bg-[#f9fafb] rounded-2xl p-8 ${card.hoverBg} hover:shadow-xl ${card.hoverShadow} hover:-translate-y-1.5 transition-all duration-300 border border-gray-100 ${card.hoverBorder}`}
          >
            {/* Top accent bar */}
            <div className={`absolute top-0 left-8 right-8 h-1 rounded-b-full bg-gradient-to-r ${card.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

            {/* Icon */}
            <div className={`w-14 h-14 rounded-2xl ${card.iconBg} flex items-center justify-center mb-6 shadow-lg shadow-green-500/15 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
              <card.icon className="w-7 h-7 text-white" strokeWidth={2} />
            </div>

            {/* Text */}
            <h3 className="text-xl font-bold text-agri-dark mb-3">
              {card.title}
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              {card.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default MissionVision;

import { motion } from 'framer-motion';
import { Target, Eye, Rocket, ArrowUpRight } from 'lucide-react';

const cards = [
  {
    icon: Target,
    tag: '01',
    title: 'Our Mission',
    desc: 'To provide accessible and efficient drone technology that optimizes crop yields while minimizing environmental impact. We aim to make precision agriculture the standard for every UK farmer.',
    highlight: true,
  },
  {
    icon: Eye,
    tag: '02',
    title: 'Our Vision',
    desc: 'To be the leading force in precision agriculture — creating a future where technology and nature thrive together, ensuring food security through innovative, data-driven solutions.',
    highlight: false,
  },
  {
    icon: Rocket,
    tag: '03',
    title: 'Our Approach',
    desc: 'We combine cutting-edge drone hardware with intelligent software. From field assessment to actionable insights, every step is designed for accuracy, speed, and sustainability.',
    highlight: false,
  },
];

const MissionVision = () => (
  <section className="py-28 bg-[#f7f8f6]">
    <div className="container mx-auto px-6">

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
        <div>
          <span className="inline-flex items-center gap-2 text-agri-green font-bold uppercase tracking-widest text-xs mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-agri-green" />
            What Drives Us
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-agri-dark leading-tight">
            Mission, Vision<br className="hidden md:block" /> &amp; Approach
          </h2>
        </div>
        <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
          Three pillars that guide everything we build, every field we serve, and every farmer we work with.
        </p>
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-3 gap-5">
        {cards.map((card, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.12, duration: 0.5 }}
            className={`group relative flex flex-col justify-between p-8 rounded-3xl overflow-hidden transition-all duration-300 ${
              card.highlight
                ? 'bg-[#0f2b1a] text-white'
                : 'bg-white hover:shadow-lg'
            }`}
          >
            {/* Number tag */}
            <span className={`absolute top-7 right-8 text-5xl font-extrabold leading-none select-none ${
              card.highlight ? 'text-white/8' : 'text-agri-dark/6'
            }`}>
              {card.tag}
            </span>

            {/* Icon */}
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-8 ${
              card.highlight ? 'bg-agri-green/20' : 'bg-agri-green/10 group-hover:bg-agri-green/20 transition'
            }`}>
              <card.icon className="w-6 h-6 text-agri-green" />
            </div>

            {/* Text */}
            <div className="flex-1">
              <h3 className={`text-xl font-extrabold mb-3 ${card.highlight ? 'text-white' : 'text-agri-dark'}`}>
                {card.title}
              </h3>
              <p className={`text-sm leading-relaxed ${card.highlight ? 'text-white/55' : 'text-gray-500'}`}>
                {card.desc}
              </p>
            </div>

            {/* Bottom arrow */}
            <div className="mt-8 flex items-center justify-end">
              <span className={`w-9 h-9 rounded-full border flex items-center justify-center transition-all duration-300 group-hover:scale-110 ${
                card.highlight
                  ? 'border-white/20 text-white/40 group-hover:bg-agri-green group-hover:border-agri-green group-hover:text-[#0f2b1a]'
                  : 'border-agri-dark/15 text-agri-dark/30 group-hover:bg-agri-green group-hover:border-agri-green group-hover:text-[#0f2b1a]'
              }`}>
                <ArrowUpRight size={15} />
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default MissionVision;
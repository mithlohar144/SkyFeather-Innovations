import { motion } from 'framer-motion';
import { Target, Eye, Rocket } from 'lucide-react';

const cards = [
  {
    icon: Target,
    title: 'Our Mission',
    desc: 'To provide accessible and efficient drone technology that optimizes crop yields while minimizing environmental impact. We aim to make precision agriculture the standard for every farmer.',
    color: 'bg-agri-green',
  },
  {
    icon: Eye,
    title: 'Our Vision',
    desc: 'To be the leading force in precision agriculture — creating a future where technology and nature thrive together, ensuring food security through innovative, data-driven solutions.',
    color: 'bg-agri-dark',
  },
  {
    icon: Rocket,
    title: 'Our Approach',
    desc: 'We combine cutting-edge drone hardware with intelligent software. From field assessment to actionable insights, every step is designed for accuracy, speed, and sustainability.',
    color: 'bg-agri-green',
  },
];

const MissionVision = () => (
  <section className="py-24 bg-white">
    <div className="container mx-auto px-6">
      <div className="text-center mb-16">
        <span className="text-agri-green font-bold uppercase tracking-widest text-sm">Who We Are</span>
        <h2 className="text-3xl md:text-4xl font-bold text-agri-dark mt-3">Mission, Vision &amp; Approach</h2>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {cards.map((card, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.15 }}
            className="relative p-10 rounded-3xl border border-gray-100 bg-gray-50 hover:shadow-xl hover:border-agri-green/20 transition-all group overflow-hidden"
          >
            {/* Accent bar */}
            <div className={`absolute top-0 left-0 w-full h-1 ${card.color}`} />

            <div className="w-14 h-14 bg-agri-green/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-agri-green/20 transition">
              <card.icon className="text-agri-green w-7 h-7" />
            </div>
            <h3 className="text-2xl font-bold text-agri-dark mb-4">{card.title}</h3>
            <p className="text-gray-600 leading-relaxed">{card.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default MissionVision;
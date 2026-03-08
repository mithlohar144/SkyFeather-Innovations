import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const solutions = [
  {
    title: "Drone Spraying Services",
    desc: "Precision application for crops with zero soil compaction. Targeted spraying reduces chemical waste by up to 30%.",
    icon: "💧",
    link: "/services/drone-spraying"
  },
  {
    title: "Drone Spreading Services",
    desc: "Uniform granular spreading for seeds, fertilizers, and cover crops. Achieve perfect distribution even on difficult terrain.",
    icon: "🌱",
    link: "/services/drone-spreading"
  },
  {
    title: "Multispectral Mapping",
    desc: "Advanced crop health analysis using NDVI sensors. Identify stress, pests, and nutrient deficiencies before they impact yield.",
    icon: "🗺️",
    link: "/services/multispectral-mapping"
  }
];

const CoreSolutions = () => (
  <section className="py-20 bg-gray-50">
    <div className="container mx-auto px-6 text-center">
      <h2 className="text-3xl font-bold text-agri-dark mb-4">Core Agricultural Solutions</h2>
      <p className="text-gray-500 mb-16 max-w-2xl mx-auto">
        We offer a suite of specialized services designed to maximize your field's potential while minimizing environmental impact.
      </p>
      
      <div className="grid md:grid-cols-3 gap-8 text-left">
        {solutions.map((item, idx) => (
          <motion.div 
            key={idx}
            whileHover={{ y: -10 }}
            className="bg-white p-10 rounded-2xl border border-gray-100 shadow-sm"
          >
            <div className="w-14 h-14 bg-agri-green/10 rounded-xl flex items-center justify-center mb-6 text-3xl">
              {item.icon}
            </div>
            <h3 className="text-xl font-bold text-agri-dark mb-4">{item.title}</h3>
            <p className="text-gray-600 mb-8 text-sm leading-relaxed">{item.desc}</p>
            <a href={item.link} className="inline-flex items-center text-agri-green font-bold hover:gap-2 transition-all">
              Learn More <ArrowRight size={16} className="ml-2" />
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default CoreSolutions;
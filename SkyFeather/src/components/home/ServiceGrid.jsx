import { motion } from 'framer-motion';
import { ArrowRight, Droplets, Target, Sprout } from 'lucide-react';

const services = [
  {
    title: "Drone Spraying",
    desc: "Precision liquid application for crops with up to 90% less water usage and zero soil compaction.",
    icon: Droplets,
    link: "/services/drone-spraying",
    image: "https://images.unsplash.com/photo-1592982537447-7440770cbfc9?q=80&w=600",
    stats: [
      { label: "Water Saved", value: "90%" },
      { label: "Coverage/hr", value: "15 Acres" },
    ],
  },
  {
    title: "Drone Spreading",
    desc: "Efficient granular distribution for fertilizers, seeds, and feed across challenging terrains.",
    icon: Sprout,
    link: "/services/drone-spreading",
    image: "https://images.unsplash.com/photo-1589923188900-85dae523342b?q=80&w=600",
    stats: [
      { label: "Capacity", value: "50 KG" },
      { label: "Spread Width", value: "10 m" },
    ],
  },
  {
    title: "Multispectral Mapping",
    desc: "Advanced crop health analysis using NDVI sensors to detect pests, stress, and nutrient deficiencies.",
    icon: Target,
    link: "/services/multispectral-mapping",
    image: "https://images.unsplash.com/photo-1586771107445-d3ca888129ff?q=80&w=600",
    stats: [
      { label: "Accuracy", value: "99.5%" },
      { label: "Resolution", value: "2 cm/px" },
    ],
  },
];

const ServiceGrid = () => {
  return (
    <section id="services" className="py-28 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <span className="text-agri-green font-bold uppercase tracking-widest text-sm">What We Do</span>
          <h2 className="text-4xl md:text-5xl font-bold text-agri-dark mt-3">Our Specialized Services</h2>
          <p className="text-gray-500 mt-4 max-w-2xl mx-auto text-lg">
            Leveraging aerial intelligence to transform how you manage your land.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid lg:grid-cols-3 gap-8">
          {services.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              className="group bg-white rounded-3xl overflow-hidden border border-gray-100 hover:shadow-2xl hover:border-agri-green/20 transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="absolute top-4 left-4 w-12 h-12 bg-white/90 backdrop-blur rounded-xl flex items-center justify-center shadow-lg">
                  <item.icon className="text-agri-green w-6 h-6" />
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-agri-dark mb-3">{item.title}</h3>
                <p className="text-gray-500 leading-relaxed mb-6">{item.desc}</p>

                {/* Mini stats */}
                <div className="flex gap-6 mb-8">
                  {item.stats.map((stat, i) => (
                    <div key={i}>
                      <p className="text-xl font-bold text-agri-green">{stat.value}</p>
                      <p className="text-xs text-gray-400 uppercase tracking-wider font-semibold">{stat.label}</p>
                    </div>
                  ))}
                </div>

                <a
                  href={item.link}
                  className="inline-flex items-center gap-2 text-agri-green font-bold group-hover:gap-3 transition-all"
                >
                  Learn more <ArrowRight size={18} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <a
            href="/services"
            className="inline-flex items-center gap-2 bg-agri-green text-white px-8 py-4 rounded-xl font-bold shadow-lg shadow-green-200 hover:bg-green-700 hover:shadow-xl transition-all"
          >
            View All Services <ArrowRight size={18} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceGrid;
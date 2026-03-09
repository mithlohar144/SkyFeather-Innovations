import { motion } from 'framer-motion';
import { ArrowUpRight, Droplets, Target, Sprout } from 'lucide-react';
import DroneSpraying from '../../assest/images/Drone-Spraying1.jpg'
import DroneSpreading from '../../assest/images/DroneSpreading.webp'
import MultispectralMapping from '../../assest/images/MultispectralMapping.webp'
const services = [
  {
    title: "Drone Spraying",
    desc: "Precision liquid application for crops with up to 90% less water usage and zero soil compaction.",
    icon: Droplets,
    link: "/services/drone-spraying",
    image: DroneSpraying,
    
  },
  {
    title: "Drone Spreading",
    desc: "Efficient granular distribution for fertilizers, seeds, and feed across challenging terrains.",
    icon: Sprout,
    link: "/services/drone-spreading",
    image: DroneSpreading,
    
  },
  {
    title: "Multispectral Mapping",
    desc: "Advanced crop health analysis using NDVI sensors to detect pests, stress, and nutrient deficiencies.",
    icon: Target,
    link: "/services/multispectral-mapping",
    image: MultispectralMapping,
    
  },
];

const ServiceGrid = () => {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-6">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-8 h-px bg-agri-green" />
              <span className="text-agri-green font-semibold uppercase tracking-widest text-xs">What We Do</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-agri-dark leading-tight">
              Our Specialized<br />Services
            </h2>
          </div>
          <p className="text-gray-400 max-w-xs text-sm leading-relaxed md:text-right">
            Leveraging aerial intelligence to transform how you manage your land.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid lg:grid-cols-3 gap-6">
          {services.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.12, duration: 0.5 }}
              className="group relative bg-[#f7f8f6] rounded-3xl overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  decoding="async"
                />
                {/* Tag */}
                {item.tag && (
                  <span className="absolute top-4 right-4 bg-agri-green text-white text-[11px] font-bold px-3 py-1 rounded-full">
                    {item.tag}
                  </span>
                )}
              </div>

              {/* Content */}
              <div className="p-7 flex flex-col flex-1">
                {/* Icon + Title row */}
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-agri-green/10 flex items-center justify-center shrink-0">
                    <item.icon className="text-agri-green w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-agri-dark">{item.title}</h3>
                </div>

                <p className="text-gray-500 text-sm leading-relaxed flex-1">{item.desc}</p>

                {/* CTA */}
                <a
                  href={item.link}
                  className="mt-6 inline-flex items-center gap-2 text-agri-dark font-semibold text-sm group/link hover:text-agri-green transition-colors"
                >
                  Explore service
                  <span className="w-7 h-7 rounded-full border border-gray-300 group-hover/link:border-agri-green group-hover/link:bg-agri-green flex items-center justify-center transition-all">
                    <ArrowUpRight size={13} className="group-hover/link:text-white transition-colors" />
                  </span>
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
          className="text-center mt-14"
        >
          <a
            href="/services"
            className="inline-flex items-center gap-2.5 bg-agri-dark text-white font-semibold pl-6 pr-2 py-2 rounded-full hover:bg-agri-green transition-colors text-sm"
          >
            View All Services
            <span className="w-8 h-8 rounded-full bg-agri-green flex items-center justify-center">
              <ArrowUpRight size={14} className="text-white" />
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceGrid;
import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import MappingHero from '../components/mapping/MappingHero';
import SEO from '../components/common/SEO';
import mapping from '../assest/images/mapping.avif';
import vegi from '../assest/images/map.png';
import mapping2 from '../assest/images/WeedTreatment.jpg';
import mapping3 from '../assest/images/DigitalSurfaceMaps.webp';
const Mapping = () => {
  const mappingSections = [
    {
      title: 'Vegetation Index Maps',
      imageLabel: 'Plant Health_edited_edited.jpg',
      imageAlt: 'Vegetation index map of crop health',
      imageSrc: vegi,
      description:
        'Using multispectral mapping, our drones can create detailed vegetation indices that highlight crop and plant health across your fields. This shows which areas are growing well, and which may be under stress or could benefit from extra nutrients.'
    },
    {
      title: 'Weed Treatment Maps',
      imageLabel: 'Green Fields',
      imageAlt: 'RGB weed detection map across crop rows',
      imageSrc: mapping2,
      description:
        'Using high-resolution RGB imagery with precise positioning, our drones can identify and map weeds across all crop types. This allows us to produce coverage reports and treatment maps, so spraying or section-controlled machinery only targets the areas that need it, saving time, inputs, and reducing environmental impact.'
    },
    {
      title: 'Digital Surface Maps',
      imageLabel: 'Crop Field Aerial Shot',
      imageAlt: 'Digital surface model generated from aerial mapping',
      imageSrc: mapping3,
      description:
        'Every time our drones fly a field, we create a digital surface map (DSM) that shows changes in land height. This helps identify low areas, track how water will flow, and predict potential runoff or erosion spots.',
      extraDescription:
        'The DSM can also be used to measure stockpile volumes, calculate cut and fill for earthworks, or plan drainage and land grading. All data is ready to be used in CAD software or directly with grading machinery, making planning and field work more efficient.'
    }
  ];

  return (
    <div className="w-full" id="main-content">
      <SEO
        title="Multispectral Mapping"
        description="Drone multispectral mapping for vegetation health indices, weed treatment maps, and digital surface models. Get actionable crop intelligence from the air with SkyFeather."
        path="/services/multispectral-mapping"
      />
      <Navbar />
      <div className="pt-20">
        <MappingHero />

        <section className="bg-[#e8e8ea] py-10 md:py-14">
          <div className="w-full max-w-7xl mx-auto px-4 md:px-8 space-y-8">
            {mappingSections.map((section, index) => {
              const reverseDesktop = index % 2 === 1;

              return (
                <motion.article
                  key={section.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="group grid grid-cols-1 lg:grid-cols-2 min-h-105 rounded-2xl overflow-hidden"
                >
                  <figure className={`relative overflow-hidden ${reverseDesktop ? 'lg:order-2' : ''}`}>
                    <img
                      src={section.imageSrc}
                      alt={section.imageAlt}
                      className="w-full h-70 rounded-2xl lg:h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                      decoding="async"
                    />
                    {index === 0 && (
                      <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-md px-5 py-3.5 rounded-xl shadow-xl z-10 border border-gray-100">
                        <div className="flex items-center gap-2.5 mb-1.5">
                          <div className="w-3 h-3 bg-red-500 rounded-full ring-2 ring-red-200" />
                          <span className="text-xs font-semibold text-gray-700">Low Health</span>
                        </div>
                        <div className="flex items-center gap-2.5">
                          <div className="w-3 h-3 bg-green-500 rounded-full ring-2 ring-green-200" />
                          <span className="text-xs font-semibold text-gray-700">High Health</span>
                        </div>
                      </div>
                    )}
                  </figure>

                  <div className={`flex items-center justify-center px-8 md:px-14 py-12 lg:py-16 ${reverseDesktop ? 'lg:order-1' : ''}`}>
                    <div className="max-w-md text-center">
                      <h3 className="text-3xl font-bold text-agri-dark mb-6">{section.title}</h3>
                      <p className="text-gray-700 leading-relaxed mb-5">{section.description}</p>
                      {section.extraDescription && (
                        <p className="text-gray-700 leading-relaxed">{section.extraDescription}</p>
                      )}
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Mapping;
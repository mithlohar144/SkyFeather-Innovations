import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import SpreadingHero from '../components/spreading/SpreadingHero';
import SEO from '../components/common/SEO';
import spreadingImageOne from '../assest/images/seed.avif';
import spreadingImageTwo from '../assest/images/dronepic.jpg';
import spreadingImageThree from '../assest/images/Natural.jpg';

const Spreading = () => {
  const spreadingSections = [
    {
      title: 'Cover Crops & Other Seeds',
      imageAlt: 'Hands holding grains ready for aerial spreading',
      imageSrc: spreadingImageOne,
      description:
        'Our drones can broadcast a wide range of seeds, from cover crops and catch crops to grass, oilseed rape, wildflowers, and even trees, all from the air.',
      extraDescription:
        'Since we do not need to drive on the land, seeds can be sown directly into standing crops like cereals, pulses, or maize, or onto fields after wet harvests that would be difficult to access with machinery. This method avoids soil compaction, ruts, and muddy tracks, making planting faster and less disruptive.'
    },
    {
      title: 'Fertiliser',
      imageAlt: 'Agricultural gardens and crop area for fertiliser spreading',
      imageSrc: spreadingImageTwo,
      description:
        'Our drones can apply all types of fertilisers, from granular to liquid, entirely from the air. This avoids soil compaction, ruts, and muddy tracks, and allows crops to receive treatment exactly when they need it, without waiting for ground conditions suitable for heavy machinery.'
    },
    {
      title: 'Pelleted Natural Products',
      imageAlt: 'Aerial agricultural field for pelleted natural product application',
      imageSrc: spreadingImageThree,
      description:
        'In addition to conventional fertilisers and standard granular products, our drones can also spread pelleted materials such as fungal pellets, biochar, and other specialty products.',
      extraDescription:
        'The drones are easy to calibrate, making it simple to set up new products and ensure accurate application every time.',
      thirdDescription:
        'Many natural pellets need to be applied when the ground is wet so they break down over the winter. Using drones for this helps avoid soil compaction and ruts, making it possible to treat fields safely even in challenging conditions.'
    }
  ];

  return (
    <div className="w-full" id="main-content">
      <SEO
        title="Drone Spreading"
        description="Aerial spreading of cover crops, seeds, granular fertiliser, and pelleted products by drone — no soil compaction, even in wet conditions. UK-wide service by SkyFeather."
        path="/services/drone-spreading"
      />
      <Navbar />
      <div className="pt-20">
        <SpreadingHero />

        <section className="bg-[#e8e8ea] py-10 md:py-14">
          <div className="w-full max-w-7xl mx-auto px-4 md:px-8 space-y-8">
            {spreadingSections.map((section, index) => {
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
                  <figure className={`overflow-hidden ${reverseDesktop ? 'lg:order-2' : ''}`}>
                    <img
                      src={section.imageSrc}
                      alt={section.imageAlt}
                      className="w-full rounded-2xl h-70 lg:h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                      decoding="async"
                    />
                    
                  </figure>

                  <div className={`flex items-center justify-center px-8 md:px-14 py-12 lg:py-16 bg-[#e8e8ea] ${reverseDesktop ? 'lg:order-1' : ''}`}>
                    <div className="max-w-md text-center">
                      <h3 className="text-3xl  text-agri-dark mb-6">{section.title}</h3>
                      <p className="text-gray-700 font-semibold leading-relaxed mb-5">{section.description}</p>
                      {section.extraDescription && (
                        <p className="text-gray-700 font-medium leading-relaxed mb-5">{section.extraDescription}</p>
                      )}
                      {section.thirdDescription && (
                        <p className="text-gray-700 font-medium leading-relaxed">{section.thirdDescription}</p>
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

export default Spreading;

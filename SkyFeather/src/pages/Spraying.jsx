import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import SprayingHero from '../components/spraying/SprayingHero';
import SEO from '../components/common/SEO';
import sprayingImageOne from '../assest/images/Drone-Spraying.jpg';
import sprayingImageTwo from '../assest/images/spreying2.avif';
import sprayingImageThree from '../assest/images/spreying3.avif';

const Spraying = () => {
  const sprayingSections = [
    {
      title: 'Biostimulants & Natural Pest Control Products',
      imageAlt: 'Aerial view of wheat field landscape',
      imageSrc: sprayingImageOne,
      imageLabels: ['Wheat Field Landscape', 'Wheat Field Landscape'],
      description:
        'Our drones can apply a wide range of biostimulant products, including seaweed-based fertilisers, humic substances, and other plant-based solutions. These treatments help crops absorb nutrients more effectively, cope better with stress, and support the plant\'s own natural defence systems.',
      extraDescription:
        'The result is stronger, more resilient crops that rely less on synthetic fertilisers while also supporting long-term soil health.',
      thirdDescription:
        'We can also apply liquid natural pest control solutions, such as nematodes, to help manage invasive pests in a targeted way without the use of chemical inputs.'
    },
    {
      title: 'Liquid Fertiliser',
      imageAlt: 'Drone spraying crops with precision',
      imageSrc: sprayingImageTwo,
      imageLabels: ['Drone Spraying Crops'],
      description:
        'Our drones can apply all types of liquid fertilisers, whether for soil or foliar feeding, without the need for ground machinery. This avoids soil compaction, ruts, or muddy tracks, and lets you treat crops exactly when they need it, rather than waiting for conditions suitable for heavy machines.',
      extraDescription:
        'We can also use variable rate application maps, which target fertiliser where it\'s needed most. This reduces input costs, minimises waste, and lowers the environmental impact compared to conventional spreading methods.'
    },
    {
      title: 'Shading Agents & Cleaners',
      imageAlt: 'Plant nursery and covered structure treatment area',
      imageSrc: sprayingImageThree,
      imageLabels: ['Plant Nursery'],
      description:
        'In addition to crop-related applications, our drone services can be used to apply specialist liquid treatments to buildings and covered structures. These include products designed to help reduce internal temperatures during hot conditions in spaces such as livestock housing, greenhouses, and similar facilities.',
      extraDescription:
        'Drones can also be used to apply cleaning solutions for the removal of temporary coatings or light surface dirt. This can be suitable for a range of structures, including agricultural buildings, covered growing areas, and installations such as solar panels, helping maintain performance and working conditions.'
    }
  ];

  return (
    <div className="w-full" id="main-content">
      <SEO
        title="Drone Spraying"
        description="Precision drone spraying services for biostimulants, liquid fertilisers, natural pest control, and specialist treatments — no ground damage, applied at the right time."
        path="/services/drone-spraying"
      />
      <Navbar />
      <div className="pt-20">
        <SprayingHero />

        <section className="bg-[#e8e8ea] py-10 md:py-14">
          <div className="w-full max-w-7xl mx-auto px-4 md:px-8 space-y-8">
            {sprayingSections.map((section, index) => {
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
                      className="w-full h-70 rounded-2xl lg:h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                      decoding="async"
                    />
                    <figcaption className="px-4 py-3 text-sm text-gray-600 bg-white/80">
                      {section.imageLabels.join(' | ')}
                    </figcaption>
                  </figure>

                  <div className={`flex items-center justify-center px-8 md:px-14 py-12 lg:py-16 bg-[#e8e8ea] ${reverseDesktop ? 'lg:order-1' : ''}`}>
                    <div className="max-w-md text-center">
                      <h3 className="text-3xl font-bold text-agri-dark mb-6">{section.title}</h3>
                      <p className="text-gray-700 leading-relaxed mb-5">{section.description}</p>
                      {section.extraDescription && (
                        <p className="text-gray-700 leading-relaxed mb-5">{section.extraDescription}</p>
                      )}
                      {section.thirdDescription && (
                        <p className="text-gray-700 leading-relaxed">{section.thirdDescription}</p>
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

export default Spraying;
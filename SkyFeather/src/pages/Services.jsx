// src/pages/Services.jsx
import React from 'react';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import mapping from '../assest/images/mapping.avif';
import mappingTwo from '../assest/images/mapping2.avif';
import mappingThree from '../assest/images/mapping3.avif';
import spraying from '../assest/images/Drone-Spraying.jpg';
import spreading from '../assest/images/DroneSpreading.webp';
import farmer from '../assest/images/farmer.avif';

const Services = () => {
  const overviewServices = [
    {
      title: 'Drone Multispectral Mapping',
      desc: 'Drone mapping that shows how crops are performing across the field, helping identify variations in growth, stress, and areas that may need attention.',
      imageSrc: mapping
    },
    {
      title: 'Drone Spraying Services',
      desc: 'Precision drone spraying for fertilisers, bio stimulants, and natural pest control products, applied without ground damage and at the right time for the crop.',
      imageSrc: spraying
    },
    {
      title: 'Drone Spreading Services',
      desc: 'Aerial spreading of seed, fertiliser, and pelleted products without soil compaction, allowing applications even when ground conditions limit machinery access.',
      imageSrc: spreading
    }
  ];

  const mappingDetailSections = [
    {
      title: 'Vegetation Index Maps',
      imageSrc: mapping,
      imageAlt: 'Plant health multispectral image',
      description:
        'Our drones use multispectral imaging to show how crops and vegetation are performing across the field. This helps highlight differences in growth, areas under stress, and sections that may need attention.',
      extraDescription:
        'The data is presented in a practical format that supports everyday farm management. It allows you to monitor field performance, focus efforts where they have the most impact, and plan timely interventions to support crop health and yields.'
    },
    {
      title: 'Weed Treatment Maps',
      imageSrc: mappingTwo,
      imageAlt: 'Geo-accurate weed treatment mapping image',
      description:
        'Our drones capture highly detailed, geo-accurate images of your fields, which can be used to identify areas where weeds may be present. From this data, we create visual reports and maps that provide clear guidance for targeted interventions. This approach helps you understand where attention might be needed and supports more precise field management decisions'
    },
    {
      title: 'Digital Surface Maps',
      imageSrc: mappingThree,
      imageAlt: 'Digital surface map generated from aerial survey',
      description:
        'Every time our drones fly a field, we create a digital surface map (DSM) that shows changes in land height. This helps identify low areas, track how water will flow, and predict potential runoff or erosion spots.'
    }
  ];

  return (
    <div className="w-full">
      <Navbar />
      <div className="pt-20">
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-5xl font-bold text-agri-dark">Our Services</h1>
            <p className="text-agri-dark/80 text-2xl mt-4">Providing Everything You Need</p>

            <div className="grid md:grid-cols-3 gap-8 mt-14 text-left">
              {overviewServices.map((service) => (
                <article key={service.title} className="bg-[#f5f5f7] rounded-2xl overflow-hidden border border-gray-100">
                  <img
                    src={service.imageSrc}
                    alt={service.title}
                    className="w-full rounded-2xl h-52 object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="p-6">
                    <h2 className="text-xl font-bold text-agri-dark mb-3">{service.title}</h2>
                    <p className="text-gray-700 leading-relaxed text-sm">{service.desc}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#e8e8ea] py-10 md:py-14">
          <div className="w-full max-w-7xl mx-auto px-4 md:px-8 space-y-8">
            {mappingDetailSections.map((section, index) => {
              const reverseDesktop = index % 2 === 1;

              return (
                <article key={section.title} className="grid grid-cols-1 lg:grid-cols-2 min-h-105 rounded-2xl overflow-hidden">
                  <figure className={reverseDesktop ? 'lg:order-2' : ''}>
                    <img
                      src={section.imageSrc}
                      alt={section.imageAlt}
                      className="w-full rounded-2xl h-70 lg:h-full object-cover"
                      loading="lazy"
                      decoding="async"
                    />
                    <figcaption className="px-4 py-3 text-sm text-gray-600 bg-white/80">{section.caption}</figcaption>
                  </figure>

                  <div className={`flex items-center justify-center px-8 md:px-14 py-12 lg:py-16 bg-[#e8e8ea] ${reverseDesktop ? 'lg:order-1' : ''}`}>
                    <div className="max-w-md text-center">
                      <h3 className="text-3xl font-bold text-agri-dark mb-6">{section.title}</h3>
                      <p className="text-gray-700 leading-relaxed mb-5">{section.description}</p>
                      {section.extraDescription && (
                        <p className="text-gray-700 leading-relaxed">{section.extraDescription}</p>
                      )}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <section className="py-10 sm:py-12 md:py-16 flex flex-col md:flex-row bg-white gap-6 md:gap-8 px-4 sm:px-6 md:px-8">
          <div className="w-full md:w-1/2 flex items-center justify-center">
            <img className='rounded-2xl w-full h-72 sm:h-96 md:h-full object-cover' src={farmer} alt="Testimonial" />
          </div>
          <div className="w-full md:w-1/2 max-w-4xl flex flex-col justify-center mx-auto px-2 sm:px-4 md:px-6 text-center">
            <blockquote className="text-xl sm:text-2xl md:text-3xl text-agri-dark font-light leading-relaxed">
              "The drone imagery and crop health map were particularly helpful in identifying areas of concern within the field that would have been difficult to detect through conventional ground inspections".
            </blockquote>
            
            <p className="mt-6 md:mt-8 text-agri-dark font-semibold">James, Farmer from York</p>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Services;
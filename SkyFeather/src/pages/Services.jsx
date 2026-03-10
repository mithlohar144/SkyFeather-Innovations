// src/pages/Services.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import mapping from '../assest/images/mapping.avif';
import spraying from '../assest/images/Drone-Spraying.jpg';
import spreading from '../assest/images/DroneSpreading.webp';
import farmer from '../assest/images/farmer.avif';

const Services = () => {
  const overviewServices = [
    {
      title: 'Drone Multispectral Mapping',
      desc: 'Drone mapping that shows how crops are performing across the field, helping identify variations in growth, stress, and areas that may need attention.',
      imageSrc: mapping,
      link: '/services/multispectral-mapping'
    },
    {
      title: 'Drone Spraying Services',
      desc: 'Precision drone spraying for fertilisers, bio stimulants, and natural pest control products, applied without ground damage and at the right time for the crop.',
      imageSrc: spraying,
      link: '/services/drone-spraying'
    },
    {
      title: 'Drone Spreading Services',
      desc: 'Aerial spreading of seed, fertiliser, and pelleted products without soil compaction, allowing applications even when ground conditions limit machinery access.',
      imageSrc: spreading,
      link: '/services/drone-spreading'
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
                    <Link to={service.link} className="inline-flex items-center justify-center mt-4 w-10 h-10 bg-agri-green text-white rounded-full hover:bg-green-700 transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M16.0037 9.41421L7.39712 18.0208L5.98291 16.6066L14.5895 8H7.00373V6H18.0037V17H16.0037V9.41421Z"></path></svg>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
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
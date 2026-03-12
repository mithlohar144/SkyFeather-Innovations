// src/pages/Services.jsx
import React from 'react';
import { Link } from 'react-router-dom';

import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import SEO from '../components/common/SEO';
import mapping from '../assest/images/mapping.avif';
import spraying from '../assest/images/Drone-Spraying1.jpg';
import spreading from '../assest/images/DroneSpreading.webp';

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
    <div className="w-full" id="main-content">
      <SEO
        title="Services"
        description="Explore SkyFeather's drone services — multispectral crop mapping, precision spraying of biostimulants & fertilisers, and aerial spreading of seed & granular products across the UK."
        path="/services"
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          provider: { '@type': 'Organization', name: 'SkyFeather Innovations' },
          areaServed: 'United Kingdom',
          serviceType: 'Precision Agriculture Drone Services',
          description: 'Drone spraying, spreading, and multispectral mapping for modern farms.',
        }}
      />
      <Navbar />
      <div className="pt-20">
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-5xl font-medium font-bold text-agri-dark">
              Our Services
            </h1>
            <p className="text-agri-dark/80  font-light text-2xl mt-4">
              Providing What You Need
            </p>

            <div className="grid md:grid-cols-3 gap-8 mt-14 text-left">
              {overviewServices.map((service, index) => (
                <article
                  key={service.title}
                  className="group bg-[#f5f5f7] rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl hover:shadow-gray-200/50 hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="overflow-hidden">
                    <img
                      src={service.imageSrc}
                      alt={service.title}
                      className="w-full rounded-2xl h-52 object-cover group-hover:scale-105 transition-transform duration-500"
                      width={400}
                      height={208}
                      decoding="async"
                    />
                  </div>
                  <div className="p-6">
                    <h2 className="text-xl font-bold text-agri-dark mb-3">{service.title}</h2>
                    <p className="text-gray-700 leading-relaxed text-sm">{service.desc}</p>
                    <Link to={service.link} aria-label={`View ${service.title} details`} className="btn-interactive inline-flex items-center justify-center mt-4 w-10 h-10 bg-agri-green text-white rounded-full hover:bg-indigo-600 hover:scale-110 hover:shadow-lg hover:shadow-indigo-500/25 active:scale-95 transition-all duration-300">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M16.0037 9.41421L7.39712 18.0208L5.98291 16.6066L14.5895 8H7.00373V6H18.0037V17H16.0037V9.41421Z"></path></svg>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="pt-0 pb-10 sm:pt-0 sm:pb-12 md:pt-0 md:pb-16 bg-white px-4 sm:px-4 md:px-8">
          <div
            className="max-w-4xl flex flex-col justify-center mx-auto px-2 sm:px-4 md:px-6 text-center"
          >
            <blockquote className="text-xl sm:text-2xl md:text-3xl text-agri-dark font-light leading-relaxed">
              "The drone imagery and crop health map were particularly helpful in identifying areas of concern within the field that would have been difficult to detect through conventional ground inspections".
            </blockquote>
            <p className="mt-6 text-agri-dark font-semibold">James, Farmer </p>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Services;

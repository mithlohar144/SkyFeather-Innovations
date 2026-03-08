import React from 'react';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import MappingHero from '../components/mapping/MappingHero';
import ComparisonSlider from '../components/mapping/ComparisonSlider';
import { motion } from 'framer-motion';

const Mapping = () => {
  return (
    <div className="w-full">
      <Navbar />
      <div className="pt-20">
        <MappingHero />
        
        {/* Info Section from Template */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6 max-w-4xl text-center">
            <h2 className="text-3xl font-bold text-agri-dark mb-6">What is Multispectral Mapping?</h2>
            <p className="text-gray-600 leading-relaxed text-lg">
              Our advanced sensors capture data beyond the visible spectrum, identifying issues in crop health weeks before they are visible to the naked eye. By measuring reflected light in specific bands (NIR, Red Edge, and RGB), we generate precise health indices like NDVI.
            </p>
          </div>
        </section>

        <ComparisonSlider />

        {/* Process Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-16">Our Simple Process</h2>
            <div className="grid md:grid-cols-3 gap-12">
              {[
                { step: "Data Capture", icon: "🚁", desc: "We deploy autonomous drones equipped with professional sensors to scan your acreage." },
                { step: "Cloud Processing", icon: "☁️", desc: "Captured images are processed through our cloud AI to stitch maps and calculate health indices." },
                { step: "Actionable Reports", icon: "📊", desc: "Receive comprehensive reports with prescription maps ready to load into your farming equipment." }
              ].map((item, i) => (
                <div key={i}>
                  <div className="w-20 h-20 bg-agri-green rounded-full flex items-center justify-center mx-auto mb-6 text-3xl shadow-lg shadow-green-100">
                    {item.icon}
                  </div>
                  <h4 className="text-xl font-bold mb-2">{item.step}</h4>
                  <p className="text-gray-500 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Mapping;
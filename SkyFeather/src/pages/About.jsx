import React from 'react';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import AboutHero from '../components/about/AboutHero';
import MissionVision from '../components/about/MissionVision';
import { motion } from 'framer-motion';
import { Leaf, Cpu, ShieldCheck, Users } from 'lucide-react';

const values = [
  { icon: Leaf, title: 'Sustainability First', desc: 'Every solution we build is designed to reduce chemical usage and protect the ecosystem.' },
  { icon: Cpu, title: 'Innovation Driven', desc: 'We combine AI, GPS, and drone engineering to push the boundaries of modern agriculture.' },
  { icon: ShieldCheck, title: 'Trust & Safety', desc: 'DGCA-certified operations with rigorous safety protocols on every single flight.' },
  { icon: Users, title: 'Farmer Focused', desc: 'We listen to farmers and build tools that solve real problems in the field.' },
];

const timeline = [
  { year: '2019', title: 'Founded', desc: 'SkyFeather Innovations was born from a passion for agriculture and technology.' },
  { year: '2020', title: 'First 100 Farms', desc: 'Completed drone spraying operations across 100 farms in our first full year.' },
  { year: '2022', title: 'Mapping Launch', desc: 'Introduced multispectral mapping services with NDVI health analysis.' },
  { year: '2024', title: 'Spreading Services', desc: 'Expanded into granular spreading for seeds, fertilizers, and cover crops.' },
  { year: '2026', title: '500+ Farms', desc: 'Serving over 500 farms nationwide with a growing team of 25+ specialists.' },
];

const About = () => {
  return (
    <div className="w-full">
      <Navbar />
      <div className="pt-20">
        <AboutHero />
        <MissionVision />

        {/* Our Values */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6 text-center">
            <span className="text-agri-green font-bold uppercase tracking-widest text-sm">What Drives Us</span>
            <h2 className="text-3xl md:text-4xl font-bold text-agri-dark mt-3 mb-16">Our Core Values</h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="p-8 rounded-2xl border border-gray-100 hover:shadow-lg hover:border-agri-green/30 transition-all group"
                >
                  <div className="w-14 h-14 bg-agri-green/10 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:bg-agri-green/20 transition">
                    <item.icon className="text-agri-green w-7 h-7" />
                  </div>
                  <h4 className="text-lg font-bold text-agri-dark mb-2">{item.title}</h4>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Journey Timeline */}
        <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <span className="text-agri-green font-bold uppercase tracking-widest text-sm">Our Story</span>
              <h2 className="text-3xl md:text-4xl font-bold text-agri-dark mt-3">The SkyFeather Journey</h2>
            </div>

            <div className="relative max-w-3xl mx-auto">
              {/* Vertical line */}
              <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-agri-green/20 -translate-x-1/2" />

              {timeline.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className={`relative flex items-start gap-6 mb-12 md:w-1/2 ${
                    idx % 2 === 0 ? 'md:mr-auto md:pr-12 md:text-right' : 'md:ml-auto md:pl-12'
                  }`}
                >
                  {/* Dot */}
                  <div className="absolute left-6 md:left-auto md:right-auto top-1 w-3 h-3 bg-agri-green rounded-full ring-4 ring-agri-green/20 z-10 md:left-1/2 md:-translate-x-1/2"
                    style={{ [idx % 2 === 0 ? 'right' : 'left']: '-1.6rem' }}
                  />

                  <div className="pl-10 md:pl-0">
                    <span className="text-agri-green font-bold text-sm">{item.year}</span>
                    <h4 className="text-lg font-bold text-agri-dark mt-1">{item.title}</h4>
                    <p className="text-gray-500 text-sm mt-1 leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-agri-dark text-white text-center">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold max-w-2xl mx-auto leading-tight">
              Ready to transform your farm with <span className="text-agri-green">SkyFeather</span>?
            </h2>
            <p className="mt-4 text-gray-400 max-w-xl mx-auto">
              Get in touch with our precision agriculture experts and discover how drone technology can work for you.
            </p>
            <div className="flex justify-center gap-4 mt-10">
              <a href="/contact" className="bg-agri-green text-white px-8 py-3.5 rounded-xl font-bold shadow-lg shadow-green-900/30 hover:bg-green-700 transition">
                Contact Us
              </a>
              <a href="/services" className="border border-white/20 text-white px-8 py-3.5 rounded-xl font-bold hover:bg-white/10 transition">
                View Services
              </a>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default About;
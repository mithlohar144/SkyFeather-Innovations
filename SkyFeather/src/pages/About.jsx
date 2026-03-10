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


const About = () => {
  return (
    <div className="w-full">
      <Navbar />
      <div className="pt-20">
        <AboutHero />
        <MissionVision />

        {/* Our Values */}
        <section className="py-28 bg-white overflow-hidden">
          <div className="container mx-auto px-6">

            {/* Header row */}
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
              <div>
                <span className="inline-flex items-center gap-2 text-agri-green font-bold uppercase tracking-widest text-xs mb-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-agri-green" />
                  What Drives Us
                </span>
                <h2 className="text-3xl md:text-4xl font-extrabold text-agri-dark leading-tight">
                  Our Core Values
                </h2>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
                The principles behind every decision, every flight, and every farm we serve.
              </p>
            </div>

            {/* Cards */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {values.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                  className={`group relative flex flex-col gap-6 p-7 rounded-3xl transition-all duration-300 overflow-hidden ${
                    idx === 0
                      ? 'bg-[#0f2b1a] text-white'
                      : 'bg-[#f7f8f6] hover:shadow-lg'
                  }`}
                >
                  {/* Ghost number */}
                  <span className={`absolute top-5 right-6 text-6xl font-extrabold leading-none select-none pointer-events-none ${
                    idx === 0 ? 'text-white/6' : 'text-agri-dark/5'
                  }`}>
                    {String(idx + 1).padStart(2, '0')}
                  </span>

                  {/* Icon */}
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                    idx === 0
                      ? 'bg-agri-green/20'
                      : 'bg-agri-green/10 group-hover:bg-agri-green/20 transition'
                  }`}>
                    <item.icon className="text-agri-green w-6 h-6" />
                  </div>

                  {/* Text */}
                  <div>
                    <h4 className={`text-lg font-extrabold mb-2 ${idx === 0 ? 'text-white' : 'text-agri-dark'}`}>
                      {item.title}
                    </h4>
                    <p className={`text-sm leading-relaxed ${idx === 0 ? 'text-white/50' : 'text-gray-500'}`}>
                      {item.desc}
                    </p>
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
              Ready to transform your farm with <span className="text-agri-green">SkyFeather Innovations</span>?
            </h2>
            <p className="mt-4 text-gray-400 max-w-xl mx-auto">
              Get in touch with our precision agriculture experts and discover how drone technology can work for you.
            </p>
            <div className="flex justify-center gap-4 mt-10">
              <a href="/contact" className="btn-interactive bg-agri-green text-white px-8 py-3.5 rounded-xl font-bold shadow-lg shadow-green-900/30 hover:bg-violet-600 hover:shadow-violet-500/30 hover:scale-[1.03] active:scale-[0.98] transition-all duration-300">
                Contact Us
              </a>
              <a href="/services" className="btn-interactive border border-white/20 text-white px-8 py-3.5 rounded-xl font-bold hover:bg-white/10 transition">
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
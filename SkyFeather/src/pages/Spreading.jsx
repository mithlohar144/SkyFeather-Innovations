import React from 'react';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import SpreadingHero from '../components/spreading/SpreadingHero';
import TechSpecs from '../components/spreading/TechSpecs';

const Spreading = () => {
  return (
    <div className="w-full">
      <Navbar />
      <div className="pt-20">
        <SpreadingHero />
        <TechSpecs />

        {/* Core Benefits */}
        <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-16 text-agri-dark">Why Drone Spreading?</h2>
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { title: 'Zero Compaction', icon: '🌍', desc: 'No heavy machinery on your soil.' },
                { title: 'Any Terrain', icon: '⛰️', desc: 'Hilly, muddy, or uneven — no problem.' },
                { title: 'Variable Rate', icon: '⚙️', desc: 'GPS-guided variable-rate application.' },
                { title: 'Cost Effective', icon: '💰', desc: 'Lower operational costs per hectare.' },
              ].map((item, i) => (
                <div key={i} className="p-8 border border-gray-100 rounded-2xl bg-white hover:shadow-lg transition">
                  <div className="text-3xl mb-4">{item.icon}</div>
                  <h4 className="font-bold text-agri-dark mb-2">{item.title}</h4>
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

export default Spreading;

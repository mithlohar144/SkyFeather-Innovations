import React from 'react';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import SprayingHero from '../components/spraying/SprayingHero';
import EfficiencyStats from '../components/spraying/EfficiencyStats';

const Spraying = () => {
  return (
    <div className="w-full">
      <Navbar />
      <div className="pt-20">
        <SprayingHero />
        <EfficiencyStats />
        
        {/* Core Benefits Grid (Aap baki sections yahan add kar sakte hain) */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-16">Core Benefits</h2>
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { title: "Reduced Waste", icon: "🍃" },
                { title: "Operator Safety", icon: "🛡️" },
                { title: "Variable Rate", icon: "⚙️" },
                { title: "Any Terrain", icon: "⛰️" }
              ].map((item, i) => (
                <div key={i} className="p-8 border border-gray-100 rounded-2xl hover:bg-agri-light transition">
                  <div className="text-3xl mb-4">{item.icon}</div>
                  <h4 className="font-bold">{item.title}</h4>
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

export default Spraying;
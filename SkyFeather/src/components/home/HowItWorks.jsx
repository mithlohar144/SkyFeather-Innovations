import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  { 
    id: '01', 
    title: 'Book Service', 
    desc: 'Select your service and schedule a time through our platform.' 
  },
  { 
    id: '02', 
    title: 'Farm Visit', 
    desc: 'Our certified pilots arrive at your location for a site assessment.' 
  },
  { 
    id: '03', 
    title: 'Drone Operation', 
    desc: 'Autonomous flight executes the spraying or mapping task.' 
  },
  { 
    id: '04', 
    title: 'Results', 
    desc: 'Receive detailed reports and see immediate farm improvement.' 
  }
];

const HowItWorks = () => {
  return (
    <section className="py-24 bg-white border-t border-gray-50">
      <div className="container mx-auto px-6 text-center">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-agri-dark">How It Works</h2>
          <p className="text-gray-500 mt-4 max-w-xl mx-auto">
            Getting expert drone services on your farm is simpler than ever.
          </p>
        </div>
        
        <div className="grid md:grid-cols-4 gap-12 mt-20 relative">
          {/* Connection Line (Desktop Only) */}
          <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gray-100 z-0"></div>
          
          {steps.map((step, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="relative z-10"
            >
              {/* Step Circle */}
              <div className="w-24 h-24 bg-white border-4 border-agri-green rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold text-agri-dark shadow-lg transition-transform hover:scale-110 duration-300">
                {step.id}
              </div>
              
              {/* Step Content */}
              <h4 className="text-xl font-bold text-agri-dark mb-2">{step.title}</h4>
              <p className="text-gray-500 text-sm px-4 leading-relaxed">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
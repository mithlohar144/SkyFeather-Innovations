import React from 'react';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import Hero from '../components/home/Hero';
import ServiceGrid from '../components/home/ServiceGrid';
import PlatformSection from '../components/home/PlatformSection';
import InnovativeSolutions from '../components/home/InnovativeSolutions';


const Home = () => {
  return (
    <div className="w-full">
      <Navbar />
      <Hero />
      <ServiceGrid />
      <PlatformSection />
      <InnovativeSolutions />
      
      <Footer />
    </div>
  );
};

export default Home;
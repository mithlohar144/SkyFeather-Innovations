import { lazy, Suspense } from 'react';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import Hero from '../components/home/Hero';
import SEO from '../components/common/SEO';

const ServiceGrid = lazy(() => import('../components/home/ServiceGrid'));
const PlatformSection = lazy(() => import('../components/home/PlatformSection'));
const InnovativeSolutions = lazy(() => import('../components/home/InnovativeSolutions'));

const Home = () => {
  return (
    <div className="w-full" id="main-content">
      <SEO
        title="Precision Agriculture Drone Services"
        description="SkyFeather Innovations delivers precision agriculture drone services across the UK — multispectral mapping, drone spraying, and aerial spreading to maximise crop yields and reduce costs."
        path="/"
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: 'SkyFeather Innovations',
          url: 'https://www.skyfeatherinnovations.co.uk',
          description: 'Precision agriculture drone services including spraying, spreading, and multispectral mapping.',
          areaServed: { '@type': 'Country', name: 'United Kingdom' },
          serviceType: ['Drone Spraying', 'Drone Spreading', 'Multispectral Mapping'],
        }}
      />
      <Navbar />
      <Hero />
      <Suspense fallback={<div className="min-h-[400px]" />}>
        <ServiceGrid />
        <PlatformSection />
        <InnovativeSolutions />
      </Suspense>
      <Footer />
    </div>
  );
};

export default Home;
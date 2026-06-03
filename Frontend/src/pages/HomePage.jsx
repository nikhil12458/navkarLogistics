import React, { Suspense } from 'react';
import Hero from '../components/home/Hero';
import Stats from '../components/home/Stats';

// Lazy loading below-the-fold sections for faster initial load
const Services = React.lazy(() => import('../components/home/Services'));
const WhyChooseUs = React.lazy(() => import('../components/home/WhyChooseUs'));
const Fleet = React.lazy(() => import('../components/home/Fleet'));
const Testimonials = React.lazy(() => import('../components/home/Testimonials'));

const SectionLoader = () => (
  <div className="w-full py-20 flex justify-center items-center">
    <div className="w-8 h-8 border-4 border-[#001b3a] border-t-transparent rounded-full animate-spin"></div>
  </div>
);

const HomePage = () => {
  return (
    <div className="w-full bg-slate-50 font-sans">
      <Hero />
      <Stats limit={4} />
      
      <Suspense fallback={<SectionLoader />}>
        <Services limit={3} />
      </Suspense>
      
      <Suspense fallback={<SectionLoader />}>
        <WhyChooseUs />
      </Suspense>
      
      <Suspense fallback={<SectionLoader />}>
        <Fleet />
      </Suspense>
      
      <Suspense fallback={<SectionLoader />}>
        <Testimonials limit={3} />
      </Suspense>
    </div>
  );
};

export default HomePage;

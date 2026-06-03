import React from 'react';
import Services from '../components/home/Services';

const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <div className="bg-[#001b3a] pt-20 pb-12 text-white text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
        <p className="text-lg text-slate-300 max-w-2xl mx-auto">Explore our comprehensive range of logistics solutions designed to scale your business.</p>
      </div>
      <Services hideLink={true} />
    </div>
  );
};

export default ServicesPage;

import React from 'react';
import WhyChooseUs from '../components/home/WhyChooseUs';
import OwnerProfile from '../components/OwnerProfile';

const WhyChooseUsPage = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <div className="bg-[#001b3a] pt-20 pb-12 text-white text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Why Choose Navkar</h1>
        <p className="text-lg text-slate-300 max-w-2xl mx-auto">Discover the advantages of partnering with a leader in Indian logistics.</p>
      </div>
      <WhyChooseUs />
      <OwnerProfile />
    </div>
  );
};

export default WhyChooseUsPage;

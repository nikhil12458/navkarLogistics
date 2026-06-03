import React from 'react';
import Testimonials from '../components/home/Testimonials';

const TestimonialsPage = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <div className="bg-[#001b3a] pt-20 pb-12 text-white text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Partner Testimonials</h1>
        <p className="text-lg text-slate-300 max-w-2xl mx-auto">Hear what industry leaders and our trusted clients say about working with Navkar Logistics.</p>
      </div>
      <Testimonials hideLink={true} />
    </div>
  );
};

export default TestimonialsPage;

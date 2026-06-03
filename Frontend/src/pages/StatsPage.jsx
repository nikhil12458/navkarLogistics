import React from 'react';
import Stats from '../components/home/Stats';

const StatsPage = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <div className="bg-[#001b3a] pt-20 pb-12 text-white text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Impact</h1>
        <p className="text-lg text-slate-300 max-w-2xl mx-auto">The numbers behind our pan-India logistics network and proven reliability.</p>
      </div>
      <Stats />
    </div>
  );
};

export default StatsPage;

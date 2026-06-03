import React from 'react';
import Fleet from '../components/home/Fleet';

const FleetPage = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <div className="bg-[#001b3a] pt-20 pb-12 text-white text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Fleet & Infrastructure</h1>
        <p className="text-lg text-slate-300 max-w-2xl mx-auto">A deep dive into the technology, vehicles, and hubs that power our pan-India network.</p>
      </div>
      <Fleet hideLink={true} />
      
      {/* Additional Fleet Content for Dedicated Page */}
      <section className="py-16 bg-white">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
           <h3 className="text-2xl font-bold text-[#001b3a] mb-8">Specialized Vehicles</h3>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 shadow-sm">
                <h4 className="text-xl font-bold text-[#f16322] mb-3">32 FT Containers</h4>
                <p className="text-slate-600">Our primary specialization, offering massive capacity for large-scale enterprise shipments across all states.</p>
             </div>
             <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 shadow-sm">
                <h4 className="text-xl font-bold text-[#f16322] mb-3">Refrigerated Trucks</h4>
                <p className="text-slate-600">Temperature-controlled vehicles ensuring your perishable goods arrive fresh and safe.</p>
             </div>
             <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 shadow-sm">
                <h4 className="text-xl font-bold text-[#f16322] mb-3">Flatbed Trailers</h4>
                <p className="text-slate-600">Perfect for heavy machinery, construction materials, and oversized cargo.</p>
             </div>
           </div>
         </div>
      </section>
    </div>
  );
};

export default FleetPage;

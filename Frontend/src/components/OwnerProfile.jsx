import React from 'react';
import { motion } from 'framer-motion';

const OwnerProfile = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 bg-slate-50 rounded-3xl p-8 md:p-12 shadow-sm border border-slate-100">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex-shrink-0"
          >
            <div className="w-64 h-64 md:w-80 md:h-80 relative rounded-full overflow-hidden border-8 border-white shadow-xl">
              <img 
                src="https://ik.imagekit.io/uvpva42cs/second-brain-images/ChatGPT%20Image%20Jun%204,%202026,%2011_17_32%20AM.png" 
                alt="Devender - Founder of Navkar Logistics" 
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex-1 text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#f16322]/10 text-[#f16322] font-semibold text-sm mb-4">
              Meet Our Founder
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#001b3a] mb-2">Devender</h2>
            <p className="text-lg font-medium text-slate-500 mb-6">Founder & CEO, Navkar Logistics</p>
            
            <p className="text-slate-600 leading-relaxed mb-6 text-lg">
              "At Navkar Logistics, our vision has always been to simplify freight movement across India. With years of hands-on experience in the transport sector, we've built a dedicated 32 FT container fleet that prioritizes safety, timeliness, and absolute reliability. Our commitment isn't just about moving goods—it's about driving your business forward."
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-[#001b3a]/10 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#001b3a]"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                </div>
                <div className="text-left">
                  <p className="text-sm text-slate-500 font-medium">Direct Contact</p>
                  <p className="text-[#001b3a] font-bold">+91 9817764717</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OwnerProfile;

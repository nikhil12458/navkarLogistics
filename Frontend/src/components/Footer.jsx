import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#001b3a] text-slate-300 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          <div className="col-span-1 lg:col-span-1">
             <div className="flex items-center gap-2 mb-6">
               <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white text-[#001b3a] font-bold text-xl">
                 N<span className="text-[#f16322]">A</span>
               </div>
               <div className="flex flex-col">
                 <span className="text-2xl font-black text-white leading-none tracking-tight">NAVKAR</span>
                 <span className="text-xl font-bold text-[#f16322] leading-none tracking-widest">LOGISTICS</span>
               </div>
             </div>
             <p className="text-sm text-slate-400 font-semibold mb-2">MOVING YOUR GOODS SAFELY & EFFICIENTLY</p>
             <p className="text-sm text-slate-400">TRANSPORTER, CONTRACTOR AND COMMISSION AGENT</p>
          </div>

          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="mt-1 bg-white/10 p-2 rounded-full"><Phone className="w-4 h-4 text-[#f16322]" /></div>
                <div>
                  <p className="font-semibold text-white">Devender</p>
                  <p>7988564717</p>
                  <p>9817764717</p>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <div className="bg-white/10 p-2 rounded-full"><Mail className="w-4 h-4 text-[#f16322]" /></div>
                <p>info@navkarlogistics.in</p>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Address</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="mt-1 bg-white/10 p-2 rounded-full"><MapPin className="w-4 h-4 text-[#f16322]" /></div>
                <div>
                  <p>Village Sidharwali, Near Rao Lal Singh Collage</p>
                  <p>Bilaspur Chowk</p>
                  <p>Pin : 122413</p>
                </div>
              </li>
            </ul>
          </div>

          <div>
             <h3 className="text-white font-semibold text-lg mb-4">Specialists In</h3>
             <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                <p className="text-[#f16322] font-bold text-lg mb-2">32 FT CONTAINER TRANSPORT</p>
                <ul className="space-y-2 text-sm text-slate-300">
                  <li>✓ सुरक्षित और समय पर डिलीवरी</li>
                  <li>✓ विश्वसनीय लॉजिस्टिक्स समाधान</li>
                  <li>✓ अखिल भारतीय सेवा</li>
                </ul>
             </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
          <p>© {new Date().getFullYear()} Navkar Logistics. All rights reserved.</p>
          <p>www.navkarlogistics.in</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

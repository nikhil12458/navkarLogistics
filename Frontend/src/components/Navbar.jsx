import React from 'react';
import { Link, useLocation } from 'react-router';
import { Button } from './ui/Button';

const Navbar = () => {
  const location = useLocation();
  const isActive = (path) => location.pathname === path ? "text-[#F97316]" : "text-slate-600 hover:text-[#1E40AF]";

  return (
    <nav className="sticky top-0 z-50 w-full bg-white border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center gap-2">
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#001b3a] text-white font-bold text-xl">
              N<span className="text-[#f16322]">L</span>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-black text-[#001b3a] leading-none tracking-tight">NAVKAR</span>
              <span className="text-xl font-bold text-[#f16322] leading-none tracking-widest">LOGISTICS</span>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-8 font-medium">
            <Link to="/" className={isActive('/')}>Home</Link>
            <Link to="/services" className={isActive('/services')}>Services</Link>
            <Link to="/fleet" className={isActive('/fleet')}>Fleet</Link>
            <Link to="/stats" className={isActive('/stats')}>Stats</Link>
            <Link to="/whyChooseUs" className={isActive('/whyChooseUs')}>Why Us</Link>
            <Link to="/testimonials" className={isActive('/testimonials')}>Testimonials</Link>
            <Link to="/contact" className={isActive('/contact')}>Contact</Link>
            <Link to="/contact">
              <Button className="bg-[#001b3a] hover:bg-[#001b3a]/90 text-white rounded-full">Get a Quote</Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

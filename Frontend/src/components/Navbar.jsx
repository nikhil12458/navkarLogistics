import React, { useState } from 'react';
import { Link, useLocation } from 'react-router';
import { Button } from './ui/Button';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const isActive = (path) => location.pathname === path ? "text-[#f16322]" : "text-slate-600 hover:text-[#001b3a]";
  const isActiveMobile = (path) => location.pathname === path ? "text-[#f16322] bg-[#f16322]/10" : "text-slate-600 hover:text-[#001b3a] hover:bg-slate-50";

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="sticky top-0 z-50 w-full bg-white border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center gap-2" onClick={closeMenu}>
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#001b3a] text-white font-bold text-xl">
              N<span className="text-[#f16322]">L</span>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-black text-[#001b3a] leading-none tracking-tight">NAVKAR</span>
              <span className="text-xl font-bold text-[#f16322] leading-none tracking-widest">LOGISTICS</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8 font-medium">
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

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#001b3a] hover:text-[#f16322] focus:outline-none transition-colors"
            >
              {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden bg-white border-b border-slate-200 overflow-hidden absolute w-full"
          >
            <div className="px-4 pt-2 pb-6 flex flex-col gap-2 shadow-lg">
              <Link to="/" onClick={closeMenu} className={`block px-4 py-3 rounded-lg font-medium transition-colors ${isActiveMobile('/')}`}>Home</Link>
              <Link to="/services" onClick={closeMenu} className={`block px-4 py-3 rounded-lg font-medium transition-colors ${isActiveMobile('/services')}`}>Services</Link>
              <Link to="/fleet" onClick={closeMenu} className={`block px-4 py-3 rounded-lg font-medium transition-colors ${isActiveMobile('/fleet')}`}>Fleet</Link>
              <Link to="/stats" onClick={closeMenu} className={`block px-4 py-3 rounded-lg font-medium transition-colors ${isActiveMobile('/stats')}`}>Stats</Link>
              <Link to="/whyChooseUs" onClick={closeMenu} className={`block px-4 py-3 rounded-lg font-medium transition-colors ${isActiveMobile('/whyChooseUs')}`}>Why Us</Link>
              <Link to="/testimonials" onClick={closeMenu} className={`block px-4 py-3 rounded-lg font-medium transition-colors ${isActiveMobile('/testimonials')}`}>Testimonials</Link>
              <Link to="/contact" onClick={closeMenu} className={`block px-4 py-3 rounded-lg font-medium transition-colors ${isActiveMobile('/contact')}`}>Contact</Link>
              <div className="px-4 mt-2">
                <Link to="/contact" onClick={closeMenu}>
                  <Button className="w-full bg-[#001b3a] hover:bg-[#001b3a]/90 text-white rounded-full h-12 text-lg">Get a Quote</Button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;

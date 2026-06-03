import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Card, CardContent } from '../components/ui/Card';
import { Button } from '../components/ui/Button';

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <div className="bg-[#001b3a] pt-20 pb-12 text-white text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
        <p className="text-lg text-slate-300 max-w-2xl mx-auto">Get in touch with Navkar Logistics for a quote or to request a callback.</p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Contact Info Cards */}
          <div className="lg:col-span-5 space-y-6">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.1 }}>
              <Card className="border-none shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-6 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#f16322]/10 flex items-center justify-center shrink-0">
                    <Mail className="text-[#f16322] w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-1">Email ID</p>
                    <p className="text-[#001b3a] font-medium text-lg">info@navkarlogistics.in</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.2 }}>
              <Card className="border-none shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-6 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#f16322]/10 flex items-center justify-center shrink-0">
                    <Phone className="text-[#f16322] w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-1">Contact Numbers</p>
                    <p className="text-[#001b3a] font-medium">Devender: +91 7988564717</p>
                    <p className="text-[#001b3a] font-medium">+91 9817764717</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.3 }}>
              <Card className="border-none shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-6 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#f16322]/10 flex items-center justify-center shrink-0">
                    <MapPin className="text-[#f16322] w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-1">Address</p>
                    <p className="text-[#001b3a] font-medium leading-relaxed">
                      Village Sidharwali, Near Rao Lal Singh Collage, <br />
                      Bilaspur Chowk, Pin : 122413
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.4 }}>
              <Card className="border-none shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-6 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#f16322]/10 flex items-center justify-center shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#f16322] w-6 h-6"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                  </div>
                  <div className="flex gap-4">
                    <a href="#" className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-[#001b3a] hover:bg-[#001b3a] hover:text-white transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-[#001b3a] hover:bg-[#001b3a] hover:text-white transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-[#001b3a] hover:bg-[#001b3a] hover:text-white transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
                    </a>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
              <Card className="h-full border-none shadow-lg">
                <CardContent className="p-8 md:p-12">
                  <h2 className="text-3xl font-bold text-[#001b3a] mb-2">Request a Callback</h2>
                  <p className="text-slate-500 mb-8">Fill out the form below and our logistics experts will get back to you shortly.</p>
                  
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-semibold text-slate-700">First Name</label>
                        <input type="text" className="w-full h-12 px-4 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#f16322]/50 focus:border-[#f16322]" placeholder="John" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-semibold text-slate-700">Last Name</label>
                        <input type="text" className="w-full h-12 px-4 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#f16322]/50 focus:border-[#f16322]" placeholder="Doe" />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-slate-700">Email Address</label>
                      <input type="email" className="w-full h-12 px-4 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#f16322]/50 focus:border-[#f16322]" placeholder="john@example.com" />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-slate-700">Phone Number</label>
                      <input type="tel" className="w-full h-12 px-4 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#f16322]/50 focus:border-[#f16322]" placeholder="+91 98765 43210" />
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-slate-700">Your Requirements</label>
                      <textarea className="w-full p-4 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#f16322]/50 focus:border-[#f16322] min-h-[150px]" placeholder="Tell us about your freight needs, container requirements, etc..."></textarea>
                    </div>
                    
                    <Button className="w-full h-14 text-lg font-semibold bg-[#001b3a] hover:bg-[#001b3a]/90 text-white rounded-xl">
                      Send Request <Send className="ml-2 w-5 h-5" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ContactPage;

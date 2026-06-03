import React from "react"
import { motion } from "framer-motion"
import { Button } from "../ui/Button"
import { ArrowRight, PhoneCall } from "lucide-react"
import { Link } from "react-router"

const Hero = () => {
  return (
    <section className="relative w-full min-h-[85vh] flex items-center justify-center overflow-hidden bg-slate-50">
      {/* Minimal Background */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida/AP1WRLuAEBTvsv0-Y_Y6fNc2uqZuPDXE9do4wXpblKlteVelwYvj_NpWXtHvxEcO_1eUt7vb7iPQYM5WKsH8r4S8IKBmhZz1M9jJ-bFQhhruzdonMFIunH9i8Lvi1EI_lJe_6GSGQAoolKf4jn_q7PIM91dFhXVDqLxMI_RR_3OZD3KbP6a-IEnCCyDTCJQqKpCrhdZU9y4Yd8Jae2dyvU8GSxs8atuQUVq1pSNg_fBcIa9uwmVDa2knFSHktA')" }}
      />
      
      {/* Decorative gradient accents based on visiting card */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#f16322]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 z-0" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#001b3a]/10 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4 z-0" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-12 pt-10">
        <div className="flex-1 text-left">
           <motion.div 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.6 }}
             className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#001b3a]/5 text-[#001b3a] font-semibold text-sm mb-6"
           >
             <span className="w-2 h-2 rounded-full bg-[#f16322] animate-pulse"></span>
             SPECIALISTS IN 32 FT CONTAINER TRANSPORT
           </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-[#001b3a]"
          >
            Moving Your Goods <br />
            <span className="text-[#f16322]">Safely & Efficiently.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl font-light text-slate-600 max-w-2xl mb-10"
          >
            Navkar Logistics provides pan-India reliable logistics solutions, ensuring secure and on-time delivery for all your freight needs.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-start gap-4"
          >
            <Link to="/contact" className="w-full sm:w-auto">
              <Button size="lg" className="w-full bg-[#001b3a] text-white hover:bg-[#001b3a]/90 font-semibold text-lg h-14 px-8 rounded-full shadow-lg">
                Get a Quote <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="w-full sm:w-auto bg-white text-[#001b3a] border-slate-200 hover:bg-slate-50 font-medium text-lg h-14 px-8 rounded-full shadow-sm">
              <PhoneCall className="mr-2 w-5 h-5 text-[#f16322]" /> 7988564717
            </Button>
          </motion.div>
        </div>

        <motion.div 
           initial={{ opacity: 0, x: 50 }}
           animate={{ opacity: 1, x: 0 }}
           transition={{ duration: 0.8, delay: 0.4 }}
           className="flex-1 w-full relative"
        >
           <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
             <img 
               src="https://lh3.googleusercontent.com/aida/AP1WRLuAEBTvsv0-Y_Y6fNc2uqZuPDXE9do4wXpblKlteVelwYvj_NpWXtHvxEcO_1eUt7vb7iPQYM5WKsH8r4S8IKBmhZz1M9jJ-bFQhhruzdonMFIunH9i8Lvi1EI_lJe_6GSGQAoolKf4jn_q7PIM91dFhXVDqLxMI_RR_3OZD3KbP6a-IEnCCyDTCJQqKpCrhdZU9y4Yd8Jae2dyvU8GSxs8atuQUVq1pSNg_fBcIa9uwmVDa2knFSHktA"
               alt="Navkar Logistics Truck"
               className="w-full h-auto object-cover"
             />
             <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-lg">
                <p className="text-[#001b3a] font-bold">Pan-India Service</p>
                <p className="text-sm text-slate-600">अखिल भारतीय सेवा</p>
             </div>
           </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero

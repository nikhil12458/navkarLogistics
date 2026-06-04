import React from "react"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Link } from "react-router"
import { Button } from "../ui/Button"

const Fleet = ({ hideLink = false }) => {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-sm font-semibold text-[#F97316] tracking-wider uppercase mb-2">Infrastructure</h2>
            <p className="text-4xl font-bold text-[#001b3a] mb-6">Our Advanced Fleet & Facilities</p>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Equipped with modern Indian heavy-duty trucks and high-tech distribution centers, our infrastructure is built to handle operations of any scale. We invest heavily in our fleet to ensure safety, reliability, and speed across every mile.
            </p>
            
            <ul className="space-y-4 mb-10">
              {["Over 150 active vehicles", "IoT-enabled real-time tracking", "Automated sorting at all major hubs", "Eco-friendly operational practices", "Dedicated 32 FT Container Fleet"].map((item, i) => (
                <li key={i} className="flex items-center text-slate-700 font-medium">
                  <div className="w-2 h-2 rounded-full bg-[#f16322] mr-3" />
                  {item}
                </li>
              ))}
            </ul>

            {!hideLink && (
              <Link to="/fleet">
                <Button size="lg" className="rounded-full bg-[#001b3a] hover:bg-[#001b3a]/90 text-white">
                  Explore Our Infrastructure <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            )}
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl"
          >
            <img 
              src="https://lh3.googleusercontent.com/aida/AP1WRLvQR7u0C-wpbDHvg2qJbDjMypetJqqGhvbLtJpaUrKs0PrzDHGM76W6AN9rRDUe60VSUTIM0U4RTY1SvPouh87GZnc8vvb89hJT7tUCTHA3V8dxVwRKzN97BsGiFLw3urOzNhpyb0NVrc-nvBPvyUuNS0ARTnjLVqEpExUNVsB1EBvhgYL_gk04C4nP775B6WoPTnwoWjyUTEqCWguAtWpvkiPGCw7i5vGl7cMbDjqlzonpKs16lsNbJs4"
              alt="Navkar Logistics Fleet at distribution center"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#001b3a]/80 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <p className="font-semibold text-lg">Central Distribution Hub</p>
              <p className="text-white/80 text-sm">Processing over 1M+ shipments daily.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Fleet

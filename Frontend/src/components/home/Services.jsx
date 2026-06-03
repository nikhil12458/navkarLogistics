import React from "react"
import { motion } from "framer-motion"
import { ArrowRight, Truck, Package, Layers, ShieldCheck, Clock, Navigation, Snowflake, HardHat, Globe } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/Card"
import { Link } from "react-router"
import { Button } from "../ui/Button"

const services = [
  { icon: <Truck className="w-8 h-8 text-[#001b3a]" />, title: "32 FT Container Transport", description: "Specialists in secure and timely 32 ft container transportation." },
  { icon: <Layers className="w-8 h-8 text-[#001b3a]" />, title: "Part Truck Load (PTL)", description: "Cost-effective shared transport for smaller freight." },
  { icon: <Package className="w-8 h-8 text-[#001b3a]" />, title: "Warehousing", description: "Smart storage solutions with inventory management." },
  { icon: <ShieldCheck className="w-8 h-8 text-[#001b3a]" />, title: "Supply Chain Solutions", description: "End-to-end management for complex logistics." },
  { icon: <Clock className="w-8 h-8 text-[#001b3a]" />, title: "Express Delivery", description: "Time-critical shipping for urgent cargo." },
  { icon: <Navigation className="w-8 h-8 text-[#001b3a]" />, title: "Freight Transportation", description: "Seamless multimodal transport network." },
  { icon: <Snowflake className="w-8 h-8 text-[#001b3a]" />, title: "Cold Chain Logistics", description: "Temperature-controlled transport for perishables." },
  { icon: <HardHat className="w-8 h-8 text-[#001b3a]" />, title: "Heavy Equipment", description: "Specialized movement for industrial machinery." },
  { icon: <Globe className="w-8 h-8 text-[#001b3a]" />, title: "Cross-Border Transport", description: "Reliable freight movement across international borders." },
]

const Services = ({ limit, hideLink = false }) => {
  const displayedServices = limit ? services.slice(0, limit) : services;

  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div className="max-w-2xl">
            <h2 className="text-sm font-semibold text-[#F97316] tracking-wider uppercase mb-2">Our Capabilities</h2>
            <p className="text-4xl font-bold text-[#001b3a] mb-4">Comprehensive Logistics Solutions</p>
            <p className="text-lg text-slate-600">Tailored services designed to optimize your supply chain and accelerate your business growth.</p>
          </div>
          {!hideLink && limit && (
            <div className="mt-6 md:mt-0">
              <Link to="/services">
                <Button variant="outline" className="rounded-full group text-[#001b3a] border-slate-200 hover:bg-slate-50">
                  Explore All Services <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedServices.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="h-full"
            >
              <Card className="h-full transition-all duration-300 hover:shadow-xl hover:border-[#001b3a]/30 cursor-pointer group">
                <CardHeader>
                  <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center mb-4 group-hover:bg-[#001b3a] transition-colors duration-300">
                    {React.cloneElement(service.icon, { className: "w-8 h-8 text-[#001b3a] group-hover:text-white transition-colors duration-300" })}
                  </div>
                  <CardTitle className="text-xl text-[#001b3a]">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                  <div className="mt-6 flex items-center text-sm font-semibold text-[#001b3a] group-hover:text-[#F97316] transition-colors">
                    Learn more <ArrowRight className="ml-1 w-4 h-4" />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services

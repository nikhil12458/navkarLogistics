import React from "react"
import { motion } from "framer-motion"
import { CheckCircle2 } from "lucide-react"

const features = [
  { title: "Unmatched Reliability", description: "99.8% on-time delivery rate across all operations." },
  { title: "Nationwide Coverage", description: "Reaching 28 states and over 15,000 PIN codes." },
  { title: "Tech-Driven Operations", description: "Real-time tracking and AI-powered route optimization." },
  { title: "24/7 Customer Support", description: "Dedicated teams available around the clock to assist you." },
]

const WhyChooseUs = () => {
  return (
    <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#1E40AF]/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold text-[#F97316] tracking-wider uppercase mb-2">The IndiBolt Advantage</h2>
          <p className="text-4xl font-bold mb-4">Why Industry Leaders Choose Us</p>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">We combine deep local expertise with world-class technology to deliver unparalleled logistics performance.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm hover:bg-white/10 transition-colors"
            >
              <CheckCircle2 className="w-10 h-10 text-[#F97316] mb-6" />
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-slate-400 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs

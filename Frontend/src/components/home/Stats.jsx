import React from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "../ui/Card"

const stats = [
  { value: "1M+", label: "Deliveries" },
  { value: "28", label: "States Covered" },
  { value: "500+", label: "Enterprise Clients" },
  { value: "10k+", label: "Fleet Size" },
  { value: "2M+", label: "SqFt Warehousing" },
  { value: "50+", label: "Logistics Hubs" },
  { value: "99%", label: "On-Time Delivery" },
  { value: "24/7", label: "Operations" },
]

const Stats = ({ limit }) => {
  const displayedStats = limit ? stats.slice(0, limit) : stats;

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold text-[#F97316] tracking-wider uppercase mb-2">Scale Without Limits</h2>
          <p className="text-3xl font-bold text-[#001b3a]">Trusted by India's Top Businesses</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {displayedStats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="border-none shadow-md hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-8 text-center">
                  <div className="text-4xl md:text-5xl font-bold text-[#001b3a] mb-2">{stat.value}</div>
                  <div className="text-sm md:text-base font-medium text-slate-500">{stat.label}</div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Stats

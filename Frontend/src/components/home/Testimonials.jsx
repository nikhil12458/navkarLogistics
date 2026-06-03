import React from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "../ui/Card"
import { Star, ArrowRight } from "lucide-react"
import { Link } from "react-router"
import { Button } from "../ui/Button"

const testimonials = [
  {
    quote: "Navkar Logistics completely transformed our supply chain. Their real-time tracking and reliable 32 FT container service cut our transit times by 20%.",
    author: "Rahul Sharma",
    role: "Supply Chain Director, TechCorp India",
  },
  {
    quote: "The level of professionalism and the scale of their operations is unmatched. We trust them with our most critical freight.",
    author: "Priya Desai",
    role: "Operations Head, Global Retail",
  },
  {
    quote: "Their warehousing solutions integrated seamlessly with our systems. A true technology partner in the logistics space.",
    author: "Amit Patel",
    role: "CEO, Innovate Manufacturing",
  },
  {
    quote: "Excellent service and pan-India coverage. We never have to worry about our goods reaching safely on time.",
    author: "Vikram Singh",
    role: "Logistics Manager, AutoParts Ltd.",
  },
  {
    quote: "The 24/7 customer support is a game-changer. Whenever we need an update, Navkar's team is there to assist us immediately.",
    author: "Sneha Reddy",
    role: "Director of Operations, FreshFoods",
  },
  {
    quote: "Cost-effective, secure, and incredibly reliable. Navkar Logistics is our go-to partner for all heavy equipment moves.",
    author: "Rohan Gupta",
    role: "Procurement Head, BuildTech Corp",
  }
]

const Testimonials = ({ limit, hideLink = false }) => {
  const displayedTestimonials = limit ? testimonials.slice(0, limit) : testimonials;

  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div className="text-left">
            <h2 className="text-sm font-semibold text-[#001b3a] tracking-wider uppercase mb-2">Testimonials</h2>
            <p className="text-4xl font-bold text-slate-900">What Our Partners Say</p>
          </div>
          {!hideLink && limit && (
            <div className="mt-6 md:mt-0">
              <Link to="/testimonials">
                <Button variant="outline" className="rounded-full group text-[#001b3a] border-slate-200 hover:bg-slate-50">
                  Read All Stories <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {displayedTestimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full bg-slate-50 border-none shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-8 flex flex-col h-full">
                  <div className="flex gap-1 mb-6">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-5 h-5 fill-[#F97316] text-[#F97316]" />
                    ))}
                  </div>
                  <p className="text-slate-700 italic flex-grow mb-8 text-lg">"{testimonial.quote}"</p>
                  <div>
                    <p className="font-semibold text-[#001b3a]">{testimonial.author}</p>
                    <p className="text-sm text-slate-500">{testimonial.role}</p>
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

export default Testimonials

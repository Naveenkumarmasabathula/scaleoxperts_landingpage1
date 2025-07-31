"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechFlow",
    content: "ScaleOxperts transformed our business. We doubled our leads within 3 months and our revenue increased by 150%. Their data-driven approach is exactly what we needed.",
    rating: 5
  },
  {
    name: "Michael Chen",
    role: "Marketing Director, GreenChain",
    content: "The team at ScaleOxperts is exceptional. They reduced our churn by 35% and helped us build a sustainable growth engine. Highly recommended!",
    rating: 5
  },
  {
    name: "Emily Rodriguez",
    role: "Founder, DataSync",
    content: "Working with ScaleOxperts was a game-changer. Their strategies are innovative and their execution is flawless. We've seen incredible ROI.",
    rating: 5
  },
  {
    name: "David Thompson",
    role: "VP Growth, CloudScale",
    content: "ScaleOxperts delivered results beyond our expectations. Their expertise in growth marketing is unmatched. They're now our trusted growth partner.",
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 sm:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              What Our Clients Say
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Don't just take our word for it. Here's what our clients have to say about their experience with ScaleOxperts.
            </p>
          </motion.div>
        </div>

        <div className="mx-auto mt-16 max-w-7xl">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {/* Video Testimonial */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-video rounded-lg bg-muted/50 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Quote className="w-8 h-8 text-primary" />
                  </div>
                  <p className="text-muted-foreground">Video Testimonial</p>
                  <p className="text-sm text-muted-foreground mt-2">Hear from our clients directly</p>
                </div>
              </div>
            </motion.div>

            {/* Testimonial Grid */}
            <div className="grid grid-cols-1 gap-6">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-background rounded-lg border p-6 shadow-sm"
                >
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <blockquote className="text-sm text-muted-foreground mb-4">
                    "{testimonial.content}"
                  </blockquote>
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Review Site Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-sm font-semibold text-muted-foreground mb-6">
            Rated 4.9/5 on review platforms
          </p>
          <div className="flex items-center justify-center gap-6">
            <div className="bg-background border rounded-lg px-4 py-2">
              <span className="text-sm font-medium">G2</span>
            </div>
            <div className="bg-background border rounded-lg px-4 py-2">
              <span className="text-sm font-medium">Clutch</span>
            </div>
            <div className="bg-background border rounded-lg px-4 py-2">
              <span className="text-sm font-medium">Capterra</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 
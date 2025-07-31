"use client";

import { motion } from "framer-motion";

const trustLogos = [
  "F3 FastFood",
  "GreenChain",
  "TechFlow",
  "DataSync",
  "CloudScale",
  "InnovateCorp"
];

export default function SocialProof() {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          {/* Trust Logos */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-sm font-semibold text-muted-foreground mb-8">
              Trusted by leading companies
            </p>
            
            <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-6">
              {trustLogos.map((logo, index) => (
                <motion.div
                  key={logo}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center justify-center"
                >
                  <div className="h-12 w-full bg-muted/50 rounded-lg flex items-center justify-center">
                    <span className="text-sm font-medium text-muted-foreground">
                      {logo}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Mini Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4"
          >
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">95%+</div>
              <div className="text-sm text-muted-foreground mt-1">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">60+</div>
              <div className="text-sm text-muted-foreground mt-1">Businesses Served</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">$2.5M+</div>
              <div className="text-sm text-muted-foreground mt-1">Revenue Generated</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">24/7</div>
              <div className="text-sm text-muted-foreground mt-1">Support Available</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 
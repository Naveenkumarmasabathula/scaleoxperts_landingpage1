"use client";

import { motion } from "framer-motion";
import { AnimatedCounter } from "@/components/ui/animated-counter";

// Company logos for ScaleOxperts social proof
const companyLogos = [
  "Microsoft",
  "Google", 
  "Amazon",
  "Netflix",
  "Spotify",
  "Slack",
  "Shopify",
  "Stripe"
];

export default function SocialProof() {
  return (
    <section className="py-16 sm:py-20 bg-background" style={{ backgroundColor: "hsl(var(--background))" }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-sm text-muted-foreground mb-8"
            >
              Trusted by industry leaders
            </motion.p>
          </motion.div>
          
          {/* Companies */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 lg:gap-16 px-4">
              {companyLogos.map((company, index) => (
                <motion.div
                  key={company}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-muted-foreground/60 hover:text-muted-foreground transition-colors duration-300"
                >
                  <span className="text-lg sm:text-xl font-semibold tracking-wide">
                    {company}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Impact Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
          >
            <motion.div 
              className="group"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="relative overflow-hidden rounded-xl bg-card/50 backdrop-blur-sm border border-border/50 p-6 text-center shadow-sm hover:shadow-lg transition-all duration-300 hover:border-primary/30">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative z-10">
                  <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-3">
                    <AnimatedCounter to={98} suffix="%" duration={2.5} />
                  </div>
                  <div className="text-sm font-semibold text-foreground tracking-wide mb-1">Client Satisfaction</div>
                  <div className="text-xs text-muted-foreground">Industry Leading</div>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="group"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="relative overflow-hidden rounded-xl bg-card/50 backdrop-blur-sm border border-border/50 p-6 text-center shadow-sm hover:shadow-lg transition-all duration-300 hover:border-primary/30">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative z-10">
                  <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-3">
                    <AnimatedCounter to={250} suffix="+" duration={2.8} />
                  </div>
                  <div className="text-sm font-semibold text-foreground tracking-wide mb-1">Businesses Scaled</div>
                  <div className="text-xs text-muted-foreground">Worldwide</div>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="group"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="relative overflow-hidden rounded-xl bg-card/50 backdrop-blur-sm border border-border/50 p-6 text-center shadow-sm hover:shadow-lg transition-all duration-300 hover:border-primary/30">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative z-10">
                  <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-3">
                    <AnimatedCounter to={15} prefix="$" suffix="M+" duration={3} />
                  </div>
                  <div className="text-sm font-semibold text-foreground tracking-wide mb-1">Revenue Generated</div>
                  <div className="text-xs text-muted-foreground">For Our Clients</div>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="group"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="relative overflow-hidden rounded-xl bg-card/50 backdrop-blur-sm border border-border/50 p-6 text-center shadow-sm hover:shadow-lg transition-all duration-300 hover:border-primary/30">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative z-10">
                  <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-3">
                    <AnimatedCounter to={24} suffix="/7" duration={2.2} />
                  </div>
                  <div className="text-sm font-semibold text-foreground tracking-wide mb-1">Expert Support</div>
                  <div className="text-xs text-muted-foreground">Always Available</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 
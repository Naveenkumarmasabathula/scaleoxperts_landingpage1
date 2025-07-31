"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden py-20 sm:py-32" style={{ backgroundColor: "hsl(var(--background))" }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
              Transform Your Business with{" "}
              <span className="text-primary">Data-Driven Growth</span>
            </h1>
            
            <p className="mt-6 text-lg leading-8 text-muted-foreground sm:text-xl">
              We help businesses double their leads and reduce churn by 30% through 
              proven growth marketing strategies that deliver measurable results.
            </p>

            <div className="mt-10 flex items-center justify-center gap-x-6">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative inline-flex items-center justify-center overflow-hidden rounded-lg bg-primary p-4 px-8 py-3 text-sm font-medium text-primary-foreground shadow-lg transition-all duration-300 hover:bg-primary/90"
              >
                Get Free Growth Plan
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </motion.button>
              
              <a
                href="#testimonials"
                className="text-sm font-semibold leading-6 text-muted-foreground hover:text-foreground transition-colors"
              >
                See Results <span aria-hidden="true">→</span>
              </a>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-3"
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">95%+</div>
              <div className="text-sm text-muted-foreground">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">60+</div>
              <div className="text-sm text-muted-foreground">Businesses Served</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">2.5x</div>
              <div className="text-sm text-muted-foreground">Average ROI</div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[calc(50%-4rem)] top-10 -z-10 transform-gpu blur-3xl sm:left-[calc(50%-18rem)] lg:left-48 lg:top-[calc(50%-30rem)] xl:left-[calc(50%-24rem)]">
          <div className="aspect-[1108/632] w-[69.25rem] bg-gradient-to-r from-primary/20 to-accent/20 opacity-20" />
        </div>
      </div>
    </section>
  );
}
"use client";

import { motion } from "framer-motion";
import { ArrowRight, Clock, CheckCircle } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="py-20 sm:py-32 bg-primary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Scarcity Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 bg-primary-foreground/10 text-primary-foreground px-4 py-2 rounded-full text-sm font-medium mb-8"
            >
              <Clock className="w-4 h-4" />
              Only 3 Free Audits Left This Month
            </motion.div>

            <h2 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl lg:text-5xl">
              Ready to Transform Your Business?
            </h2>
            
            <p className="mt-6 text-lg leading-8 text-primary-foreground/80 sm:text-xl">
              Join 60+ businesses that have already scaled their growth with our proven strategies. 
              Get your free consultation and growth plan today.
            </p>

            {/* Benefits List */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3"
            >
              <div className="flex items-center justify-center gap-2 text-primary-foreground/80">
                <CheckCircle className="w-5 h-5 text-primary-foreground" />
                <span className="text-sm">Free Growth Audit</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-primary-foreground/80">
                <CheckCircle className="w-5 h-5 text-primary-foreground" />
                <span className="text-sm">Custom Strategy Plan</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-primary-foreground/80">
                <CheckCircle className="w-5 h-5 text-primary-foreground" />
                <span className="text-sm">No Obligation</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative inline-flex items-center justify-center overflow-hidden rounded-lg bg-primary-foreground p-4 px-8 py-3 text-sm font-medium text-primary shadow-lg transition-all duration-300 hover:bg-primary-foreground/90"
              >
                Book Free Consultation
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </motion.button>
              
              <p className="text-sm text-primary-foreground/60">
                Takes only 15 minutes • No sales pitch
              </p>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="mt-12 flex items-center justify-center gap-8 text-primary-foreground/60"
            >
              <div className="text-center">
                <div className="text-2xl font-bold">95%+</div>
                <div className="text-xs">Satisfaction Rate</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">60+</div>
                <div className="text-xs">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">2.5x</div>
                <div className="text-xs">Average ROI</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 
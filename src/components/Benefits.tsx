"use client";

import { motion } from "framer-motion";
import { TrendingUp, Users, Target, Zap, Shield, BarChart3 } from "lucide-react";

const benefits = [
  {
    icon: TrendingUp,
    title: "Double Your Leads",
    description: "Our proven strategies consistently double lead generation within 90 days through targeted campaigns and optimization."
  },
  {
    icon: Users,
    title: "Reduce Churn by 30%",
    description: "Implement customer retention strategies that keep your customers engaged and loyal to your brand."
  },
  {
    icon: Target,
    title: "Increase Conversion Rates",
    description: "Optimize your funnel with data-driven insights to convert more visitors into paying customers."
  },
  {
    icon: Zap,
    title: "Faster Growth",
    description: "Accelerate your business growth with our rapid implementation and optimization processes."
  },
  {
    icon: Shield,
    title: "Risk-Free Results",
    description: "Our performance-based approach ensures you only pay for results that drive real business impact."
  },
  {
    icon: BarChart3,
    title: "Measurable ROI",
    description: "Track every dollar spent with comprehensive analytics and transparent reporting."
  }
];

export default function Benefits() {
  return (
    <section id="services" className="py-20 sm:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Why Choose ScaleOxperts?
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              We deliver measurable results that transform your business through data-driven strategies and proven methodologies.
            </p>
          </motion.div>
        </div>

        <div className="mx-auto mt-16 max-w-7xl">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative flex flex-col gap-6 rounded-lg border bg-background p-8 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <benefit.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">
                    {benefit.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <button className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3 rounded-md text-sm font-medium transition-colors">
            Explore Our Solutions
          </button>
        </motion.div>
      </div>
    </section>
  );
} 
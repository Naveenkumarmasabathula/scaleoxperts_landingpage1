"use client";

import { motion } from "framer-motion";
import { TrendingUp, Users, Target, Zap, Shield, BarChart3 } from "lucide-react";
import { cn } from "@/lib/utils";

const benefits = [
  {
    icon: <TrendingUp className="h-6 w-6" />,
    title: "Double Your Leads",
    description: "Our proven strategies consistently double lead generation within 90 days through targeted campaigns and optimization."
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: "Reduce Churn by 30%",
    description: "Implement customer retention strategies that keep your customers engaged and loyal to your brand."
  },
  {
    icon: <Target className="h-6 w-6" />,
    title: "Increase Conversion Rates",
    description: "Optimize your funnel with data-driven insights to convert more visitors into paying customers."
  },
  {
    icon: <Zap className="h-6 w-6" />,
    title: "Faster Growth",
    description: "Accelerate your business growth with our rapid implementation and optimization processes."
  },
  {
    icon: <Shield className="h-6 w-6" />,
    title: "Risk-Free Results",
    description: "Our performance-based approach ensures you only pay for results that drive real business impact."
  },
  {
    icon: <BarChart3 className="h-6 w-6" />,
    title: "Measurable ROI",
    description: "Track every dollar spent with comprehensive analytics and transparent reporting."
  }
];

// Feature component with hover effects
const Feature = ({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col py-10 px-8 relative group/feature bg-card border border-border rounded-lg shadow-sm hover:shadow-md transition-all duration-300",
        "hover:border-primary/20 hover:bg-card/80"
      )}
    >
      {/* Hover gradient overlay */}
      <div className="opacity-0 group-hover/feature:opacity-100 transition duration-300 absolute inset-0 h-full w-full bg-gradient-to-br from-primary/5 via-transparent to-primary/10 rounded-lg pointer-events-none" />
      
      {/* Icon */}
      <div className="mb-6 relative z-10 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 group-hover/feature:bg-primary/20 transition-colors duration-300">
        <div className="text-primary group-hover/feature:scale-110 transition-transform duration-300">
          {icon}
        </div>
      </div>
      
      {/* Content */}
      <div className="relative z-10">
        <div className="mb-3">
          <div className="absolute -left-2 top-0 h-6 group-hover/feature:h-8 w-1 rounded-full bg-border group-hover/feature:bg-primary transition-all duration-300" />
          <h3 className="text-lg font-semibold text-card-foreground group-hover/feature:text-primary group-hover/feature:translate-x-1 transition-all duration-300">
            {title}
          </h3>
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed group-hover/feature:text-card-foreground/80 transition-colors duration-300">
          {description}
        </p>
      </div>
    </div>
  );
};

export default function Benefits() {
  return (
    <section id="services" className="relative py-20 sm:py-32 overflow-hidden">
      {/* Background with gradient and pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/20 to-background" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--primary)/0.1),transparent_50%)] opacity-60" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,hsl(var(--primary)/0.08),transparent_50%)] opacity-40" />
      
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />
      
      {/* Top accent line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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

        {/* New Feature Section with Hover Effects */}
        <div className="mx-auto mt-16 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
            {benefits.map((benefit, index) => (
              <Feature key={benefit.title} {...benefit} index={index} />
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
          <a 
            href="https://scaleoxperts.com/services" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3 rounded-md text-sm font-medium transition-colors hover:shadow-lg transform hover:scale-105 transition-transform"
          >
            Explore Our Solutions
          </a>
        </motion.div>
      </div>
    </section>
  );
} 
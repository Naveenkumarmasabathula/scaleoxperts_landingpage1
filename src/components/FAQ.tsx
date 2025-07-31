"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, ChevronUp, ArrowRight } from "lucide-react";

const faqs = [
  {
    question: "How quickly can I expect to see results?",
    answer: "Most clients see initial improvements within 30-60 days, with significant results typically appearing within 90 days. We provide detailed reporting every month so you can track progress in real-time.",
    cta: "Let's discuss your timeline"
  },
  {
    question: "What makes ScaleOxperts different from other agencies?",
    answer: "We combine data science with creative strategy, focusing on measurable ROI. Unlike traditional agencies, we work on a performance-based model - you only pay for results that drive real business impact.",
    cta: "See our methodology"
  },
  {
    question: "Do you work with small businesses or only large companies?",
    answer: "We work with businesses of all sizes, from startups to enterprise companies. Our strategies are scalable and customized to your specific needs and budget constraints.",
    cta: "Check if we're a good fit"
  },
  {
    question: "What industries do you specialize in?",
    answer: "We have experience across multiple industries including SaaS, e-commerce, healthcare, and professional services. Our data-driven approach works regardless of your industry vertical.",
    cta: "View our case studies"
  },
  {
    question: "How do you measure success?",
    answer: "We track key metrics like lead generation, conversion rates, customer acquisition cost, and ROI. You'll receive comprehensive monthly reports showing exactly how your investment is performing.",
    cta: "Request a sample report"
  },
  {
    question: "What's included in your growth plan?",
    answer: "Our comprehensive growth plan includes market analysis, competitor research, strategy development, implementation roadmap, and ongoing optimization. We also provide training for your team.",
    cta: "Get your free growth plan"
  },
  {
    question: "Can you help with existing marketing campaigns?",
    answer: "Absolutely! We can audit your current campaigns, identify optimization opportunities, and enhance existing strategies. Many of our best results come from improving what's already working.",
    cta: "Audit your campaigns"
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 sm:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Frequently Asked Questions
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Get answers to the most common questions about our growth marketing services.
            </p>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-background rounded-lg border"
              >
                <button
                  className="flex w-full items-center justify-between p-6 text-left"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                  <span className="font-semibold text-foreground">{faq.question}</span>
                  {openIndex === index ? (
                    <ChevronUp className="h-5 w-5 text-muted-foreground" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-muted-foreground" />
                  )}
                </button>
                
                {openIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-6"
                  >
                    <p className="text-muted-foreground mb-4">{faq.answer}</p>
                    <button className="inline-flex items-center text-sm font-medium text-primary hover:text-primary/80 transition-colors">
                      {faq.cta} <ArrowRight className="ml-1 h-4 w-4" />
                    </button>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <p className="text-muted-foreground mb-4">
              Still have questions? We're here to help.
            </p>
            <button className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3 rounded-md text-sm font-medium transition-colors">
              Schedule a Free Consultation
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 
"use client"

import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Plus, Minus } from "lucide-react"

const faqs = [
  {
    question: "How quickly can I expect to see results?",
    answer: "Most clients see initial improvements within 30-60 days, with significant results typically appearing within 90 days. We provide detailed reporting every month so you can track progress in real-time."
  },
  {
    question: "What makes ScaleOxperts different from other agencies?",
    answer: "We combine data science with creative strategy, focusing on measurable ROI. Unlike traditional agencies, we work on a performance-based model - you only pay for results that drive real business impact."
  },
  {
    question: "What are your pricing options?",
    answer: "We offer flexible pricing models including project-based, retainer, and performance-based options. Our typical engagement ranges from $5K-$50K per month depending on scope. We always start with a free strategy session."
  },
  {
    question: "Do you work with small businesses or only large companies?",
    answer: "We work with businesses of all sizes, from startups to enterprise companies. Our strategies are scalable and customized to your specific needs and budget constraints."
  },
  {
    question: "What industries do you specialize in?",
    answer: "We have experience across multiple industries including SaaS, e-commerce, healthcare, fintech, and professional services. Our data-driven approach works regardless of your industry vertical."
  },
  {
    question: "How do you measure success?",
    answer: "We track key metrics like lead generation, conversion rates, customer acquisition cost, lifetime value, and ROI. You'll receive comprehensive monthly reports showing exactly how your investment is performing."
  },
  {
    question: "What's included in your growth plan?",
    answer: "Our comprehensive growth plan includes market analysis, competitor research, strategy development, implementation roadmap, and ongoing optimization. We also provide training for your team."
  },
  {
    question: "How do we get started working together?",
    answer: "It's simple! Book a free 30-minute strategy session where we'll analyze your current situation, identify opportunities, and create a custom growth roadmap. If it's a good fit, we can have you up and running within a week."
  }
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-20 sm:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Questions & Answers
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything you need to know about working with ScaleOxperts
            </p>
          </div>

          {/* FAQ Items */}
          <div className="space-y-1">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="border-b border-border/50 last:border-b-0"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full py-6 flex items-center justify-between text-left group hover:bg-muted/30 transition-colors duration-200 px-2"
                >
                  <h3 className="text-lg font-medium text-foreground group-hover:text-primary transition-colors duration-200 pr-8">
                    {faq.question}
                  </h3>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 45 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="flex-shrink-0"
                  >
                    <Plus className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors duration-200" />
                  </motion.div>
                </button>
                
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="pb-6 px-2">
                        <p className="text-muted-foreground leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
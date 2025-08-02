"use client"

import React from "react"
import { motion } from "framer-motion"
import { AboutTimeline } from "@/components/ui/about-timeline"
import { AboutTimelineItem } from "@/components/ui/about-timeline"
import { LiquidButton } from "@/components/ui/liquid-button"
import { Users, Target, Lightbulb, Trophy, Rocket, Heart, Globe, Award, ArrowRight, Play, BookOpen } from "lucide-react"

const aboutTimelineData: AboutTimelineItem[] = [
  {
    title: "The Vision is Born",
    description: "ScaleOxperts was founded with a mission to revolutionize growth marketing. Starting with a small team of passionate marketers and data scientists, we set out to bridge the gap between creative strategy and measurable results.",
    year: "2020",
    icon: Lightbulb,
    highlight: false
  },
  {
    title: "First Major Success",
    description: "Launched our proprietary growth framework and helped our first 50 clients achieve an average 300% ROI increase. Our data-driven approach quickly gained recognition in the industry.",
    year: "2021",
    metric: "300% ROI Increase",
    icon: Rocket,
    highlight: false
  },
  {
    title: "Team Growth & Expansion",
    description: "Expanded our team to 25+ growth experts and opened our second office. Developed specialized divisions for e-commerce, SaaS, and enterprise clients, allowing us to deliver more targeted solutions.",
    year: "2022",
    metric: "25+ Team Members",
    icon: Users,
    highlight: true
  },
  {
    title: "Global Market Reach",
    description: "Extended our services internationally, now serving clients across 15+ countries. Launched our advanced analytics platform that provides real-time insights and automated optimization recommendations.",
    year: "2023",
    metric: "15+ Countries",
    icon: Globe,
    highlight: false
  },
  {
    title: "Industry Recognition",
    description: "Won 'Top Growth Agency 2024' and received multiple industry awards for innovation and client results. Our case studies became benchmarks for growth marketing excellence.",
    year: "2024",
    metric: "5 Industry Awards",
    icon: Award,
    highlight: true
  },
  {
    title: "Future Innovation",
    description: "Pioneering AI-powered growth strategies and predictive analytics. Our vision is to make data-driven growth accessible to businesses of all sizes, transforming how companies scale in the digital age.",
    year: "2025",
    icon: Target,
    highlight: false
  }
]

export function AboutSection() {
  return (
    <section id="about" className="w-full bg-gradient-to-b from-background via-muted/20 to-background py-20">
      {/* Section Header */}
      <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6">
          <Heart className="w-4 h-4" />
          Our Story
        </div>
        
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-foreground via-foreground to-muted-foreground bg-clip-text text-transparent mb-6">
          Scaling Success, One Client at a Time
        </h2>
        
        <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
          From a bold vision to a trusted growth partner. Discover how ScaleOxperts has evolved 
          from startup dreams to industry leadership, delivering measurable results that transform businesses.
        </p>
      </div>

      {/* Timeline Component */}
      <AboutTimeline items={aboutTimelineData} />

      {/* Enhanced CTA Section with Liquid Button */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 mt-20">
        <div className="bg-gradient-to-br from-card/80 via-card/60 to-card/40 backdrop-blur-xl border border-border/30 rounded-3xl p-8 sm:p-12 relative overflow-hidden">
          {/* Background Decoration */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5 pointer-events-none" />
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/10 to-transparent rounded-bl-full pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-primary/8 to-transparent rounded-tr-full pointer-events-none" />
          
          <motion.div 
            className="relative z-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ 
              opacity: 1, 
              y: 0,
              transition: {
                duration: 0.8,
                ease: [0.25, 0.46, 0.45, 0.94]
              }
            }}
            animate={{
              y: [0, -8, 0],
              transition: {
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                repeatType: "reverse"
              }
            }}
            viewport={{ once: true }}
          >
            <motion.h3 
              className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ 
                opacity: 1, 
                y: 0,
                transition: {
                  duration: 0.6,
                  delay: 0.2,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }
              }}
              viewport={{ once: true }}
            >
              Ready to Scale Your Success?
            </motion.h3>
            <motion.p 
              className="text-muted-foreground mb-8 text-lg text-center max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ 
                opacity: 1, 
                y: 0,
                transition: {
                  duration: 0.6,
                  delay: 0.4,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }
              }}
              viewport={{ once: true }}
            >
              Join hundreds of businesses that have transformed their growth with ScaleOxperts. 
              Experience the platform that&apos;s revolutionizing how companies scale in the digital age.
            </motion.p>
            
            {/* Primary CTA with Liquid Button - Enhanced Floating Effect */}
            <motion.div 
              className="flex justify-center mb-8"
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              whileInView={{ 
                opacity: 1, 
                scale: 1,
                y: 0,
                transition: {
                  duration: 0.8,
                  delay: 0.6,
                  ease: [0.25, 0.46, 0.45, 0.94],
                  type: "spring",
                  stiffness: 100
                }
              }}
              animate={{
                y: [0, -12, 0],
                scale: [1, 1.02, 1],
                transition: {
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  repeatType: "reverse",
                  delay: 1
                }
              }}
              whileHover={{
                scale: 1.05,
                y: -5,
                transition: {
                  duration: 0.2,
                  ease: "easeOut"
                }
              }}
              viewport={{ once: true }}
            >
              <LiquidButton 
                variant="about" 
                size="xl"
                className="group font-semibold shadow-2xl hover:shadow-primary/20"
              >
                <Rocket className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                Start Your Growth Journey
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </LiquidButton>
            </motion.div>

            {/* Trust Indicators - Inside floating container */}
            <motion.div 
              className="pt-8 border-t border-border/20"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ 
                opacity: 1, 
                y: 0,
                transition: {
                  duration: 0.6,
                  delay: 0.8,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }
              }}
              viewport={{ once: true }}
            >
              <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-muted-foreground">
                <motion.div 
                  className="flex items-center gap-2"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ 
                    opacity: 1, 
                    x: 0,
                    transition: {
                      duration: 0.5,
                      delay: 1.0
                    }
                  }}
                  viewport={{ once: true }}
                >
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span>50,000+ Active Users</span>
                </motion.div>
                <div className="hidden sm:block w-px h-4 bg-border" />
                <motion.div 
                  className="flex items-center gap-2"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ 
                    opacity: 1, 
                    y: 0,
                    transition: {
                      duration: 0.5,
                      delay: 1.1
                    }
                  }}
                  viewport={{ once: true }}
                >
                  <Trophy className="w-4 h-4 text-yellow-500" />
                  <span>5 Industry Awards</span>
                </motion.div>
                <div className="hidden sm:block w-px h-4 bg-border" />
                <motion.div 
                  className="flex items-center gap-2"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ 
                    opacity: 1, 
                    x: 0,
                    transition: {
                      duration: 0.5,
                      delay: 1.2
                    }
                  }}
                  viewport={{ once: true }}
                >
                  <Globe className="w-4 h-4 text-blue-500" />
                  <span>15+ Countries</span>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

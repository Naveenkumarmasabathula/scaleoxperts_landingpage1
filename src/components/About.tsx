"use client";

import { motion } from "framer-motion";
import { Award, Users, Target } from "lucide-react";

const teamMembers = [
  {
    name: "Alex Chen",
    role: "Founder & CEO",
    image: "/team/alex.jpg"
  },
  {
    name: "Sarah Williams",
    role: "Head of Growth",
    image: "/team/sarah.jpg"
  },
  {
    name: "Mike Rodriguez",
    role: "Lead Strategist",
    image: "/team/mike.jpg"
  }
];

const awards = [
  "Top Growth Agency 2024",
  "Best ROI Performance",
  "Client Choice Award"
];

export default function About() {
  return (
    <section className="py-20 sm:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            {/* Company Intro */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                About ScaleOxperts
              </h2>
              <p className="mt-6 text-lg leading-8 text-muted-foreground">
                Founded in 2020, ScaleOxperts has been at the forefront of growth marketing innovation. 
                We combine data science with creative strategy to deliver results that transform businesses.
              </p>
              <p className="mt-4 text-base leading-7 text-muted-foreground">
                Our team of experts brings together decades of experience in digital marketing, 
                analytics, and business growth. We&apos;ve helped over 60 companies scale their operations 
                and achieve sustainable growth through our proven methodologies.
              </p>

              {/* Awards */}
              <div className="mt-8">
                <h3 className="text-lg font-semibold text-foreground mb-4">Awards & Recognition</h3>
                <div className="flex items-center gap-2 mb-4">
                  <Award className="w-5 h-5 text-primary" />
                  <span className="text-sm text-muted-foreground">Recognized for excellence</span>
                </div>
                <div className="space-y-2">
                  {awards.map((award) => (
                    <div key={award} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-sm text-muted-foreground">{award}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Team Photos */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold text-foreground mb-6">Our Leadership Team</h3>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
                {teamMembers.map((member, index) => (
                  <motion.div
                    key={member.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="text-center"
                  >
                    <div className="w-24 h-24 bg-muted/50 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <Users className="w-8 h-8 text-muted-foreground" />
                    </div>
                    <div className="font-semibold text-foreground">{member.name}</div>
                    <div className="text-sm text-muted-foreground">{member.role}</div>
                  </motion.div>
                ))}
              </div>

              {/* Mission Statement */}
              <div className="mt-8 p-6 bg-muted/30 rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                  <Target className="w-5 h-5 text-primary" />
                  <h4 className="font-semibold text-foreground">Our Mission</h4>
                </div>
                <p className="text-sm text-muted-foreground">
                  To empower businesses with data-driven growth strategies that deliver measurable, 
                  sustainable results and transform their market position.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
} 
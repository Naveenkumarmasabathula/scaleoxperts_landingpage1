"use client";
import React from "react";
import { TestimonialScroll } from "@/components/ui/testimonial-scroll-animation";

const testimonialData = [
  {
    name: "Sarah Johnson",
    role: "CEO",
    company: "TechFlow",
    content: "ScaleOxperts transformed our business. We doubled our leads within 3 months and our revenue increased by 150%. Their data-driven approach is exactly what we needed.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
  },
  {
    name: "Michael Chen",
    role: "Marketing Director",
    company: "GreenChain",
    content: "The team at ScaleOxperts is exceptional. They reduced our churn by 35% and helped us build a sustainable growth engine. Highly recommended!",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
  },
  {
    name: "Emily Rodriguez",
    role: "Founder",
    company: "DataSync",
    content: "Working with ScaleOxperts was a game-changer. Their strategies are innovative and their execution is flawless. We've seen incredible ROI.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
  },
  {
    name: "David Thompson",
    role: "VP Growth",
    company: "CloudScale",
    content: "ScaleOxperts delivered results beyond our expectations. Their expertise in growth marketing is unmatched. They're now our trusted growth partner.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
  },
  {
    name: "Lisa Thompson",
    role: "Marketing Director",
    company: "Growth Labs",
    content: "The analytics and insights provided have been game-changing for our marketing campaigns. ROI increased by 250%.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face"
  },
  {
    name: "James Wilson",
    role: "Founder",
    company: "Digital Ventures",
    content: "Outstanding product with exceptional value. The team behind this clearly understands what businesses need.",
    rating: 4,
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face"
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="w-full">
      <TestimonialScroll
        titleComponent={
          <div className="space-y-4">
            <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              What Our Clients Say
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Don&apos;t just take our word for it. Here&apos;s what our clients have to say about their experience with ScaleOxperts.
            </p>
          </div>
        }
        testimonials={testimonialData}
      />
    </section>
  );
} 
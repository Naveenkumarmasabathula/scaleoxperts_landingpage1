"use client";
import React, { useRef } from "react";
import { useScroll, useTransform, motion, MotionValue } from "framer-motion";
import { Star, Quote } from "lucide-react";
import Image from 'next/image';

export const TestimonialScroll = ({
  titleComponent,
  testimonials,
}: {
  titleComponent: string | React.ReactNode;
  testimonials: Array<{
    name: string;
    role: string;
    company: string;
    content: string;
    rating: number;
    avatar: string;
  }>;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
  });
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const scaleDimensions = () => {
    return isMobile ? [0.7, 0.9] : [1.05, 1];
  };

  const rotate = useTransform(scrollYProgress, [0, 1], [20, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], scaleDimensions());
  const translate = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <div
      className="h-[60rem] md:h-[80rem] flex items-center justify-center relative p-2 md:p-20 bg-gradient-to-b from-background to-muted/20"
      ref={containerRef}
    >
      <div
        className="py-10 md:py-40 w-full relative"
        style={{
          perspective: "1000px",
        }}
      >
        <TestimonialHeader translate={translate} titleComponent={titleComponent} />
        <TestimonialCard rotate={rotate} translate={translate} scale={scale} testimonials={testimonials} />
      </div>
    </div>
  );
};

export const TestimonialHeader = ({ translate, titleComponent }: { translate: MotionValue<number>; titleComponent?: React.ReactNode }) => {
  return (
    <motion.div
      style={{
        translateY: translate,
      }}
      className="max-w-5xl mx-auto text-center mb-16"
    >
      {titleComponent}
    </motion.div>
  );
};

export const TestimonialCard = ({
  rotate,
  scale,
  testimonials,
}: {
  rotate: MotionValue<number>;
  scale: MotionValue<number>;
  translate: MotionValue<number>;
  testimonials: Array<{
    name: string;
    role: string;
    company: string;
    content: string;
    rating: number;
    avatar: string;
  }>;
}) => {
  return (
    <motion.div
      style={{
        rotateX: rotate,
        scale,
        boxShadow:
          "0 0 #0000004d, 0 9px 20px #0000004a, 0 37px 37px #00000042, 0 84px 50px #00000026, 0 149px 60px #0000000a, 0 233px 65px #00000003",
      }}
      className="max-w-6xl -mt-12 mx-auto h-[30rem] md:h-[40rem] w-full border border-border/20 p-6 md:p-8 bg-card/95 backdrop-blur-sm rounded-3xl shadow-2xl"
    >
      <div className="h-full w-full overflow-hidden rounded-2xl bg-background/50 backdrop-blur-sm p-6 md:p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 h-full overflow-y-auto">
          {testimonials.map((testimonial, index) => (
            <TestimonialItem key={index} testimonial={testimonial} index={index} />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const TestimonialItem = ({ 
  testimonial, 
  index 
}: { 
  testimonial: {
    name: string;
    role: string;
    company: string;
    content: string;
    rating: number;
    avatar: string;
  };
  index: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="bg-card border border-border/10 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:scale-105 flex flex-col justify-between"
    >
      <div className="space-y-4">
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-4 h-4 ${
                i < testimonial.rating
                  ? "text-yellow-400 fill-yellow-400"
                  : "text-muted-foreground"
              }`}
            />
          ))}
        </div>
        
        <div className="relative">
          <Quote className="w-6 h-6 text-primary/20 absolute -top-2 -left-1" />
          <p className="text-sm md:text-base text-muted-foreground leading-relaxed pl-4">
            {testimonial.content}
          </p>
        </div>
      </div>
      
      <div className="flex items-center gap-3 mt-6 pt-4 border-t border-border/10">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center overflow-hidden">
          <Image
            src={testimonial.avatar}
            alt={testimonial.name}
            width={150}
            height={150}
            className="w-full h-full object-cover"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
              const fallback = target.parentElement?.querySelector('.fallback') as HTMLElement;
              if (fallback) fallback.classList.remove('hidden');
            }}
          />
          <div className="fallback hidden w-full h-full bg-primary/10 flex items-center justify-center text-xs font-medium text-primary">
            {testimonial.name.charAt(0).toUpperCase()}
          </div>
        </div>
        <div className="flex-1 min-w-0">
          <h4 className="font-semibold text-sm text-foreground truncate">
            {testimonial.name}
          </h4>
          <p className="text-xs text-muted-foreground truncate">
            {testimonial.role} at {testimonial.company}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

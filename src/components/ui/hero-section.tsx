"use client";

import { Button } from "@/components/ui/button";
import { FlipButton } from "@/components/ui/flip-button";
import { Badge } from "@/components/ui/badge";
import { ArrowRightIcon } from "lucide-react";
import { Glow } from "@/components/ui/glow";
import { cn } from "@/lib/utils";

interface HeroAction {
  text: string;
  href: string;
  icon?: React.ReactNode;
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link" | "glow";
  target?: "_blank";
}

interface HeroProps {
  badge?: {
    text: string;
    action: {
      text: string;
      href: string;
      target?: "_blank";
    };
  };
  title: string;
  description: string;
  actions: HeroAction[];
}

export function HeroSection({
  badge,
  title,
  description,
  actions,
}: HeroProps) {
  return (
    <section
      className={cn(
        "relative bg-background text-foreground py-16 sm:py-24 md:py-8 lg:py-10 px-4 sm:px-6 lg:px-8 overflow-hidden"
      )}
    >
      {/* Bottom Glow */}
      <Glow
        variant="bottom"
        className="animate-appear-zoom opacity-0 delay-500"
      />
      
      <div className="relative z-10 mx-auto max-w-container">
        <div className="flex flex-col items-center gap-8 sm:gap-12 lg:gap-16 text-center">
          {/* Badge with Animated Shiny Border */}
          {badge && (
            <div className="relative group cursor-pointer">
              {/* Animated shiny border */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary via-orange-500 to-primary rounded-full opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary via-orange-500 to-primary rounded-full opacity-0 group-hover:opacity-75 blur-sm transition duration-1000 group-hover:duration-200"></div>
              
              {/* Rotating shine effect */}
              <div className="absolute -inset-0.5 rounded-full overflow-hidden">
                <div className="absolute inset-0 bg-gradient-conic from-transparent via-white/20 to-transparent animate-spin" style={{animationDuration: '3s'}}></div>
              </div>
              
              <Badge variant="outline" className="relative animate-appear gap-2 px-4 py-2 text-sm bg-background/90 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20">
                <span className="text-muted-foreground font-medium">{badge.text}</span>
                <a href={badge.action.href} target={badge.action.target} className="flex items-center gap-1 text-primary hover:text-orange-500 transition-colors font-semibold">
                  {badge.action.text}
                  <ArrowRightIcon className="h-3 w-3 group-hover:translate-x-0.5 transition-transform" />
                </a>
              </Badge>
            </div>
          )}

          {/* Title */}
          <h1 className="relative z-10 inline-block animate-appear bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-4xl font-bold leading-tight text-transparent drop-shadow-2xl sm:text-5xl sm:leading-tight md:text-6xl md:leading-tight lg:text-7xl lg:leading-tight">
            {title}
          </h1>

          {/* Description */}
          <p className="relative z-10 max-w-2xl animate-appear text-lg font-medium text-muted-foreground opacity-0 delay-100 sm:text-xl lg:text-2xl leading-relaxed">
            {description}
          </p>

          {/* Actions */}
          <div className="relative z-10 flex justify-center gap-4 sm:gap-6">
            {actions.map((action, index) => {
              // Use FlipButton for the primary CTA (glow variant)
              if (action.variant === "glow") {
                return (
                  <FlipButton
                    key={index}
                    frontText={action.text}
                    backText="Let's Get Started!"
                    from="top"
                    className="h-11 px-8 py-3 text-base font-semibold rounded-md"
                    frontClassName="bg-gradient-to-r from-orange-400 to-orange-500 text-white shadow-lg"
                    backClassName="bg-gradient-to-r from-orange-500 to-orange-400 text-white shadow-lg"
                    icon={action.icon}
                    href={action.href}
                    target={action.target}
                  />
                );
              }
              
              // Use regular Button for secondary actions
              return (
                <Button key={index} variant={action.variant} size="lg" asChild>
                  <a href={action.href} target={action.target} className="flex items-center gap-2 px-8 py-3 text-base font-semibold">
                    {action.icon}
                    {action.text}
                  </a>
                </Button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
} 
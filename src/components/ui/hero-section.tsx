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
}

interface HeroProps {
  badge?: {
    text: string;
    action: {
      text: string;
      href: string;
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
          {/* Badge */}
          {badge && (
            <Badge variant="outline" className="animate-appear gap-2 px-4 py-2 text-sm">
              <span className="text-muted-foreground">{badge.text}</span>
              <a href={badge.action.href} className="flex items-center gap-1 hover:text-foreground transition-colors">
                {badge.action.text}
                <ArrowRightIcon className="h-3 w-3" />
              </a>
            </Badge>
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
          <div className="relative z-10 flex animate-appear justify-center gap-4 opacity-0 delay-300 sm:gap-6">
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
                    frontClassName="bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg hover:shadow-xl"
                    backClassName="bg-gradient-to-r from-purple-600 to-blue-500 text-white shadow-lg"
                    icon={action.icon}
                    href={action.href}
                  />
                );
              }
              
              // Use regular Button for secondary actions
              return (
                <Button key={index} variant={action.variant} size="lg" asChild>
                  <a href={action.href} className="flex items-center gap-2 px-8 py-3 text-base font-semibold">
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
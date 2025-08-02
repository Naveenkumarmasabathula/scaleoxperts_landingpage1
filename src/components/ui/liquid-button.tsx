'use client';

import * as React from 'react';
import { motion, type HTMLMotionProps } from 'framer-motion';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
  "relative inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium cursor-pointer overflow-hidden disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive [background:_linear-gradient(var(--liquid-button-color)_0_0)_no-repeat_calc(200%-var(--liquid-button-fill,0%))_100%/200%_var(--liquid-button-fill,0.2em)] hover:[--liquid-button-fill:100%] hover:[--liquid-button-delay:0.3s] [transition:_background_0.3s_var(--liquid-button-delay,0s),_color_0.3s_var(--liquid-button-delay,0s),_background-position_0.3s_calc(0.3s_-_var(--liquid-button-delay,0s))] focus:outline-none",
  {
    variants: {
      variant: {
        default:
          'text-primary hover:text-primary-foreground !bg-muted [--liquid-button-color:var(--primary)]',
        outline:
          'border !bg-background dark:!bg-input/30 dark:border-input [--liquid-button-color:var(--primary)]',
        secondary:
          'text-secondary hover:text-secondary-foreground !bg-muted [--liquid-button-color:var(--secondary)]',
        about:
          'text-foreground hover:text-white !bg-gradient-to-r !from-muted/80 !to-muted/60 hover:!from-primary/90 hover:!to-primary [--liquid-button-color:hsl(var(--primary))] border border-border/30 hover:border-primary/20 shadow-lg hover:shadow-primary/25 transition-all duration-300',
        ghost:
          'text-foreground hover:text-primary-foreground !bg-transparent [--liquid-button-color:var(--primary)] border border-border hover:border-primary/50',
      },
      size: {
        default: 'h-10 px-4 py-2 has-[>svg]:px-3',
        sm: 'h-9 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5',
        lg: 'h-12 rounded-xl px-8 has-[>svg]:px-6',
        xl: 'h-14 rounded-2xl px-10 text-base has-[>svg]:px-8',
        icon: 'size-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);

type LiquidButtonProps = HTMLMotionProps<'button'> &
  VariantProps<typeof buttonVariants> & {
    children: React.ReactNode;
  };

function LiquidButton({
  className,
  variant,
  size,
  children,
  ...props
}: LiquidButtonProps) {
  return (
    <motion.button
      whileTap={{ scale: 0.95 }}
      whileHover={{ scale: 1.02 }}
      transition={{ 
        type: "spring", 
        stiffness: 400, 
        damping: 17 
      }}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    >
      {children}
    </motion.button>
  );
}

export { LiquidButton, type LiquidButtonProps };

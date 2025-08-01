'use client';

import * as React from 'react';
import {
  type HTMLMotionProps,
  type Transition,
  type Variant,
  motion,
} from 'framer-motion';

import { cn } from '@/lib/utils';

type FlipDirection = 'top' | 'bottom' | 'left' | 'right';

type FlipButtonProps = HTMLMotionProps<'button'> & {
  frontText: string;
  backText: string;
  transition?: Transition;
  frontClassName?: string;
  backClassName?: string;
  from?: FlipDirection;
  neon?: boolean;
  icon?: React.ReactNode;
  href?: string;
  target?: '_blank' | '_self' | '_parent' | '_top';
};

const DEFAULT_SPAN_CLASS_NAME =
  'absolute inset-0 flex items-center justify-center rounded-lg';

function FlipButton({
  frontText,
  backText,
  transition = { type: 'spring', stiffness: 280, damping: 20 },
  className,
  frontClassName,
  backClassName,
  from = 'top',
  neon = true,
  icon,
  href,
  target,
  ...props
}: FlipButtonProps) {
  const isVertical = from === 'top' || from === 'bottom';
  const rotateAxis = isVertical ? 'rotateX' : 'rotateY';

  const frontOffset = from === 'top' || from === 'left' ? '50%' : '-50%';
  const backOffset = from === 'top' || from === 'left' ? '-50%' : '50%';

  const buildVariant = (
    opacity: number,
    rotation: number,
    offset: string | null = null,
  ): Variant => ({
    opacity,
    [rotateAxis]: rotation,
    ...(isVertical && offset !== null ? { y: offset } : {}),
    ...(!isVertical && offset !== null ? { x: offset } : {}),
  });

  const frontVariants = {
    initial: buildVariant(1, 0, '0%'),
    hover: buildVariant(0, 90, frontOffset),
  };

  const backVariants = {
    initial: buildVariant(0, 90, backOffset),
    hover: buildVariant(1, 0, '0%'),
  };

  const buttonContent = (
    <motion.button
      data-slot="flip-button"
      initial="initial"
      whileHover="hover"
      whileTap={{ scale: 0.95 }}
      className={cn(
        'relative group text-foreground mx-auto text-center rounded-full px-7 py-2.5 font-medium cursor-pointer perspective-[1000px] focus:outline-none',
        className,
      )}
      {...props}
    >

      
      <motion.span
        data-slot="flip-button-front"
        variants={frontVariants}
        transition={transition}
        className={cn(
          DEFAULT_SPAN_CLASS_NAME,
          'bg-transparent text-foreground',
          frontClassName,
        )}
      >
        <div className="flex items-center gap-2">
          {icon}
          {frontText}
        </div>
      </motion.span>
      <motion.span
        data-slot="flip-button-back"
        variants={backVariants}
        transition={transition}
        className={cn(
          DEFAULT_SPAN_CLASS_NAME,
          'bg-blue-500 text-white',
          backClassName,
        )}
      >
        <div className="flex items-center gap-2">
          {icon}
          {backText}
        </div>
      </motion.span>
      <span className="invisible">{frontText}</span>
    </motion.button>
  );

  // If href is provided, wrap in an anchor tag
  if (href) {
    return (
      <a href={href} target={target}>
        {buttonContent}
      </a>
    );
  }

  return buttonContent;
}

export { FlipButton, type FlipButtonProps, type FlipDirection }; 
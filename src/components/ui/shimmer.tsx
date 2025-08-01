"use client"

import { cn } from "@/lib/utils"

interface ShimmerProps {
  children: React.ReactNode
  className?: string
}

export function Shimmer({ children, className }: ShimmerProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden",
        className
      )}
    >
      {children}
      <div className="absolute inset-0 -translate-x-full animate-shimmer bg-gradient-to-r from-transparent via-white/20 to-transparent" />
    </div>
  )
}

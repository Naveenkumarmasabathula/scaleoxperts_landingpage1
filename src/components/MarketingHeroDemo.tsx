"use client"

import { HeroSection } from "@/components/ui/hero-section"
import { StarIcon } from "lucide-react"

export function MarketingHeroDemo() {
  return (
    <HeroSection
      badge={{
        text: "Limited Time Offer",
        action: {
          text: "Worth ₹6,999 - Now FREE!",
          href: "https://forms.gle/5r1kNbkm6wYMbusw7",
          target: "_blank",
        },
      }}
      title="Stop Losing Customers to Better Marketing"
      description="You're not losing customers because of your product. You're losing them because your competitor is marketing better & executing the right strategy. Let's fix that — FREE!"
      actions={[
        {
          text: "Claim Your Free Strategy Session",
          href: "https://forms.gle/5r1kNbkm6wYMbusw7",
          variant: "glow",
          target: "_blank",
          // icon: <StarIcon className="h-5 w-5" />,
        },
      ]}
    />
  )
} 
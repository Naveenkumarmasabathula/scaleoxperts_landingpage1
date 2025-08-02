"use client"

import React from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { Card, CardContent } from "./card"
import { Badge } from "./badge"
import { Users, Target, Lightbulb, Trophy, Rocket, Heart } from "lucide-react"

export interface AboutTimelineItem {
  title: string
  description: string
  year: string
  metric?: string
  icon?: React.ComponentType<{ className?: string }>
  highlight?: boolean
}

export interface AboutTimelineProps {
  items: AboutTimelineItem[]
  className?: string
}

const defaultIcons = [Users, Target, Lightbulb, Trophy, Rocket, Heart]

export function AboutTimeline({ items, className }: AboutTimelineProps) {
  if (!items || items.length === 0) {
    return (
      <div className={cn("w-full max-w-6xl mx-auto px-4 sm:px-6 py-12", className)}>
        <p className="text-center text-muted-foreground">No timeline items to display</p>
      </div>
    )
  }

  return (
    <section 
      className={cn("w-full max-w-6xl mx-auto px-4 sm:px-6 py-12", className)}
      role="region"
      aria-label="Our company journey and milestones"
    >
      <div className="relative">
        {/* Animated Background Line */}
        <div 
          className="absolute left-6 sm:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-border via-primary/20 to-border" 
          aria-hidden="true"
        />
        
        <motion.div
          className="absolute left-6 sm:left-8 top-0 w-0.5 bg-gradient-to-b from-primary via-primary/80 to-primary/40 origin-top"
          initial={{ scaleY: 0 }}
          whileInView={{ 
            scaleY: 1,
            transition: {
              duration: 2,
              ease: "easeOut",
              delay: 0.3
            }
          }}
          viewport={{ once: true }}
          aria-hidden="true"
        />

        <div className="space-y-8 sm:space-y-16 relative">
          {items.map((item, index) => {
            const IconComponent = item.icon || defaultIcons[index % defaultIcons.length]
            const isEven = index % 2 === 0
            
            return (
              <motion.div
                key={index}
                className={cn(
                  "relative group",
                  isEven ? "sm:pr-8" : "sm:pl-8 sm:ml-auto",
                  "max-w-full sm:max-w-[calc(50%-2rem)]"
                )}
                initial={{ 
                  opacity: 0, 
                  x: isEven ? -60 : 60,
                  y: 30 
                }}
                whileInView={{ 
                  opacity: 1, 
                  x: 0,
                  y: 0,
                  transition: {
                    duration: 0.7,
                    delay: index * 0.15,
                    ease: [0.25, 0.46, 0.45, 0.94]
                  }
                }}
                viewport={{ once: true, margin: "-50px" }}
                role="article"
                aria-label={`Milestone ${index + 1}: ${item.title} in ${item.year}`}
              >
                {/* Timeline Node */}
                <motion.div
                  className={cn(
                    "absolute top-8 w-4 h-4 rounded-full border-2 border-background shadow-lg z-10",
                    item.highlight ? "bg-primary border-primary/20" : "bg-card border-border",
                    isEven ? "sm:-right-2" : "sm:-left-2 left-4"
                  )}
                  whileHover={{ scale: 1.2 }}
                  transition={{ duration: 0.2 }}
                  aria-hidden="true"
                />

                {/* Content Card */}
                <motion.div
                  whileHover={{ y: -4, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="ml-12 sm:ml-0"
                >
                  <Card className={cn(
                    "border-2 transition-all duration-300 hover:shadow-xl relative overflow-hidden",
                    "bg-card/80 backdrop-blur-sm",
                    item.highlight 
                      ? "border-primary/30 shadow-primary/10" 
                      : "border-border/50 hover:border-primary/20",
                    "group-hover:shadow-2xl"
                  )}>
                    {/* Highlight Glow Effect */}
                    {item.highlight && (
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent pointer-events-none" />
                    )}
                    
                    <CardContent className="p-6 sm:p-8">
                      <div className="flex items-start gap-4 mb-4">
                        {/* Icon */}
                        <motion.div
                          className={cn(
                            "flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center",
                            item.highlight 
                              ? "bg-primary/10 text-primary" 
                              : "bg-muted text-muted-foreground"
                          )}
                          whileHover={{ rotate: 5 }}
                          transition={{ duration: 0.2 }}
                        >
                          <IconComponent className="w-6 h-6" />
                        </motion.div>

                        {/* Year Badge */}
                        <Badge 
                          className={cn(
                            "ml-auto text-xs font-bold tracking-wide",
                            item.highlight
                              ? "bg-primary/10 text-primary border-primary/20"
                              : "bg-muted/50 text-muted-foreground border-border"
                          )}
                        >
                          {item.year}
                        </Badge>
                      </div>

                      {/* Title */}
                      <motion.h3 
                        className="text-xl sm:text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300"
                        layoutId={`title-${index}`}
                      >
                        {item.title}
                      </motion.h3>
                      
                      {/* Description */}
                      <motion.p 
                        className="text-muted-foreground leading-relaxed mb-4 text-sm sm:text-base"
                        initial={{ opacity: 0.8 }}
                        whileHover={{ opacity: 1 }}
                      >
                        {item.description}
                      </motion.p>

                      {/* Metric */}
                      {item.metric && (
                        <motion.div
                          className={cn(
                            "inline-flex items-center px-3 py-1.5 rounded-full text-sm font-semibold",
                            item.highlight
                              ? "bg-primary/10 text-primary"
                              : "bg-muted/50 text-muted-foreground"
                          )}
                          whileHover={{ scale: 1.05 }}
                        >
                          <Trophy className="w-4 h-4 mr-2" />
                          {item.metric}
                        </motion.div>
                      )}
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
            )
          })}
        </div>

        {/* End Marker */}
        <motion.div
          className="absolute left-6 sm:left-8 -bottom-4 transform -translate-x-1/2"
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ 
            opacity: 1, 
            scale: 1,
            transition: {
              duration: 0.5,
              delay: items.length * 0.15 + 0.5,
              type: "spring",
              stiffness: 400
            }
          }}
          viewport={{ once: true }}
          aria-hidden="true"
        >
          <div className="w-4 h-4 bg-primary rounded-full shadow-lg border-2 border-background" />
        </motion.div>
      </div>
    </section>
  )
}

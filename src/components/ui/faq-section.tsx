"use client"

import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"
import { ChevronDown, MessageCircle, Zap, Shield, Users, Search, ArrowRight } from "lucide-react"

export interface FAQItem {
  id: string
  question: string
  answer: string
  category?: "general" | "pricing" | "technical" | "support"
  featured?: boolean
}

export interface FAQSectionProps {
  items: FAQItem[]
  className?: string
}

const categoryIcons = {
  general: MessageCircle,
  pricing: Zap,
  technical: Shield,
  support: Users,
}

const categoryColors = {
  general: "text-blue-500 bg-blue-50 dark:bg-blue-950/20",
  pricing: "text-green-500 bg-green-50 dark:bg-green-950/20",
  technical: "text-purple-500 bg-purple-50 dark:bg-purple-950/20",
  support: "text-orange-500 bg-orange-50 dark:bg-orange-950/20",
}

function FAQItem({ item, isOpen, onToggle }: { 
  item: FAQItem
  isOpen: boolean
  onToggle: () => void 
}) {
  const CategoryIcon = item.category ? categoryIcons[item.category] : MessageCircle
  const categoryStyle = item.category ? categoryColors[item.category] : categoryColors.general

  return (
    <motion.div
      layout
      className={cn(
        "border border-border/50 rounded-2xl overflow-hidden transition-all duration-300",
        "bg-card/50 backdrop-blur-sm hover:shadow-lg hover:border-primary/20",
        item.featured && "ring-2 ring-primary/20 border-primary/30",
        isOpen && "shadow-xl border-primary/40"
      )}
      whileHover={{ y: -2 }}
      transition={{ duration: 0.2 }}
    >
      <motion.button
        className="w-full p-6 sm:p-8 text-left focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-inset"
        onClick={onToggle}
        whileTap={{ scale: 0.98 }}
      >
        <div className="flex items-start gap-4">
          {/* Category Icon */}
          <div className={cn(
            "flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center",
            categoryStyle
          )}>
            <CategoryIcon className="w-5 h-5" />
          </div>

          {/* Question Content */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between gap-4">
              <h3 className={cn(
                "text-lg sm:text-xl font-semibold text-foreground leading-tight",
                item.featured && "text-primary"
              )}>
                {item.question}
              </h3>
              
              <motion.div
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="flex-shrink-0"
              >
                <ChevronDown className={cn(
                  "w-5 h-5 transition-colors",
                  isOpen ? "text-primary" : "text-muted-foreground"
                )} />
              </motion.div>
            </div>

            {/* Category Badge */}
            {item.category && (
              <div className="mt-2">
                <span className={cn(
                  "inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium",
                  categoryStyle
                )}>
                  {item.category.charAt(0).toUpperCase() + item.category.slice(1)}
                </span>
              </div>
            )}
          </div>
        </div>
      </motion.button>

      <AnimatePresence mode="wait">
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="overflow-hidden"
          >
            <div className="px-6 sm:px-8 pb-6 sm:pb-8">
              <div className="ml-14">
                <motion.p
                  initial={{ y: -10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.1, duration: 0.3 }}
                  className="text-muted-foreground leading-relaxed text-sm sm:text-base"
                >
                  {item.answer}
                </motion.p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export function FAQSection({ items, className }: FAQSectionProps) {
  const [openItems, setOpenItems] = useState<Set<string>>(new Set())
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState<string>("all")

  const toggleItem = (id: string) => {
    const newOpenItems = new Set(openItems)
    if (newOpenItems.has(id)) {
      newOpenItems.delete(id)
    } else {
      newOpenItems.add(id)
    }
    setOpenItems(newOpenItems)
  }

  const filteredItems = items.filter(item => {
    const matchesSearch = item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.answer.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "all" || item.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const categories = Array.from(new Set(items.map(item => item.category).filter(Boolean)))

  return (
    <section className={cn("w-full py-20 bg-gradient-to-b from-background via-muted/10 to-background", className)}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6">
            <MessageCircle className="w-4 h-4" />
            FAQ
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-foreground via-foreground to-muted-foreground bg-clip-text text-transparent mb-6">
            Questions & Answers
          </h2>
          
          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            Everything you need to know about working with ScaleOxperts. 
            From pricing and timelines to our proven growth methodology.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-12">
          <div className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
            {/* Search Bar */}
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search questions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all duration-200"
              />
            </div>

            {/* Category Filter */}
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-3 bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all duration-200 min-w-[140px]"
            >
              <option value="all">All Topics</option>
              {categories.map(category => (
                <option key={category} value={category}>
                  {category!.charAt(0).toUpperCase() + category!.slice(1)}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4 mb-16">
          <AnimatePresence mode="wait">
            {filteredItems.length > 0 ? (
              filteredItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <FAQItem
                    item={item}
                    isOpen={openItems.has(item.id)}
                    onToggle={() => toggleItem(item.id)}
                  />
                </motion.div>
              ))
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-12"
              >
                <MessageCircle className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground text-lg">
                  No questions found matching your search.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}

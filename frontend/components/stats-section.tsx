"use client"

import { useEffect, useRef, useState } from "react"

interface StatItem {
  value: string
  label: string
  color: string
}

const stats: StatItem[] = [
  { value: "5,000+", label: "Active Members", color: "text-primary" },
  { value: "200+", label: "Research Projects", color: "text-blue" },
  { value: "150+", label: "Events Hosted", color: "text-secondary" },
  { value: "50+", label: "Countries", color: "text-accent" },
]

interface AnimatedStatProps {
  stat: StatItem
  index: number
  isVisible: boolean
}

function AnimatedStat({ stat, index, isVisible }: AnimatedStatProps) {
  const [count, setCount] = useState(0)
  const [hasAnimated, setHasAnimated] = useState(false)
  const [justCompleted, setJustCompleted] = useState(false)
  const valueRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (isVisible && !hasAnimated) {
      setHasAnimated(true)
      
      // Extract number from value (e.g., "5,000+" -> 5000)
      const numericValue = parseInt(stat.value.replace(/[^0-9]/g, ""))
      const suffix = stat.value.replace(/[0-9,]/g, "") // Get the "+" or other suffix
      
      if (numericValue) {
        const duration = 2000 // 2 seconds
        const steps = 60
        const increment = numericValue / steps
        let current = 0
        const stepDuration = duration / steps

        const timer = setInterval(() => {
          current += increment
          if (current >= numericValue) {
            setCount(numericValue)
            setJustCompleted(true)
            clearInterval(timer)
            // Remove pulse class after animation completes
            setTimeout(() => setJustCompleted(false), 600)
          } else {
            setCount(Math.floor(current))
          }
        }, stepDuration)

        return () => clearInterval(timer)
      }
    }
  }, [isVisible, hasAnimated, stat.value])

  const formatCount = (num: number) => {
    const suffix = stat.value.replace(/[0-9,]/g, "")
    if (num >= 1000) {
      return num.toLocaleString() + suffix
    }
    return num.toString() + suffix
  }

  return (
    <div
      className={`text-center transition-all duration-1000 ease-out ${
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-8"
      }`}
      style={{
        transitionDelay: `${index * 150}ms`,
      }}
    >
      <div
        ref={valueRef}
        className={`text-3xl md:text-4xl font-display font-bold ${stat.color} mb-2 transition-all duration-500 ${
          isVisible ? "scale-100" : "scale-90"
        } ${justCompleted ? "animate-pulse-once" : ""}`}
      >
        {hasAnimated ? formatCount(count) : "0"}
      </div>
      <div 
        className={`text-sm text-muted-foreground transition-opacity duration-500 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
        style={{
          transitionDelay: `${index * 150 + 300}ms`,
        }}
      >
        {stat.label}
      </div>
    </div>
  )
}

export function StatsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const currentRef = sectionRef.current
    if (!currentRef) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
          }
        })
      },
      {
        threshold: 0.2, // Trigger when 20% of the section is visible
        rootMargin: "0px 0px -100px 0px", // Start animation slightly before fully in view
      }
    )

    observer.observe(currentRef)

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [])

  return (
    <section className="bg-white border-b py-8 -mt-12 relative z-20">
      <div className="container">
        <div ref={sectionRef} className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <AnimatedStat
              key={stat.label}
              stat={stat}
              index={index}
              isVisible={isVisible}
            />
          ))}
        </div>
      </div>
    </section>
  )
}


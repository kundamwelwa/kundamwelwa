"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { Button } from "@/frontend/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/frontend/components/ui/card"
import { Heart, TrendingUp, ArrowRight, Target, Lightbulb } from "lucide-react"

const missionVisionData = [
  {
    title: "Our Mission",
    description:
      "To create a vibrant, collaborative platform that connects biomedical professionals, fosters knowledge sharing, and accelerates innovation in healthcare and research. We empower our community to make meaningful contributions to global health.",
    icon: Heart,
    color: "text-primary",
    bgColor: "bg-primary/10",
    borderColor: "border-primary/20",
    hoverBorderColor: "group-hover:border-primary/40",
    gradient: "from-primary/5 to-primary/10",
  },
  {
    title: "Our Vision",
    description:
      "To be the leading global network where biomedical professionals collaborate, innovate, and transform healthcare. We envision a world where every breakthrough in biomedical science is accessible and every professional is connected.",
    icon: TrendingUp,
    color: "text-blue",
    bgColor: "bg-blue/10",
    borderColor: "border-blue/20",
    hoverBorderColor: "group-hover:border-blue/40",
    gradient: "from-blue/5 to-blue/10",
  },
]

export function MissionVisionSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

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
        threshold: 0.1,
        rootMargin: "0px 0px -100px 0px",
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
    <section ref={sectionRef} className="bg-muted/30 py-20 md:py-28 relative overflow-hidden">
      {/* Decorative background pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 20px, currentColor 20px, currentColor 21px)`,
          }}
        />
      </div>

      <div className="container relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm mb-6 shadow-sm border border-primary/20 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <Target className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-dark">Our Foundation</span>
          </div>
          <h2
            className={`font-display text-4xl md:text-5xl font-bold text-dark mb-4 transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Mission & Vision
          </h2>
          <p
            className={`text-lg text-muted-foreground max-w-2xl mx-auto transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Our commitment to advancing biomedical science through collaboration and innovation
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {missionVisionData.map((item, index) => {
            const Icon = item.icon
            return (
              <Card
                key={item.title}
                className={`group relative overflow-hidden border-2 ${item.borderColor} ${item.hoverBorderColor} transition-all duration-700 ease-out ${
                  isVisible
                    ? "opacity-100 translate-y-0 scale-100"
                    : "opacity-0 translate-y-12 scale-95"
                } hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2`}
                style={{
                  transitionDelay: `${index * 150 + 400}ms`,
                }}
              >
                {/* Gradient Background on Hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />

                {/* Content */}
                <div className="relative z-10">
                  <CardHeader className="pb-4">
                    <div
                      className={`h-20 w-20 rounded-2xl ${item.bgColor} flex items-center justify-center mb-6 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-lg`}
                    >
                      <Icon className={`h-10 w-10 ${item.color} transition-transform duration-500 group-hover:scale-110`} />
                    </div>
                    <CardTitle className="font-display text-3xl text-dark mb-2 group-hover:text-primary transition-colors duration-300">
                      {item.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed text-lg mb-6">
                      {item.description}
                    </p>
                    <Button
                      asChild
                      variant="ghost"
                      className="group/button transition-all duration-300 font-medium"
                    >
                      <Link href="/about" className="flex items-center">
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover/button:translate-x-1" />
                      </Link>
                    </Button>
                  </CardContent>
                </div>

                {/* Decorative corner accent */}
                <div
                  className={`absolute top-0 right-0 w-32 h-32 ${item.bgColor} rounded-bl-full opacity-0 group-hover:opacity-20 transition-opacity duration-500 transform translate-x-8 -translate-y-8`}
                />
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}


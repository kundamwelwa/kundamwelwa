"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { Button } from "@/frontend/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/frontend/components/ui/card"
import { Users, Calendar, BookOpen, Microscope, ArrowRight } from "lucide-react"

const quickLinks = [
  {
    title: "Community",
    description: "Connect with professionals worldwide and build meaningful relationships",
    href: "/community",
    icon: Users,
    color: "text-blue",
    bgColor: "bg-blue/10",
    borderColor: "border-blue/20",
    hoverBorderColor: "group-hover:border-blue/40",
    gradient: "from-blue/5 to-blue/10",
  },
  {
    title: "Events",
    description: "Join upcoming events, webinars, and conferences in your field",
    href: "/events",
    icon: Calendar,
    color: "text-primary",
    bgColor: "bg-primary/10",
    borderColor: "border-primary/20",
    hoverBorderColor: "group-hover:border-primary/40",
    gradient: "from-primary/5 to-primary/10",
  },
  {
    title: "Library",
    description: "Access resources, research papers, webinars, and educational content",
    href: "/library",
    icon: BookOpen,
    color: "text-secondary",
    bgColor: "bg-secondary/10",
    borderColor: "border-secondary/20",
    hoverBorderColor: "group-hover:border-secondary/40",
    gradient: "from-secondary/5 to-secondary/10",
  },
  {
    title: "Research Hub",
    description: "Explore ongoing research projects and collaborate with researchers",
    href: "/research",
    icon: Microscope,
    color: "text-accent",
    bgColor: "bg-accent/10",
    borderColor: "border-accent/20",
    hoverBorderColor: "group-hover:border-accent/40",
    gradient: "from-accent/5 to-accent/10",
  },
]

interface QuickLinkCardProps {
  link: typeof quickLinks[0]
  index: number
  isVisible: boolean
}

function QuickLinkCard({ link, index, isVisible }: QuickLinkCardProps) {
  const Icon = link.icon

  return (
    <Card
      className={`group relative overflow-hidden border-2 ${link.borderColor} ${link.hoverBorderColor} transition-all duration-500 ease-out ${
        isVisible
          ? "opacity-100 translate-y-0 scale-100"
          : "opacity-0 translate-y-12 scale-95"
      } hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2`}
      style={{
        transitionDelay: `${index * 100}ms`,
      }}
    >
      {/* Gradient Background on Hover */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${link.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
      />
      
      {/* Content */}
      <div className="relative z-10">
        <CardHeader className="pb-4">
          <div
            className={`h-20 w-20 rounded-2xl ${link.bgColor} flex items-center justify-center mb-6 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-lg`}
          >
            <Icon className={`h-10 w-10 ${link.color} transition-transform duration-500 group-hover:scale-110`} />
          </div>
          <CardTitle className="font-display text-2xl text-dark mb-2 group-hover:text-primary transition-colors duration-300">
            {link.title}
          </CardTitle>
          <CardDescription className="text-base leading-relaxed text-muted-foreground">
            {link.description}
          </CardDescription>
        </CardHeader>
        <CardContent className="pt-0">
          <Button
            asChild
            variant="ghost"
            className="w-full group-hover:bg-primary/10 group-hover:text-primary transition-all duration-300 font-medium"
          >
            <Link href={link.href} className="flex items-center justify-center">
              Explore
              <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </Button>
        </CardContent>
      </div>

      {/* Decorative corner accent */}
      <div
        className={`absolute top-0 right-0 w-32 h-32 ${link.bgColor} rounded-bl-full opacity-0 group-hover:opacity-20 transition-opacity duration-500 transform translate-x-8 -translate-y-8`}
      />
    </Card>
  )
}

export function QuickLinksSection() {
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
        threshold: 0.1, // Trigger when 10% of the section is visible
        rootMargin: "0px 0px -50px 0px",
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
    <section className="container py-20">
      <div className="text-center mb-16">
        <h2
          className={`font-display text-4xl md:text-5xl font-bold text-dark mb-4 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Explore Our Platform
        </h2>
        <p
          className={`text-lg text-muted-foreground max-w-2xl mx-auto transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Discover the tools and resources designed to help you connect, learn, and grow
        </p>
      </div>

      <div ref={sectionRef} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {quickLinks.map((link, index) => (
          <QuickLinkCard key={link.href} link={link} index={index} isVisible={isVisible} />
        ))}
      </div>
    </section>
  )
}


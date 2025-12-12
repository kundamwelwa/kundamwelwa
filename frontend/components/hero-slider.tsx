"use client"

import { useEffect, useState, useCallback } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/frontend/components/ui/button"
import { Sparkles, ChevronLeft, ChevronRight } from "lucide-react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/frontend/components/ui/carousel"

// Hero slide data - dynamically load images from hero-slider-images folder
// You can add more images by adding them to public/images/hero-slider-images/
// and updating this array. Images should be named: slide-1.jpg, slide-2.jpg, etc.
const heroSlides = [
  {
    id: 1,
    image: "/images/hero-slider-images/hero-image.jpg",
    alt: "Biomedical Research Collaboration",
  },
  {
    id: 2,
    image: "/images/hero-slider-images/hero-image1.avif",
    alt: "Healthcare Innovation",
  },
  {
    id: 3,
    image: "/images/hero-slider-images/hero-image3.jpg",
    alt: "Medical Professional Network",
  },
  {
    id: 4,
    image: "/images/hero-slider-images/hero-image4.png",
    alt: "Biomedical Research Lab",
  },
].filter((slide) => {
  // Filter out slides if images don't exist (optional - remove this if you want to show placeholders)
  // For now, we'll keep all slides and handle errors gracefully
  return true
})

export function HeroSlider() {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    if (!api) {
      return
    }

    setCurrent(api.selectedScrollSnap())

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap())
    })
  }, [api])

  // Auto-play functionality with progress tracking
  useEffect(() => {
    if (!api || !isAutoPlaying) {
      setProgress(0)
      return
    }

    setProgress(0) // Reset progress when slide changes

    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          return 0
        }
        return prev + 2 // Increment by 2% every 100ms (5 seconds total)
      })
    }, 100)

    const slideInterval = setInterval(() => {
      if (api.canScrollNext()) {
        api.scrollNext()
      } else {
        api.scrollTo(0) // Loop back to start
      }
    }, 20000) // Change slide every 5 seconds

    return () => {
      clearInterval(progressInterval)
      clearInterval(slideInterval)
    }
  }, [api, isAutoPlaying, current])

  const scrollTo = useCallback(
    (index: number) => {
      api?.scrollTo(index)
      setIsAutoPlaying(false) // Pause auto-play when user manually navigates
      setTimeout(() => setIsAutoPlaying(true), 10000) // Resume after 10 seconds
    },
    [api]
  )

  const scrollPrev = useCallback(() => {
    api?.scrollPrev()
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }, [api])

  const scrollNext = useCallback(() => {
    api?.scrollNext()
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }, [api])

  return (
    <section className="relative min-h-[600px] md:min-h-[700px] flex items-center overflow-hidden bg-white">
      <Carousel
        setApi={setApi}
        opts={{
          align: "start",
          loop: true,
          duration: 50, // Smooth transition duration
        }}
        className="w-full h-full absolute inset-0"
      >
        <CarouselContent className="h-full">
          {heroSlides.map((slide, index) => (
            <CarouselItem key={slide.id} className="h-full relative">
              {/* Background Image */}
              <div className="absolute inset-0">
                <Image
                  src={slide.image}
                  alt={slide.alt}
                  fill
                  className={`object-cover transition-opacity duration-1000 ${
                    current === index ? "opacity-100" : "opacity-0"
                  }`}
                  priority={index === 0}
                  quality={90}
                  onError={(e) => {
                    // Fallback to a placeholder or default image if image fails to load
                    const target = e.target as HTMLImageElement
                    target.src = "/images/hero-image.jpg" // Fallback to original hero image
                  }}
                />
                {/* Animated Gradient Overlay */}
                <div className="absolute inset-0 gradient-blend">
                  {/* Additional animated overlay for depth */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-blue/5 animate-pulse-slow" />
                </div>
              </div>

              {/* Hero Content - Same for all slides */}
              <div className="container relative z-10 h-full flex items-center py-20 md:py-32">
                <div className="max-w-4xl mx-auto text-center">
                  <div
                    className={`inline-flex items-center gap-2 px-4 py-2 rounded-full glass-effect mb-6 transition-all duration-1000 ${
                      current === index
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-4"
                    }`}
                    style={{ transitionDelay: "200ms" }}
                  >
                    <Sparkles className="h-4 w-4 text-primary" />
                    <span className="text-sm font-medium text-dark">
                      Connecting Biomedical Professionals Worldwide
                    </span>
                  </div>
                  <h1
                    className={`font-display text-5xl md:text-7xl font-bold mb-6 text-dark transition-all duration-1000 ${
                      current === index
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-8"
                    }`}
                    style={{ transitionDelay: "400ms" }}
                  >
                    BIOMED CONNECT
                  </h1>
                  <p
                    className={`text-xl md:text-2xl text-dark mb-8 max-w-2xl mx-auto leading-relaxed transition-all duration-1000 ${
                      current === index
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-8"
                    }`}
                    style={{ transitionDelay: "600ms" }}
                  >
                    Empowering biomedical professionals to transform healthcare
                    through collaboration, innovation, and knowledge sharing
                  </p>
                  <div
                    className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 ${
                      current === index
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-8"
                    }`}
                    style={{ transitionDelay: "800ms" }}
                  >
                    <Button asChild size="lg" className="text-lg px-8 h-14">
                      <Link href="/membership">Join Now - $2/month</Link>
                    </Button>
                    <Button
                      asChild
                      variant="outline"
                      size="lg"
                      className="text-lg px-8 h-14 border-2 border-dark"
                    >
                      <Link href="/about">Learn More</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Navigation Arrows */}
        <button
          onClick={scrollPrev}
          className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 h-12 w-12 rounded-full bg-white/90 backdrop-blur-sm hover:bg-white shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 group"
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-6 w-6 text-dark group-hover:text-primary transition-colors" />
        </button>
        <button
          onClick={scrollNext}
          className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 h-12 w-12 rounded-full bg-white/90 backdrop-blur-sm hover:bg-white shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 group"
          aria-label="Next slide"
        >
          <ChevronRight className="h-6 w-6 text-dark group-hover:text-primary transition-colors" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                current === index
                  ? "w-8 bg-primary"
                  : "w-2 bg-white/60 hover:bg-white/80"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Progress Bar */}
        {isAutoPlaying && (
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20 z-20 overflow-hidden">
            <div
              className="h-full bg-primary transition-all duration-100 ease-linear"
              style={{
                width: `${progress}%`,
              }}
            />
          </div>
        )}
      </Carousel>
    </section>
  )
}


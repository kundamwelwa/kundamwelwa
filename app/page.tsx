import Link from "next/link"
import { Button } from "@/frontend/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/frontend/components/ui/card"
import { Heart, ArrowRight, TrendingUp } from "lucide-react"
import { StatsSection } from "@/frontend/components/stats-section"
import { QuickLinksSection } from "@/frontend/components/quick-links-section"
import { HeroSlider } from "@/frontend/components/hero-slider"
import { MissionVisionSection } from "@/frontend/components/mission-vision-section"

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Slider Section */}
      <HeroSlider />

      {/* Stats Bar */}
      <StatsSection />

      {/* Mission & Vision */}
      <MissionVisionSection />

      {/* Quick Links */}
      <QuickLinksSection />

      {/* CTA Section with Fixed Background */}
      <section className="relative min-h-[600px] md:min-h-[700px] flex items-center overflow-hidden">
        {/* Fixed Background Image - only visible when section is in view */}
        <div
          className="absolute inset-0 fixed-bg"
          style={{
            backgroundImage: 'url(/images/hero-image100.avif)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-dark/95 via-dark/80 to-dark/60"></div>
        </div>

        {/* Content */}
        <div className="container relative z-10 text-center py-20 md:py-32">
          <div className="max-w-3xl mx-auto text-white">
            <div className="glass-effect-dark rounded-3xl p-8 md:p-12 backdrop-blur-xl">
              <div className="h-20 w-20 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6">
                <Heart className="h-10 w-10 text-primary" />
              </div>
              <h2 className="font-display text-4xl md:text-6xl font-bold mb-6">
                Join Our Community Today
              </h2>
              <p className="text-xl mb-8 text-white/90 leading-relaxed">
                Become part of a global network of biomedical professionals. Access exclusive resources,
                attend events, and connect with peers who share your passion for advancing healthcare.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" variant="secondary" className="text-lg px-8 h-14">
                  <Link href="/membership">Get Started - $2/month</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="text-lg px-8 h-14 border-white text-dark hover:bg-white hover:text-dark">
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

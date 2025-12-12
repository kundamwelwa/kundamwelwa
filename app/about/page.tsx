import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/frontend/components/ui/card"
import { Button } from "@/frontend/components/ui/button"
import { Badge } from "@/frontend/components/ui/badge"
import { 
  Heart, 
  Users, 
  Target, 
  Lightbulb, 
  Shield, 
  Globe,
  Award,
  TrendingUp,
  ArrowRight
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const values = [
  {
    icon: Heart,
    title: "Compassion",
    description: "We care deeply about improving healthcare outcomes and supporting our community.",
    color: "text-primary",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We embrace new ideas and cutting-edge research to advance biomedical science.",
    color: "text-blue",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "We believe in the power of working together to achieve greater impact.",
    color: "text-secondary",
  },
  {
    icon: Shield,
    title: "Integrity",
    description: "We maintain the highest ethical standards in all our activities and research.",
    color: "text-accent",
  },
  {
    icon: Globe,
    title: "Global Reach",
    description: "We connect professionals worldwide to share knowledge and resources.",
    color: "text-primary",
  },
  {
    icon: Target,
    title: "Excellence",
    description: "We strive for excellence in everything we do, from research to community support.",
    color: "text-blue",
  },
]

const stats = [
  { label: "Active Members", value: "5,000+", icon: Users },
  { label: "Research Projects", value: "200+", icon: TrendingUp },
  { label: "Events Hosted", value: "150+", icon: Award },
  { label: "Countries", value: "50+", icon: Globe },
]

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section with Image */}
      <section className="relative h-[400px] md:h-[500px] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/about.jpg"
            alt="About BIOMED CONNECT"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/50 to-transparent"></div>
        </div>
        <div className="container relative z-10 h-full flex items-end pb-12">
          <div className="text-white">
            <h1 className="font-display text-4xl md:text-6xl font-bold mb-4">
              About BIOMED CONNECT
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-2xl">
              Empowering biomedical professionals to transform healthcare through collaboration and innovation
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="container py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="font-display text-4xl font-bold text-dark">Our Story</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              BIOMED CONNECT was founded with a vision to bridge the gap between biomedical professionals 
              worldwide. We recognized that collaboration and knowledge sharing are essential for advancing 
              healthcare and research.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Since our inception, we've grown into a vibrant community of researchers, clinicians, engineers, 
              and healthcare professionals dedicated to making a positive impact on global health. Our platform 
              facilitates connections, enables knowledge exchange, and supports groundbreaking research.
            </p>
            <div className="flex gap-4">
              <Button asChild size="lg">
                <Link href="/membership">Join Us</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
          <div className="relative h-[400px] rounded-lg overflow-hidden shadow-2xl">
            <Image
              src="/images/team-photo.avif"
              alt="BIOMED CONNECT Team"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-muted/50 py-20">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <CardHeader>
                    <Icon className="h-12 w-12 mx-auto mb-4 text-primary" />
                    <CardTitle className="font-display text-4xl font-bold text-dark">{stat.value}</CardTitle>
                    <CardDescription className="text-base">{stat.label}</CardDescription>
                  </CardHeader>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="container py-20">
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <Card className="border-2 border-primary/20 hover:border-primary/40 transition-colors">
            <CardHeader>
              <Target className="h-10 w-10 mb-4 text-primary" />
              <CardTitle className="font-display text-3xl text-dark">Our Mission</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed text-lg">
                To create a vibrant, collaborative platform that connects biomedical professionals,
                fosters knowledge sharing, and accelerates innovation in healthcare and research.
                We empower our community to make meaningful contributions to global health.
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 border-blue/20 hover:border-blue/40 transition-colors">
            <CardHeader>
              <Lightbulb className="h-10 w-10 mb-4 text-blue" />
              <CardTitle className="font-display text-3xl text-dark">Our Vision</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed text-lg">
                To be the leading global network where biomedical professionals collaborate,
                innovate, and transform healthcare. We envision a world where every breakthrough
                in biomedical science is accessible and every professional is connected.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-muted/30 py-20">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-dark mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <Card 
                  key={index} 
                  className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-md"
                >
                  <CardHeader>
                    <Icon className={`h-12 w-12 mb-4 ${value.color}`} />
                    <CardTitle className="font-display text-xl">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-dark text-white py-20">
        <div className="container text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              Join Our Mission
            </h2>
            <p className="text-xl mb-8 text-white/80">
              Be part of a community that's transforming healthcare through collaboration and innovation
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary" className="text-lg px-8">
                <Link href="/membership">
                  Become a Member <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-lg px-8 border-white text-white hover:bg-white hover:text-dark">
                <Link href="/contact">Get in Touch</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}


"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/frontend/components/ui/card"
import { Button } from "@/frontend/components/ui/button"
import { Check } from "lucide-react"
import { useCreateCheckout } from "@/frontend/lib/hooks/use-api"
import Image from "next/image"

const features = [
  "Access to exclusive webinars and events",
  "Research paper library access",
  "Community forums and discussions",
  "Mentorship program participation",
  "Research project collaboration",
  "Early access to new resources",
  "Member directory access",
  "Priority support",
]

export default function MembershipPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section with Image */}
      <section className="relative h-[400px] md:h-[500px] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/membership.jpg"
            alt="Membership"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/50 to-transparent"></div>
        </div>
        <div className="container relative z-10 h-full flex items-end pb-12">
          <div className="text-white">
            <h1 className="font-display text-4xl md:text-6xl font-bold mb-4">
              Membership
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-2xl">
              Join our community of biomedical professionals for just $2/month
            </p>
          </div>
        </div>
      </section>

      <div className="container py-12">
        <div className="max-w-4xl mx-auto">
          <Card className="border-2 border-primary">
            <CardHeader className="text-center pb-8">
              <div className="mb-4">
                <span className="text-5xl font-display font-bold text-dark">$2</span>
                <span className="text-muted-foreground">/month</span>
              </div>
              <CardTitle className="font-display text-3xl">Professional Membership</CardTitle>
              <CardDescription className="text-lg">
                Full access to all platform features
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <ul className="space-y-4">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="mr-3 h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-6">
                <MembershipButton />
              </div>
            </CardContent>
          </Card>

          <Card className="mt-8">
            <CardHeader>
              <CardTitle className="font-display text-2xl">Registration Form</CardTitle>
              <CardDescription>
                Complete your membership registration
              </CardDescription>
            </CardHeader>
            <CardContent>
              <MembershipForm />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

function MembershipButton() {
  const { mutate: createCheckout, isPending } = useCreateCheckout()

  return (
    <Button 
      size="lg" 
      className="w-full text-lg"
      onClick={() => createCheckout()}
      disabled={isPending}
    >
      {isPending ? "Processing..." : "Subscribe Now - $2/month"}
    </Button>
  )
}

function MembershipForm() {
  return (
    <form className="space-y-4">
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="text-sm font-medium mb-2 block">First Name</label>
          <input 
            type="text" 
            className="w-full px-4 py-2 border rounded-md"
            placeholder="John"
          />
        </div>
        <div>
          <label className="text-sm font-medium mb-2 block">Last Name</label>
          <input 
            type="text" 
            className="w-full px-4 py-2 border rounded-md"
            placeholder="Doe"
          />
        </div>
      </div>
      <div>
        <label className="text-sm font-medium mb-2 block">Email</label>
        <input 
          type="email" 
          className="w-full px-4 py-2 border rounded-md"
          placeholder="john.doe@example.com"
        />
      </div>
      <div>
        <label className="text-sm font-medium mb-2 block">Professional Title</label>
        <input 
          type="text" 
          className="w-full px-4 py-2 border rounded-md"
          placeholder="Research Scientist"
        />
      </div>
      <Button type="submit" className="w-full">Complete Registration</Button>
    </form>
  )
}

"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram, 
  Mail, 
  Heart, 
  Activity,
  MapPin,
  Phone,
  ArrowRight,
  Sparkles
} from "lucide-react"
import { Button } from "@/frontend/components/ui/button"

const footerLinks = {
  community: [
    { href: "/community", label: "Member Profiles" },
    { href: "/community/forums", label: "Forums" },
    { href: "/mentorship", label: "Mentorship" },
  ],
  resources: [
    { href: "/library", label: "Library" },
    { href: "/research", label: "Research Hub" },
    { href: "/events", label: "Events" },
    { href: "/blog", label: "Blog" },
  ],
  support: [
    { href: "/about", label: "About Us" },
    { href: "/membership", label: "Membership" },
    { href: "/contact", label: "Contact Us" },
    { href: "/admin", label: "Admin" },
  ],
}

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook", color: "hover:text-blue-600" },
  { icon: Twitter, href: "#", label: "Twitter", color: "hover:text-blue-400" },
  { icon: Linkedin, href: "#", label: "LinkedIn", color: "hover:text-blue-700" },
  { icon: Instagram, href: "#", label: "Instagram", color: "hover:text-pink-600" },
  { icon: Mail, href: "mailto:info@biomedconnect.org", label: "Email", color: "hover:text-primary" },
]

const contactInfo = [
  { icon: Mail, text: "info@biomedconnect.org", href: "mailto:info@biomedconnect.org" },
  { icon: Phone, text: "+1 (555) 123-4567", href: "tel:+15551234567" },
  { icon: MapPin, text: "Global Network", href: "#" },
]

interface FooterLinkGroupProps {
  title: string
  links: typeof footerLinks.community
  index: number
  isVisible: boolean
}

function FooterLinkGroup({ title, links, index, isVisible }: FooterLinkGroupProps) {
  return (
    <div
      className={`transition-all duration-700 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${index * 100 + 200}ms` }}
    >
      <h4 className="font-display font-semibold mb-6 text-dark text-lg relative inline-block">
        {title}
        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
      </h4>
      <ul className="space-y-3">
        {links.map((link, linkIndex) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="group/link text-sm text-muted-foreground hover:text-primary transition-all duration-300 flex items-center gap-2 hover:translate-x-1"
            >
              <ArrowRight className="h-3 w-3 opacity-0 group-hover/link:opacity-100 -translate-x-2 group-hover/link:translate-x-0 transition-all duration-300" />
              <span>{link.label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export function Footer() {
  const [isVisible, setIsVisible] = useState(false)
  const footerRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const currentRef = footerRef.current
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
    <footer ref={footerRef} className="border-t bg-white relative overflow-hidden">
      {/* Decorative medical pattern background */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 10px, currentColor 10px, currentColor 11px)`,
        }} />
      </div>

      <div className="container relative z-10 py-16 md:py-20">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand Section */}
          <div
            className={`lg:col-span-2 space-y-6 transition-all duration-700 ease-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center group">
                <Heart className="h-6 w-6 text-primary group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="font-display text-2xl font-bold text-dark">
                BIOMED CONNECT
              </h3>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-md">
              Connecting biomedical professionals worldwide to advance healthcare
              and research. Building a global community dedicated to innovation,
              collaboration, and excellence in biomedical sciences.
            </p>

            {/* Contact Information */}
            <div className="space-y-3 pt-4">
              {contactInfo.map((contact, index) => {
                const Icon = contact.icon
                return (
                  <a
                    key={index}
                    href={contact.href}
                    className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-all duration-300 group/contact"
                  >
                    <div className="h-8 w-8 rounded-lg bg-primary/5 flex items-center justify-center group-hover/contact:bg-primary/10 transition-colors">
                      <Icon className="h-4 w-4 text-primary" />
                    </div>
                    <span>{contact.text}</span>
                  </a>
                )
              })}
            </div>

            {/* Social Media */}
            <div className="pt-2">
              <p className="text-xs font-semibold text-muted-foreground mb-3 uppercase tracking-wider">
                Follow Us
              </p>
              <div className="flex items-center gap-3">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      aria-label={social.label}
                      className={`h-10 w-10 rounded-lg bg-muted/50 flex items-center justify-center text-muted-foreground ${social.color} transition-all duration-300 hover:scale-110 hover:shadow-md hover:bg-primary/10 group/social`}
                      style={{ transitionDelay: `${index * 50}ms` }}
                    >
                      <Icon className="h-5 w-5 group-hover/social:scale-110 transition-transform" />
                    </a>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Link Groups */}
          <FooterLinkGroup
            title="Community"
            links={footerLinks.community}
            index={0}
            isVisible={isVisible}
          />
          <FooterLinkGroup
            title="Resources"
            links={footerLinks.resources}
            index={1}
            isVisible={isVisible}
          />
          <FooterLinkGroup
            title="Support"
            links={footerLinks.support}
            index={2}
            isVisible={isVisible}
          />
        </div>

        {/* Newsletter Section */}
        <div
          className={`pt-12 border-t transition-all duration-700 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "500ms" }}
        >
          <div className="max-w-md">
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="h-5 w-5 text-primary" />
              <h4 className="font-display font-semibold text-dark">
                Stay Updated
              </h4>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Subscribe to our newsletter for the latest research, events, and community updates.
            </p>
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2.5 rounded-lg border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
              />
              <Button className="px-6 whitespace-nowrap">
                Subscribe
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          className={`mt-12 pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4 transition-all duration-700 ease-out ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
          style={{ transitionDelay: "600ms" }}
        >
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} BIOMED CONNECT. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <Link
              href="/privacy"
              className="hover:text-primary transition-colors duration-300"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="hover:text-primary transition-colors duration-300"
            >
              Terms of Service
            </Link>
            <div className="flex items-center gap-1.5">
              <Activity className="h-4 w-4 text-primary" />
              <span className="text-xs">Powered by kellycodes</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

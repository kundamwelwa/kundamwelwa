"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { UserButton, SignedIn, SignedOut, SignInButton } from "@clerk/nextjs"
import { Button } from "@/frontend/components/ui/button"
import { cn } from "@/frontend/lib/utils"
import { Menu, X } from "lucide-react"
import { useState } from "react"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/frontend/components/ui/sheet"

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/community", label: "Community" },
  { href: "/events", label: "Events" },
  { href: "/library", label: "Library" },
  { href: "/research", label: "Research Hub" },
  { href: "/membership", label: "Membership" },
  { href: "/mentorship", label: "Mentorship" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
]

export function Navbar() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <span className="font-display text-2xl font-bold text-dark">
            BIOMED CONNECT
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                pathname === item.href
                  ? "text-primary"
                  : "text-muted-foreground"
              )}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Desktop Auth */}
        <div className="hidden lg:flex items-center space-x-4">
          <SignedOut>
            <SignInButton mode="modal">
              <Button variant="outline" size="sm">
                Sign In
              </Button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <UserButton afterSignOutUrl="/" />
            <Link href="/admin">
              <Button variant="ghost" size="sm">
                Admin
              </Button>
            </Link>
          </SignedIn>
        </div>

        {/* Mobile Menu */}
        <div className="flex lg:hidden items-center space-x-2">
          <SignedOut>
            <SignInButton mode="modal">
              <Button variant="outline" size="sm">
                Sign In
              </Button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
          
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col space-y-4 mt-8">
                <Link
                  href="/"
                  className="font-display text-xl font-bold text-dark mb-4"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  BIOMED CONNECT
                </Link>
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={cn(
                      "text-base font-medium transition-colors hover:text-primary py-2",
                      pathname === item.href
                        ? "text-primary border-l-4 border-primary pl-4"
                        : "text-muted-foreground pl-4"
                    )}
                  >
                    {item.label}
                  </Link>
                ))}
                <SignedIn>
                  <Link
                    href="/admin"
                    onClick={() => setMobileMenuOpen(false)}
                    className={cn(
                      "text-base font-medium transition-colors hover:text-primary py-2 pl-4",
                      pathname === "/admin"
                        ? "text-primary border-l-4 border-primary"
                        : "text-muted-foreground"
                    )}
                  >
                    Admin Dashboard
                  </Link>
                </SignedIn>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  )
}

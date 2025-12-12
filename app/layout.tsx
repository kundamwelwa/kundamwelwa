import type { Metadata } from "next"
import localFont from "next/font/local"
import "./globals.css"
import { ClerkProvider } from "@clerk/nextjs"
import { QueryProvider } from "@/frontend/components/providers/query-provider"
import { Navbar } from "@/frontend/components/layout/navbar"
import { Footer } from "@/frontend/components/layout/footer"
import { Toaster } from "@/frontend/components/ui/toaster"

// Body font - Montserrat (using local files if available, otherwise Google Fonts)
const montserrat = localFont({
  src: [
    {
      path: "../public/fonts/fonnts.com-Montserrat-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/fonnts.com-Montserrat-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-body",
  fallback: ["system-ui", "sans-serif"],
})

// Display font - Magistral
const magistral = localFont({
  src: [
    {
      path: "../public/fonts/fonnts.com-Magistral_Book.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/fonnts.com-Magistral_Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-display",
  fallback: ["Georgia", "serif"],
})

export const metadata: Metadata = {
  title: "BIOMED CONNECT - Connecting Biomedical Professionals",
  description: "Connect with biomedical professionals, access research resources, join events, and advance healthcare together.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${montserrat.variable} ${magistral.variable} font-body antialiased`}>
          <QueryProvider>
            <div className="flex min-h-screen flex-col">
              <Navbar />
              <main className="flex-1">
                {children}
              </main>
              <Footer />
            </div>
            <Toaster />
          </QueryProvider>
        </body>
      </html>
    </ClerkProvider>
  )
}

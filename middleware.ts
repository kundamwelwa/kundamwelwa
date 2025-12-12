import { clerkMiddleware } from "@clerk/nextjs/server"

// All routes are public by default, except admin which is protected in its layout
// This prevents redirect loops while still allowing Clerk to work properly
export default clerkMiddleware()

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
}


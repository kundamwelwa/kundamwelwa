import { auth } from "@clerk/nextjs/server"
import { redirect } from "next/navigation"

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { userId } = await auth()
  
  // Add admin check logic here
  // For now, just check if user is authenticated
  if (!userId) {
    redirect("/")
  }

  return <>{children}</>
}


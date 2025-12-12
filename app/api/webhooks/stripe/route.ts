import { NextRequest, NextResponse } from "next/server"
import { stripe } from "@/backend/lib/stripe"
import { prisma } from "@/backend/lib/prisma"

const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET!

export async function POST(req: NextRequest) {
  const body = await req.text()
  const signature = req.headers.get("stripe-signature")!

  let event

  try {
    event = stripe.webhooks.constructEvent(body, signature, webhookSecret)
  } catch (err) {
    console.error("Webhook signature verification failed:", err)
    return NextResponse.json({ error: "Invalid signature" }, { status: 400 })
  }

  // Handle the event
  switch (event.type) {
    case "checkout.session.completed":
      const session = event.data.object as typeof event.data.object & {
        client_reference_id: string | null
      }
      // Handle successful payment
      // Update user membership status in database
      if (session.client_reference_id) {
        // Update user membership in your database
        // Example:
        // await prisma.user.update({
        //   where: { id: session.client_reference_id },
        //   data: { membershipStatus: "active" }
        // })
        console.log("Payment successful for user:", session.client_reference_id)
      }
      break
    case "customer.subscription.updated":
    case "customer.subscription.deleted":
      // Handle subscription updates
      const subscription = event.data.object as { id: string }
      console.log("Subscription updated:", subscription.id)
      break
    default:
      console.log(`Unhandled event type: ${event.type}`)
  }

  return NextResponse.json({ received: true })
}

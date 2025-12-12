import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/frontend/components/ui/card"
import { Button } from "@/frontend/components/ui/button"
import { Badge } from "@/frontend/components/ui/badge"
import { Calendar, MapPin, Clock, DollarSign } from "lucide-react"
import Image from "next/image"

// Mock data - replace with actual data from your database
const events = [
  {
    id: 1,
    title: "Biomedical Innovation Summit 2024",
    date: "2024-03-15",
    time: "9:00 AM - 5:00 PM",
    location: "Virtual",
    price: "$50",
    status: "upcoming",
  },
  {
    id: 2,
    title: "Research Methodology Workshop",
    date: "2024-02-28",
    time: "2:00 PM - 4:00 PM",
    location: "Online",
    price: "Free",
    status: "upcoming",
  },
  {
    id: 3,
    title: "Annual Biomedical Conference",
    date: "2024-01-20",
    time: "All Day",
    location: "New York, NY",
    price: "$150",
    status: "past",
  },
]

export default function EventsPage() {
  const upcomingEvents = events.filter(e => e.status === "upcoming")
  const pastEvents = events.filter(e => e.status === "past")

  return (
    <div className="flex flex-col">
      {/* Hero Section with Image */}
      <section className="relative h-[400px] md:h-[500px] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/events.jpg"
            alt="Events"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/50 to-transparent"></div>
        </div>
        <div className="container relative z-10 h-full flex items-end pb-12">
          <div className="text-white">
            <h1 className="font-display text-4xl md:text-6xl font-bold mb-4">
              Events
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-2xl">
              Join our upcoming events, workshops, and conferences
            </p>
          </div>
        </div>
      </section>

      <div className="container py-12">
        <div className="mb-8">
          <Button>Create New Event</Button>
        </div>

        <div className="space-y-12">
          {/* Upcoming Events */}
          <section>
            <h2 className="font-display text-3xl font-bold text-dark mb-6">Upcoming Events</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {upcomingEvents.map((event) => (
                <Card key={event.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <Badge className="bg-secondary text-dark">Upcoming</Badge>
                    </div>
                    <CardTitle className="font-display text-xl">{event.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="mr-2 h-4 w-4" />
                      {new Date(event.date).toLocaleDateString('en-US', { 
                        weekday: 'long', 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Clock className="mr-2 h-4 w-4" />
                      {event.time}
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <MapPin className="mr-2 h-4 w-4" />
                      {event.location}
                    </div>
                    <div className="flex items-center text-sm font-semibold">
                      <DollarSign className="mr-2 h-4 w-4" />
                      {event.price}
                    </div>
                    <Button className="w-full">Register Now</Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Past Events */}
          <section>
            <h2 className="font-display text-3xl font-bold text-dark mb-6">Past Events</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {pastEvents.map((event) => (
                <Card key={event.id} className="opacity-75">
                  <CardHeader>
                    <Badge variant="outline">Past Event</Badge>
                    <CardTitle className="font-display text-xl">{event.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="mr-2 h-4 w-4" />
                      {new Date(event.date).toLocaleDateString()}
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <MapPin className="mr-2 h-4 w-4" />
                      {event.location}
                    </div>
                    <Button variant="outline" className="w-full">View Recording</Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

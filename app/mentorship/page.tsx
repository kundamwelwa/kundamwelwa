import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/frontend/components/ui/card"
import { Button } from "@/frontend/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/frontend/components/ui/tabs"
import { Badge } from "@/frontend/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/frontend/components/ui/avatar"
import { UserPlus, Users, Search, Star } from "lucide-react"
import { Input } from "@/frontend/components/ui/input"
import Image from "next/image"

// Mock data - replace with actual data from your database
const mentors = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    specialty: "Oncology Research",
    experience: "15 years",
    rating: 4.9,
    mentees: 12,
    avatar: "",
  },
  {
    id: 2,
    name: "Dr. Michael Chen",
    specialty: "Cardiovascular Medicine",
    experience: "12 years",
    rating: 4.8,
    mentees: 8,
    avatar: "",
  },
]

export default function MentorshipPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section with Image */}
      <section className="relative h-[400px] md:h-[500px] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/mentorship.jpeg"
            alt="Mentorship Program"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/50 to-transparent"></div>
        </div>
        <div className="container relative z-10 h-full flex items-end pb-12">
          <div className="text-white">
            <h1 className="font-display text-4xl md:text-6xl font-bold mb-4">
              Mentorship Program
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-2xl">
              Connect with experienced professionals or become a mentor yourself
            </p>
          </div>
        </div>
      </section>

      <div className="container py-12">
        <Tabs defaultValue="find" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="find">
              <Search className="mr-2 h-4 w-4" />
              Find a Mentor
            </TabsTrigger>
            <TabsTrigger value="become">
              <UserPlus className="mr-2 h-4 w-4" />
              Become a Mentor
            </TabsTrigger>
          </TabsList>

          <TabsContent value="find" className="space-y-6">
            <div className="flex gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Search mentors by specialty..." className="pl-10" />
              </div>
              <Button>Search</Button>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {mentors.map((mentor) => (
                <Card key={mentor.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center space-x-4">
                      <Avatar className="h-16 w-16">
                        <AvatarImage src={mentor.avatar} />
                        <AvatarFallback>{mentor.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <CardTitle className="font-display">{mentor.name}</CardTitle>
                        <CardDescription>{mentor.specialty}</CardDescription>
                        <div className="flex items-center mt-2">
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 mr-1" />
                          <span className="text-sm font-semibold">{mentor.rating}</span>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 mb-4">
                      <p className="text-sm text-muted-foreground">
                        <strong>Experience:</strong> {mentor.experience}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        <strong>Current Mentees:</strong> {mentor.mentees}
                      </p>
                    </div>
                    <Button className="w-full">Request Mentorship</Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="become" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="font-display text-2xl">Become a Mentor</CardTitle>
                <CardDescription>
                  Share your expertise and guide the next generation of biomedical professionals
                </CardDescription>
              </CardHeader>
              <CardContent>
                <MentorApplicationForm />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

function MentorApplicationForm() {
  return (
    <form className="space-y-4">
      <div>
        <label className="text-sm font-medium mb-2 block">Years of Experience</label>
        <input 
          type="number" 
          className="w-full px-4 py-2 border rounded-md"
          placeholder="10"
        />
      </div>
      <div>
        <label className="text-sm font-medium mb-2 block">Specialty Areas</label>
        <input 
          type="text" 
          className="w-full px-4 py-2 border rounded-md"
          placeholder="Oncology, Research Methods, Clinical Trials"
        />
      </div>
      <div>
        <label className="text-sm font-medium mb-2 block">Why do you want to be a mentor?</label>
        <textarea 
          className="w-full px-4 py-2 border rounded-md min-h-[100px]"
          placeholder="Share your motivation..."
        />
      </div>
      <Button type="submit" className="w-full">Submit Application</Button>
    </form>
  )
}

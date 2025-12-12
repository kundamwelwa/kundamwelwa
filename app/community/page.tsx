import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/frontend/components/ui/card"
import { Button } from "@/frontend/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/frontend/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/frontend/components/ui/avatar"
import { Badge } from "@/frontend/components/ui/badge"
import { Users, MessageSquare, Search } from "lucide-react"
import { Input } from "@/frontend/components/ui/input"
import Image from "next/image"

// Mock data - replace with actual data from your database
const members = [
  { id: 1, name: "Dr. Sarah Johnson", role: "Research Scientist", specialty: "Oncology", avatar: "" },
  { id: 2, name: "Dr. Michael Chen", role: "Clinical Researcher", specialty: "Cardiology", avatar: "" },
  { id: 3, name: "Dr. Emily Rodriguez", role: "Biomedical Engineer", specialty: "Medical Devices", avatar: "" },
]

const forums = [
  { id: 1, title: "Latest Research in Cancer Treatment", replies: 24, views: 156, author: "Dr. Sarah Johnson" },
  { id: 2, title: "Cardiovascular Health Innovations", replies: 18, views: 203, author: "Dr. Michael Chen" },
  { id: 3, title: "Biomedical Device Regulations", replies: 12, views: 98, author: "Dr. Emily Rodriguez" },
]

export default function CommunityPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section with Image */}
      <section className="relative h-[400px] md:h-[500px] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/community.jpg"
            alt="Community"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/50 to-transparent"></div>
        </div>
        <div className="container relative z-10 h-full flex items-end pb-12">
          <div className="text-white">
            <h1 className="font-display text-4xl md:text-6xl font-bold mb-4">
              Community
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-2xl">
              Connect with biomedical professionals, share knowledge, and collaborate
            </p>
          </div>
        </div>
      </section>

      <div className="container py-12">
        <Tabs defaultValue="members" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="members">
              <Users className="mr-2 h-4 w-4" />
              Member Profiles
            </TabsTrigger>
            <TabsTrigger value="forums">
              <MessageSquare className="mr-2 h-4 w-4" />
              Forums & Discussions
            </TabsTrigger>
          </TabsList>

          <TabsContent value="members" className="space-y-6">
            <div className="flex gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Search members..." className="pl-10" />
              </div>
              <Button>Search</Button>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {members.map((member) => (
                <Card key={member.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center space-x-4">
                      <Avatar>
                        <AvatarImage src={member.avatar} />
                        <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                      <div>
                        <CardTitle className="font-display">{member.name}</CardTitle>
                        <CardDescription>{member.role}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <Badge variant="secondary" className="mb-4">{member.specialty}</Badge>
                    <Button variant="outline" className="w-full">View Profile</Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="forums" className="space-y-6">
            <Button>Start New Discussion</Button>

            <div className="space-y-4">
              {forums.map((forum) => (
                <Card key={forum.id} className="hover:shadow-md transition-shadow">
                  <CardHeader>
                    <CardTitle className="font-display text-xl">{forum.title}</CardTitle>
                    <CardDescription>
                      By {forum.author} • {forum.replies} replies • {forum.views} views
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="ghost">Join Discussion</Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

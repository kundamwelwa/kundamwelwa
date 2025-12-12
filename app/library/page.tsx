import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/frontend/components/ui/card"
import { Button } from "@/frontend/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/frontend/components/ui/tabs"
import { Badge } from "@/frontend/components/ui/badge"
import { Video, FileText, BookOpen, Download } from "lucide-react"
import Image from "next/image"

// Mock data - replace with actual data from your database
const webinars = [
  { id: 1, title: "Advanced Cancer Research Methods", date: "2024-01-15", duration: "45 min", views: 234 },
  { id: 2, title: "Biomedical Device Innovation", date: "2024-01-10", duration: "60 min", views: 189 },
]

const papers = [
  { id: 1, title: "Novel Approaches in Gene Therapy", authors: "Dr. Sarah Johnson et al.", year: 2024, downloads: 456 },
  { id: 2, title: "Cardiovascular Health in Aging Populations", authors: "Dr. Michael Chen et al.", year: 2023, downloads: 321 },
]

const videos = [
  { id: 1, title: "Introduction to Biomedical Research", duration: "12:30", views: 1234 },
  { id: 2, title: "Clinical Trial Design Best Practices", duration: "18:45", views: 987 },
]

export default function LibraryPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section with Image */}
      <section className="relative h-[400px] md:h-[500px] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/library.jpg"
            alt="Library"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/50 to-transparent"></div>
        </div>
        <div className="container relative z-10 h-full flex items-end pb-12">
          <div className="text-white">
            <h1 className="font-display text-4xl md:text-6xl font-bold mb-4">
              Library
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-2xl">
              Access webinars, research papers, and educational videos
            </p>
          </div>
        </div>
      </section>

      <div className="container py-12">
        <Tabs defaultValue="webinars" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="webinars">
              <Video className="mr-2 h-4 w-4" />
              Webinars
            </TabsTrigger>
            <TabsTrigger value="papers">
              <FileText className="mr-2 h-4 w-4" />
              Research Papers
            </TabsTrigger>
            <TabsTrigger value="videos">
              <BookOpen className="mr-2 h-4 w-4" />
              Videos
            </TabsTrigger>
          </TabsList>

          <TabsContent value="webinars" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {webinars.map((webinar) => (
                <Card key={webinar.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="font-display text-xl">{webinar.title}</CardTitle>
                    <CardDescription>
                      {new Date(webinar.date).toLocaleDateString()} • {webinar.duration} • {webinar.views} views
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button className="w-full">Watch Now</Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="papers" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {papers.map((paper) => (
                <Card key={paper.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="font-display text-xl">{paper.title}</CardTitle>
                    <CardDescription>
                      {paper.authors} • {paper.year}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex justify-between items-center">
                    <Badge variant="secondary">{paper.downloads} downloads</Badge>
                    <Button variant="outline">
                      <Download className="mr-2 h-4 w-4" />
                      Download
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="videos" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {videos.map((video) => (
                <Card key={video.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="font-display text-xl">{video.title}</CardTitle>
                    <CardDescription>
                      {video.duration} • {video.views} views
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button className="w-full">Watch Video</Button>
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

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/frontend/components/ui/card"
import { Button } from "@/frontend/components/ui/button"
import { Badge } from "@/frontend/components/ui/badge"
import { Microscope, FileText, Users, Calendar } from "lucide-react"
import Image from "next/image"

// Mock data - replace with actual data from your database
const projects = [
  {
    id: 1,
    title: "Gene Therapy for Rare Diseases",
    description: "Exploring novel gene therapy approaches for treating rare genetic disorders",
    status: "active",
    participants: 12,
    startDate: "2024-01-01",
  },
  {
    id: 2,
    title: "AI in Medical Diagnosis",
    description: "Developing AI-powered tools for early disease detection",
    status: "recruiting",
    participants: 8,
    startDate: "2024-02-01",
  },
  {
    id: 3,
    title: "Biomedical Device Safety",
    description: "Comprehensive study on safety protocols for medical devices",
    status: "completed",
    participants: 15,
    startDate: "2023-06-01",
  },
]

export default function ResearchPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section with Image */}
      <section className="relative h-[400px] md:h-[500px] overflow-hidden">
        <Image
          src="/images/research-image.jpg"
          alt="Biomedical Research"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/50 to-transparent"></div>
        <div className="container relative z-10 h-full flex items-end pb-12">
          <div className="text-white">
            <h1 className="font-display text-4xl md:text-6xl font-bold mb-4">
              Research Hub
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-2xl">
              Explore ongoing research projects and apply to participate
            </p>
          </div>
        </div>
      </section>

      <div className="container py-12">
        <div className="mb-8 flex gap-4">
          <Button>Submit Research Project</Button>
          <Button variant="outline">Application Form</Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card key={project.id} className="group hover:shadow-xl transition-all duration-300 hover-lift overflow-hidden">
              {index === 0 && (
                <div className="relative h-48 w-full">
                  <Image
                    src="/images/research.jpg"
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
              )}
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <Badge 
                    className={
                      project.status === "active" ? "bg-secondary text-dark" :
                      project.status === "recruiting" ? "bg-primary text-white" :
                      "bg-muted"
                    }
                  >
                    {project.status}
                  </Badge>
                </div>
                <CardTitle className="font-display text-xl">{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center text-sm text-muted-foreground">
                  <Users className="mr-2 h-4 w-4" />
                  {project.participants} participants
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Calendar className="mr-2 h-4 w-4" />
                  Started {new Date(project.startDate).toLocaleDateString()}
                </div>
                <Button className="w-full">
                  {project.status === "recruiting" ? "Apply Now" : "View Details"}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mt-12 bg-muted/50">
          <CardHeader>
            <CardTitle className="font-display text-2xl flex items-center">
              <Microscope className="mr-2 h-6 w-6" />
              Have a Research Project?
            </CardTitle>
            <CardDescription>
              Submit your research project proposal and collaborate with our community
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button size="lg">Submit Research Project</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

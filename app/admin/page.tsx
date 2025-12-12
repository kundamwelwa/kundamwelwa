import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/frontend/components/ui/card"
import { Button } from "@/frontend/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/frontend/components/ui/tabs"
import { Badge } from "@/frontend/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/frontend/components/ui/table"
import { 
  MessageSquare, 
  Calendar, 
  FileText, 
  Upload, 
  CheckCircle, 
  XCircle,
  Users,
  BookOpen
} from "lucide-react"

// Mock data - replace with actual data from your database
const forumPosts = [
  { id: 1, title: "New Discussion Topic", author: "Dr. John Doe", status: "pending", date: "2024-01-17" },
  { id: 2, title: "Research Question", author: "Dr. Jane Smith", status: "approved", date: "2024-01-16" },
]

const events = [
  { id: 1, title: "Biomedical Summit", date: "2024-03-15", status: "draft", registrations: 45 },
  { id: 2, title: "Research Workshop", date: "2024-02-28", status: "published", registrations: 120 },
]

const researchProjects = [
  { id: 1, title: "Gene Therapy Study", researcher: "Dr. Sarah Johnson", status: "pending", submitted: "2024-01-15" },
  { id: 2, title: "AI Diagnosis Tool", researcher: "Dr. Michael Chen", status: "approved", submitted: "2024-01-10" },
]

const libraryContent = [
  { id: 1, title: "New Research Paper", type: "Paper", status: "pending", uploaded: "2024-01-17" },
  { id: 2, title: "Webinar Recording", type: "Webinar", status: "published", uploaded: "2024-01-16" },
]

export default function AdminPage() {
  return (
    <div className="container py-12">
      <div className="mb-8">
        <h1 className="font-display text-4xl md:text-5xl font-bold text-dark mb-4">
          Admin Dashboard
        </h1>
        <p className="text-lg text-muted-foreground">
          Manage forums, events, research, and library content
        </p>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Pending Forum Posts</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{forumPosts.filter(p => p.status === "pending").length}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Upcoming Events</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{events.length}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Research Pending Review</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{researchProjects.filter(p => p.status === "pending").length}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Library Items</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{libraryContent.length}</div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="forums" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="forums">
            <MessageSquare className="mr-2 h-4 w-4" />
            Forums
          </TabsTrigger>
          <TabsTrigger value="events">
            <Calendar className="mr-2 h-4 w-4" />
            Events
          </TabsTrigger>
          <TabsTrigger value="research">
            <FileText className="mr-2 h-4 w-4" />
            Research
          </TabsTrigger>
          <TabsTrigger value="library">
            <Upload className="mr-2 h-4 w-4" />
            Library
          </TabsTrigger>
        </TabsList>

        <TabsContent value="forums" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="font-display">Moderate Forums</CardTitle>
              <CardDescription>Review and approve forum posts</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Title</TableHead>
                    <TableHead>Author</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {forumPosts.map((post) => (
                    <TableRow key={post.id}>
                      <TableCell className="font-medium">{post.title}</TableCell>
                      <TableCell>{post.author}</TableCell>
                      <TableCell>{new Date(post.date).toLocaleDateString()}</TableCell>
                      <TableCell>
                        <Badge variant={post.status === "approved" ? "default" : "secondary"}>
                          {post.status}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <div className="flex gap-2">
                          <Button size="sm" variant="outline">
                            <CheckCircle className="h-4 w-4 mr-1" />
                            Approve
                          </Button>
                          <Button size="sm" variant="outline">
                            <XCircle className="h-4 w-4 mr-1" />
                            Reject
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="events" className="space-y-4">
          <div className="flex justify-between items-center">
            <Card>
              <CardHeader>
                <CardTitle className="font-display">Manage Events</CardTitle>
                <CardDescription>Create and manage events</CardDescription>
              </CardHeader>
            </Card>
            <Button>Create New Event</Button>
          </div>
          <Card>
            <CardContent className="pt-6">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Event</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Registrations</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {events.map((event) => (
                    <TableRow key={event.id}>
                      <TableCell className="font-medium">{event.title}</TableCell>
                      <TableCell>{new Date(event.date).toLocaleDateString()}</TableCell>
                      <TableCell>
                        <Badge variant={event.status === "published" ? "default" : "secondary"}>
                          {event.status}
                        </Badge>
                      </TableCell>
                      <TableCell>{event.registrations}</TableCell>
                      <TableCell>
                        <Button size="sm" variant="outline">Edit</Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="research" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="font-display">Approve Research</CardTitle>
              <CardDescription>Review and approve research project submissions</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Project Title</TableHead>
                    <TableHead>Researcher</TableHead>
                    <TableHead>Submitted</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {researchProjects.map((project) => (
                    <TableRow key={project.id}>
                      <TableCell className="font-medium">{project.title}</TableCell>
                      <TableCell>{project.researcher}</TableCell>
                      <TableCell>{new Date(project.submitted).toLocaleDateString()}</TableCell>
                      <TableCell>
                        <Badge variant={project.status === "approved" ? "default" : "secondary"}>
                          {project.status}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <div className="flex gap-2">
                          <Button size="sm" variant="outline">Review</Button>
                          <Button size="sm" variant="outline">
                            <CheckCircle className="h-4 w-4 mr-1" />
                            Approve
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="library" className="space-y-4">
          <div className="flex justify-between items-center">
            <Card>
              <CardHeader>
                <CardTitle className="font-display">Upload Library Content</CardTitle>
                <CardDescription>Manage webinars, papers, and videos</CardDescription>
              </CardHeader>
            </Card>
            <Button>
              <Upload className="mr-2 h-4 w-4" />
              Upload Content
            </Button>
          </div>
          <Card>
            <CardContent className="pt-6">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Title</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Uploaded</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {libraryContent.map((item) => (
                    <TableRow key={item.id}>
                      <TableCell className="font-medium">{item.title}</TableCell>
                      <TableCell>{item.type}</TableCell>
                      <TableCell>{new Date(item.uploaded).toLocaleDateString()}</TableCell>
                      <TableCell>
                        <Badge variant={item.status === "published" ? "default" : "secondary"}>
                          {item.status}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <Button size="sm" variant="outline">Edit</Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

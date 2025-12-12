import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/frontend/components/ui/card"
import { Button } from "@/frontend/components/ui/button"
import { Badge } from "@/frontend/components/ui/badge"
import { Calendar, User, ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

// Mock data - replace with actual data from your database
const blogPosts = [
  {
    id: 1,
    title: "Did You Know Wednesday: Breakthrough in Gene Therapy",
    excerpt: "This week we explore the latest advances in gene therapy for rare diseases...",
    author: "Dr. Sarah Johnson",
    date: "2024-01-17",
    category: "Did You Know Wednesday",
    featured: true,
  },
  {
    id: 2,
    title: "Platform Updates: New Features Coming Soon",
    excerpt: "We're excited to announce several new features that will enhance your experience...",
    author: "BIOMED CONNECT Team",
    date: "2024-01-15",
    category: "Updates",
    featured: false,
  },
  {
    id: 3,
    title: "Did You Know Wednesday: AI in Medical Diagnosis",
    excerpt: "Artificial intelligence is revolutionizing how we diagnose and treat diseases...",
    author: "Dr. Michael Chen",
    date: "2024-01-10",
    category: "Did You Know Wednesday",
    featured: false,
  },
]

export default function BlogPage() {
  const featuredPost = blogPosts.find(p => p.featured)
  const regularPosts = blogPosts.filter(p => !p.featured)

  return (
    <div className="flex flex-col">
      {/* Hero Section with Image */}
      <section className="relative h-[400px] md:h-[500px] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/blog.jpg"
            alt="Blog & News"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/50 to-transparent"></div>
        </div>
        <div className="container relative z-10 h-full flex items-end pb-12">
          <div className="text-white">
            <h1 className="font-display text-4xl md:text-6xl font-bold mb-4">
              Blog & News
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-2xl">
              Stay updated with the latest news, research insights, and "Did You Know Wednesday" features
            </p>
          </div>
        </div>
      </section>

      <div className="container py-12">
        {/* Featured Post */}
        {featuredPost && (
          <Card className="mb-12 border-2 border-primary">
            <CardHeader>
              <Badge className="bg-primary text-white mb-2">{featuredPost.category}</Badge>
              <CardTitle className="font-display text-3xl">{featuredPost.title}</CardTitle>
              <CardDescription className="flex items-center gap-4 mt-2">
                <span className="flex items-center">
                  <User className="mr-2 h-4 w-4" />
                  {featuredPost.author}
                </span>
                <span className="flex items-center">
                  <Calendar className="mr-2 h-4 w-4" />
                  {new Date(featuredPost.date).toLocaleDateString()}
                </span>
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">{featuredPost.excerpt}</p>
              <Button asChild>
                <Link href={`/blog/${featuredPost.id}`}>
                  Read More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        )}

        {/* Regular Posts */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {regularPosts.map((post) => (
            <Card key={post.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Badge variant="secondary" className="mb-2">{post.category}</Badge>
                <CardTitle className="font-display text-xl">{post.title}</CardTitle>
                <CardDescription className="flex items-center gap-4 mt-2">
                  <span className="flex items-center text-xs">
                    <User className="mr-1 h-3 w-3" />
                    {post.author}
                  </span>
                  <span className="flex items-center text-xs">
                    <Calendar className="mr-1 h-3 w-3" />
                    {new Date(post.date).toLocaleDateString()}
                  </span>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-3">{post.excerpt}</p>
                <Button variant="ghost" asChild className="w-full">
                  <Link href={`/blog/${post.id}`}>
                    Read More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

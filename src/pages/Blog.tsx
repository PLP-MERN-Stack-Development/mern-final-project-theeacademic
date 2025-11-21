import { TrendingUp, Calendar, Clock, ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/Footer";
import { Link } from "react-router-dom";

export default function Blog() {
  const posts = [
    {
      title: "5 Key Metrics Every Investor Should Track",
      excerpt: "Learn about the essential portfolio metrics that can help you make better investment decisions.",
      date: "2024-03-15",
      readTime: "5 min read",
      category: "Education"
    },
    {
      title: "Understanding Market Volatility",
      excerpt: "A comprehensive guide to navigating market uncertainty and protecting your portfolio.",
      date: "2024-03-10",
      readTime: "8 min read",
      category: "Market Insights"
    },
    {
      title: "The Power of Diversification",
      excerpt: "Why spreading your investments across different assets is crucial for long-term success.",
      date: "2024-03-05",
      readTime: "6 min read",
      category: "Strategy"
    },
    {
      title: "How to Set Effective Price Alerts",
      excerpt: "Maximize your portfolio management with smart alerts and notifications.",
      date: "2024-02-28",
      readTime: "4 min read",
      category: "Tutorial"
    },
    {
      title: "2024 Market Outlook",
      excerpt: "Our analysis of market trends and what investors should watch for this year.",
      date: "2024-02-20",
      readTime: "10 min read",
      category: "Market Insights"
    },
    {
      title: "Risk Management Strategies",
      excerpt: "Essential techniques to protect your portfolio during uncertain times.",
      date: "2024-02-15",
      readTime: "7 min read",
      category: "Strategy"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2">
            <div className="bg-primary text-primary-foreground p-2 rounded-lg">
              <TrendingUp className="h-5 w-5" />
            </div>
            <span className="font-bold text-lg">ApexView Capital</span>
          </Link>
          <nav className="flex gap-6 items-center">
            <Link to="/" className="text-sm hover:text-primary transition-colors">Home</Link>
            <Link to="/features" className="text-sm hover:text-primary transition-colors">Features</Link>
            <Button asChild size="sm">
              <Link to="/dashboard">Get Started</Link>
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Investment Insights &
            <span className="text-primary"> Market News</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Stay informed with expert analysis, market trends, and investment strategies
          </p>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow group">
                <div className="h-48 bg-gradient-to-br from-primary/20 to-primary/5" />
                <div className="p-6">
                  <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                    <span className="bg-primary/10 text-primary px-2 py-1 rounded">
                      {post.category}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {post.readTime}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {post.excerpt}
                  </p>
                  <Button variant="ghost" size="sm" className="group-hover:text-primary">
                    Read More <ArrowRight className="h-4 w-4 ml-1" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <Card className="p-12 text-center bg-primary/5 border-primary/20">
            <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
            <p className="text-muted-foreground mb-6">
              Subscribe to our newsletter for weekly market insights and investment tips
            </p>
            <div className="flex gap-2 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 px-4 py-2 rounded-lg border bg-background"
              />
              <Button>Subscribe</Button>
            </div>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
}

import { TrendingUp, Briefcase, MapPin, Clock } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/Footer";
import { Link } from "react-router-dom";

export default function Careers() {
  const positions = [
    {
      title: "Senior Frontend Developer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
      description: "Join our team to build beautiful, responsive interfaces for our portfolio tracking platform."
    },
    {
      title: "Data Analyst",
      department: "Analytics",
      location: "New York, NY",
      type: "Full-time",
      description: "Help us derive insights from financial data to improve our analytics features."
    },
    {
      title: "Product Designer",
      department: "Design",
      location: "Remote",
      type: "Full-time",
      description: "Create intuitive user experiences that make portfolio management simple and elegant."
    },
    {
      title: "Backend Engineer",
      department: "Engineering",
      location: "San Francisco, CA",
      type: "Full-time",
      description: "Build scalable APIs and infrastructure to power real-time market data."
    },
    {
      title: "Marketing Manager",
      department: "Marketing",
      location: "Remote",
      type: "Full-time",
      description: "Lead our marketing efforts to reach more investors worldwide."
    }
  ];

  const benefits = [
    "Competitive salary & equity",
    "Health, dental & vision insurance",
    "Flexible work schedule",
    "Remote-first culture",
    "Professional development budget",
    "Generous PTO policy",
    "401(k) matching",
    "Modern tech stack"
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
            <Link to="/about" className="text-sm hover:text-primary transition-colors">About</Link>
            <Button asChild size="sm">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Join Our
            <span className="text-primary"> Team</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Help us build the future of portfolio management
          </p>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12">Why ApexView Capital?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-3">Innovation First</h3>
              <p className="text-muted-foreground">
                We're constantly pushing boundaries and exploring new technologies to deliver the best experience.
              </p>
            </Card>
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-3">Work-Life Balance</h3>
              <p className="text-muted-foreground">
                We believe in sustainable pace and support flexible schedules that work for you.
              </p>
            </Card>
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-3">Growth Opportunities</h3>
              <p className="text-muted-foreground">
                Invest in yourself with our professional development budget and mentorship programs.
              </p>
            </Card>
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-3">Inclusive Culture</h3>
              <p className="text-muted-foreground">
                We celebrate diversity and create an environment where everyone can thrive.
              </p>
            </Card>
          </div>

          {/* Benefits */}
          <Card className="p-8 bg-primary/5 border-primary/20">
            <h3 className="text-2xl font-bold mb-6 text-center">Benefits & Perks</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12">Open Positions</h2>
          <div className="space-y-4">
            {positions.map((position, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2">{position.title}</h3>
                    <p className="text-muted-foreground text-sm mb-3">{position.description}</p>
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Briefcase className="h-4 w-4" />
                        {position.department}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {position.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {position.type}
                      </span>
                    </div>
                  </div>
                  <Button asChild>
                    <Link to="/contact">Apply Now</Link>
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

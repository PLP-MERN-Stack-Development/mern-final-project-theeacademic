import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, Target, Users, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import { Footer } from "@/components/Footer";
import { ThemeToggle } from "@/components/ThemeToggle";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Precision First",
      description: "Accurate P&L calculations and real-time data you can trust for critical investment decisions.",
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Sub-100ms updates ensure you never miss a market opportunity with instant data synchronization.",
    },
    {
      icon: Users,
      title: "User-Centric",
      description: "Designed with traders in mind, combining powerful features with intuitive, clean interfaces.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-3">
              <div className="bg-primary text-primary-foreground p-2 rounded-lg">
                <TrendingUp className="h-6 w-6" />
              </div>
              <div>
                <h1 className="text-xl font-bold">ApexView Capital</h1>
              </div>
            </Link>
            <nav className="flex items-center gap-3">
              <ThemeToggle />
              <Link to="/dashboard">
                <Button variant="ghost">Dashboard</Button>
              </Link>
              <Link to="/contact">
                <Button variant="ghost">Contact</Button>
              </Link>
              <Link to="/">
                <Button>Home</Button>
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold">
            About <span className="text-primary">ApexView Capital</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Empowering investors with professional-grade portfolio tracking and real-time market intelligence.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="container mx-auto px-4 py-16">
        <Card className="max-w-4xl mx-auto">
          <CardContent className="pt-12 pb-12">
            <h2 className="text-3xl font-bold mb-6 text-center">Our Mission</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              At ApexView Capital, we believe that every investor deserves access to professional-grade tools 
              for portfolio management. Our mission is to democratize financial analytics by providing 
              real-time stock tracking, accurate P&L calculations, and comprehensive market insights in a 
              platform that's both powerful and intuitive.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mt-4">
              We combine cutting-edge technology with user-centric design to deliver a portfolio tracker 
              that meets the demands of serious investors while remaining accessible to everyone.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Values */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow">
                <CardContent className="pt-8 text-center">
                  <div className="bg-primary/10 text-primary p-4 rounded-full w-fit mx-auto mb-4">
                    <value.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Built by Financial Technology Experts</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Our team combines decades of experience in financial markets, software engineering, and UX design 
            to create the ultimate portfolio tracking experience.
          </p>
          <Link to="/contact">
            <Button size="lg" className="gap-2">
              Get in Touch
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;

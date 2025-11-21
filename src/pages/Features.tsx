import { TrendingUp, Shield, Zap, BarChart3, Bell, Lock, Globe, Smartphone } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Footer } from "@/components/Footer";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function Features() {
  const features = [
    {
      icon: TrendingUp,
      title: "Real-Time Tracking",
      description: "Monitor your portfolio with live market data updates. Get instant insights into stock performance and market movements."
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      description: "Comprehensive charts and metrics to analyze your portfolio performance, including returns, volatility, and risk metrics."
    },
    {
      icon: Shield,
      title: "Bank-Level Security",
      description: "Your data is protected with enterprise-grade encryption and security protocols. We never compromise on safety."
    },
    {
      icon: Bell,
      title: "Smart Alerts",
      description: "Set custom price alerts and notifications for your stocks. Never miss important market movements."
    },
    {
      icon: Lock,
      title: "Secure Authentication",
      description: "Multi-factor authentication and secure login options to keep your account protected at all times."
    },
    {
      icon: Globe,
      title: "Multi-Market Support",
      description: "Track stocks from major global exchanges including NYSE, NASDAQ, LSE, and more."
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Optimized performance ensures instant loading and smooth interactions, even with large portfolios."
    },
    {
      icon: Smartphone,
      title: "Responsive Design",
      description: "Access your portfolio anywhere, anytime. Fully optimized for desktop, tablet, and mobile devices."
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
            <Link to="/dashboard" className="text-sm hover:text-primary transition-colors">Dashboard</Link>
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
            Powerful Features for
            <span className="text-primary"> Smart Investors</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Everything you need to track, analyze, and grow your investment portfolio
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className="bg-primary/10 text-primary p-3 rounded-lg w-fit mb-4">
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <Card className="p-12 text-center bg-primary/5 border-primary/20">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-muted-foreground mb-6">
              Join thousands of investors who trust ApexView Capital
            </p>
            <Button asChild size="lg">
              <Link to="/dashboard">Start Tracking Now</Link>
            </Button>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
}

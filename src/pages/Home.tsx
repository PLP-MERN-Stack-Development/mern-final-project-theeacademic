import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, Shield, Zap, BarChart3, Lock, RefreshCw } from "lucide-react";
import { Link } from "react-router-dom";
import { Footer } from "@/components/Footer";
import { ThemeToggle } from "@/components/ThemeToggle";
import { HeroBackground } from "@/components/HeroBackground";
import { useCountUp } from "@/hooks/useCountUp";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const Home = () => {
  const statsReveal = useScrollReveal();
  const featuresReveal = useScrollReveal();
  const ctaReveal = useScrollReveal();

  const assets = useCountUp(124582, 2000, statsReveal.isVisible);
  const returns = useCountUp(17.5, 2000, statsReveal.isVisible);

  const features = [
    {
      icon: TrendingUp,
      title: "Real-Time Tracking",
      description: "Monitor your portfolio with live market data and instant price updates",
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      description: "Comprehensive P&L calculations, cost basis tracking, and performance metrics",
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Built with modern technology for instant load times and smooth interactions",
    },
    {
      icon: Shield,
      title: "Secure & Private",
      description: "Bank-level security with encrypted data storage and secure authentication",
    },
    {
      icon: RefreshCw,
      title: "Auto-Sync",
      description: "Automatic transaction logging and portfolio synchronization across devices",
    },
    {
      icon: Lock,
      title: "Protected Access",
      description: "JWT-based authentication ensures only you can access your portfolio data",
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
              <Link to="/about">
                <Button variant="ghost" className="hidden sm:inline-flex">About</Button>
              </Link>
              <Link to="/contact">
                <Button variant="ghost" className="hidden sm:inline-flex">Contact</Button>
              </Link>
              <Link to="/login">
                <Button variant="ghost">Sign In</Button>
              </Link>
              <Link to="/signup">
                <Button>Get Started</Button>
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 md:py-32 relative">
        <HeroBackground />
        <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium animate-fade-in backdrop-blur-sm border border-primary/20">
            <Zap className="h-4 w-4" />
            Real-Time Stock Portfolio Tracker
          </div>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight animate-fade-in-up">
            Track Your Investments
            <span className="text-primary"> in Real-Time</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            Professional portfolio management with live market data, accurate P&L calculations, 
            and comprehensive analytics. Built for serious investors.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <Link to="/signup">
              <Button size="lg" className="text-lg px-8 hover:scale-105 transition-transform">
                Get Started Free
              </Button>
            </Link>
            <a href="#features">
              <Button size="lg" variant="outline" className="text-lg px-8 hover:scale-105 transition-transform">
                Learn More
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="container mx-auto px-4 py-16">
        <div 
          ref={statsReveal.ref}
          className={`grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-4xl mx-auto transition-all duration-700 ${
            statsReveal.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <Card className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <CardContent className="pt-6">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                ${assets.toLocaleString()}+
              </div>
              <p className="text-sm md:text-base text-muted-foreground">Assets Tracked</p>
            </CardContent>
          </Card>
          <Card className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <CardContent className="pt-6">
              <div className="text-3xl md:text-4xl font-bold text-success mb-2">+{returns}%</div>
              <p className="text-sm md:text-base text-muted-foreground">Average Returns</p>
            </CardContent>
          </Card>
          <Card className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <CardContent className="pt-6">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">&lt;100ms</div>
              <p className="text-sm md:text-base text-muted-foreground">Real-Time Updates</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="container mx-auto px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <div 
            ref={featuresReveal.ref}
            className={`text-center mb-16 transition-all duration-700 ${
              featuresReveal.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Everything You Need to Manage Your Portfolio
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Powerful features designed for investors who demand precision and real-time insights
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`transition-all duration-700 ${
                  featuresReveal.isVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group h-full">
                  <CardContent className="pt-6">
                    <div className="bg-primary/10 text-primary p-3 rounded-lg w-fit mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <feature.icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20">
        <div
          ref={ctaReveal.ref}
          className={`transition-all duration-700 ${
            ctaReveal.isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
        >
          <Card className="max-w-4xl mx-auto bg-primary text-primary-foreground hover:shadow-2xl transition-shadow overflow-hidden">
            <CardContent className="pt-12 pb-12 text-center relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary/80 opacity-50"></div>
              <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Ready to Take Control of Your Investments?
                </h2>
                <p className="text-base md:text-lg mb-8 opacity-90 max-w-2xl mx-auto">
                  Start tracking your portfolio with real-time data and professional-grade analytics
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/dashboard">
                    <Button size="lg" variant="secondary" className="text-lg px-8 hover:scale-105 transition-transform w-full sm:w-auto">
                      Get Started Now
                    </Button>
                  </Link>
                  <Link to="/contact">
                    <Button size="lg" variant="outline" className="text-lg px-8 bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary hover:scale-105 transition-all w-full sm:w-auto">
                      Contact Sales
                    </Button>
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;

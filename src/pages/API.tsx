import { TrendingUp, Code, Key, Zap, Shield, Book } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/Footer";
import { Link } from "react-router-dom";

export default function API() {
  const endpoints = [
    {
      method: "GET",
      path: "/api/portfolio",
      description: "Retrieve your complete portfolio data"
    },
    {
      method: "GET",
      path: "/api/stocks/{symbol}",
      description: "Get real-time data for a specific stock"
    },
    {
      method: "POST",
      path: "/api/stocks",
      description: "Add a stock to your portfolio"
    },
    {
      method: "PUT",
      path: "/api/stocks/{id}",
      description: "Update stock position details"
    },
    {
      method: "DELETE",
      path: "/api/stocks/{id}",
      description: "Remove a stock from portfolio"
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
            <Link to="/pricing" className="text-sm hover:text-primary transition-colors">Pricing</Link>
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
            Powerful API for
            <span className="text-primary"> Developers</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Integrate ApexView Capital into your applications with our RESTful API
          </p>
          <Button size="lg" asChild>
            <Link to="/contact">Request API Access</Link>
          </Button>
        </div>
      </section>

      {/* Features */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <Card className="p-6 text-center">
              <div className="bg-primary/10 text-primary p-3 rounded-lg w-fit mx-auto mb-4">
                <Zap className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Fast & Reliable</h3>
              <p className="text-muted-foreground text-sm">
                99.9% uptime with low-latency responses
              </p>
            </Card>
            <Card className="p-6 text-center">
              <div className="bg-primary/10 text-primary p-3 rounded-lg w-fit mx-auto mb-4">
                <Shield className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Secure</h3>
              <p className="text-muted-foreground text-sm">
                OAuth 2.0 and API key authentication
              </p>
            </Card>
            <Card className="p-6 text-center">
              <div className="bg-primary/10 text-primary p-3 rounded-lg w-fit mx-auto mb-4">
                <Book className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Well Documented</h3>
              <p className="text-muted-foreground text-sm">
                Comprehensive guides and examples
              </p>
            </Card>
          </div>

          {/* API Endpoints */}
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">API Endpoints</h2>
            <div className="space-y-4">
              {endpoints.map((endpoint, index) => (
                <Card key={index} className="p-6">
                  <div className="flex items-start gap-4">
                    <span className={`px-3 py-1 rounded text-xs font-mono font-semibold ${
                      endpoint.method === 'GET' ? 'bg-green-500/20 text-green-600' :
                      endpoint.method === 'POST' ? 'bg-blue-500/20 text-blue-600' :
                      endpoint.method === 'PUT' ? 'bg-yellow-500/20 text-yellow-600' :
                      'bg-red-500/20 text-red-600'
                    }`}>
                      {endpoint.method}
                    </span>
                    <div className="flex-1">
                      <code className="text-sm font-mono">{endpoint.path}</code>
                      <p className="text-muted-foreground text-sm mt-1">{endpoint.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Code Example */}
      <section className="py-20 px-4 bg-muted/50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-8">Quick Start Example</h2>
          <Card className="p-6 bg-card">
            <pre className="overflow-x-auto">
              <code className="text-sm">{`// Initialize the API client
const apexview = require('apexview-capital-api');

apexview.configure({
  apiKey: 'your_api_key_here'
});

// Fetch portfolio data
const portfolio = await apexview.portfolio.get();

console.log(portfolio);
// Output: { stocks: [...], totalValue: 125000, ... }`}</code>
            </pre>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <Card className="p-12 text-center bg-primary/5 border-primary/20">
            <Code className="h-12 w-12 mx-auto mb-4 text-primary" />
            <h2 className="text-3xl font-bold mb-4">Ready to Build?</h2>
            <p className="text-muted-foreground mb-6">
              Get your API key and start integrating today
            </p>
            <Button asChild size="lg">
              <Link to="/contact">Get API Access</Link>
            </Button>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
}

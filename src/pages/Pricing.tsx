import { TrendingUp, Check } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/Footer";
import { Link } from "react-router-dom";

export default function Pricing() {
  const plans = [
    {
      name: "Free",
      price: "$0",
      period: "forever",
      description: "Perfect for getting started",
      features: [
        "Track up to 10 stocks",
        "Basic portfolio analytics",
        "Daily price updates",
        "Mobile responsive",
        "Email support"
      ],
      cta: "Get Started",
      popular: false
    },
    {
      name: "Pro",
      price: "$9.99",
      period: "per month",
      description: "For serious investors",
      features: [
        "Unlimited stock tracking",
        "Advanced analytics & charts",
        "Real-time price updates",
        "Custom alerts & notifications",
        "Priority support",
        "Export reports",
        "API access"
      ],
      cta: "Start Free Trial",
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "contact us",
      description: "For teams and organizations",
      features: [
        "Everything in Pro",
        "Multi-user accounts",
        "Team collaboration tools",
        "Advanced security features",
        "Dedicated account manager",
        "Custom integrations",
        "SLA guarantee"
      ],
      cta: "Contact Sales",
      popular: false
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
            Simple, Transparent
            <span className="text-primary"> Pricing</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Choose the plan that's right for you. No hidden fees.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <Card 
                key={index} 
                className={`p-8 relative ${plan.popular ? 'border-primary shadow-lg scale-105' : ''}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{plan.description}</p>
                  <div className="mb-2">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    {plan.price !== "Custom" && <span className="text-muted-foreground">/{plan.period}</span>}
                  </div>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  className="w-full" 
                  variant={plan.popular ? "default" : "outline"}
                  asChild
                >
                  <Link to={`/checkout?plan=${plan.name}`}>{plan.cta}</Link>
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <Card className="p-6">
              <h3 className="font-semibold mb-2">Can I change plans later?</h3>
              <p className="text-muted-foreground text-sm">Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately.</p>
            </Card>
            <Card className="p-6">
              <h3 className="font-semibold mb-2">Is there a free trial?</h3>
              <p className="text-muted-foreground text-sm">Yes, Pro plan includes a 14-day free trial. No credit card required.</p>
            </Card>
            <Card className="p-6">
              <h3 className="font-semibold mb-2">What payment methods do you accept?</h3>
              <p className="text-muted-foreground text-sm">We accept all major credit cards, PayPal, and bank transfers for Enterprise plans.</p>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

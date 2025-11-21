import { useSearchParams, Link, useNavigate } from "react-router-dom";
import { TrendingUp, CreditCard, Lock } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Footer } from "@/components/Footer";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export default function Checkout() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const plan = searchParams.get("plan") || "Free";
  
  const [formData, setFormData] = useState({
    email: "",
    cardNumber: "",
    cardName: "",
    expiry: "",
    cvv: ""
  });

  const planDetails: Record<string, { price: string; period: string }> = {
    Free: { price: "$0", period: "forever" },
    Pro: { price: "$9.99", period: "per month" },
    Enterprise: { price: "Custom", period: "contact us" }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (plan === "Enterprise") {
      navigate("/contact");
      return;
    }

    toast({
      title: "Order Confirmed!",
      description: `Successfully subscribed to ${plan} plan.`,
    });
    
    setTimeout(() => {
      navigate("/dashboard");
    }, 2000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (plan === "Enterprise") {
    return (
      <div className="min-h-screen bg-background">
        <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <Link to="/" className="flex items-center gap-2">
              <div className="bg-primary text-primary-foreground p-2 rounded-lg">
                <TrendingUp className="h-5 w-5" />
              </div>
              <span className="font-bold text-lg">ApexView Capital</span>
            </Link>
            <Link to="/pricing" className="text-sm hover:text-primary transition-colors">Back to Pricing</Link>
          </div>
        </header>

        <section className="py-20 px-4">
          <div className="container mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold mb-6">Enterprise Plan</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Contact our sales team to discuss custom pricing and features for your organization.
            </p>
            <Button asChild size="lg">
              <Link to="/contact">Contact Sales</Link>
            </Button>
          </div>
        </section>

        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2">
            <div className="bg-primary text-primary-foreground p-2 rounded-lg">
              <TrendingUp className="h-5 w-5" />
            </div>
            <span className="font-bold text-lg">ApexView Capital</span>
          </Link>
          <Link to="/pricing" className="text-sm hover:text-primary transition-colors">Back to Pricing</Link>
        </div>
      </header>

      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Complete Your Order</h1>
            <p className="text-muted-foreground">You're subscribing to the {plan} plan</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Order Summary */}
            <Card className="p-6 h-fit">
              <h2 className="text-2xl font-bold mb-6">Order Summary</h2>
              <div className="space-y-4">
                <div className="flex justify-between items-center pb-4 border-b">
                  <span className="font-semibold">{plan} Plan</span>
                  <span className="text-2xl font-bold text-primary">
                    {planDetails[plan].price}
                  </span>
                </div>
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>Billing period</span>
                  <span>{planDetails[plan].period}</span>
                </div>
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>Tax</span>
                  <span>$0.00</span>
                </div>
                <div className="flex justify-between items-center pt-4 border-t font-bold text-lg">
                  <span>Total due today</span>
                  <span className="text-primary">{planDetails[plan].price}</span>
                </div>
              </div>
              <div className="mt-6 flex items-center gap-2 text-sm text-muted-foreground">
                <Lock className="h-4 w-4" />
                <span>Secured with 256-bit SSL encryption</span>
              </div>
            </Card>

            {/* Payment Form */}
            <Card className="p-6">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <CreditCard className="h-6 w-6" />
                Payment Details
              </h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    disabled={plan === "Free"}
                  />
                </div>

                {plan !== "Free" && (
                  <>
                    <div>
                      <Label htmlFor="cardName">Cardholder Name</Label>
                      <Input
                        id="cardName"
                        name="cardName"
                        placeholder="John Doe"
                        value={formData.cardName}
                        onChange={handleInputChange}
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="cardNumber">Card Number</Label>
                      <Input
                        id="cardNumber"
                        name="cardNumber"
                        placeholder="1234 5678 9012 3456"
                        value={formData.cardNumber}
                        onChange={handleInputChange}
                        required
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="expiry">Expiry Date</Label>
                        <Input
                          id="expiry"
                          name="expiry"
                          placeholder="MM/YY"
                          value={formData.expiry}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="cvv">CVV</Label>
                        <Input
                          id="cvv"
                          name="cvv"
                          placeholder="123"
                          value={formData.cvv}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                    </div>
                  </>
                )}

                <Button type="submit" className="w-full" size="lg">
                  {plan === "Free" ? "Create Free Account" : "Complete Purchase"}
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  By confirming your subscription, you agree to our{" "}
                  <Link to="/terms" className="text-primary hover:underline">
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link to="/privacy" className="text-primary hover:underline">
                    Privacy Policy
                  </Link>
                </p>
              </form>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

import { TrendingUp, Shield, Lock, Eye, Server, Key, CheckCircle } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Footer } from "@/components/Footer";
import { Link } from "react-router-dom";

export default function Security() {
  const securityFeatures = [
    {
      icon: Lock,
      title: "End-to-End Encryption",
      description: "All data is encrypted in transit using TLS 1.3 and at rest using AES-256 encryption."
    },
    {
      icon: Key,
      title: "Multi-Factor Authentication",
      description: "Optional 2FA using authenticator apps for an additional layer of account security."
    },
    {
      icon: Server,
      title: "Secure Infrastructure",
      description: "Our infrastructure is hosted on enterprise-grade cloud providers with 99.9% uptime SLA."
    },
    {
      icon: Eye,
      title: "Regular Security Audits",
      description: "Third-party security audits and penetration testing conducted quarterly."
    }
  ];

  const compliance = [
    "SOC 2 Type II Certified",
    "GDPR Compliant",
    "ISO 27001 Certified",
    "PCI DSS Compliant",
    "CCPA Compliant",
    "Regular vulnerability assessments"
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
          <Link to="/" className="text-sm hover:text-primary transition-colors">Back to Home</Link>
        </div>
      </header>

      {/* Hero */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <Shield className="h-16 w-16 mx-auto mb-6 text-primary" />
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Your Security is Our
            <span className="text-primary"> Priority</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            We implement industry-leading security measures to protect your data and privacy
          </p>
        </div>
      </section>

      {/* Security Features */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {securityFeatures.map((feature, index) => (
              <Card key={index} className="p-6">
                <div className="bg-primary/10 text-primary p-3 rounded-lg w-fit mb-4">
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            ))}
          </div>

          {/* Compliance */}
          <Card className="p-8 md:p-12 bg-primary/5 border-primary/20">
            <h2 className="text-3xl font-bold text-center mb-8">Compliance & Certifications</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {compliance.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </section>

      {/* Best Practices */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12">Security Best Practices</h2>
          <div className="space-y-6">
            <Card className="p-6">
              <h3 className="font-semibold text-lg mb-2">Use Strong Passwords</h3>
              <p className="text-muted-foreground text-sm">
                Create unique passwords with a mix of letters, numbers, and special characters. Consider using a password manager.
              </p>
            </Card>
            <Card className="p-6">
              <h3 className="font-semibold text-lg mb-2">Enable Two-Factor Authentication</h3>
              <p className="text-muted-foreground text-sm">
                Add an extra layer of security by enabling 2FA in your account settings.
              </p>
            </Card>
            <Card className="p-6">
              <h3 className="font-semibold text-lg mb-2">Monitor Your Account</h3>
              <p className="text-muted-foreground text-sm">
                Regularly review your account activity and report any suspicious behavior immediately.
              </p>
            </Card>
            <Card className="p-6">
              <h3 className="font-semibold text-lg mb-2">Keep Software Updated</h3>
              <p className="text-muted-foreground text-sm">
                Always use the latest version of your browser and operating system for optimal security.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Report Issue */}
      <section className="py-20 px-4 bg-muted/50">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-4">Found a Security Issue?</h2>
          <p className="text-muted-foreground mb-6">
            We take security seriously. If you've discovered a vulnerability, please report it to us.
          </p>
          <Link 
            to="/contact" 
            className="inline-flex items-center gap-2 text-primary hover:underline font-semibold"
          >
            Report Security Issue →
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}

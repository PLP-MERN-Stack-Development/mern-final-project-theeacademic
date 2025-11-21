import { TrendingUp, Shield } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Footer } from "@/components/Footer";
import { Link } from "react-router-dom";

export default function Privacy() {
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

      {/* Content */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <Shield className="h-12 w-12 mx-auto mb-4 text-primary" />
            <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
            <p className="text-muted-foreground">Last updated: March 2024</p>
          </div>

          <Card className="p-8 md:p-12">
            <div className="prose prose-sm max-w-none space-y-6">
              <section>
                <h2 className="text-2xl font-bold mb-4">1. Information We Collect</h2>
                <p className="text-muted-foreground mb-4">
                  We collect information you provide directly to us, including:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Account information (name, email, password)</li>
                  <li>Portfolio data and investment information</li>
                  <li>Usage data and analytics</li>
                  <li>Communication preferences</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">2. How We Use Your Information</h2>
                <p className="text-muted-foreground mb-4">
                  We use the information we collect to:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Provide and maintain our services</li>
                  <li>Process your transactions and portfolio tracking</li>
                  <li>Send you technical notices and updates</li>
                  <li>Respond to your comments and questions</li>
                  <li>Improve our services and develop new features</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">3. Information Sharing</h2>
                <p className="text-muted-foreground mb-4">
                  We do not sell your personal information. We may share your information only in these circumstances:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>With your consent</li>
                  <li>To comply with legal obligations</li>
                  <li>To protect our rights and safety</li>
                  <li>With service providers who assist our operations</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">4. Data Security</h2>
                <p className="text-muted-foreground">
                  We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. This includes encryption, secure servers, and regular security audits.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">5. Your Rights</h2>
                <p className="text-muted-foreground mb-4">You have the right to:</p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Access your personal information</li>
                  <li>Correct inaccurate data</li>
                  <li>Request deletion of your data</li>
                  <li>Object to data processing</li>
                  <li>Export your data</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">6. Cookies</h2>
                <p className="text-muted-foreground">
                  We use cookies and similar technologies to provide and improve our services. You can control cookies through your browser settings.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">7. Contact Us</h2>
                <p className="text-muted-foreground">
                  If you have questions about this Privacy Policy, please contact us at{" "}
                  <Link to="/contact" className="text-primary hover:underline">
                    privacy@apexviewcapital.com
                  </Link>
                </p>
              </section>
            </div>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
}

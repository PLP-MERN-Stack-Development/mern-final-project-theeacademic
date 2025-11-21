import { TrendingUp, FileText } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Footer } from "@/components/Footer";
import { Link } from "react-router-dom";

export default function Terms() {
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
            <FileText className="h-12 w-12 mx-auto mb-4 text-primary" />
            <h1 className="text-4xl font-bold mb-4">Terms of Service</h1>
            <p className="text-muted-foreground">Last updated: March 2024</p>
          </div>

          <Card className="p-8 md:p-12">
            <div className="prose prose-sm max-w-none space-y-6">
              <section>
                <h2 className="text-2xl font-bold mb-4">1. Acceptance of Terms</h2>
                <p className="text-muted-foreground">
                  By accessing and using ApexView Capital's services, you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">2. Use of Services</h2>
                <p className="text-muted-foreground mb-4">
                  You agree to use our services only for lawful purposes and in accordance with these Terms. You agree not to:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Use the service in any way that violates applicable laws</li>
                  <li>Attempt to gain unauthorized access to our systems</li>
                  <li>Interfere with or disrupt the service</li>
                  <li>Use the service for any fraudulent purposes</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">3. Account Responsibilities</h2>
                <p className="text-muted-foreground mb-4">
                  You are responsible for:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Maintaining the confidentiality of your account credentials</li>
                  <li>All activities that occur under your account</li>
                  <li>Notifying us immediately of any unauthorized use</li>
                  <li>Ensuring the accuracy of information you provide</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">4. Investment Disclaimer</h2>
                <p className="text-muted-foreground">
                  ApexView Capital provides portfolio tracking tools and information for educational purposes only. We do not provide investment advice, and the information on our platform should not be considered as such. All investment decisions are your sole responsibility.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">5. Intellectual Property</h2>
                <p className="text-muted-foreground">
                  All content, features, and functionality of our services are owned by ApexView Capital and are protected by copyright, trademark, and other intellectual property laws.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">6. Limitation of Liability</h2>
                <p className="text-muted-foreground">
                  ApexView Capital shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use the service.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">7. Service Modifications</h2>
                <p className="text-muted-foreground">
                  We reserve the right to modify or discontinue our services at any time without notice. We shall not be liable to you or any third party for any modification, suspension, or discontinuance of the service.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">8. Termination</h2>
                <p className="text-muted-foreground">
                  We may terminate or suspend your account and access to our services immediately, without prior notice, for any breach of these Terms.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">9. Changes to Terms</h2>
                <p className="text-muted-foreground">
                  We reserve the right to update these Terms at any time. We will notify you of any changes by posting the new Terms on this page.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">10. Contact Information</h2>
                <p className="text-muted-foreground">
                  For questions about these Terms, please contact us at{" "}
                  <Link to="/contact" className="text-primary hover:underline">
                    legal@apexviewcapital.com
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

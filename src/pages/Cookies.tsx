import { TrendingUp, Cookie } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Footer } from "@/components/Footer";
import { Link } from "react-router-dom";

export default function Cookies() {
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
            <Cookie className="h-12 w-12 mx-auto mb-4 text-primary" />
            <h1 className="text-4xl font-bold mb-4">Cookie Policy</h1>
            <p className="text-muted-foreground">Last updated: March 2024</p>
          </div>

          <Card className="p-8 md:p-12">
            <div className="prose prose-sm max-w-none space-y-6">
              <section>
                <h2 className="text-2xl font-bold mb-4">What Are Cookies?</h2>
                <p className="text-muted-foreground">
                  Cookies are small text files that are placed on your device when you visit our website. They help us provide you with a better experience by remembering your preferences and improving site functionality.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">Types of Cookies We Use</h2>
                
                <div className="space-y-4 mt-4">
                  <div>
                    <h3 className="font-semibold mb-2">Essential Cookies</h3>
                    <p className="text-muted-foreground text-sm">
                      These cookies are necessary for the website to function properly. They enable core functionality such as security, authentication, and account management.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Functional Cookies</h3>
                    <p className="text-muted-foreground text-sm">
                      These cookies remember your preferences and choices to provide enhanced, personalized features. For example, remembering your theme preference or language selection.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Analytics Cookies</h3>
                    <p className="text-muted-foreground text-sm">
                      These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously. This helps us improve our service.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Performance Cookies</h3>
                    <p className="text-muted-foreground text-sm">
                      These cookies help us optimize website performance and speed by collecting information about how you use our site.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">How We Use Cookies</h2>
                <p className="text-muted-foreground mb-4">
                  We use cookies for the following purposes:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>To keep you signed in to your account</li>
                  <li>To remember your preferences and settings</li>
                  <li>To understand how you use our platform</li>
                  <li>To improve website performance and functionality</li>
                  <li>To provide personalized content and features</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">Managing Cookies</h2>
                <p className="text-muted-foreground mb-4">
                  You can control and manage cookies in various ways:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Most browsers allow you to refuse or accept cookies</li>
                  <li>You can delete cookies already stored on your device</li>
                  <li>You can set your browser to notify you when cookies are sent</li>
                  <li>Note that disabling cookies may affect website functionality</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">Third-Party Cookies</h2>
                <p className="text-muted-foreground">
                  Some cookies are placed by third-party services that appear on our pages. We do not control these cookies and recommend reviewing the third-party privacy policies for more information.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">Updates to This Policy</h2>
                <p className="text-muted-foreground">
                  We may update this Cookie Policy from time to time. We will notify you of any changes by posting the new policy on this page with an updated revision date.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
                <p className="text-muted-foreground">
                  If you have questions about our use of cookies, please{" "}
                  <Link to="/contact" className="text-primary hover:underline">
                    contact us
                  </Link>
                  .
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

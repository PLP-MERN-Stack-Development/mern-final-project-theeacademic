import { TrendingUp, Mail, Twitter, Linkedin, Github } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => {
  const footerLinks = {
    product: [
      { name: "Dashboard", href: "/dashboard" },
      { name: "Features", href: "/features" },
      { name: "Pricing", href: "/pricing" },
      { name: "API", href: "/api" },
    ],
    company: [
      { name: "About", href: "/about" },
      { name: "Blog", href: "/blog" },
      { name: "Careers", href: "/careers" },
      { name: "Contact", href: "/contact" },
    ],
    legal: [
      { name: "Privacy", href: "/privacy" },
      { name: "Terms", href: "/terms" },
      { name: "Security", href: "/security" },
      { name: "Cookies", href: "/cookies" },
    ],
  };

  const socialLinks = [
    { icon: Twitter, href: "#twitter", label: "Twitter" },
    { icon: Linkedin, href: "#linkedin", label: "LinkedIn" },
    { icon: Github, href: "#github", label: "GitHub" },
    { icon: Mail, href: "#email", label: "Email" },
  ];

  return (
    <footer className="border-t bg-card/50 backdrop-blur-sm mt-20">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-6">
          {/* Brand Section */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-3">
              <div className="bg-primary text-primary-foreground p-1.5 rounded-lg">
                <TrendingUp className="h-5 w-5" />
              </div>
              <span className="font-bold">ApexView Capital</span>
            </Link>
            <p className="text-sm text-muted-foreground mb-4">
              Professional portfolio tracking & analytics
            </p>
            <div className="flex gap-2">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="font-semibold text-sm mb-3">Product</h3>
            <ul className="space-y-2">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-semibold text-sm mb-3">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="font-semibold text-sm mb-3">Legal</h3>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t pt-6 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-xs text-muted-foreground">
            © 2024 ApexView Capital. All rights reserved.
          </p>
          <div className="flex gap-4 text-xs">
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              Status
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              Docs
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              Support
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

import Logo from "./Logo";
import { GithubLogoIcon, LinkedinLogoIcon, FacebookLogoIcon } from "@/components/icons";
import { LegalModal } from "@/components/LegalModal";
import type { LegalPolicyId } from "@/data/legalContent";

const footerLinks = {
  services: [
    { name: "Web Development", href: "#services" },
    { name: "Mobile Development", href: "#services" },
    { name: "Desktop Applications", href: "#services" },
    { name: "API & Integrations", href: "#services" },
    { name: "SaaS Products", href: "#services" },
    { name: "Cloud & DevOps", href: "#services" },
    { name: "AI / Automation Services", href: "#services" },
  ],
  company: [
    { name: "About Us", href: "#about" },
    { name: "Our Process", href: "#process" },
    { name: "Tech Stack", href: "#tech" },
    { name: "FAQ", href: "#faq" },
    { name: "Contact", href: "#contact" },
  ],
  legal: [
    { name: "Privacy Policy", policy: "privacy" },
    { name: "Terms and Conditions", policy: "terms" },
    { name: "POPIA Compliance", policy: "popia" },
    { name: "Cookie Policy", policy: "cookies" },
  ] satisfies { name: string; policy: LegalPolicyId }[],
};

const Footer = () => {
  return (
    <footer className="py-16 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Logo className="mb-4" />
            <p className="text-muted-foreground text-sm max-w-sm mb-6">
              Building innovative digital solutions that transform businesses and drive growth.
              Your trusted South African technology partner for web, mobile, desktop, and integration services.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/enuffinitytechnologies"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center hover:bg-primary/20 transition-colors"
              >
                <FacebookLogoIcon className="w-5 h-5 text-muted-foreground" />
              </a>
              <a
                href="https://www.linkedin.com/company/enuffinity-technologies"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center hover:bg-primary/20 transition-colors"
              >
                <LinkedinLogoIcon className="w-5 h-5 text-muted-foreground" />
              </a>
              <a
                href="https://github.com/SaneleBrian/eNuffinity-Technologies"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center hover:bg-primary/20 transition-colors"
              >
                <GithubLogoIcon className="w-5 h-5 text-muted-foreground" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <LegalModal
                    policy={link.policy}
                    trigger={
                      <button
                        type="button"
                        className="text-sm text-muted-foreground hover:text-primary transition-colors text-left"
                      >
                        {link.name}
                      </button>
                    }
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} eNuffinity Technologies (PTY) LTD. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Proudly South African — Building the future, one line of code at a time.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

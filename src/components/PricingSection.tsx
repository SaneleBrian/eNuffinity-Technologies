import { useState } from "react";
import {
  CheckmarkIcon,
  CloseIcon,
  OpenIcon,
  GlobeIcon,
  ServerIcon,
  DesktopIcon,
  PhonePortraitIcon,
  CubeIcon,
  StarIcon,
  ShieldIcon,
  FlashIcon,
  HelpBuoyIcon,
  InformationCircleIcon,
} from "@/components/icons";
import { Button } from "@/components/ui/button";

type Package = {
  name: string;
  subtitle: string;
  price: string;
  period: string;
  description: string;
  popular: boolean;
  icon: React.ElementType;
  features: { text: string; included: boolean }[];
  highlight?: string;
  scope?: string[];
};

type Category = {
  id: string;
  label: string;
  icon: React.ElementType;
  packages: Package[];
  note: string;
};

const categories: Category[] = [
  {
    id: "web",
    label: "Web Apps",
    icon: GlobeIcon,
    note: "All packages are for web applications (websites). Prices vary based on complexity and features.",
    packages: [
      {
        name: "Basic",
        subtitle: "Build Only",
        price: "From R10,000",
        period: "",
        description: "Suitable for small business websites and landing pages with limited functionality. Ideal for clients who already have hosting.",
        popular: false,
        icon: FlashIcon,
        highlight: "Quick & Clean",
        scope: ["Up to 5 pages", "Contact form", "2 revision rounds"],
        features: [
          { text: "Custom Web Design (UI/UX)", included: true },
          { text: "Basic Dynamic Website Development", included: true },
          { text: "Standard Functional Testing", included: true },
          { text: "Source Code Handover", included: true },
          { text: "Deployment Assistance", included: true },
          { text: "Initial Hosting & Domain Setup", included: false },
          { text: "Ongoing Maintenance", included: false },
          { text: "Priority Support", included: false },
        ],
      },
      {
        name: "Standard",
        subtitle: "Launch Ready",
        price: "From R18,000",
        period: "",
        description: "Everything you need to get your web application live and accessible to anyone via your domain or search engines.",
        popular: true,
        icon: ShieldIcon,
        highlight: "Best Value",
        scope: ["Up to 10 pages/modules", "Basic CMS/dashboard", "Up to 2 integrations", "2 revision rounds"],
        features: [
          { text: "Custom Web Design (UI/UX)", included: true },
          { text: "Frontend & Backend Development", included: true },
          { text: "Standard Functional Testing", included: true },
          { text: "Source Code Handover", included: true },
          { text: "One Production Deployment", included: true },
          { text: "Initial Hosting & Domain Setup", included: true },
          { text: "Basic On-Page SEO Setup", included: true },
          { text: "30 Days Post-Launch Bug-Fix Support", included: true },
        ],
      },
      {
        name: "Premium",
        subtitle: "Full Service",
        price: "From R35,000",
        period: "",
        description: "The complete package — design, build, test, host, and launch. Includes 3 months post-launch support to get you settled.",
        popular: false,
        icon: StarIcon,
        highlight: "All-Inclusive",
        scope: ["Custom workflows", "Advanced integrations on quote", "3 revision rounds"],
        features: [
          { text: "Custom Web Design (UI/UX)", included: true },
          { text: "Frontend & Backend Development", included: true },
          { text: "Standard Functional Testing", included: true },
          { text: "Source Code Handover", included: true },
          { text: "One Production Deployment", included: true },
          { text: "Initial Hosting & Domain Setup", included: true },
          { text: "Basic On-Page SEO Setup", included: true },
          { text: "3 Months Maintenance & Support", included: true },
        ],
      },
    ],
  },
  {
    id: "api",
    label: "API & Backend",
    icon: ServerIcon,
    note: "Prices vary based on API complexity, data models, and integration requirements. Contact us for a tailored quote.",
    packages: [
      {
        name: "Basic",
        subtitle: "Core API",
        price: "From R12,000",
        period: "",
        description: "A solid RESTful or GraphQL API with authentication and core endpoints — ready for your frontend or mobile app.",
        popular: false,
        icon: FlashIcon,
        highlight: "Essentials",
        scope: ["Up to 10 endpoints", "Single database", "2 revision rounds"],
        features: [
          { text: "REST or GraphQL API", included: true },
          { text: "Authentication & Authorization", included: true },
          { text: "Database Design & Setup", included: true },
          { text: "API Documentation", included: true },
          { text: "Source Code Handover", included: true },
          { text: "Cloud Deployment", included: false },
          { text: "Rate Limiting & Caching", included: false },
          { text: "Ongoing Maintenance", included: false },
        ],
      },
      {
        name: "Standard",
        subtitle: "Production Ready",
        price: "From R25,000",
        period: "",
        description: "A fully deployed backend with third-party integrations, cloud hosting, and industry-standard security practices.",
        popular: true,
        icon: ShieldIcon,
        highlight: "Best Value",
        scope: ["Up to 2 integrations included", "One production environment", "30 days post-launch support"],
        features: [
          { text: "REST or GraphQL API", included: true },
          { text: "Authentication & Authorization", included: true },
          { text: "Database Design & Setup", included: true },
          { text: "Basic Third-Party Integrations", included: true },
          { text: "Cloud Deployment (AWS/Azure/GCP)", included: true },
          { text: "Rate Limiting & Caching", included: true },
          { text: "CI/CD Pipeline Setup", included: true },
          { text: "30 Days Post-Launch Support", included: true },
        ],
      },
      {
        name: "Premium",
        subtitle: "Advanced Backend",
        price: "From R45,000",
        period: "",
        description: "A scalable backend architecture with advanced auth, monitoring, and 3 months of support for growing systems.",
        popular: false,
        icon: StarIcon,
        highlight: "Full Power",
        scope: ["Scalable architecture", "Up to 4 integrations", "3 months support included"],
        features: [
          { text: "Scalable Backend Architecture", included: true },
          { text: "Advanced Auth (OAuth, SSO)", included: true },
          { text: "Database Design & Optimization", included: true },
          { text: "Third-Party Integrations", included: true },
          { text: "Cloud Deployment & Scaling Setup", included: true },
          { text: "Monitoring & Logging", included: true },
          { text: "CI/CD Pipeline Setup", included: true },
          { text: "3 Months Maintenance & Support", included: true },
        ],
      },
    ],
  },
  {
    id: "desktop",
    label: "Desktop Apps",
    icon: DesktopIcon,
    note: "Desktop application pricing depends on platform targets, complexity, and integration needs.",
    packages: [
      {
        name: "Basic",
        subtitle: "Single Platform",
        price: "From R15,000",
        period: "",
        description: "A desktop application for one platform (Windows, macOS, or Linux) with core functionality and clean UI.",
        popular: false,
        icon: FlashIcon,
        highlight: "One Platform",
        scope: ["Up to 8 screens", "Single platform target", "2 revision rounds"],
        features: [
          { text: "Single Platform (Win/Mac/Linux)", included: true },
          { text: "Custom UI Design", included: true },
          { text: "Core Feature Development", included: true },
          { text: "Standard Functional Testing", included: true },
          { text: "Installer & Distribution", included: true },
          { text: "Cross-Platform Support", included: false },
          { text: "Auto-Update System", included: false },
          { text: "Ongoing Maintenance", included: false },
        ],
      },
      {
        name: "Standard",
        subtitle: "Cross-Platform",
        price: "From R30,000",
        period: "",
        description: "A cross-platform desktop app (Electron / .NET MAUI) with auto-updates and a polished user experience.",
        popular: true,
        icon: ShieldIcon,
        highlight: "Best Value",
        scope: ["Up to 12 screens", "Local database integration", "30 days post-launch support"],
        features: [
          { text: "Cross-Platform (Win + Mac + Linux)", included: true },
          { text: "Custom UI/UX Design", included: true },
          { text: "Full Feature Development", included: true },
          { text: "Standard Functional Testing", included: true },
          { text: "Installer & Distribution", included: true },
          { text: "Auto-Update System", included: true },
          { text: "Database Integration", included: true },
          { text: "30 Days Post-Launch Support", included: true },
        ],
      },
      {
        name: "Premium",
        subtitle: "Advanced Desktop",
        price: "From R55,000",
        period: "",
        description: "Advanced desktop software with full integration, software licensing setup, and 3 months of support.",
        popular: false,
        icon: StarIcon,
        highlight: "Advanced",
        scope: ["Cross-platform build", "Software licensing setup", "3 months support included"],
        features: [
          { text: "Cross-Platform Support", included: true },
          { text: "Professional UI/UX Design", included: true },
          { text: "Full Feature Development", included: true },
          { text: "Standard Functional Testing", included: true },
          { text: "Software Licensing Setup", included: true },
          { text: "Auto-Update System", included: true },
          { text: "API & Cloud Integration", included: true },
          { text: "3 Months Maintenance & Support", included: true },
        ],
      },
    ],
  },
  {
    id: "mobile",
    label: "Mobile Apps",
    icon: PhonePortraitIcon,
    note: "Mobile app pricing depends on platform (iOS/Android/both), features, and backend requirements.",
    packages: [
      {
        name: "Basic",
        subtitle: "Single Platform",
        price: "From R35,000",
        period: "",
        description: "A cross-platform mobile app (Flutter) for iOS or Android with essential features and clean design.",
        popular: false,
        icon: FlashIcon,
        highlight: "Starter",
        scope: ["Up to 5 screens", "Single user role", "No custom backend"],
        features: [
          { text: "iOS or Android App", included: true },
          { text: "Custom Mobile UI/UX", included: true },
          { text: "Core Feature Development", included: true },
          { text: "Standard Functional Testing", included: true },
          { text: "App Store Submission Assistance", included: true },
          { text: "Push Notifications", included: false },
          { text: "Backend/API Integration", included: false },
          { text: "Ongoing Maintenance", included: false },
        ],
      },
      {
        name: "Standard",
        subtitle: "Both Platforms",
        price: "From R60,000",
        period: "",
        description: "A cross-platform mobile app (Flutter/React Native) for both iOS and Android with backend integration. Suitable for MVPs and growing business apps.",
        popular: true,
        icon: ShieldIcon,
        highlight: "Best Value",
        scope: ["Up to 12 screens", "Basic push notifications", "30 days post-launch support"],
        features: [
          { text: "iOS & Android App", included: true },
          { text: "Custom Mobile UI/UX", included: true },
          { text: "Full Feature Development", included: true },
          { text: "Standard Functional Testing", included: true },
          { text: "App Store Submission Assistance", included: true },
          { text: "Push Notifications", included: true },
          { text: "Backend/API Integration", included: true },
          { text: "30 Days Post-Launch Support", included: true },
        ],
      },
      {
        name: "Premium",
        subtitle: "Full Mobile Suite",
        price: "From R100,000",
        period: "",
        description: "A complete mobile solution with advanced features, analytics, and 3 months of support. Complex apps may require a custom quotation.",
        popular: false,
        icon: StarIcon,
        highlight: "Full Suite",
        scope: ["Advanced animations", "Analytics integration", "3 months support included"],
        features: [
          { text: "iOS & Android App", included: true },
          { text: "Premium Mobile UI/UX", included: true },
          { text: "Advanced Features & Animations", included: true },
          { text: "Standard Functional Testing", included: true },
          { text: "App Store Submission Assistance", included: true },
          { text: "Push Notifications & Analytics", included: true },
          { text: "Backend/API Integration", included: true },
          { text: "3 Months Maintenance & Support", included: true },
        ],
      },
    ],
  },
  {
    id: "saas",
    label: "SaaS Products",
    icon: CubeIcon,
    note: "SaaS pricing depends on features, user management complexity, and third-party integrations required.",
    packages: [
      {
        name: "Basic",
        subtitle: "MVP Launch",
        price: "From R35,000",
        period: "",
        description: "A minimum viable SaaS product with user auth, core features, and a subscription billing system.",
        popular: false,
        icon: FlashIcon,
        highlight: "MVP",
        scope: ["MVP only — limited feature set", "Single tenant setup", "1 admin dashboard"],
        features: [
          { text: "User Authentication & Roles", included: true },
          { text: "Core SaaS Features", included: true },
          { text: "Subscription Billing (Stripe)", included: true },
          { text: "Responsive Dashboard", included: true },
          { text: "Standard Functional Testing", included: true },
          { text: "Cloud Hosting Setup", included: false },
          { text: "Advanced Analytics", included: false },
          { text: "Ongoing Maintenance", included: false },
        ],
      },
      {
        name: "Standard",
        subtitle: "Growth Ready",
        price: "From R65,000",
        period: "",
        description: "A production-ready SaaS platform with multi-tenancy, integrations, and cloud deployment.",
        popular: true,
        icon: ShieldIcon,
        highlight: "Best Value",
        scope: ["Moderate multi-user SaaS", "Up to 3 integrations", "30 days post-launch support"],
        features: [
          { text: "User Authentication & Roles", included: true },
          { text: "Multi-Tenant Architecture", included: true },
          { text: "Subscription Billing", included: true },
          { text: "Admin Dashboard & Analytics", included: true },
          { text: "Basic Third-Party Integrations", included: true },
          { text: "Cloud Hosting & CI/CD", included: true },
          { text: "Standard Functional Testing", included: true },
          { text: "30 Days Post-Launch Support", included: true },
        ],
      },
      {
        name: "Premium",
        subtitle: "Advanced SaaS",
        price: "From R120,000",
        period: "",
        description: "A scalable SaaS platform with white-label support, API access, and 3 months of support. Large-scale features quoted separately.",
        popular: false,
        icon: StarIcon,
        highlight: "Advanced",
        scope: ["Scalable architecture", "White-label & API access", "3 months support included"],
        features: [
          { text: "Advanced Auth (SSO, OAuth)", included: true },
          { text: "Multi-Tenant Architecture", included: true },
          { text: "Advanced Billing & Invoicing", included: true },
          { text: "Admin Dashboard & Analytics", included: true },
          { text: "White-Label & API Access", included: true },
          { text: "Cloud Hosting & Scaling Setup", included: true },
          { text: "Standard Functional Testing", included: true },
          { text: "3 Months Maintenance & Support", included: true },
        ],
      },
    ],
  },
];

const carePlans = [
  {
    name: "Basic Care",
    price: "R999",
    icon: HelpBuoyIcon,
    bestFor: "Websites, landing pages, small business systems",
    features: [
      "Security updates",
      "Bug fixes",
      "Basic uptime monitoring",
      "Monthly backups",
      "Email support",
      "1 support hour/month",
    ],
  },
  {
    name: "Growth Care",
    price: "R2,500",
    icon: ShieldIcon,
    bestFor: "Business systems, APIs, dashboards, mobile backends",
    features: [
      "Everything in Basic Care",
      "Performance optimization",
      "Content updates",
      "Priority support",
      "Database backups",
      "3 support hours/month",
    ],
  },
  {
    name: "Premium Care",
    price: "R5,000",
    icon: StarIcon,
    bestFor: "SaaS, production systems, larger businesses",
    features: [
      "Everything in Growth Care",
      "Emergency support",
      "Monitoring & logging",
      "Infrastructure management",
      "Monthly reporting",
      "Up to 6 support hours/month",
    ],
  },
];

const PricingSection = () => {
  const [activeCategory, setActiveCategory] = useState("web");
  const active = categories.find((c) => c.id === activeCategory)!;

  return (
    <section id="pricing" className="py-14 bg-secondary/20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our <span className="heading-accent">Packages</span>
          </h2>
          <p className="text-muted-foreground">
            Transparent pricing across all our development services.
            Choose a category and package that fits your needs — no hidden costs.
          </p>
        </div>

        {/* Global delivery note */}
        <div className="max-w-3xl mx-auto mb-10 p-4 rounded-xl border border-border bg-card/60 flex gap-3">
          <InformationCircleIcon className="w-5 h-5 text-primary shrink-0 mt-0.5" />
          <p className="text-sm text-muted-foreground leading-relaxed">
            All packages include initial delivery only. Ongoing support, updates, hosting, and maintenance are billed separately unless otherwise stated. Final scope and pricing are confirmed after a project discovery call.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${
                activeCategory === cat.id
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                  : "bg-card border border-border text-muted-foreground hover:text-foreground hover:border-primary/50"
              }`}
            >
              <cat.icon className="w-4 h-4" />
              {cat.label}
            </button>
          ))}
        </div>

        {/* Packages Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto" key={activeCategory}>
          {active.packages.map((pkg) => (
            <div
              key={pkg.name}
              className={`relative group border border-border rounded-2xl bg-card flex flex-col transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl animate-fade-in overflow-hidden ${
                pkg.popular
                  ? "ring-2 ring-primary shadow-xl shadow-primary/10 lg:scale-[1.03] z-10"
                  : "hover:shadow-primary/5"
              }`}
            >
              {/* Top accent bar */}
              <div className="h-1.5 w-full bg-accent" />

              {pkg.popular && (
                <div className="absolute -top-0 left-1/2 -translate-x-1/2 px-5 py-1.5 rounded-b-xl bg-primary text-primary-foreground text-xs font-bold tracking-wider">
                  MOST POPULAR
                </div>
              )}

              <div className="p-6 sm:p-8 flex flex-col flex-1">
                {/* Header with icon */}
                <div className="flex items-start justify-between gap-3 mb-5">
                  <div className="min-w-0">
                    <div className="flex items-center gap-2 mb-1 flex-wrap">
                      <h3 className="text-xl sm:text-2xl font-bold">{pkg.name}</h3>
                      {pkg.highlight && (
                        <span className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-0.5 rounded-full bg-accent text-accent-foreground">
                          {pkg.highlight}
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground">{pkg.subtitle}</p>
                  </div>
                  <div className="p-3 rounded-xl bg-accent/10 shrink-0">
                    <pkg.icon className="w-5 h-5 text-accent" />
                  </div>
                </div>

                {/* Price */}
                <div className="mb-5 pb-5 border-b border-border/50">
                  <span className="text-3xl sm:text-4xl font-extrabold text-accent">
                    {pkg.price}
                  </span>
                  {pkg.period && (
                    <span className="text-muted-foreground text-sm ml-2">{pkg.period}</span>
                  )}
                </div>

                {/* Description */}
                <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                  {pkg.description}
                </p>

                {/* Scope */}
                {pkg.scope && pkg.scope.length > 0 && (
                  <div className="mb-6 p-3 rounded-lg bg-muted/30 border border-border/40">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-2">
                      Scope
                    </p>
                    <ul className="space-y-1">
                      {pkg.scope.map((s) => (
                        <li key={s} className="text-xs text-muted-foreground flex gap-2">
                          <span className="text-primary">•</span>
                          <span>{s}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Features */}
                <div className="mb-8 flex-1">
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-4">
                    What's included
                  </p>
                  <ul className="space-y-3.5">
                    {pkg.features.map((feature) => (
                      <li key={feature.text} className="flex items-start gap-3 text-sm">
                        {feature.included ? (
                          <div className="mt-0.5 w-5 h-5 rounded-full bg-accent/15 flex items-center justify-center shrink-0">
                            <CheckmarkIcon className="w-3 h-3 text-accent" />
                          </div>
                        ) : (
                          <div className="mt-0.5 w-5 h-5 rounded-full bg-muted/50 flex items-center justify-center shrink-0">
                            <CloseIcon className="w-3 h-3 text-muted-foreground/40" />
                          </div>
                        )}
                        <span className={feature.included ? "text-foreground" : "text-muted-foreground/50"}>
                          {feature.text}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <Button
                  variant={pkg.popular ? "hero" : "heroOutline"}
                  className="w-full py-6 text-base font-semibold"
                  onClick={() =>
                    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  Get Started
                  <OpenIcon className="w-4 h-4 ml-1" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Note */}
        <p className="text-center text-muted-foreground text-sm mt-10 max-w-xl mx-auto">
          {active.note} Contact us for a detailed quote tailored to your project.
        </p>

        {/* ===== Monthly Care Plans ===== */}
        <div className="mt-24">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h3 className="text-2xl md:text-3xl font-bold mb-3">
              Monthly <span className="heading-accent">Care Plans</span>
            </h3>
            <p className="text-muted-foreground text-sm md:text-base">
              Keep your product running smoothly after launch. Choose a care plan that matches your stage — upgrade or cancel anytime.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
            {carePlans.map((plan) => (
              <div
                key={plan.name}
                className="relative group border border-border rounded-2xl bg-card flex flex-col transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl overflow-hidden"
              >
                <div className="h-1.5 w-full bg-accent" />
                <div className="p-6 sm:p-8 flex flex-col flex-1">
                  <div className="flex items-start justify-between gap-3 mb-5">
                    <div>
                      <h4 className="text-xl sm:text-2xl font-bold mb-1">{plan.name}</h4>
                      <p className="text-xs text-muted-foreground">{plan.bestFor}</p>
                    </div>
                    <div className="p-3 rounded-xl bg-accent shrink-0">
                      <plan.icon className="w-5 h-5 text-accent-foreground" />
                    </div>
                  </div>

                  <div className="mb-6 pb-5 border-b border-border/50">
                    <span className="text-3xl sm:text-4xl font-extrabold text-accent">
                      {plan.price}
                    </span>
                    <span className="text-muted-foreground text-sm ml-2">/ month</span>
                  </div>

                  <ul className="space-y-3 flex-1 mb-6">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-3 text-sm">
                        <div className="mt-0.5 w-5 h-5 rounded-full bg-accent/15 flex items-center justify-center shrink-0">
                          <CheckmarkIcon className="w-3 h-3 text-accent" />
                        </div>
                        <span className="text-foreground">{f}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    variant="heroOutline"
                    className="w-full py-6 text-base font-semibold"
                    onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                  >
                    Choose Plan
                    <OpenIcon className="w-4 h-4 ml-1" />
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-muted-foreground text-xs mt-6 max-w-2xl mx-auto">
            Additional work beyond included support hours is billed separately. No "unlimited support" — clear hours, clear expectations.
          </p>
        </div>

        {/* ===== Fine Print ===== */}
        <div className="mt-20 max-w-4xl mx-auto p-6 rounded-2xl border border-border bg-card/40">
          <h4 className="text-base font-bold mb-4 flex items-center gap-2">
            <InformationCircleIcon className="w-4 h-4 text-primary" />
            What's not included (the fine print)
          </h4>
          <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2 text-sm text-muted-foreground">
            <li>• Third-party services, hosting fees, domain registration, API subscriptions, and app store fees are billed separately.</li>
            <li>• Packages include up to 2 revision rounds. Extra revisions are billed hourly.</li>
            <li>• Source code is transferred upon full payment.</li>
            <li>• Delivery timelines vary based on project complexity and client feedback turnaround.</li>
            <li>• Projects with advanced requirements may require a custom quotation.</li>
            <li>• Final scope and pricing are confirmed after a project discovery call.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;

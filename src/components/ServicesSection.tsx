import {
  GlobeIcon,
  ColorPaletteIcon,
  ServerIcon,
  FlaskIcon,
  CodeSlashIcon,
  LayersIcon,
  CubeIcon,
  PhonePortraitIcon,
  DesktopIcon,
  HardwareChipIcon,
  CloudIcon,
  OpenIcon,
  CheckmarkIcon,
} from "@/components/icons";

const pricedServices = [
  {
    icon: GlobeIcon,
    title: "Web Development",
    description: "Fast, responsive websites, PWAs, and e-commerce platforms built for startups and growing businesses. Modern, scalable, and optimized for conversions and SEO.",
    features: ["Responsive Design", "SEO Optimized", "CMS Integration", "Analytics Setup"],
  },
  {
    icon: ColorPaletteIcon,
    title: "Web Design",
    description: "Clean, user-centered designs that strengthen your brand and convert visitors into customers — perfect for small to mid-sized businesses.",
    features: ["UI/UX Design", "Brand Identity", "Wireframing", "Prototype Delivery"],
  },
  {
    icon: ServerIcon,
    title: "Web Hosting",
    description: "Reliable, secure hosting with 99.9% uptime, daily backups, and local support — built to keep your South African business online 24/7.",
    features: ["99.9% Uptime", "SSL Certificates", "Daily Backups", "24/7 Support"],
  },
  {
    icon: FlaskIcon,
    title: "Software Testing",
    description: "Thorough QA and testing to ensure your product is stable, secure, and ready for real users — reducing costly fixes after launch.",
    features: ["Manual Testing", "Automated Testing", "Performance Testing", "Security Audits"],
  },
  {
    icon: CodeSlashIcon,
    title: "Software Development",
    description: "Custom software solutions tailored for startups and SMBs — from internal tools to customer-facing systems that help you scale efficiently.",
    features: ["Custom Software", "API Development", "Cloud Integration", "Maintenance"],
  },
  {
    icon: LayersIcon,
    title: "Full Stack Development",
    description: "Complete front-to-back development delivering robust, scalable applications that grow with your business.",
    features: ["Frontend & Backend", "Database Design", "DevOps Setup", "Scalable Architecture"],
  },
];

const additionalServices = [
  {
    icon: PhonePortraitIcon,
    title: "Mobile Development",
    description: "Native and cross-platform mobile apps (Flutter & React Native) that help startups and growing businesses engage customers on the go.",
  },
  {
    icon: DesktopIcon,
    title: "Desktop Applications",
    description: "Powerful cross-platform desktop tools built for business operations, internal teams, and enterprise workflows.",
  },
  {
    icon: FlaskIcon,
    title: "Automation & AI Solutions",
    description: "Intelligent automation, AI-powered workflows, chatbots, and machine learning solutions that reduce manual work and drive smarter business decisions.",
  },
  {
    icon: HardwareChipIcon,
    title: "API & Backend Development",
    description: "Secure, scalable REST/GraphQL APIs and backend systems with seamless third-party integrations — POPIA compliant.",
  },
  {
    icon: CubeIcon,
    title: "SaaS Products",
    description: "End-to-end SaaS development for startups — subscription billing, user management, and scalable architecture to support rapid growth.",
  },
  {
    icon: CloudIcon,
    title: "Cloud & DevOps",
    description: "Cloud migration, CI/CD pipelines, and infrastructure automation that reduce costs and improve reliability for growing companies.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-14 relative">
      <div className="absolute inset-0 hero-gradient opacity-50" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our <span className="heading-accent">Services</span>
          </h2>
          <p className="text-muted-foreground">
            Practical technology solutions built for startups and small to mid-sized businesses in South Africa.
            From idea to growth — we help you move faster and scale smarter.
          </p>
        </div>

        {/* Priced Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pricedServices.map((service, index) => (
            <div
              key={service.title}
              className="group relative border border-border rounded-2xl p-6 bg-card hover:bg-secondary/30 transition-all duration-300 hover:-translate-y-1 flex flex-col"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-6 h-6 text-accent-foreground" />
              </div>

              <h3 className="text-xl font-semibold mb-1 flex items-center justify-between">
                {service.title}
                <OpenIcon className="w-5 h-5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
              </h3>

              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {service.description}
              </p>

              <ul className="mt-auto space-y-2">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckmarkIcon className="w-4 h-4 shrink-0 text-accent" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Additional Solutions Header */}
        <div className="text-center max-w-2xl mx-auto mt-20 mb-12">
          <h3 className="text-2xl md:text-3xl font-bold mb-3">
            More <span className="heading-accent">Solutions</span>
          </h3>
          <p className="text-muted-foreground">
            Advanced technology services designed to help growing businesses scale efficiently. Contact us for a custom quote.
          </p>
        </div>

        {/* Additional Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {additionalServices.map((service, index) => (
            <div
              key={service.title}
              className="group relative border border-border rounded-2xl p-6 bg-card hover:bg-secondary/30 transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-6 h-6 text-accent-foreground" />
              </div>

              <h3 className="text-xl font-semibold mb-2 flex items-center justify-between">
                {service.title}
                <OpenIcon className="w-5 h-5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

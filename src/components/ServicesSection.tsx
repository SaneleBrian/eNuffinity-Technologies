import {
  Globe,
  Paintbrush,
  Server,
  TestTube,
  Code2,
  Layers,
  Boxes,
  BarChart3,
  Brain,
  Link2,
  Smartphone,
  Monitor,
  Plug,
  Wrench,
  Cloud,
  ArrowUpRight,
  Check,
} from "lucide-react";

const pricedServices = [
  {
    icon: Globe,
    title: "Web Development",
    price: "R7,000",
    period: "starting from",
    description: "Responsive sites, PWAs, e-commerce, and SaaS platforms built with cutting-edge technologies for optimal performance.",
    gradient: "from-blue-500 to-cyan-400",
    features: ["Responsive Design", "SEO Optimized", "CMS Integration", "Analytics Setup"],
  },
  {
    icon: Paintbrush,
    title: "Web Design",
    price: "R3,000",
    period: "starting from",
    description: "Stunning, user-centered designs that captivate your audience and elevate your brand identity across all devices.",
    gradient: "from-violet-500 to-purple-400",
    features: ["UI/UX Design", "Brand Identity", "Wireframing", "Prototype Delivery"],
  },
  {
    icon: Server,
    title: "Web Hosting",
    price: "R500",
    period: "per month",
    description: "Reliable, scalable hosting infrastructure with enterprise-grade security, keeping your systems running 24/7.",
    gradient: "from-emerald-500 to-teal-400",
    features: ["99.9% Uptime", "SSL Certificates", "Daily Backups", "24/7 Support"],
  },
  {
    icon: TestTube,
    title: "Software Testing",
    price: "R3,500",
    period: "starting from",
    description: "Comprehensive QA and testing services to ensure your software is bug-free, performant, and production-ready.",
    gradient: "from-orange-500 to-amber-400",
    features: ["Manual Testing", "Automated Testing", "Performance Testing", "Security Audits"],
  },
  {
    icon: Code2,
    title: "Software Development",
    price: "R12,000",
    period: "starting from",
    description: "End-to-end software solutions from desktop applications to enterprise systems, tailored to your business needs.",
    gradient: "from-pink-500 to-rose-400",
    features: ["Custom Software", "API Development", "Cloud Integration", "Maintenance"],
  },
  {
    icon: Layers,
    title: "Full Stack Development",
    price: "R20,000",
    period: "starting from",
    description: "Complete front-end and back-end development delivering robust, scalable applications with seamless experiences.",
    gradient: "from-indigo-500 to-blue-400",
    features: ["Frontend & Backend", "Database Design", "DevOps Setup", "Scalable Architecture"],
  },
];

const additionalServices = [
  {
    icon: Smartphone,
    title: "Mobile Development",
    description: "Native (iOS/Android) and cross-platform (Flutter/React Native) apps delivering exceptional experiences on every device.",
    gradient: "from-red-500 to-pink-400",
  },
  {
    icon: Monitor,
    title: "Desktop Applications",
    description: "Cross-platform desktop tools built with Electron, .NET, or Java for enterprise and business-critical needs.",
    gradient: "from-sky-500 to-blue-400",
  },
  {
    icon: Plug,
    title: "API & Backend Development",
    description: "RESTful/GraphQL APIs, microservices architecture, and secure data handling with scalable backend infrastructure.",
    gradient: "from-teal-500 to-emerald-400",
  },
  {
    icon: Link2,
    title: "Integration Services",
    description: "Third-party integrations for verifications, background checks, KYC/AML, payment gateways, CRM/ERP systems. POPIA compliant.",
    gradient: "from-indigo-500 to-blue-400",
  },
  {
    icon: Boxes,
    title: "SaaS Products",
    description: "End-to-end SaaS development with subscription models, user management, and seamless third-party integrations.",
    gradient: "from-violet-500 to-purple-400",
  },
  {
    icon: BarChart3,
    title: "Data Analysis",
    description: "Transform raw data into actionable insights with advanced analytics, visualization dashboards, and reporting tools.",
    gradient: "from-orange-500 to-amber-400",
  },
  {
    icon: Brain,
    title: "Machine Learning & AI",
    description: "AI-powered solutions including predictive models, NLP, computer vision, and intelligent automation.",
    gradient: "from-pink-500 to-rose-400",
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    description: "Cloud migration (AWS/Azure/GCP), CI/CD pipelines, containerization, and infrastructure-as-code for seamless deployments.",
    gradient: "from-cyan-500 to-blue-400",
  },
  {
    icon: Wrench,
    title: "Maintenance & Support",
    description: "Ongoing support, bug fixes, performance optimization, and feature enhancements to keep your software running smoothly.",
    gradient: "from-amber-500 to-yellow-400",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 relative">
      <div className="absolute inset-0 hero-gradient opacity-50" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-muted-foreground">
            Comprehensive technology solutions tailored to your business needs.
            From concept to deployment, we've got you covered.
          </p>
        </div>

        {/* Priced Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pricedServices.map((service, index) => (
            <div
              key={service.title}
              className="group relative gradient-border rounded-2xl p-6 bg-card hover:bg-secondary/30 transition-all duration-300 hover:-translate-y-1 flex flex-col"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="w-6 h-6 text-background" />
              </div>

              <h3 className="text-xl font-semibold mb-1 flex items-center justify-between">
                {service.title}
                <ArrowUpRight className="w-5 h-5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
              </h3>

              <div className="mb-3">
                <span className={`text-2xl font-bold bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`}>
                  {service.price}
                </span>
                <span className="text-muted-foreground text-sm ml-1.5">{service.period}</span>
              </div>

              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {service.description}
              </p>

              <ul className="mt-auto space-y-2">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Check className="w-4 h-4 shrink-0 text-emerald-400" />
                    {feature}
                  </li>
                ))}
              </ul>

              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
            </div>
          ))}
        </div>

        {/* Additional Solutions Header */}
        <div className="text-center max-w-2xl mx-auto mt-20 mb-12">
          <h3 className="text-2xl md:text-3xl font-bold mb-3">
            More <span className="gradient-text">Solutions</span>
          </h3>
          <p className="text-muted-foreground">
            We also specialize in these advanced technology domains. Contact us for a custom quote.
          </p>
        </div>

        {/* Additional Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {additionalServices.map((service, index) => (
            <div
              key={service.title}
              className="group relative gradient-border rounded-2xl p-6 bg-card hover:bg-secondary/30 transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="w-6 h-6 text-background" />
              </div>

              <h3 className="text-xl font-semibold mb-2 flex items-center justify-between">
                {service.title}
                <ArrowUpRight className="w-5 h-5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>

              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

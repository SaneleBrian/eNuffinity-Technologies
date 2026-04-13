import { Search, FileText, Palette, Code2, TestTube, Rocket, HeadphonesIcon } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Discovery",
    description: "We dive deep into your business goals, target audience, and technical requirements to define a clear project scope.",
  },
  {
    icon: FileText,
    title: "Planning & Wireframing",
    description: "Detailed project roadmap, wireframes, and architecture planning with Agile sprint milestones for full transparency.",
  },
  {
    icon: Palette,
    title: "Design",
    description: "User-centered UI/UX design with interactive prototypes — we iterate until the experience feels perfect.",
  },
  {
    icon: Code2,
    title: "Development",
    description: "Clean, scalable code built with modern frameworks. Encrypted integrations and secure data handling throughout.",
  },
  {
    icon: TestTube,
    title: "Testing & QA",
    description: "Rigorous manual and automated testing — performance, security, and integration tests to ensure production readiness.",
  },
  {
    icon: Rocket,
    title: "Deployment",
    description: "Smooth deployment to cloud infrastructure with CI/CD pipelines, monitoring dashboards, and zero-downtime releases.",
  },
  {
    icon: HeadphonesIcon,
    title: "Support & Maintenance",
    description: "Ongoing support, feature enhancements, and proactive monitoring to keep your software running at peak performance.",
  },
];

const ProcessSection = () => {
  return (
    <section id="process" className="py-24 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            How We <span className="gradient-text">Work</span>
          </h2>
          <p className="text-muted-foreground">
            A transparent, Agile-driven process from discovery to deployment — with security
            and compliance baked into every step.
          </p>
        </div>

        <div className="relative max-w-3xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-primary/20 hidden md:block" />

          <div className="space-y-8">
            {steps.map((step, index) => (
              <div key={step.title} className="flex gap-6 items-start group">
                {/* Step number / icon */}
                <div className="relative z-10 w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <step.icon className="w-5 h-5 text-primary-foreground" />
                </div>

                <div className="gradient-border rounded-xl p-5 bg-card flex-1 hover:bg-secondary/30 transition-colors">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs font-bold text-primary">STEP {index + 1}</span>
                    <h3 className="text-lg font-semibold">{step.title}</h3>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;

import {
  Search, FileText, Palette, Code2, TestTube, Rocket, HeadphonesIcon,
} from "lucide-react";
import { Reveal } from "@/components/Reveal";

const steps = [
  { icon: Search, title: "Discovery", description: "We dive deep into your business goals, target audience, and technical requirements." },
  { icon: FileText, title: "Planning & Wireframing", description: "Detailed project roadmap, wireframes, and architecture planning with Agile milestones." },
  { icon: Palette, title: "Design", description: "User-centered UI/UX design with interactive prototypes — iterated until perfect." },
  { icon: Code2, title: "Development", description: "Clean, scalable code built with modern frameworks and secure data handling." },
  { icon: TestTube, title: "Testing & QA", description: "Rigorous manual and automated testing for performance, security, and integration." },
  { icon: Rocket, title: "Deployment", description: "Smooth deployment with CI/CD pipelines, monitoring, and zero-downtime releases." },
  { icon: HeadphonesIcon, title: "Support & Maintenance", description: "Ongoing support, feature enhancements, and proactive monitoring." },
];

const HowWeWorkSection = () => {
  return (
    <section id="process" className="py-14 relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-20" />

      <div className="container mx-auto px-4 relative z-10">
        {/* How We Work — redesigned as horizontal numbered cards */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-block text-xs font-bold tracking-widest text-primary uppercase mb-3">
              Our Methodology
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              How We <span className="heading-accent">Work</span>
            </h2>
            <p className="text-muted-foreground">
              A transparent, Agile-driven process from discovery to deployment — with security
              and compliance baked into every step.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {steps.map((step, index) => (
              <Reveal
                key={step.title}
                delay={index * 90}
                variant="up"
                className="group relative rounded-2xl p-6 bg-card border border-border/60 hover:border-primary/40 hover:-translate-y-1 transition-all duration-300 overflow-hidden"
              >
                {/* Decorative gradient blob */}
                <div className="absolute -top-16 -right-16 w-40 h-40 rounded-full bg-gradient-to-br from-primary/15 to-accent/10 blur-3xl opacity-60 group-hover:opacity-100 group-hover:scale-125 transition-all duration-500 pointer-events-none" />

                {/* Subtle grid pattern */}
                <div
                  className="absolute inset-0 opacity-[0.04] group-hover:opacity-[0.08] transition-opacity pointer-events-none"
                  style={{
                    backgroundImage:
                      "linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)",
                    backgroundSize: "22px 22px",
                  }}
                />

                {/* Corner accent bracket */}
                <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-primary/40 rounded-tl-md group-hover:border-primary transition-colors pointer-events-none" />
                <div className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-accent/40 rounded-br-md group-hover:border-accent transition-colors pointer-events-none" />

                {/* Big background number */}
                <span className="absolute -top-2 -right-1 text-[6rem] font-black leading-none text-primary/5 group-hover:text-primary/10 transition-colors select-none pointer-events-none">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div className="relative">
                  <div className="relative w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg shadow-primary/20">
                    <step.icon className="w-5 h-5 text-primary-foreground" />
                    {/* Pulse ring */}
                    <span className="absolute inset-0 rounded-xl ring-2 ring-primary/30 group-hover:ring-primary/60 group-hover:scale-125 group-hover:opacity-0 transition-all duration-700 pointer-events-none" />
                  </div>

                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[10px] font-bold tracking-widest text-primary uppercase">
                      Step {index + 1}
                    </span>
                    <div className="h-px flex-1 bg-gradient-to-r from-primary/30 to-transparent" />
                  </div>

                  <h4 className="text-base font-semibold mb-2 text-foreground">{step.title}</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
                </div>

                {/* Bottom progress bar */}
                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary to-accent scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeWorkSection;
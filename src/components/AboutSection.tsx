import { CheckCircle2, Target, Lightbulb, Users, ShieldCheck } from "lucide-react";

const features = [
  "Expert team of developers and engineers",
  "Agile development methodology",
  "Transparent communication",
  "On-time delivery guaranteed",
  "Post-launch support & maintenance",
  "Competitive pricing models",
  "POPIA & GDPR compliant",
  "Secure API integrations",
];

const values = [
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Constantly exploring new technologies — from AI to blockchain — to deliver cutting-edge, future-proof solutions.",
  },
  {
    icon: ShieldCheck,
    title: "Reliability & Security",
    description: "Enterprise-grade security practices and encrypted integrations, critical for verification and background check services.",
  },
  {
    icon: Users,
    title: "Client-Centric",
    description: "Your success is our success. We build lasting partnerships based on trust, transparency, and measurable results.",
  },
  {
    icon: Target,
    title: "Mission-Driven",
    description: "Delivering limitless, secure, and integrated software that empowers businesses to scale effortlessly.",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              About <span className="gradient-text">eNuffinity Technologies</span>
            </h2>

            <p className="text-muted-foreground mb-4 leading-relaxed">
              Founded by <span className="text-foreground font-medium">Sanele Siphosethu Sithole</span> in
              Johannesburg, South Africa, eNuffinity Technologies (PTY) LTD was born from a vision of infinite
              technological possibilities. What started as a passion for building impactful software
              has grown into a forward-thinking company dedicated to transforming businesses across
              South Africa and globally.
            </p>

            <p className="text-muted-foreground mb-8 leading-relaxed">
              With expertise spanning full-stack web and mobile development, cross-platform desktop
              applications, RESTful & GraphQL API design, and specialist third-party integrations —
              including verification, KYC, AML, and background check services — we deliver
              comprehensive digital solutions that drive real, measurable results.
            </p>

            {/* Mission Statement */}
            <div className="gradient-border rounded-xl p-5 bg-card mb-8">
              <p className="text-sm italic text-muted-foreground">
                <span className="text-foreground font-semibold">Our Mission:</span>{" "}
                "Delivering limitless, secure, and integrated software that empowers businesses to
                scale effortlessly."
              </p>
            </div>

            {/* Features List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {features.map((feature) => (
                <div key={feature} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-sm text-foreground">{feature}</span>
                </div>
              ))}
            </div>

            {/* Team Expertise */}
            <div className="mt-8 glass rounded-xl p-5">
              <h4 className="text-sm font-semibold text-foreground mb-3">Our Expertise</h4>
              <div className="flex flex-wrap gap-2">
                {["React / Next.js", "Node.js", "Flutter / React Native", ".NET / Electron", "REST / GraphQL", "PostgreSQL", "AWS / Azure", "Python / Django"].map((skill) => (
                  <span key={skill} className="text-xs px-3 py-1.5 rounded-full bg-primary/10 text-primary font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Content - Values */}
          <div className="space-y-6">
            {values.map((value) => (
              <div
                key={value.title}
                className="gradient-border rounded-xl p-6 bg-card hover:bg-secondary/30 transition-colors duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0">
                    <value.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
                    <p className="text-muted-foreground text-sm">{value.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

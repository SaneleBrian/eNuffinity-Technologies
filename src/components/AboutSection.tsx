import {
  CheckmarkCircleIcon,
  LocateIcon,
  BulbIcon,
  PeopleIcon,
  ShieldCheckmarkIcon,
  RibbonIcon,
  GlobeIcon,
  TrendingUpIcon,
  FlashIcon,
  BusinessIcon,
  SettingsIcon,
  LayersIcon,
  HardwareChipIcon,
  ServerIcon,
  GitBranchIcon,
  BriefcaseIcon,
  HeartIcon,
  CartIcon,
  SchoolIcon,
  CubeIcon,
  HomeIcon,
  CashIcon,
} from "@/components/icons";
import { Reveal } from "@/components/Reveal";
import industryFintech from "@/assets/industry-fintech.avif";
import industryHealthcare from "@/assets/industry-healthcare.jpg";
import industryEcommerce from "@/assets/industry-ecommerce.jpg";
import industryLogistics from "@/assets/industry-logistics.jpg";
import industryEducation from "@/assets/industry-education.jpg";
import industryRealestate from "@/assets/industry-realestate.jpg";
import industryServices from "@/assets/industry-services.jpg";
import industrySaas from "@/assets/industry-saas.jpg";

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
    icon: BulbIcon,
    title: "Innovation",
    description:
      "Constantly exploring new technologies — from AI to blockchain — to deliver cutting-edge, future-proof solutions.",
  },
  {
    icon: ShieldCheckmarkIcon,
    title: "Reliability & Security",
    description:
      "Enterprise-grade security practices and encrypted integrations, critical for verification and background check services.",
  },
  {
    icon: PeopleIcon,
    title: "Client-Centric",
    description:
      "Your success is our success. We build lasting partnerships based on trust, transparency, and measurable results.",
  },
  {
    icon: LocateIcon,
    title: "Mission-Driven",
    description:
      "Empowering businesses with limitless, secure, and integrated software solutions that drive effortless growth.",
  },
];


const capabilities = [
  {
    icon: GlobeIcon,
    title: "Digital Presence & Marketing",
    description:
      "High-converting websites, SEO foundations, and brand-aligned web experiences that strengthen your commercial presence and accelerate digital marketing efforts.",
  },
  {
    icon: ServerIcon,
    title: "CRM & Business Systems",
    description:
      "Custom CRMs, ERPs, dashboards, and internal tools tailored to how your team actually works — replacing spreadsheets with software that scales.",
  },
  {
    icon: LayersIcon,
    title: "Microservices & APIs",
    description:
      "Modern, decoupled architectures using REST, GraphQL, and event-driven services — built to evolve with your business without rewrites.",
  },
  {
    icon: SettingsIcon,
    title: "Process Automation",
    description:
      "Automate repetitive workflows, document handling, notifications, and integrations to cut costs, reduce errors, and dramatically improve delivery time.",
  },
  {
    icon: GitBranchIcon,
    title: "Third-Party Integrations",
    description:
      "Seamless collaboration with major service providers — built natively on the partner's tech stack so your operations feel like one connected system.",
  },
  {
    icon: HardwareChipIcon,
    title: "AI & Intelligent Workflows",
    description:
      "Embed AI assistants, document understanding, and decision automation into your existing products to unlock new efficiency without disruption.",
  },
];

const industries = [
  { icon: CashIcon, label: "Fintech & Banking", image: industryFintech },
  { icon: HeartIcon, label: "Healthcare", image: industryHealthcare },
  { icon: CartIcon, label: "E-commerce", image: industryEcommerce, imagePosition: "center 85%" },
  { icon: CubeIcon, label: "Logistics", image: industryLogistics },
  { icon: SchoolIcon, label: "Education", image: industryEducation },
  { icon: HomeIcon, label: "Real Estate", image: industryRealestate },
  { icon: BriefcaseIcon, label: "Professional Services", image: industryServices },
  { icon: BusinessIcon, label: "Enterprise SaaS", image: industrySaas },
];

const AnimatedBrandVisual = () => (
  <div className="relative w-full max-w-md mx-auto aspect-square">
    {/* Outer pulse ring */}
    <div className="absolute inset-0 rounded-full bg-primary/10 blur-3xl animate-[pulse-glow_3s_ease-in-out_infinite]" />
    <div className="absolute inset-8 rounded-full bg-accent/10 blur-2xl animate-[pulse-glow_3s_ease-in-out_infinite_1.5s]" />

    {/* Rotating dashed orbits */}
    <svg
      viewBox="0 0 400 400"
      className="absolute inset-0 w-full h-full"
      fill="none"
      aria-hidden="true"
    >
      <circle
        cx="200"
        cy="200"
        r="170"
        stroke="hsl(var(--primary) / 0.25)"
        strokeWidth="1"
        strokeDasharray="4 8"
        style={{ transformOrigin: "center", animation: "spin 40s linear infinite" }}
      />
      <circle
        cx="200"
        cy="200"
        r="135"
        stroke="hsl(var(--accent) / 0.25)"
        strokeWidth="1"
        strokeDasharray="3 10"
        style={{ transformOrigin: "center", animation: "spin 30s linear infinite reverse" }}
      />
      <circle
        cx="200"
        cy="200"
        r="100"
        stroke="hsl(var(--primary) / 0.2)"
        strokeWidth="1"
        strokeDasharray="2 6"
        style={{ transformOrigin: "center", animation: "spin 20s linear infinite" }}
      />

      {/* Infinity symbol — centerpiece */}
      <g transform="translate(200 200) scale(3.5) translate(-24 -24)">
        <path
          d="M14 24c0-3.3 2.7-6 6-6 2.2 0 4.1 1.2 5.2 3L28 24l-2.8 3c-1.1 1.8-3 3-5.2 3-3.3 0-6-2.7-6-6z"
          stroke="hsl(var(--primary))"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M34 24c0 3.3-2.7 6-6 6-2.2 0-4.1-1.2-5.2-3L20 24l2.8-3c1.1-1.8 3-3 5.2-3 3.3 0 6 2.7 6 6z"
          stroke="hsl(var(--accent))"
          strokeWidth="2"
          strokeLinecap="round"
        />
        {/* Pulsing glow on infinity */}
        <path
          d="M14 24c0-3.3 2.7-6 6-6 2.2 0 4.1 1.2 5.2 3L28 24l-2.8 3c-1.1 1.8-3 3-5.2 3-3.3 0-6-2.7-6-6z"
          stroke="hsl(var(--primary))"
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
          opacity="0"
        >
          <animate attributeName="opacity" values="0;0.4;0" dur="3s" repeatCount="indefinite" />
        </path>
        <path
          d="M34 24c0 3.3-2.7 6-6 6-2.2 0-4.1-1.2-5.2-3L20 24l2.8-3c1.1-1.8 3-3 5.2-3 3.3 0 6 2.7 6 6z"
          stroke="hsl(var(--accent))"
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
          opacity="0"
        >
          <animate attributeName="opacity" values="0;0.4;0" dur="3s" repeatCount="indefinite" begin="1.5s" />
        </path>

        {/* Orbiting particles along the infinity path */}
        <circle r="1.2" fill="hsl(var(--primary))">
          <animateMotion
            dur="5s"
            repeatCount="indefinite"
            path="M14 24c0-3.3 2.7-6 6-6 2.2 0 4.1 1.2 5.2 3L28 24l-2.8 3c-1.1 1.8-3 3-5.2 3-3.3 0-6-2.7-6-6z"
          />
        </circle>
        <circle r="1.2" fill="hsl(var(--accent))">
          <animateMotion
            dur="5s"
            repeatCount="indefinite"
            path="M34 24c0 3.3-2.7 6-6 6-2.2 0-4.1-1.2-5.2-3L20 24l2.8-3c1.1-1.8 3-3 5.2-3 3.3 0 6 2.7 6 6z"
          />
        </circle>
      </g>

      {/* Floating tech node badges around the orbit */}
      {[
        { x: 200, y: 30, label: "API" },
        { x: 370, y: 200, label: "SaaS" },
        { x: 200, y: 370, label: "Cloud" },
        { x: 30, y: 200, label: "Apps" },
      ].map((n) => (
        <g key={n.label}>
          <circle cx={n.x} cy={n.y} r="22" fill="hsl(var(--card))" stroke="hsl(var(--primary) / 0.5)" strokeWidth="1" />
          <text
            x={n.x}
            y={n.y + 4}
            textAnchor="middle"
            fontSize="10"
            fontFamily="JetBrains Mono, monospace"
            fill="hsl(var(--primary))"
            fontWeight="600"
          >
            {n.label}
          </text>
        </g>
      ))}
    </svg>

    {/* Floating glass badge */}
    <div className="absolute -bottom-14 left-1/2 -translate-x-1/2 glass rounded-xl px-4 py-3 flex items-center gap-3 whitespace-nowrap">
      <div className="w-9 h-9 rounded-lg bg-accent flex items-center justify-center">
        <RibbonIcon className="w-4 h-4 text-primary-foreground" />
      </div>
      <div className="text-left">
        <p className="text-xs font-semibold text-foreground">Founded 2024 · Johannesburg</p>
        <p className="text-[10px] text-muted-foreground">Engineered for global scale</p>
      </div>
    </div>
  </div>
);

const AboutSection = () => {
  return (
    <section id="about" className="py-14 bg-secondary/20 relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-10" />

      <div className="container mx-auto px-4 relative z-10">
        {/* ============== PAGE 1 — Who we are ============== */}

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-block text-xs font-bold tracking-widest text-primary uppercase mb-3">
            Who We Are
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="heading-accent">eNuffinity Technologies</span>
          </h2>
          <p className="text-muted-foreground">
            A forward-thinking software company born in Johannesburg, building secure
            and scalable digital solutions for businesses worldwide.
          </p>
        </div>

        {/* Animated Brand Visual + Story */}
        <div className="grid lg:grid-cols-2 gap-10 items-center mb-16">
          {/* Animated visual (replaces the large photo) */}
          <div className="order-2 lg:order-1">
            <AnimatedBrandVisual />
          </div>

          {/* Story */}
          <div className="order-1 lg:order-2">
            <h3 className="text-2xl md:text-3xl font-bold mb-5 leading-tight">
              Building the future of <span className="heading-accent">software</span>, one solution at a time.
            </h3>

            <p className="text-muted-foreground mb-4 leading-relaxed">
              Founded by{" "}
              <span className="text-foreground font-medium">Sanele Sithole</span>,
              eNuffinity Technologies (PTY) LTD was born from a vision of infinite technological
              possibilities. What started as a passion for building impactful software has
              grown into a forward-thinking company transforming businesses across South
              Africa and globally.
            </p>

            <p className="text-muted-foreground mb-6 leading-relaxed">
              We help companies and individuals strengthen their commercial presence,
              modernise legacy systems, and collaborate with major service providers through
              seamless, native integrations — built on the partner's own tech stack so the
              experience feels like one connected platform.
            </p>

            {/* Mission */}
            <div className="border border-border rounded-xl p-5 bg-card">
              <div className="flex items-start gap-3">
                <LocateIcon className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <p className="text-sm italic text-muted-foreground">
                  <span className="text-foreground font-semibold not-italic">Our Mission: </span>
                  "Empowering businesses with limitless, secure, and integrated software solutions that drive effortless growth."
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ============== PAGE 2 — What we do for clients ============== */}

        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-block text-xs font-bold tracking-widest text-primary uppercase mb-3">
            What We Do
          </span>
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            End-to-end engineering for <span className="heading-accent">growing businesses</span>
          </h3>
          <p className="text-muted-foreground">
            From sharpening your digital presence to automating mission-critical workflows —
            we partner with you across the entire software lifecycle.
          </p>
        </div>

        {/* Capabilities grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-20">
          {capabilities.map((cap, i) => (
            <Reveal
              key={cap.title}
              delay={i * 90}
              variant="up"
              className="border border-border rounded-xl p-6 bg-card hover:bg-secondary/30 hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="w-11 h-11 rounded-lg bg-accent flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <cap.icon className="w-5 h-5 text-primary-foreground" />
              </div>
              <h4 className="text-base font-semibold mb-2">{cap.title}</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">{cap.description}</p>
            </Reveal>
          ))}
        </div>

        {/* Outcomes / Why partner with us — 3 highlight strip */}
        <div className="grid md:grid-cols-3 gap-5 mb-20">
          <Reveal delay={0} variant="up" className="rounded-2xl p-6 bg-card border border-border/50 relative overflow-hidden">
            <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-primary/10 blur-2xl" />
            <TrendingUpIcon className="w-7 h-7 text-primary mb-3 relative z-10" />
            <h4 className="text-lg font-semibold mb-1 relative z-10">Stronger commercial presence</h4>
            <p className="text-sm text-muted-foreground relative z-10">
              Modern, fast websites that convert visitors into customers and amplify every
              marketing rand you spend.
            </p>
          </Reveal>
          <Reveal delay={120} variant="up" className="rounded-2xl p-6 bg-card border border-border/50 relative overflow-hidden">
            <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-accent/10 blur-2xl" />
            <FlashIcon className="w-7 h-7 text-primary mb-3 relative z-10" />
            <h4 className="text-lg font-semibold mb-1 relative z-10">Faster delivery, lower cost</h4>
            <p className="text-sm text-muted-foreground relative z-10">
              Automation and integrations that remove manual work — so your team ships more
              with less overhead.
            </p>
          </Reveal>
          <Reveal delay={240} variant="up" className="rounded-2xl p-6 bg-card border border-border/50 relative overflow-hidden">
            <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-primary/10 blur-2xl" />
            <ShieldCheckmarkIcon className="w-7 h-7 text-primary mb-3 relative z-10" />
            <h4 className="text-lg font-semibold mb-1 relative z-10">Enterprise-grade by default</h4>
            <p className="text-sm text-muted-foreground relative z-10">
              Security, compliance, and observability baked in from day one — built for
              regulated industries and global scale.
            </p>
          </Reveal>
        </div>

        {/* Industries we serve */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h3 className="text-2xl md:text-3xl font-bold mb-3">
              Industries we <span className="heading-accent">serve</span>
            </h3>
            <p className="text-muted-foreground text-sm">
              Trusted across regulated and high-growth sectors.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {industries.map((ind, i) => (
              <Reveal
                key={ind.label}
                delay={i * 60}
                variant="scale"
                className="group relative overflow-hidden rounded-2xl border border-border/50 bg-card hover:border-primary/50 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={ind.image}
                    alt={`${ind.label} industry illustration`}
                    loading="lazy"
                    width={768}
                    height={512}
                    style={{ objectPosition: ind.imagePosition ?? "center" }}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 saturate-[1.05] contrast-[1.02]"
                  />
                  {/* Dual overlay: bottom fade for label legibility + tint that matches both themes */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/10" />
                  <div className="absolute inset-0 bg-accent/10 mix-blend-overlay opacity-60 group-hover:opacity-90 transition-opacity" />
                  <div className="absolute inset-0 ring-1 ring-inset ring-border/40 group-hover:ring-primary/40 transition-colors rounded-2xl" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center flex-shrink-0 shadow-lg shadow-primary/30">
                    <ind.icon className="w-4 h-4 text-primary-foreground" />
                  </div>
                  <span className="text-sm font-semibold text-foreground drop-shadow-sm">{ind.label}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h3 className="text-2xl md:text-3xl font-bold mb-3">
              Why Choose <span className="heading-accent">Us</span>
            </h3>
            <p className="text-muted-foreground text-sm">
              Everything you need from a trusted technology partner.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 max-w-5xl mx-auto">
            {features.map((feature, i) => (
              <Reveal
                key={feature}
                delay={i * 50}
                variant="up"
                className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border/50 hover:border-primary/40 hover:bg-secondary/30 transition-all"
              >
                <CheckmarkCircleIcon className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-sm text-foreground">{feature}</span>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Core Values */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h3 className="text-2xl md:text-3xl font-bold mb-3">
              Our Core <span className="heading-accent">Values</span>
            </h3>
            <p className="text-muted-foreground text-sm">
              The principles that guide everything we build.
            </p>
          </div>

          <ul className="max-w-4xl mx-auto divide-y divide-border/60">
            {values.map((value, i) => (
              <Reveal
                key={value.title}
                as="li"
                delay={i * 100}
                variant="left"
                className="flex items-start gap-5 py-6 group"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-full border border-primary/30 flex items-center justify-center group-hover:border-primary transition-colors">
                  <value.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1">{value.title}</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

import { ArrowRight, Sparkles, Globe, Smartphone, Monitor, Code2, Link2, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const quickProps = [
  { icon: Globe, label: "Web Dev" },
  { icon: Smartphone, label: "Mobile Dev" },
  { icon: Monitor, label: "Desktop Apps" },
  { icon: Code2, label: "API Development" },
  { icon: Link2, label: "Integrations" },
  { icon: TrendingUp, label: "Scalable Solutions" },
];

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{ backgroundImage: `url(${heroBg})` }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 hero-gradient" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-transparent to-background" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 grid-pattern opacity-30" />

      {/* Floating Elements */}
      <div className="absolute top-1/4 left-10 w-20 h-20 rounded-full bg-primary/10 blur-xl floating" />
      <div className="absolute bottom-1/4 right-10 w-32 h-32 rounded-full bg-accent/10 blur-xl floating-delayed" />
      <div className="absolute top-1/2 right-1/4 w-16 h-16 rounded-full bg-primary/5 blur-lg floating-slow" />

      <div className="container mx-auto px-4 relative z-10 pt-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 animate-fade-in">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">Trusted by South African & Global Businesses</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Infinite <span className="gradient-text">Innovation</span> Through
            <br />
            Custom Software Solutions
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Building tomorrow's digital experiences — full-stack web, mobile & desktop apps,
            robust APIs, and expert integrations with verification & background check services.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <Button variant="hero" size="xl" onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}>
              Discover Our Services
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="heroOutline" size="xl" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
              Request a Quote
            </Button>
          </div>

          {/* Quick Value Props */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mt-16 animate-fade-in" style={{ animationDelay: "0.35s" }}>
            {quickProps.map((prop) => (
              <div key={prop.label} className="glass rounded-xl p-3 flex flex-col items-center gap-2 hover:bg-secondary/30 transition-colors">
                <prop.icon className="w-5 h-5 text-primary" />
                <span className="text-xs font-medium text-muted-foreground">{prop.label}</span>
              </div>
            ))}
          </div>

          {/* Stats / Trust Signals */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-14 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            {[
              { value: "200+", label: "Projects Delivered" },
              { value: "50+", label: "Happy Clients" },
              { value: "5+", label: "Years in Business" },
              { value: "24/7", label: "Support Available" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl md:text-4xl font-bold gradient-text">{stat.value}</div>
                <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

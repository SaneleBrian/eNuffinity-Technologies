import {
  ArrowForwardIcon,
  StarIcon,
  GlobeIcon,
  PhonePortraitIcon,
  DesktopIcon,
  CodeSlashIcon,
  LinkIcon,
  TrendingUpIcon,
} from "@/components/icons";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const quickProps = [
  { icon: GlobeIcon, label: "Web Dev" },
  { icon: PhonePortraitIcon, label: "Mobile Dev" },
  { icon: DesktopIcon, label: "Desktop Apps" },
  { icon: CodeSlashIcon, label: "API Development" },
  { icon: LinkIcon, label: "Integrations" },
  { icon: TrendingUpIcon, label: "Scalable Solutions" },
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
      <div className="absolute top-1/4 left-6 md:left-10 w-16 h-16 md:w-20 md:h-20 rounded-full bg-primary/10 blur-xl floating" />
      <div className="absolute bottom-1/4 right-6 md:right-10 w-24 h-24 md:w-32 md:h-32 rounded-full bg-accent/10 blur-xl floating-delayed" />
      <div className="absolute top-1/2 right-1/4 w-12 h-12 md:w-16 md:h-16 rounded-full bg-primary/5 blur-lg floating-slow" />

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 py-16 md:py-20 lg:py-24">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6 md:mb-8 animate-fade-in">
            <StarIcon className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">
              Powering Ambitious Ideas Across South Africa & Beyond
            </span>
          </div>

          {/* Main Heading */}
          <h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-[1.1] animate-fade-in"
            style={{ animationDelay: "0.1s" }}
          >
            Where Ideas Become{" "}
            <span className="text-accent">Scalable Reality</span>
            <br />
            Through Intelligent Software
          </h1>

          {/* Subheading */}
          <p
            className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 md:mb-10 animate-fade-in px-4 sm:px-0"
            style={{ animationDelay: "0.2s" }}
          >
            We don’t just build software — we engineer digital ecosystems that
            grow with your business. From powerful applications to secure
            integrations, we turn complexity into seamless, scalable solutions
            built for the future.
          </p>

          {/* CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in"
            style={{ animationDelay: "0.3s" }}
          >
            <Button
              variant="hero"
              size="xl"
              onClick={() =>
                document
                  .getElementById("services")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Explore What We Build
              <ArrowForwardIcon className="w-5 h-5" />
            </Button>
            <Button
              variant="heroOutline"
              size="xl"
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Start Your Project
            </Button>
          </div>

          {/* Quick Value Props */}
          <div
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4 mt-12 md:mt-16 animate-fade-in"
            style={{ animationDelay: "0.35s" }}
          >
            {quickProps.map((prop) => (
              <div
                key={prop.label}
                className="glass rounded-xl p-3 flex flex-col items-center gap-2 hover:bg-secondary/30 transition-colors"
              >
                <prop.icon className="w-5 h-5 text-primary" />
                <span className="text-xs font-medium text-muted-foreground text-center">
                  {prop.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
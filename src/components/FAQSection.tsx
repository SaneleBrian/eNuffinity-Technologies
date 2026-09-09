import { useState, useEffect, useRef } from "react";
import { ChevronRight, Shield, Clock, Code, FileText, Headphones, Globe, DollarSign, Layers, MessageSquareText, Sparkles } from "lucide-react";

function useScrollReveal(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setIsVisible(true); observer.unobserve(el); } },
      { threshold, rootMargin: "0px 0px -40px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, isVisible };
}

const faqs = [
  {
    question: "What pricing models do you offer?",
    answer: "We offer flexible pricing: fixed-price projects for well-defined scopes, hourly rates for ongoing work, and monthly retainers for continuous development and support. We'll recommend the best model based on your project needs.",
    icon: DollarSign,
    category: "Business",
  },
  {
    question: "How do you handle data privacy in integrations?",
    answer: "Security is at our core. All integrations use encrypted connections (TLS/SSL), we follow POPIA and GDPR compliance standards, and sensitive data like KYC/AML information is handled with strict access controls and audit trails.",
    icon: Shield,
    category: "Security",
  },
  {
    question: "What's your approach to third-party API reliability?",
    answer: "We implement retry mechanisms, circuit breakers, and fallback strategies for all third-party integrations. We also set up monitoring and alerting so issues are caught and resolved before they impact your users.",
    icon: Layers,
    category: "Technical",
  },
  {
    question: "What is the typical project timeline?",
    answer: "Timelines vary by complexity: a standard website takes 2-4 weeks, web applications 4-8 weeks, and enterprise software or mobile apps 8-16+ weeks. We provide a detailed timeline during our discovery phase.",
    icon: Clock,
    category: "Process",
  },
  {
    question: "Do you offer NDA and confidentiality agreements?",
    answer: "Absolutely. We're happy to sign NDAs before any project discussions. Protecting your intellectual property and business information is a priority.",
    icon: FileText,
    category: "Legal",
  },
  {
    question: "Can you work with our existing tech stack?",
    answer: "Yes! We're experienced with a wide range of technologies and can integrate with or extend your existing systems. We'll assess your current stack and recommend the best approach for your goals.",
    icon: Code,
    category: "Technical",
  },
  {
    question: "Do you provide post-launch support?",
    answer: "Yes, we offer comprehensive post-launch maintenance packages including bug fixes, performance monitoring, security updates, and feature enhancements. Our 24/7 support ensures your software stays in top shape.",
    icon: Headphones,
    category: "Support",
  },
  {
    question: "What industries do you serve?",
    answer: "We work across fintech, healthcare, e-commerce, logistics, education, real estate, and more. Our integration expertise with verification and compliance APIs makes us particularly strong in regulated industries.",
    icon: Globe,
    category: "Business",
  },
];

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const header = useScrollReveal(0.2);
  const cards = useScrollReveal(0.1);
  const cta = useScrollReveal(0.2);

  return (
    <section id="faq" className="py-14 relative overflow-hidden">
      <div className="absolute inset-0 hero-gradient opacity-30" />
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-accent/5 blur-3xl" />

      <div className="container mx-auto px-4 relative z-10 max-w-7xl">
        {/* Header */}
        <div
          ref={header.ref}
          className={`text-center max-w-2xl mx-auto mb-14 transition-all duration-700 ease-out ${
            header.isVisible
              ? "opacity-100 translate-y-0 blur-0"
              : "opacity-0 translate-y-5 blur-[4px]"
          }`}
        >
          <span className="text-primary font-mono text-sm tracking-widest uppercase mb-3 block">
            // FAQ
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-5 leading-tight" style={{ lineHeight: '1.1' }}>
            Questions we get
            <br />
            <span className="heading-accent">asked the most</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Everything you need to know before we start building together.
            Can't find your answer? Let's talk.
          </p>
        </div>

        {/* Two-column layout: intro panel + accordion grid */}
        <div className="grid lg:grid-cols-[320px_1fr] gap-8 items-start">
          {/* Sticky intro panel */}
          <aside className="lg:sticky lg:top-24 space-y-4">
            <div className="gradient-border rounded-2xl p-6 bg-card relative overflow-hidden">
              <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full bg-primary/10 blur-2xl" />
              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-3">
                  <Sparkles className="w-4 h-4 text-primary" />
                  <span className="text-xs font-mono uppercase tracking-widest text-primary">Why ask us</span>
                </div>
                <h3 className="text-lg font-semibold mb-2 leading-snug">
                  Built for enterprise. Priced for growth.
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  We engineer software the way regulated industries demand it — secure,
                  observable, well-documented, and ready to scale globally.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {[
                { value: "1 day", label: "Avg. response" },
                { value: "100%", label: "NDA-friendly" },
                { value: "POPIA", label: "Compliant" },
                { value: "24/7", label: "Support tier" },
              ].map((s) => (
                <div key={s.label} className="rounded-xl bg-card border border-border/50 p-3 text-center">
                  <div className="text-base font-bold text-foreground">{s.value}</div>
                  <div className="text-[10px] uppercase tracking-wider text-muted-foreground">{s.label}</div>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="hidden lg:flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors px-2 pt-2"
            >
              <MessageSquareText className="w-4 h-4" />
              Have a different question? Ask us directly →
            </a>
          </aside>

          {/* Accordion grid */}
          <div>


            {/* FAQ cards */}
            <div ref={cards.ref} className="grid sm:grid-cols-2 gap-4">
              {faqs.map((faq, index) => {
                const isOpen = activeIndex === index;
                const Icon = faq.icon;

                return (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(isOpen ? null : index)}
                    className={`group text-left rounded-2xl p-6 transition-all duration-500 ease-out relative overflow-hidden ${
                      isOpen
                        ? "bg-card ring-1 ring-primary/30 shadow-lg shadow-primary/5"
                        : "bg-card/50 hover:bg-card ring-1 ring-border/50 hover:ring-border"
                    } ${
                      cards.isVisible
                        ? "opacity-100 translate-y-0 blur-0"
                        : "opacity-0 translate-y-6 blur-[4px]"
                    }`}
                    style={{
                      willChange: "transform, opacity, filter",
                      transitionDelay: cards.isVisible ? `${index * 80 + 100}ms` : "0ms",
                    }}
                  >
                    {isOpen && (
                      <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-primary/10 blur-2xl pointer-events-none" />
                    )}

                    <div className="relative z-10">
                      <div className="flex items-center justify-between mb-4">
                        <span
                          className={`text-xs font-mono tracking-wider uppercase px-2.5 py-1 rounded-md transition-colors duration-300 ${
                            isOpen
                              ? "bg-primary/15 text-primary"
                              : "bg-secondary text-muted-foreground"
                          }`}
                        >
                          {faq.category}
                        </span>
                        <div
                          className={`w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-300 ${
                            isOpen
                              ? "bg-primary/20 text-primary"
                              : "bg-secondary text-muted-foreground group-hover:text-foreground"
                          }`}
                        >
                          <Icon className="w-4 h-4" />
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <ChevronRight
                          className={`w-4 h-4 mt-1 shrink-0 transition-transform duration-300 ${
                            isOpen ? "rotate-90 text-primary" : "text-muted-foreground"
                          }`}
                        />
                        <h3
                          className={`font-semibold transition-colors duration-300 ${
                            isOpen ? "text-foreground" : "text-foreground/80 group-hover:text-foreground"
                          }`}
                        >
                          {faq.question}
                        </h3>
                      </div>

                      <div
                        className={`grid transition-all duration-500 ease-out ${
                          isOpen ? "grid-rows-[1fr] opacity-100 mt-4" : "grid-rows-[0fr] opacity-0 mt-0"
                        }`}
                      >
                        <div className="overflow-hidden">
                          <div className="pl-7 border-l-2 border-primary/30 ml-[1px]">
                            <p className="text-muted-foreground text-sm leading-relaxed">
                              {faq.answer}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div
          ref={cta.ref}
          className={`mt-16 transition-all duration-700 ease-out ${
            cta.isVisible
              ? "opacity-100 translate-y-0 blur-0"
              : "opacity-0 translate-y-5 blur-[4px]"
          }`}
          style={{ transitionDelay: cta.isVisible ? "200ms" : "0ms" }}
        >
          <div className="gradient-border rounded-2xl bg-card/80 p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-1">Still have questions?</h3>
              <p className="text-muted-foreground text-sm">
                We'd love to hear from you — no obligation, just a conversation.
              </p>
            </div>
            <a
              href="#contact"
              className="shrink-0 inline-flex items-center gap-2 bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold px-6 py-3 rounded-lg hover:shadow-xl hover:shadow-primary/30 hover:scale-105 active:scale-100 transition-all duration-300 text-sm"
            >
              Get in Touch
              <ChevronRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;

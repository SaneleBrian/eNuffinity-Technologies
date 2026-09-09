import { useState, useRef } from "react";
import type { FormEvent } from "react";

import {
  Mail,
  Phone,
  MapPin,
  Send,
  MessageCircle,
  Clock,
  Loader2,
  ShieldCheck,
  Sparkles,
  CheckCircle2,
  Calendar,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import emailjs from "@emailjs/browser";

const SERVICE_ID = "service_osg1frl";
const TEMPLATE_ID = "template_5mmkua3";
const PUBLIC_KEY = "5IpP-QjM-4llqtT6Q";

const trustPoints = [
  "NDA signed before discovery — your IP is protected",
  "Free 30-minute scoping call, no obligation",
  "Typical response within 1 business day",
  "POPIA & GDPR-compliant communication",
];

const contactMethods = [
  {
    icon: Mail,
    label: "Email",
    value: "hello@enuffinity.co.za",
    href: "mailto:hello@enuffinity.co.za",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+27 64 666 4311",
    href: "tel:+27646664311",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "+27 64 666 4311",
    href: "https://wa.me/27646664311",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Johannesburg, South Africa",
  },
  {
    icon: Clock,
    label: "Consultation",
    value: "Free 30-min discovery call",
  },
];

const ContactSection = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setSending(true);
    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY);
      toast.success("Message sent! We'll get back to you shortly.");
      formRef.current.reset();
    } catch {
      toast.error("Failed to send message. Please try again or contact us directly.");
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="py-14 bg-secondary/20 relative overflow-hidden">
      {/* Decorative atmospheric layers */}
      <div className="absolute inset-0 hero-gradient opacity-40 pointer-events-none" />
      <div className="absolute top-10 left-10 w-72 h-72 rounded-full bg-primary/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-accent/10 blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-block text-xs font-bold tracking-widest text-primary uppercase mb-3">
            Let's Build Together
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Start a <span className="heading-accent">conversation</span>
          </h2>
          <p className="text-muted-foreground">
            Tell us about your goals — we'll respond with a clear next step, not a sales pitch.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 items-start">
          {/* Left — Trust + Contact info (2 cols) */}
          <div className="lg:col-span-2 space-y-6">
            {/* Discovery call card */}
            <div className="gradient-border rounded-2xl p-6 bg-card relative overflow-hidden">
              <div className="absolute -top-12 -right-12 w-40 h-40 rounded-full bg-primary/10 blur-2xl" />
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-11 h-11 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                    <Calendar className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Free Discovery Call</h3>
                    <p className="text-xs text-muted-foreground">30 minutes · No obligation</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  We'll listen, ask the right questions, and outline a clear path forward —
                  whether you're scoping a new product or rescuing an existing one.
                </p>
                <ul className="space-y-2">
                  {trustPoints.map((point) => (
                    <li key={point} className="flex items-start gap-2 text-sm text-foreground/90">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Contact channels */}
            <div className="rounded-2xl bg-card border border-border/50 p-6">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">
                Reach us directly
              </h3>
              <div className="space-y-4">
                {contactMethods.map((m) => {
                  const Icon = m.icon;
                  const content = (
                    <>
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <Icon className="w-4 h-4 text-primary" />
                      </div>
                      <div className="min-w-0">
                        <div className="text-xs text-muted-foreground">{m.label}</div>
                        <div className="text-sm text-foreground truncate">{m.value}</div>
                      </div>
                    </>
                  );
                  return m.href ? (
                    <a
                      key={m.label}
                      href={m.href}
                      className="group flex items-center gap-3 hover:text-primary transition-colors"
                    >
                      {content}
                    </a>
                  ) : (
                    <div key={m.label} className="flex items-center gap-3">
                      {content}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Reassurance footer */}
            <div className="glass rounded-xl p-4 flex items-center gap-3">
              <ShieldCheck className="w-5 h-5 text-primary flex-shrink-0" />
              <p className="text-xs text-muted-foreground leading-relaxed">
                Your information is handled in line with <span className="text-foreground font-medium">POPIA</span> and{" "}
                <span className="text-foreground font-medium">GDPR</span>. We never share details with third parties.
              </p>
            </div>
          </div>

          {/* Right — Form (3 cols) */}
          <div className="lg:col-span-3">
            <div className="gradient-border rounded-2xl p-8 bg-card relative overflow-hidden">
              <div className="absolute -top-16 -right-16 w-48 h-48 rounded-full bg-accent/10 blur-3xl pointer-events-none" />

              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-6">
                  <Sparkles className="w-4 h-4 text-primary" />
                  <span className="text-xs font-mono uppercase tracking-widest text-primary">
                    Project Brief
                  </span>
                </div>

                <h3 className="text-xl md:text-2xl font-bold mb-2">
                  Tell us about your project
                </h3>
                <p className="text-sm text-muted-foreground mb-6">
                  The more context you share, the sharper our first response will be.
                </p>

                <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium uppercase tracking-wider text-muted-foreground mb-2">
                        First Name
                      </label>
                      <input
                        name="first_name"
                        type="text"
                        required
                        className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium uppercase tracking-wider text-muted-foreground mb-2">
                        Last Name
                      </label>
                      <input
                        name="last_name"
                        type="text"
                        required
                        className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                        placeholder="Doe"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium uppercase tracking-wider text-muted-foreground mb-2">
                        Work Email
                      </label>
                      <input
                        name="email"
                        type="email"
                        required
                        className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                        placeholder="john@company.com"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium uppercase tracking-wider text-muted-foreground mb-2">
                        Phone (optional)
                      </label>
                      <input
                        name="phone"
                        type="tel"
                        className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                        placeholder="+27..."
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium uppercase tracking-wider text-muted-foreground mb-2">
                      Company (optional)
                    </label>
                    <input
                      name="company"
                      type="text"
                      className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                      placeholder="Acme Pty Ltd"
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium uppercase tracking-wider text-muted-foreground mb-2">
                        Project Type
                      </label>
                      <select
                        name="project_type"
                        className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors text-foreground"
                      >
                        <option value="">Select a type</option>
                        <option value="Web Development">Web Development</option>
                        <option value="Mobile Development">Mobile Development</option>
                        <option value="Desktop Application">Desktop Application</option>
                        <option value="API / Backend Development">API / Backend Development</option>
                        <option value="Integration Services">Integration Services</option>
                        <option value="SaaS Product">SaaS Product</option>
                        <option value="CRM / Internal Tools">CRM / Internal Tools</option>
                        <option value="Process Automation">Process Automation</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-medium uppercase tracking-wider text-muted-foreground mb-2">
                        Estimated Budget
                      </label>
                      <select
                        name="budget"
                        className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors text-foreground"
                      >
                        <option value="">Select a range</option>
                        <option value="< R20k">Under R20,000</option>
                        <option value="R20k - R50k">R20,000 – R50,000</option>
                        <option value="R50k - R150k">R50,000 – R150,000</option>
                        <option value="R150k+">R150,000+</option>
                        <option value="Not sure">Not sure yet</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium uppercase tracking-wider text-muted-foreground mb-2">
                      Project Details
                    </label>
                    <textarea
                      name="message"
                      rows={5}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors resize-none"
                      placeholder="What are you trying to build, who is it for, and what's the timeline?"
                    />
                  </div>

                  <Button variant="hero" size="lg" className="w-full" type="submit" disabled={sending}>
                    {sending ? (
                      <>
                        Sending...
                        <Loader2 className="w-4 h-4 animate-spin" />
                      </>
                    ) : (
                      <>
                        Schedule a Free Consultation
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    By submitting this form, you agree to be contacted regarding your enquiry.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

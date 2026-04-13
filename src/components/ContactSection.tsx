import { useState } from "react";
import { Mail, Phone, MapPin, Send, MessageCircle, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import emailjs from "@emailjs/browser";
import { useToast } from "@/hooks/use-toast"; // assuming you have this

const ContactSection = () => {
  const { toast } = useToast();

  // Form state
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    projectType: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handle input changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  // Handle submit
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const now = new Date().toLocaleString();

      await emailjs.send(
        "service_osg1frl",       // Service ID
        "template_5mmkua3",      // Template ID
        {
          name: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          phone: formData.phone || "N/A",
          project: formData.projectType || "Not specified",
          message: formData.message,
          time: now,
        },
        "5IpP-QjM-4llqtT6Q"      // Public Key
      );

      toast({
        title: "Message Sent!",
        description: "Thanks for reaching out. We'll contact you soon.",
      });

      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        projectType: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    }

    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-24 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* LEFT SIDE */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Let's <span className="gradient-text">Connect</span>
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Ready to start your next project? Get in touch today and let's discuss
              how we can help transform your ideas into reality. Schedule a free
              30-minute consultation to explore your options.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Email</div>
                  <a href="mailto:hello@enuffinity.co.za" className="text-foreground hover:text-primary transition-colors">
                    hello@enuffinity.co.za
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Phone</div>
                  <a href="tel:+27646664311" className="text-foreground hover:text-primary transition-colors">
                    +27 64 666 4311
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">WhatsApp</div>
                  <a href="https://wa.me/27646664311" className="text-foreground hover:text-primary transition-colors">
                    +27 64 666 4311
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Location</div>
                  <span className="text-foreground">Johannesburg, South Africa</span>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Consultation</div>
                  <span className="text-foreground">Free 30-min discovery call</span>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE - FORM */}
          <div className="gradient-border rounded-2xl p-8 bg-card">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="John"
                    className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Doe"
                    className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Phone (optional)</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+27..."
                  className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Project Type</label>
                <select
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors text-muted-foreground"
                  required
                >
                  <option value="">Select a project type</option>
                  <option value="web">Web Development</option>
                  <option value="mobile">Mobile Development</option>
                  <option value="desktop">Desktop Application</option>
                  <option value="api">API / Backend Development</option>
                  <option value="integration">Integration Services</option>
                  <option value="saas">SaaS Product</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Tell us about your project..."
                  className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors resize-none"
                  required
                />
              </div>

              <Button variant="hero" size="lg" className="w-full" type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Schedule a Free Consultation"}
                <Send className="w-4 h-4 ml-2" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
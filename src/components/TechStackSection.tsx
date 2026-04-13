const techCategories = [
  {
    category: "Frontend",
    items: ["React", "Next.js", "Vue.js", "Angular", "Tailwind CSS", "TypeScript"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Python / Django", ".NET", "Express.js", "NestJS", "GraphQL"],
  },
  {
    category: "Mobile",
    items: ["Flutter", "React Native", "Swift", "Kotlin", "Ionic"],
  },
  {
    category: "Desktop",
    items: ["Electron", ".NET MAUI", "Java / JavaFX"],
  },
  {
    category: "Database",
    items: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Firebase"],
  },
  {
    category: "Cloud & DevOps",
    items: ["AWS", "Azure", "Google Cloud", "Docker", "Kubernetes", "CI/CD"],
  },
  {
    category: "APIs & Integrations",
    items: ["REST", "GraphQL", "WebSockets", "OAuth 2.0", "Webhooks"],
  },
  {
    category: "AI / ML",
    items: ["TensorFlow", "PyTorch", "OpenAI", "scikit-learn"],
  },
  {
    category: "Blockchain",
    items: ["Solidity", "Ethereum", "Web3.js", "Smart Contracts"],
  },
];

const TechStackSection = () => {
  return (
    <section id="tech" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-20" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our <span className="gradient-text">Tech Stack</span>
          </h2>
          <p className="text-muted-foreground">
            We leverage modern, secure, and scalable technologies to build robust solutions — 
            choosing the right tools for every project, especially when integrations demand reliability.
          </p>
        </div>

        {/* Tech Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {techCategories.map((cat) => (
            <div key={cat.category} className="gradient-border rounded-xl p-6 bg-card">
              <h3 className="text-sm font-semibold text-primary mb-4 uppercase tracking-wider">{cat.category}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.items.map((item) => (
                  <span
                    key={item}
                    className="text-sm px-3 py-1.5 rounded-lg bg-secondary/50 text-foreground hover:bg-primary/10 hover:text-primary transition-colors cursor-default"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-16 gradient-border rounded-2xl p-8 bg-card text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to Build Something Amazing?</h3>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Our team selects the optimal technology stack for your unique requirements — 
            ensuring performance, security, and scalability from day one.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;

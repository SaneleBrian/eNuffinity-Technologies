import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Logo from "./Logo";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
  { name: "Services", href: "#services" },
  { name: "About", href: "#about" },
  { name: "Tech Stack", href: "#tech" },
  { name: "Process", href: "#process" },
  { name: "FAQ", href: "#faq" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Logo className="flex-shrink-0" />

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative text-muted-foreground hover:text-foreground transition-colors duration-200 text-sm lg:text-base"
              >
                {link.name}
              </a>
            ))}
            <ThemeToggle />
            <Button variant="hero" size="sm">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 -mr-2 text-foreground"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-6 border-t border-border bg-background/95 backdrop-blur-xl">
            <div className="flex flex-col gap-1 px-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block px-4 py-3 text-base text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="flex items-center gap-4 mt-6 px-4">
              <ThemeToggle />
              <Button
                variant="hero"
                size="sm"
                className="flex-1"
                onClick={() => {
                  setIsOpen(false);
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Get Started
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
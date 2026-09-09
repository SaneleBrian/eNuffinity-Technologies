import { useState, useEffect } from "react";
import { MenuIcon, CloseIcon } from "@/components/icons";
import { Button } from "@/components/ui/button";
import Logo from "./Logo";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
  { name: "Services", id: "services" },
  { name: "About", id: "about" },
  { name: "Pricing", id: "pricing" },
  { name: "Processes", id: "process" },
  { name: "FAQ", id: "faq" },
  { name: "Contact", id: "contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("services");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 120;

      navLinks.forEach((link) => {
        const section = document.getElementById(link.id);

        if (!section) return;

        const top = section.offsetTop;
        const height = section.offsetHeight;

        if (
          scrollPosition >= top &&
          scrollPosition < top + height
        ) {
          setActiveSection(link.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);

    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition - bodyRect - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });

      setActiveSection(id);
    }

    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Logo className="flex-shrink-0" />

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.id)}
                className={`relative transition-colors duration-200 text-sm lg:text-base
                ${
                  activeSection === link.id
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }
                after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px]
                after:bg-accent
                after:transition-all after:duration-300
                ${
                  activeSection === link.id
                    ? "after:w-full"
                    : "after:w-0 hover:after:w-full"
                }`}
              >
                {link.name}
              </button>
            ))}

            <ThemeToggle />

            <Button
              variant="hero"
              size="sm"
              onClick={() => scrollToSection("contact")}
            >
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 -mr-2 text-foreground"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <CloseIcon className="w-7 h-7" /> : <MenuIcon className="w-7 h-7" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-6 border-t border-border bg-background/95 backdrop-blur-xl">
            <div className="flex flex-col gap-1 px-2">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.id)}
                  className={`block px-4 py-3 text-base rounded-lg transition-colors text-left
                  ${
                    activeSection === link.id
                      ? "text-foreground bg-muted"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  }`}
                >
                  {link.name}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-4 mt-6 px-4">
              <ThemeToggle />

              <Button
                variant="hero"
                size="sm"
                className="flex-1"
                onClick={() => scrollToSection("contact")}
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
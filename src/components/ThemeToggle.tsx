import { useState, useEffect } from "react";
import { MoonIcon, SunnyIcon } from "@/components/icons";

const ThemeToggle = () => {
  const [dark, setDark] = useState(false);

  // This runs once when the component mounts
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
      setDark(true);
    } else {
      // Force Light Mode as default (even if system prefers dark)
      setDark(false);
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, []);

  // Apply theme changes
  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  return (
    <button
      onClick={() => setDark((prev) => !prev)}
      className="w-9 h-9 rounded-lg flex items-center justify-center bg-secondary hover:bg-secondary/80 transition-colors"
      aria-label="Toggle theme"
    >
      {dark ? (
        <SunnyIcon className="w-4 h-4 text-foreground" />
      ) : (
        <MoonIcon className="w-4 h-4 text-foreground" />
      )}
    </button>
  );
};

export default ThemeToggle;
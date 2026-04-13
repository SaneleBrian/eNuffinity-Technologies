import { useState } from "react";

const Logo = ({ className = "" }: { className?: string }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={`flex items-center gap-3 ${className}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Icon mark - Increased size */}
      <div className="relative w-14 h-14 flex items-center justify-center">
        <svg viewBox="0 0 48 48" className="w-full h-full" fill="none">
          {/* Orbiting particles */}
          <circle r="1.5" fill="hsl(var(--primary))" opacity="0.8">
            <animateMotion
              dur="4s"
              repeatCount="indefinite"
              path="M14 24c0-3.3 2.7-6 6-6 2.2 0 4.1 1.2 5.2 3L28 24l-2.8 3c-1.1 1.8-3 3-5.2 3-3.3 0-6-2.7-6-6z"
            />
          </circle>
          <circle r="1.5" fill="hsl(var(--accent))" opacity="0.8">
            <animateMotion
              dur="4s"
              repeatCount="indefinite"
              path="M34 24c0 3.3-2.7 6-6 6-2.2 0-4.1-1.2-5.2-3L20 24l2.8-3c1.1-1.8 3-3 5.2-3 3.3 0 6 2.7 6 6z"
            />
          </circle>
          <circle r="1" fill="hsl(var(--primary))" opacity="0.4">
            <animateMotion
              dur="6s"
              repeatCount="indefinite"
              path="M14 24c0-3.3 2.7-6 6-6 2.2 0 4.1 1.2 5.2 3L28 24l-2.8 3c-1.1 1.8-3 3-5.2 3-3.3 0-6-2.7-6-6z"
              begin="2s"
            />
          </circle>

          {/* Infinity symbol - left loop */}
          <path
            d="M14 24c0-3.3 2.7-6 6-6 2.2 0 4.1 1.2 5.2 3L28 24l-2.8 3c-1.1 1.8-3 3-5.2 3-3.3 0-6-2.7-6-6z"
            stroke="hsl(var(--primary))"
            strokeWidth="2.5"
            strokeLinecap="round"
            className="logo-draw"
            style={{ strokeDasharray: 60, strokeDashoffset: 60 }}
          />
          {/* Infinity symbol - right loop */}
          <path
            d="M34 24c0 3.3-2.7 6-6 6-2.2 0-4.1-1.2-5.2-3L20 24l2.8-3c1.1-1.8 3-3 5.2-3 3.3 0 6 2.7 6 6z"
            stroke="hsl(var(--accent))"
            strokeWidth="2.5"
            strokeLinecap="round"
            className="logo-draw-delayed"
            style={{ strokeDasharray: 60, strokeDashoffset: 60 }}
          />

          {/* Pulse glow on infinity */}
          <path
            d="M14 24c0-3.3 2.7-6 6-6 2.2 0 4.1 1.2 5.2 3L28 24l-2.8 3c-1.1 1.8-3 3-5.2 3-3.3 0-6-2.7-6-6z"
            stroke="hsl(var(--primary))"
            strokeWidth="4"
            strokeLinecap="round"
            fill="none"
            opacity="0"
          >
            <animate attributeName="opacity" values="0;0.3;0" dur="3s" repeatCount="indefinite" />
            <animate attributeName="stroke-width" values="4;6;4" dur="3s" repeatCount="indefinite" />
          </path>
          <path
            d="M34 24c0 3.3-2.7 6-6 6-2.2 0-4.1-1.2-5.2-3L20 24l2.8-3c1.1-1.8 3-3 5.2-3 3.3 0 6 2.7 6 6z"
            stroke="hsl(var(--accent))"
            strokeWidth="4"
            strokeLinecap="round"
            fill="none"
            opacity="0"
          >
            <animate attributeName="opacity" values="0;0.3;0" dur="3s" repeatCount="indefinite" begin="1.5s" />
            <animate attributeName="stroke-width" values="4;6;4" dur="3s" repeatCount="indefinite" begin="1.5s" />
          </path>

          {/* Code bracket left */}
          <path
            d="M10 16l-5 8 5 8"
            stroke="hsl(var(--primary))"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="logo-bracket-left"
            style={{ strokeDasharray: 30, strokeDashoffset: 30 }}
          />
          {/* Code bracket right */}
          <path
            d="M38 16l5 8-5 8"
            stroke="hsl(var(--accent))"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="logo-bracket-right"
            style={{ strokeDasharray: 30, strokeDashoffset: 30 }}
          />

          {/* Bracket hover bounce overlays */}
          <path
            d="M10 16l-5 8 5 8"
            stroke="hsl(var(--primary))"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            className={hovered ? "logo-bracket-bounce-left" : ""}
            opacity="0.5"
          >
            <animate attributeName="opacity" values="0.5;0.8;0.5" dur="2s" repeatCount="indefinite" />
          </path>
          <path
            d="M38 16l5 8-5 8"
            stroke="hsl(var(--accent))"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            className={hovered ? "logo-bracket-bounce-right" : ""}
            opacity="0.5"
          >
            <animate attributeName="opacity" values="0.5;0.8;0.5" dur="2s" repeatCount="indefinite" begin="1s" />
          </path>
        </svg>

        {/* Animated glow layers */}
        <div className="absolute inset-0 rounded-full bg-primary/10 blur-lg animate-[pulse-glow_3s_ease-in-out_infinite]" />
        <div className="absolute inset-0 rounded-full bg-accent/5 blur-xl animate-[pulse-glow_3s_ease-in-out_infinite_1.5s]" />
        <div
          className={`absolute inset-[-4px] rounded-full transition-all duration-500 ${
            hovered ? "bg-primary/15 blur-xl scale-150" : "bg-transparent blur-0 scale-100"
          }`}
        />
      </div>

      {/* Company name - Increased font size */}
      <div className="flex flex-col leading-none">
        <span className="text-2xl font-bold tracking-tight flex">
          {"eNuffinity".split("").map((letter, i) => (
            <span
              key={i}
              className={`inline-block transition-all duration-300 ${
                i === 0 ? "text-primary" : "text-foreground"
              } ${hovered ? "logo-letter-dance" : ""}`}
              style={{ animationDelay: hovered ? `${i * 50}ms` : "0ms" }}
            >
              {letter}
            </span>
          ))}
        </span>
        <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-muted-foreground">
          Technologies
        </span>
      </div>
    </div>
  );
};

export default Logo;
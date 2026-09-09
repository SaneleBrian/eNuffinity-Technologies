import type { ReactNode, CSSProperties, ElementType } from "react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { cn } from "@/lib/utils";

type RevealProps = {
  children: ReactNode;
  delay?: number;
  className?: string;
  /** "up" (default) | "fade" | "scale" | "left" | "right" */
  variant?: "up" | "fade" | "scale" | "left" | "right";
  threshold?: number;
  as?: ElementType;           // ← Better type
};

/**
 * Wraps children with a scroll-triggered reveal animation.
 */
export const Reveal = ({
  children,
  delay = 0,
  className,
  variant = "up",
  threshold = 0.15,
  as: Tag = "div",            // ← Renamed + default
}: RevealProps) => {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>(threshold);

  const hidden: Record<NonNullable<RevealProps["variant"]>, string> = {
    up: "opacity-0 translate-y-6 blur-[3px]",
    fade: "opacity-0 blur-[3px]",
    scale: "opacity-0 scale-[0.96] blur-[3px]",
    left: "opacity-0 -translate-x-6 blur-[3px]",
    right: "opacity-0 translate-x-6 blur-[3px]",
  };

  const style: CSSProperties = {
    transitionDelay: isVisible ? `${delay}ms` : "0ms",
    willChange: "transform, opacity, filter",
  };

  return (
    <Tag
      ref={ref}
      style={style}
      className={cn(
        "transition-all duration-700 ease-out",
        isVisible
          ? "opacity-100 translate-x-0 translate-y-0 scale-100 blur-0"
          : hidden[variant],
        className
      )}
    >
      {children}
    </Tag>
  );
};
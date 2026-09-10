import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export const SectionReveal = ({ children, className = "" }) => {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      if (prefersReducedMotion || !containerRef.current) return;

      const el = containerRef.current;
      const parentSection = el.closest("section") || el;

      const st = ScrollTrigger.create({
        trigger: parentSection,
        start: "top 85%",
        end: "bottom 15%",
        onEnter: () => {
          gsap.fromTo(
            el,
            { opacity: 0, y: 40, filter: "blur(6px)" },
            {
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
              duration: 0.85,
              ease: "power2.out",
              overwrite: "auto",
            }
          );
        },
        onLeave: () => {
          gsap.to(el, {
            opacity: 0,
            y: -40,
            filter: "blur(6px)",
            duration: 0.6,
            ease: "power2.in",
            overwrite: "auto",
          });
        },
        onEnterBack: () => {
          gsap.fromTo(
            el,
            { opacity: 0, y: -40, filter: "blur(6px)" },
            {
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
              duration: 0.85,
              ease: "power2.out",
              overwrite: "auto",
            }
          );
        },
        onLeaveBack: () => {
          gsap.to(el, {
            opacity: 0,
            y: 40,
            filter: "blur(6px)",
            duration: 0.6,
            ease: "power2.in",
            overwrite: "auto",
          });
        },
        onRefresh: (self) => {
          if (self.isActive) {
            gsap.set(el, { opacity: 1, y: 0, filter: "blur(0px)" });
          }
        },
      });

      return () => {
        st.kill();
      };
    },
    { scope: containerRef }
  );

  return (
    <div
      ref={containerRef}
      className={`w-full will-change-[transform,opacity,filter] ${className}`}
    >
      {children}
    </div>
  );
};

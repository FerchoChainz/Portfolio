import { useRef } from "react";
import { ArrowRight, ChevronDown, Download, Terminal } from "lucide-react";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

// Static constants extracted outside component scope
const LETTERS = ["$", "W", "H", "O", "A", "M", "I"];
const TECH_STACK = ["React", "TypeScript", "Node.js", "Laravel", "Go"];

export const Hero = () => {
  const heroRef = useRef(null);

  useGSAP(
    () => {
      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      // 1. Initial fade-in on mount
      const enterTl = gsap.timeline({ defaults: { ease: "power3.out" } });

      if (prefersReducedMotion) {
        enterTl.fromTo(
          [".hero-letter", ".hero-cursor", ".hero-content-below", ".hero-aux"],
          { opacity: 0 },
          { opacity: 1, duration: 0.6, stagger: 0.04 }
        );
        return;
      }

      enterTl
        .fromTo(
          ".hero-letter",
          { opacity: 0, y: 30, filter: "blur(8px)" },
          {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            clearProps: "filter",
            duration: 0.85,
            stagger: 0.05,
          }
        )
        .fromTo(
          ".hero-content-below",
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.75 },
          "-=0.45"
        )
        .fromTo(
          ".hero-aux",
          { opacity: 0 },
          { opacity: 1, duration: 0.6 },
          "-=0.4"
        );

      // 2. Scroll-driven animation with GSAP ScrollTrigger
      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "+=115%",
          pin: true,
          pinSpacing: false,
          scrub: 0.6,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      // Bottom scroll prompt fades out promptly once scrolling begins
      scrollTl.to(
        ".hero-scroll-prompt",
        { opacity: 0, y: 15, duration: 0.12, ease: "power1.out" },
        0
      );

      // Top indicator fades as letters and content ascend
      scrollTl.to(
        ".hero-top-badge",
        { opacity: 0, y: -15, duration: 0.2, ease: "power1.out" },
        0.15
      );

      // Letters and cursor fly UP to top of screen sequentially
      // Finishes flight by ~0.50 of the timeline
      scrollTl.to(
        ".hero-letter, .hero-cursor",
        {
          y: () => -window.innerHeight * 0.9,
          stagger: { each: 0.04, ease: "power1.in" },
          ease: "power2.in",
          duration: 0.5,
        },
        0.05
      );

      // Letters and cursor fade out as they reach the top margin
      scrollTl.to(
        ".hero-letter, .hero-cursor",
        {
          opacity: 0,
          stagger: { each: 0.04, ease: "power1.in" },
          ease: "power2.in",
          duration: 0.2,
        },
        0.35
      );

      // Information block ascends with the scroll, staying visible until near the top
      scrollTl
        .to(
          ".hero-content-below",
          {
            y: () => -window.innerHeight * 0.85,
            ease: "power2.in",
            duration: 0.5,
          },
          0.05
        )
        .to(
          ".hero-content-below",
          {
            opacity: 0,
            ease: "power2.in",
            duration: 0.2,
          },
          0.32
        );

      // Hold #about off-screen while the hero animation finishes,
      // leave a small breathing space (~0.52 to 0.60), then slide #about smoothly into view
      const aboutEl = document.querySelector("#about");
      if (aboutEl) {
        scrollTl.fromTo(
          aboutEl,
          { y: () => window.innerHeight * 0.45 },
          {
            y: 0,
            ease: "power2.out",
            duration: 0.4,
          },
          0.6
        );
      }
    },
    { scope: heroRef }
  );

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative z-0 w-full h-screen bg-black text-white flex flex-col justify-between items-center overflow-hidden select-none px-4 pt-20 sm:pt-24 pb-8 sm:pb-10"
    >
      {/* Subtle typewriter scanline/grain overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.035] bg-[radial-gradient(#ffffff_1px,transparent_1px)]"
        style={{ backgroundSize: "24px 24px" }}
      />

      {/* Top terminal status badge */}
      <div
        role="status"
        aria-live="polite"
        className="hero-top-badge hero-aux px-4 py-1.5 rounded-full border border-[#837062]/25 bg-[#1A1B1D]/80 text-xs font-mono tracking-widest text-[#9A8B80] flex items-center gap-2"
      >
        <span className="inline-block w-2 h-2 rounded-full bg-[#C5B2A4] animate-pulse" />
        <span>PORTFOLIO // ENG. LAZARO ESTRADA</span>
      </div>

      {/* Centerpiece: $WHOAMI + generously spaced content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center my-auto py-6">
        {/* $WHOAMI in typewriter font */}
        <h1
          aria-label="$WHOAMI"
          className="font-typewriter text-6xl sm:text-8xl md:text-9xl lg:text-[10vw] font-bold tracking-wider sm:tracking-widest text-white leading-none drop-shadow-[0_0_35px_rgba(255,255,255,0.15)]"
        >
          <span aria-hidden="true" className="flex items-center whitespace-nowrap">
            {LETTERS.map((char, index) => (
              <span
                key={index}
                className="hero-letter inline-block will-change-transform"
              >
                {char}
              </span>
            ))}

            {/* Typewriter blinking cursor */}
            <span className="hero-cursor inline-block font-light ml-1 sm:ml-2 text-white/80 animate-typewriter-blink will-change-transform">
              _
            </span>
          </span>
        </h1>

        {/* Content below $WHOAMI with generous, elegant spacing */}
        <div className="hero-content-below mt-8 sm:mt-10 flex flex-col items-center gap-6 sm:gap-7 max-w-2xl px-4 will-change-transform">
          {/* Developer Role Pill */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-[#837062]/30 bg-[#3E1A1C]/20 text-xs sm:text-sm font-mono text-[#F5EFEB]">
            <Terminal className="w-4 h-4 text-[#C5B2A4]" />
            <span>Junior Full Stack Developer & Software Engineer</span>
          </div>

          {/* Bio Summary */}
          <p className="font-mono text-xs sm:text-sm md:text-base text-neutral-400 tracking-wide text-center leading-relaxed max-w-lg">
            Creating responsive, high-performance web applications with clean code and modern architecture.
          </p>

          {/* Tech Stack Badges with proper breathing room */}
          <div
            aria-label="Technologies"
            className="flex flex-wrap justify-center items-center gap-2.5 sm:gap-3 text-xs font-mono text-neutral-300"
          >
            {TECH_STACK.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 rounded-md border border-white/10 bg-white/[0.03] hover:border-white/25 hover:text-white transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Action CTAs and Social Links */}
          <div className="flex flex-wrap justify-center items-center gap-4 pt-1">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-white/20 bg-white/10 hover:bg-white/20 text-xs sm:text-sm font-mono text-white transition-all duration-200 shadow-sm"
            >
              <span>Contact Me</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
            <a
              href="/cv.pdf"
              download="Lazaro_Estrada_CV.pdf"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-white/10 bg-transparent hover:bg-white/5 hover:border-white/25 text-xs sm:text-sm font-mono text-neutral-300 hover:text-white transition-all duration-200"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download CV</span>
            </a>
            <div className="flex items-center gap-2 pl-2 border-l border-white/10">
              <a
                href="https://github.com/lazaroestrada"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="p-2.5 rounded-lg border border-white/10 text-neutral-400 hover:text-white hover:border-white/25 hover:bg-white/5 transition-all duration-200"
              >
                <FiGithub className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="p-2.5 rounded-lg border border-white/10 text-neutral-400 hover:text-white hover:border-white/25 hover:bg-white/5 transition-all duration-200"
              >
                <FiLinkedin className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom scroll prompt placed with natural breathing room */}
      <div className="hero-scroll-prompt hero-aux flex flex-col items-center gap-1.5 text-neutral-500 font-typewriter text-xs tracking-widest">
        <span className="uppercase text-[10px] tracking-widest text-neutral-400">
          [ scroll to explore ]
        </span>
        <ChevronDown className="w-4 h-4 animate-bounce text-neutral-400" />
      </div>
    </section>
  );
};

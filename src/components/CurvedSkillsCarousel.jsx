import { useState, useEffect, useRef, useCallback } from "react";
import { 
  ChevronLeft, 
  ChevronRight, 
  MoveHorizontal, 
  Cpu, 
  Layers, 
  Server, 
  Terminal, 
  Repeat,
  Sparkles
} from "lucide-react";
import { 
  SiReact, 
  SiTypescript, 
  SiJavascript, 
  SiTailwindcss, 
  SiNodedotjs, 
  SiExpress, 
  SiPython, 
  SiFlask, 
  SiLaravel, 
  SiGo, 
  SiDocker, 
  SiGit,
  SiPostgresql
} from "react-icons/si";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const ALL_SKILLS = [
  {
    name: "React 19",
    category: "frontend",
    categoryLabel: "FRONTEND // CORE",
    tag: "Core Framework",
    description: "Component composition, Server Actions, concurrent rendering, and reactive state management.",
    icon: SiReact,
    badge: "Production Core",
  },
  {
    name: "TypeScript",
    category: "frontend",
    categoryLabel: "LANGUAGES // TYPES",
    tag: "Type Architecture",
    description: "Strict typing contracts, generics, interfaces, and defensive compile-time verification.",
    icon: SiTypescript,
    badge: "End-to-End Safety",
  },
  {
    name: "Node.js & Express",
    category: "backend",
    categoryLabel: "BACKEND // RUNTIME",
    tag: "REST Architectures",
    description: "Scalable event-driven services, middleware pipelines, JWT auth, and high-throughput APIs.",
    icon: SiNodedotjs,
    badge: "API Services",
  },
  {
    name: "Python",
    category: "backend",
    categoryLabel: "BACKEND // SYSTEMS",
    tag: "Data & Automation",
    description: "OCR pipelines, document intelligence, structured data parsing, and automated ingestion services.",
    icon: SiPython,
    badge: "Automation Core",
  },
  {
    name: "PaddleOCR",
    category: "backend",
    categoryLabel: "VISION // OCR",
    tag: "Document Intelligence",
    description: "Deep-learning OCR pipeline for automated structured text extraction from scanned documents.",
    icon: Cpu,
    badge: "Production OCR",
  },
  {
    name: "Flask",
    category: "backend",
    categoryLabel: "BACKEND // SERVICES",
    tag: "Microframework",
    description: "Lightweight, decoupled HTTP endpoints for asynchronous ML model serving and data parsing.",
    icon: SiFlask,
    badge: "Microservices",
  },
  {
    name: "Go (Golang)",
    category: "backend",
    categoryLabel: "SYSTEMS // CONCURRENCY",
    tag: "High-Throughput",
    description: "Goroutines, channels, fast single-binary services, and high-performance server architectures.",
    icon: SiGo,
    badge: "Active Exploration",
  },
  {
    name: "Docker",
    category: "devops",
    categoryLabel: "DEVOPS // CONTAINERS",
    tag: "Virtualization",
    description: "Multi-stage builds, isolated runtime environments, reproducible microservices, and deployments.",
    icon: SiDocker,
    badge: "Containerization",
  },
  {
    name: "Laravel (PHP)",
    category: "backend",
    categoryLabel: "BACKEND // MVC",
    tag: "Full-Stack PHP",
    description: "Robust MVC architecture, Eloquent ORM relationships, database migrations, and web applications.",
    icon: SiLaravel,
    badge: "Full-Stack MVC",
  },
  {
    name: "PostgreSQL & MySQL",
    category: "backend",
    categoryLabel: "DATA // RELATIONAL",
    tag: "Database Schemas",
    description: "Normalized relational modeling, indexed queries, foreign keys, and transactional consistency.",
    icon: SiPostgresql,
    badge: "Data Integrity",
  },
  {
    name: "Tailwind CSS",
    category: "frontend",
    categoryLabel: "FRONTEND // STYLING",
    tag: "Modern Design",
    description: "Tailwind v4 tokens, responsive layouts, container queries, fluid typography, and accessible UI.",
    icon: SiTailwindcss,
    badge: "Design Systems",
  },
  {
    name: "Git & GitHub",
    category: "devops",
    categoryLabel: "DEVOPS // VCS",
    tag: "Collaboration",
    description: "Atomic commits, branching strategies, code review standards, and CI/CD pipelines.",
    icon: SiGit,
    badge: "Workflow Discipline",
  },
];

const CATEGORIES = [
  { id: "all", label: "All Stack", icon: Layers },
  { id: "backend", label: "Backend & Systems", icon: Server },
  { id: "frontend", label: "Frontend & UI", icon: Cpu },
  { id: "devops", label: "DevOps & Tools", icon: Terminal },
];

export const CurvedSkillsCarousel = () => {
  const rootRef = useRef(null);
  const containerRef = useRef(null);
  const [containerWidth, setContainerWidth] = useState(1000);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [isDragging, setIsDragging] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [scrollOffset, setScrollOffset] = useState(0);

  // Active filtered skills
  const skills = selectedCategory === "all"
    ? ALL_SKILLS
    : ALL_SKILLS.filter((s) => s.category === selectedCategory);

  const isDraggingRef = useRef(false);
  const startXRef = useRef(0);
  const startScrollOffsetRef = useRef(0);
  const targetOffsetRef = useRef(0);
  const currentOffsetRef = useRef(0);
  const lastClientXRef = useRef(0);
  const lastTimeRef = useRef(0);
  const velocityRef = useRef(0);
  const hasDraggedRef = useRef(false);
  const rafIdRef = useRef(null);

  // Layout metrics
  const isMobile = containerWidth < 640;
  const cardWidth = isMobile ? 220 : 270;
  const cardGap = isMobile ? 14 : 20;
  const itemSpacing = cardWidth + cardGap;
  const totalTrackWidth = skills.length * itemSpacing;
  const halfTrack = totalTrackWidth / 2;

  const centerX = containerWidth / 2;
  const initialCenterOffset = centerX - cardWidth / 2;

  // Active index calculation
  const activeSteps = Math.round(-scrollOffset / itemSpacing);
  const activeIndex = ((activeSteps % skills.length) + skills.length) % skills.length;

  // Responsive resize
  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.clientWidth);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Smooth animation & physics loop
  const startPhysicsLoop = useCallback(() => {
    if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current);

    const step = () => {
      const diff = targetOffsetRef.current - currentOffsetRef.current;
      if (Math.abs(diff) > 0.12 || isDraggingRef.current) {
        currentOffsetRef.current += diff * 0.12;
        setScrollOffset(currentOffsetRef.current);
        rafIdRef.current = requestAnimationFrame(step);
      } else {
        currentOffsetRef.current = targetOffsetRef.current;
        
        // Circular normalization
        const normRel = ((targetOffsetRef.current % totalTrackWidth) + totalTrackWidth) % totalTrackWidth;
        const normalizedTarget = normRel > halfTrack ? normRel - totalTrackWidth : normRel;
        const shift = normalizedTarget - targetOffsetRef.current;

        targetOffsetRef.current = normalizedTarget;
        currentOffsetRef.current += shift;
        setScrollOffset(normalizedTarget);
        rafIdRef.current = null;
      }
    };

    rafIdRef.current = requestAnimationFrame(step);
  }, [halfTrack, totalTrackWidth]);

  useEffect(() => {
    return () => {
      if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current);
    };
  }, []);

  // GSAP ScrollTrigger Entrance Reveal
  useGSAP(
    () => {
      const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (prefersReducedMotion || !rootRef.current) return;

      gsap.fromTo(
        rootRef.current,
        { opacity: 0, y: 35, scale: 0.97 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.9,
          ease: "power2.out",
          scrollTrigger: {
            trigger: rootRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    },
    { scope: rootRef }
  );

  // Pointer drag events with momentum
  const handlePointerDown = (e) => {
    isDraggingRef.current = true;
    setIsDragging(true);
    hasDraggedRef.current = false;
    startXRef.current = e.clientX;
    startScrollOffsetRef.current = targetOffsetRef.current;
    lastClientXRef.current = e.clientX;
    lastTimeRef.current = performance.now();
    velocityRef.current = 0;

    try {
      e.currentTarget.setPointerCapture(e.pointerId);
    } catch {
      // fallback
    }

    startPhysicsLoop();
  };

  const handlePointerMove = (e) => {
    if (!isDraggingRef.current) return;
    const deltaX = e.clientX - startXRef.current;
    if (Math.abs(deltaX) > 6) {
      hasDraggedRef.current = true;
    }

    targetOffsetRef.current = startScrollOffsetRef.current + deltaX * 1.25;

    const now = performance.now();
    const dt = now - lastTimeRef.current;
    if (dt > 10) {
      velocityRef.current = (e.clientX - lastClientXRef.current) / dt;
      lastClientXRef.current = e.clientX;
      lastTimeRef.current = now;
    }
  };

  const handlePointerUp = (e) => {
    if (!isDraggingRef.current) return;
    isDraggingRef.current = false;
    setIsDragging(false);

    try {
      e.currentTarget.releasePointerCapture(e.pointerId);
    } catch {
      // fallback
    }

    // Momentum impulse
    const momentum = velocityRef.current * 160;
    const projectedOffset = targetOffsetRef.current + Math.max(-500, Math.min(500, momentum));

    // Snap to nearest item in circle
    const steps = Math.round(-projectedOffset / itemSpacing);
    targetOffsetRef.current = -steps * itemSpacing;

    startPhysicsLoop();
  };

  // Button navigation
  const scrollPrev = () => {
    const currentSteps = Math.round(-targetOffsetRef.current / itemSpacing);
    targetOffsetRef.current = -(currentSteps - 1) * itemSpacing;
    startPhysicsLoop();
  };

  const scrollNext = () => {
    const currentSteps = Math.round(-targetOffsetRef.current / itemSpacing);
    targetOffsetRef.current = -(currentSteps + 1) * itemSpacing;
    startPhysicsLoop();
  };

  // Click card to center
  const handleCardClick = (wrappedDist) => {
    if (hasDraggedRef.current) return;
    targetOffsetRef.current -= wrappedDist;
    startPhysicsLoop();
  };

  // Gentle auto-advance (pauses on hover or drag)
  useEffect(() => {
    if (isHovered || isDragging) return;

    const interval = setInterval(() => {
      if (document.hidden) return;
      const currentSteps = Math.round(-targetOffsetRef.current / itemSpacing);
      targetOffsetRef.current = -(currentSteps + 1) * itemSpacing;
      startPhysicsLoop();
    }, 4500);

    return () => clearInterval(interval);
  }, [isHovered, isDragging, itemSpacing, startPhysicsLoop]);

  return (
    <div 
      ref={rootRef}
      className="w-full relative select-none"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Top Header & Filter Bar */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-5 mb-8 pb-5 border-b border-[#837062]/20">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#3E1A1C]/40 border border-[#837062]/30 text-[#C5B2A4] text-xs font-mono tracking-widest uppercase mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C5B2A4] animate-pulse" />
            <span>02 // TECHNICAL ARSENAL</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-[#F5EFEB] tracking-tight">
            Core Competencies & 3D Interactive Stack
          </h3>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-1.5 p-1 bg-[#141517] rounded-xl border border-[#837062]/25">
          {CATEGORIES.map((cat) => {
            const Icon = cat.icon;
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => {
                  setSelectedCategory(cat.id);
                  targetOffsetRef.current = 0;
                  currentOffsetRef.current = 0;
                  setScrollOffset(0);
                }}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono transition-all cursor-pointer ${
                  isActive
                    ? "bg-[#3E1A1C] text-[#F5EFEB] border border-[#837062]/40 shadow-sm"
                    : "text-[#9A8B80] hover:text-[#F5EFEB] hover:bg-white/[0.04]"
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Controls & Counter */}
        <div className="flex items-center gap-3 self-end lg:self-auto">
          {/* Active counter */}
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#141517]/90 border border-[#837062]/30 text-xs font-mono text-[#C5B2A4] shadow-inner">
            <span className="font-semibold text-[#F5EFEB]">
              {String(activeIndex + 1).padStart(2, "0")}
            </span>
            <span className="text-[#837062]">/</span>
            <span className="text-[#9A8B80]">
              {String(skills.length).padStart(2, "0")}
            </span>
            <span className="text-[#837062] mx-0.5">•</span>
            <span className="flex items-center gap-1 text-[10px] text-[#C5B2A4] tracking-wider uppercase font-medium">
              <Repeat className="w-2.5 h-2.5" />
              LOOP
            </span>
          </div>

          <div className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#141517]/80 border border-[#837062]/25 text-[11px] font-mono text-[#9A8B80]">
            <MoveHorizontal className="w-3.5 h-3.5 text-[#C5B2A4]" />
            <span>DRAG OR TAP</span>
          </div>

          <div className="flex items-center gap-1.5">
            <button
              onClick={scrollPrev}
              aria-label="Previous skill"
              className="w-9 h-9 rounded-xl bg-[#141517] border border-[#837062]/30 text-[#C5B2A4] hover:text-[#F5EFEB] hover:border-[#C5B2A4] hover:bg-[#3E1A1C]/50 transition-all flex items-center justify-center cursor-pointer shadow-md"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={scrollNext}
              aria-label="Next skill"
              className="w-9 h-9 rounded-xl bg-[#141517] border border-[#837062]/30 text-[#C5B2A4] hover:text-[#F5EFEB] hover:border-[#C5B2A4] hover:bg-[#3E1A1C]/50 transition-all flex items-center justify-center cursor-pointer shadow-md"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* 3D Perspective Curved Stage Container */}
      <div className="relative w-full overflow-hidden pt-2 pb-4">
        {/* Soft edge fade masks for seamless cinema look */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-8 sm:w-16 bg-gradient-to-r from-[#1A1B1D] via-[#1A1B1D]/80 to-transparent z-40" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-8 sm:w-16 bg-gradient-to-l from-[#1A1B1D] via-[#1A1B1D]/80 to-transparent z-40" />

        <div
          ref={containerRef}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerUp}
          style={{
            perspective: "1150px",
            perspectiveOrigin: "50% 38%",
            transformStyle: "preserve-3d",
            height: isMobile ? "300px" : "330px",
          }}
          className={`relative w-full overflow-visible touch-pan-y ${
            isDragging ? "cursor-grabbing" : "cursor-grab"
          }`}
        >
          {/* Subtle background curved glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-36 bg-[#3E1A1C]/25 rounded-full blur-3xl pointer-events-none" />

          {skills.map((skill, index) => {
            const IconComp = skill.icon;
            
            // Circular position calculation
            const baseX = index * itemSpacing;
            const diff = baseX + scrollOffset;

            // Modular wrapping into [-halfTrack, halfTrack) for infinite looping
            let wrappedDist = ((diff % totalTrackWidth) + totalTrackWidth) % totalTrackWidth;
            if (wrappedDist > halfTrack) {
              wrappedDist -= totalTrackWidth;
            }

            const distFromCenter = wrappedDist;
            const xPos = initialCenterOffset + wrappedDist;
            const normalizedDist = distFromCenter / Math.max(containerWidth * 0.45, 260);

            // Downward parabolic arc
            const curveY = Math.pow(Math.min(Math.abs(normalizedDist), 2.2), 2) * (isMobile ? 18 : 26);

            // 3D Y rotation turning inward toward center
            const rotY = Math.max(-26, Math.min(26, -normalizedDist * 13));

            // Tangential tilt along arc
            const rotZ = Math.max(-4, Math.min(4, normalizedDist * 2.2));

            // Depth and scale hierarchy
            const scale = Math.max(0.85, 1.03 - Math.abs(normalizedDist) * 0.1);
            const opacity = Math.max(0, 1 - Math.abs(normalizedDist) * 0.38);
            const zIndex = Math.round(100 - Math.abs(distFromCenter) * 0.1);

            // Active / center detection
            const isCentered = Math.abs(distFromCenter) < itemSpacing * 0.45;
            const isHidden = Math.abs(distFromCenter) > containerWidth * 0.85;

            return (
              <div
                key={skill.name}
                onClick={() => handleCardClick(wrappedDist)}
                style={{
                  position: "absolute",
                  left: 0,
                  top: 0,
                  width: `${cardWidth}px`,
                  transform: `translate3d(${xPos}px, ${curveY}px, 0) rotateY(${rotY}deg) rotateZ(${rotZ}deg) scale(${scale})`,
                  opacity,
                  zIndex,
                  transformStyle: "preserve-3d",
                  willChange: "transform, opacity",
                  visibility: isHidden ? "hidden" : "visible",
                }}
                className="transition-shadow duration-300 cursor-pointer"
              >
                {/* 3D Glass Card */}
                <div
                  className={`relative rounded-2xl p-5 sm:p-6 bg-[#1A1B1D]/85 backdrop-blur-2xl border transition-all duration-300 group flex flex-col justify-between h-[255px] sm:h-[275px] overflow-hidden ${
                    isCentered
                      ? "border-[#C5B2A4] shadow-[inset_0_1px_2px_rgba(197,178,164,0.4),0_20px_45px_rgba(62,26,28,0.5)]"
                      : "border-[#837062]/30 hover:border-[#C5B2A4]/60 shadow-[inset_0_1px_1px_rgba(197,178,164,0.15),0_12px_25px_rgba(0,0,0,0.5)] hover:shadow-[0_20px_40px_rgba(62,26,28,0.35)]"
                  }`}
                >
                  {/* Glass specular top reflection */}
                  <div className="absolute inset-0 bg-gradient-to-b from-[#C5B2A4]/[0.08] via-transparent to-[#3E1A1C]/[0.2] pointer-events-none rounded-2xl" />
                  
                  {/* Specular corner light */}
                  <div className="absolute -top-10 -right-10 w-24 h-24 bg-[#C5B2A4]/[0.08] rounded-full blur-xl pointer-events-none" />

                  <div>
                    {/* Top metadata row */}
                    <div className="flex items-center justify-between gap-2 mb-4 relative z-10">
                      <div
                        className={`w-11 h-11 rounded-xl border flex items-center justify-center transition-all shadow-inner ${
                          isCentered
                            ? "bg-[#3E1A1C]/80 border-[#C5B2A4]/60 text-[#C5B2A4] scale-105"
                            : "bg-[#3E1A1C]/40 border-[#837062]/35 text-[#C5B2A4] group-hover:scale-105 group-hover:border-[#C5B2A4]/50"
                        }`}
                      >
                        <IconComp className="w-5 h-5 text-[#C5B2A4]" />
                      </div>

                      <span
                        className={`text-[9px] font-mono tracking-wider px-2.5 py-0.5 rounded-full border uppercase transition-colors ${
                          isCentered
                            ? "bg-[#3E1A1C] border-[#C5B2A4]/50 text-[#C5B2A4] font-medium"
                            : "bg-[#141517]/80 border-[#837062]/25 text-[#9A8B80]"
                        }`}
                      >
                        {skill.badge}
                      </span>
                    </div>

                    {/* Category Label */}
                    <div className="text-[10px] font-mono text-[#837062] uppercase tracking-widest mb-1 relative z-10 font-medium">
                      {skill.categoryLabel}
                    </div>

                    {/* Skill Name */}
                    <h4
                      className={`text-base sm:text-lg font-bold tracking-tight transition-colors relative z-10 ${
                        isCentered ? "text-[#C5B2A4]" : "text-[#F5EFEB] group-hover:text-[#C5B2A4]"
                      }`}
                    >
                      {skill.name}
                    </h4>

                    {/* Description */}
                    <p className="text-xs text-[#9A8B80] leading-relaxed mt-2 line-clamp-3 relative z-10">
                      {skill.description}
                    </p>
                  </div>

                  {/* Bottom Tag & Pulse Indicator */}
                  <div className="pt-3 border-t border-[#837062]/20 flex items-center justify-between text-[10px] font-mono text-[#9A8B80] relative z-10">
                    <span className="text-[#C5B2A4]">{skill.tag}</span>
                    <span
                      className={`w-1.5 h-1.5 rounded-full transition-all ${
                        isCentered
                          ? "bg-[#C5B2A4] shadow-[0_0_10px_#C5B2A4] scale-125"
                          : "bg-[#837062]/60 group-hover:bg-[#C5B2A4]"
                      }`}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

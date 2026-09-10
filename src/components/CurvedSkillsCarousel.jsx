import { useState, useEffect, useRef, useCallback } from "react";
import { 
  ChevronLeft, 
  ChevronRight, 
  MoveHorizontal, 
  Sparkles, 
  Cpu, 
  Layers, 
  Repeat 
} from "lucide-react";
import { 
  SiReact, 
  SiTypescript, 
  SiJavascript, 
  SiTailwindcss, 
  SiAngular, 
  SiNodedotjs, 
  SiExpress, 
  SiPython, 
  SiFlask, 
  SiLaravel, 
  SiGo, 
  SiDocker, 
  SiGit 
} from "react-icons/si";

const SKILLS = [
  {
    name: "React 19",
    category: "FRONTEND // CORE",
    tag: "Core Framework",
    description: "Component composition, Server Actions, concurrent rendering, and reactive state management.",
    icon: SiReact,
    badge: "Specialist",
  },
  {
    name: "TypeScript",
    category: "LANGUAGES // TYPES",
    tag: "Type Architecture",
    description: "Strict typing systems, interfaces, generics, and defensive compile-time verification.",
    icon: SiTypescript,
    badge: "Production",
  },
  {
    name: "Python",
    category: "BACKEND // SYSTEMS",
    tag: "Data & Automation",
    description: "Automation pipelines, OCR processing, algorithmic backend scripts, and data ingestion.",
    icon: SiPython,
    badge: "Core Backend",
  },
  {
    name: "Flask",
    category: "BACKEND // SERVICES",
    tag: "Microframework",
    description: "Lightweight REST API endpoints, enterprise data parsing, and modular microservices.",
    icon: SiFlask,
    badge: "APIs & OCR",
  },
  {
    name: "PaddleOCR",
    category: "AI & VISION // OCR",
    tag: "Document Intelligence",
    description: "Deep-learning OCR pipeline for automated structured text extraction from scanned forms.",
    icon: Cpu,
    badge: "Automation",
  },
  {
    name: "Go (Golang)",
    category: "SYSTEMS // CONCURRENCY",
    tag: "High-Throughput",
    description: "Goroutines, channels, microservices, and high-performance server architectures.",
    icon: SiGo,
    badge: "Deep Dive",
  },
  {
    name: "Node.js & Express",
    category: "BACKEND // RUNTIME",
    tag: "REST Architectures",
    description: "Scalable event-driven backend services, middleware integration, and client APIs.",
    icon: SiNodedotjs,
    badge: "Full-Stack",
  },
  {
    name: "Tailwind CSS",
    category: "FRONTEND // STYLING",
    tag: "Modern Design",
    description: "Tailwind v4 tokens, responsive layouts, container queries, and fluid typography.",
    icon: SiTailwindcss,
    badge: "Design Systems",
  },
  {
    name: "AI Agent Tooling",
    category: "AI // ACCELERATION",
    tag: "Cognitive Velocity",
    description: "Context engineering, structured prompt architectures, Claude Code, and Copilot workflows.",
    icon: Sparkles,
    badge: "10x Delivery",
  },
  {
    name: "Docker",
    category: "DEVOPS // CONTAINERS",
    tag: "Virtualization",
    description: "Containerized environments, multi-stage builds, dependency isolation, and deployments.",
    icon: SiDocker,
    badge: "DevOps",
  },
  {
    name: "Laravel",
    category: "BACKEND // MVC",
    tag: "Full-Stack PHP",
    description: "Robust MVC architecture, Eloquent ORM, database migrations, and web applications.",
    icon: SiLaravel,
    badge: "Full-Stack",
  },
  {
    name: "JavaScript (ES6+)",
    category: "LANGUAGES // WEB",
    tag: "Foundation",
    description: "Asynchronous programming, event loop mechanics, closures, and modern browser standards.",
    icon: SiJavascript,
    badge: "Foundation",
  },
  {
    name: "Angular",
    category: "FRONTEND // ENTERPRISE",
    tag: "Modular UI",
    description: "Two-way data binding, TypeScript-first dependency injection, and enterprise SPAs.",
    icon: SiAngular,
    badge: "Enterprise",
  },
  {
    name: "Git & GitHub",
    category: "DEVOPS // VCS",
    tag: "Collaboration",
    description: "Atomic commits, branching strategies, code review standards, and CI/CD pipelines.",
    icon: SiGit,
    badge: "Essential",
  },
  {
    name: "RESTful APIs",
    category: "ARCHITECTURE // DATA",
    tag: "API Contracts",
    description: "Resource modeling, HTTP semantics, predictable schemas, and structured error handling.",
    icon: Layers,
    badge: "Architecture",
  },
];

export const CurvedSkillsCarousel = () => {
  const containerRef = useRef(null);
  const [containerWidth, setContainerWidth] = useState(1000);
  const [isDragging, setIsDragging] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [renderX, setRenderX] = useState(0);

  const isDraggingRef = useRef(false);
  const startXRef = useRef(0);
  const startScrollXRef = useRef(0);
  const targetXRef = useRef(0);
  const currentXRef = useRef(0);
  const lastClientXRef = useRef(0);
  const lastTimeRef = useRef(0);
  const velocityRef = useRef(0);
  const hasDraggedRef = useRef(false);
  const rafIdRef = useRef(null);
  const hasInitializedRef = useRef(false);

  // Layout metrics
  const isMobile = containerWidth < 640;
  const cardWidth = isMobile ? 220 : 260;
  const cardGap = isMobile ? 14 : 18;
  const itemSpacing = cardWidth + cardGap;
  const totalTrackWidth = SKILLS.length * itemSpacing;
  const halfTrack = totalTrackWidth / 2;

  const centerX = containerWidth / 2;
  const initialCenterOffset = centerX - cardWidth / 2;

  // Track currently centered skill (0 to 14 circular)
  const activeSteps = Math.round(-(renderX - initialCenterOffset) / itemSpacing);
  const activeIndex = ((activeSteps % SKILLS.length) + SKILLS.length) % SKILLS.length;

  // Responsive resize listener
  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        const width = containerRef.current.clientWidth;
        setContainerWidth(width);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Set initial position on mount
  useEffect(() => {
    if (!hasInitializedRef.current && containerWidth > 0) {
      const initial = initialCenterOffset;
      targetXRef.current = initial;
      currentXRef.current = initial;
      setRenderX(initial);
      hasInitializedRef.current = true;
    }
  }, [containerWidth, initialCenterOffset]);

  // Smooth animation & physics loop
  const startPhysicsLoop = useCallback(() => {
    if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current);

    const step = () => {
      const diff = targetXRef.current - currentXRef.current;
      if (Math.abs(diff) > 0.15 || isDraggingRef.current) {
        currentXRef.current += diff * 0.14;
        setRenderX(currentXRef.current);
        rafIdRef.current = requestAnimationFrame(step);
      } else {
        currentXRef.current = targetXRef.current;
        
        // Bounded coordinate normalization to avoid overflow
        const rel = targetXRef.current - initialCenterOffset;
        const normRel = ((rel % totalTrackWidth) + totalTrackWidth) % totalTrackWidth;
        const normalizedTarget = initialCenterOffset + normRel;
        const shift = normalizedTarget - targetXRef.current;

        targetXRef.current = normalizedTarget;
        currentXRef.current += shift;
        setRenderX(normalizedTarget);
        rafIdRef.current = null;
      }
    };

    rafIdRef.current = requestAnimationFrame(step);
  }, [initialCenterOffset, totalTrackWidth]);

  // Clean up RAF on unmount
  useEffect(() => {
    return () => {
      if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current);
    };
  }, []);

  // Pointer drag events with velocity tracking
  const handlePointerDown = (e) => {
    isDraggingRef.current = true;
    setIsDragging(true);
    hasDraggedRef.current = false;
    startXRef.current = e.clientX;
    startScrollXRef.current = targetXRef.current;
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

    targetXRef.current = startScrollXRef.current + deltaX * 1.25;

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

    // Momentum impulse from drag release
    const momentum = velocityRef.current * 160;
    const projectedX = targetXRef.current + Math.max(-500, Math.min(500, momentum));

    // Snap to nearest item in the infinite circular ring
    const steps = Math.round(-(projectedX - initialCenterOffset) / itemSpacing);
    targetXRef.current = initialCenterOffset - steps * itemSpacing;

    startPhysicsLoop();
  };

  // Button navigation
  const scrollPrev = () => {
    const currentSteps = Math.round(-(targetXRef.current - initialCenterOffset) / itemSpacing);
    targetXRef.current = initialCenterOffset - (currentSteps - 1) * itemSpacing;
    startPhysicsLoop();
  };

  const scrollNext = () => {
    const currentSteps = Math.round(-(targetXRef.current - initialCenterOffset) / itemSpacing);
    targetXRef.current = initialCenterOffset - (currentSteps + 1) * itemSpacing;
    startPhysicsLoop();
  };

  // Click card to center
  const handleCardClick = (wrappedDist) => {
    if (hasDraggedRef.current) return;
    targetXRef.current -= wrappedDist;
    startPhysicsLoop();
  };

  // Gentle auto-advance (pauses on hover or drag)
  useEffect(() => {
    if (isHovered || isDragging) return;

    const interval = setInterval(() => {
      if (document.hidden) return;
      const currentSteps = Math.round(-(targetXRef.current - initialCenterOffset) / itemSpacing);
      targetXRef.current = initialCenterOffset - (currentSteps + 1) * itemSpacing;
      startPhysicsLoop();
    }, 4200);

    return () => clearInterval(interval);
  }, [isHovered, isDragging, initialCenterOffset, itemSpacing, startPhysicsLoop]);

  return (
    <div 
      className="w-full relative overflow-hidden select-none"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Carousel Header & Controls */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 px-1">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#3E1A1C]/40 border border-[#837062]/30 text-[#C5B2A4] text-xs font-mono tracking-widest uppercase mb-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C5B2A4] animate-pulse" />
            <span>CORE STACK</span>
          </div>
        </div>

        <div className="flex items-center gap-3 self-end sm:self-auto">
          {/* Active counter & loop badge */}
          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-[#141517]/90 border border-[#837062]/30 text-[11px] font-mono text-[#C5B2A4] shadow-inner">
            <span className="font-semibold text-[#F5EFEB]">
              {String(activeIndex + 1).padStart(2, "0")}
            </span>
            <span className="text-[#837062]">/</span>
            <span className="text-[#9A8B80]">
              {String(SKILLS.length).padStart(2, "0")}
            </span>
            <span className="text-[#837062] mx-0.5">•</span>
            <span className="flex items-center gap-1 text-[10px] text-[#C5B2A4] tracking-wider uppercase font-medium">
              <Repeat className="w-2.5 h-2.5" />
              LOOP
            </span>
          </div>

          <div className="hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#141517]/80 border border-[#837062]/25 text-[10px] font-mono text-[#9A8B80]">
            <MoveHorizontal className="w-3 h-3 text-[#C5B2A4]" />
            <span>DRAG OR TAP</span>
          </div>

          <div className="flex items-center gap-1.5">
            <button
              onClick={scrollPrev}
              aria-label="Previous skill"
              className="w-9 h-9 rounded-full bg-[#141517] border border-[#837062]/30 text-[#C5B2A4] hover:text-[#F5EFEB] hover:border-[#C5B2A4] hover:bg-[#3E1A1C]/50 transition-all flex items-center justify-center cursor-pointer shadow-md"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={scrollNext}
              aria-label="Next skill"
              className="w-9 h-9 rounded-full bg-[#141517] border border-[#837062]/30 text-[#C5B2A4] hover:text-[#F5EFEB] hover:border-[#C5B2A4] hover:bg-[#3E1A1C]/50 transition-all flex items-center justify-center cursor-pointer shadow-md"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* 3D Perspective Curved Stage Container */}
      <div className="relative w-full overflow-hidden">
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
            perspective: "1100px",
            perspectiveOrigin: "50% 35%",
            transformStyle: "preserve-3d",
            height: isMobile ? "290px" : "320px",
          }}
          className={`relative w-full overflow-visible touch-pan-y ${
            isDragging ? "cursor-grabbing" : "cursor-grab"
          }`}
        >
          {/* Subtle background curved glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-32 bg-[#3E1A1C]/25 rounded-full blur-3xl pointer-events-none" />

          {SKILLS.map((skill, index) => {
            const IconComp = skill.icon;
            
            // Calculate base circular position
            const baseX = index * itemSpacing;
            const diff = (baseX + renderX) - initialCenterOffset;

            // Modular wrapping into [-halfTrack, halfTrack) for infinite looping
            let wrappedDist = ((diff % totalTrackWidth) + totalTrackWidth) % totalTrackWidth;
            if (wrappedDist > halfTrack) {
              wrappedDist -= totalTrackWidth;
            }

            const distFromCenter = wrappedDist;
            const xPos = initialCenterOffset + wrappedDist;
            const normalizedDist = distFromCenter / Math.max(containerWidth * 0.45, 260);

            // Downward parabolic arc
            const curveY = Math.pow(Math.min(Math.abs(normalizedDist), 2.2), 2) * (isMobile ? 16 : 24);

            // 3D Y rotation turning inward toward center
            const rotY = Math.max(-24, Math.min(24, -normalizedDist * 12));

            // Tangential tilt along arc
            const rotZ = Math.max(-4, Math.min(4, normalizedDist * 2.2));

            // Depth and scale hierarchy
            const scale = Math.max(0.86, 1 - Math.abs(normalizedDist) * 0.08);
            const opacity = Math.max(0, 1 - Math.abs(normalizedDist) * 0.38);
            const zIndex = Math.round(100 - Math.abs(distFromCenter) * 0.1);

            // Active / center detection
            const isCentered = Math.abs(distFromCenter) < itemSpacing * 0.45;
            const isHidden = Math.abs(distFromCenter) > containerWidth * 0.85;

            return (
              <div
                key={index}
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
                {/* Glass Card */}
                <div
                  className={`relative rounded-2xl p-5 sm:p-6 bg-[#1A1B1D]/80 backdrop-blur-2xl border transition-all duration-300 group flex flex-col justify-between h-[250px] sm:h-[270px] overflow-hidden ${
                    isCentered
                      ? "border-[#C5B2A4]/80 shadow-[inset_0_1px_2px_rgba(197,178,164,0.35),0_20px_45px_rgba(62,26,28,0.45)]"
                      : "border-[#837062]/35 hover:border-[#C5B2A4]/70 shadow-[inset_0_1px_1px_rgba(197,178,164,0.18),0_12px_30px_rgba(0,0,0,0.5)] hover:shadow-[inset_0_1px_1px_rgba(197,178,164,0.35),0_20px_45px_rgba(62,26,28,0.4)]"
                  }`}
                >
                  {/* Glass top reflection sheen */}
                  <div className="absolute inset-0 bg-gradient-to-b from-[#C5B2A4]/[0.08] via-transparent to-[#3E1A1C]/[0.2] pointer-events-none rounded-2xl" />
                  
                  {/* Glass specular corner light */}
                  <div className="absolute -top-10 -right-10 w-24 h-24 bg-[#C5B2A4]/[0.06] rounded-full blur-xl pointer-events-none" />

                  <div>
                    {/* Top metadata row */}
                    <div className="flex items-center justify-between gap-2 mb-4 relative z-10">
                      <div
                        className={`w-10 h-10 rounded-xl border flex items-center justify-center transition-all shadow-inner ${
                          isCentered
                            ? "bg-[#3E1A1C]/70 border-[#C5B2A4]/50 text-[#C5B2A4] scale-105"
                            : "bg-[#3E1A1C]/40 border-[#837062]/35 text-[#C5B2A4] group-hover:scale-110 group-hover:border-[#C5B2A4]/50"
                        }`}
                      >
                        <IconComp className="w-5 h-5 text-[#C5B2A4]" />
                      </div>

                      <span
                        className={`text-[9px] font-mono tracking-wider px-2 py-0.5 rounded-full border uppercase transition-colors ${
                          isCentered
                            ? "bg-[#3E1A1C] border-[#C5B2A4]/40 text-[#C5B2A4]"
                            : "bg-[#141517]/80 border-[#837062]/20 text-[#9A8B80]"
                        }`}
                      >
                        {skill.badge}
                      </span>
                    </div>

                    {/* Category */}
                    <div className="text-[10px] font-mono text-[#837062] uppercase tracking-widest mb-1 relative z-10 font-medium">
                      {skill.category}
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

                  {/* Bottom Tag */}
                  <div className="pt-3 border-t border-[#837062]/20 flex items-center justify-between text-[10px] font-mono text-[#9A8B80] relative z-10">
                    <span className="text-[#C5B2A4]">{skill.tag}</span>
                    <span
                      className={`w-1.5 h-1.5 rounded-full transition-all ${
                        isCentered
                          ? "bg-[#C5B2A4] shadow-[0_0_8px_#C5B2A4] scale-125"
                          : "bg-[#C5B2A4]/60 group-hover:bg-[#C5B2A4]"
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

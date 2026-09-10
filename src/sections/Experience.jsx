import { useState, useRef } from "react";
import { 
  Calendar, 
  MapPin, 
  Briefcase, 
  GraduationCap, 
  CheckCircle2, 
  ArrowRight, 
  ArrowLeft,
  Terminal, 
  Cpu, 
  Layers,
  Sparkles,
  Zap,
  Award
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const EXPERIENCES = [
  {
    id: "freelance",
    period: "2025 — PRESENT",
    role: "Freelance Software Developer",
    organization: "Independent Client Solutions",
    location: "Guadalajara, MX // Remote",
    badge: "Active Engagement",
    type: "work",
    description:
      "Architecting bespoke full-stack web platforms, robust RESTful API architectures, and automated data scripts. Collaborating directly with stakeholders from initial discovery through to production deployment.",
    deliverables: [
      "Engineered full-stack applications with React 19, TypeScript, and modern component composition.",
      "Designed normalized relational database schemas and high-throughput RESTful endpoints in Node.js and Laravel.",
      "Implemented responsive, accessible user interfaces adhering to strict performance budgets and Core Web Vitals."
    ],
    technologies: ["React 19", "TypeScript", "Node.js", "Express", "Laravel", "Tailwind CSS", "MySQL"],
    metrics: [
      { label: "Delivery Rate", value: "100%", sub: "On-Time Sprints" },
      { label: "Core Web Vitals", value: "98+", sub: "Lighthouse Performance" },
      { label: "API Latency", value: "< 45ms", sub: "P95 Response" },
    ],
    pipelineSteps: [
      { step: "01", name: "Architecture Discovery", desc: "User stories, API contracts & schema normalization" },
      { step: "02", name: "Engine Implementation", desc: "Strict TypeScript types & transactional DB models" },
      { step: "03", name: "Fluid UI & Testing", desc: "Accessible responsive components & state machines" },
      { step: "04", name: "Production Deploy", desc: "Dockerized environments & deterministic releases" },
    ]
  },
  {
    id: "h2o",
    period: "2024 — 2025",
    role: "Junior Backend Developer",
    organization: "H2O Beborn // Systems Engineering",
    location: "Guadalajara, MX",
    badge: "Enterprise Systems",
    type: "work",
    description:
      "Engineered an automated Optical Character Recognition (OCR) pipeline to extract structured data from scanned physical documents and invoices, eliminating manual document ingestion bottlenecks.",
    deliverables: [
      "Designed and containerized a Python & Flask microservice utilizing PaddleOCR for deep-learning document text detection.",
      "Constructed image pre-processing filters for contrast normalization, rotation deskewing, and bounding contour segmentation.",
      "Replaced error-prone manual document transcription workflows with automated JSON schema ingestion, accelerating data availability."
    ],
    technologies: ["Python", "Flask", "PaddleOCR", "Docker", "RESTful APIs", "Computer Vision"],
    metrics: [
      { label: "OCR Accuracy", value: "98.9%", sub: "Confidence Score" },
      { label: "Batch Speed", value: "< 1.2s", sub: "Per Form Ingestion" },
      { label: "Human Effort", value: "-85%", sub: "Manual Labor Cut" },
    ],
    pipelineSteps: [
      { step: "01", name: "Scan Ingestion", desc: "Multiformat PDF / TIFF / JPG buffer loading" },
      { step: "02", name: "Image Preprocessing", desc: "CLAHE contrast normalization & deskew" },
      { step: "03", name: "Deep Inference", desc: "PaddleOCR angle classification & text detection" },
      { step: "04", name: "JSON Schema Export", desc: "Structured database ingestion with regex filters" },
    ]
  },
  {
    id: "ceti",
    period: "2021 — PRESENT",
    role: "Computer Systems Engineering (Undergraduate)",
    organization: "CETI Colomos (Centro de Enseñanza Técnica Industrial)",
    location: "Guadalajara, MX",
    badge: "Academic Foundation",
    type: "education",
    description:
      "Rigorous academic training in core computer science disciplines, distributed software architectures, and hardware-software system integration.",
    deliverables: [
      "In-depth studies in algorithms, computational complexity, memory management, and data structure optimization.",
      "Database architecture: relational schema normalization, indexing strategies, transaction ACID properties, and SQL.",
      "Operating systems, concurrent process communication, socket networking, and software engineering lifecycle principles."
    ],
    technologies: ["Computer Science", "Algorithms", "Data Structures", "Operating Systems", "Networking", "Relational Databases"],
    metrics: [
      { label: "Degree Target", value: "B.S. Eng.", sub: "CETI Colomos" },
      { label: "Core CS Courses", value: "15+", sub: "Advanced Technical Modules" },
      { label: "Foundations", value: "ACID & OS", sub: "Low-Level & Distributed" },
    ],
    pipelineSteps: [
      { step: "01", name: "Computational Foundations", desc: "Algorithms, asymptotic analysis & pointers" },
      { step: "02", name: "Systems Architecture", desc: "Processes, threads, sockets & memory registers" },
      { step: "03", name: "Database Engineering", desc: "Relational 3NF schemas, transactions & indices" },
      { step: "04", name: "Software Lifecycle", desc: "Design patterns, testing & architectural metrics" },
    ]
  },
];

export const Experience = () => {
  const sectionRef = useRef(null);
  const [activeIdx, setActiveIdx] = useState(0);
  const [activeViewTab, setActiveViewTab] = useState("deliverables"); // 'deliverables' | 'architecture' | 'technologies'

  const currentExp = EXPERIENCES[activeIdx];
  const Icon = currentExp.type === "education" ? GraduationCap : Briefcase;

  const nextMilestone = () => {
    setActiveIdx((prev) => (prev + 1) % EXPERIENCES.length);
  };

  const prevMilestone = () => {
    setActiveIdx((prev) => (prev - 1 + EXPERIENCES.length) % EXPERIENCES.length);
  };

  useGSAP(
    () => {
      const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (prefersReducedMotion || !sectionRef.current) return;

      const isMobile = window.innerWidth < 768;

      gsap.from(".experience-container", {
        opacity: isMobile ? 0.4 : 0,
        y: isMobile ? 16 : 30,
        duration: isMobile ? 0.45 : 0.75,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: isMobile ? "top 95%" : "top 85%",
          once: true,
        },
      });
    },
    { scope: sectionRef }
  );

  return (
    <section 
      ref={sectionRef}
      id="experience" 
      className="relative z-10 bg-transparent text-[#F5EFEB] pt-24 pb-28 sm:pt-32 sm:pb-36 overflow-hidden"
    >
      {/* Ambient Glows */}
      <div className="absolute top-1/4 left-1/3 w-80 sm:w-[500px] h-80 sm:h-[500px] bg-[#3E1A1C]/20 rounded-full blur-[140px] pointer-events-none -translate-x-1/2" />
      <div className="absolute bottom-10 right-1/4 w-72 sm:w-[450px] h-72 sm:h-[450px] bg-[#837062]/10 rounded-full blur-[120px] pointer-events-none translate-x-1/2" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl relative z-10 experience-container">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md border border-[#581C24]/30 bg-[#581C24]/10 text-[#4A151B] text-xs font-mono tracking-widest uppercase mb-4 font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-[#581C24]" />
              <span>03 // CAREER TRAJECTORY MATRIX</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight tracking-tight text-[#0F1116]">
              Professional milestones &{" "}
              <span className="font-serif italic font-normal text-[#581C24]">
                engineering trajectory.
              </span>
            </h2>

            <p className="mt-4 text-[#2D313D] text-sm sm:text-base leading-relaxed font-normal">
              An interactive chronological timeline highlighting production deliverables, system architectures deployed, and rigorous computer science foundations.
            </p>
          </div>

          {/* Milestone Navigator Controls */}
          <div className="flex items-center gap-2 self-start md:self-auto">
            <button
              onClick={prevMilestone}
              aria-label="Previous Milestone"
              className="p-2.5 rounded-md bg-[#141517] border border-[#837062]/30 text-[#C5B2A4] hover:text-[#F5EFEB] hover:border-[#C5B2A4] hover:bg-[#3E1A1C]/50 transition-all cursor-pointer shadow-md flex items-center justify-center"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <span className="text-xs font-mono px-3 py-1.5 rounded bg-[#141517] border border-[#837062]/30 text-[#C5B2A4]">
              0{activeIdx + 1} / 0{EXPERIENCES.length}
            </span>
            <button
              onClick={nextMilestone}
              aria-label="Next Milestone"
              className="p-2.5 rounded-md bg-[#141517] border border-[#837062]/30 text-[#C5B2A4] hover:text-[#F5EFEB] hover:border-[#C5B2A4] hover:bg-[#3E1A1C]/50 transition-all cursor-pointer shadow-md flex items-center justify-center"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* ================= INTERACTIVE TRAJECTORY MATRIX ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* LEFT: Milestone Station Selector (Span 4) */}
          <div className="lg:col-span-4 flex flex-col space-y-3">
            <span className="text-[11px] font-mono uppercase tracking-wider text-[#2D313D] mb-1 font-semibold">
              SELECT MILESTONE STATION:
            </span>

            {EXPERIENCES.map((exp, idx) => {
              const isSelected = idx === activeIdx;
              const ExpIcon = exp.type === "education" ? GraduationCap : Briefcase;

              return (
                <div
                  key={exp.id}
                  onClick={() => setActiveIdx(idx)}
                  className={`p-4 rounded-xl border transition-all duration-300 cursor-pointer text-left relative overflow-hidden select-none ${
                    isSelected
                      ? "bg-[#18191C] border-[#C5B2A4] shadow-[0_8px_24px_rgba(62,26,28,0.4)]"
                      : "bg-[#121315]/80 hover:bg-[#151619] border-[#837062]/25 opacity-80 hover:opacity-100"
                  }`}
                >
                  {/* Subtle active left bar */}
                  {isSelected && (
                    <div className="absolute left-0 inset-y-0 w-1 bg-[#C5B2A4]" />
                  )}

                  <div className="flex items-center justify-between text-[11px] font-mono mb-2">
                    <span className="flex items-center gap-1.5 text-[#C5B2A4] font-medium">
                      <ExpIcon className="w-3.5 h-3.5" />
                      {exp.period}
                    </span>
                    <span
                      className={`px-2 py-0.5 rounded text-[10px] ${
                        isSelected
                          ? "bg-[#3E1A1C] text-[#F5EFEB] border border-[#837062]/40"
                          : "bg-black/30 text-[#837062]"
                      }`}
                    >
                      {exp.badge}
                    </span>
                  </div>

                  <h4
                    className={`text-sm sm:text-base font-bold tracking-tight transition-colors ${
                      isSelected ? "text-[#F5EFEB]" : "text-[#A89A90]"
                    }`}
                  >
                    {exp.role}
                  </h4>

                  <p className="text-xs font-mono text-[#837062] mt-1 truncate">
                    {exp.organization}
                  </p>
                </div>
              );
            })}

            {/* Quick Summary Pill */}
            <div className="p-4 rounded-xl bg-[#0E0F12] border border-[#837062]/20 mt-2 space-y-1.5 text-xs font-mono text-[#A89A90]">
              <div className="flex items-center justify-between text-[#C5B2A4]">
                <span className="flex items-center gap-1">
                  <Award className="w-3.5 h-3.5" />
                  STATUS:
                </span>
                <span className="text-emerald-400 font-semibold">ACTIVE ENGINEER</span>
              </div>
              <p className="text-[11px] text-[#837062] leading-normal">
                4+ years cumulative engineering education & enterprise production experience.
              </p>
            </div>
          </div>

          {/* RIGHT: Dynamic Interactive Milestone Stage (Span 8) */}
          <div className="lg:col-span-8 rounded-xl bg-[#141517]/95 border border-[#837062]/30 p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden shadow-2xl">
            <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-[#C5B2A4]/40 to-transparent pointer-events-none" />

            <div className="space-y-6 relative z-10">
              
              {/* Header Lockup & View Mode Switcher */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-[#837062]/20">
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-lg bg-[#3E1A1C] border border-[#C5B2A4]/40 flex items-center justify-center text-[#C5B2A4] shadow-sm shrink-0">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-[#C5B2A4] uppercase tracking-wider block font-medium">
                      {currentExp.period} // {currentExp.location}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-[#F5EFEB] tracking-tight">
                      {currentExp.role}
                    </h3>
                    <p className="text-xs font-mono text-[#A89A90] mt-0.5">
                      {currentExp.organization}
                    </p>
                  </div>
                </div>

                {/* View Tabs */}
                <div className="flex items-center gap-1 p-1 bg-[#0E0F12] rounded-md border border-[#837062]/25 self-start sm:self-auto">
                  <button
                    onClick={() => setActiveViewTab("deliverables")}
                    className={`px-3 py-1 rounded text-xs font-mono transition-colors cursor-pointer ${
                      activeViewTab === "deliverables"
                        ? "bg-[#3E1A1C] text-[#F5EFEB] border border-[#837062]/40"
                        : "text-[#A89A90] hover:text-[#F5EFEB]"
                    }`}
                  >
                    Deliverables
                  </button>
                  <button
                    onClick={() => setActiveViewTab("architecture")}
                    className={`px-3 py-1 rounded text-xs font-mono transition-colors cursor-pointer ${
                      activeViewTab === "architecture"
                        ? "bg-[#3E1A1C] text-[#F5EFEB] border border-[#837062]/40"
                        : "text-[#A89A90] hover:text-[#F5EFEB]"
                    }`}
                  >
                    Process Flow
                  </button>
                  <button
                    onClick={() => setActiveViewTab("technologies")}
                    className={`px-3 py-1 rounded text-xs font-mono transition-colors cursor-pointer ${
                      activeViewTab === "technologies"
                        ? "bg-[#3E1A1C] text-[#F5EFEB] border border-[#837062]/40"
                        : "text-[#A89A90] hover:text-[#F5EFEB]"
                    }`}
                  >
                    Stack
                  </button>
                </div>
              </div>

              {/* Narrative Overview */}
              <p className="text-xs sm:text-sm text-[#A89A90] leading-relaxed">
                {currentExp.description}
              </p>

              {/* Metrics Counter Bar */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {currentExp.metrics.map((m, mIdx) => (
                  <div
                    key={mIdx}
                    className="p-3.5 rounded-lg bg-[#0E0F12] border border-[#837062]/25 space-y-0.5"
                  >
                    <span className="text-[10px] font-mono text-[#837062] uppercase block">
                      {m.sub}
                    </span>
                    <span className="text-lg sm:text-xl font-bold font-mono text-[#F5EFEB] block">
                      {m.value}
                    </span>
                    <span className="text-[11px] font-mono text-[#C5B2A4] block">
                      {m.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* TAB 1: DELIVERABLES CHECKLIST */}
              {activeViewTab === "deliverables" && (
                <div className="space-y-3 animate-in fade-in duration-200">
                  <span className="text-xs font-mono text-[#C5B2A4] uppercase tracking-wider block font-semibold">
                    Core Outcomes & Real-World Contributions:
                  </span>
                  <ul className="space-y-2.5">
                    {currentExp.deliverables.map((d, dIdx) => (
                      <li
                        key={dIdx}
                        className="flex items-start gap-3 text-xs sm:text-sm text-[#A89A90] p-3 rounded-lg bg-[#0E0F12]/60 border border-white/[0.04]"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#C5B2A4] shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* TAB 2: PROCESS FLOW / ARCHITECTURE DIAGRAM */}
              {activeViewTab === "architecture" && (
                <div className="space-y-3 animate-in fade-in duration-200">
                  <span className="text-xs font-mono text-[#C5B2A4] uppercase tracking-wider block font-semibold">
                    Sequential Systems Methodology:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {currentExp.pipelineSteps.map((p, pIdx) => (
                      <div
                        key={pIdx}
                        className="p-3.5 rounded-lg bg-[#0E0F12] border border-[#837062]/30 space-y-1 relative"
                      >
                        <span className="text-[10px] font-mono text-[#C5B2A4] font-bold block">
                          STEP {p.step} //
                        </span>
                        <h5 className="text-xs font-bold text-[#F5EFEB]">
                          {p.name}
                        </h5>
                        <p className="text-[11px] text-[#837062] leading-normal">
                          {p.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* TAB 3: TECHNOLOGIES ARSENAL */}
              {activeViewTab === "technologies" && (
                <div className="space-y-3 animate-in fade-in duration-200">
                  <span className="text-xs font-mono text-[#C5B2A4] uppercase tracking-wider block font-semibold">
                    Applied Tools & Infrastructure:
                  </span>
                  <div className="flex flex-wrap gap-2 pt-1">
                    {currentExp.technologies.map((t, tIdx) => (
                      <div
                        key={tIdx}
                        className="px-3 py-1.5 rounded-md bg-[#0E0F12] border border-[#837062]/30 flex items-center gap-2 text-xs font-mono text-[#F5EFEB]"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#C5B2A4]" />
                        <span>{t}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

            </div>

            {/* Bottom Indicator */}
            <div className="pt-6 mt-6 border-t border-[#837062]/20 flex items-center justify-between text-xs font-mono text-[#837062]">
              <span>VERIFIED MILESTONE: {currentExp.id}</span>
              <span className="text-[#C5B2A4] flex items-center gap-1.5">
                <Zap className="w-3.5 h-3.5" />
                PRODUCTION EVALUATED
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

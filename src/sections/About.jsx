import { 
  Sparkles, 
  Code2, 
  Briefcase, 
  TrendingUp, 
  MapPin, 
  Calendar, 
  ArrowUpRight, 
  Download
} from "lucide-react";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { CurvedSkillsCarousel } from "../components/CurvedSkillsCarousel";

const experiences = [
  {
    period: "2025 — PRESENT",
    role: "Freelance Software Developer",
    company: "Self-employed // Client Solutions",
    badge: "Active Engagement",
    description:
      "Architecting bespoke full-stack web platforms, robust RESTful API architectures, and automated data scripts. Collaborating directly with stakeholders from discovery to production to deliver maintainable, performant systems.",
    technologies: ["React", "Angular", "Laravel", "Express", "Tailwind CSS", "AI Tooling"],
    current: true,
  },
  {
    period: "2024 — 2025",
    role: "Backend Developer Jr",
    company: "H2O Beborn // Systems Engineering",
    badge: "Enterprise Automation",
    description:
      "Engineered an automated Optical Character Recognition (OCR) pipeline to extract structured data from scanned documents. Replaced manual document workflows with an automated Python & Docker service, accelerating enterprise data ingestion.",
    technologies: ["Python", "Flask", "PaddleOCR", "Docker", "REST APIs"],
    current: false,
  },
];

const aiWorkflowPhases = [
  {
    phase: "PHASE 01",
    title: "Rapid Architecture & Prototyping",
    description:
      "Transforming functional specs into working component contracts, data schemas, and UI prototypes at high velocity.",
  },
  {
    phase: "PHASE 02",
    title: "Automated Auditing & Mutation Tests",
    description:
      "Leveraging AI copilots to spot edge-cases, enforce type safety, and generate rigorous unit tests before deployment.",
  },
  {
    phase: "PHASE 03",
    title: "Cognitive Acceleration & Flow",
    description:
      "Context-engineered prompt workflows eliminate boilerplate friction, keeping focus on core algorithmic design.",
  },
];

const learningFrontiers = [
  { label: "Active Exploration", tech: "React 19 & Modern Web Standards (Actions, Transitions)" },
  { label: "Deep Dive", tech: "Agentic AI Frameworks & Tool-Calling Architectures" },
  { label: "System Craft", tech: "Concurrency & High-Throughput Patterns in Go" },
  { label: "Architecture", tech: "Containerized Microservices & Scalable Cloud Services" },
];

export const About = () => {
  return (
    <section id="about" className="relative z-10 bg-[#141517] text-[#F5EFEB] pt-20 pb-24 sm:pt-28 sm:pb-32 overflow-hidden border-t border-[#837062]/15">
      {/* Subtle architectural ambient lights using Cabernet Velvet and Oyster Silk */}
      <div className="absolute top-1/4 left-1/4 w-80 sm:w-[550px] h-80 sm:h-[550px] bg-[#3E1A1C]/25 rounded-full blur-[140px] pointer-events-none -translate-x-1/2" />
      <div className="absolute bottom-1/4 right-1/4 w-72 sm:w-[500px] h-72 sm:h-[500px] bg-[#837062]/10 rounded-full blur-[120px] pointer-events-none translate-x-1/2" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header - Editorial / Monograph Style */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#837062]/30 bg-[#3E1A1C]/20 text-[#C5B2A4] text-xs font-mono tracking-widest uppercase mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C5B2A4]" />
            <span>01 // IDENTITY & ARCHITECTURE</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight tracking-tight text-[#F5EFEB]">
            Engineering with architectural rigor,{" "}
            <span className="font-serif italic font-normal text-[#C5B2A4] block sm:inline">
              elevated by modern AI & continuous craft.
            </span>
          </h2>

          <p className="mt-4 text-[#9A8B80] text-sm sm:text-base md:text-lg leading-relaxed font-normal">
            Software development is an evolving dialogue between solid computer science foundations and cutting-edge tooling.
            Here is an authentic look at my profile, career milestones, and technical competencies.
          </p>
        </div>

        {/* ================= BESPOKE BENTO GRID ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-5 sm:gap-6">

          {/* 1. EDITORIAL PORTRAIT & PROFILE (Span 4 cols, 2 rows on LG) */}
          <div className="col-span-1 md:col-span-2 lg:col-span-4 lg:row-span-2 bg-[#1A1B1D] rounded-3xl p-5 sm:p-6 lg:p-7 border border-[#837062]/25 hover:border-[#C5B2A4]/50 transition-all duration-300 flex flex-col justify-between group shadow-2xl relative overflow-hidden">
            {/* Subtle corner accent */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#3E1A1C]/20 rounded-full blur-2xl pointer-events-none" />

            <div className="flex flex-col md:flex-row lg:flex-col gap-6 items-center md:items-start lg:items-stretch">
              {/* Photo Container */}
              <div className="relative aspect-square w-48 sm:w-56 md:w-52 lg:w-full shrink-0 rounded-2xl overflow-hidden bg-[#141517] border border-[#837062]/30 group-hover:border-[#C5B2A4]/40 transition-colors shadow-xl">
                <img
                  src="/profile-pic.png"
                  alt="Lazaro Estrada - Software Engineer"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                  decoding="async"
                />

                {/* Editorial Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#141517] via-transparent to-transparent opacity-85 pointer-events-none" />

                {/* Subtle Status Pill */}
                <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#1A1B1D]/80 backdrop-blur-md border border-[#837062]/30 flex items-center gap-2 text-[11px] font-mono text-[#C5B2A4] shadow-lg">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C5B2A4] animate-pulse" />
                  <span>AVAILABLE FOR WORK</span>
                </div>

                {/* Location Meta */}
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px] font-mono text-[#C5B2A4]">
                  <span className="flex items-center gap-1.5 bg-[#141517]/85 backdrop-blur-md px-2.5 py-1 rounded-md border border-[#837062]/30">
                    <MapPin className="w-3 h-3 text-[#C5B2A4]" />
                    Guadalajara, MX
                  </span>
                  <span className="bg-[#141517]/85 backdrop-blur-md px-2.5 py-1 rounded-md border border-[#837062]/30 text-[#9A8B80]">
                    FULL-STACK
                  </span>
                </div>
              </div>

              {/* Persona Details */}
              <div className="w-full space-y-3 text-center md:text-left">
                <div className="flex items-center justify-center md:justify-between">
                  <div className="flex items-baseline gap-2">
                    <h3 className="text-2xl font-bold tracking-tight text-[#F5EFEB]">Lázaro Estrada</h3>
                    <span className="font-serif italic text-xs text-[#C5B2A4]">eng.</span>
                  </div>
                </div>

                <p className="text-xs font-mono tracking-wider text-[#9A8B80] uppercase">
                  Software Engineer & Full-Stack Builder
                </p>

                <p className="text-[#9A8B80] text-xs sm:text-sm leading-relaxed pt-1">
                  Focused on software quality, robust backend architectures, and human-centered design. I unite solid engineering principles with modern AI velocity to solve complex challenges.
                </p>

                {/* Metric Strips */}
                <div className="grid grid-cols-2 gap-2.5 pt-3">
                  <div className="bg-[#141517]/80 border border-[#837062]/20 rounded-xl p-3 text-center">
                    <div className="font-serif text-2xl font-normal text-[#C5B2A4]">02+</div>
                    <div className="text-[10px] font-mono text-[#9A8B80] uppercase tracking-wider mt-0.5">Years Coding</div>
                  </div>
                  <div className="bg-[#141517]/80 border border-[#837062]/20 rounded-xl p-3 text-center">
                    <div className="font-serif text-2xl font-normal text-[#C5B2A4]">100%</div>
                    <div className="text-[10px] font-mono text-[#9A8B80] uppercase tracking-wider mt-0.5">Dedication</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Actions & Links */}
            <div className="pt-5 mt-6 border-t border-[#837062]/20 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
              <a
                href="/cv.pdf"
                download="Lazaro_Estrada_CV.pdf"
                className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#3E1A1C] hover:bg-[#582428] text-xs sm:text-sm font-mono tracking-wider text-[#F5EFEB] border border-[#837062]/30 transition-all duration-200 shadow-md"
              >
                <Download className="w-3.5 h-3.5 text-[#C5B2A4]" />
                <span>DOWNLOAD CV</span>
              </a>

              <div className="flex items-center justify-center gap-2">
                <a
                  href="https://github.com/FerchoChainz"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub Profile"
                  className="p-2.5 rounded-xl border border-[#837062]/30 text-[#9A8B80] hover:text-[#F5EFEB] hover:border-[#C5B2A4]/50 hover:bg-[#3E1A1C]/30 transition-all"
                >
                  <FiGithub className="w-4 h-4" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn Profile"
                  className="p-2.5 rounded-xl border border-[#837062]/30 text-[#9A8B80] hover:text-[#F5EFEB] hover:border-[#C5B2A4]/50 hover:bg-[#3E1A1C]/30 transition-all"
                >
                  <FiLinkedin className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* 2. AI-AUGMENTED ENGINEERING CONSOLE (Span 8 cols on LG) */}
          <div className="col-span-1 md:col-span-2 lg:col-span-8 bg-[#1A1B1D] rounded-3xl p-6 sm:p-8 border border-[#837062]/25 hover:border-[#C5B2A4]/40 transition-all duration-300 relative overflow-hidden group shadow-2xl">
            {/* Background Cabernet Velvet ambient wash */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#3E1A1C]/35 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />

            <div className="relative z-10">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#3E1A1C]/40 border border-[#837062]/30 text-[#C5B2A4] text-xs font-mono tracking-widest uppercase">
                  <Sparkles className="w-3.5 h-3.5 text-[#C5B2A4]" />
                  <span>AI-AUGMENTED PIPELINE</span>
                </div>
                <span className="text-[11px] font-mono text-[#9A8B80] tracking-wider">
                  HIGH-VELOCITY DELIVERY
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#F5EFEB] tracking-tight">
                Amplifying Velocity, Not Replacing Human Craftsmanship
              </h3>

              <p className="mt-3 text-xs sm:text-sm lg:text-base text-[#9A8B80] leading-relaxed max-w-2xl">
                I actively treat state-of-the-art AI systems (Claude, Cursor, GitHub Copilot, LLMs) as high-bandwidth cognitive compilers. By integrating AI across architectural validation, test automation, and boilerplate reduction, I eliminate friction and compress delivery cycles while keeping code maintainable and robust.
              </p>

              {/* 3 Engineering Pipeline Phases */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 mt-6 pt-6 border-t border-[#837062]/20">
                {aiWorkflowPhases.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-[#141517]/70 border border-[#837062]/20 hover:border-[#C5B2A4]/35 hover:bg-[#141517] transition-all"
                  >
                    <div className="text-[10px] font-mono text-[#C5B2A4] uppercase tracking-wider mb-2 font-semibold">
                      {item.phase}
                    </div>
                    <h4 className="text-sm font-semibold text-[#F5EFEB] mb-1.5">{item.title}</h4>
                    <p className="text-xs text-[#9A8B80] leading-relaxed">{item.description}</p>
                  </div>
                ))}
              </div>

              {/* Tooling Tags */}
              <div className="mt-6 pt-4 border-t border-[#837062]/15 flex flex-wrap items-center gap-2 text-[11px] font-mono text-[#C5B2A4]">
                <span className="text-[#9A8B80] tracking-wider uppercase text-[10px] mr-1">Tooling Ecosystem:</span>
                {["Claude Code", "Cursor", "GitHub Copilot", "Context Engineering", "Prompt Design"].map((tool, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-1 rounded-md bg-[#3E1A1C]/30 border border-[#837062]/30 text-[#C5B2A4]"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* 3. CONTINUOUS LEARNING & TECH RADAR (Span 4 cols on LG) */}
          <div className="col-span-1 md:col-span-1 lg:col-span-4 bg-[#1A1B1D] rounded-3xl p-5 sm:p-6 lg:p-7 border border-[#837062]/25 hover:border-[#C5B2A4]/40 transition-all duration-300 flex flex-col justify-between shadow-xl">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#3E1A1C]/40 border border-[#837062]/30 flex items-center justify-center text-[#C5B2A4] shrink-0">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-[#C5B2A4] uppercase tracking-widest block">HORIZON // 02</span>
                  <h3 className="text-base sm:text-lg font-bold text-[#F5EFEB]">Continuous Learning</h3>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-[#9A8B80] leading-relaxed">
                Software paradigms shift rapidly. I stay ahead of the curve through active exploration, inspecting source code, and stress-testing new frameworks in production-like projects.
              </p>

              <div className="mt-5 space-y-2.5">
                <div className="text-[10px] font-mono text-[#C5B2A4] uppercase tracking-widest flex items-center gap-1.5 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C5B2A4]" />
                  <span>Current Exploration Stack:</span>
                </div>
                {learningFrontiers.map((item, i) => (
                  <div
                    key={i}
                    className="p-2.5 rounded-xl bg-[#141517]/75 border border-[#837062]/20 space-y-1"
                  >
                    <div className="flex items-center justify-between text-[10px] font-mono text-[#C5B2A4]">
                      <span>{item.label}</span>
                      <span className="text-[#837062]">0{i + 1}</span>
                    </div>
                    <p className="text-xs font-mono text-[#F5EFEB] leading-snug">{item.tech}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-5 pt-4 border-t border-[#837062]/20 flex items-center justify-between text-[11px] font-mono text-[#9A8B80]">
              <span>MINDSET: ALWAYS BUILDING</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#C5B2A4]" />
            </div>
          </div>

          {/* 4. CORE ENGINEERING TENETS (Span 4 cols on LG) */}
          <div className="col-span-1 md:col-span-1 lg:col-span-4 bg-[#1A1B1D] rounded-3xl p-5 sm:p-6 lg:p-7 border border-[#837062]/25 hover:border-[#C5B2A4]/40 transition-all duration-300 flex flex-col justify-between shadow-xl">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#3E1A1C]/40 border border-[#837062]/30 flex items-center justify-center text-[#C5B2A4] shrink-0">
                  <Code2 className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-[#C5B2A4] uppercase tracking-widest block">STANDARDS // 03</span>
                  <h3 className="text-base sm:text-lg font-bold text-[#F5EFEB]">Engineering Tenets</h3>
                </div>
              </div>

              <div className="space-y-3">
                <div className="p-3 rounded-xl bg-[#141517]/70 border border-[#837062]/20">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-semibold text-[#F5EFEB]">Clean & Maintainable</span>
                    <span className="text-[10px] font-mono text-[#C5B2A4]">01</span>
                  </div>
                  <p className="text-xs text-[#9A8B80] leading-relaxed">
                    Writing self-documenting code with clear boundaries, modular components, and testable interfaces.
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-[#141517]/70 border border-[#837062]/20">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-semibold text-[#F5EFEB]">Measurable Performance</span>
                    <span className="text-[10px] font-mono text-[#C5B2A4]">02</span>
                  </div>
                  <p className="text-xs text-[#9A8B80] leading-relaxed">
                    Prioritizing low bundle weight, clean render trees, zero layout shift, and instant feedback.
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-[#141517]/70 border border-[#837062]/20">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-semibold text-[#F5EFEB]">Pragmatic Delivery</span>
                    <span className="text-[10px] font-mono text-[#C5B2A4]">03</span>
                  </div>
                  <p className="text-xs text-[#9A8B80] leading-relaxed">
                    Balancing technical elegance with real business goals to build dependable, scalable software.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-5 pt-4 border-t border-[#837062]/20 text-[11px] font-mono text-[#9A8B80] flex items-center justify-between">
              <span>PHILOSOPHY</span>
              <span className="text-[#C5B2A4] font-medium">CRAFT OVER HYPE</span>
            </div>
          </div>

          {/* 5. CAREER MILESTONES TIMELINE (Span 12 cols on LG) */}
          <div className="col-span-1 md:col-span-2 lg:col-span-12 bg-[#1A1B1D] rounded-3xl p-5 sm:p-7 lg:p-8 border border-[#837062]/25 hover:border-[#C5B2A4]/35 transition-all duration-300 shadow-2xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#3E1A1C]/40 border border-[#837062]/30 flex items-center justify-center text-[#C5B2A4] shrink-0">
                    <Briefcase className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-[#C5B2A4] uppercase tracking-widest block">MILESTONES // 04</span>
                    <h3 className="text-lg sm:text-xl font-bold text-[#F5EFEB]">Professional Journey</h3>
                  </div>
                </div>

                <a
                  href="#experience"
                  className="inline-flex items-center gap-1 text-[11px] font-mono text-[#9A8B80] hover:text-[#C5B2A4] transition-colors"
                >
                  <span>FULL ARCHIVE</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Experience Cards - Responsive 2-column grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
                {experiences.map((exp, idx) => (
                  <div
                    key={idx}
                    className="p-5 sm:p-6 rounded-2xl bg-[#141517]/80 border border-[#837062]/20 hover:border-[#C5B2A4]/35 transition-all duration-200 group/exp flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="text-xs font-mono text-[#C5B2A4] font-medium flex items-center gap-1.5">
                            <Calendar className="w-3.5 h-3.5 text-[#837062]" />
                            {exp.period}
                          </span>
                          <span className="text-[#837062]">•</span>
                          <span className="text-xs font-mono text-[#9A8B80]">{exp.company}</span>
                        </div>

                        <span
                          className={`inline-block w-fit text-[10px] font-mono px-2.5 py-0.5 rounded-full border ${
                            exp.current
                              ? "bg-[#3E1A1C]/40 border-[#837062]/40 text-[#C5B2A4]"
                              : "bg-[#1A1B1D] border-[#837062]/20 text-[#837062]"
                          }`}
                        >
                          {exp.badge}
                        </span>
                      </div>

                      <h4 className="text-base sm:text-lg font-semibold text-[#F5EFEB] group-hover/exp:text-[#C5B2A4] transition-colors">
                        {exp.role}
                      </h4>

                      <p className="text-xs sm:text-sm text-[#9A8B80] mt-2.5 leading-relaxed">
                        {exp.description}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-1.5 mt-5 pt-4 border-t border-[#837062]/15">
                      {exp.technologies.map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2.5 py-1 rounded-md bg-[#1A1B1D] border border-[#837062]/25 text-[10px] font-mono text-[#C5B2A4]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#837062]/20 text-[11px] font-mono text-[#9A8B80] flex items-center justify-between">
              <span>TRACK RECORD</span>
              <span className="text-[#C5B2A4]">SOLVING REAL PROBLEMS</span>
            </div>
          </div>

          {/* 6. CORE TECHNICAL ARSENAL - CURVED DRAGGABLE GLASS CAROUSEL (Span 12 cols on LG) */}
          <div className="col-span-1 md:col-span-2 lg:col-span-12 bg-[#1A1B1D] rounded-3xl p-5 sm:p-7 lg:p-8 border border-[#837062]/25 hover:border-[#C5B2A4]/35 transition-all duration-300 shadow-2xl relative overflow-hidden group">
            {/* Ambient luxury glow */}
            <div className="absolute -top-16 right-1/4 w-96 h-48 bg-[#3E1A1C]/25 rounded-full blur-3xl pointer-events-none" />
            
            <CurvedSkillsCarousel />
          </div>

        </div>
      </div>
    </section>
  );
};
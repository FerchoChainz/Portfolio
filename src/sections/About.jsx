import { 
  MapPin, 
  Download, 
  Terminal, 
  ShieldCheck, 
  Cpu, 
  GraduationCap
} from "lucide-react";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { InteractiveCanvasShowcase } from "../components/InteractiveCanvasShowcase";

export const About = () => {
  return (
    <section id="about" className="relative z-10 bg-transparent text-[#F5EFEB] pt-24 pb-28 sm:pt-32 sm:pb-36 overflow-hidden">
      {/* Architectural Ambient Cabernet Glows */}
      <div className="absolute top-1/4 left-1/4 w-80 sm:w-[500px] h-80 sm:h-[500px] bg-[#3E1A1C]/20 rounded-full blur-[140px] pointer-events-none -translate-x-1/2" />
      <div className="absolute bottom-1/4 right-1/4 w-72 sm:w-[450px] h-72 sm:h-[450px] bg-[#837062]/10 rounded-full blur-[120px] pointer-events-none translate-x-1/2" />

      {/* Subtle Scanline / Dot Grid matching Hero */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025] bg-[radial-gradient(#ffffff_1px,transparent_1px)]"
        style={{ backgroundSize: "24px 24px" }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl relative z-10">
        
        {/* Section Header - Editorial / Monograph Style */}
        <div className="max-w-3xl mb-14 sm:mb-18">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md border border-[#837062]/30 bg-[#3E1A1C]/20 text-[#C5B2A4] text-xs font-mono tracking-widest uppercase mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C5B2A4]" />
            <span>01 // ARCHITECTURAL PROFILE</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight tracking-tight text-[#F5EFEB]">
            Engineering with structural discipline,{" "}
            <span className="font-serif italic font-normal text-[#C5B2A4] block sm:inline">
              grounded in real systems & continuous craft.
            </span>
          </h2>

          <p className="mt-4 text-[#9A8B80] text-sm sm:text-base md:text-lg leading-relaxed font-normal">
            Software engineering is about clarity, maintainability, and building systems that perform under load.
            Here is an authentic overview of my background, core engineering principles, and technical proficiencies.
          </p>
        </div>

        {/* Profile & Engineering Foundations Grid - Open Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start mb-18 sm:mb-24">
          
          {/* Left Column: Persona & Identity (Span 5 on LG) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Photo & Status */}
            <div className="relative aspect-[4/3] sm:aspect-square w-full max-w-md rounded-md overflow-hidden bg-[#121315] border border-[#837062]/30 group shadow-lg">
              <img
                src="/profile-pic.png"
                alt="Lázaro Estrada - Full Stack Software Engineer"
                className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-500 ease-out"
                loading="lazy"
                decoding="async"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#0d0e10] via-transparent to-transparent opacity-80 pointer-events-none" />

              {/* Location & Status Bar */}
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px] font-mono">
                <span className="flex items-center gap-1.5 bg-[#121315]/90 backdrop-blur-md px-2.5 py-1 rounded-md border border-[#837062]/30 text-[#C5B2A4]">
                  <MapPin className="w-3 h-3 text-[#C5B2A4]" />
                  Guadalajara, MX
                </span>
                <span className="bg-[#121315]/90 backdrop-blur-md px-2.5 py-1 rounded-md border border-[#837062]/30 text-emerald-400 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  OPEN TO WORK
                </span>
              </div>
            </div>

            {/* Bio Details - Open Typography */}
            <div className="space-y-3 pt-1">
              <div className="flex items-baseline justify-between border-b border-[#837062]/20 pb-3">
                <h3 className="text-2xl font-bold tracking-tight text-[#F5EFEB]">Lázaro Estrada</h3>
                <span className="font-mono text-xs text-[#C5B2A4] uppercase">B.S. Eng.</span>
              </div>

              <p className="text-xs font-mono text-[#C5B2A4] tracking-wider uppercase font-medium">
                Full Stack Software Engineer // Systems Developer
              </p>

              <p className="text-xs sm:text-sm text-[#A89A90] leading-relaxed">
                Passionate about crafting dependable backend microservices, robust RESTful APIs, and fluid, responsive interfaces. Education in Software Engineering at CETI Colomos with hands-on enterprise experience in automated OCR pipelines and bespoke client systems.
              </p>

              {/* Education Pill */}
              <div className="p-3 rounded-md bg-[#121315]/70 border border-[#837062]/25 flex items-center gap-3">
                <GraduationCap className="w-5 h-5 text-[#C5B2A4] shrink-0" />
                <div className="text-xs font-mono">
                  <span className="text-[#F5EFEB] block font-semibold">CETI Colomos</span>
                  <span className="text-[#9A8B80]">Computer Systems Engineering</span>
                </div>
              </div>
            </div>

            {/* Actions: Download CV + Socials */}
            <div className="pt-4 flex items-center gap-3">
              <a
                href="/cv.pdf"
                download="Lazaro_Estrada_CV.pdf"
                className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-md bg-[#3E1A1C] hover:bg-[#582428] text-xs sm:text-sm font-mono tracking-wider text-[#F5EFEB] border border-[#837062]/30 transition-all shadow-sm"
              >
                <Download className="w-3.5 h-3.5 text-[#C5B2A4]" />
                <span>DOWNLOAD CV</span>
              </a>

              <a
                href="https://github.com/FerchoChainz"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub Profile"
                className="p-2.5 rounded-md border border-[#837062]/30 text-[#9A8B80] hover:text-[#F5EFEB] hover:border-[#C5B2A4]/50 hover:bg-[#3E1A1C]/30 transition-all"
              >
                <FiGithub className="w-4 h-4" />
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn Profile"
                className="p-2.5 rounded-md border border-[#837062]/30 text-[#9A8B80] hover:text-[#F5EFEB] hover:border-[#C5B2A4]/50 hover:bg-[#3E1A1C]/30 transition-all"
              >
                <FiLinkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Column: Engineering Foundations & Architecture Tenets (Span 7 on LG) - Open Dossier */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center justify-between pb-3 border-b border-[#837062]/20">
              <span className="text-[11px] font-mono text-[#C5B2A4] uppercase tracking-widest font-medium">
                PHILOSOPHY // 01
              </span>
              <span className="text-[11px] font-mono text-[#9A8B80]">
                SYSTEMS-FIRST APPROACH
              </span>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-[#F5EFEB] tracking-tight">
              Architecture, Maintainability & Tangible Impact
            </h3>

            <p className="text-xs sm:text-sm text-[#A89A90] leading-relaxed">
              Good software is not measured by the number of trendy libraries imported, but by how predictably it handles data, scales under concurrency, and accommodates business requirements over time.
            </p>

            {/* 3 Core Tenets - Open Flow with Hairline Separators */}
            <div className="space-y-4 pt-2">
              <div className="p-4 rounded-md border-l-2 border-l-[#C5B2A4] border-t border-r border-b border-[#837062]/20 bg-white/[0.015] hover:bg-white/[0.03] transition-colors">
                <div className="flex items-center gap-2.5 mb-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#C5B2A4]" />
                  <h4 className="text-sm font-semibold text-[#F5EFEB]">Defensive Backend Design</h4>
                </div>
                <p className="text-xs text-[#9A8B80] leading-relaxed pl-6">
                  Prioritizing explicit API contracts, strict payload validation, normalized relational schemas, and isolated service boundaries to ensure zero silent data corruption.
                </p>
              </div>

              <div className="p-4 rounded-md border-l-2 border-l-[#C5B2A4] border-t border-r border-b border-[#837062]/20 bg-white/[0.015] hover:bg-white/[0.03] transition-colors">
                <div className="flex items-center gap-2.5 mb-1.5">
                  <Cpu className="w-4 h-4 text-[#C5B2A4]" />
                  <h4 className="text-sm font-semibold text-[#F5EFEB]">Lean Frontend Performance</h4>
                </div>
                <p className="text-xs text-[#9A8B80] leading-relaxed pl-6">
                  Authoring minimal, composable React 19 & TypeScript component trees. Eliminating unnecessary re-renders, adhering to semantic HTML, and guaranteeing accessible keyboard navigation.
                </p>
              </div>

              <div className="p-4 rounded-md border-l-2 border-l-[#C5B2A4] border-t border-r border-b border-[#837062]/20 bg-white/[0.015] hover:bg-white/[0.03] transition-colors">
                <div className="flex items-center gap-2.5 mb-1.5">
                  <Terminal className="w-4 h-4 text-[#C5B2A4]" />
                  <h4 className="text-sm font-semibold text-[#F5EFEB]">Production Reproducibility</h4>
                </div>
                <p className="text-xs text-[#9A8B80] leading-relaxed pl-6">
                  Containerizing microservices with Docker, writing testable modular routines, and maintaining disciplined Git workflows so environments stay deterministic from local dev to production.
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-[#837062]/20 flex items-center justify-between text-[11px] font-mono text-[#9A8B80]">
              <span>CORE FOCUS</span>
            </div>
          </div>

        </div>

        {/* Open Editorial Skills Stage - Inspired by madewithgsap.com GSAP Motion */}
        <div className="w-full relative overflow-visible mt-16 sm:mt-24">
          <InteractiveCanvasShowcase />
        </div>

      </div>
    </section>
  );
};

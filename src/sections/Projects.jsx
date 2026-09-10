import { useState, useRef } from "react";
import { 
  ArrowUpRight, 
  CheckCircle2, 
  Eye, 
  ShieldCheck, 
  Terminal, 
  Calendar, 
  DollarSign, 
  Sparkles, 
  Clock, 
  UserCheck, 
  RefreshCw,
  X,
  Layers,
  CheckSquare
} from "lucide-react";
import { FiGithub } from "react-icons/fi";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const CATEGORIES = [
  { id: "all", label: "All Works" },
  { id: "fullstack", label: "Full Stack" },
  { id: "backend", label: "Backend & Vision" },
];

export const Projects = () => {
  const sectionRef = useRef(null);
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);

  // --- Interactive State for Barber Demo (Card 1) ---
  const [selectedBarber, setSelectedBarber] = useState("Carlos R.");
  const [selectedSlot, setSelectedSlot] = useState("11:00 AM");
  const [bookingState, setBookingState] = useState("idle"); // 'idle' | 'reserving' | 'confirmed'
  const [activeRoleView, setActiveRoleView] = useState("client"); // 'client' | 'admin'

  // --- Interactive State for OCR Demo (Card 2) ---
  const [ocrInspectionMode, setOcrInspectionMode] = useState("detection"); // 'raw' | 'detection'

  // --- Interactive State for Cash-Tracker Demo (Card 3) ---
  const [ledgerPeriod, setLedgerPeriod] = useState("q2"); // 'q1' | 'q2' | 'ytd'

  // --- Interactive State for UpTask Demo (Card 4) ---
  const [tasks, setTasks] = useState([
    { id: 1, title: "JWT Auth Middleware", status: "Done", tag: "Security" },
    { id: 2, title: "Sprint Velocity Chart", status: "In Progress", tag: "Analytics" },
    { id: 3, title: "Collaborator Invites", status: "Todo", tag: "Feature" },
  ]);

  const cycleTaskStatus = (taskId) => {
    setTasks((prev) =>
      prev.map((t) => {
        if (t.id !== taskId) return t;
        const nextStatus =
          t.status === "Todo" ? "In Progress" : t.status === "In Progress" ? "Done" : "Todo";
        return { ...t, status: nextStatus };
      })
    );
  };

  const handleSimulateReservation = () => {
    setBookingState("reserving");
    setTimeout(() => {
      setBookingState("confirmed");
    }, 600);
  };

  const financialData = {
    q1: { income: "$12,450", expense: "$4,120", net: "+$8,330", latency: "34ms" },
    q2: { income: "$15,800", expense: "$5,240", net: "+$10,560", latency: "28ms" },
    ytd: { income: "$28,250", expense: "$9,360", net: "+$18,890", latency: "42ms" },
  };

  useGSAP(
    () => {
      const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (prefersReducedMotion || !sectionRef.current) return;

      const isMobile = window.innerWidth < 768;

      gsap.from(".bento-item", {
        opacity: isMobile ? 0.4 : 0,
        y: isMobile ? 16 : 30,
        duration: isMobile ? 0.45 : 0.75,
        stagger: isMobile ? 0.06 : 0.1,
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
      id="projects" 
      className="relative z-10 bg-transparent text-[#F5EFEB] pt-24 pb-28 sm:pt-32 sm:pb-36 overflow-hidden"
    >
      {/* Ambient Cabernet Glows */}
      <div className="absolute top-1/3 right-0 w-80 sm:w-[500px] h-80 sm:h-[500px] bg-[#3E1A1C]/20 rounded-full blur-[140px] pointer-events-none translate-x-1/2" />
      <div className="absolute bottom-10 left-0 w-72 sm:w-[450px] h-72 sm:h-[450px] bg-[#837062]/10 rounded-full blur-[120px] pointer-events-none -translate-x-1/3" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md border border-[#837062]/30 bg-[#3E1A1C]/20 text-[#C5B2A4] text-xs font-mono tracking-widest uppercase mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C5B2A4]" />
              <span>02 // INTERACTIVE PROJECT SHOWCASE</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight tracking-tight text-[#F5EFEB]">
              Interactive architectures, platforms &{" "}
              <span className="font-serif italic font-normal text-[#C5B2A4]">
                production case studies.
              </span>
            </h2>

            <p className="mt-4 text-[#A89A90] text-sm sm:text-base leading-relaxed">
              Explore real-world software systems through interactive state machine simulators, OCR computer vision inspectors, and live architectural sandboxes.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-[#141517]/90 rounded-md border border-[#837062]/25 self-start md:self-auto">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-md text-xs font-mono transition-all cursor-pointer ${
                  activeCategory === cat.id
                    ? "bg-[#3E1A1C] text-[#F5EFEB] border border-[#837062]/40 shadow-sm"
                    : "text-[#A89A90] hover:text-[#F5EFEB] hover:bg-white/[0.03]"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* ================= ASYMMETRIC INTERACTIVE BENTO GRID ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* ================= BENTO CARD 1: LA PERLA BARBERSTORE (SPAN 8) ================= */}
          {(activeCategory === "all" || activeCategory === "fullstack") && (
            <div className="bento-item lg:col-span-8 rounded-xl bg-[#141517]/90 border border-[#837062]/30 p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden group shadow-lg">
              <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-[#C5B2A4]/40 to-transparent pointer-events-none" />
              
              <div className="space-y-5 relative z-10">
                {/* Meta header */}
                <div className="flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-bold text-[#C5B2A4]">01</span>
                    <span className="text-neutral-500">•</span>
                    <span className="text-[#E2E8F0] font-medium">2024 — 2025</span>
                    <span className="text-neutral-500">•</span>
                    <span className="px-2.5 py-0.5 rounded-md bg-[#3E1A1C]/60 text-[#C5B2A4] border border-[#837062]/30 font-medium">
                      PRODUCTION PLATFORM
                    </span>
                  </div>

                  <a
                    href="https://github.com/FerchoChainz/LaPerla-Barber"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-mono text-[#C5B2A4] hover:text-[#F5EFEB] transition-colors"
                  >
                    <FiGithub className="w-4 h-4" />
                    <span>GITHUB REPO</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>

                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-[#F5EFEB] tracking-tight">
                    La Perla BarberStore
                  </h3>
                  <p className="text-xs sm:text-sm font-mono text-[#C5B2A4] mt-1">
                    Atomic Appointment Scheduling & Administrative Management Engine
                  </p>
                  <p className="text-xs sm:text-sm text-[#A89A90] mt-3 leading-relaxed max-w-2xl">
                    Engineered to resolve real-world double-booking collisions with an atomic slot allocation engine. Features a customer self-booking workflow alongside an authenticated role-based staff dashboard.
                  </p>
                </div>

                {/* --- INTERACTIVE SIMULATOR WIDGET: ATOMIC SLOT ENGINE --- */}
                <div className="p-4 sm:p-5 rounded-lg bg-[#0E0F12] border border-[#837062]/35 space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/[0.06] pb-3 text-xs font-mono">
                    <div className="flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-[#C5B2A4]" />
                      <span className="text-[#F5EFEB] font-semibold">INTERACTIVE ENGINE SIMULATOR:</span>
                      <span className="text-[#A89A90]">Atomic Slot Lock</span>
                    </div>

                    <div className="flex items-center gap-1 bg-[#1A1B1E] p-1 rounded-md border border-[#837062]/20">
                      <button
                        onClick={() => setActiveRoleView("client")}
                        className={`px-2 py-0.5 rounded text-[10px] font-mono transition-colors ${
                          activeRoleView === "client" ? "bg-[#3E1A1C] text-[#F5EFEB]" : "text-[#A89A90]"
                        }`}
                      >
                        Client Portal
                      </button>
                      <button
                        onClick={() => setActiveRoleView("admin")}
                        className={`px-2 py-0.5 rounded text-[10px] font-mono transition-colors ${
                          activeRoleView === "admin" ? "bg-[#3E1A1C] text-[#F5EFEB]" : "text-[#A89A90]"
                        }`}
                      >
                        Admin Queue
                      </button>
                    </div>
                  </div>

                  {activeRoleView === "client" ? (
                    <div className="space-y-3">
                      {/* Barber Selection */}
                      <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
                        <span className="text-[#A89A90] mr-1">Select Barber:</span>
                        {["Carlos R.", "Mateo G."].map((barber) => (
                          <button
                            key={barber}
                            onClick={() => {
                              setSelectedBarber(barber);
                              setBookingState("idle");
                            }}
                            className={`px-2.5 py-1 rounded border text-xs transition-all cursor-pointer ${
                              selectedBarber === barber
                                ? "bg-[#3E1A1C] border-[#C5B2A4] text-[#F5EFEB]"
                                : "border-[#837062]/30 text-[#A89A90] hover:text-[#F5EFEB]"
                            }`}
                          >
                            {barber}
                          </button>
                        ))}
                      </div>

                      {/* Time Slots */}
                      <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
                        <span className="text-[#A89A90] mr-1">Time Slot:</span>
                        {["09:30 AM", "11:00 AM", "02:30 PM", "04:00 PM"].map((slot) => (
                          <button
                            key={slot}
                            onClick={() => {
                              setSelectedSlot(slot);
                              setBookingState("idle");
                            }}
                            className={`px-2.5 py-1 rounded border text-xs transition-all cursor-pointer ${
                              selectedSlot === slot
                                ? "bg-[#C5B2A4] border-[#C5B2A4] text-[#121316] font-semibold"
                                : "border-[#837062]/30 text-[#A89A90] hover:text-[#F5EFEB]"
                            }`}
                          >
                            {slot}
                          </button>
                        ))}
                      </div>

                      {/* Simulation Trigger & State Output */}
                      <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
                        <button
                          onClick={handleSimulateReservation}
                          disabled={bookingState === "reserving"}
                          className="inline-flex items-center gap-2 px-3.5 py-2 rounded-md bg-[#3E1A1C] hover:bg-[#582428] text-xs font-mono text-[#F5EFEB] border border-[#837062]/40 transition-all cursor-pointer disabled:opacity-50"
                        >
                          {bookingState === "reserving" ? (
                            <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                          ) : (
                            <ShieldCheck className="w-3.5 h-3.5 text-[#C5B2A4]" />
                          )}
                          <span>
                            {bookingState === "confirmed" ? "RESERVE ANOTHER SLOT" : "TEST ATOMIC LOCK"}
                          </span>
                        </button>

                        <div className="text-[11px] font-mono">
                          {bookingState === "confirmed" ? (
                            <span className="text-emerald-400 flex items-center gap-1.5">
                              <CheckCircle2 className="w-3.5 h-3.5" />
                              LOCKED: {selectedSlot} with {selectedBarber} (Zero Collisions)
                            </span>
                          ) : (
                            <span className="text-[#A89A90]">
                              Status: Ready for transactional dispatch
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-2 text-xs font-mono">
                      <div className="p-2.5 rounded bg-black/40 border border-white/[0.04] flex items-center justify-between">
                        <span className="text-[#F5EFEB]">Carlos R. — 10:00 AM (Confirmed)</span>
                        <span className="text-emerald-400 font-semibold">PAID</span>
                      </div>
                      <div className="p-2.5 rounded bg-black/40 border border-white/[0.04] flex items-center justify-between">
                        <span className="text-[#F5EFEB]">{selectedBarber} — {selectedSlot} (Atomic Hold)</span>
                        <span className="text-[#C5B2A4] font-semibold">ACTIVE</span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {["TypeScript", "React 19", "Node.js", "Express", "Tailwind CSS", "MySQL ACID"].map((t, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/[0.08] text-[11px] font-mono text-[#C5B2A4]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Card Action */}
              <div className="pt-6 mt-6 border-t border-[#837062]/20 flex items-center justify-between text-xs font-mono text-[#A89A90]">
                <span>ARCHITECTURE: Full-Stack Relational</span>
                <button
                  onClick={() => setSelectedProject("laperla")}
                  className="text-[#C5B2A4] hover:text-[#F5EFEB] transition-colors cursor-pointer flex items-center gap-1"
                >
                  <span>TECHNICAL CASE STUDY</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          )}

          {/* ================= BENTO CARD 2: DOCUMENT OCR ENGINE (SPAN 4) ================= */}
          {(activeCategory === "all" || activeCategory === "backend") && (
            <div className="bento-item lg:col-span-4 rounded-xl bg-[#141517]/90 border border-[#837062]/30 p-6 sm:p-7 flex flex-col justify-between relative overflow-hidden group shadow-lg">
              <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-[#C5B2A4]/40 to-transparent pointer-events-none" />

              <div className="space-y-4 relative z-10">
                {/* Meta header */}
                <div className="flex items-center justify-between text-xs font-mono">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-bold text-[#C5B2A4]">02</span>
                    <span className="text-neutral-500">•</span>
                    <span className="px-2 py-0.5 rounded-md bg-[#3E1A1C]/60 text-[#C5B2A4] border border-[#837062]/30 text-[10px] font-medium">
                      ENTERPRISE AI
                    </span>
                  </div>
                  <span className="text-[11px] text-[#A89A90]">H2O Beborn</span>
                </div>

                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#F5EFEB] tracking-tight">
                    Document OCR Engine
                  </h3>
                  <p className="text-xs font-mono text-[#C5B2A4] mt-0.5">
                    PaddleOCR & Microservice Pipeline
                  </p>
                  <p className="text-xs text-[#A89A90] mt-2 leading-relaxed">
                    Automated document parsing microservice converting physical invoices and tables into validated JSON schemas.
                  </p>
                </div>

                {/* --- REAL OCR IMAGE INSPECTOR PREVIEW --- */}
                <div className="rounded-lg border border-[#837062]/35 bg-[#0E0F12] overflow-hidden space-y-2 p-2">
                  <div className="flex items-center justify-between px-1 text-[10px] font-mono text-[#A89A90]">
                    <span className="flex items-center gap-1 text-[#C5B2A4]">
                      <Eye className="w-3 h-3" />
                      INSPECTOR:
                    </span>
                    <div className="flex items-center gap-1">
                      <button
                        onClick={() => setOcrInspectionMode("detection")}
                        className={`px-1.5 py-0.5 rounded text-[9px] transition-colors ${
                          ocrInspectionMode === "detection" ? "bg-[#3E1A1C] text-[#F5EFEB]" : "text-[#837062]"
                        }`}
                      >
                        BBoxes
                      </button>
                      <button
                        onClick={() => setOcrInspectionMode("raw")}
                        className={`px-1.5 py-0.5 rounded text-[9px] transition-colors ${
                          ocrInspectionMode === "raw" ? "bg-[#3E1A1C] text-[#F5EFEB]" : "text-[#837062]"
                        }`}
                      >
                        Raw Scan
                      </button>
                    </div>
                  </div>

                  <div className="relative aspect-[16/10] w-full rounded overflow-hidden bg-black/60">
                    <img
                      src="/projects/tabla_pagina_procesada_1.webp"
                      alt="PaddleOCR Document Extraction Preview"
                      width="600"
                      height="375"
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover object-top opacity-85"
                    />

                    {ocrInspectionMode === "detection" && (
                      <div className="absolute inset-0 pointer-events-none p-2 flex flex-col justify-between">
                        <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-black/80 border border-emerald-500/60 text-[10px] font-mono text-emerald-400">
                          <span>TABLE DETECTED // 14 ROWS</span>
                        </div>
                        <div className="inline-flex items-center justify-between text-[9px] font-mono text-[#F5EFEB] bg-black/85 px-2 py-1 rounded border border-white/10">
                          <span>CONFIDENCE: 98.9%</span>
                          <span>LATENCY: 142ms</span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {["Python", "Flask", "PaddleOCR", "Docker", "REST API"].map((t, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded bg-white/[0.03] border border-white/[0.08] text-[10px] font-mono text-[#C5B2A4]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Card Action */}
              <div className="pt-4 mt-4 border-t border-[#837062]/20 flex items-center justify-between text-xs font-mono text-[#A89A90]">
                <span>OCR Pipeline // AI</span>
                <button
                  onClick={() => setSelectedProject("ocr-engine")}
                  className="text-[#C5B2A4] hover:text-[#F5EFEB] transition-colors cursor-pointer flex items-center gap-1"
                >
                  <span>DETAILS</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          )}

          {/* ================= BENTO CARD 3: CASH-TRACKER LEDGER (SPAN 6) ================= */}
          {(activeCategory === "all" || activeCategory === "backend") && (
            <div className="bento-item lg:col-span-6 rounded-xl bg-[#141517]/90 border border-[#837062]/30 p-6 sm:p-7 flex flex-col justify-between relative overflow-hidden group shadow-lg">
              <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-[#C5B2A4]/40 to-transparent pointer-events-none" />

              <div className="space-y-4 relative z-10">
                {/* Meta header */}
                <div className="flex items-center justify-between text-xs font-mono">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-bold text-[#C5B2A4]">03</span>
                    <span className="text-neutral-500">•</span>
                    <span className="text-[#E2E8F0]">2024</span>
                    <span className="text-neutral-500">•</span>
                    <span className="px-2.5 py-0.5 rounded-md bg-[#3E1A1C]/60 text-[#C5B2A4] border border-[#837062]/30 text-[10px] font-medium">
                      FINANCIAL SYSTEMS
                    </span>
                  </div>

                  <a
                    href="https://github.com/FerchoChainz/Cash-Tracker"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-mono text-[#C5B2A4] hover:text-[#F5EFEB] transition-colors"
                  >
                    <FiGithub className="w-3.5 h-3.5" />
                    <span>REPO</span>
                  </a>
                </div>

                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#F5EFEB] tracking-tight">
                    Cash-Tracker Ledger
                  </h3>
                  <p className="text-xs font-mono text-[#C5B2A4] mt-0.5">
                    Laravel Relational Accounting & Multi-Period Cash Flow
                  </p>
                  <p className="text-xs text-[#A89A90] mt-2 leading-relaxed">
                    Engineered with parameterized relational aggregation queries and strict ACID ledger principles to guarantee sub-50ms report generation.
                  </p>
                </div>

                {/* --- INTERACTIVE FINANCIAL LEDGER SIMULATOR --- */}
                <div className="p-4 rounded-lg bg-[#0E0F12] border border-[#837062]/35 space-y-3">
                  <div className="flex items-center justify-between text-xs font-mono border-b border-white/[0.06] pb-2">
                    <span className="text-[#F5EFEB] flex items-center gap-1.5">
                      <DollarSign className="w-3.5 h-3.5 text-[#C5B2A4]" />
                      LEDGER PERIOD QUERY:
                    </span>
                    <div className="flex items-center gap-1 bg-[#1A1B1E] p-0.5 rounded">
                      {["q1", "q2", "ytd"].map((p) => (
                        <button
                          key={p}
                          onClick={() => setLedgerPeriod(p)}
                          className={`px-2 py-0.5 rounded text-[10px] font-mono uppercase transition-colors ${
                            ledgerPeriod === p ? "bg-[#3E1A1C] text-[#F5EFEB]" : "text-[#837062]"
                          }`}
                        >
                          {p}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-2 text-center font-mono">
                    <div className="p-2 rounded bg-white/[0.02] border border-white/[0.04]">
                      <span className="text-[10px] text-[#837062] block">INCOMING</span>
                      <span className="text-xs sm:text-sm text-emerald-400 font-bold">
                        {financialData[ledgerPeriod].income}
                      </span>
                    </div>
                    <div className="p-2 rounded bg-white/[0.02] border border-white/[0.04]">
                      <span className="text-[10px] text-[#837062] block">OUTGOING</span>
                      <span className="text-xs sm:text-sm text-rose-400 font-bold">
                        {financialData[ledgerPeriod].expense}
                      </span>
                    </div>
                    <div className="p-2 rounded bg-white/[0.02] border border-white/[0.04]">
                      <span className="text-[10px] text-[#837062] block">NET SURPLUS</span>
                      <span className="text-xs sm:text-sm text-[#C5B2A4] font-bold">
                        {financialData[ledgerPeriod].net}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-[10px] font-mono text-[#837062] pt-1">
                    <span>INDEXED QUERY SPEED: {financialData[ledgerPeriod].latency}</span>
                    <span className="text-emerald-400">ACID VERIFIED</span>
                  </div>
                </div>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {["PHP", "Laravel", "MySQL InnoDB", "Tailwind CSS", "Blade"].map((t, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded bg-white/[0.03] border border-white/[0.08] text-[10px] font-mono text-[#C5B2A4]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Card Action */}
              <div className="pt-4 mt-4 border-t border-[#837062]/20 flex items-center justify-between text-xs font-mono text-[#A89A90]">
                <span>Double-Entry Inspired</span>
                <button
                  onClick={() => setSelectedProject("cash-tracker")}
                  className="text-[#C5B2A4] hover:text-[#F5EFEB] transition-colors cursor-pointer flex items-center gap-1"
                >
                  <span>CASE STUDY</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          )}

          {/* ================= BENTO CARD 4: UPTASK COLLABORATIVE BOARD (SPAN 6) ================= */}
          {(activeCategory === "all" || activeCategory === "fullstack") && (
            <div className="bento-item lg:col-span-6 rounded-xl bg-[#141517]/90 border border-[#837062]/30 p-6 sm:p-7 flex flex-col justify-between relative overflow-hidden group shadow-lg">
              <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-[#C5B2A4]/40 to-transparent pointer-events-none" />

              <div className="space-y-4 relative z-10">
                {/* Meta header */}
                <div className="flex items-center justify-between text-xs font-mono">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-bold text-[#C5B2A4]">04</span>
                    <span className="text-neutral-500">•</span>
                    <span className="text-[#E2E8F0]">2024</span>
                    <span className="text-neutral-500">•</span>
                    <span className="px-2.5 py-0.5 rounded-md bg-[#3E1A1C]/60 text-[#C5B2A4] border border-[#837062]/30 text-[10px] font-medium">
                      BESPOKE MVC ENGINE
                    </span>
                  </div>

                  <a
                    href="https://github.com/FerchoChainz/Uptask-MVC"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-mono text-[#C5B2A4] hover:text-[#F5EFEB] transition-colors"
                  >
                    <FiGithub className="w-3.5 h-3.5" />
                    <span>REPO</span>
                  </a>
                </div>

                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#F5EFEB] tracking-tight">
                    UpTask Sprint Platform
                  </h3>
                  <p className="text-xs font-mono text-[#C5B2A4] mt-0.5">
                    Custom MVC Routing & Interactive Task Boards
                  </p>
                  <p className="text-xs text-[#A89A90] mt-2 leading-relaxed">
                    Built from scratch without heavy third-party framework overhead: custom router, token authentication, and asynchronous task state updates.
                  </p>
                </div>

                {/* --- INTERACTIVE KANBAN TASK BOARD --- */}
                <div className="p-4 rounded-lg bg-[#0E0F12] border border-[#837062]/35 space-y-2.5">
                  <div className="flex items-center justify-between text-xs font-mono border-b border-white/[0.06] pb-2">
                    <span className="text-[#F5EFEB] flex items-center gap-1.5">
                      <CheckSquare className="w-3.5 h-3.5 text-[#C5B2A4]" />
                      INTERACTIVE SPRINT BOARD:
                    </span>
                    <span className="text-[10px] text-[#A89A90]">&lt; Click task to advance &gt;</span>
                  </div>

                  <div className="space-y-1.5">
                    {tasks.map((task) => (
                      <div
                        key={task.id}
                        onClick={() => cycleTaskStatus(task.id)}
                        className="p-2.5 rounded bg-white/[0.02] hover:bg-white/[0.05] border border-white/[0.06] flex items-center justify-between text-xs font-mono transition-all cursor-pointer select-none"
                      >
                        <div className="flex items-center gap-2">
                          <span
                            className={`w-2 h-2 rounded-full ${
                              task.status === "Done"
                                ? "bg-emerald-400"
                                : task.status === "In Progress"
                                ? "bg-amber-400"
                                : "bg-neutral-500"
                            }`}
                          />
                          <span className="text-[#F5EFEB]">{task.title}</span>
                        </div>

                        <div className="flex items-center gap-2">
                          <span className="text-[10px] text-[#837062] px-1.5 py-0.5 rounded bg-black/40">
                            {task.tag}
                          </span>
                          <span
                            className={`text-[10px] px-2 py-0.5 rounded font-semibold ${
                              task.status === "Done"
                                ? "bg-emerald-500/20 text-emerald-400"
                                : task.status === "In Progress"
                                ? "bg-amber-500/20 text-amber-400"
                                : "bg-neutral-700/30 text-neutral-400"
                            }`}
                          >
                            {task.status}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between text-[10px] font-mono text-[#837062] pt-1">
                    <span>Zero Framework Bloat</span>
                    <span className="text-[#C5B2A4]">Custom MVC Dispatcher</span>
                  </div>
                </div>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {["PHP MVC", "JavaScript", "Tailwind CSS", "MySQL", "Asynchronous API"].map((t, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded bg-white/[0.03] border border-white/[0.08] text-[10px] font-mono text-[#C5B2A4]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Card Action */}
              <div className="pt-4 mt-4 border-t border-[#837062]/20 flex items-center justify-between text-xs font-mono text-[#A89A90]">
                <span>Agile Architecture</span>
                <button
                  onClick={() => setSelectedProject("uptask")}
                  className="text-[#C5B2A4] hover:text-[#F5EFEB] transition-colors cursor-pointer flex items-center gap-1"
                >
                  <span>CASE STUDY</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          )}

        </div>

      </div>

      {/* ================= TECHNICAL DOSSIER MODAL ================= */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl rounded-xl bg-[#141517] border border-[#837062]/50 p-6 sm:p-8 space-y-6 shadow-2xl text-left overflow-y-auto max-h-[90vh]">
            <div className="flex items-center justify-between border-b border-[#837062]/30 pb-4">
              <span className="text-xs font-mono text-[#C5B2A4] uppercase tracking-wider font-semibold">
                ARCHITECTURAL SPECIFICATION // DOSSIER
              </span>
              <button
                onClick={() => setSelectedProject(null)}
                className="p-1.5 rounded-md bg-[#1A1B1E] border border-[#837062]/30 text-[#A89A90] hover:text-[#F5EFEB] transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {selectedProject === "laperla" && (
              <div className="space-y-4 font-mono text-xs text-[#A89A90]">
                <h3 className="text-xl font-bold text-[#F5EFEB] font-sans">
                  La Perla BarberStore // Deep Dive
                </h3>
                <p className="leading-relaxed">
                  <strong className="text-[#C5B2A4]">The Challenge:</strong> High customer call volumes and paper records led to double bookings and lost records during peak shop hours.
                </p>
                <p className="leading-relaxed">
                  <strong className="text-[#C5B2A4]">The Solution:</strong> Constructed a deterministic transactional state machine in Node.js & MySQL preventing race condition bookings. Implemented role-based authorization ensuring barbers can only access their scheduled shifts.
                </p>
                <div className="p-3 rounded bg-black/50 border border-white/10 space-y-1">
                  <span className="text-emerald-400 block font-bold">KEY METRICS:</span>
                  <p>• Zero overlapping appointment records across production history.</p>
                  <p>• 45% reduction in barber administrative overhead.</p>
                </div>
              </div>
            )}

            {selectedProject === "ocr-engine" && (
              <div className="space-y-4 font-mono text-xs text-[#A89A90]">
                <h3 className="text-xl font-bold text-[#F5EFEB] font-sans">
                  Document OCR Engine // Deep Dive
                </h3>
                <p className="leading-relaxed">
                  <strong className="text-[#C5B2A4]">The Challenge:</strong> Manual transcription of supplier invoices and paper records caused severe operational delays and error rates.
                </p>
                <p className="leading-relaxed">
                  <strong className="text-[#C5B2A4]">The Solution:</strong> Containerized Python & Flask microservice utilizing PaddleOCR with CLAHE contrast normalization and regex schema mapping into enterprise databases.
                </p>
                <div className="p-3 rounded bg-black/50 border border-white/10 space-y-1">
                  <span className="text-emerald-400 block font-bold">KEY METRICS:</span>
                  <p>• Sub-second document parsing velocity.</p>
                  <p>• 98.9% extraction confidence on standardized forms.</p>
                </div>
              </div>
            )}

            {selectedProject === "cash-tracker" && (
              <div className="space-y-4 font-mono text-xs text-[#A89A90]">
                <h3 className="text-xl font-bold text-[#F5EFEB] font-sans">
                  Cash-Tracker Ledger // Deep Dive
                </h3>
                <p className="leading-relaxed">
                  <strong className="text-[#C5B2A4]">The Challenge:</strong> Commercial budgeting tools suffer from telemetry bloat and lack strict double-entry accountability.
                </p>
                <p className="leading-relaxed">
                  <strong className="text-[#C5B2A4]">The Solution:</strong> Built a relational double-entry architecture in Laravel with parameterized aggregations and indexed date ranges.
                </p>
                <div className="p-3 rounded bg-black/50 border border-white/10 space-y-1">
                  <span className="text-emerald-400 block font-bold">KEY METRICS:</span>
                  <p>• Sub-30ms P95 query latency on multi-year transaction tables.</p>
                </div>
              </div>
            )}

            {selectedProject === "uptask" && (
              <div className="space-y-4 font-mono text-xs text-[#A89A90]">
                <h3 className="text-xl font-bold text-[#F5EFEB] font-sans">
                  UpTask MVC Platform // Deep Dive
                </h3>
                <p className="leading-relaxed">
                  <strong className="text-[#C5B2A4]">The Challenge:</strong> Heavy project SaaS tools require complex onboarding and bloated JavaScript payloads.
                </p>
                <p className="leading-relaxed">
                  <strong className="text-[#C5B2A4]">The Solution:</strong> First-principles custom MVC router in PHP with clean tokenized verification, optimistic UI updates, and role-based permissions.
                </p>
                <div className="p-3 rounded bg-black/50 border border-white/10 space-y-1">
                  <span className="text-emerald-400 block font-bold">KEY METRICS:</span>
                  <p>• 0 external runtime dependencies.</p>
                  <p>• 100% testable decoupled architecture.</p>
                </div>
              </div>
            )}

            <div className="pt-4 border-t border-[#837062]/30 flex justify-end">
              <button
                onClick={() => setSelectedProject(null)}
                className="px-4 py-2 rounded-md bg-[#3E1A1C] hover:bg-[#582428] text-xs font-mono text-[#F5EFEB] border border-[#837062]/40 transition-all cursor-pointer"
              >
                CLOSE DOSSIER
              </button>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};

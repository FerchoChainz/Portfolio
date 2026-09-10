import { useState, useRef } from "react";
import gsap from "gsap";
import { Observer } from "gsap/Observer";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { 
  Code2, 
  Cpu, 
  Activity, 
  Copy, 
  Check, 
  ArrowLeft, 
  ArrowRight,
  Sparkles,
  Zap,
  Terminal,
  Layers
} from "lucide-react";
import { 
  SiReact, 
  SiTypescript, 
  SiTailwindcss, 
  SiNodedotjs, 
  SiPython, 
  SiFlask, 
  SiLaravel, 
  SiGo, 
  SiDocker, 
  SiGit,
  SiPostgresql
} from "react-icons/si";

gsap.registerPlugin(Observer, ScrollTrigger);

const SKILLS_DATA = [
  {
    id: "react",
    num: "01",
    name: "React 19",
    category: "FRONTEND // ARCHITECTURE",
    role: "Core Engine",
    tag: "Concurrent Transitions",
    shortDesc: "Server Actions, optimistic updates, and atomic state pipelines.",
    description: "Architecting zero-jitter React 19 apps with Server Actions, compiler-optimized memoization, and resilient concurrent transitions.",
    projectUsage: "La Perla BarberStore // Real-time reservation booking flow & admin queues",
    metrics: [
      { label: "Frame Budget", value: "< 16ms" },
      { label: "State Jitter", value: "0ms" },
      { label: "Audit Score", value: "99+ Performance" }
    ],
    codeSnippet: `// React 19 Server Action with Optimistic Reservation
export async function reserveBarberSlot(prevState, formData) {
  'use server';
  const slotId = formData.get('slotId');
  const barberId = formData.get('barberId');
  
  // Atomic transactional lock on appointment slot
  const slot = await db.slots.findUnique({ where: { id: slotId } });
  if (slot.isBooked) throw new Error('Collision: Slot unavailable');
  
  return await db.appointments.create({
    data: { slotId, barberId, status: 'CONFIRMED' }
  });
}`,
    icon: SiReact,
  },
  {
    id: "typescript",
    num: "02",
    name: "TypeScript",
    category: "LANGUAGES // TYPE SYSTEMS",
    role: "Type Safety",
    tag: "Strict Mode",
    shortDesc: "Defensive generic interfaces and compile-time verification.",
    description: "Writing strictly typed, self-documenting codebases with generic constraints, discriminated unions, and automated schema inference that eliminates runtime surprises.",
    projectUsage: "La Perla BarberStore & RESTful Microservices",
    metrics: [
      { label: "Type Coverage", value: "100% Strict" },
      { label: "Runtime Leaks", value: "0 Tolerated" },
      { label: "Schema Sync", value: "End-to-End" }
    ],
    codeSnippet: `// Discriminated Union API Envelope Protocol
export type ApiResponse<T> = 
  | { status: 'success'; data: T; timestamp: number }
  | { status: 'error'; message: string; code: 400 | 404 | 500 };

export interface BarberAppointment {
  readonly id: string;
  readonly slotTimestamp: Date;
  status: 'PENDING' | 'CONFIRMED' | 'CANCELLED';
}`,
    icon: SiTypescript,
  },
  {
    id: "nodejs",
    num: "03",
    name: "Node.js & Express",
    category: "BACKEND // RUNTIME & APIS",
    role: "REST Architectures",
    tag: "Event Loop",
    shortDesc: "Scalable event-driven services, JWT auth, and middleware pipelines.",
    description: "Constructing resilient RESTful API backends utilizing Node's asynchronous event loop, custom middleware pipelines, structured error wrappers, and secure session management.",
    projectUsage: "La Perla BarberStore & Client Automation Endpoints",
    metrics: [
      { label: "Throughput", value: "10k+ req/s" },
      { label: "P99 Latency", value: "< 45ms" },
      { label: "Availability", value: "99.9% Uptime" }
    ],
    codeSnippet: `// Async Middleware Wrapper with Centralized Error Protocol
export const asyncRoute = (handler) => async (req, res, next) => {
  try {
    const result = await handler(req, res);
    return res.status(200).json({ status: 'success', data: result });
  } catch (err) {
    next(new AppError(err.message, err.statusCode || 500));
  }
};`,
    icon: SiNodedotjs,
  },
  {
    id: "python",
    num: "04",
    name: "Python & PaddleOCR",
    category: "VISION // MACHINE LEARNING",
    role: "Document AI",
    tag: "Deep Vision",
    shortDesc: "OCR extraction pipelines converting degraded scans into structured JSON.",
    description: "Implementing deep-learning OCR models to detect and recognize dense text, tabular data, and alphanumeric codes from degraded physical scans with sub-second turnaround.",
    projectUsage: "H2O Beborn // Enterprise Document OCR Microservice",
    metrics: [
      { label: "OCR Accuracy", value: "98.9%" },
      { label: "Inference Time", value: "142ms / Scan" },
      { label: "Table Extraction", value: "Pixel-Accurate" }
    ],
    codeSnippet: `# Deep Learning Inference & Bounding-Box Coordinate Extraction
from paddleocr import PaddleOCR

ocr_engine = PaddleOCR(use_angle_cls=True, lang='en')

def extract_tabular_cells(image_buffer):
    results = ocr_engine.ocr(image_buffer, cls=True)
    structured_rows = []
    for line in results[0]:
        coords, (text, confidence) = line
        if confidence > 0.85:
            structured_rows.append({"text": text, "conf": confidence})
    return structured_rows`,
    icon: SiPython,
  },
  {
    id: "flask",
    num: "05",
    name: "Flask Microservices",
    category: "BACKEND // LIGHTWEIGHT SERVICES",
    role: "Service Layer",
    tag: "Microservices",
    shortDesc: "Decoupled HTTP microservices for asynchronous model serving.",
    description: "Building lightweight, container-ready Python HTTP endpoints to serve OCR models and background automation routines without monolithic framework bloat.",
    projectUsage: "H2O Beborn // Asynchronous OCR Processing Microservice",
    metrics: [
      { label: "Cold Start", value: "< 180ms" },
      { label: "Memory Idle", value: "~110MB" },
      { label: "Payload Schema", value: "JSON Strict" }
    ],
    codeSnippet: `# Microservice Dispatcher for OCR Ingestion
from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/api/v1/parse-document', methods=['POST'])
def parse_document():
    payload = request.files.get('document')
    if not payload:
        return jsonify({"error": "No file uploaded"}), 400
    extracted = ocr_pipeline.run(payload.read())
    return jsonify({"status": "parsed", "data": extracted})`,
    icon: SiFlask,
  },
  {
    id: "go",
    num: "06",
    name: "Go (Golang)",
    category: "SYSTEMS // CONCURRENCY",
    role: "High-Throughput",
    tag: "Goroutines & Channels",
    shortDesc: "Goroutines, channels, and low-latency microservices.",
    description: "Active development in Go for high-throughput network services, utilizing goroutines, thread-safe channels, and tiny standalone binary deployments.",
    projectUsage: "Algorithmic pipelines & concurrent network benchmarking tools",
    metrics: [
      { label: "Binary Size", value: "< 15MB Single Exec" },
      { label: "Concurrency", value: "100k+ Goroutines" },
      { label: "GC Latency", value: "< 1ms Sub-pause" }
    ],
    codeSnippet: `// High-Performance Concurrent Worker Pool
func WorkerPool(jobs <-chan Job, results chan<- Result, wg *sync.WaitGroup) {
    defer wg.Done()
    for job := range jobs {
        res := processTask(job)
        results <- res
    }
}`,
    icon: SiGo,
  },
  {
    id: "docker",
    num: "07",
    name: "Docker & Containers",
    category: "INFRASTRUCTURE // DEVOPS",
    role: "Containers",
    tag: "Multi-stage Builds",
    shortDesc: "Multi-stage builds, isolated runtimes, and local parity.",
    description: "Architecting multi-stage Dockerfiles and container configurations to ensure complete environmental parity between local development and production deployments.",
    projectUsage: "H2O Beborn OCR Engine & Full-Stack Application Deployments",
    metrics: [
      { label: "Image Cut", value: "65% Size Reduction" },
      { label: "Host Parity", value: "100% Deterministic" },
      { label: "Orchestration", value: "Compose / Linux" }
    ],
    codeSnippet: `# Optimized Multi-Stage Dockerfile
FROM python:3.11-slim AS builder
WORKDIR /app
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

FROM python:3.11-alpine AS runner
WORKDIR /app
COPY --from=builder /usr/local/lib/python3.11 /usr/local/lib/python3.11
COPY . .
EXPOSE 5000
CMD ["gunicorn", "--bind", "0.0.0.0:5000", "app:app"]`,
    icon: SiDocker,
  },
  {
    id: "postgresql",
    num: "08",
    name: "PostgreSQL & MySQL",
    category: "DATA // RELATIONAL ARCHITECTURE",
    role: "Relational Schemas",
    tag: "ACID Storage",
    shortDesc: "Normalized schemas, indexed queries, and transactional integrity.",
    description: "Designing normalized third-normal-form relational databases with indexed query paths, foreign key cascades, and atomic transactions to prevent data corruption.",
    projectUsage: "La Perla BarberStore, Cash-Tracker & UpTask Platforms",
    metrics: [
      { label: "Query Speed", value: "< 25ms P99" },
      { label: "Integrity", value: "Strict Foreign Keys" },
      { label: "Normalization", value: "3NF Compliant" }
    ],
    codeSnippet: `-- Normalized Schema with Composite Indexing
CREATE TABLE appointments (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    barber_id UUID REFERENCES barbers(id) ON DELETE CASCADE,
    slot_time TIMESTAMPTZ NOT NULL,
    status VARCHAR(24) DEFAULT 'PENDING',
    CONSTRAINT unique_barber_slot UNIQUE (barber_id, slot_time)
);
CREATE INDEX idx_appointments_lookup ON appointments(barber_id, slot_time);`,
    icon: SiPostgresql,
  },
  {
    id: "laravel",
    num: "09",
    name: "Laravel (PHP)",
    category: "BACKEND // FULL-STACK MVC",
    role: "MVC Systems",
    tag: "PHP Enterprise",
    shortDesc: "Eloquent ORM, robust routing, and secure database migrations.",
    description: "Leveraging Laravel's mature MVC patterns for rapid full-stack application development, database migrations, complex Eloquent relational modeling, and built-in CSRF/session security.",
    projectUsage: "Cash-Tracker // Financial Accounting Ledger & Cash Flow System",
    metrics: [
      { label: "Transactions", value: "100% ACID" },
      { label: "ORM Efficiency", value: "Sub-40ms P95" },
      { label: "Security", value: "CSRF & Hashing" }
    ],
    codeSnippet: `// Transactional Double-Entry Ledger Entry
public function recordTransaction(Request $request): JsonResponse {
    return DB::transaction(function () use ($request) {
        $entry = LedgerEntry::create($request->validated());
        $entry->account->decrement('balance', $entry->amount);
        return response()->json(['status' => 'reconciled', 'id' => $entry->id]);
    });
}`,
    icon: SiLaravel,
  },
  {
    id: "tailwind",
    num: "10",
    name: "Tailwind CSS",
    category: "FRONTEND // MODERN STYLING",
    role: "Design Tokens",
    tag: "Utility-First",
    shortDesc: "Fluid responsive layouts, container queries, and design systems.",
    description: "Authoring maintainable, utility-driven UI architectures using Tailwind v4 tokens, responsive breakpoints, container queries, and fluid typography without CSS runtime overhead.",
    projectUsage: "Personal Portfolio & Client Web Applications",
    metrics: [
      { label: "Bundle Size", value: "< 14kB Gzip" },
      { label: "Runtime", value: "0ms Static CSS" },
      { label: "Breakpoints", value: "Fluid & Container" }
    ],
    codeSnippet: `/* Fluid Typography & Modern Theme Tokens */
@theme {
  --font-serif: 'Instrument Serif', Georgia, serif;
  --color-wine: #3E1A1C;
  --color-champagne: #C5B2A4;
  --color-onyx: #121316;
}`,
    icon: SiTailwindcss,
  },
  {
    id: "git",
    num: "11",
    name: "Git & GitHub",
    category: "DEVOPS // VERSION CONTROL",
    role: "Workflow Discipline",
    tag: "VCS & CI",
    shortDesc: "Semantic commits, branching models, and review discipline.",
    description: "Employing disciplined version control practices: atomic commits, descriptive pull request reviews, feature branching, and conflict resolution across complex codebases.",
    projectUsage: "40+ Repositories & Collaborative Client Codebases",
    metrics: [
      { label: "Repositories", value: "40+ Maintained" },
      { label: "Commit Hygiene", value: "Semantic & Atomic" },
      { label: "Branch Model", value: "Feature Trunk Base" }
    ],
    codeSnippet: `# Disciplined Git Workflow & Semantic Commits
git checkout -b feature/ocr-contour-detection
git commit -m "feat(vision): integrate adaptive thresholding filter"
git rebase -i main # Clean, linear history before PR merge`,
    icon: SiGit,
  },
];

export const EditorialSkillsShowcase = () => {
  const rootRef = useRef(null);
  const trackRef = useRef(null);
  const cardsRef = useRef([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeTab, setActiveTab] = useState("architecture");
  const [copied, setCopied] = useState(false);

  // HUD telemetry refs for 0-latency DOM updates (madewithgsap pattern)
  const hudNumRef = useRef(null);
  const hudTypeRef = useRef(null);
  const hudTitleRef = useRef(null);
  const onScreenPillRef = useRef(null);

  const activeIndexRef = useRef(0);
  const xOffsetRef = useRef(0);
  const quickToRef = useRef(null);
  const isDraggingRef = useRef(false);

  const cardWidth = 310;
  const cardGap = 20;
  const itemStride = cardWidth + cardGap; // 330px

  // Copy code handler
  const handleCopy = () => {
    const activeSkill = SKILLS_DATA[activeIndexRef.current];
    if (activeSkill?.codeSnippet) {
      navigator.clipboard.writeText(activeSkill.codeSnippet);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  useGSAP(() => {
    if (!trackRef.current) return;

    // 1. Initialize GSAP quickTo for horizontal glide (inspired by madewithgsap.com quickTo v(l))
    quickToRef.current = gsap.quickTo(trackRef.current, "x", {
      duration: 0.45,
      ease: "power4",
      onUpdate: () => {
        if (!isDraggingRef.current) return;
        const currentX = gsap.getProperty(trackRef.current, "x");
        const centerOffset = -currentX;
        const closestIdx = Math.round(centerOffset / itemStride);
        const clampedIdx = Math.max(0, Math.min(SKILLS_DATA.length - 1, closestIdx));

        if (clampedIdx !== activeIndexRef.current) {
          activeIndexRef.current = clampedIdx;
          if (hudNumRef.current) hudNumRef.current.textContent = `#${SKILLS_DATA[clampedIdx].num}`;
          if (hudTypeRef.current) hudTypeRef.current.textContent = SKILLS_DATA[clampedIdx].category;
        }
      }
    });

    // 2. Stage Ejection & Magnification function (b(targetIndex) from madewithgsap.com)
    const snapToSkill = (index, animate = true) => {
      const clamped = Math.max(0, Math.min(SKILLS_DATA.length - 1, index));
      activeIndexRef.current = clamped;
      setActiveIndex(clamped);

      const targetX = -clamped * itemStride;
      xOffsetRef.current = targetX;

      if (animate) {
        gsap.to(trackRef.current, {
          x: targetX,
          duration: 0.55,
          ease: "expo.out",
          onComplete: () => {
            if (onScreenPillRef.current) {
              gsap.fromTo(onScreenPillRef.current, 
                { scale: 0.95, opacity: 0.8 }, 
                { scale: 1, opacity: 1, duration: 0.25, ease: "back.out(2)" }
              );
            }
          }
        });
      } else {
        quickToRef.current(targetX);
      }

      // Scale active item up to 1.15 and ease neighbors without ANY overlap
      cardsRef.current.forEach((cardEl, idx) => {
        if (!cardEl) return;
        const isCenter = idx === clamped;
        const dist = Math.abs(idx - clamped);

        gsap.to(cardEl, {
          scale: isCenter ? 1.12 : Math.max(0.86, 1 - dist * 0.08),
          opacity: isCenter ? 1 : Math.max(0.35, 1 - dist * 0.28),
          y: isCenter ? 0 : 6,
          duration: 0.45,
          ease: "expo.out"
        });
      });
    };

    // Initial positioning
    snapToSkill(0, false);

    // 3. GSAP Observer for touch / pointer / wheel scrubbing (Observer.create pattern from madewithgsap.com)
    const observer = Observer.create({
      target: rootRef.current,
      type: "pointer,touch,wheel",
      preventDefault: false,
      onPress: () => {
        isDraggingRef.current = true;
        gsap.killTweensOf(cardsRef.current);

        // Flatten all cards to scale: 1 for friction-free uniform scrub
        gsap.to(cardsRef.current, { scale: 1, opacity: 0.85, y: 0, duration: 0.25, ease: "power2.out" });
        if (hudTitleRef.current) gsap.to(hudTitleRef.current, { opacity: 0.15, duration: 0.2 });
      },
      onChange: (self) => {
        if (!isDraggingRef.current && Math.abs(self.deltaY) < 2) return;
        // Directional handling: horizontal drag or mouse wheel delta
        const delta = self.isDragging ? self.deltaX * 1.15 : -self.deltaY * 0.75;
        const maxScroll = (SKILLS_DATA.length - 1) * itemStride;
        xOffsetRef.current = gsap.utils.clamp(-maxScroll - 60, 60, xOffsetRef.current + delta);
        quickToRef.current(xOffsetRef.current);
      },
      onRelease: () => {
        if (!isDraggingRef.current) return;
        isDraggingRef.current = false;

        // Snap to closest card
        const currentX = gsap.getProperty(trackRef.current, "x");
        const closest = Math.round(-currentX / itemStride);
        snapToSkill(closest, true);

        if (hudTitleRef.current) gsap.to(hudTitleRef.current, { opacity: 0.4, duration: 0.4 });
      }
    });

    return () => {
      observer.kill();
    };
  }, { scope: rootRef });

  const activeSkill = SKILLS_DATA[activeIndex];
  const IconComp = activeSkill.icon;

  return (
    <div ref={rootRef} className="relative w-full py-12 select-none overflow-visible">
      
      {/* Editorial Watermark (Inspired by madewithgsap.com title placement) */}
      <div 
        ref={hudTitleRef}
        className="absolute top-2 left-1/2 -translate-x-1/2 text-center text-[12vw] font-black uppercase tracking-tighter text-[#C5B2A4]/[0.035] pointer-events-none whitespace-nowrap"
      >
        SYSTEMS ARCHITECTURE
      </div>

      {/* Floating Top Telemetry Bar */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 mb-8 flex flex-wrap items-center justify-between gap-4 relative z-10">
        <div className="flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-[#C5B2A4] animate-pulse" />
          <span ref={hudNumRef} className="font-mono text-sm font-bold text-[#C5B2A4]">
            #{activeSkill.num}
          </span>
          <span className="text-[#837062] font-mono text-xs">/ {String(SKILLS_DATA.length).padStart(2, "0")}</span>
          <span className="text-[#837062] text-xs font-mono">//</span>
          <span ref={hudTypeRef} className="font-mono text-xs text-[#A89A90] tracking-wider uppercase">
            {activeSkill.category}
          </span>
        </div>

        {/* Global On-Screen Telemetry Pill */}
        <div 
          ref={onScreenPillRef}
          className="flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#18191C]/90 border border-[#837062]/30 backdrop-blur-md text-xs font-mono text-[#F5EFEB] shadow-md"
        >
          <span className="text-[#837062]">ACTIVE FOCUS:</span>
          <span className="text-[#C5B2A4] font-bold">{activeSkill.name}</span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#C5B2A4] shadow-[0_0_8px_#C5B2A4]" />
        </div>
      </div>

      {/* Full-Bleed Glide Stage: Open, Unboxed, Zero Box Enclosures */}
      <div className="relative w-full h-[180px] flex items-center cursor-grab active:cursor-grabbing overflow-visible">
        
        {/* Soft Left / Right Ambient Edge Voids */}
        <div className="pointer-events-none absolute left-0 inset-y-0 w-24 sm:w-36 bg-gradient-to-r from-[#000000] to-transparent z-20" />
        <div className="pointer-events-none absolute right-0 inset-y-0 w-24 sm:w-36 bg-gradient-to-l from-[#000000] to-transparent z-20" />

        {/* The Track (Centered on Screen) */}
        <div 
          ref={trackRef}
          className="flex items-center gap-5 pl-[calc(50vw-155px)] will-change-transform"
        >
          {SKILLS_DATA.map((skill, idx) => {
            const SkillIcon = skill.icon;
            const isCurrent = idx === activeIndex;

            return (
              <div
                key={skill.id}
                ref={(el) => (cardsRef.current[idx] = el)}
                onClick={() => {
                  activeIndexRef.current = idx;
                  setActiveIndex(idx);
                  xOffsetRef.current = -idx * itemStride;
                  quickToRef.current(xOffsetRef.current);
                }}
                className={`w-[310px] h-[125px] rounded-xl p-4 shrink-0 flex flex-col justify-between border transition-colors duration-300 relative overflow-hidden backdrop-blur-xl ${
                  isCurrent
                    ? "bg-[#1C1D21] border-[#C5B2A4] shadow-[0_12px_36px_rgba(62,26,28,0.55),inset_0_1px_1px_rgba(197,178,164,0.4)]"
                    : "bg-[#141517]/85 border-[#837062]/20 hover:border-[#837062]/50"
                }`}
              >
                {/* Specular Edge Glow */}
                {isCurrent && (
                  <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-[#C5B2A4] to-transparent" />
                )}

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg border ${
                      isCurrent ? "bg-[#3E1A1C] border-[#C5B2A4] text-[#C5B2A4]" : "bg-[#101113] border-[#837062]/30 text-[#9A8B80]"
                    }`}>
                      <SkillIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className={`font-bold text-sm ${isCurrent ? "text-[#F5EFEB]" : "text-[#A89A90]"}`}>
                        {skill.name}
                      </h4>
                      <span className="text-[10px] font-mono text-[#837062]">{skill.role}</span>
                    </div>
                  </div>
                  <span className="font-mono text-xs text-[#837062]">#{skill.num}</span>
                </div>

                <p className="text-xs text-[#9A8B80] truncate mt-2 leading-normal">
                  {skill.shortDesc}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Drag & Wheel Gesture Telemetry */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 mt-4 flex items-center justify-between text-[11px] font-mono text-[#837062]">
        <div className="flex items-center gap-2">
          <ArrowLeft className="w-3.5 h-3.5 text-[#C5B2A4]" />
          <span>DRAG OR SCROLL TO EXPLORE ARCHITECTURE</span>
          <ArrowRight className="w-3.5 h-3.5 text-[#C5B2A4]" />
        </div>
        <div className="hidden sm:flex items-center gap-2">
          <span>MOTION ENGINE:</span>
          <span className="text-[#C5B2A4]">GSAP.OBSERVER + QUICKTO(POWER4)</span>
        </div>
      </div>

      {/* Synchronized Architecture & Code Studio (Completely Open, Editorial) */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 mt-12">
        <div className="border border-[#837062]/25 bg-[#121316]/75 rounded-2xl p-6 sm:p-8 backdrop-blur-xl relative">
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-[#837062]/20">
            <div>
              <span className="text-xs font-mono text-[#C5B2A4] tracking-wider uppercase font-semibold">
                {activeSkill.category}
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-[#F5EFEB] mt-1">
                {activeSkill.name} // Production Architecture
              </h3>
            </div>

            {/* Studio Navigation Tabs */}
            <div className="flex items-center gap-1 p-1 bg-[#18191C] rounded-lg border border-[#837062]/30">
              <button
                onClick={() => setActiveTab("architecture")}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-md text-xs font-mono transition-all cursor-pointer ${
                  activeTab === "architecture" ? "bg-[#3E1A1C] text-[#F5EFEB] border border-[#837062]/50 shadow-sm" : "text-[#837062] hover:text-[#F5EFEB]"
                }`}
              >
                <Cpu className="w-3.5 h-3.5" />
                <span>OVERVIEW</span>
              </button>
              <button
                onClick={() => setActiveTab("code")}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-md text-xs font-mono transition-all cursor-pointer ${
                  activeTab === "code" ? "bg-[#3E1A1C] text-[#F5EFEB] border border-[#837062]/50 shadow-sm" : "text-[#837062] hover:text-[#F5EFEB]"
                }`}
              >
                <Code2 className="w-3.5 h-3.5" />
                <span>CODE</span>
              </button>
              <button
                onClick={() => setActiveTab("telemetry")}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-md text-xs font-mono transition-all cursor-pointer ${
                  activeTab === "telemetry" ? "bg-[#3E1A1C] text-[#F5EFEB] border border-[#837062]/50 shadow-sm" : "text-[#837062] hover:text-[#F5EFEB]"
                }`}
              >
                <Activity className="w-3.5 h-3.5" />
                <span>METRICS</span>
              </button>
            </div>
          </div>

          {/* Tab Content Panels */}
          <div className="pt-6">
            {activeTab === "architecture" && (
              <div className="space-y-4 animate-in fade-in duration-200">
                <p className="text-sm sm:text-base text-[#D4C3B7] leading-relaxed">
                  {activeSkill.description}
                </p>

                {/* Production Integration */}
                <div className="p-4 rounded-lg bg-[#0E0F12] border border-[#837062]/25 space-y-1">
                  <span className="text-[10px] font-mono text-[#C5B2A4] uppercase tracking-wider block font-semibold">
                    REAL-WORLD INTEGRATION:
                  </span>
                  <p className="text-xs font-mono text-[#F5EFEB]">
                    {activeSkill.projectUsage}
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                  {activeSkill.metrics.map((m, i) => (
                    <div key={i} className="p-3.5 rounded-lg bg-[#18191C]/70 border border-[#837062]/20">
                      <div className="text-[10px] font-mono text-[#837062]">{m.label}</div>
                      <div className="text-sm font-mono font-bold text-[#C5B2A4] mt-1">{m.value}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "code" && (
              <div className="relative rounded-lg bg-[#0A0B0D] border border-[#837062]/20 p-4 font-mono text-xs overflow-x-auto text-[#D4C3B7] animate-in fade-in duration-200">
                <button
                  onClick={handleCopy}
                  className="absolute top-3 right-3 p-1.5 rounded bg-[#18191C] border border-[#837062]/40 text-[#C5B2A4] hover:text-white transition-colors cursor-pointer"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
                <pre className="pr-10 leading-relaxed font-mono selection:bg-[#3E1A1C]">
                  <code>{activeSkill.codeSnippet}</code>
                </pre>
              </div>
            )}

            {activeTab === "telemetry" && (
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 animate-in fade-in duration-200">
                {activeSkill.metrics.map((m, i) => (
                  <div key={i} className="p-4 rounded-xl bg-[#18191C]/80 border border-[#837062]/30">
                    <span className="text-xs font-mono text-[#837062] uppercase tracking-wider">{m.label}</span>
                    <div className="text-2xl font-bold text-[#F5EFEB] font-mono mt-2">{m.value}</div>
                    <div className="flex items-center gap-1.5 mt-3 text-[11px] font-mono text-[#C5B2A4]">
                      <Sparkles className="w-3 h-3" />
                      <span>Production Verified</span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

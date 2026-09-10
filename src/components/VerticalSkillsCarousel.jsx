import { useState, useEffect, useRef, useCallback } from "react";
import { 
  ChevronUp, 
  ChevronDown, 
  MoveVertical, 
  Cpu, 
  CheckCircle2, 
  Repeat,
  Code2,
  Terminal,
  Activity,
  Copy,
  Check,
  Zap
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
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const SKILL_CATEGORIES = [
  { id: "all", label: "All Skills" },
  { id: "frontend", label: "Frontend", targetId: "react" },
  { id: "backend", label: "Backend & AI", targetId: "python" },
  { id: "systems", label: "Systems & Cloud", targetId: "go" },
];

const SKILLS = [
  {
    id: "react",
    name: "React 19",
    category: "FRONTEND // COMPONENT ARCHITECTURE",
    role: "Production Core",
    tag: "Core Library",
    shortDesc: "Concurrent rendering, custom hooks, and Server Actions.",
    description:
      "Specialized in modern React 19 architecture: leveraging Server Actions, concurrent transitions, clean component composition, and state normalization to minimize client bundle overhead.",
    projectUsage: "La Perla BarberStore // Real-time reservation booking flow & admin queues",
    highlights: [
      "Optimized reconciliation tree preventing unnecessary sub-tree re-renders",
      "Custom hook pipelines for isolated data fetching and form state",
      "Seamless integration with Tailwind v4 design tokens and accessible ARIA primitives"
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
    metrics: [
      { label: "Rendering Latency", value: "< 16ms" },
      { label: "State Overhead", value: "0ms (Zero Jitter)" },
      { label: "Core Web Vitals", value: "99+ Performance" }
    ],
    icon: SiReact,
  },
  {
    id: "typescript",
    name: "TypeScript",
    category: "LANGUAGES // TYPE SYSTEMS",
    role: "Type Safety",
    tag: "Strict Mode",
    shortDesc: "Defensive generic interfaces and compile-time verification.",
    description:
      "Writing strictly typed, self-documenting codebases with generic constraints, discriminated unions, and API schema inference that catches defects at compile time.",
    projectUsage: "La Perla BarberStore & RESTful Microservices",
    highlights: [
      "Strict null checks, discriminating union states, and exhaustive switch matching",
      "End-to-end type sharing between client payloads and backend validation schemas",
      "Zero-runtime cost architectural documentation via comprehensive interfaces"
    ],
    codeSnippet: `// Discriminated Union API Envelope
export type ApiResponse<T> = 
  | { status: 'success'; data: T; timestamp: number }
  | { status: 'error'; message: string; code: 400 | 404 | 500 };

export interface BarberAppointment {
  readonly id: string;
  readonly clientName: string;
  readonly slotTimestamp: Date;
  status: 'PENDING' | 'CONFIRMED' | 'CANCELLED';
}`,
    metrics: [
      { label: "Type Safety", value: "100% Strict" },
      { label: "Compile Overhead", value: "Zero Runtime" },
      { label: "Schema Drift", value: "0% Tolerated" }
    ],
    icon: SiTypescript,
  },
  {
    id: "nodejs",
    name: "Node.js & Express",
    category: "BACKEND // RUNTIME & APIS",
    role: "REST Architectures",
    tag: "Event Loop",
    shortDesc: "Scalable event-driven services and middleware pipelines.",
    description:
      "Constructing resilient RESTful API backends utilizing Node's asynchronous event loop, custom middleware pipelines, structured error wrappers, and JWT token authentication.",
    projectUsage: "La Perla BarberStore & Client Automation Endpoints",
    highlights: [
      "Modular routing architecture with centralized error handling envelopes",
      "Rate limiting, CORS security configurations, and input sanitization",
      "High-throughput asynchronous I/O handling simultaneous client requests"
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
    metrics: [
      { label: "Concurrent IO", value: "10k+ Req/sec" },
      { label: "P99 Latency", value: "< 45ms" },
      { label: "Availability", value: "99.9% Uptime" }
    ],
    icon: SiNodedotjs,
  },
  {
    id: "python",
    name: "Python (Data & Vision)",
    category: "BACKEND // AUTOMATION & DATA",
    role: "Automation Core",
    tag: "Scripting & OCR",
    shortDesc: "Document intelligence pipelines and data ingestion scripts.",
    description:
      "Developing automated document processing pipelines and data transformation utilities. Expertise in converting unstructured PDFs, scans, and invoices into validated structured JSON.",
    projectUsage: "H2O Beborn // Enterprise Document OCR Microservice",
    highlights: [
      "Image pre-processing routines for contrast normalization and contour extraction",
      "Automated extraction pipelines replacing hours of manual data transcription",
      "Modular architecture decoupled for standalone microservice execution"
    ],
    codeSnippet: `# Computer Vision Preprocessing for Dense Document Parsing
import cv2, numpy as np

def prepare_document_scan(image_path: str) -> np.ndarray:
    raw = cv2.imread(image_path, cv2.IMREAD_GRAYSCALE)
    # Adaptive thresholding and contrast equalization
    denoised = cv2.fastNlMeansDenoising(raw, h=10)
    equalized = cv2.createCLAHE(clipLimit=2.0).apply(denoised)
    return equalized`,
    metrics: [
      { label: "Batch Velocity", value: "< 1.2s / Page" },
      { label: "Human Labor Saved", value: "85% Reduction" },
      { label: "Accuracy", value: "98.7% Structured" }
    ],
    icon: SiPython,
  },
  {
    id: "paddleocr",
    name: "PaddleOCR (Deep Vision)",
    category: "VISION // MACHINE LEARNING",
    role: "Document AI",
    tag: "Inference Engine",
    shortDesc: "Text detection and optical recognition from scanned forms.",
    description:
      "Implementing deep-learning OCR models to detect and recognize dense text, tabular data, and alphanumeric codes from degraded physical scans with high accuracy.",
    projectUsage: "H2O Beborn // Automated Invoice & Form Transcription Service",
    highlights: [
      "Directional angle classification and bounding-box segmentation",
      "Regex-driven key-value schema extraction from raw OCR bounding boxes",
      "Sub-second document parsing integrated directly with database ingestion"
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
    metrics: [
      { label: "OCR Accuracy", value: "98.9% Confidence" },
      { label: "Inference Time", value: "140ms / Scan" },
      { label: "Table Resolution", value: "Pixel-Accurate" }
    ],
    icon: Cpu,
  },
  {
    id: "flask",
    name: "Flask Microservices",
    category: "BACKEND // LIGHTWEIGHT SERVICES",
    role: "Microservices",
    tag: "Python Web",
    shortDesc: "Decoupled HTTP microservices for asynchronous model serving.",
    description:
      "Building lightweight, container-ready Python HTTP endpoints to serve OCR models and background automation routines without monolithic framework bloat.",
    projectUsage: "H2O Beborn // Asynchronous OCR Processing Microservice",
    highlights: [
      "Stateless HTTP endpoint design optimized for container orchestration",
      "Decoupled asynchronous worker queue handling heavy document batches",
      "Clean JSON payload validation and structured logging output"
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
    metrics: [
      { label: "Cold Start", value: "< 200ms" },
      { label: "Memory Overhead", value: "~120MB Base" },
      { label: "Payload Schema", value: "JSON Strict" }
    ],
    icon: SiFlask,
  },
  {
    id: "go",
    name: "Go (Golang)",
    category: "SYSTEMS // CONCURRENCY",
    role: "High-Throughput",
    tag: "Compiled Binary",
    shortDesc: "Goroutines, channels, and low-latency microservices.",
    description:
      "Active exploration and development in Go for high-throughput network services, utilizing goroutines, thread-safe channels, and tiny standalone binary deployments.",
    projectUsage: "Algorithmic pipelines & concurrent network benchmarking tools",
    highlights: [
      "Concurrent worker pool patterns using channels and WaitGroups",
      "Extremely fast startup time and low memory footprint in micro-containers",
      "Strict static typing with direct standard library HTTP primitives"
    ],
    codeSnippet: `// High-Performance Concurrent Worker Pool
func WorkerPool(jobs <-chan Job, results chan<- Result, wg *sync.WaitGroup) {
    defer wg.Done()
    for job := range jobs {
        // Asynchronous non-blocking network operation
        res := processTask(job)
        results <- res
    }
}`,
    metrics: [
      { label: "Binary Footprint", value: "< 15MB Single Exec" },
      { label: "Concurrency", value: "100k+ Goroutines" },
      { label: "GC Latency", value: "< 1ms Sub-pause" }
    ],
    icon: SiGo,
  },
  {
    id: "docker",
    name: "Docker Containerization",
    category: "DEVOPS // INFRASTRUCTURE",
    role: "Containers",
    tag: "Reproducibility",
    shortDesc: "Multi-stage builds, isolated runtimes, and local parity.",
    description:
      "Architecting multi-stage Dockerfiles and container configurations to ensure complete environmental parity between local development and production deployments.",
    projectUsage: "H2O Beborn OCR Engine & Full-Stack Application Deployments",
    highlights: [
      "Multi-stage Docker builds minimizing production image footprint",
      "Environment isolation preventing dependency conflicts for Python OCR libraries",
      "Predictable deployment pipelines reproducible on any Linux server"
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
    metrics: [
      { label: "Image Reduction", value: "65% Size Cut" },
      { label: "Host Parity", value: "100% Deterministic" },
      { label: "Orchestration", value: "Docker Compose" }
    ],
    icon: SiDocker,
  },
  {
    id: "laravel",
    name: "Laravel (PHP)",
    category: "BACKEND // FULL-STACK MVC",
    role: "MVC Systems",
    tag: "PHP Enterprise",
    shortDesc: "Eloquent ORM, robust routing, and secure database migrations.",
    description:
      "Leveraging Laravel's mature MVC patterns for rapid full-stack application development, database migrations, complex Eloquent relational modeling, and built-in CSRF/session security.",
    projectUsage: "Cash-Tracker // Financial Accounting Ledger & Cash Flow System",
    highlights: [
      "Complex Eloquent relationships with eager loading to prevent N+1 query overhead",
      "Database migrations and seeders establishing deterministic schema versions",
      "Secure authentication flows, password hashing, and session protection"
    ],
    codeSnippet: `// Transactional Double-Entry Ledger Entry
public function recordTransaction(Request $request): JsonResponse {
    return DB::transaction(function () use ($request) {
        $entry = LedgerEntry::create($request->validated());
        $entry->account->decrement('balance', $entry->amount);
        return response()->json(['status' => 'reconciled', 'id' => $entry->id]);
    });
}`,
    metrics: [
      { label: "ACID Transactions", value: "100% Guaranteed" },
      { label: "ORM Efficiency", value: "Sub-40ms P95" },
      { label: "Security", value: "CSRF & Hashing Guarded" }
    ],
    icon: SiLaravel,
  },
  {
    id: "databases",
    name: "PostgreSQL & MySQL",
    category: "DATA // RELATIONAL ARCHITECTURE",
    role: "Relational Schemas",
    tag: "ACID Storage",
    shortDesc: "Normalized schemas, indexed queries, and relational integrity.",
    description:
      "Designing normalized third-normal-form relational databases with indexed query paths, foreign key cascades, and atomic transactions to prevent data corruption.",
    projectUsage: "La Perla BarberStore, Cash-Tracker & UpTask Platforms",
    highlights: [
      "Index strategy on frequently queried columns ensuring sub-50ms query latency",
      "Foreign key constraints and cascade rules maintaining referential integrity",
      "Parameterized prepared statements preventing SQL injection attacks"
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
    metrics: [
      { label: "Index Query Speed", value: "< 25ms P99" },
      { label: "Integrity", value: "Strict Foreign Keys" },
      { label: "Normalization", value: "3NF Compliant" }
    ],
    icon: SiPostgresql,
  },
  {
    id: "tailwind",
    name: "Tailwind CSS",
    category: "FRONTEND // MODERN STYLING",
    role: "Design Tokens",
    tag: "Utility-First",
    shortDesc: "Fluid responsive layouts, container queries, and design systems.",
    description:
      "Authoring maintainable, utility-driven UI architectures using Tailwind v4 tokens, responsive breakpoints, container queries, and fluid typography without CSS runtime overhead.",
    projectUsage: "Personal Portfolio & Client Web Applications",
    highlights: [
      "Consistent color token palettes and responsive spacing scales",
      "Zero runtime CSS-in-JS overhead, compiled to atomic static stylesheets",
      "Custom animation utilities and accessible focus-visible states"
    ],
    codeSnippet: `/* Fluid Typography & Container Tokens */
@theme {
  --font-serif: 'Instrument Serif', Georgia, serif;
  --color-wine: #3E1A1C;
  --color-champagne: #C5B2A4;
  --color-onyx: #121316;
}`,
    metrics: [
      { label: "Bundle Size", value: "< 14kB Gzipped" },
      { label: "Runtime Overhead", value: "0ms (Static CSS)" },
      { label: "Responsive", value: "Fluid Breakpoints" }
    ],
    icon: SiTailwindcss,
  },
  {
    id: "git",
    name: "Git & GitHub",
    category: "DEVOPS // VERSION CONTROL",
    role: "Workflow Discipline",
    tag: "VCS & CI",
    shortDesc: "Semantic commits, branching models, and review discipline.",
    description:
      "Employing disciplined version control practices: atomic commits, descriptive pull request reviews, feature branching, and conflict resolution across complex codebases.",
    projectUsage: "40+ Repositories & Collaborative Client Codebases",
    highlights: [
      "Semantic commit messages documenting architectural intent",
      "Interactive rebasing to keep commit histories clean and bisectable",
      "Continuous integration verification and remote deployment tracking"
    ],
    codeSnippet: `# Disciplined Git Workflow & Semantic Commits
git checkout -b feature/ocr-contour-detection
git commit -m "feat(vision): integrate adaptive thresholding filter"
git rebase -i main # Clean, linear history before PR merge`,
    metrics: [
      { label: "Repositories", value: "40+ Maintained" },
      { label: "Commit Hygiene", value: "Semantic & Atomic" },
      { label: "Branch Strategy", value: "Feature Trunk Base" }
    ],
    icon: SiGit,
  },
];

export const VerticalSkillsCarousel = () => {
  const rootRef = useRef(null);
  const containerRef = useRef(null);
  const [containerHeight, setContainerHeight] = useState(520);
  const [isDragging, setIsDragging] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [scrollOffsetY, setScrollOffsetY] = useState(0);
  const [activeTab, setActiveTab] = useState("architecture"); // 'architecture' | 'code' | 'telemetry'
  const [copied, setCopied] = useState(false);

  const isDraggingRef = useRef(false);
  const startYRef = useRef(0);
  const startScrollOffsetYRef = useRef(0);
  const targetOffsetYRef = useRef(0);
  const currentOffsetYRef = useRef(0);
  const lastClientYRef = useRef(0);
  const lastTimeRef = useRef(0);
  const velocityYRef = useRef(0);
  const hasDraggedRef = useRef(false);
  const rafIdRef = useRef(null);
  const wheelDebounceRef = useRef(null);

  // Layout metrics for vertical cards - increased spacing to prevent ANY line collisions
  const cardHeight = 84;
  const cardGap = 20;
  const itemSpacing = cardHeight + cardGap; // 104px
  const totalTrackHeight = SKILLS.length * itemSpacing;
  const halfTrack = totalTrackHeight / 2;

  const centerY = containerHeight / 2;
  const initialCenterOffsetY = centerY - cardHeight / 2;

  // Active index calculation (sliding downward)
  const activeSteps = Math.round(-scrollOffsetY / itemSpacing);
  const activeIndex = ((activeSteps % SKILLS.length) + SKILLS.length) % SKILLS.length;
  const activeSkill = SKILLS[activeIndex];

  // Resize listener
  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        setContainerHeight(containerRef.current.clientHeight || 520);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Physics animation loop with silky smooth non-aggressive damping
  const startPhysicsLoop = useCallback(() => {
    if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current);

    const step = () => {
      const diff = targetOffsetYRef.current - currentOffsetYRef.current;
      if (Math.abs(diff) > 0.08 || isDraggingRef.current) {
        currentOffsetYRef.current += diff * 0.10;
        setScrollOffsetY(currentOffsetYRef.current);
        rafIdRef.current = requestAnimationFrame(step);
      } else {
        currentOffsetYRef.current = targetOffsetYRef.current;

        // Circular wrapping normalization
        const normRel = ((targetOffsetYRef.current % totalTrackHeight) + totalTrackHeight) % totalTrackHeight;
        const normalizedTarget = normRel > halfTrack ? normRel - totalTrackHeight : normRel;
        const shift = normalizedTarget - targetOffsetYRef.current;

        targetOffsetYRef.current = normalizedTarget;
        currentOffsetYRef.current += shift;
        setScrollOffsetY(normalizedTarget);
        rafIdRef.current = null;
      }
    };

    rafIdRef.current = requestAnimationFrame(step);
  }, [halfTrack, totalTrackHeight]);

  useEffect(() => {
    return () => {
      if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current);
      if (wheelDebounceRef.current) clearTimeout(wheelDebounceRef.current);
    };
  }, []);

  // GSAP Entrance
  useGSAP(
    () => {
      const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (prefersReducedMotion || !rootRef.current) return;

      gsap.fromTo(
        rootRef.current,
        { opacity: 0, y: 35 },
        {
          opacity: 1,
          y: 0,
          duration: 0.85,
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

  // Smooth pointer drag
  const handlePointerDown = (e) => {
    isDraggingRef.current = true;
    setIsDragging(true);
    hasDraggedRef.current = false;
    startYRef.current = e.clientY;
    startScrollOffsetYRef.current = targetOffsetYRef.current;
    lastClientYRef.current = e.clientY;
    lastTimeRef.current = performance.now();
    velocityYRef.current = 0;

    try {
      e.currentTarget.setPointerCapture(e.pointerId);
    } catch {
      // fallback
    }

    startPhysicsLoop();
  };

  const handlePointerMove = (e) => {
    if (!isDraggingRef.current) return;
    const deltaY = e.clientY - startYRef.current;
    if (Math.abs(deltaY) > 5) {
      hasDraggedRef.current = true;
    }

    // Weighted natural drag factor
    targetOffsetYRef.current = startScrollOffsetYRef.current + deltaY * 0.88;

    const now = performance.now();
    const dt = now - lastTimeRef.current;
    if (dt > 10) {
      velocityYRef.current = (e.clientY - lastClientYRef.current) / dt;
      lastClientYRef.current = e.clientY;
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

    // Moderate momentum impulse without jerky overshoot
    const momentum = velocityYRef.current * 110;
    const projectedOffset = targetOffsetYRef.current + Math.max(-320, Math.min(320, momentum));

    // Snap to nearest item
    const steps = Math.round(-projectedOffset / itemSpacing);
    targetOffsetYRef.current = -steps * itemSpacing;

    startPhysicsLoop();
  };

  // Silky smooth mouse-wheel browsing (not aggressive, debounced snap)
  const handleWheel = (e) => {
    e.preventDefault();
    // Gentle incremental delta
    const delta = e.deltaY;
    targetOffsetYRef.current -= delta * 0.45;
    startPhysicsLoop();

    // Debounced snap to closest card when scrolling pauses
    if (wheelDebounceRef.current) clearTimeout(wheelDebounceRef.current);
    wheelDebounceRef.current = setTimeout(() => {
      const currentSteps = Math.round(-targetOffsetYRef.current / itemSpacing);
      targetOffsetYRef.current = -currentSteps * itemSpacing;
      startPhysicsLoop();
    }, 160);
  };

  // Button navigation (Slide Downward = next item)
  const slideDown = () => {
    const currentSteps = Math.round(-targetOffsetYRef.current / itemSpacing);
    targetOffsetYRef.current = -(currentSteps + 1) * itemSpacing;
    startPhysicsLoop();
  };

  const slideUp = () => {
    const currentSteps = Math.round(-targetOffsetYRef.current / itemSpacing);
    targetOffsetYRef.current = -(currentSteps - 1) * itemSpacing;
    startPhysicsLoop();
  };

  // Jump to specific skill
  const jumpToSkill = (skillId) => {
    const targetIdx = SKILLS.findIndex((s) => s.id === skillId);
    if (targetIdx === -1) return;
    const currentSteps = Math.round(-targetOffsetYRef.current / itemSpacing);
    const currNormalized = ((currentSteps % SKILLS.length) + SKILLS.length) % SKILLS.length;
    let deltaSteps = targetIdx - currNormalized;
    if (deltaSteps > SKILLS.length / 2) deltaSteps -= SKILLS.length;
    if (deltaSteps < -SKILLS.length / 2) deltaSteps += SKILLS.length;

    targetOffsetYRef.current = -(currentSteps + deltaSteps) * itemSpacing;
    startPhysicsLoop();
  };

  // Click card to center
  const handleCardClick = (wrappedDist) => {
    if (hasDraggedRef.current) return;
    targetOffsetYRef.current -= wrappedDist;
    startPhysicsLoop();
  };

  // Copy code snippet helper
  const handleCopyCode = () => {
    if (activeSkill.codeSnippet) {
      navigator.clipboard.writeText(activeSkill.codeSnippet);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  // Auto-advance sliding downward every 4.8s
  useEffect(() => {
    if (isHovered || isDragging) return;

    const interval = setInterval(() => {
      if (document.hidden) return;
      const currentSteps = Math.round(-targetOffsetYRef.current / itemSpacing);
      targetOffsetYRef.current = -(currentSteps + 1) * itemSpacing;
      startPhysicsLoop();
    }, 4800);

    return () => clearInterval(interval);
  }, [isHovered, isDragging, itemSpacing, startPhysicsLoop]);

  return (
    <div 
      ref={rootRef}
      className="w-full relative select-none"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Top Header Row with Category Shortcuts */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-8 pb-5 border-b border-[#837062]/20">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#3E1A1C]/40 border border-[#837062]/30 text-[#C5B2A4] text-xs font-mono tracking-widest uppercase mb-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C5B2A4] animate-pulse" />
            <span>02 // CURVED TECHNICAL LAB</span>
          </div>
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#F5EFEB] tracking-tight">
            Interactive Stack Navigator & Architecture Studio
          </h3>
        </div>

        {/* Category Jump Shortcuts & Controls */}
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex items-center gap-1 p-1 bg-[#141517]/90 rounded-md border border-[#837062]/25">
            {SKILL_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => cat.targetId && jumpToSkill(cat.targetId)}
                className="px-2.5 py-1 rounded text-[11px] font-mono text-[#A89A90] hover:text-[#F5EFEB] hover:bg-white/[0.04] transition-colors cursor-pointer"
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-[#141517]/90 border border-[#837062]/30 text-xs font-mono text-[#C5B2A4] shadow-inner">
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
                DOWN
              </span>
            </div>

            <div className="flex items-center gap-1">
              <button
                onClick={slideUp}
                aria-label="Slide Up"
                className="w-8 h-8 rounded-md bg-[#141517] border border-[#837062]/30 text-[#C5B2A4] hover:text-[#F5EFEB] hover:border-[#C5B2A4] hover:bg-[#3E1A1C]/50 transition-all flex items-center justify-center cursor-pointer shadow-md"
              >
                <ChevronUp className="w-4 h-4" />
              </button>
              <button
                onClick={slideDown}
                aria-label="Slide Down"
                className="w-8 h-8 rounded-md bg-[#141517] border border-[#837062]/30 text-[#C5B2A4] hover:text-[#F5EFEB] hover:border-[#C5B2A4] hover:bg-[#3E1A1C]/50 transition-all flex items-center justify-center cursor-pointer shadow-md"
              >
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main 2-Column Split: Vertical Curved Carousel on LEFT + Modern Interactive Studio on RIGHT */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch overflow-visible">
        
        {/* ================= LEFT COLUMN: VERTICAL CURVED CAROUSEL ================= */}
        <div className="lg:col-span-5 relative flex flex-col justify-between -ml-4 sm:-ml-6 lg:-ml-10 xl:-ml-16 overflow-visible">
          <div className="text-[11px] font-mono text-[#837062] uppercase tracking-wider mb-3 flex items-center justify-between pl-4 sm:pl-6 lg:pl-10 xl:pl-16 pr-2">
            <span>CURVED STACK // DOWNWARD SLIDE</span>
            <span className="text-[#C5B2A4] flex items-center gap-1">
              <MoveVertical className="w-3 h-3" />
              <span>DRAG OR WHEEL</span>
            </span>
          </div>

          {/* Vertical Stage: Completely unboxed, smooth arc */}
          <div 
            className="relative w-full overflow-visible"
            onWheel={handleWheel}
          >
            {/* Top & Bottom gradient mask so items gracefully fade into the background */}
            <div className="pointer-events-none absolute inset-x-0 -top-2 h-20 bg-gradient-to-b from-[#000000]/95 via-[#000000]/50 to-transparent z-30" />
            <div className="pointer-events-none absolute inset-x-0 -bottom-2 h-20 bg-gradient-to-t from-[#0e1014]/95 via-[#0e1014]/50 to-transparent z-30" />

            <div
              ref={containerRef}
              onPointerDown={handlePointerDown}
              onPointerMove={handlePointerMove}
              onPointerUp={handlePointerUp}
              onPointerCancel={handlePointerUp}
              style={{
                perspective: "1200px",
                perspectiveOrigin: "20% 50%",
                transformStyle: "preserve-3d",
                height: "500px",
              }}
              className={`relative w-full overflow-visible touch-pan-x select-none ${
                isDragging ? "cursor-grabbing" : "cursor-grab"
              }`}
            >
              {/* Subtle ambient light tracking the curve apex */}
              <div className="absolute top-1/2 left-10 -translate-y-1/2 w-48 h-40 bg-[#3E1A1C]/25 rounded-full blur-3xl pointer-events-none" />

              {SKILLS.map((skill, index) => {
                const IconComp = skill.icon;
                
                // Vertical position calculation (downward flow)
                const baseY = index * itemSpacing;
                const diff = baseY + scrollOffsetY;

                // Modular wrapping into [-halfTrack, halfTrack) for infinite vertical loop
                let wrappedDist = ((diff % totalTrackHeight) + totalTrackHeight) % totalTrackHeight;
                if (wrappedDist > halfTrack) {
                  wrappedDist -= totalTrackHeight;
                }

                const distFromCenter = wrappedDist;
                const yPos = initialCenterOffsetY + wrappedDist;
                const norm = distFromCenter / Math.max(containerHeight * 0.45, 200);
                const clampedNorm = Math.max(-1.3, Math.min(1.3, norm));

                // 3D ARC CURVE:
                // Center active card projects outward (+40px) from the screen edge.
                // Upper and lower cards curve smoothly back into the left bezel (-6px).
                const curveX = (1 - Math.pow(Math.abs(clampedNorm), 1.8)) * 40 - 6;

                // Restrained rotations so cards never collide or intersect
                const rotZ = Math.max(-5, Math.min(5, -clampedNorm * 4));
                const rotY = Math.max(-8, Math.min(8, clampedNorm * 6));
                const rotX = Math.max(-12, Math.min(12, clampedNorm * 9.5));

                // Scale and Depth
                const scale = Math.max(0.88, 1.0 - Math.abs(clampedNorm) * 0.08);
                const opacity = Math.max(0, 1 - Math.abs(clampedNorm) * 0.45);
                const zIndex = Math.round(100 - Math.abs(distFromCenter) * 0.1);

                // Active / center detection
                const isCentered = Math.abs(distFromCenter) < itemSpacing * 0.45;
                const isHidden = Math.abs(distFromCenter) > containerHeight * 0.8;

                return (
                  <div
                    key={skill.id}
                    onClick={() => handleCardClick(wrappedDist)}
                    style={{
                      position: "absolute",
                      left: "0px",
                      width: "calc(100% - 12px)",
                      maxWidth: "380px",
                      top: 0,
                      height: `${cardHeight}px`,
                      transform: `translate3d(${curveX}px, ${yPos}px, 0) rotateX(${rotX}deg) rotateY(${rotY}deg) rotateZ(${rotZ}deg) scale(${scale})`,
                      transformOrigin: "left center",
                      opacity,
                      zIndex,
                      transformStyle: "preserve-3d",
                      willChange: "transform, opacity",
                      visibility: isHidden ? "hidden" : "visible",
                    }}
                    className="cursor-pointer transition-shadow duration-300"
                  >
                    {/* Individual crisp card - zero overlapping text lines */}
                    <div
                      className={`h-full rounded-lg px-4 py-3 bg-[#18191C]/90 backdrop-blur-xl border transition-all duration-300 flex items-center justify-between gap-3 relative overflow-hidden ${
                        isCentered
                          ? "border-[#C5B2A4] bg-[#1C1D21] shadow-[inset_0_1px_2px_rgba(197,178,164,0.35),0_10px_28px_rgba(62,26,28,0.45)]"
                          : "border-[#837062]/25 hover:border-[#C5B2A4]/40 bg-[#141517]/80"
                      }`}
                    >
                      {/* Top Specular Sheen */}
                      <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-[#C5B2A4]/30 to-transparent pointer-events-none" />

                      {/* Left: Icon in crisp rounded container */}
                      <div className="flex items-center gap-3.5 min-w-0 flex-1">
                        <div
                          className={`w-10 h-10 rounded-md border flex items-center justify-center shrink-0 transition-all ${
                            isCentered
                              ? "bg-[#3E1A1C] border-[#C5B2A4] text-[#C5B2A4] scale-105 shadow-sm"
                              : "bg-[#101113] border-[#837062]/30 text-[#9A8B80]"
                          }`}
                        >
                          <IconComp className="w-5 h-5" />
                        </div>

                        {/* Middle: Details with strict truncation to eliminate line collision */}
                        <div className="min-w-0 flex-1">
                          <div className="flex items-center justify-between gap-2">
                            <h4
                              className={`text-xs sm:text-sm font-bold truncate transition-colors ${
                                isCentered ? "text-[#C5B2A4]" : "text-[#F5EFEB]"
                              }`}
                            >
                              {skill.name}
                            </h4>
                            <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-[#3E1A1C]/60 text-[#C5B2A4] border border-[#837062]/30 shrink-0">
                              {skill.tag}
                            </span>
                          </div>
                          <p className="text-[11px] text-[#A89A90] truncate mt-1 leading-tight">
                            {skill.shortDesc}
                          </p>
                        </div>
                      </div>

                      {/* Right: Active Status Indicator */}
                      <div className="shrink-0 flex items-center pl-1">
                        <span
                          className={`w-1.5 h-1.5 rounded-full transition-all ${
                            isCentered
                              ? "bg-[#C5B2A4] shadow-[0_0_8px_#C5B2A4] scale-125"
                              : "bg-[#837062]/30"
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

        {/* ================= RIGHT COLUMN: INTERACTIVE ARCHITECTURE STUDIO ================= */}
        <div className="lg:col-span-7 flex flex-col justify-between py-2 relative">
          {/* Subtle Ambient light behind active technology */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#3E1A1C]/20 rounded-full blur-3xl pointer-events-none -mr-16 -mt-16" />

          <div className="relative z-10 space-y-6">
            {/* Header Lockup: Category + Interactive View Switcher */}
            <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-[#837062]/20">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono text-[#C5B2A4] tracking-wider uppercase font-medium">
                  {activeSkill.category}
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#3E1A1C] border border-[#837062]/40 text-[#C5B2A4]">
                  {activeSkill.role}
                </span>
              </div>

              {/* 3 Interactive Studio Tabs */}
              <div className="flex items-center gap-1 p-1 bg-[#141517] rounded-md border border-[#837062]/30">
                <button
                  onClick={() => setActiveTab("architecture")}
                  className={`flex items-center gap-1.5 px-3 py-1 rounded text-xs font-mono transition-all cursor-pointer ${
                    activeTab === "architecture"
                      ? "bg-[#3E1A1C] text-[#F5EFEB] border border-[#837062]/40 shadow-sm"
                      : "text-[#A89A90] hover:text-[#F5EFEB]"
                  }`}
                >
                  <Cpu className="w-3.5 h-3.5" />
                  <span>ARCHITECTURE</span>
                </button>

                <button
                  onClick={() => setActiveTab("code")}
                  className={`flex items-center gap-1.5 px-3 py-1 rounded text-xs font-mono transition-all cursor-pointer ${
                    activeTab === "code"
                      ? "bg-[#3E1A1C] text-[#F5EFEB] border border-[#837062]/40 shadow-sm"
                      : "text-[#A89A90] hover:text-[#F5EFEB]"
                  }`}
                >
                  <Code2 className="w-3.5 h-3.5" />
                  <span>CODE & SCHEMA</span>
                </button>

                <button
                  onClick={() => setActiveTab("telemetry")}
                  className={`flex items-center gap-1.5 px-3 py-1 rounded text-xs font-mono transition-all cursor-pointer ${
                    activeTab === "telemetry"
                      ? "bg-[#3E1A1C] text-[#F5EFEB] border border-[#837062]/40 shadow-sm"
                      : "text-[#A89A90] hover:text-[#F5EFEB]"
                  }`}
                >
                  <Activity className="w-3.5 h-3.5" />
                  <span>TELEMETRY</span>
                </button>
              </div>
            </div>

            {/* Title & Icon Lockup */}
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-lg bg-[#141517] border border-[#837062]/35 flex items-center justify-center text-[#C5B2A4] shadow-inner shrink-0">
                <activeSkill.icon className="w-7 h-7 text-[#C5B2A4]" />
              </div>
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-[#F5EFEB] tracking-tight">
                  {activeSkill.name}
                </h3>
                <span className="text-xs font-mono text-[#A89A90] tracking-wide uppercase">
                  DOMAIN // {activeSkill.tag}
                </span>
              </div>
            </div>

            {/* TAB CONTENT 1: ARCHITECTURE BLUEPRINT */}
            {activeTab === "architecture" && (
              <div className="space-y-5 animate-in fade-in duration-300">
                <p className="text-xs sm:text-sm text-[#A89A90] leading-relaxed">
                  {activeSkill.description}
                </p>

                {/* Concrete Real-World Project Usage */}
                <div className="p-4 rounded-lg bg-[#141517]/90 border border-[#837062]/25 space-y-1">
                  <span className="text-[10px] font-mono text-[#C5B2A4] uppercase tracking-wider block font-medium">
                    PRODUCTION INTEGRATION:
                  </span>
                  <p className="text-xs font-mono text-[#F5EFEB] leading-relaxed">
                    {activeSkill.projectUsage}
                  </p>
                </div>

                {/* Architectural Capabilities Checklist */}
                <div className="space-y-2 pt-1">
                  <span className="text-[11px] font-mono text-[#C5B2A4] uppercase tracking-wider block">
                    Engineering Highlights & Design Decisions:
                  </span>
                  <ul className="space-y-2">
                    {activeSkill.highlights.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#A89A90]">
                        <CheckCircle2 className="w-4 h-4 text-[#C5B2A4] shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {/* TAB CONTENT 2: CODE & SCHEMA VIEWER */}
            {activeTab === "code" && (
              <div className="space-y-3 animate-in fade-in duration-300">
                <div className="flex items-center justify-between text-xs font-mono text-[#A89A90] pb-1">
                  <div className="flex items-center gap-2">
                    <Terminal className="w-3.5 h-3.5 text-[#C5B2A4]" />
                    <span>PRODUCTION IMPLEMENTATION // {activeSkill.id}.ts</span>
                  </div>

                  <button
                    onClick={handleCopyCode}
                    className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#1A1B1D] hover:bg-[#3E1A1C] text-[#C5B2A4] border border-[#837062]/30 transition-colors cursor-pointer text-[11px]"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3 h-3 text-emerald-400" />
                        <span className="text-emerald-400">COPIED</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3" />
                        <span>COPY</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Dark Code Terminal Window */}
                <div className="rounded-lg bg-[#0D0E10] border border-[#837062]/30 p-4 font-mono text-xs overflow-x-auto shadow-inner">
                  <div className="flex items-center gap-1.5 pb-3 border-b border-white/[0.06] mb-3">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500/70" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/70" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/70" />
                    <span className="text-[10px] text-neutral-500 ml-2">syntax // verified</span>
                  </div>

                  <pre className="text-neutral-300 font-mono leading-relaxed selection:bg-[#3E1A1C]">
                    <code>{activeSkill.codeSnippet || "// Production implementation active"}</code>
                  </pre>
                </div>
              </div>
            )}

            {/* TAB CONTENT 3: TELEMETRY & METRICS */}
            {activeTab === "telemetry" && (
              <div className="space-y-5 animate-in fade-in duration-300">
                <p className="text-xs sm:text-sm text-[#A89A90] leading-relaxed">
                  Real-time engineering metrics, latency benchmarks, and architectural verification targets for {activeSkill.name}.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {activeSkill.metrics?.map((m, mIdx) => (
                    <div 
                      key={mIdx}
                      className="p-4 rounded-lg bg-[#141517] border border-[#837062]/25 space-y-1 relative overflow-hidden"
                    >
                      <div className="flex items-center justify-between text-[#837062] mb-1">
                        <Zap className="w-3.5 h-3.5 text-[#C5B2A4]" />
                        <span className="text-[9px] font-mono uppercase tracking-wider">VERIFIED</span>
                      </div>
                      <span className="text-lg sm:text-xl font-bold font-mono text-[#F5EFEB] block">
                        {m.value}
                      </span>
                      <span className="text-[11px] font-mono text-[#A89A90] block">
                        {m.label}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="p-4 rounded-lg bg-[#141517]/80 border border-[#837062]/20 flex items-center justify-between text-xs font-mono text-[#A89A90]">
                  <span>DEPLOYMENT READINESS</span>
                  <span className="text-emerald-400 font-semibold flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    PRODUCTION GRADE // ZERO RUNTIME LEAKS
                  </span>
                </div>
              </div>
            )}

          </div>

          {/* Bottom Bar */}
          <div className="mt-8 pt-4 border-t border-[#837062]/20 flex items-center justify-between text-[11px] font-mono text-[#9A8B80] relative z-10">
            <span>SYNCHRONIZED WITH CURVED WHEEL</span>
            <span className="text-[#C5B2A4]">ID: {activeSkill.id}</span>
          </div>
        </div>

      </div>
    </div>
  );
};

import { useState, useRef, useEffect, useCallback } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { 
  Code2, 
  Cpu, 
  Copy, 
  Check, 
  ArrowUpRight, 
  Sparkles,
  Zap,
  Terminal,
  Compass,
  Maximize2,
  X,
  Layers,
  Activity,
  Move
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

// 14 rich cards arranged across a 2D canvas plane (x, y coordinates in pixels)
const CANVAS_CARDS = [
  // --- ROW 1 ---
  {
    id: "react",
    num: "001",
    type: "skill",
    category: "FRONTEND // CORE",
    title: "React 19",
    subtitle: "Concurrent Engine & Server Actions",
    desc: "Optimistic updates, compiler memoization, and zero-jitter UI transitions.",
    x: 120,
    y: 80,
    w: 360,
    h: 220,
    theme: "wine",
    icon: SiReact,
    badge: "Core Stack",
    code: `// React 19 Server Action
export async function bookSlot(slotId) {
  'use server';
  const slot = await db.slots.findUnique({ where: { id: slotId } });
  if (slot.isBooked) throw new Error('Collision prevented');
  return await db.appointments.create({ data: { slotId, status: 'CONFIRMED' } });
}`,
    metrics: [{ label: "Frame Time", val: "< 16ms" }, { label: "State Jitter", val: "0ms" }]
  },
  {
    id: "banner-intro",
    num: "002",
    type: "editorial",
    category: "PROFILE // ARCHITECTURE",
    title: "ENGINEERING WITH DISCIPLINE",
    subtitle: "Full Stack Software Developer",
    desc: "Building dependable backend microservices, robust RESTful APIs, and fluid, responsive interfaces with senior craft.",
    x: 520,
    y: 60,
    w: 460,
    h: 250,
    theme: "onyx",
    badge: "Lázaro Estrada",
    metrics: [{ label: "Experience", val: "4+ Years" }, { label: "Education", val: "CETI Colomos" }]
  },
  {
    id: "typescript",
    num: "031",
    type: "skill",
    category: "LANGUAGES // TYPE SYSTEMS",
    title: "TypeScript",
    subtitle: "Defensive Type Verification",
    desc: "Generic constraints, discriminated unions, and end-to-end API contracts.",
    x: 1020,
    y: 80,
    w: 360,
    h: 220,
    theme: "champagne",
    icon: SiTypescript,
    badge: "Strict Mode",
    code: `export type ApiResponse<T> = 
  | { status: 'success'; data: T; timestamp: number }
  | { status: 'error'; message: string; code: 400 | 404 | 500 };`,
    metrics: [{ label: "Type Safety", val: "100% Strict" }, { label: "Schema Sync", val: "Automated" }]
  },
  {
    id: "nodejs",
    num: "045",
    type: "skill",
    category: "BACKEND // RUNTIME & APIS",
    title: "Node.js & Express",
    subtitle: "High-Throughput REST APIs",
    desc: "Asynchronous event loop, JWT session security, and clean middleware envelopes.",
    x: 1420,
    y: 70,
    w: 350,
    h: 230,
    theme: "dark",
    icon: SiNodedotjs,
    badge: "Event Loop",
    code: `export const asyncRoute = (fn) => async (req, res, next) => {
  try {
    const data = await fn(req, res);
    res.status(200).json({ status: 'ok', data });
  } catch (e) { next(e); }
};`,
    metrics: [{ label: "Throughput", val: "10k+ req/s" }, { label: "P99 Latency", val: "< 45ms" }]
  },
  {
    id: "metric-perf",
    num: "048",
    type: "stat",
    category: "TELEMETRY // BENCHMARKS",
    title: "SUB-SECOND INFERENCE",
    subtitle: "Enterprise Latency Budget",
    desc: "142ms average batch parsing speed on degraded multi-column document scans.",
    x: 1810,
    y: 90,
    w: 330,
    h: 210,
    theme: "wine",
    badge: "Verified SLA",
    metrics: [{ label: "OCR Accuracy", val: "98.9%" }, { label: "Speed", val: "142ms" }]
  },

  // --- ROW 2 ---
  {
    id: "ocr-showcase",
    num: "062",
    type: "image-feature",
    category: "DEEP VISION // PADDLEOCR",
    title: "Document OCR Extraction",
    subtitle: "Automated Invoice & Table Parsing",
    desc: "Real-world OCR computer vision pipeline converting raw scans into structured relational JSON.",
    x: 100,
    y: 340,
    w: 420,
    h: 290,
    image: "/projects/tabla_pagina_procesada_1.webp",
    theme: "dark",
    badge: "Enterprise AI",
    metrics: [{ label: "Confidence", val: "98.9%" }, { label: "Engine", val: "PaddleOCR" }]
  },
  {
    id: "python",
    num: "075",
    type: "skill",
    category: "BACKEND // DATA & VISION",
    title: "Python (Data & Vision)",
    subtitle: "Document Intelligence Pipelines",
    desc: "Computer vision image normalization, contour deskew, and automated ETL ingestion.",
    x: 560,
    y: 350,
    w: 380,
    h: 250,
    theme: "wine",
    icon: SiPython,
    badge: "Scripting & AI",
    code: `import cv2
def preprocess_scan(img_path):
    raw = cv2.imread(img_path, cv2.IMREAD_GRAYSCALE)
    denoised = cv2.fastNlMeansDenoising(raw, h=10)
    return cv2.createCLAHE(clipLimit=2.0).apply(denoised)`,
    metrics: [{ label: "Batch Turnaround", val: "< 1.2s" }, { label: "Labor Saved", val: "85%" }]
  },
  {
    id: "go",
    num: "093",
    type: "skill",
    category: "SYSTEMS // CONCURRENCY",
    title: "Go (Golang)",
    subtitle: "Thread-Safe Microservices",
    desc: "Goroutines, channels, and standalone compiled micro-binaries under 15MB.",
    x: 980,
    y: 340,
    w: 360,
    h: 240,
    theme: "onyx",
    icon: SiGo,
    badge: "Compiled Binary",
    code: `func WorkerPool(jobs <-chan Job, results chan<- Result, wg *sync.WaitGroup) {
    defer wg.Done()
    for job := range jobs { results <- processTask(job) }
}`,
    metrics: [{ label: "Binary Footprint", val: "< 15MB" }, { label: "Concurrency", val: "100k+ Routines" }]
  },
  {
    id: "docker",
    num: "096",
    type: "skill",
    category: "DEVOPS // INFRASTRUCTURE",
    title: "Docker & Containers",
    subtitle: "Multi-Stage Determinism",
    desc: "Hardened Alpine containers ensuring 100% parity between local dev and production.",
    x: 1380,
    y: 340,
    w: 360,
    h: 230,
    theme: "champagne",
    icon: SiDocker,
    badge: "Reproducibility",
    code: `FROM python:3.11-alpine AS runner
WORKDIR /app
COPY --from=builder /app /app
EXPOSE 5000
CMD ["gunicorn", "--bind", "0.0.0.0:5000", "app:app"]`,
    metrics: [{ label: "Size Reduction", val: "65%" }, { label: "Parity", val: "100% Deterministic" }]
  },
  {
    id: "flask",
    num: "099",
    type: "skill",
    category: "BACKEND // LIGHTWEIGHT SERVICES",
    title: "Flask Services",
    subtitle: "Decoupled Model Serving",
    desc: "Lightweight RESTful endpoints serving deep vision pipelines without framework bloat.",
    x: 1780,
    y: 340,
    w: 340,
    h: 220,
    theme: "dark",
    icon: SiFlask,
    badge: "Microservices",
    metrics: [{ label: "Cold Start", val: "< 180ms" }, { label: "Memory Base", val: "~110MB" }]
  },

  // --- ROW 3 ---
  {
    id: "postgresql",
    num: "100",
    type: "skill",
    category: "DATA // RELATIONAL ARCHITECTURE",
    title: "PostgreSQL & MySQL",
    subtitle: "ACID Normalized Schemas",
    desc: "Foreign key cascades, composite indexes, and sub-30ms P95 query execution.",
    x: 160,
    y: 670,
    w: 380,
    h: 240,
    theme: "champagne",
    icon: SiPostgresql,
    badge: "ACID Storage",
    code: `CREATE TABLE appointments (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    slot_time TIMESTAMPTZ NOT NULL,
    status VARCHAR(24) DEFAULT 'PENDING',
    CONSTRAINT unique_slot UNIQUE (barber_id, slot_time)
);
CREATE INDEX idx_slot_lookup ON appointments(barber_id, slot_time);`,
    metrics: [{ label: "Query P95", val: "< 25ms" }, { label: "Integrity", val: "Strict Foreign Keys" }]
  },
  {
    id: "laravel",
    num: "112",
    type: "skill",
    category: "BACKEND // FULL-STACK MVC",
    title: "Laravel (PHP)",
    subtitle: "Eloquent ORM & Accounting Ledgers",
    desc: "Double-entry inspired ledger systems, database migrations, and CSRF protection.",
    x: 580,
    y: 640,
    w: 370,
    h: 230,
    theme: "wine",
    icon: SiLaravel,
    badge: "PHP Enterprise",
    code: `public function recordTransaction(Request $request): JsonResponse {
    return DB::transaction(function () use ($request) {
        $entry = LedgerEntry::create($request->validated());
        $entry->account->decrement('balance', $entry->amount);
        return response()->json(['status' => 'reconciled', 'id' => $entry->id]);
    });
}`,
    metrics: [{ label: "Transactions", val: "100% ACID" }, { label: "ORM Efficiency", val: "Sub-40ms" }]
  },
  {
    id: "tailwind",
    num: "114",
    type: "skill",
    category: "FRONTEND // MODERN STYLING",
    title: "Tailwind CSS",
    subtitle: "Utility Design Tokens",
    desc: "Fluid typography, container queries, and atomic static CSS builds without runtime overhead.",
    x: 990,
    y: 620,
    w: 360,
    h: 230,
    theme: "dark",
    icon: SiTailwindcss,
    badge: "Utility-First",
    metrics: [{ label: "Bundle Overhead", val: "0ms Static" }, { label: "Responsive", val: "Fluid Breakpoints" }]
  },
  {
    id: "git",
    num: "116",
    type: "skill",
    category: "DEVOPS // VERSION CONTROL",
    title: "Git & GitHub",
    subtitle: "Branching Discipline & Semantic Commits",
    desc: "Atomic commits, interactive rebasing, descriptive PR reviews, and CI verification.",
    x: 1390,
    y: 610,
    w: 370,
    h: 230,
    theme: "onyx",
    icon: SiGit,
    badge: "Version Control",
    metrics: [{ label: "Repositories", val: "40+ Maintained" }, { label: "Commit Style", val: "Semantic Atomic" }]
  },
  {
    id: "badge-status",
    num: "118",
    type: "editorial",
    category: "AVAILABILITY // 2025-2026",
    title: "OPEN TO ENGINEERING ROLES",
    subtitle: "Remote & Guadalajara, MX",
    desc: "Available for full-stack engineering contracts, backend microservices, and high-performance web platforms.",
    x: 1800,
    y: 600,
    w: 340,
    h: 230,
    theme: "wine",
    badge: "Direct Contact",
    metrics: [{ label: "Turnaround", val: "< 24h" }, { label: "Timezone", val: "GMT-6 (CST)" }]
  },
];

const INITIAL_CANVAS_POS = { x: -280, y: -120 };

export const InteractiveCanvasShowcase = () => {
  const rootRef = useRef(null);
  const viewportRef = useRef(null);
  const canvasRef = useRef(null);

  // Position state (2D transform)
  const posRef = useRef({ ...INITIAL_CANVAS_POS });
  const [activeNearest, setActiveNearest] = useState(CANVAS_CARDS[0]);
  const [selectedCard, setSelectedCard] = useState(null);
  const [copied, setCopied] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  // Velocity tracking for physics momentum
  const dragRef = useRef({
    isDown: false,
    startX: 0,
    startY: 0,
    startPosX: 0,
    startPosY: 0,
    lastX: 0,
    lastY: 0,
    lastTime: 0,
    vx: 0,
    vy: 0,
    hasMoved: false,
  });

  // Dimensions of canvas bounds
  const canvasW = 2300;
  const canvasH = 980;

  // Update nearest card to viewport center (madewithgsap ON SCREEN pill)
  const updateNearestCard = useCallback((currX, currY) => {
    if (!viewportRef.current) return;
    const viewW = viewportRef.current.clientWidth;
    const viewH = viewportRef.current.clientHeight;
    const centerX = -currX + viewW / 2;
    const centerY = -currY + viewH / 2;

    let closest = CANVAS_CARDS[0];
    let minDistance = Infinity;

    CANVAS_CARDS.forEach((card) => {
      const cardCenterX = card.x + card.w / 2;
      const cardCenterY = card.y + card.h / 2;
      const dist = Math.hypot(cardCenterX - centerX, cardCenterY - centerY);
      if (dist < minDistance) {
        minDistance = dist;
        closest = card;
      }
    });

    setActiveNearest(closest);
  }, []);

  // Center canvas on specific card
  const centerOnCard = useCallback((card, duration = 0.8) => {
    if (!viewportRef.current) return;
    const viewW = viewportRef.current.clientWidth;
    const viewH = viewportRef.current.clientHeight;

    const targetX = -(card.x + card.w / 2 - viewW / 2);
    const targetY = -(card.y + card.h / 2 - viewH / 2);

    // Clamp within bounds
    const minX = -(canvasW - viewW);
    const minY = -(canvasH - viewH);
    const clampedX = Math.max(minX - 40, Math.min(40, targetX));
    const clampedY = Math.max(minY - 40, Math.min(40, targetY));

    gsap.killTweensOf(posRef.current);
    gsap.to(posRef.current, {
      x: clampedX,
      y: clampedY,
      duration,
      ease: "power3.out",
      onUpdate: () => {
        if (canvasRef.current) {
          canvasRef.current.style.transform = `translate3d(${posRef.current.x}px, ${posRef.current.y}px, 0)`;
        }
        updateNearestCard(posRef.current.x, posRef.current.y);
      },
    });
  }, [canvasW, canvasH, updateNearestCard]);

  // Initial centering on load
  useEffect(() => {
    centerOnCard(CANVAS_CARDS[1], 0);
  }, [centerOnCard]);

  // Pointer Down (Mouse / Touch)
  const handlePointerDown = (e) => {
    dragRef.current.isDown = true;
    dragRef.current.hasMoved = false;
    dragRef.current.pointerType = e.pointerType;
    dragRef.current.isCaptured = false;
    dragRef.current.startX = e.clientX;
    dragRef.current.startY = e.clientY;
    dragRef.current.startPosX = posRef.current.x;
    dragRef.current.startPosY = posRef.current.y;
    dragRef.current.lastX = e.clientX;
    dragRef.current.lastY = e.clientY;
    dragRef.current.lastTime = performance.now();
    dragRef.current.vx = 0;
    dragRef.current.vy = 0;

    gsap.killTweensOf(posRef.current);

    // If mouse, immediately capture pointer and set dragging
    if (e.pointerType === "mouse") {
      setIsDragging(true);
      try {
        e.currentTarget.setPointerCapture(e.pointerId);
        dragRef.current.isCaptured = true;
      } catch {
        // fallback
      }
    }
  };

  // Pointer Move (2D Dragging)
  const handlePointerMove = (e) => {
    if (!dragRef.current.isDown) return;
    const deltaX = e.clientX - dragRef.current.startX;
    const deltaY = e.clientY - dragRef.current.startY;

    // For touch devices: if user is scrolling vertically, yield to browser scrolling!
    if (dragRef.current.pointerType === "touch" && !dragRef.current.isCaptured) {
      // If vertical delta is greater than horizontal, cancel canvas drag so page scrolls natively
      if (Math.abs(deltaY) > Math.abs(deltaX) && Math.abs(deltaY) > 8) {
        dragRef.current.isDown = false;
        setIsDragging(false);
        return;
      }
      // If horizontal delta dominates, capture touch for smooth canvas panning
      if (Math.abs(deltaX) > Math.abs(deltaY) + 4 && Math.abs(deltaX) > 8) {
        try {
          e.currentTarget.setPointerCapture(e.pointerId);
          dragRef.current.isCaptured = true;
          setIsDragging(true);
        } catch {
          // fallback
        }
      } else {
        return;
      }
    }

    if (Math.abs(deltaX) > 4 || Math.abs(deltaY) > 4) {
      dragRef.current.hasMoved = true;
    }

    const newX = dragRef.current.startPosX + deltaX;
    const newY = dragRef.current.startPosY + deltaY;

    posRef.current.x = newX;
    posRef.current.y = newY;

    if (canvasRef.current) {
      canvasRef.current.style.transform = `translate3d(${newX}px, ${newY}px, 0)`;
    }

    // Velocity computation
    const now = performance.now();
    const dt = now - dragRef.current.lastTime;
    if (dt > 10) {
      dragRef.current.vx = (e.clientX - dragRef.current.lastX) / dt;
      dragRef.current.vy = (e.clientY - dragRef.current.lastY) / dt;
      dragRef.current.lastX = e.clientX;
      dragRef.current.lastY = e.clientY;
      dragRef.current.lastTime = now;
    }

    updateNearestCard(newX, newY);
  };

  // Pointer Up (Momentum Release & Boundary Spring)
  const handlePointerUp = (e) => {
    if (!dragRef.current.isDown) return;
    dragRef.current.isDown = false;
    setIsDragging(false);

    if (dragRef.current.isCaptured) {
      try {
        e.currentTarget.releasePointerCapture(e.pointerId);
      } catch {
        // fallback
      }
      dragRef.current.isCaptured = false;
    }

    if (!viewportRef.current) return;
    const viewW = viewportRef.current.clientWidth;
    const viewH = viewportRef.current.clientHeight;

    // Momentum impulse
    const momentumX = dragRef.current.vx * 220;
    const momentumY = dragRef.current.vy * 220;

    let targetX = posRef.current.x + momentumX;
    let targetY = posRef.current.y + momentumY;

    // Canvas boundary clamps with subtle elastic bounce
    const minX = -(canvasW - viewW + 80);
    const maxX = 80;
    const minY = -(canvasH - viewH + 80);
    const maxY = 80;

    targetX = Math.max(minX, Math.min(maxX, targetX));
    targetY = Math.max(minY, Math.min(maxY, targetY));

    gsap.to(posRef.current, {
      x: targetX,
      y: targetY,
      duration: 0.85,
      ease: "power3.out",
      onUpdate: () => {
        if (canvasRef.current) {
          canvasRef.current.style.transform = `translate3d(${posRef.current.x}px, ${posRef.current.y}px, 0)`;
        }
        updateNearestCard(posRef.current.x, posRef.current.y);
      },
    });
  };

  // Mouse Wheel (2D trackpad / wheel navigation)
  const handleWheel = (e) => {
    e.preventDefault();
    if (!viewportRef.current) return;

    const deltaX = -e.deltaX * 0.9;
    const deltaY = -e.deltaY * 0.9;

    const viewW = viewportRef.current.clientWidth;
    const viewH = viewportRef.current.clientHeight;

    const minX = -(canvasW - viewW + 80);
    const maxX = 80;
    const minY = -(canvasH - viewH + 80);
    const maxY = 80;

    const nextX = Math.max(minX, Math.min(maxX, posRef.current.x + deltaX));
    const nextY = Math.max(minY, Math.min(maxY, posRef.current.y + deltaY));

    posRef.current.x = nextX;
    posRef.current.y = nextY;

    if (canvasRef.current) {
      canvasRef.current.style.transform = `translate3d(${nextX}px, ${nextY}px, 0)`;
    }

    updateNearestCard(nextX, nextY);
  };

  // Card click (inspect or open modal if not dragging)
  const handleCardClick = (card) => {
    if (dragRef.current.hasMoved) return;
    centerOnCard(card, 0.65);
    setSelectedCard(card);
  };

  // Copy code snippet
  const handleCopyCode = (code) => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  useGSAP(() => {
    if (!rootRef.current) return;
    gsap.fromTo(
      rootRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: rootRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      }
    );
  }, { scope: rootRef });

  return (
    <div ref={rootRef} className="w-full relative select-none py-8">
      
      {/* Top Controls Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#3E1A1C]/40 border border-[#837062]/30 text-[#C5B2A4] text-xs font-mono tracking-widest uppercase mb-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C5B2A4] animate-pulse" />
            <span>02 // INTERACTIVE 2D STACK SHOWCASE</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-[#F5EFEB] tracking-tight">
            Explore Full Architecture Canvas
          </h3>
        </div>

        {/* Quick Cluster Centering Buttons */}
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-[11px] font-mono text-[#837062] mr-1 hidden md:inline">
            CLUSTER JUMP:
          </span>
          <button
            onClick={() => centerOnCard(CANVAS_CARDS[0])}
            className="px-2.5 py-1 rounded-md bg-[#141517] border border-[#837062]/30 text-xs font-mono text-[#A89A90] hover:text-[#F5EFEB] hover:border-[#C5B2A4] transition-colors cursor-pointer"
          >
            Frontend
          </button>
          <button
            onClick={() => centerOnCard(CANVAS_CARDS[5])}
            className="px-2.5 py-1 rounded-md bg-[#141517] border border-[#837062]/30 text-xs font-mono text-[#A89A90] hover:text-[#F5EFEB] hover:border-[#C5B2A4] transition-colors cursor-pointer"
          >
            Vision & OCR
          </button>
          <button
            onClick={() => centerOnCard(CANVAS_CARDS[7])}
            className="px-2.5 py-1 rounded-md bg-[#141517] border border-[#837062]/30 text-xs font-mono text-[#A89A90] hover:text-[#F5EFEB] hover:border-[#C5B2A4] transition-colors cursor-pointer"
          >
            Go & Docker
          </button>
          <button
            onClick={() => centerOnCard(CANVAS_CARDS[10])}
            className="px-2.5 py-1 rounded-md bg-[#141517] border border-[#837062]/30 text-xs font-mono text-[#A89A90] hover:text-[#F5EFEB] hover:border-[#C5B2A4] transition-colors cursor-pointer"
          >
            Databases
          </button>
        </div>
      </div>

      {/* ================= 2D DRAGGABLE CANVAS STAGE ================= */}
      {/* Inspired directly by the user's screen recording & madewithgsap.com showcase */}
      <div 
        ref={viewportRef}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
        onWheel={handleWheel}
        className={`relative w-full h-[520px] sm:h-[680px] rounded-2xl border border-[#837062]/25 overflow-hidden bg-[#0A0B0D] touch-pan-y ${
          isDragging ? "cursor-grabbing" : "cursor-grab"
        }`}
      >
        {/* Soft Ambient Vignette & Dot Matrix Backdrop */}
        <div 
          className="absolute inset-0 pointer-events-none opacity-[0.04] bg-[radial-gradient(#ffffff_1px,transparent_1px)] z-0"
          style={{ backgroundSize: "28px 28px" }}
        />
        <div className="absolute inset-0 pointer-events-none bg-radial-gradient from-transparent via-transparent to-black/80 z-20" />

        {/* Floating Top-Left Gesture Telemetry */}
        <div className="absolute top-4 left-4 z-30 flex items-center gap-2 px-3 py-1.5 rounded-md bg-[#141517]/90 border border-[#837062]/30 backdrop-blur-md text-[11px] font-mono text-[#A89A90] pointer-events-none">
          <Move className="w-3.5 h-3.5 text-[#C5B2A4]" />
          <span className="hidden sm:inline">DRAG IN ANY DIRECTION // 2D CANVAS</span>
          <span className="sm:hidden">SWIPE HORIZONTAL // TAP PILLS</span>
        </div>

        {/* Floating Bottom-Right ON SCREEN Pill (from madewithgsap.com video) */}
        <div className="absolute bottom-4 right-4 z-30 flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#141517]/95 border border-[#837062]/40 backdrop-blur-md text-xs font-mono text-[#F5EFEB] shadow-xl pointer-events-none animate-in fade-in duration-200">
          <span className="text-[10px] text-[#837062] font-semibold">ON SCREEN</span>
          <span className="w-2 h-2 rounded-full bg-[#C5B2A4] shadow-[0_0_10px_#C5B2A4] animate-pulse" />
          <span className="font-bold text-[#C5B2A4]">#{activeNearest.num}</span>
          <span className="text-[#A89A90] font-medium hidden sm:inline">{activeNearest.title}</span>
        </div>

        {/* THE 2D FREE CANVAS */}
        <div
          ref={canvasRef}
          style={{
            width: `${canvasW}px`,
            height: `${canvasH}px`,
            transform: `translate3d(${INITIAL_CANVAS_POS.x}px, ${INITIAL_CANVAS_POS.y}px, 0)`,
            willChange: "transform",
          }}
          className="relative transition-none"
        >
          {CANVAS_CARDS.map((card) => {
            const isCenter = activeNearest.id === card.id;
            const IconComponent = card.icon;

            return (
              <div
                key={card.id}
                onClick={() => handleCardClick(card)}
                style={{
                  position: "absolute",
                  left: `${card.x}px`,
                  top: `${card.y}px`,
                  width: `${card.w}px`,
                  height: `${card.h}px`,
                }}
                className={`rounded-xl p-5 border transition-all duration-300 group flex flex-col justify-between select-none relative overflow-hidden backdrop-blur-xl ${
                  isCenter
                    ? "border-[#C5B2A4] bg-[#18191C] shadow-[0_16px_40px_rgba(62,26,28,0.5),inset_0_1px_2px_rgba(197,178,164,0.4)] scale-102 z-10"
                    : "border-[#837062]/25 bg-[#121315]/90 hover:border-[#837062]/60 hover:bg-[#151619] shadow-md z-0"
                }`}
              >
                {/* Top Specular Sheen on Center */}
                {isCenter && (
                  <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-[#C5B2A4] to-transparent" />
                )}

                {/* --- CARD VARIANT A: IMAGE FEATURE CARD (OCR Pipeline) --- */}
                {card.type === "image-feature" && card.image && (
                  <>
                    <div className="flex items-center justify-between text-[11px] font-mono mb-2">
                      <span className="text-[#C5B2A4] font-semibold">{card.category}</span>
                      <span className="px-2 py-0.5 rounded bg-[#3E1A1C] text-[#C5B2A4] border border-[#837062]/30">
                        {card.badge}
                      </span>
                    </div>

                    <div className="relative w-full h-[120px] rounded-lg overflow-hidden border border-white/10 my-1 bg-black">
                      <img
                        src={card.image}
                        alt="OCR Document Preview"
                        width="420"
                        height="120"
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover object-top opacity-85 group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                      <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between text-[10px] font-mono text-emerald-400">
                        <span>TABLE DETECTED // 14 ROWS</span>
                        <span className="text-white">98.9% ACCURACY</span>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-base font-bold text-[#F5EFEB] mt-1">{card.title}</h4>
                      <p className="text-xs text-[#A89A90] line-clamp-1">{card.desc}</p>
                    </div>
                  </>
                )}

                {/* --- CARD VARIANT B: SKILL CARD --- */}
                {card.type === "skill" && (
                  <>
                    <div>
                      <div className="flex items-center justify-between text-[11px] font-mono mb-3">
                        <div className="flex items-center gap-2">
                          <span className="text-[#C5B2A4] font-bold">#{card.num}</span>
                          <span className="text-neutral-500">•</span>
                          <span className="text-[#837062]">{card.category}</span>
                        </div>
                        <span className="px-2 py-0.5 rounded bg-black/40 text-[#C5B2A4] border border-[#837062]/20 text-[10px]">
                          {card.badge}
                        </span>
                      </div>

                      <div className="flex items-center gap-3">
                        {IconComponent && (
                          <div className={`p-2.5 rounded-lg border shrink-0 ${
                            isCenter 
                              ? "bg-[#3E1A1C] border-[#C5B2A4] text-[#C5B2A4]" 
                              : "bg-black/50 border-[#837062]/30 text-[#A89A90]"
                          }`}>
                            <IconComponent className="w-5 h-5" />
                          </div>
                        )}
                        <div>
                          <h4 className="text-base font-bold text-[#F5EFEB] tracking-tight">{card.title}</h4>
                          <p className="text-xs font-mono text-[#C5B2A4]">{card.subtitle}</p>
                        </div>
                      </div>

                      <p className="text-xs text-[#A89A90] mt-3 leading-relaxed line-clamp-2">
                        {card.desc}
                      </p>
                    </div>

                    {/* Metrics Row */}
                    <div className="flex items-center justify-between pt-3 border-t border-[#837062]/20 text-[11px] font-mono text-[#837062]">
                      <div className="flex items-center gap-3">
                        {card.metrics?.map((m, mIdx) => (
                          <span key={mIdx}>
                            {m.label}: <strong className="text-[#F5EFEB]">{m.val}</strong>
                          </span>
                        ))}
                      </div>
                      <span className="text-[#C5B2A4] group-hover:translate-x-0.5 transition-transform">
                        INSPECT →
                      </span>
                    </div>
                  </>
                )}

                {/* --- CARD VARIANT C: EDITORIAL / STAT CARD --- */}
                {(card.type === "editorial" || card.type === "stat") && (
                  <>
                    <div className="flex items-center justify-between text-[11px] font-mono">
                      <span className="text-[#C5B2A4] font-semibold">{card.category}</span>
                      <span className="px-2 py-0.5 rounded bg-[#3E1A1C] text-[#C5B2A4] border border-[#837062]/30 text-[10px]">
                        {card.badge}
                      </span>
                    </div>

                    <div className="my-2">
                      <h4 className="text-lg sm:text-xl font-extrabold text-[#F5EFEB] tracking-tight leading-tight">
                        {card.title}
                      </h4>
                      <p className="text-xs font-mono text-[#C5B2A4] mt-1">{card.subtitle}</p>
                      <p className="text-xs text-[#A89A90] mt-2 leading-relaxed">{card.desc}</p>
                    </div>

                    <div className="flex items-center gap-4 pt-3 border-t border-[#837062]/20 text-[11px] font-mono">
                      {card.metrics?.map((m, mIdx) => (
                        <div key={mIdx} className="flex items-center gap-1.5">
                          <Sparkles className="w-3 h-3 text-[#C5B2A4]" />
                          <span className="text-[#837062]">{m.label}:</span>
                          <span className="text-[#F5EFEB] font-bold">{m.val}</span>
                        </div>
                      ))}
                    </div>
                  </>
                )}

              </div>
            );
          })}
        </div>
      </div>

      {/* Interactive Detail Modal / Technical Dossier */}
      {selectedCard && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-xl rounded-2xl bg-[#141517] border border-[#837062]/50 p-6 sm:p-8 space-y-5 shadow-2xl text-left">
            <div className="flex items-center justify-between border-b border-[#837062]/30 pb-4">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono text-[#C5B2A4] font-bold">#{selectedCard.num}</span>
                <span className="text-xs font-mono text-[#837062]">// {selectedCard.category}</span>
              </div>
              <button
                onClick={() => setSelectedCard(null)}
                className="p-1.5 rounded-md bg-[#18191C] text-[#A89A90] hover:text-white transition-colors cursor-pointer border border-[#837062]/30"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-[#F5EFEB]">{selectedCard.title}</h3>
              <p className="text-xs font-mono text-[#C5B2A4] mt-0.5">{selectedCard.subtitle}</p>
              <p className="text-sm text-[#A89A90] mt-3 leading-relaxed">{selectedCard.desc}</p>
            </div>

            {selectedCard.code && (
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs font-mono text-[#837062]">
                  <span>PRODUCTION ARCHITECTURE SNIPPET</span>
                  <button
                    onClick={() => handleCopyCode(selectedCard.code)}
                    className="flex items-center gap-1 text-[#C5B2A4] hover:text-white transition-colors cursor-pointer"
                  >
                    {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copied ? "COPIED" : "COPY"}</span>
                  </button>
                </div>
                <div className="rounded-lg bg-[#0A0B0D] p-4 font-mono text-xs text-[#D4C3B7] overflow-x-auto border border-white/10">
                  <pre>{selectedCard.code}</pre>
                </div>
              </div>
            )}

            <div className="grid grid-cols-2 gap-3 pt-2">
              {selectedCard.metrics?.map((m, mIdx) => (
                <div key={mIdx} className="p-3 rounded-lg bg-[#0E0F12] border border-[#837062]/20">
                  <span className="text-[10px] font-mono text-[#837062] block">{m.label}</span>
                  <span className="text-base font-bold font-mono text-[#F5EFEB]">{m.val}</span>
                </div>
              ))}
            </div>

            <div className="pt-3 border-t border-[#837062]/20 flex justify-end">
              <button
                onClick={() => setSelectedCard(null)}
                className="px-4 py-2 rounded-md bg-[#3E1A1C] hover:bg-[#582428] text-xs font-mono text-[#F5EFEB] border border-[#837062]/40 transition-colors cursor-pointer"
              >
                CLOSE SPEC
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

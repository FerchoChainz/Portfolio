import { useState } from "react";
import { 
  SiReact, 
  SiTypescript, 
  SiNodedotjs, 
  SiPython, 
  SiFlask, 
  SiGo, 
  SiLaravel, 
  SiPostgresql, 
  SiMysql, 
  SiDocker, 
  SiTailwindcss, 
  SiGit,
  SiLinux 
} from "react-icons/si";
import { Server, Layers, Cpu, Terminal } from "lucide-react";

const CATEGORIES = [
  { id: "all", label: "All Disciplines", icon: Layers },
  { id: "backend", label: "Backend & Systems", icon: Server },
  { id: "frontend", label: "Frontend & UI", icon: Cpu },
  { id: "devops", label: "DevOps & Infrastructure", icon: Terminal },
];

const TECHNOLOGIES = [
  {
    name: "React 19",
    category: "frontend",
    badge: "Component Architecture",
    description: "Concurrent rendering, custom hooks, Server Actions, modern web standards, and state architecture.",
    icon: SiReact,
    experience: "Production",
    focus: "Modern Web Apps & SPAs",
  },
  {
    name: "TypeScript",
    category: "frontend",
    badge: "Type Safety",
    description: "Strict typing contracts, generic abstractions, defensive interfaces, and end-to-end type safety.",
    icon: SiTypescript,
    experience: "Production",
    focus: "Reliable Systems",
  },
  {
    name: "Node.js & Express",
    category: "backend",
    badge: "Runtime & APIs",
    description: "RESTful API architectures, async event loop processing, middleware pipelines, and auth services.",
    icon: SiNodedotjs,
    experience: "Production",
    focus: "Microservices & Backends",
  },
  {
    name: "Python",
    category: "backend",
    badge: "Automation & Data",
    description: "OCR pipelines, document intelligence, structured data parsing, and automated ingestion services.",
    icon: SiPython,
    experience: "Production",
    focus: "Document Automation",
  },
  {
    name: "Flask",
    category: "backend",
    badge: "Microservices",
    description: "Lightweight, decoupled HTTP endpoints for asynchronous ML/OCR model serving and enterprise data parsing.",
    icon: SiFlask,
    experience: "Production",
    focus: "Service Integration",
  },
  {
    name: "Go (Golang)",
    category: "backend",
    badge: "Concurrency & Performance",
    description: "Goroutines, channels, fast single-binary services, and high-throughput server backends.",
    icon: SiGo,
    experience: "Active Exploration",
    focus: "High-Throughput Systems",
  },
  {
    name: "Laravel (PHP)",
    category: "backend",
    badge: "MVC Architecture",
    description: "Robust MVC design, Eloquent ORM relationships, database migrations, and authentication flows.",
    icon: SiLaravel,
    experience: "Production",
    focus: "Full-Stack Web Systems",
  },
  {
    name: "PostgreSQL & MySQL",
    category: "backend",
    badge: "Relational Schemas",
    description: "Normalized relational modeling, indexed queries, foreign key constraints, and transactional consistency.",
    icon: SiPostgresql,
    secondaryIcon: SiMysql,
    experience: "Production",
    focus: "Data Modeling & Integrity",
  },
  {
    name: "Tailwind CSS",
    category: "frontend",
    badge: "Design Systems",
    description: "Tailwind v4 tokens, responsive layouts, container queries, fluid typography, and accessible UI patterns.",
    icon: SiTailwindcss,
    experience: "Production",
    focus: "Design Tokens & Motion",
  },
  {
    name: "Docker",
    category: "devops",
    badge: "Containerization",
    description: "Multi-stage builds, isolated runtime environments, reproducible microservice setups, and container orchestration.",
    icon: SiDocker,
    experience: "Production",
    focus: "Reproducible Builds",
  },
  {
    name: "Git & Version Control",
    category: "devops",
    badge: "Workflow Discipline",
    description: "Branching strategies, semantic commits, code reviews, rebasing, and repository health maintenance.",
    icon: SiGit,
    experience: "Production",
    focus: "Engineering Lifecycle",
  },
  {
    name: "Linux & CLI",
    category: "devops",
    badge: "System Administration",
    description: "Shell scripting, process management, SSH, environment configurations, and server deployments.",
    icon: SiLinux,
    experience: "Production",
    focus: "Production Tooling",
  },
];

export const TechnicalArsenal = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredTech = activeCategory === "all"
    ? TECHNOLOGIES
    : TECHNOLOGIES.filter((t) => t.category === activeCategory);

  return (
    <div className="w-full">
      {/* Header & Filter Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div>
          <span className="text-[11px] font-mono text-[#C5B2A4] uppercase tracking-widest block mb-1">
            CORE CAPABILITIES // 02
          </span>
          <h3 className="text-xl sm:text-2xl font-bold text-[#F5EFEB] tracking-tight">
            Technical Arsenal & Core Stack
          </h3>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-1.5 p-1 bg-[#141517] rounded-xl border border-[#837062]/20">
          {CATEGORIES.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono transition-all cursor-pointer ${
                  isActive
                    ? "bg-[#3E1A1C] text-[#F5EFEB] border border-[#837062]/40 shadow-sm"
                    : "text-[#9A8B80] hover:text-[#F5EFEB] hover:bg-white/[0.03]"
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Grid of Technologies */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {filteredTech.map((tech) => {
          const Icon = tech.icon;
          return (
            <div
              key={tech.name}
              className="p-5 rounded-2xl bg-[#141517]/80 border border-[#837062]/20 hover:border-[#C5B2A4]/40 hover:bg-[#141517] transition-all duration-200 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-[#1A1B1D] border border-[#837062]/25 flex items-center justify-center text-[#C5B2A4] group-hover:text-white group-hover:border-[#C5B2A4]/50 transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-[#3E1A1C]/30 text-[#C5B2A4] border border-[#837062]/20">
                    {tech.badge}
                  </span>
                </div>

                <h4 className="text-base font-semibold text-[#F5EFEB] group-hover:text-[#C5B2A4] transition-colors">
                  {tech.name}
                </h4>

                <p className="text-xs text-[#9A8B80] mt-2 leading-relaxed">
                  {tech.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-[#837062]/15 flex items-center justify-between text-[11px] font-mono text-[#9A8B80]">
                <span>{tech.focus}</span>
                <span className="text-[#C5B2A4]">{tech.experience}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

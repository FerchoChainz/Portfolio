import { 
  Sparkles, 
  Brain, 
  Code2, 
  Terminal, 
  Briefcase, 
  TrendingUp, 
  CheckCircle2, 
  MapPin, 
  Calendar, 
  ArrowUpRight, 
  Download, 
  Zap, 
  BookOpen, 
  Layers,
  Workflow,
  Cpu
} from "lucide-react";
import { FiGithub, FiLinkedin } from "react-icons/fi";
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

const experiences = [
  {
    period: "2025 - Present",
    role: "Freelance Software Developer",
    company: "Self-employed",
    badge: "Active",
    description:
      "Developing end-to-end web applications, robust RESTful APIs, and custom automation workflows. Collaborating directly with clients to translate business requirements into performant, modern digital solutions.",
    technologies: ["React", "Angular", "Laravel", "Express", "Tailwind CSS", "AI Tools"],
    current: true,
  },
  {
    period: "2024 - 2025",
    role: "Backend Developer Jr",
    company: "H2O Beborn",
    badge: "System Automation",
    description:
      "Engineered an enterprise Optical Character Recognition (OCR) pipeline to extract critical information from scanned documentation, eliminating manual data entry bottlenecks and boosting internal process velocity.",
    technologies: ["Python", "Flask", "PaddleOCR", "Docker", "REST APIs"],
    current: false,
  },
];

const skillCategories = [
  {
    title: "Frontend & UI",
    skills: [
      { name: "React 19", icon: SiReact, color: "text-[#61DAFB]" },
      { name: "TypeScript", icon: SiTypescript, color: "text-[#3178C6]" },
      { name: "JavaScript", icon: SiJavascript, color: "text-[#F7DF1E]" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-[#06B6D4]" },
      { name: "Angular", icon: SiAngular, color: "text-[#DD0031]" },
    ],
  },
  {
    title: "Backend & Systems",
    skills: [
      { name: "Python", icon: SiPython, color: "text-[#3776AB]" },
      { name: "Flask", icon: SiFlask, color: "text-neutral-200" },
      { name: "Node.js", icon: SiNodedotjs, color: "text-[#5FA04E]" },
      { name: "Express", icon: SiExpress, color: "text-neutral-300" },
      { name: "Laravel", icon: SiLaravel, color: "text-[#FF2D20]" },
      { name: "Go", icon: SiGo, color: "text-[#00ADD8]" },
    ],
  },
  {
    title: "AI & Intelligent Tooling",
    skills: [
      { name: "AI-Augmented Dev", icon: Sparkles, color: "text-primary" },
      { name: "Context & Prompt Eng.", icon: Brain, color: "text-emerald-400" },
      { name: "PaddleOCR / Vision", icon: Cpu, color: "text-cyan-400" },
      { name: "Agentic Workflows", icon: Workflow, color: "text-amber-400" },
    ],
  },
  {
    title: "DevOps & Core Tools",
    skills: [
      { name: "Docker", icon: SiDocker, color: "text-[#2496ED]" },
      { name: "Git & GitHub", icon: SiGit, color: "text-[#F05032]" },
      { name: "REST APIs", icon: Layers, color: "text-primary" },
      { name: "Linux / Bash", icon: Terminal, color: "text-neutral-300" },
    ],
  },
];

const aiBenefits = [
  {
    icon: Zap,
    title: "Accelerated Iteration",
    description: "Rapid prototyping, automating boilerplate, and cutting turnaround times.",
  },
  {
    icon: Brain,
    title: "Contextual Problem Solving",
    description: "Architecting structured prompts & agent workflows for complex edge-cases.",
  },
  {
    icon: Code2,
    title: "Code Quality & Audits",
    description: "AI-assisted refactoring, automated unit tests, and performance reviews.",
  },
  {
    icon: Workflow,
    title: "Streamlined Pipelines",
    description: "Automating repetitive dev tasks to focus on high-impact architecture.",
  },
];

const learningFocus = [
  "Agentic AI Frameworks & Tooling",
  "React 19 & Tailwind v4 Ecosystems",
  "High-Concurrency Patterns in Go",
  "Microservices & Cloud Deployments",
];

export const About = () => {
  return (
    <section id="about" className="relative z-10 bg-black pt-24 pb-28 sm:py-32 overflow-hidden">
      {/* Subtle background glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl pointer-events-none -translate-x-1/2" />
      <div className="absolute bottom-1/4 right-1/4 w-[450px] h-[450px] bg-highlight/5 rounded-full blur-3xl pointer-events-none translate-x-1/2" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-mono tracking-wider uppercase mb-4">
            <Terminal className="w-3.5 h-3.5" />
            <span>About Me // Profile & Core Stack</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-white">
            Engineering scalable systems,{" "}
            <span className="font-serif italic font-normal text-primary">
              amplified by modern AI & continuous growth.
            </span>
          </h2>

          <p className="mt-4 text-muted-foreground text-sm sm:text-base md:text-lg leading-relaxed">
            I am a full-stack software developer who combines fundamental engineering principles with
            modern AI-driven workflows. Here is a look at my profile, career milestones, and technical skillset.
          </p>
        </div>

        {/* ================= BENTO GRID ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">

          {/* 1. PORTRAIT & PROFILE CARD (Span 4 cols, 2 rows on LG) */}
          <div className="lg:col-span-4 lg:row-span-2 glass rounded-3xl p-6 sm:p-7 border border-white/10 hover:border-primary/40 transition-all duration-300 flex flex-col justify-between group shadow-xl">
            <div>
              {/* Photo Container */}
              <div className="relative aspect-square w-full rounded-2xl overflow-hidden mb-6 bg-surface/50 border border-white/10 group-hover:border-primary/40 transition-colors">
                <img
                  src="/profile-pic.png"
                  alt="Lazaro Estrada - Software Engineer"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  decoding="async"
                />

                {/* Ambient photo overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none" />

                {/* Floating Availability Badge */}
                <div className="absolute top-3 left-3 px-3 py-1 rounded-full glass-strong border border-emerald-500/30 flex items-center gap-2 text-xs font-mono text-emerald-400 shadow-md">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Available for Work</span>
                </div>

                {/* Location / Meta on Image */}
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs font-mono text-neutral-300">
                  <span className="flex items-center gap-1.5 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-md border border-white/10">
                    <MapPin className="w-3.5 h-3.5 text-primary" />
                    Guadalajara, MX
                  </span>
                  <span className="bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-md border border-white/10 text-neutral-400">
                    Full-Stack
                  </span>
                </div>
              </div>

              {/* Bio Details */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-bold text-white tracking-tight">Lázaro Estrada</h3>
                  <span className="text-xs font-mono text-primary bg-primary/10 px-2 py-0.5 rounded border border-primary/20">
                    Eng.
                  </span>
                </div>

                <p className="text-xs font-mono text-neutral-400">
                  Junior Full Stack Developer & Software Engineer
                </p>

                <p className="text-muted-foreground text-sm leading-relaxed pt-2">
                  Passionate about building performant applications, clean architectures, and automated data pipelines. Driven by a builder mindset and dedication to clean, maintainable craftsmanship.
                </p>
              </div>

              {/* Quick Highlight Metrics */}
              <div className="grid grid-cols-2 gap-2 pt-5">
                <div className="bg-surface/50 border border-white/5 rounded-xl p-3 text-center">
                  <div className="text-lg font-bold text-primary">2+</div>
                  <div className="text-[11px] font-mono text-muted-foreground uppercase">Years Coding</div>
                </div>
                <div className="bg-surface/50 border border-white/5 rounded-xl p-3 text-center">
                  <div className="text-lg font-bold text-emerald-400">100%</div>
                  <div className="text-[11px] font-mono text-muted-foreground uppercase">Commitment</div>
                </div>
              </div>
            </div>

            {/* Actions & Links */}
            <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between gap-3">
              <a
                href="/cv.pdf"
                download="Lazaro_Estrada_CV.pdf"
                className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-primary/30 bg-primary/10 hover:bg-primary/20 text-xs sm:text-sm font-mono text-primary hover:text-white transition-all duration-200"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download CV</span>
              </a>

              <div className="flex items-center gap-2">
                <a
                  href="https://github.com/FerchoChainz"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub Profile"
                  className="p-2.5 rounded-xl border border-white/10 text-neutral-400 hover:text-white hover:border-primary/40 hover:bg-white/5 transition-all"
                >
                  <FiGithub className="w-4 h-4" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn Profile"
                  className="p-2.5 rounded-xl border border-white/10 text-neutral-400 hover:text-white hover:border-primary/40 hover:bg-white/5 transition-all"
                >
                  <FiLinkedin className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* 2. AI-POWERED DEVELOPMENT SHOWCASE (Span 8 cols on LG) */}
          <div className="lg:col-span-8 glass rounded-3xl p-6 sm:p-8 border border-primary/30 hover:border-primary/50 transition-all duration-300 relative overflow-hidden group shadow-xl">
            {/* Background Accent Gradients */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-primary/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
            <div className="absolute bottom-0 left-0 w-60 h-60 bg-emerald-500/5 rounded-full blur-2xl pointer-events-none -ml-10 -mb-10" />

            <div className="relative z-10">
              <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/15 border border-primary/30 text-primary text-xs font-mono uppercase tracking-wider">
                  <Sparkles className="w-3.5 h-3.5 animate-pulse" />
                  <span>AI-Augmented Engineering</span>
                </div>
                <span className="text-xs font-mono text-muted-foreground">
                  High-Velocity Development
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Streamlining Development Processes with Modern AI
              </h3>

              <p className="mt-3 text-sm sm:text-base text-muted-foreground leading-relaxed">
                I actively incorporate state-of-the-art AI tooling (Claude, GitHub Copilot, Cursor, LLMs) directly into my daily engineering cycle. From rapid prototyping and architectural validation to automated test synthesis and deep debugging, AI allows me to eliminate repetitive friction, boost execution speed, and deliver robust software with maximum precision.
              </p>

              {/* 4 Feature Pillars Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6 pt-6 border-t border-white/10">
                {aiBenefits.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-surface/40 border border-white/5 hover:border-primary/30 transition-colors"
                  >
                    <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-3">
                      <item.icon className="w-4 h-4" />
                    </div>
                    <h4 className="text-sm font-semibold text-white mb-1">{item.title}</h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 3. CONTINUOUS LEARNING & GROWTH (Span 4 cols on LG) */}
          <div className="sm:col-span-1 lg:col-span-4 glass rounded-3xl p-6 sm:p-7 border border-white/10 hover:border-primary/40 transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono text-primary uppercase tracking-wider block">Growth Mindset</span>
                  <h3 className="text-lg font-bold text-white">Continuous Learning</h3>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                The tech landscape shifts continuously, and I embrace the learning curve. I consistently experiment with emerging frameworks, study architectural patterns, and enhance my technical capabilities.
              </p>

              <div className="mt-5 space-y-2.5">
                <div className="text-xs font-mono text-neutral-400 uppercase tracking-wider flex items-center gap-1.5">
                  <BookOpen className="w-3.5 h-3.5 text-primary" />
                  <span>Currently Exploring & Mastering:</span>
                </div>
                {learningFocus.map((topic, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 text-xs font-mono text-neutral-300 p-2 rounded-lg bg-surface/50 border border-white/5"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>{topic}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono text-neutral-400">
              <span>Status: Curious & Evolving</span>
              <span className="w-2 h-2 rounded-full bg-primary animate-ping" />
            </div>
          </div>

          {/* 4. CORE ENGINEERING PRINCIPLES (Span 4 cols on LG) */}
          <div className="sm:col-span-1 lg:col-span-4 glass rounded-3xl p-6 sm:p-7 border border-white/10 hover:border-primary/40 transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <Code2 className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono text-primary uppercase tracking-wider block">Methodology</span>
                  <h3 className="text-lg font-bold text-white">Core Engineering</h3>
                </div>
              </div>

              <div className="space-y-3.5">
                <div className="p-3 rounded-xl bg-surface/40 border border-white/5">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-semibold text-white">Clean & Scalable Code</span>
                    <span className="text-[10px] font-mono text-primary">Priority 01</span>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Writing maintainable, modular, and self-documenting code built for longevity.
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-surface/40 border border-white/5">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-semibold text-white">Performance-Driven</span>
                    <span className="text-[10px] font-mono text-primary">Priority 02</span>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Optimizing bundle sizes, database calls, and render pipelines for ultra-responsive apps.
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-surface/40 border border-white/5">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-semibold text-white">Agile & Collaborative</span>
                    <span className="text-[10px] font-mono text-primary">Priority 03</span>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Iterative delivery, proactive communication, and clear feedback loops.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/5 text-xs font-mono text-muted-foreground flex items-center justify-between">
              <span>Architecture Standards</span>
              <span className="text-primary font-bold">100% Modern</span>
            </div>
          </div>

          {/* 5. PROFESSIONAL EXPERIENCE TIMELINE (Span 7 cols on LG) */}
          <div className="col-span-12 lg:col-span-7 glass rounded-3xl p-6 sm:p-8 border border-white/10 hover:border-primary/30 transition-all duration-300 shadow-xl">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <Briefcase className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono text-primary uppercase tracking-wider block">Track Record</span>
                  <h3 className="text-xl font-bold text-white">Work Experience</h3>
                </div>
              </div>

              <a
                href="#experience"
                className="hidden sm:inline-flex items-center gap-1 text-xs font-mono text-muted-foreground hover:text-primary transition-colors"
              >
                <span>Full Timeline</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Experience Items */}
            <div className="space-y-6">
              {experiences.map((exp, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-surface/50 border border-white/5 hover:border-primary/30 transition-all duration-200 group/exp"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono text-primary font-medium flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5" />
                        {exp.period}
                      </span>
                      <span className="text-neutral-500">•</span>
                      <span className="text-xs font-mono text-neutral-300">{exp.company}</span>
                    </div>

                    <span
                      className={`text-[11px] font-mono px-2.5 py-0.5 rounded-full border ${
                        exp.current
                          ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-400"
                          : "bg-white/5 border-white/10 text-neutral-400"
                      }`}
                    >
                      {exp.badge}
                    </span>
                  </div>

                  <h4 className="text-base sm:text-lg font-semibold text-white group-hover/exp:text-primary transition-colors">
                    {exp.role}
                  </h4>

                  <p className="text-xs sm:text-sm text-muted-foreground mt-2 leading-relaxed">
                    {exp.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mt-4">
                    {exp.technologies.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 rounded-md bg-black/40 border border-white/10 text-[11px] font-mono text-neutral-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 6. TECHNICAL SKILLS MATRIX (Span 5 cols on LG) */}
          <div className="col-span-12 lg:col-span-5 glass rounded-3xl p-6 sm:p-8 border border-white/10 hover:border-primary/30 transition-all duration-300 shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <Layers className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono text-primary uppercase tracking-wider block">Competencies</span>
                  <h3 className="text-xl font-bold text-white">Technical Skills</h3>
                </div>
              </div>

              {/* Skill Matrix Categories */}
              <div className="space-y-4">
                {skillCategories.map((cat, cIdx) => (
                  <div key={cIdx} className="space-y-2">
                    <span className="text-xs font-mono text-neutral-400 uppercase tracking-wider block">
                      {cat.title}
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {cat.skills.map((skill, sIdx) => {
                        const IconComponent = skill.icon;
                        return (
                          <div
                            key={sIdx}
                            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-surface/60 border border-white/10 hover:border-primary/40 hover:bg-surface text-xs font-mono text-neutral-200 transition-all group/skill"
                          >
                            <IconComponent className={`w-3.5 h-3.5 ${skill.color} group-hover/skill:scale-110 transition-transform`} />
                            <span>{skill.name}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Matrix Footer Badge */}
            <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-neutral-400">
              <span className="flex items-center gap-1.5 text-primary">
                <Sparkles className="w-3.5 h-3.5" />
                AI-Integrated Workflow
              </span>
              <span>Continuously Updating</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
import { useState } from "react";
import { 
  ArrowRight, 
  CheckCircle2, 
  AlertCircle, 
  Copy, 
  Check, 
  MapPin, 
  Mail, 
  Phone 
} from "lucide-react";
import { HiRefresh } from "react-icons/hi";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import emailjs from "@emailjs/browser";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [copied, setCopied] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({
    type: null,
    message: "",
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("lazaroEstrada99@outlook.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error("EmailJS configuration is missing in environment variables.");
      }

      await emailjs.send(
        serviceId,
        templateId,
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone || "Not specified",
          message: formData.message,
        },
        publicKey
      );

      setSubmitStatus({
        type: "success",
        message: "Message transmitted successfully. I will get back to you shortly.",
      });

      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      console.error("EmailJS Error:", error);
      setSubmitStatus({
        type: "error",
        message: error.text || error.message || "An unexpected error occurred while transmitting your message.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="relative z-10 bg-transparent text-[#09090B] pt-24 pb-28 sm:pt-32 sm:pb-36 overflow-hidden">
      {/* Architectural Ambient Cabernet Glows */}
      <div className="absolute top-1/3 left-0 w-80 sm:w-[500px] h-80 sm:h-[500px] bg-[#3E1A1C]/10 rounded-full blur-[140px] pointer-events-none -translate-x-1/2" />
      <div className="absolute bottom-10 right-0 w-72 sm:w-[450px] h-72 sm:h-[450px] bg-[#837062]/5 rounded-full blur-[120px] pointer-events-none translate-x-1/3" />

      <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-6xl relative z-10">
        
        {/* Top Minimalist Editorial Header */}
        <div className="flex items-center justify-between border-b border-neutral-300 pb-5 mb-12 sm:mb-16 text-xs font-mono">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#581C24]/10 border border-[#581C24]/25 text-[#4A151B] text-[11px] tracking-widest uppercase font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-[#581C24] animate-pulse" />
            <span>04 // INQUIRY PROTOCOL</span>
          </div>

          <div className="hidden sm:block text-[11px] tracking-widest uppercase text-[#52525B]">
            ESTRADA // SOFTWARE ENGINEERING
          </div>

          <div className="flex items-center gap-2 text-[11px] text-[#09090B] font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            <span className="tracking-wider uppercase">AVAILABLE FOR WORK</span>
          </div>
        </div>

        {/* Main 2-Column Editorial Grid - Open & Fluid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start relative z-10">
          
          {/* LEFT COLUMN: Iconic Typography + Artwork Lockup */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-8 sm:space-y-10">
            <div>
              {/* Massive Serif Headline with Geometric Moon & Pendulum Wireframe (gt.png reference) */}
              <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-serif font-normal tracking-tight text-[#09090B] leading-[0.92] uppercase">
                <span className="inline-flex items-baseline">
                  LET&apos;S
                  {/* Geometric Celestial Circle & Wireframe Crescent Graphic from gt.png */}
                  <span className="relative inline-flex items-center justify-center align-middle ml-4 sm:ml-5 -mt-3 sm:-mt-5">
                    {/* The solid circular pearl */}
                    <span className="w-5 h-5 sm:w-8 sm:h-8 md:w-9 md:h-9 rounded-full bg-[#09090B] shadow-[0_0_24px_rgba(9,9,11,0.25)] block relative z-10" />
                    
                    {/* The architectural wireframe pendulum arc */}
                    <svg
                      className="absolute -bottom-3 sm:-bottom-4 md:-bottom-5 left-1/2 -translate-x-1/2 w-10 sm:w-14 md:w-16 h-8 sm:h-10 md:h-12 pointer-events-none text-neutral-400"
                      viewBox="0 0 60 40"
                      fill="none"
                    >
                      <path
                        d="M 5 8 C 15 36, 45 36, 55 8"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeDasharray="2 2"
                      />
                      <path
                        d="M 14 16 C 22 34, 38 34, 46 16"
                        stroke="currentColor"
                        strokeWidth="1"
                        opacity="0.6"
                      />
                    </svg>
                  </span>
                </span>
                <br />
                <span className="block italic text-[#581C24] mt-1 sm:mt-2">
                  GET IN
                </span>
                <span className="block mt-1 sm:mt-2 text-[#09090B]">
                  TOUCH
                </span>
              </h2>

              <p className="mt-8 text-sm sm:text-base text-[#3F3F46] leading-relaxed max-w-md font-normal">
                Whether you have an ambitious full-stack architecture, an enterprise OCR automation pipeline, or an open engineering role, my inbox is direct and responsive.
              </p>
            </div>

            {/* Direct Copy & Quick Connect Card */}
            <div className="pt-6 border-t border-neutral-300 space-y-4 max-w-md">
              <div className="flex items-center justify-between text-xs font-mono text-[#52525B]">
                <span>DIRECT LINE:</span>
                <span className="text-[#09090B] font-medium">GMT-6 // GUADALAJARA, MX</span>
              </div>

              <div className="flex items-center justify-between p-3.5 rounded-md bg-black/[0.04] border border-black/15">
                <span className="text-xs sm:text-sm font-mono text-[#09090B] select-all truncate mr-2 font-medium">
                  lazaroEstrada99@outlook.com
                </span>

                <button
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#09090B] hover:bg-neutral-800 text-white border border-black text-xs font-mono transition-all cursor-pointer shrink-0 shadow-sm"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">COPIED</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>COPY</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Minimalist Underline Form + Metadata Blocks */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-10 sm:space-y-12">
            
            {/* The Architectural Underline Form */}
            <form onSubmit={handleSubmit} className="space-y-8 sm:space-y-9">
              
              {/* Field 1: FULL NAME */}
              <div className="group relative border-b border-neutral-300 focus-within:border-[#09090B] transition-colors pb-1">
                <div className="flex items-center justify-between mb-1.5">
                  <label 
                    htmlFor="name" 
                    className="text-[11px] font-mono tracking-widest text-[#52525B] uppercase group-focus-within:text-[#581C24] transition-colors font-medium"
                  >
                    FULL NAME
                  </label>
                  <span className="text-xs font-mono text-[#581C24]">•</span>
                </div>
                <input
                  id="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Your full name or organization"
                  className="w-full bg-transparent py-2 text-sm sm:text-base text-[#09090B] placeholder-neutral-400 outline-none font-sans font-normal"
                />
              </div>

              {/* Field 2 & 3: EMAIL + PHONE */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-6">
                {/* EMAIL */}
                <div className="group relative border-b border-neutral-300 focus-within:border-[#09090B] transition-colors pb-1">
                  <div className="flex items-center justify-between mb-1.5">
                    <label 
                      htmlFor="email" 
                      className="text-[11px] font-mono tracking-widest text-[#52525B] uppercase group-focus-within:text-[#581C24] transition-colors font-medium"
                    >
                      EMAIL
                    </label>
                    <span className="text-xs font-mono text-[#581C24]">•</span>
                  </div>
                  <input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="email@domain.com"
                    className="w-full bg-transparent py-2 text-sm sm:text-base text-[#09090B] placeholder-neutral-400 outline-none font-sans font-normal"
                  />
                </div>

                {/* PHONE */}
                <div className="group relative border-b border-neutral-300 focus-within:border-[#09090B] transition-colors pb-1">
                  <div className="flex items-center justify-between mb-1.5">
                    <label 
                      htmlFor="phone" 
                      className="text-[11px] font-mono tracking-widest text-[#52525B] uppercase group-focus-within:text-[#581C24] transition-colors font-medium"
                    >
                      PHONE
                    </label>
                    <span className="text-[10px] font-mono text-[#71717A] uppercase tracking-wider">OPTIONAL</span>
                  </div>
                  <input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+52 ... / +1 ..."
                    className="w-full bg-transparent py-2 text-sm sm:text-base text-[#09090B] placeholder-neutral-400 outline-none font-sans font-normal"
                  />
                </div>
              </div>

              {/* Field 4: MESSAGE */}
              <div className="group relative border-b border-neutral-300 focus-within:border-[#09090B] transition-colors pb-1">
                <div className="flex items-center justify-between mb-1.5">
                  <label 
                    htmlFor="message" 
                    className="text-[11px] font-mono tracking-widest text-[#52525B] uppercase group-focus-within:text-[#581C24] transition-colors font-medium"
                  >
                    MESSAGE
                  </label>
                  <span className="text-xs font-mono text-[#581C24]">•</span>
                </div>
                <textarea
                  id="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Detail your engineering requirements, project goals, or scope..."
                  className="w-full bg-transparent py-2 text-sm sm:text-base text-[#09090B] placeholder-neutral-400 outline-none resize-none font-sans leading-relaxed font-normal"
                />
              </div>

              {/* Action Submit Area with Signature Arrow */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-3">
                <p className="text-[11px] font-mono text-[#71717A] max-w-xs leading-normal">
                  Encrypted transmission via EmailJS protocol. Expected response in &lt; 24h.
                </p>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="group inline-flex items-center gap-4 px-6 py-3.5 rounded-md bg-[#09090B] hover:bg-neutral-800 border border-black transition-all duration-300 cursor-pointer shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed w-fit self-end sm:self-auto"
                >
                  <span className="text-xs font-mono tracking-widest text-white uppercase font-medium">
                    {isLoading ? "DISPATCHING..." : "SEND INQUIRY"}
                  </span>

                  <div className="w-9 h-9 rounded-md bg-neutral-900 border border-neutral-700 flex items-center justify-center text-neutral-300 group-hover:bg-[#581C24] group-hover:text-white group-hover:border-[#581C24] group-hover:scale-105 transition-all duration-300">
                    {isLoading ? (
                      <HiRefresh className="w-4 h-4 animate-spin" />
                    ) : (
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                    )}
                  </div>
                </button>
              </div>

              {/* Status Alert Banner */}
              {submitStatus.type && (
                <div
                  className={`p-4 rounded-md border flex items-center gap-3 text-xs font-mono backdrop-blur-md transition-all ${
                    submitStatus.type === "success"
                      ? "bg-emerald-50 border-emerald-500/30 text-emerald-900"
                      : "bg-rose-50 border-rose-500/30 text-rose-900"
                  }`}
                >
                  {submitStatus.type === "success" ? (
                    <CheckCircle2 className="w-5 h-5 shrink-0 text-emerald-600" />
                  ) : (
                    <AlertCircle className="w-5 h-5 shrink-0 text-rose-600" />
                  )}
                  <p className="leading-relaxed">{submitStatus.message}</p>
                </div>
              )}
            </form>

            {/* Bottom 2-Column Address & Network Block */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-8 border-t border-neutral-300 text-xs font-mono">
              {/* Column 1: Headquarters */}
              <div>
                <span className="text-[10px] uppercase tracking-widest text-[#581C24] block mb-2.5 font-bold">
                  HEADQUARTERS // DIRECT
                </span>
                <div className="space-y-1 text-[#52525B]">
                  <p className="text-[#09090B] font-medium">Guadalajara, Jalisco, MX</p>
                  <a
                    href="mailto:lazaroEstrada99@outlook.com"
                    className="block hover:text-black transition-colors"
                  >
                    lazaroEstrada99@outlook.com
                  </a>
                  <a
                    href="tel:+523322396113"
                    className="block hover:text-black transition-colors"
                  >
                    +52 33 2239 6113
                  </a>
                </div>
              </div>

              {/* Column 2: Digital Presence & Turnaround */}
              <div>
                <span className="text-[10px] uppercase tracking-widest text-[#581C24] block mb-2.5 font-bold">
                  DIGITAL NETWORK // TIME
                </span>
                <div className="space-y-1 text-[#52525B]">
                  <a
                    href="https://github.com/FerchoChainz"
                    target="_blank"
                    rel="noreferrer"
                    className="block hover:text-black transition-colors"
                  >
                    GitHub: <span className="text-[#09090B] font-medium">@FerchoChainz</span>
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noreferrer"
                    className="block hover:text-black transition-colors"
                  >
                    LinkedIn: <span className="text-[#09090B] font-medium">Lázaro Estrada</span>
                  </a>
                  <p className="text-[11px] text-[#71717A]">
                    Turnaround: <span className="text-[#581C24] font-semibold">&lt; 24h</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
 
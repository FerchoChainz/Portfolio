import { Menu, X, Terminal } from "lucide-react";
import { useEffect, useState } from "react";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 right-0 left-0 transition-all duration-300 z-50 ${
        isScrolled
          ? "bg-[#141517]/90 backdrop-blur-md py-3 border-b border-[#837062]/20 shadow-xl"
          : "bg-transparent py-5"
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl flex items-center justify-between">
        {/* Monogram Brand */}
        <a
          href="#"
          className="flex items-center gap-2 group font-mono text-sm tracking-wider text-[#F5EFEB] hover:text-[#C5B2A4] transition-colors"
        >
          <div className="w-8 h-8 rounded-lg bg-[#3E1A1C]/50 border border-[#837062]/40 flex items-center justify-center text-[#C5B2A4] group-hover:border-[#C5B2A4] transition-colors">
            <Terminal className="w-4 h-4" />
          </div>
          <span className="font-bold tracking-widest text-[#F5EFEB]">LESTRADA</span>
          <span className="text-[10px] text-[#837062] font-normal hidden sm:inline">// DEV</span>
        </a>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-1">
          <div className="bg-[#1A1B1D]/80 backdrop-blur-md rounded-full px-2 py-1 flex items-center gap-1 border border-[#837062]/25 shadow-inner">
            {navLinks.map((link, index) => (
              <a
                href={link.href}
                key={index}
                className="px-4 py-1.5 text-xs font-mono text-[#9A8B80] hover:text-[#F5EFEB] rounded-full hover:bg-white/[0.04] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#3E1A1C] hover:bg-[#582428] text-xs font-mono text-[#F5EFEB] border border-[#837062]/30 transition-all shadow-sm"
          >
            <span>GET IN TOUCH</span>
          </a>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          className="md:hidden p-2 text-[#F5EFEB] hover:text-[#C5B2A4] transition-colors cursor-pointer"
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#141517]/95 backdrop-blur-xl border-b border-[#837062]/25 animate-fade-in">
          <div className="container mx-auto px-6 py-6 flex flex-col gap-3">
            {navLinks.map((link, index) => (
              <a
                href={link.href}
                key={index}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-sm font-mono text-[#9A8B80] hover:text-[#F5EFEB] py-2 border-b border-[#837062]/10"
              >
                {link.label}
              </a>
            ))}

            <a
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="mt-2 text-center py-2.5 rounded-xl bg-[#3E1A1C] text-xs font-mono text-[#F5EFEB] border border-[#837062]/30"
            >
              GET IN TOUCH
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

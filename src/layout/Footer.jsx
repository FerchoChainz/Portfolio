import { FiGithub, FiLinkedin } from "react-icons/fi";
import { Terminal } from "lucide-react";

const socialLinks = [
  { icon: FiGithub, href: "https://github.com/FerchoChainz", label: "GitHub" },
  { icon: FiLinkedin, href: "https://linkedin.com", label: "LinkedIn" },
];

const footerLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-14 bg-white text-[#141517] border-t border-zinc-200 relative z-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          
          {/* Logo & Brand Info */}
          <div className="text-center md:text-left space-y-2">
            <a
              href="#"
              className="inline-flex items-center gap-2 font-mono text-sm tracking-wider text-[#141517] hover:text-[#3E1A1C] transition-colors"
            >
              <div className="w-7 h-7 rounded-md bg-zinc-100 border border-zinc-300 flex items-center justify-center text-zinc-900 shadow-sm">
                <Terminal className="w-3.5 h-3.5" />
              </div>
              <span className="font-bold tracking-widest text-[#141517]">LESTRADA</span>
              <span className="text-[10px] text-zinc-500 font-normal">// SOFTWARE ENGINEER</span>
            </a>

            <p className="text-xs font-mono text-zinc-600">
              © {currentYear} Lázaro Estrada. Built with architectural discipline & clean code.
            </p>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-wrap justify-center gap-6 text-xs font-mono">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-zinc-600 hover:text-[#141517] transition-colors uppercase tracking-wider font-medium"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Social Links */}
          <div className="flex items-center gap-2.5">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                aria-label={social.label}
                className="p-2.5 rounded-md border border-zinc-300 text-zinc-700 hover:text-black hover:border-zinc-800 hover:bg-zinc-100 transition-all shadow-sm"
              >
                <social.icon className="w-4 h-4" />
              </a>
            ))}
          </div>

        </div>
      </div>
    </footer>
  );
};

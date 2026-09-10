import { FiGithub, FiLinkedin } from "react-icons/fi";

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
    <footer className="py-12 bg-[#141517] text-[#F5EFEB] border-t border-[#837062]/20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo & Copyright */}
          <div className="text-center md:text-left">
            <a href="#" className="text-xl font-bold tracking-tight font-serif text-[#F5EFEB]">
              LE<span className="text-[#C5B2A4]">.</span>
            </a>
            <p className="text-xs font-mono text-[#9A8B80] mt-2">
              © {currentYear} Lázaro Estrada. Engineered with architectural precision.
            </p>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap justify-center gap-6 text-xs font-mono">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[#9A8B80] hover:text-[#C5B2A4] transition-colors uppercase tracking-wider"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                aria-label={social.label}
                className="p-2.5 rounded-xl border border-[#837062]/30 text-[#9A8B80] hover:text-[#F5EFEB] hover:border-[#C5B2A4] hover:bg-[#3E1A1C]/40 transition-all"
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
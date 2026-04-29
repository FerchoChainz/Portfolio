import { ArrowRight, ChevronDown, Download } from "lucide-react";
import { Button } from "../components/Button";
import { AnimatedBorderButton } from "../components/AnimatedBorderButton";
import { FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";

export const Hero = () => {
  const skills = [
    "React",
    "Angular",
    "Laravel",
    "Node.js",
    "Express",
    "MongoDB",
    "MySQL",
    "Git",
    "Figma",
    "SCSS",
    "Tailwind CSS",
    "Docker",
    "Go",
    "Python",
    "TypeScript",
    "JavaScript",
    "PHP",
  ];

  const socialLinks = [
    {
      id: 1,
      href: "https://github.com/tu-usuario",
      Icon: FiGithub,
      label: "GitHub",
    },
    {
      id: 2,
      href: "https://linkedin.com/in/tu-perfil",
      Icon: FiLinkedin,
      label: "LinkedIn",
    },
    {
      id: 3,
      href: "https://twitter.com/tu-cuenta",
      Icon: FiTwitter,
      label: "Twitter",
    },
  ];

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* bg image */}
      <div className="absolute inset-0">
        <img
          src="public/hero-bg.jpg"
          alt="hero-img"
          className="w-full h-full object-cover opacity-40"
        />

        <div className="absolut inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background"></div>
      </div>

      {/* Green dots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            className="absolute w-1.5 h-1.5 opacity-60 rounded-2xl"
            style={{
              backgroundColor: "#20B2A6",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `slow-drift ${15 + Math.random() * 20}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          ></div>
        ))}
      </div>

      {/* Hero Content */}
      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* left column -- Text content  */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                Software Engineer - Jr Full Stack Developer
              </span>
            </div>

            {/* headline hero section */}
            <div className="space-y-4">
              <h1 className="text-5xl md: text-6xl lg:text-7xl font-bold leading-tight animate-fade-in aniamte-delay-100 ">
                Crafting <span className="text-primary glow-text">Digital</span>
                <br />
                Experiences with
                <br />
                <span className="font-serif italic font-normal text-white">
                  precision.
                </span>
              </h1>

              <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animate-delay-200">
                Hi, I'm Lazaro Estrada, a passionate Jr Full Stack Developer
                dedicated to crafting seamless digital experiences. With a
                strong foundation in both front-end and back-end technologies, I
                specialize in creating responsive and user-friendly web
                applications. My journey in software engineering is driven by a
                commitment to continuous learning and a desire to solve complex
                problems with elegant solutions. Let's build something amazing
                together!
              </p>
            </div>

            {/* ctas */}
            <div className="flex flex-wrap gap-4 animate-fade-in animate-delay-300">
              <Button size="lg">
                Contact Me <ArrowRight className="w-5 h-5" />
              </Button>
              <AnimatedBorderButton />
            </div>

            {/* Social media links */}
            <div className="flex items-center gap-4 animate-fade-in animate-delay-400">
              <span className="text-sm text-muted-foreground">Follow me:</span>
              {socialLinks.map(({ id, href, Icon, label }) => (
                <a
                  key={id}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* right column -- Profile image */}
          <div className="relative animate-fade-in animate-delay-300">
            {/* profile image */}
            <div className="relative max-w-md mx-auto">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/10 blur-2xl animate-pulse " />

              <div className="relative glass rounded-3xl p-2 glow-border">
                <img
                  src="/profile-pic.png"
                  alt="Lazaro Estrada"
                  className="w-full aspect-[4/5] object-cover rounded-2xl"
                />

                {/* floating badge */}
                <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 animate-float">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-sm font-medium">
                      Avalabile for work
                    </span>
                  </div>
                </div>

                {/* stats badge */}
                <div className="absolute -top-4 -left-4 glass rounded-xl px-4 py-3 animate-float animate-delay-500">
                  <div className="text-xl font-bold text-primary">1+</div>
                  <div className="text-xs text-muted-foreground">
                    Years of Experience
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Skills cloud */}
        <div className="mt-20 animate-fade-in animate-delay-500">
          <p className="text-sm text-muted-foreground mb-6 text-center">
            Tech Stack i work with:
          </p>
          <div className="relative overflow-hidden">
            <div className="flex animate-marquee">
              {[...skills, ...skills].map((skill, index) => (
                <div key={index} className="flex-shrink-0 px-8 py-4">
                  <span className="text-xl font-semibold text-muted-foreground/50 hover:text-muted-foreground">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in animate-delay-600">
        <a href="#about" className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary">
            <span className="text-xs uppercase tracking-wide">Scroll</span>
            <ChevronDown className="w-6 h-6 animate-bounce"/>
        </a>     
      </div>
    </section>
  );
};

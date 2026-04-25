import { ArrowRight, Download } from "lucide-react";
import { Button } from "../components/Button";
import { AnimatedBorderButton } from "../components/AnimatedBorderButton";

export const Hero = () => {
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
            className="absolute w-1.5 h-1.5 opacity-60"
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
            <div>
              <Button size="lg">
                Contact Me <ArrowRight className="w-5 h-5" />
              </Button> 

              <AnimatedBorderButton/> 
            </div>
          </div>
          {/* right column -- Profile image */}
        </div>
      </div>
    </section>
  );
};

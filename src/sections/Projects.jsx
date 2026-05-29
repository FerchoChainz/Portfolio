import { ArrowUpRight, Timer } from "lucide-react";
import { AnimatedBorderButton } from "../components/AnimatedBorderButton";
import { useState, useEffect } from "react";

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 10);

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance < 0) {
        clearInterval(timer);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex gap-4 justify-center items-center py-4">
      {[
        { label: "D", value: timeLeft.days },
        { label: "H", value: timeLeft.hours },
        { label: "M", value: timeLeft.minutes },
        { label: "S", value: timeLeft.seconds },
      ].map((unit, i) => (
        <div key={i} className="flex flex-col items-center">
          <div className="glass w-14 h-14 flex items-center justify-center rounded-lg border border-primary/20">
            <span className="text-2xl font-bold text-primary">{String(unit.value).padStart(2, '0')}</span>
          </div>
          <span className="text-[10px] text-muted-foreground mt-1 uppercase font-medium">{unit.label}</span>
        </div>
      ))}
    </div>
  );
};

export const Projects = () => {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* bg  */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      <div className="container mx-auto px-6 relative z-10">
        {/* section header */}

        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in ">
            Upcoming Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animate-dealy-100">
            Something 
            <span className="font-serif italic font-normal text-white">
              {" "}
              big is coming
            </span>
          </h2>

          <p className="text-muted-foreground animate-fade-in animate-delay-200">
            I am currently developing a new series of high-impact projects. 
            The deployment process is underway. Stay tuned for the official launch!
          </p>
        </div>

        {/* projects grid - centered single card */}
        <div className="max-w-2xl mx-auto">
          {/* Coming Soon Card */}
          <div
            className="group glass rounded-3xl overflow-hidden animate-fade-in relative border border-primary/10 shadow-2xl shadow-primary/5"
          >
            <div className="relative overflow-hidden aspect-[16/10] flex flex-col items-center justify-center bg-primary/5">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent opacity-50" />
              <Timer className="w-16 h-16 text-primary mb-6 animate-pulse" />
              <CountdownTimer />
            </div>

            <div className="p-8 space-y-6 text-center">
              <div className="flex items-center justify-center gap-3">
                <span className="flex h-3 w-3 rounded-full bg-primary animate-ping" />
                <h3 className="text-2xl font-semibold text-primary">System Deployment in Progress</h3>
              </div>

              <p className="text-muted-foreground text-lg leading-relaxed">
                New portfolio projects are being prepared for release. 
                I'm optimizing performance and ensuring every pixel is perfect.
              </p>

              <div className="flex flex-wrap justify-center gap-3">
                {["Full Stack", "Performance", "Clean Code", "Innovation"].map((tag, idx) => (
                  <span key={idx} className="px-5 py-2 rounded-full bg-primary/10 text-sm font-medium border border-primary/20 text-primary">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* View All Projects Button */}
        <div className="text-center mt-16 animate-fade-in animate-duration-300 ">
          <AnimatedBorderButton href="https://github.com/FerchoChainz" target="_blank">
            Follow Progress on GitHub <ArrowUpRight className="w-5 h-5" />
          </AnimatedBorderButton>
        </div>
      </div>
    </section>
  );
};

const experiences = [
  {
    period: "2021 - Present",
    role: "Backend Developer",
    company: "Company 2",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate.",
    technologies: ["NodeJS", "Express", "MongoDB", "Docker"],
    current: true,
  },

  {
    period: "2020 - 2021",
    role: "Backend Developer jr",
    company: "Company 1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate.",
    technologies: ["NodeJS", "Express", "MongoDB"],
    current: false,
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="py-32 relative overflow-hidden">
      {/* Background Shape */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />

      <div className="container mx-auto px-6 relative z-10">
        {/* section header */}
        <div className="max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Career Journey
          </span>
          <h2
            className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animate-delay-100
                    text-secondary-foreground"
          >
            Exprience that{" "}
            <span className="font-serif italic text-white"> speak values.</span>
          </h2>

          <p className="text-muted-foreground animate-fade-in animate-delay-200">
            A timeline of my professional experience, showcasing the roles I've
            held, the companies I've worked for, and the technologies I've
            utilized. Each position has contributed to my growth as a software
            developer and has allowed me to build, improve, and solve challenges
            in the ever-evolving world of software development.
          </p>
        </div>

        {/* timeline */}
        <div className="relative">
          <div className="timeline-glow absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/70 via-primary/30 to-transparent md:-trnaslate-x-1/2 shadow-[0_0_25px_rgba(32,178,166,0/8)]" />

          {/* experience items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="relative grid md:grid-cols-2 gap-8 animate-fade-in"
                style={{ animationDelay: `${(index + 1) * 150}ms` }}
              >
                {/* timelien dot */}
                <div className="absolute left-0 md:left-1/2 top-0 w-3 h-3 bg-primary rounded-full -translate-x-1/2 ring-1">
                    {exp.current && (<span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75"/>)}
                </div>

                {/* contet */}
                <div
                  className={`pl-8 md:pl-0 ${
                    index % 2 === 0
                      ? "md:pr-16 md:text-right"
                      : "md:col-start-2 md:pl-16  "
                  }`}
                >
                  <div
                    className={`glass p-6 rounded-2xl border-primary/30 hover:border-primary/50 transition-all duration-300}`}
                  >
                    <span className="text-sm text-primary font-medium">
                      {exp.period}
                    </span>
                    <h3 className="text-xl font-semibold mt-2">{exp.role}</h3>
                    <p className="text-muted-foreground">{exp.company}</p>
                    <p className="text-sm text-muted-foreground mt-4">
                      {exp.description}
                    </p>
                    <div
                      className={`flex flex-wrap gap-2 mt-4 ${
                        index % 2 === 0 ? "md:justify-end" : ""
                      }`}
                    >
                      {exp.technologies.map((tech, idx) => (
                        <span key={idx} className="px-3 py-1 bg-surface text-sm rounded-full text-muted-foreground">{tech}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

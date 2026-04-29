import { Code2, Lightbulb, Rocket, Users } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description:
      "Write clean and maintainable code that follows industry best practices, ensuring that our projects are scalable and easy to understand.",
  },

  {
    icon: Rocket,
    title: "Performance",
    description:
      "Optimize code for performance, ensuring that our applications run smoothly and efficiently, providing a seamless user experience.",
  },

  {
    icon: Users,
    title: "Collaboration",
    description:
      "Foster a collaborative environment where team members can share ideas, provide feedback, and work together to achieve common goals.",
  },

  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "Encourage creativity and innovation, constantly seeking new ways to solve problems and improve our products and processes.",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-32 overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* left column */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                About Me
                </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-delay-100 text-secondary-foreground">
              Building, improving and solving.
              <span className="font-serif italic font-normal text-white"> 
                {" "}One project at a time</span>
            </h2>
            
            {/* text about me */}
            <div className="space-y-4 text-muted-foreground animate-fade-in animate-dealy-200">
                <p>
                I am a passionate software developer with a strong background in building and improving applications. With a focus on clean code, performance, collaboration, and innovation, I strive to create impactful solutions that solve real-world problems. I am dedicated to continuous learning and growth, always seeking new opportunities to expand my skills and contribute to meaningful projects.
                </p>

                <p>
                With a commitment to excellence and a drive for innovation, I am excited to continue building, improving, and solving challenges in the ever-evolving world of software development.
                </p>

                <p>
                I am eager to connect with like-minded professionals and explore new opportunities to collaborate on exciting projects. Let's build something amazing together!
                </p>
            </div>

            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animate-delay-300">
                <p className="text-lg font-medium italic text-foreground">
                    "My mission as a software engineer is to continue learning and using modern tools, such as artificial intelligence, to provide solutions, contribute to the teams I’m part of, and make a difference."
                </p>
            </div>

            {/* Right column */}
            <div className="grid md:grid-cols-2 gap-6">
                {highlights.map((item, index) => (
                    <div key={index} className="glass rounded-2xl p-6 glow-border animate-fade-in" style={{animationDelay: `${(index + 1) * 200}ms`}}>

                        <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                            <item.icon className="w-6 h-6 text-primary" />
                        </div>

                        <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                        <p className="text-muted-foreground text-sm">{item.description}</p>
                    </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

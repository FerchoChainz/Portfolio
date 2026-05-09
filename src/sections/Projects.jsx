import { ArrowRight, ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";

const projects = [
  {
    title: "Project 1",
    description: "Description of project 1",
    image: "/projects/tabla_pagina_procesada_1.png",
    tags: ["React", "Node.js"],
    link: "#",
    github: "#",
  },
  {
    title: "Project 2",
    description: "Description of project 2",
    image: "/projects/tabla_pagina_procesada_1.png",
    tags: ["JavaScript", "Python"],
    link: "#",
    github: "#",
  },
  {
    title: "Project 3",
    description: "Description of project 3",
    image: "/projects/tabla_pagina_procesada_1.png",
    tags: ["HTML", "CSS"],
    link: "#",
    github: "#",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* bg  */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      <div className="container mx-auto px-6 relative z-10">
        {/* section header */}

        <div className="text-center mx-auto max-w-3xl mb16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in ">
            Featured Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animate-dealy-100">
            Projects that
            <span className="font-serif italic font-normal text-white">
              {" "}
              make an impact
            </span>
          </h2>

          <p className="text-muted-foreground animate-fade-in animate-delay-200">
            A selection of projects that demonstrate my skills, creativity, and
            dedication to building impactful solutions. Each project reflects my
            commitment to excellence and my passion for creating meaningful
            applications that solve real-world problems.
          </p>
        </div>

        {/* projects grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
              style={{ animationDelay: `${(index + 1) * 100}ms` }}
            >
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform  duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-60" />

                {/* overlay links */}

                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity-300">
                  <a
                    href={project.link}
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <ArrowRight className="w-5 h-5" />
                  </a>

                  <a
                    href={project.github}
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <FaGithub className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold group-hover:text-primary duration-300">{project.title}</h3>
                  <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:translate-y-1 transition-all"/> 
                </div>

                <p className="text-muted-foreground text-sm">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, idx) => (
                  <span key={idx} className="px-4 py-1.5 rounded-full bg-surface text-sm font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300">
                    {tag}
                   </span>
                ))} 
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* View All Projects Button */}
        <div className="text-center mt-12 animate-fade-in animate-duration-300 ">
          <AnimatedBorderButton>
            View All Projects <ArrowUpRight className="w-5 h-5" />
          </AnimatedBorderButton>
        </div>
      </div>
    </section>
  );
};

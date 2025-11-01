import { useState } from "react";
import { ExternalLink, Github, Sparkles, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

// ✅ Correct image imports
import eventImg from "../assets/event.png";
import edubridgeImg from "../assets/edubridge.png";

const projectsData = [
  {
    id: "01",
    title: "College Event Management System",
    description:
      "Web application for managing college events — includes event listings, registration, and admin dashboard.",
    technologies: ["HTML", "CSS", "JavaScript", "MySQL", "Bootstrap"],
    status: "Completed",
    gradient: "from-blue-500 to-cyan-500",
    image: eventImg,
    demoLink: "https://event-mng.vercel.app/",
    codeLink: "https://github.com/Shiv1108/event-mng",
  },
  {
    id: "02",
    title: "EduBridge AI",
    description:
      "AI tool that summarizes long notes and generates test questions using NLP to help students study efficiently.",
    technologies: ["Python", "NLP", "AI/ML"],
    status: "In Progress",
    gradient: "from-purple-500 to-pink-500",
    image: edubridgeImg,
    demoLink: "",
    codeLink: "",
  },
];

const Projects = () => {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 via-background to-secondary/30" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-mono mb-4">
            #<span className="text-gradient-primary">projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Building solutions that matter, one line of code at a time
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          {projectsData.map((project, index) => (
            <div
              key={index}
              className="relative group flex flex-col items-center"
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
            >
              {/* 🖼️ Preview Image — visible above card */}
              {hovered === index && (
                <img
                  src={project.image}
                  alt={project.title}
                  className="absolute -top-24 left-1/2 -translate-x-1/2 w-[420px] h-auto max-h-[260px] object-contain rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-500 shadow-xl border border-border/40 z-50 bg-background/90 p-2"
                />
              )}

              <Card
                className="overflow-hidden backdrop-blur-xl bg-card/60 border-border/50 hover-glow relative w-full"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className={`h-2 bg-gradient-to-r ${project.gradient}`} />

                <div className="p-6 lg:p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div
                      className={`text-6xl font-bold font-mono bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent opacity-20 group-hover:opacity-30 transition-opacity`}
                    >
                      {project.id}
                    </div>
                    <div className="flex items-center gap-2">
                      {project.status === "Completed" ? (
                        <span className="inline-flex items-center gap-1.5 text-xs font-mono px-3 py-1.5 bg-primary/20 text-primary rounded-full border border-primary/30">
                          <Sparkles size={12} />
                          {project.status}
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1.5 text-xs font-mono px-3 py-1.5 bg-accent/20 text-accent rounded-full border border-accent/30">
                          <Clock size={12} className="animate-pulse" />
                          {project.status}
                        </span>
                      )}
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold font-mono mb-4 text-foreground group-hover:text-gradient-primary transition-all">
                    {project.title}
                  </h3>

                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1.5 text-xs font-mono bg-muted/50 text-foreground rounded-lg border border-border/50 hover:border-primary/50 hover:bg-primary/5 transition-all"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3 pt-4 border-t border-border/50">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 font-mono border-primary/50 text-primary hover:bg-primary/10"
                      onClick={() => window.open(project.codeLink, "_blank")}
                    >
                      <Github className="mr-2 transition-transform" size={16} />
                      Code
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 font-mono border-accent/50 text-accent hover:bg-accent/10"
                      onClick={() => window.open(project.demoLink, "_blank")}
                    >
                      <ExternalLink
                        className="mr-2 transition-transform"
                        size={16}
                      />
                      visit
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

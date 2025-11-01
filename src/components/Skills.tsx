import { Code2, Database, GitBranch, Brain } from "lucide-react";
import { Card } from "@/components/ui/card";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming",
      icon: Code2,
      skills: [
        { name: "Python", icon: "🐍" },
        { name: "JavaScript", icon: "⚡" },
      ],
    },
    {
      title: "Web Development",
      icon: Code2,
      skills: [
        { name: "HTML", icon: "🌐" },
        { name: "CSS", icon: "🎨" },
        { name: "Bootstrap", icon: "🅱️" },
        { name: "Tailwind", icon: "🌊" },
      ],
    },
    {
      title: "Database",
      icon: Database,
      skills: [{ name: "MySQL", icon: "🗄️" }],
    },
    {
      title: "Version Control",
      icon: GitBranch,
      skills: [
        { name: "Git", icon: "📦" },
        { name: "GitHub", icon: "🐙" },
      ],
    },
    {
      title: "AI/ML",
      icon: Brain,
      skills: [{ name: "Learning AI/ML", icon: "🤖" }],
    },
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-card/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Skills</span>
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => (
            <Card
              key={category.title}
              className="card-glow p-6 bg-card border-border group"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                  <category.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>

              <div className="space-y-3">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center gap-3 p-3 bg-background/50 rounded-lg hover:bg-background/70 transition-colors"
                  >
                    <span className="text-2xl">{skill.icon}</span>
                    <span className="text-foreground font-medium">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
    
  );
};

export default Skills;


import { Download, Award, Target, Lightbulb, Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import resumeFile from "../assets/Shivank_Resume.pdf";
const About = () => {
  const highlights = [
    {
      icon: Code2,
      title: "Full-Stack Developer",
      description:
        "Building responsive web applications with modern technologies",
    },
    {
      icon: Lightbulb,
      title: "AI Enthusiast",
      description: "Exploring machine learning and intelligent systems",
    },
    {
      icon: Target,
      title: "Problem Solver",
      description: "Creating innovative solutions to real-world challenges",
    },
    {
      icon: Award,
      title: "Continuous Learner",
      description: "Always expanding knowledge in emerging technologies",
    },
  ];
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/30 to-background" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-[100px]" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-[120px]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block text-primary font-mono text-sm mb-4 px-4 py-2 bg-primary/10 rounded-full border border-primary/30">
            Get to know me
          </span>
          <h2 className="text-4xl md:text-5xl font-bold font-mono">
            #<span className="text-gradient-primary">about-me</span>
          </h2>
        </div>

        <div className="max-w-6xl mx-auto mb-16">
          {/* Main Content Card */}
          <Card className="p-8 md:p-12 backdrop-blur-xl bg-card/60 border-border/50 hover-glow">
            <div className="space-y-6 text-muted-foreground">
              <p className="text-lg leading-relaxed">
                I am{" "}
                <span className="text-primary font-semibold">
                  Shivank Tiwari
                </span>
                , an aspiring{" "}
                <span className="text-gradient-primary font-semibold">
                  AI / ML Engineer
                </span>
                . I have learned <span className="text-primary">Python</span>,
                and have experience building web pages using{" "}
                <span className="text-primary">
                  HTML, CSS, JavaScript, Bootstrap, and Tailwind
                </span>
                .
              </p>

              <p className="text-lg leading-relaxed">
                I know <span className="text-primary">Git & GitHub</span> and
                basic <span className="text-primary">SQL (MySQL)</span>.
                Currently, I am learning advanced{" "}
                <span className="text-gradient-primary font-semibold">
                  AI & machine learning
                </span>{" "}
                techniques.
              </p>

              <p className="text-lg leading-relaxed">
                I am a{" "}
                <span className="text-primary">
                  B.Tech student in Computer Science
                </span>{" "}
                at Vindhya Institute of Technology and Science, passionate about
                exploring the intersection of{" "}
                <span className="text-orange-300">
                  machine learning, artificial intelligence
                </span>{" "}
                and{" "}
                <span className="text-orange-300">real-world applications</span>
                .
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <Button
                size="lg"
                className="relative group bg-accent hover:bg-accent/90 text-accent-foreground font-mono overflow-hidden"
                onClick={() => {
                  const link = document.createElement("a");
                  link.href = resumeFile;
                  link.download = "Shivank_Resume.pdf";
                  link.click();
                }}
              >
                <span className="relative z-10 flex items-center">
                  <Download className="mr-2" size={20} />
                  Download Resume
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity bg-inherit" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary/50 text-primary hover:bg-primary/10 font-mono"
                asChild
              >
                <a href="#contact">Let's Connect</a>
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
export default About;

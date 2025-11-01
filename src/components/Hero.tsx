import { ArrowDown, Code, Database, Cpu, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import profileImg from "@/assets/profile.png";
const Hero = () => {
  const [text, setText] = useState("");
  const fullText = "Shivank Tiwari";
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index <= fullText.length) {
        setText(fullText.slice(0, index));
        index++;
      } else {
        setIsTypingComplete(true);
        clearInterval(typingInterval);
      }
    }, 100);
    return () => clearInterval(typingInterval);
  }, []);
  const floatingIcons = [
    {
      Icon: Code,
      delay: "0s",
      duration: "20s",
      left: "10%",
      top: "20%",
    },
    {
      Icon: Database,
      delay: "2s",
      duration: "25s",
      left: "80%",
      top: "30%",
    },
    {
      Icon: Cpu,
      delay: "4s",
      duration: "22s",
      left: "15%",
      top: "70%",
    },
    {
      Icon: Sparkles,
      delay: "1s",
      duration: "18s",
      left: "85%",
      top: "60%",
    },
  ];
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background"
    >
      {/* Animated Gradient Mesh Background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary/30 rounded-full blur-[120px] animate-pulse" />
        <div
          className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-accent/20 rounded-full blur-[120px] animate-pulse"
          style={{
            animationDelay: "1s",
          }}
        />
        <div
          className="absolute top-1/2 left-1/2 w-[400px] h-[400px] bg-primary/20 rounded-full blur-[100px] animate-pulse"
          style={{
            animationDelay: "2s",
          }}
        />
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:64px_64px]" />

      {/* Floating Particles */}
      {floatingIcons.map(({ Icon, delay, duration, left, top }, index) => (
        <div
          key={index}
          className="absolute opacity-20"
          style={{
            left,
            top,
            animation: `float ${duration} ease-in-out infinite`,
            animationDelay: delay,
          }}
        >
          <Icon size={48} className="text-primary" />
        </div>
      ))}

      {/* Floating geometric shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute w-64 h-64 border-2 border-primary/20 rounded-full top-10 -left-20 animate-float"
          style={{
            animationDelay: "0s",
          }}
        />
        <div
          className="absolute w-96 h-96 border-2 border-accent/20 rotate-45 bottom-20 -right-32"
          style={{
            animation: "float 25s ease-in-out infinite",
            animationDelay: "3s",
          }}
        />
        <div
          className="absolute w-48 h-48 border-2 border-primary/30 rounded-lg top-1/3 right-10 rotate-12"
          style={{
            animation: "float 20s ease-in-out infinite",
            animationDelay: "1.5s",
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Glassmorphic Card */}
          <div className="relative backdrop-blur-xl bg-card/40 border border-border/50 rounded-3xl p-8 md:p-12 shadow-2xl">
            {/* Glow effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl blur-xl opacity-50" />

            <div className="relative">
              <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
                {/* Profile Image Section */}
                <div className="relative flex-shrink-0">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-full blur-2xl opacity-50 animate-pulse" />
                  <div className="relative w-48 h-48 lg:w-56 lg:h-56">
                    <div
                      className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-full animate-spin-slow"
                      style={{
                        animationDuration: "10s",
                      }}
                    />
                    <img
                      src={profileImg}
                      alt="Shivank Tiwari"
                      className="absolute inset-2 rounded-full object-cover border-4 border-background"
                    />
                  </div>
                </div>

                {/* Content Section */}
                <div className="flex-1 text-center lg:text-left">
                  <div className="mb-4">
                    <span className="inline-flex items-center gap-2 text-primary font-mono text-sm px-4 py-2 bg-primary/10 rounded-full border border-primary/30">
                      <Sparkles size={16} className="animate-pulse" />
                      &lt;Hello World /&gt;
                    </span>
                  </div>

                  <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-mono mb-4">
                    Hi, I'm{" "}
                    <span className="relative inline-block">
                      <span className="text-gradient-primary">
                        {text}
                        {!isTypingComplete && (
                          <span className="animate-pulse">|</span>
                        )}
                      </span>
                      <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-primary to-accent rounded-full" />
                    </span>
                  </h1>

                  <div className="space-y-2 mb-6">
                    <p className="text-xl md:text-2xl text-foreground font-mono flex items-center justify-center lg:justify-start gap-2 flex-wrap">
                      Aspiring
                      <span className="inline-flex items-center gap-2 px-3 py-1 bg-primary/20 text-primary rounded-lg border border-primary/30">
                        <Cpu size={20} />
                        AI & ML
                      </span>
                      Engineer
                    </p>

                    <p className="text-base md:text-lg text-muted-foreground">
                      Exploring intelligence through code and data
                    </p>
                  </div>
                </div>
              </div>

              {/* Tech Stack Tags */}
              <div className="mt-8 pt-8 border-t border-border/50">
                <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                  {["Python", "JavaScript", "AI/ML", "React", "MySQL"].map(
                    (tech) => (
                      <span
                        key={tech}
                        className="px-4 py-2 text-sm font-mono bg-muted/50 text-foreground rounded-lg border border-border/50 hover:border-primary/50 hover:bg-primary/5 transition-all cursor-default backdrop-blur-sm"
                      >
                        {tech}
                      </span>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
    </section>
  );
};
export default Hero;

import { Github, Linkedin, Mail, Heart, ArrowUp, Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";
const Footer = () => {
  const currentYear = new Date().getFullYear();
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
  return <footer className="relative overflow-hidden bg-gradient-to-b from-secondary/50 to-background border-t border-border/50">
      {/* Background Effect */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:64px_64px]" />
      
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand Section */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Code2 className="text-primary" size={24} />
                <span className="text-xl font-mono font-bold text-gradient-primary">&lt;Shivank/&gt;</span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Aspiring AI/ML Engineer building innovative solutions with modern technologies.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-sm font-mono font-bold mb-4 text-foreground">Quick Links</h4>
              <div className="space-y-2">
                {["About", "Skills", "Projects", "Contact"].map(link => <a key={link} href={`#${link.toLowerCase()}`} className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link}
                  </a>)}
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-sm font-mono font-bold mb-4 text-foreground">Connect</h4>
              <div className="flex flex-col gap-3">
                <a href="https://github.com/Shiv1108" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                  <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Github size={16} />
                  </div>
                  <span>Shiv1108</span>
                </a>
                <a href="https://linkedin.com/in/shivank-tiwari11" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                  <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Linkedin size={16} />
                  </div>
                  <span>shivank-tiwari11</span>
                </a>
                <a href="mailto:tiwarishiv1926@gmail.com" className="group flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                  <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Mail size={16} />
                  </div>
                  <span>tiwarishiv1926@gmail.com</span>
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground font-mono text-center md:text-left">
              &lt;Built with <Heart className="inline w-4 h-4 text-accent animate-pulse" /> by Shivank Tiwari /&gt;
              <span className="block md:inline md:ml-2">© {currentYear} All rights reserved.</span>
            </p>

            <Button onClick={scrollToTop} size="sm" variant="outline" className="border-primary/50 text-primary hover:bg-primary/10 font-mono">
              <ArrowUp size={16} className="mr-2" />
              Back to Top
            </Button>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;
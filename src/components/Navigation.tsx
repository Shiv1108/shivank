import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import resumeFile from "../assets/Shivank_Resume.pdf"; // <-- resume file path

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  // 🟡 Scroll effect
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 🟢 Click outside to close menu
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("touchstart", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [isMenuOpen]);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-lg border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a
            href="#home"
            className="text-xl font-mono font-bold text-gradient-primary"
          >
            &lt;Shivank/&gt;
          </a>

          {/* Three-dot menu button */}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white hover:text-orange-400"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>

        {/* Dropdown Menu */}
        {isMenuOpen && (
          <div
            ref={menuRef}
            className="absolute right-4 mt-2 w-56 rounded-xl bg-black/90 backdrop-blur-md border border-gray-700 shadow-lg p-4 animate-fade-in"
          >
            <div className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-white/80 hover:text-orange-400 text-sm font-medium transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}

              {/* Social Icons */}
              <div className="flex justify-center space-x-4 pt-3 border-t border-gray-700">
                <a
                  href="https://linkedin.com/in/shivank-tiwari11"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-500 text-white/80"
                >
                  <FaLinkedin size={18} />
                </a>

                <a
                  href="https://github.com/Shiv1108"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-400 text-white/80"
                >
                  <FaGithub size={18} />
                </a>

                <a
                  href="https://instagram.com/_.shiv_695._"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-pink-500 text-white/80"
                >
                  <FaInstagram size={18} />
                </a>
              </div>

              {/* Resume Button */}
              <Button
                className="bg-orange-500 hover:bg-orange-600 text-white mt-3 w-full font-semibold"
                onClick={() => {
                  const link = document.createElement("a");
                  link.href = resumeFile;
                  link.download = "Shivank_Resume.pdf";
                  link.click();
                }}
              >
                Download Resume
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;

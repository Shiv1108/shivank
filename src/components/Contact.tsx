import { Mail, Linkedin, Github, Send, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { toast } from "sonner";
import emailjs from "emailjs-com";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs
      .send(
        "service_280vkvu", // ← EmailJS service ID
        "template_e7qwzxd", // ← EmailJS template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        "mEfgS0eCSGjUAi9n8" // ← EmailJS public key
      )
      .then(
        () => {
          toast.success("Message sent successfully!", {
            description: "I'll get back to you soon 🚀",
          });
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          toast.error("Failed to send message!", {
            description: error.text,
          });
        }
      );
  };

  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: "tiwarishiv1926@gmail.com",
      href: "mailto:tiwarishiv1926@gmail.com",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "shivank-tiwari11",
      href: "https://linkedin.com/in/shivank-tiwari11",
      gradient: "from-blue-600 to-blue-400",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "Shiv1108",
      href: "https://github.com/Shiv1108",
      gradient: "from-gray-700 to-gray-500",
    },
  ];

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 text-primary font-mono text-sm mb-4 px-4 py-2 bg-primary/10 rounded-full border border-primary/30">
            <MessageSquare size={16} className="animate-pulse" />
            Let's Connect
          </span>
          <h2 className="text-4xl md:text-5xl font-bold font-mono mb-4">
            #<span className="text-gradient-primary">contact me</span>
          </h2>
        </div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <Card className="p-6 backdrop-blur-xl bg-card/60 border-border/50">
              <div className="space-y-3">
                {contactMethods.map((method, index) => {
                  const Icon = method.icon;
                  return (
                    <a
                      key={index}
                      href={method.href}
                      target={
                        method.href.startsWith("http") ? "_blank" : undefined
                      }
                      rel="noopener noreferrer"
                      className="flex items-center p-4 bg-background/50 border border-border/50 rounded-xl hover-glow group"
                    >
                      <div
                        className={`w-11 h-11 bg-gradient-to-br ${method.gradient} rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform`}
                      >
                        <Icon className="text-white" size={20} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs text-muted-foreground mb-0.5">
                          {method.label}
                        </p>
                        <p className="font-mono text-sm text-foreground truncate group-hover:text-primary transition-colors">
                          {method.value}
                        </p>
                      </div>
                    </a>
                  );
                })}
              </div>
            </Card>
          </div>

          <div className="lg:col-span-3">
            <Card className="p-6 lg:p-8 backdrop-blur-xl bg-card/60 border-border/50">
              <h3 className="text-xl font-bold font-mono mb-6 flex items-center gap-2">
                <Send className="text-primary" size={20} />
                Send a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-muted-foreground mb-2 block">
                      Name
                    </label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your Name"
                      required
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-muted-foreground mb-2 block">
                      Email
                    </label>
                    <Input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Your Email"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-muted-foreground mb-2 block">
                    Message
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Leave a message !"
                    required
                    rows={6}
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full relative group bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white font-mono overflow-hidden"
                >
                  <span className="relative z-10 flex items-center justify-center">
                    <Send className="mr-2" size={18} />
                    Send Message
                  </span>
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

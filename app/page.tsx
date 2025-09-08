"use client";

import { useEffect, useState } from "react";
import { CONTENT } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ThemeToggle } from "@/components/theme-toggle";
import { Github, Linkedin, Mail, MapPin, ExternalLink, Terminal, Code, Server, Database, Wrench, Twitter, Instagram, PenTool, Menu, X } from "lucide-react";
import Image from "next/image";

export default function PortfolioPage() {
  const [terminalText, setTerminalText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [preloaderText, setPreloaderText] = useState("");

  useEffect(() => {
    // Preloader sequence: "G" -> "GD" -> reveal
    setPreloaderText("G");
    const step1 = setTimeout(() => setPreloaderText("GD"), 700);
    const end = setTimeout(() => setIsLoading(false), 1600);
    return () => { clearTimeout(step1); clearTimeout(end); };
  }, []);

  useEffect(() => {
    // Rotating terminal typing animation
    const lines = [
      "> Hello, I'm Gaurav_",
      "> Linux & AWS enthusiast",
      "> Building full-stack web apps",
      "> Crafting scalable backend systems",
      "> Exploring DevOps & Cloud Computing",
    ];
    let lineIndex = 0;
    let charIndex = 0;
    let timeoutId: NodeJS.Timeout;

    const typeNext = () => {
      const current = lines[lineIndex];
      if (charIndex <= current.length) {
        setTerminalText(current.slice(0, charIndex));
        charIndex += 1;
        timeoutId = setTimeout(typeNext, 70);
      } else {
        // pause, then move to next line
        timeoutId = setTimeout(() => {
          lineIndex = (lineIndex + 1) % lines.length;
          charIndex = 0;
          setShowCursor(true);
          typeNext();
        }, 2000);
      }
    };

    setShowCursor(true);
    typeNext();
    return () => clearTimeout(timeoutId);
  }, []);

  useEffect(() => {
    // Smooth scrolling for navigation links
    const handleSmoothScroll = (e: Event) => {
      const target = e.target as HTMLAnchorElement;
      if (target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const targetId = target.getAttribute('href')?.substring(1);
        const targetElement = document.getElementById(targetId || '');
        if (targetElement) {
          const offsetTop = targetElement.offsetTop - 80;
          window.scrollTo({
            top: offsetTop,
            behavior: 'smooth',
          });
        }
      }
    };

    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    navLinks.forEach(link => {
      link.addEventListener('click', handleSmoothScroll);
    });

    return () => {
      navLinks.forEach(link => {
        link.removeEventListener('click', handleSmoothScroll);
      });
    };
  }, []);

  const skillIconByLabel = {
    "Cloud & DevOps": Server,
    Backend: Code,
    Frontend: Terminal,
    Tools: Wrench,
  } as const;

  return (
    <div className="min-h-screen gradient-bg bg-grain text-foreground font-body">
      {isLoading && (
        <div className="preloader">
          <div className="preloader__type">{preloaderText}<span className="preloader__cursor">_</span></div>
        </div>
      )}
      <div className="mesh-accent" aria-hidden="true" />
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-md border-b z-50">
        <div className="max-w-6xl mx-auto px-8 py-6">
          <div className="flex justify-between items-center">
            <div className="text-xl font-heading font-semibold brand-gradient">{CONTENT.personal.name}</div>
            <div className="flex items-center space-x-8">
              <div className="hidden md:flex space-x-10">
                <a href="#about" className="nav-link transition-colors duration-300 font-medium">About</a>
                <a href="#skills" className="nav-link transition-colors duration-300 font-medium">Skills</a>
                <a href="#projects" className="nav-link transition-colors duration-300 font-medium">Projects</a>
                <a href="#contact" className="nav-link transition-colors duration-300 font-medium">Contact</a>
              </div>
              <ThemeToggle />
              <button
                className="md:hidden inline-flex items-center justify-center rounded-lg p-2 border border-border hover:border-accent hover:text-accent transition-colors"
                aria-label="Open menu"
                aria-expanded={mobileOpen}
                onClick={() => setMobileOpen((v) => !v)}
              >
                {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
        {/* Mobile menu */}
        <div className={`md:hidden overflow-hidden border-t transition-[max-height,opacity] duration-300 ease-out ${mobileOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="px-8 py-4 space-y-3 bg-background/95">
            <a href="#about" className="block py-1 nav-link" onClick={() => setMobileOpen(false)}>About</a>
            <a href="#skills" className="block py-1 nav-link" onClick={() => setMobileOpen(false)}>Skills</a>
            <a href="#projects" className="block py-1 nav-link" onClick={() => setMobileOpen(false)}>Projects</a>
            <a href="#contact" className="block py-1 nav-link" onClick={() => setMobileOpen(false)}>Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-40 pb-32 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-12">
            {/* Terminal Animation */}
            <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 max-w-md mx-auto font-mono text-sm">
              <div className="flex items-center space-x-2 mb-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <div className="text-left">
                <span className="text-accent">{terminalText}</span>
                {showCursor && <span className="terminal-cursor">_</span>}
              </div>
            </div>

            {/* Hero Content */}
            <div className="space-y-8">
              <Avatar className="w-32 h-32 mx-auto mb-8 ring-4 ring-accent/20 animate-float">
                <AvatarFallback className="text-2xl font-heading">{CONTENT.personal.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
              </Avatar>
              
              <div className="space-y-6">
                <h1 className="text-6xl md:text-8xl font-heading font-bold tracking-tight">
                  Hi, I'm <span className="text-accent">Gaurav</span>
                </h1>
                <p className="text-2xl md:text-3xl text-muted-foreground font-light max-w-4xl mx-auto leading-relaxed">
                  AWS cloud enthusiast, Linux lover, and backend developer (Django). I craft scalable systems and build projects with purpose.
                </p>
              </div>

              <div className="flex justify-center space-x-6 pt-8">
                <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-white px-8 py-3 rounded-full shadow-soft-lg cta-hover">
                  <a href={CONTENT.social.github} target="_blank" rel="noopener noreferrer">
                    <Github className="w-5 h-5 mr-2" />
                    GitHub
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-2 border-primary/20 hover:border-accent hover:text-accent px-8 py-3 rounded-full shadow-soft hover:shadow-soft-lg hover:scale-[1.02] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]">
                  <a href={CONTENT.social.linkedin} target="_blank" rel="noopener noreferrer">
                    <Linkedin className="w-5 h-5 mr-2" />
                    LinkedIn
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-heading font-bold mb-6">About Me</h2>
            <div className="w-32 h-1 bg-gradient-to-r from-accent to-primary mx-auto rounded-full"></div>
          </div>
          <div className="max-w-5xl mx-auto">
            <Card className="border-0 shadow-soft-lg rounded-2xl overflow-hidden">
              <CardContent className="p-10 md:p-14">
                <div className="grid md:grid-cols-5 gap-10 items-center">
                  <div className="md:col-span-2 flex justify-center">
                    <div className="w-48 h-64 md:w-56 md:h-72 rounded-xl overflow-hidden shadow-soft-lg ring-4 ring-accent/10">
                      <Image src="/images/image-2.jpeg" alt={CONTENT.personal.name} width={448} height={640} className="w-full h-full object-cover" />
                    </div>
                  </div>
                  <div className="md:col-span-3">
                    <p className="text-xl leading-relaxed mb-8 text-muted-foreground">{CONTENT.personal.about}</p>
                    <div className="flex flex-wrap gap-4">
                      <div className="flex items-center space-x-4 bg-muted/50 px-6 py-3 rounded-full">
                        <Mail className="w-5 h-5 text-accent" />
                        <span className="text-lg font-medium">{CONTENT.personal.email}</span>
                      </div>
                      <div className="flex items-center space-x-4 bg-muted/50 px-6 py-3 rounded-full">
                        <MapPin className="w-5 h-5 text-accent" />
                        <span className="text-lg font-medium">{CONTENT.personal.location}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-32 px-8 bg-muted/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-heading font-bold mb-6">Skills & Technologies</h2>
            <div className="w-32 h-1 bg-gradient-to-r from-accent to-primary mx-auto rounded-full"></div>
          </div>
          <div className="grid gap-8 [grid-template-columns:repeat(auto-fit,minmax(250px,1fr))]">
            {Object.entries({
              "Cloud & DevOps": [...CONTENT.skills.cloud, ...CONTENT.skills.devops],
              Backend: CONTENT.skills.backend,
              Frontend: CONTENT.skills.frontend,
              Tools: CONTENT.skills.tools,
            }).map(([category, skills], index) => {
              const IconComponent = skillIconByLabel[category as keyof typeof skillIconByLabel];
              return (
                <Card key={category} className="group h-full border-0 shadow-soft card-hover rounded-2xl bg-card/50 backdrop-blur-sm flex flex-col">
                  <CardHeader className="text-center pb-6 pt-8">
                    <div className="w-16 h-16 mx-auto mb-4 bg-accent/10 rounded-2xl flex items-center justify-center group-hover:bg-accent/20 transition-colors duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]">
                      <IconComponent className="w-8 h-8 text-accent" />
                    </div>
                    <CardTitle className="text-2xl font-heading">{category}</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0 pb-8 flex-1">
                    <div className="flex flex-wrap gap-3 justify-center items-center">
                      {skills.map((skill) => (
                        <Badge key={skill} variant="secondary" className="text-sm px-4 py-2 rounded-full bg-accent/10 text-accent hover:bg-accent hover:text-white transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-[1.02]">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-heading font-bold mb-6">Featured Projects</h2>
            <div className="w-32 h-1 bg-gradient-to-r from-accent to-primary mx-auto rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-10">
            {CONTENT.projects.map((project, index) => (
              <Card key={project.id} className="group border-0 shadow-soft card-hover-strong rounded-2xl overflow-hidden bg-card/50 backdrop-blur-sm">
                {/* Thumbnail banner / mockup bar */}
                <div className="h-36 w-full bg-gradient-to-br from-accent/30 to-primary/20 relative overflow-hidden">
                  <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_20%_20%,white,transparent_35%),radial-gradient(circle_at_80%_30%,white,transparent_35%)]" />
                </div>
                <CardHeader className="pb-6 pt-6">
                  <CardTitle className="flex items-center justify-between text-2xl font-heading mb-4">
                    {project.title}
                    <ExternalLink className="w-6 h-6 opacity-0 group-hover:opacity-100 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] text-accent" />
                  </CardTitle>
                  <CardDescription className="text-lg leading-relaxed text-muted-foreground">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0 pb-8">
                  <div className="flex flex-wrap gap-3 mb-8">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-sm px-4 py-2 rounded-full border-accent/30 text-accent hover:bg-accent hover:text-white transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <Button asChild className={`w-full py-3 rounded-full shadow-soft cta-hover ${index % 2 === 0 ? 'bg-accent text-white hover:bg-accent/90' : 'bg-transparent border-2 border-accent text-accent hover:bg-accent hover:text-white'}`}>
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      View Project
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-8 bg-muted/20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-heading font-bold mb-6">Let's build something together</h2>
            <div className="w-32 h-1 bg-gradient-to-r from-accent to-primary mx-auto rounded-full mb-8"></div>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              I'm always interested in new opportunities and exciting projects.
            </p>
          </div>
          <Card className="border-0 shadow-soft-lg rounded-2xl overflow-hidden bg-card/50 backdrop-blur-sm">
            <CardContent className="p-16 text-center">
              <div className="space-y-10">
                <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-white px-12 py-4 rounded-full shadow-soft-lg cta-hover text-lg">
                  <a href={`mailto:${CONTENT.personal.email}`}>
                    <Mail className="w-6 h-6 mr-3" />
                    Send me an email
                  </a>
                </Button>
                <div className="flex justify-center space-x-6">
                  <Button asChild variant="outline" size="lg" className="border-2 border-primary/20 hover:border-accent hover:text-accent px-8 py-3 rounded-full shadow-soft hover:shadow-soft-lg hover:scale-[1.02] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]">
                    <a href={CONTENT.social.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-5 h-5 mr-2" />
                      GitHub
                    </a>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="border-2 border-primary/20 hover:border-accent hover:text-accent px-8 py-3 rounded-full shadow-soft hover:shadow-soft-lg hover:scale-[1.02] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]">
                    <a href={CONTENT.social.linkedin} target="_blank" rel="noopener noreferrer">
                      <Linkedin className="w-5 h-5 mr-2" />
                      LinkedIn
                    </a>
                  </Button>
                </div>
                <div className="flex justify-center gap-4 opacity-90">
                  <Button asChild variant="outline" size="sm" className="border-primary/20 hover:border-accent hover:text-accent rounded-full transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]">
                    <a href={CONTENT.social.x} target="_blank" rel="noopener noreferrer">
                      <Twitter className="w-4 h-4 mr-2" /> X
                    </a>
                  </Button>
                  <Button asChild variant="outline" size="sm" className="border-primary/20 hover:border-accent hover:text-accent rounded-full transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]">
                    <a href={CONTENT.social.hashnode} target="_blank" rel="noopener noreferrer">
                      <PenTool className="w-4 h-4 mr-2" /> Hashnode
                    </a>
                  </Button>
                  <Button asChild variant="outline" size="sm" className="border-primary/20 hover:border-accent hover:text-accent rounded-full transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]">
                    <a href={CONTENT.social.instagram} target="_blank" rel="noopener noreferrer">
                      <Instagram className="w-4 h-4 mr-2" /> Instagram
                    </a>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-8 border-t border-border/50">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8">
            <div className="w-16 h-16 mx-auto mb-4 bg-accent/10 rounded-full flex items-center justify-center">
              <Terminal className="w-8 h-8 text-accent" />
            </div>
            <p className="text-muted-foreground text-lg font-medium">
              © {new Date().getFullYear()} {CONTENT.personal.name}. Built with Next.js and Tailwind CSS.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
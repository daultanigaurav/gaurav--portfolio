"use client";

import { useEffect, useState } from "react";
import { CONTENT } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ThemeToggle } from "@/components/theme-toggle";
import { Github, Linkedin, Mail, MapPin, ExternalLink, Terminal, Code, Server, Database, Wrench } from "lucide-react";

export default function PortfolioPage() {
  const [terminalText, setTerminalText] = useState("");
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    // Terminal animation
    const text = "> Hello, I'm Gaurav_";
    let index = 0;
    const interval = setInterval(() => {
      if (index < text.length) {
        setTerminalText(text.slice(0, index + 1));
        index++;
      } else {
        clearInterval(interval);
        setShowCursor(false);
      }
    }, 100);

    return () => clearInterval(interval);
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

  const skillIcons = {
    cloud: Server,
    backend: Code,
    frontend: Terminal,
    devops: Database,
    tools: Wrench,
  };

  return (
    <div className="min-h-screen gradient-bg text-foreground font-body">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-md border-b z-50">
        <div className="max-w-6xl mx-auto px-8 py-6">
          <div className="flex justify-between items-center">
            <div className="text-xl font-heading font-semibold">{CONTENT.personal.name}</div>
            <div className="flex items-center space-x-8">
              <div className="hidden md:flex space-x-10">
                <a href="#about" className="hover:text-accent transition-colors duration-300 font-medium">About</a>
                <a href="#skills" className="hover:text-accent transition-colors duration-300 font-medium">Skills</a>
                <a href="#projects" className="hover:text-accent transition-colors duration-300 font-medium">Projects</a>
                <a href="#contact" className="hover:text-accent transition-colors duration-300 font-medium">Contact</a>
              </div>
              <ThemeToggle />
            </div>
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
                <AvatarImage src="/images/image-1.png" alt={CONTENT.personal.name} />
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
                <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-white px-8 py-3 rounded-full shadow-soft-lg hover:shadow-soft-lg hover:scale-105 transition-all duration-300">
                  <a href={CONTENT.social.github} target="_blank" rel="noopener noreferrer">
                    <Github className="w-5 h-5 mr-2" />
                    GitHub
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-2 border-primary/20 hover:border-accent hover:text-accent px-8 py-3 rounded-full shadow-soft hover:shadow-soft-lg hover:scale-105 transition-all duration-300">
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
          <div className="max-w-4xl mx-auto">
            <Card className="border-0 shadow-soft-lg rounded-2xl overflow-hidden">
              <CardContent className="p-16">
                <p className="text-xl leading-relaxed text-center mb-12 text-muted-foreground">{CONTENT.personal.about}</p>
                <div className="flex flex-wrap gap-8 justify-center">
                  <div className="flex items-center space-x-4 bg-muted/50 px-6 py-3 rounded-full">
                    <Mail className="w-5 h-5 text-accent" />
                    <span className="text-lg font-medium">{CONTENT.personal.email}</span>
                  </div>
                  <div className="flex items-center space-x-4 bg-muted/50 px-6 py-3 rounded-full">
                    <MapPin className="w-5 h-5 text-accent" />
                    <span className="text-lg font-medium">{CONTENT.personal.location}</span>
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
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(CONTENT.skills).map(([category, skills], index) => {
              const IconComponent = skillIcons[category as keyof typeof skillIcons];
              return (
                <Card key={category} className="group border-0 shadow-soft hover:shadow-soft-lg transition-all duration-300 hover:-translate-y-2 rounded-2xl overflow-hidden bg-card/50 backdrop-blur-sm">
                  <CardHeader className="text-center pb-6 pt-8">
                    <div className="w-16 h-16 mx-auto mb-4 bg-accent/10 rounded-2xl flex items-center justify-center group-hover:bg-accent/20 transition-colors duration-300">
                      <IconComponent className="w-8 h-8 text-accent" />
                    </div>
                    <CardTitle className="text-2xl font-heading capitalize">{category}</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0 pb-8">
                    <div className="flex flex-wrap gap-3 justify-center">
                      {skills.map((skill) => (
                        <Badge key={skill} variant="secondary" className="text-sm px-4 py-2 rounded-full bg-accent/10 text-accent hover:bg-accent hover:text-white transition-all duration-300 hover:scale-105">
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
              <Card key={project.id} className="group border-0 shadow-soft hover:shadow-soft-lg transition-all duration-500 hover:-translate-y-3 hover:rotate-1 rounded-2xl overflow-hidden bg-card/50 backdrop-blur-sm">
                <CardHeader className="pb-6 pt-8">
                  <CardTitle className="flex items-center justify-between text-2xl font-heading mb-4">
                    {project.title}
                    <ExternalLink className="w-6 h-6 opacity-0 group-hover:opacity-100 transition-all duration-300 text-accent" />
                  </CardTitle>
                  <CardDescription className="text-lg leading-relaxed text-muted-foreground">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0 pb-8">
                  <div className="flex flex-wrap gap-3 mb-8">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-sm px-4 py-2 rounded-full border-accent/30 text-accent hover:bg-accent hover:text-white transition-all duration-300">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <Button asChild className="w-full bg-accent hover:bg-accent/90 text-white py-3 rounded-full shadow-soft hover:shadow-soft-lg hover:scale-105 transition-all duration-300">
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
                <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-white px-12 py-4 rounded-full shadow-soft-lg hover:shadow-soft-lg hover:scale-105 transition-all duration-300 text-lg">
                  <a href={`mailto:${CONTENT.personal.email}`}>
                    <Mail className="w-6 h-6 mr-3" />
                    Send me an email
                  </a>
                </Button>
                <div className="flex justify-center space-x-6">
                  <Button asChild variant="outline" size="lg" className="border-2 border-primary/20 hover:border-accent hover:text-accent px-8 py-3 rounded-full shadow-soft hover:shadow-soft-lg hover:scale-105 transition-all duration-300">
                    <a href={CONTENT.social.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-5 h-5 mr-2" />
                      GitHub
                    </a>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="border-2 border-primary/20 hover:border-accent hover:text-accent px-8 py-3 rounded-full shadow-soft hover:shadow-soft-lg hover:scale-105 transition-all duration-300">
                    <a href={CONTENT.social.linkedin} target="_blank" rel="noopener noreferrer">
                      <Linkedin className="w-5 h-5 mr-2" />
                      LinkedIn
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
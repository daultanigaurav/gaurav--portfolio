"use client";

import { useEffect } from "react";
import { CONTENT } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { ThemeToggle } from "@/components/theme-toggle";
import { Github, Linkedin, Mail, MapPin, ExternalLink } from "lucide-react";

export default function PortfolioPage() {
  useEffect(() => {
    // Smooth scrolling for navigation links
    const handleSmoothScroll = (e: Event) => {
      const target = e.target as HTMLAnchorElement;
      if (target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const targetId = target.getAttribute('href')?.substring(1);
        const targetElement = document.getElementById(targetId || '');
        if (targetElement) {
          const offsetTop = targetElement.offsetTop - 80; // Account for fixed nav
          window.scrollTo({
            top: offsetTop,
            behavior: 'smooth',
          });
        }
      }
    };

    // Add event listeners to all navigation links
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    navLinks.forEach(link => {
      link.addEventListener('click', handleSmoothScroll);
    });

    // Cleanup
    return () => {
      navLinks.forEach(link => {
        link.removeEventListener('click', handleSmoothScroll);
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="text-xl font-bold">{CONTENT.personal.name}</div>
            <div className="flex items-center space-x-4">
              <div className="hidden md:flex space-x-6">
                <a href="#about" className="hover:text-primary transition-colors">About</a>
                <a href="#projects" className="hover:text-primary transition-colors">Projects</a>
                <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
              </div>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="container mx-auto text-center">
          <div className="mb-8">
            <Avatar className="w-32 h-32 mx-auto mb-6">
              <AvatarImage src="/placeholder-user.jpg" alt={CONTENT.personal.name} />
              <AvatarFallback>{CONTENT.personal.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
            </Avatar>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">{CONTENT.personal.name}</h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-2">{CONTENT.personal.tagline}</p>
            <p className="text-lg text-muted-foreground mb-6">{CONTENT.personal.role}</p>
            <div className="flex justify-center space-x-4">
              <Button asChild>
                <a href={CONTENT.social.github} target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4 mr-2" />
                  GitHub
                </a>
              </Button>
              <Button asChild variant="outline">
                <a href={CONTENT.social.linkedin} target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-4 h-4 mr-2" />
                  LinkedIn
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
          <div className="max-w-3xl mx-auto">
            <Card>
              <CardContent className="p-8">
                <p className="text-lg leading-relaxed mb-6">{CONTENT.personal.about}</p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <div className="flex items-center space-x-2">
                    <Mail className="w-4 h-4" />
                    <span>{CONTENT.personal.email}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-4 h-4" />
                    <span>{CONTENT.personal.location}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-4 bg-muted/50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {CONTENT.projects.map((project) => (
              <Card key={project.id} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    {project.title}
                    <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <Button asChild className="w-full">
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
      <section id="contact" className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Get In Touch</h2>
          <div className="max-w-2xl mx-auto">
            <Card>
              <CardContent className="p-8">
                <div className="text-center">
                  <h3 className="text-2xl font-semibold mb-4">Let's work together!</h3>
                  <p className="text-muted-foreground mb-6">
                    I'm always interested in new opportunities and exciting projects.
                  </p>
                  <div className="space-y-4">
                    <Button asChild size="lg" className="w-full">
                      <a href={`mailto:${CONTENT.personal.email}`}>
                        <Mail className="w-4 h-4 mr-2" />
                        Send me an email
                      </a>
                    </Button>
                    <div className="flex justify-center space-x-4">
                      <Button asChild variant="outline">
                        <a href={CONTENT.social.github} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4 mr-2" />
                          GitHub
                        </a>
                      </Button>
                      <Button asChild variant="outline">
                        <a href={CONTENT.social.linkedin} target="_blank" rel="noopener noreferrer">
                          <Linkedin className="w-4 h-4 mr-2" />
                          LinkedIn
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t">
        <div className="container mx-auto text-center">
          <p className="text-muted-foreground">
            © {new Date().getFullYear()} {CONTENT.personal.name}. Built with Next.js and Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
}
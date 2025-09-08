export const CONTENT = {
  personal: {
    name: "Gaurav Daultani",
    tagline: "AWS Certified Cloud Practitioner • Linux • Django",
    role: "AWS Certified Cloud Practitioner & Backend (Django)",
    about:
      "AWS Certified Cloud Practitioner focused on cloud, Linux, and backend with Django. I build scalable, reliable systems and keep learning along the way.",
    email: "gauravdaultani7@gmail.com",
    location: "India",
  },
  social: {
    github: "https://github.com/daultanigaurav",
    linkedin: "https://linkedin.com/in/daultanigaurav",
    portfolio: "https://gauravdaultani.me",
    x: "https://x.com/_gauravdaultani/",
    hashnode: "https://hashnode.com/@gauravdaultani",
    instagram: "https://www.instagram.com/gaurav.daultani/",
  },
  skills: {
    cloud: ["AWS", "Docker", "Terraform"],
    backend: ["Python", "Django", "PostgreSQL", "MongoDB"],
    frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML5", "CSS3"],
    devops: ["Linux", "Git", "CI/CD"],
    tools: ["VS Code", "GitHub", "Postman", "Jira"],
  },
  projects: [
    {
      id: "staysmart",
      title: "StaySmart",
      description:
        "Smart Hostel Attendance Portal — A MERN-based portal with attendance logging, complaint system, and feedback.",
      technologies: ["MERN", "MongoDB", "React"],
      link: "https://github.com/daultanigaurav",
    },
    {
      id: "github-analyzer",
      title: "GitHub Repo Analyzer",
      description: "Paste a GitHub repo link and visualize its file structure and composition.",
      technologies: ["JavaScript", "GitHub API", "Visualization"],
      link: "https://github.com/daultanigaurav",
    },
    {
      id: "frame-interpolation",
      title: "AI-based Frame Interpolation",
      description: "Research project using GANs to generate smooth intermediate video frames.",
      technologies: ["Python", "GANs", "Computer Vision"],
      link: "https://github.com/daultanigaurav",
    },
    {
      id: "travellite",
      title: "TravelLite",
      description: "A cab-sharing platform that connects travelers to reduce fares and promote shared mobility.",
      technologies: ["React", "Node.js", "MongoDB"],
      link: "https://github.com/daultanigaurav",
    },
  ],
} as const;


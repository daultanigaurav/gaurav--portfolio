export const CONTENT = {
  personal: {
    name: "Gaurav Daultani",
    tagline: "Building scalable solutions with Cloud, Linux & Django",
    role: "AWS Cloud, Linux Enthusiast & Backend in Django",
    about:
      "I'm Gaurav Daultani, a developer passionate about cloud technologies, Linux systems, and backend development with Django. I enjoy turning ideas into scalable, reliable, and efficient solutions. Beyond code, I love experimenting with new technologies and continuously learning to grow as a developer.",
    email: "gauravdaultani7@gmail.com",
    location: "India",
  },
  social: {
    github: "https://github.com/daultanigaurav",
    linkedin: "https://linkedin.com/in/daultanigaurav",
    portfolio: "https://gauravdaultani.me",
  },
  skills: {
    cloud: ["AWS", "Docker", "Kubernetes", "Terraform", "CloudFormation"],
    backend: ["Python", "Django", "Node.js", "Express", "PostgreSQL", "MongoDB"],
    frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML5", "CSS3"],
    devops: ["Linux", "Git", "CI/CD", "Jenkins", "Nginx", "Apache"],
    tools: ["VS Code", "GitHub", "Postman", "Figma", "Slack", "Jira"],
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


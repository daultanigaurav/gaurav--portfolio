// Content configuration for easy editing
const CONTENT = {
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
}

// DOM elements
const preloader = document.getElementById("preloader")
const themeToggle = document.getElementById("theme-toggle")
const sunIcon = document.getElementById("sun-icon")
const moonIcon = document.getElementById("moon-icon")
const contactForm = document.getElementById("contact-form")
const currentYearSpan = document.getElementById("current-year")

// Check for reduced motion preference
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches

// Initialize theme
function initializeTheme() {
  const savedTheme = localStorage.getItem("theme")
  const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches

  if (savedTheme === "dark" || (!savedTheme && systemPrefersDark)) {
    document.documentElement.classList.add("dark")
    updateThemeIcon(true)
  } else {
    document.documentElement.classList.remove("dark")
    updateThemeIcon(false)
  }
}

// Update theme toggle icon
function updateThemeIcon(isDark) {
  if (isDark) {
    sunIcon.classList.add("hidden")
    moonIcon.classList.remove("hidden")
  } else {
    sunIcon.classList.remove("hidden")
    moonIcon.classList.add("hidden")
  }
}

// Toggle theme
function toggleTheme() {
  const isDark = document.documentElement.classList.contains("dark")

  if (!prefersReducedMotion) {
    themeToggle.classList.add("animate-rotate")
    setTimeout(() => {
      themeToggle.classList.remove("animate-rotate")
    }, 300)
  }

  if (isDark) {
    document.documentElement.classList.remove("dark")
    localStorage.setItem("theme", "light")
    updateThemeIcon(false)
  } else {
    document.documentElement.classList.add("dark")
    localStorage.setItem("theme", "dark")
    updateThemeIcon(true)
  }
}

// Smooth scrolling for navigation links
function initializeSmoothScrolling() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()
      const target = document.querySelector(this.getAttribute("href"))
      if (target) {
        const offsetTop = target.offsetTop - 80 // Account for fixed nav
        window.scrollTo({
          top: offsetTop,
          behavior: "smooth",
        })
      }
    })
  })
}

// Animate elements on scroll
function initializeScrollAnimations() {
  if (prefersReducedMotion) return

  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate-fade-in-up")
      }
    })
  }, observerOptions)

  // Observe sections for animation
  document.querySelectorAll("section > div").forEach((section) => {
    observer.observe(section)
  })

  // Observe project cards
  document.querySelectorAll(".project-card").forEach((card) => {
    observer.observe(card)
  })

  // Observe skill categories
  document.querySelectorAll(".skill-category").forEach((category) => {
    observer.observe(category)
  })
}

// Handle contact form submission
function handleContactForm() {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault()

    const formData = new FormData(this)
    const name = formData.get("name")
    const email = formData.get("email")
    const message = formData.get("message")

    // Create mailto link
    const subject = encodeURIComponent(`Portfolio Contact from ${name}`)
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)
    const mailtoLink = `mailto:${CONTENT.personal.email}?subject=${subject}&body=${body}`

    // Open email client
    window.location.href = mailtoLink

    // Show success message (you could replace this with a toast notification)
    alert("Thank you for your message! Your email client should open now.")

    // Reset form
    this.reset()
  })
}

// Handle preloader
function handlePreloader() {
  window.addEventListener("load", () => {
    setTimeout(() => {
      if (prefersReducedMotion) {
        preloader.style.display = "none"
      } else {
        preloader.style.opacity = "0"
        setTimeout(() => {
          preloader.style.display = "none"
        }, 300)
      }
    }, 500) // Show preloader for at least 500ms
  })
}

// Set current year in footer
function setCurrentYear() {
  currentYearSpan.textContent = new Date().getFullYear()
}

// Add hover effects to project cards
function initializeProjectCardEffects() {
  if (prefersReducedMotion) return

  document.querySelectorAll(".project-card").forEach((card) => {
    card.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-8px)"
    })

    card.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0)"
    })
  })
}

// Add hover effects to skill items
function initializeSkillItemEffects() {
  if (prefersReducedMotion) return

  document.querySelectorAll(".skill-item").forEach((item) => {
    item.addEventListener("mouseenter", function () {
      this.style.transform = "scale(1.05)"
      this.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.1)"
    })

    item.addEventListener("mouseleave", function () {
      this.style.transform = "scale(1)"
      this.style.boxShadow = "none"
    })
  })
}

// Initialize navigation highlighting
function initializeNavHighlighting() {
  const sections = document.querySelectorAll("section[id]")
  const navLinks = document.querySelectorAll('nav a[href^="#"]')

  function highlightNavigation() {
    let current = ""

    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 100
      const sectionHeight = section.offsetHeight

      if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
        current = section.getAttribute("id")
      }
    })

    navLinks.forEach((link) => {
      link.classList.remove("text-primary")
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("text-primary")
      }
    })
  }

  window.addEventListener("scroll", highlightNavigation)
  highlightNavigation() // Initial call
}

// Initialize all functionality
function initialize() {
  initializeTheme()
  initializeSmoothScrolling()
  initializeScrollAnimations()
  initializeProjectCardEffects()
  initializeSkillItemEffects()
  initializeNavHighlighting()
  handleContactForm()
  handlePreloader()
  setCurrentYear()

  // Event listeners
  themeToggle.addEventListener("click", toggleTheme)

  // Listen for system theme changes
  window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (e) => {
    if (!localStorage.getItem("theme")) {
      if (e.matches) {
        document.documentElement.classList.add("dark")
        updateThemeIcon(true)
      } else {
        document.documentElement.classList.remove("dark")
        updateThemeIcon(false)
      }
    }
  })
}

// Start the application
document.addEventListener("DOMContentLoaded", initialize)

// Add keyboard navigation support
document.addEventListener("keydown", (e) => {
  if (e.key === "Tab") {
    document.body.classList.add("keyboard-navigation")
  }
})

document.addEventListener("mousedown", () => {
  document.body.classList.remove("keyboard-navigation")
})

// Add focus styles for keyboard navigation
const style = document.createElement("style")
style.textContent = `
    .keyboard-navigation *:focus {
        outline: 2px solid var(--ring) !important;
        outline-offset: 2px !important;
    }
`
document.head.appendChild(style)

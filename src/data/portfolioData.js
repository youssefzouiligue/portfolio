export const personalDetails = {
  name: "Youssef Zouiligue",
  title: "Full-Stack Web Developer",
  shortBio: "Building modern, responsive and user-focused web applications with clean and efficient code.",
  aboutBio: "My name is Youssef Zouiligue. I am a Full-Stack Web Developer with a background in Computer Development. I have developed several academic and personal web applications using modern technologies, and I am currently gaining professional experience through an internship.",
  interests: [
    "Web development",
    "Building useful applications",
    "Learning new technologies",
    "Solving programming problems",
    "Developing both frontend and backend applications"
  ],
  socials: {
    github: "https://github.com/youssefzouiligue",
    linkedin: "https://www.linkedin.com/in/youssef-zouiligue-1021b6363/",
    email: "mailto:youssef.zouiligue2006@gmail.com",
    emailRaw: "youssef.zouiligue2006@gmail.com"
  }
};

export const skillsData = {
  frontend: [
    { name: "HTML5", category: "Frontend" },
    { name: "CSS3", category: "Frontend" },
    { name: "JavaScript", category: "Frontend" },
    { name: "React", category: "Frontend" },
    { name: "Tailwind CSS", category: "Frontend" },
    { name: "Responsive Design", category: "Frontend" }
  ],
  backend: [
    { name: "PHP", category: "Backend" },
    { name: "Laravel", category: "Backend" },
    { name: "MySQL", category: "Backend" }
  ],
  tools: [
    { name: "Git", category: "Other Tools" },
    { name: "GitHub", category: "Other Tools" },
    { name: "REST APIs", category: "Other Tools" },
    { name: "VS Code", category: "Other Tools" }
  ]
};

export const projectsData = [
  {
    id: "medical-cabinet",
    featured: true,
    title: "Medical Cabinet Management System",
    description: "A full-stack web application for managing a medical cabinet, doctors, appointments and consultation services.",
    longDescription: "Features include Moroccan doctor selection, appointment management, calendar with available and unavailable dates, in-person consultation, simulated video consultation, appointment confirmation, payment simulation, doctor dashboard, admin management, appointment status, payment status, and remote vs in-person appointments.",
    features: [
      "Moroccan doctor selection",
      "Appointment & Calendar management",
      "In-person & simulated video consultation",
      "Appointment confirmation & payment simulation",
      "Doctor dashboard & Admin management",
      "Remote vs in-person appointment tracking"
    ],
    technologies: ["React", "Vite", "JavaScript", "Backend", "Database"],
    githubUrl: "https://github.com/youssefzouiligue/cabinet-medial-app",
    liveUrl: "https://cabinet-medial-app.vercel.app/",
    badge: "Featured / Main Project"
  },
  {
    id: "ticket-manager",
    featured: false,
    title: "Ticket Management System",
    description: "A React application for managing and tracking support tickets.",
    features: [
      "Create tickets",
      "View ticket details",
      "Edit tickets",
      "Manage ticket states",
      "Ticket management interface"
    ],
    technologies: ["React", "Redux Toolkit", "JavaScript"],
    githubUrl: "https://github.com/youssefzouiligue/DigiServices",
    liveUrl: "https://digi-services-orcin.vercel.app/"
  },
  {
    id: "weather-app",
    featured: false,
    title: "Weather Application",
    description: "A weather application that allows users to search for a city and retrieve current weather information using APIs.",
    features: [
      "Search for a city",
      "Geocoding API integration",
      "Current temperature & conditions",
      "Wind information & dynamic display",
      "Error handling for unknown cities"
    ],
    technologies: ["HTML", "CSS", "JavaScript", "REST APIs"],
    githubUrl: "https://github.com/youssefzouiligue/weather-app",
    liveUrl: "https://weather-app-seven-psi-56.vercel.app/"
  },
  {
    id: "todo-list",
    featured: false,
    title: "To-Do List",
    description: "A task management application for creating and managing daily tasks.",
    features: [
      "Add & Edit tasks",
      "Delete tasks",
      "Mark tasks as completed",
      "Interactive user interface"
    ],
    technologies: ["React", "JavaScript", "CSS"],
    githubUrl: "https://github.com/youssefzouiligue/animated-login-page",
    liveUrl: "https://vercel.com/youssef-zouiligue-s-projects/animated-login-page"
  }
];

export const experienceData = [
  {
    id: "internship",
    role: "Web Development Intern",
    period: "Present",
    description: "I am currently gaining practical experience through a web development internship, applying my programming knowledge in a professional environment and continuing to improve my frontend and backend development skills."
  },
  {
    id: "academic-projects",
    role: "Academic & Personal Projects",
    period: "Ongoing",
    description: "I have developed multiple academic and personal projects involving frontend development, backend development, databases, APIs and modern JavaScript frameworks."
  }
];

export const educationData = [
  {
    id: "ts-di",
    degree: "Technicien Spécialisé — Développement Informatique",
    institution: "OFPPT",
    period: "2024 — 2026"
  },
  {
    id: "bac",
    degree: "Baccalauréat",
    institution: "High School",
    period: "2024"
  }
];

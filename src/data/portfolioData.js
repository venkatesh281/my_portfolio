export const portfolioData = {
  personal: {
    name: "Venkateshwaran",
    role: "Full Stack Developer",
    subtitle: "Python (Django) • PHP (Laravel) • Vue.js 3 • Asynchronous Systems (Celery & RabbitMQ)",
    tagline: "Architecting resilient backends, asynchronous processing pipelines, and responsive web experiences with modern AI-augmented workflows.",
    location: "Chennai, Tamil Nadu, India",
    email: "venkateshwaran2810@gmail.com",
    phone: "+91 9600449363",
    whatsapp: "https://wa.me/919600449363?text=Hi%20Venkatesh,%20I%20viewed%20your%20portfolio%20and%20would%20love%20to%20connect!",
    linkedin: "https://www.linkedin.com/in/venkateshwaran28",
    github: "https://github.com/venkatesh281",
    resume: "/resume.html",
    avatar: "/images/profile.png",
    statusBadge: "Available for Full Stack Opportunities",
    yearsExperience: "2+",
    studentsMentored: "85+",
    problemsSolved: "200+",
  },

  stats: [
    {
      label: "Years Commercial Exp.",
      value: "2+",
      detail: "visu.ai & Geometriccae",
      icon: "Briefcase"
    },
    {
      label: "Students Mentored",
      value: "85+",
      detail: "Full Stack Internship Program",
      icon: "Users"
    },
    {
      label: "Algorithmic Problems",
      value: "200+",
      detail: "HackerRank (Java & Python)",
      icon: "Code"
    },
    {
      label: "Asynchronous Pipelines",
      value: "100%",
      detail: "Celery, Redis & RabbitMQ",
      icon: "Cpu"
    }
  ],

  about: {
    summary: "I am a Full Stack Developer with nearly 2 years of professional experience engineering resilient web applications, RESTful microservices, and asynchronous background architectures. My technical foundation spans Python (Django, DRF), PHP (Laravel, CodeIgniter 3), and Vue.js 3, complemented by hands-on mastery in message brokers (Celery, RabbitMQ) and caching strategies (Redis, MySQL query optimization). Alongside engineering, I am passionate about developer education, having personally trained 85+ students into industry-ready engineers.",
    philosophy: [
      {
        title: "Asynchronous & Queue First",
        description: "Decoupling CPU-heavy workloads, notifications, and third-party syncs via Celery & RabbitMQ to maintain sub-100ms API response latency.",
        icon: "Zap"
      },
      {
        title: "Robust RESTful Architecture",
        description: "Designing idempotent, secure RESTful endpoints with clean MVC/MVT separation, token authentication, and strict schema validation.",
        icon: "Layers"
      },
      {
        title: "Database Performance & Caching",
        description: "Optimizing relational schemas in MySQL with composite indexing and multi-tier Redis caching to eliminate N+1 bottlenecks.",
        icon: "Database"
      },
      {
        title: "Mentorship & Developer Advocacy",
        description: "Committed to elevating the engineering community through structured full-stack workshops, code reviews, and hands-on guidance.",
        icon: "GraduationCap"
      }
    ]
  },

  skills: {
    categories: [
      {
        name: "Backend Microservices & APIs",
        skills: [
          { name: "Python", level: "Advanced", icon: "Code" },
          { name: "Django & DRF", level: "Advanced", icon: "Server" },
          { name: "PHP", level: "Advanced", icon: "Code" },
          { name: "Laravel", level: "Intermediate", icon: "Server" },
          { name: "CodeIgniter 3", level: "Advanced", icon: "Server" },
          { name: "Java (Spring Boot)", level: "Intermediate", icon: "Cpu" },
          { name: "RESTful APIs", level: "Expert", icon: "Globe" }
        ]
      },
      {
        name: "Asynchronous & Distributed Systems",
        skills: [
          { name: "Celery", level: "Advanced", icon: "Zap" },
          { name: "RabbitMQ", level: "Advanced", icon: "Layers" },
          { name: "Celery Beat (Schedulers)", level: "Advanced", icon: "Clock" },
          { name: "Flower Task Monitor", level: "Intermediate", icon: "Activity" },
          { name: "Background Queues", level: "Advanced", icon: "Repeat" }
        ]
      },
      {
        name: "Frontend & Reactive Dashboards",
        skills: [
          { name: "Vue.js 3 (Composition API)", level: "Advanced", icon: "Layout" },
          { name: "JavaScript (ES6+)", level: "Advanced", icon: "Code" },
          { name: "HTML5 & CSS3", level: "Expert", icon: "FileCode" },
          { name: "Tailwind CSS", level: "Advanced", icon: "Palette" },
          { name: "Bootstrap 5", level: "Advanced", icon: "Grid" },
          { name: "AJAX & Fetch", level: "Expert", icon: "RefreshCw" }
        ]
      },
      {
        name: "Databases, Caching & Performance",
        skills: [
          { name: "MySQL", level: "Advanced", icon: "Database" },
          { name: "Redis Caching", level: "Advanced", icon: "Flame" },
          { name: "Query Optimization", level: "Advanced", icon: "TrendingUp" },
          { name: "Composite Indexing", level: "Advanced", icon: "CheckCircle" },
          { name: "MongoDB", level: "Intermediate", icon: "Database" }
        ]
      },
      {
        name: "DevOps, AI Tools & Environments",
        skills: [
          { name: "Google Antigravity IDE", level: "Daily User", icon: "Terminal" },
          { name: "Claude Code & ChatGPT", level: "Advanced", icon: "Sparkles" },
          { name: "Git & GitHub CLI", level: "Advanced", icon: "GitBranch" },
          { name: "Docker Containers", level: "Intermediate", icon: "Box" },
          { name: "Postman API Testing", level: "Advanced", icon: "Send" },
          { name: "Linux / Unix Shell", level: "Advanced", icon: "Terminal" }
        ]
      }
    ]
  },

  experience: [
    {
      company: "visu.ai",
      role: "Associate Engineer",
      period: "Feb 2026 – Present",
      location: "Chennai, India",
      type: "Full-Time",
      description: "Engineering scalable backend microservices, asynchronous queue workers, and real-time administrative dashboards for AI and data products.",
      highlights: [
        "Architected asynchronous task processing and scheduled recurring background jobs using Celery and RabbitMQ, offloading compute-intensive workloads from user-facing APIs.",
        "Developed and maintained high-throughput RESTful endpoints using Python (Django/DRF) and PHP (Laravel) with robust error handling and token authentication.",
        "Built responsive administrative dashboards and interactive data visualization components using Vue.js 3 and modern JavaScript.",
        "Optimized MySQL database query performance through composite indexing and database routing; integrated Redis multi-tier caching to accelerate data retrieval.",
        "Monitored worker cluster health and task queues using Flower, troubleshooting production bottlenecks and participating in code reviews."
      ],
      technologies: ["Python", "Django", "PHP", "Laravel", "Vue.js 3", "Celery", "RabbitMQ", "Redis", "MySQL", "Flower"]
    },
    {
      company: "Geometriccae Engineering Services Pvt. Ltd.",
      role: "Web Developer",
      period: "Dec 2024 – Jan 2026",
      location: "Chennai, India",
      type: "Full-Time",
      description: "Engineered core web platforms, relational database architectures, and led technical mentorship initiatives for incoming engineering interns.",
      highlights: [
        "Architected and deployed responsive web applications using PHP (CodeIgniter 3), JavaScript, HTML5, CSS3, and Bootstrap for diverse business clients.",
        "Designed and normalized MySQL relational database schemas, query indexes, and high-volume CRUD operations for operational reliability.",
        "Developed and integrated RESTful APIs connecting frontend applications with backend services and external third-party payment/data providers.",
        "Managed Linux and cPanel production deployments, DNS domain configurations, and automated database backup routines.",
        "Spearheaded technical collaboration with Digisailor to design a full-stack curriculum, mentoring 85+ college students in industry readiness."
      ],
      technologies: ["PHP", "CodeIgniter 3", "MySQL", "JavaScript", "Bootstrap", "REST APIs", "Linux/cPanel"]
    }
  ],

  mentorship: {
    title: "Mentorship & Engineering Education",
    headline: "Empowering 85+ College Students into Industry-Ready Software Developers",
    partner: "Geometriccae Engineering Services & Digisailor Partnership",
    description: "In collaboration between Geometriccae Engineering Services and Digisailor, I directed structured full-stack internship training for over 85 college students. Students mastered software engineering fundamentals, MVC architecture, relational database modeling, and live production deployments, earning verified internship credentials.",
    guestSpeaker: {
      event: "Invited Guest Lecturer & Workshop Speaker",
      department: "Department of Computer Science & Network Systems and Information Technology",
      topic: "Web Development: From Basics To Full Stack",
      recognition: "Honored with a Certificate of Appreciation by the University/College Department Head for delivering an impactful hands-on industry seminar and live enterprise architecture demonstration."
    },
    topicsTaught: [
      { name: "Full Stack MVC with PHP & CodeIgniter 3", detail: "Layered architecture, controllers, models, and clean routing" },
      { name: "Modern Responsive Web UI", detail: "HTML5, CSS3, Bootstrap 5, semantic structure & accessibility" },
      { name: "Relational Database Design", detail: "Normalized MySQL schemas, foreign keys, indexing & execution efficiency" },
      { name: "REST API Integration & AJAX", detail: "Asynchronous requests, JSON handling, and real-time DOM manipulation" },
      { name: "Industry Readiness & Best Practices", detail: "Git workflows, debugging, code reviews, and technical interview preparation" }
    ],
    gallery: [
      {
        src: "/images/mentoring/mentoring_certificate.jpg",
        caption: "Receiving the Certificate of Appreciation from Department of Computer Science & Network Systems and Information Technology with distinguished faculty",
        tag: "Award & Recognition"
      },
      {
        src: "/images/mentoring/mentoring_sonashi_demo.jpg",
        caption: "Live demonstration of the enterprise Sonashi Service Ticket Management System on projector to students & faculty",
        tag: "Live Architecture Demo"
      },
      {
        src: "/images/mentoring/mentoring_screen.jpg",
        caption: "Interactive full-stack code walkthrough and architecture breakdown with student teams on laptops",
        tag: "Code Walkthrough"
      },
      {
        src: "/images/mentoring/mentoring_practical.jpg",
        caption: "Hands-on coding session at the instructor desk guiding student engineering teams",
        tag: "Practical Lab"
      },
      {
        src: "/images/mentoring/mentoring_audience.jpg",
        caption: "Audience of students and academic staff attending the 'Web Development: From Basics to Full Stack' seminar",
        tag: "Audience Hall"
      },
      {
        src: "/images/mentoring/mentoring_panel_1.jpg",
        caption: "Speaker Panel with distinguished guest lecturers Sukumar Radhakrishnan, Venkateshwaran S, and Vijay Anand M",
        tag: "Speaker Panel"
      },
      {
        src: "/images/mentoring/mentoring_discussion.jpg",
        caption: "Interactive Q&A and technical discussion with students on career paths and full-stack engineering challenges",
        tag: "Interactive Q&A"
      },
      {
        src: "/images/mentoring/mentoring_projector.jpg",
        caption: "Classroom presentation on industry tools, development environments, and workflow automation",
        tag: "Classroom Session"
      }
    ]
  },

  projects: [
    {
      title: "GES CRM Platform",
      category: "Enterprise System",
      client: "Geometriccae Engineering Services",
      description: "A comprehensive customer relationship and sales pipeline platform engineered to automate lead lifecycles, manage client interactions, and track sales team performance.",
      tech: ["PHP", "CodeIgniter 3", "MySQL", "JavaScript", "Bootstrap", "AJAX"],
      highlights: [
        "Architected MVC backend with granular role-based access control (Admin, Sales Manager, Executive).",
        "Designed normalized MySQL relational schemas for leads, accounts, and deal stages.",
        "Implemented AJAX-based interactive data tables with real-time server-side pagination and CSV export."
      ],
      isClientProject: true,
      github: "https://github.com/venkatesh281",
      icon: "Database"
    },
    {
      title: "Sonashi Service Ticket Management",
      category: "Field Operations & Mobile Client",
      client: "Sonashi Dubai / UAE (via GES)",
      description: "Enterprise service ticket system enabling field technicians in Dubai/UAE to receive, inspect, update, and resolve customer repair requests in real-time.",
      tech: ["Flutter", "Dart", "PHP / REST APIs", "MySQL", "Push Notifications"],
      highlights: [
        "Integrated high-reliability REST APIs to synchronize live ticket status between field technicians and central dispatch.",
        "Demonstrated live in university guest lectures as a production benchmark for enterprise mobile/backend integration.",
        "Engineered offline job caching and photo verification to ensure continuous field operations."
      ],
      isClientProject: true,
      github: "https://github.com/venkatesh281/sonasi_mobile_app",
      icon: "Smartphone"
    },
    {
      title: "Student-Teacher Spring MVC Portal",
      category: "Enterprise Java System",
      client: "Open Source Showcase",
      description: "Enterprise Java web application featuring Apache Tiles layout composition, Spring MVC layered architecture, and relational academic record tracking.",
      tech: ["Java", "Spring Boot / MVC", "Apache Tiles", "MySQL", "JSP"],
      highlights: [
        "Clean layered architecture (Controller, Service, Repository) with strict adherence to SOLID design principles.",
        "Implemented modular UI layouts utilizing Apache Tiles templating engine.",
        "Complete CRUD operations for faculty schedules, student enrollments, and grading records."
      ],
      isClientProject: false,
      github: "https://github.com/venkatesh281/Student-Teacher-Management-SpringMvc-Tiles",
      icon: "GraduationCap"
    },
    {
      title: "Asynchronous Queue & Caching Sandbox",
      category: "Distributed Architecture",
      client: "Engineering Research",
      description: "Proof-of-concept asynchronous queue benchmarking task dispatching, priority queues, and Redis caching layers under synthetic load.",
      tech: ["Python", "Django", "Celery", "RabbitMQ", "Redis", "Flower"],
      highlights: [
        "Benchmarked task worker throughput across concurrent Celery workers under high synthetic request loads.",
        "Demonstrated automated retry policies with exponential backoff for external third-party service dependencies.",
        "Integrated Flower web dashboard for real-time task health metrics and worker queue monitoring."
      ],
      isClientProject: false,
      github: "https://github.com/venkatesh281",
      icon: "Cpu"
    }
  ],

  problemSolving: {
    title: "Algorithmic Mastery & Foundations",
    badge: "200+ HackerRank Problems Solved",
    languages: ["Java", "Python"],
    topics: [
      "Data Structures (Arrays, Linked Lists, Trees, Hash Maps, Priority Queues)",
      "Algorithms (Sorting, Binary Search, Two Pointers, Dynamic Programming basics)",
      "Object-Oriented Programming (OOP) & Design Patterns",
      "SOLID Principles & Clean Code practices",
      "Relational Database Normalization (1NF, 2NF, 3NF, BCNF) & ACID Transactions"
    ]
  },

  education: [
    {
      degree: "Master of Science (M.Sc.)",
      institution: "Yadava College of Arts and Science",
      period: "2019 – 2021",
      score: "75%",
      location: "Madurai, Tamil Nadu"
    },
    {
      degree: "Bachelor of Science (B.Sc.)",
      institution: "S. Vellaichamy Nadar College",
      period: "2016 – 2019",
      score: "60%",
      location: "Madurai, Tamil Nadu"
    }
  ]
}

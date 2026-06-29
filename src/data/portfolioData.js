export const portfolioData = {
  personalInfo: {
    name: "Saurabh Pratap Singh",
    title: "Full Stack Developer",
    subTitle: "Laravel · React.js · PHP · Tailwind CSS",
    phone: "+91 8853829494",
    email: "saurabhsin6294@gmail.com",
    location: "Harpur, Gola Bazar, Gorakhpur (273409), UP, India",
    github: "https://github.com/saurabhsin6294",
    linkedin: "https://www.linkedin.com/in/saurabh-pratap-singh-58203b22b/", // Placeholder if not provided, user can edit
    languages: ["English", "Hindi"],
    summary: "Full Stack Web Developer with hands-on experience building production-grade platforms using PHP (Laravel), React.js, and Tailwind CSS. Contributed to end-to-end development of B2B SaaS products — a Vendor Management System (VMS) and a CRM platform — under the eSyncora ecosystem, as well as an e-commerce platform (FirstShake) featuring a brand portal and creator portal. Experienced in QA testing, agile tooling (Jira, Slack, Loom), and delivering responsive, scalable web applications.",
  },
  
  experiences: [
    {
      id: "crm-developer",
      role: "Full Stack Developer – CRM Platform",
      company: "Aadhnik Technology Pvt. Ltd. | eSyncora",
      location: "Lucknow, UP (Remote)",
      duration: "Jan 2026 – Present",
      link: "https://crm.esyncora.com",
      points: [
        "Developed and maintained the CRM platform built on PHP (Laravel) backend and React.js frontend with Tailwind CSS.",
        "Implemented Leads & Deals modules including Kanban board, Reports, and pipeline funnel charts with full mobile responsiveness.",
        "Built RelatedTasks component with role-based read/edit access and deep-link URL navigation between modules.",
        "Fixed Windows filesystem case-sensitivity issues in TypeScript and resolved reCAPTCHA v3 login issues on localhost.",
        "Integrated custom toast notification system across Deal pages using react-hot-toast.",
        "Debugged Laravel backend contact form email delivery issues in production environment."
      ],
      tags: ["Laravel", "React.js", "Tailwind CSS", "Kanban Board", "TypeScript", "reCAPTCHA", "SMTP", "MySQL"]
    },
    {
      id: "vms-developer",
      role: "Full Stack Developer – VMS Platform",
      company: "Aadhnik Technology Pvt. Ltd. | eSyncora",
      location: "Lucknow, UP (Remote)",
      duration: "Jan 2026 – Present",
      link: "https://vms.esyncora.com",
      points: [
        "Developed Vendor Management System (VMS) using PHP (Laravel) as backend and React.js as frontend.",
        "Built vendor onboarding flows, procurement modules, and dashboard analytics for B2B clients.",
        "Ensured cross-device responsiveness and performance optimization across the platform.",
        "Collaborated using agile methodology with Jira for task tracking and Slack/Loom for team communication."
      ],
      tags: ["Laravel", "React.js", "Tailwind CSS", "SaaS", "Dashboard Analytics", "Jira", "Agile"]
    },
    {
      id: "firstshake-developer",
      role: "Full Stack Developer – E-Commerce Platform",
      company: "FirstShake",
      location: "Remote",
      duration: "Jul 2025 – Jul 2026",
      link: "https://tryfirstshake.com/",
      points: [
        "Developed a full-stack e-commerce platform using PHP (Laravel) for backend and Tailwind CSS for frontend.",
        "Built two core portals: Brand Portal (brand onboarding, product listing, order management) and Creator Portal (influencer campaign management, affiliate tracking).",
        "Integrated Shopify API for seamless product and order sync between the platform and vendor storefronts.",
        "Implemented authentication, role-based access control, and RESTful APIs consumed by the frontend."
      ],
      tags: ["Laravel", "Tailwind CSS", "Shopify API", "RESTful APIs", "Authentication", "RBAC", "E-Commerce"]
    },
    {
      id: "firstshake-qa",
      role: "QA Engineer",
      company: "FirstShake",
      location: "Remote",
      duration: "Jul 2025 – Jul 2026",
      link: "https://tryfirstshake.com/",
      points: [
        "Performed functional, regression, and UI testing across Brand Portal and Creator Portal features.",
        "Documented and tracked bugs using Jira; coordinated resolution with the development team via Slack and Loom video recordings.",
        "Verified API responses and tested end-to-end user flows to ensure production readiness.",
        "Maintained test case documentation and participated in sprint review cycles."
      ],
      tags: ["QA Testing", "Jira", "Slack", "Loom", "API Testing", "Regression Testing", "Bug Tracking"]
    }
  ],

  projects: [
    {
      title: "eSyncora CRM Platform",
      description: "A production-grade B2B Customer Relationship Management (CRM) SaaS featuring visual Leads & Deals pipeline, Kanban board system, detailed Reports, interactive pipeline funnel charts, and an access-controlled Tasks manager.",
      category: "Professional Experience",
      tech: ["Laravel", "React.js", "Tailwind CSS", "MySQL"],
      link: "https://crm.esyncora.com"
    },
    {
      title: "eSyncora Vendor Management System (VMS)",
      description: "A comprehensive SaaS system automating B2B client procurement. Integrates custom onboarding workflows, procurement modules, and detailed dashboard analytics with optimized cross-device performance.",
      category: "Professional Experience",
      tech: ["Laravel", "React.js", "Tailwind CSS", "PostgreSQL"],
      link: "https://vms.esyncora.com"
    },
    {
      title: "FirstShake E-Commerce Platform",
      description: "An advanced e-commerce platform encompassing a Brand Portal (product listing, order management, Shopify synchronization) and a Creator Portal (influencer marketing campaigns, affiliate referral tracking).",
      category: "Professional Experience",
      tech: ["Laravel", "Tailwind CSS", "Shopify API", "MySQL"],
      link: "https://tryfirstshake.com/"
    },
    {
      title: "Online Exam Portal with Anti-Cheating Features",
      description: "A secure web-based examination platform developed with advanced browser-level integrity protocols: automatic full-screen enforcement, tab-switch detection counters, and auto-submit features on violations.",
      category: "College Project",
      tech: ["JavaScript", "HTML5", "CSS3", "PHP"],
      link: "#"
    },
    {
      title: "E-Billing System",
      description: "An administrative billing management system built for collegiate systems featuring instant invoice PDF generation, purchase item tracking, payment status dashboards, and search parameters.",
      category: "College Project",
      tech: ["PHP", "JavaScript", "CSS3", "MySQL"],
      link: "#"
    }
  ],

  skills: {
    languages: ["PHP", "JavaScript", "HTML5", "CSS3"],
    frameworks: ["Laravel", "React.js", "Next.js", "Tailwind CSS"],
    databases: ["MySQL", "PostgreSQL"],
    tools: ["Jira", "Slack", "Loom", "Git", "GitHub", "XAMPP", "Vercel", "Brevo"],
    apis: ["Shopify API", "RESTful APIs", "reCAPTCHA v3", "SMTP / Email Delivery"],
    testing: ["Functional Testing", "Regression Testing", "Bug Reporting", "Test Case Documentation"],
    others: ["Responsive Design", "Mobile-First Development", "Agile / Scrum"]
  },

  education: [
    {
      degree: "BCA – Bachelor of Computer Applications",
      institution: "SRMCEM, Lucknow",
      duration: "2022 – 2025",
      score: "Score: 70%"
    },
    {
      degree: "Intermediate (PCM)",
      institution: "Kendriya Vidyalaya GKP",
      duration: "2021 – 2022",
      score: "Score: 65%"
    },
    {
      degree: "High School",
      institution: "Kendriya Vidyalaya GKP",
      duration: "2019 – 2020",
      score: "Score: 90.4%"
    }
  ]
};

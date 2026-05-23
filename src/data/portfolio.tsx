import {
  BriefcaseBusiness,
  Code2,
  Database,
  Globe,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

export const portfolio = {
  personal: {
    name: "Tayyab Ahmer",
    title: "Full Stack Engineer",
    location: "Lahore, Pakistan",
    phone: "+92-3161208343",
    email: "tayyab.ahmer111@gmail.com",
    linkedin: "https://linkedin.com/in/tayyab-ahmer",
    github: "https://github.com/tayyab-ahmer",
    summary:
      "Full Stack Developer with 1.5 years of experience designing, building, and shipping end-to-end web applications across fintech, WhatsApp automation, and delivery systems. Strong in NestJS, Next.js, PostgreSQL, Prisma, Supabase, real-time workflows, and third-party integrations.",
  },
  metrics: [
    { value: "1.5+ yrs", label: "Shipping full-stack product work in production environments." },
    { value: "2 live", label: "Public products currently live: Tetrad and Zonic." },
    { value: "3 lanes", label: "Fintech, automation, and logistics-style product systems." },
  ],
  focusAreas: [
    {
      title: "Platform architecture",
      description:
        "Multi-tenant structures, secure auth flows, and backend systems that can support growth without becoming fragile.",
    },
    {
      title: "Operational UX",
      description:
        "Admin dashboards, case workflows, wallet visibility, and product surfaces that reduce support overhead.",
    },
    {
      title: "AI and integrations",
      description:
        "Messaging, scheduling, payments, LLMs, and external services integrated into production workflows.",
    },
  ],
  experience: [
    {
      company: "Qodeon Lab",
      title: "Full Stack Developer",
      duration: "Oct 2025 - Apr 2026",
      location: "Gujrat, Pakistan",
      summary:
        "Built and deployed full-stack systems for WhatsApp automation and delivery operations, owning both backend logic and product-facing admin experiences.",
      highlights: [
        "Architected a WhatsApp automation platform and an on-demand tea delivery system with multi-portal workflows.",
        "Integrated AI, scheduling, and messaging providers to automate customer conversations and operational tasks.",
        "Implemented multi-tenant data design, secure authentication, and role-aware flows for customer, vendor, and admin users.",
      ],
    },
    {
      company: "Codek Technologies",
      title: "Backend Developer",
      duration: "Feb 2024 - Mar 2025",
      location: "Gujrat, Pakistan",
      summary:
        "Focused on API design, fintech workflows, and database performance for client products that required security, compliance awareness, and reliability.",
      highlights: [
        "Improved application performance through query optimization, indexing, and tighter data access patterns.",
        "Built RESTful services and integrated third-party systems while reducing response time and backend load.",
        "Worked inside Agile delivery cycles and implemented JWT-based authentication with role-based access control.",
      ],
    },
  ],
  projects: [
    {
      name: "Tetrad",
      status: "Live fintech product",
      liveUrl: "https://tetradpay.com/",
      featured: true,
      icon: <ShieldCheck size={20} />,
      summary:
        "Transaction Monitoring System and Vaulex were both part of the broader Tetrad remittance platform. The work covered fraud-aware monitoring, sanctioned-user verification, wallet operations, and internal/admin visibility around transactions.",
      outcomes: [
        "Built suspicious transaction detection and automated case-opening flows for compliance review.",
        "Integrated external verification APIs to check sanctioned users and trigger operational alerts.",
        "Supported wallet-style money movement flows, balance tracking, and internal/external transfer handling.",
      ],
      stack: ["NestJS", "Node.js", "PostgreSQL", "JWT", "RBAC", "API Integrations", "Socket.io"],
    },
    {
      name: "Zonic",
      status: "Live AI automation product",
      liveUrl: "https://www.zonicapp.com/",
      featured: true,
      icon: <Sparkles size={20} />,
      summary:
        "A WhatsApp business automation platform for clinics that combines AI conversations, appointment booking, CRM workflows, and messaging integrations into a single product experience.",
      outcomes: [
        "Built full-stack product flows for AI-driven customer service, lead qualification, and appointment booking.",
        "Integrated OpenAI, Gemini, Cal.com, Z-API, and WA-Sender into live messaging workflows.",
        "Designed frontend and backend layers with Next.js, NestJS, Prisma, and Supabase.",
      ],
      stack: ["Next.js", "NestJS", "Prisma", "Supabase", "OpenAI", "Gemini", "Cal.com", "WhatsApp APIs"],
    },
    {
      name: "Teaboi",
      status: "Private product build",
      featured: false,
      icon: <Globe size={20} />,
      summary:
        "An on-demand tea delivery platform with a web admin dashboard, vendor operations, route-aware delivery flow, and asset management for field operations.",
      outcomes: [
        "Connected customers with nearby tea vendors through role-specific workflows.",
        "Implemented real-time order tracking, approval flows, and admin-side operational visibility.",
        "Added vendor asset allocation and damage reporting to support day-to-day logistics.",
      ],
      stack: ["Next.js", "NestJS", "PostgreSQL", "Socket.io", "Tailwind CSS"],
    },
    {
      name: "Leadflow CRM",
      status: "Academic product build",
      featured: false,
      icon: <BriefcaseBusiness size={20} />,
      summary:
        "A complete CRM built as a final year project, covering customer records, task and deal management, analytics dashboards, PDF reporting, and real-time collaboration.",
      outcomes: [
        "Built deal and task tracking flows with analytics and reporting support.",
        "Implemented real-time chat and a typed full-stack codebase across frontend and backend.",
        "Designed a more complete business system than a narrow demo project, with multiple user journeys.",
      ],
      stack: ["Next.js", "NestJS", "PostgreSQL", "Socket.io", "TypeScript", "Tailwind CSS"],
    },
    {
      name: "E-commerce Sales Product Scraper",
      status: "Automation utility",
      featured: false,
      icon: <Code2 size={20} />,
      summary:
        "A scraping pipeline for collecting discounted product data from e-commerce sites, handling dynamic pages, pagination, and structured extraction.",
      outcomes: [
        "Used Puppeteer to extract product data from multiple sources with dynamic content.",
        "Added pagination support and cleaner data processing to improve collection coverage.",
        "Built a practical automation project instead of a toy crawler.",
      ],
      stack: ["Node.js", "Puppeteer", "Web Scraping", "Data Processing"],
    },
  ],
  capabilities: [
    {
      title: "Backend architecture",
      description: "API design, domain modeling, auth, data integrity, and service boundaries for real applications.",
      icon: <Database size={18} />,
    },
    {
      title: "Product implementation",
      description: "Admin dashboards, internal tools, workflow-heavy interfaces, and responsive frontends in Next.js.",
      icon: <Code2 size={18} />,
    },
    {
      title: "Risk-aware systems",
      description: "Fraud monitoring, wallet operations, audit visibility, and security-conscious access control.",
      icon: <ShieldCheck size={18} />,
    },
  ],
  skillGroups: [
    {
      title: "Frontend",
      items: ["Next.js", "React", "Tailwind CSS", "TypeScript", "Responsive UI", "Admin Dashboards"],
    },
    {
      title: "Backend",
      items: ["NestJS", "Node.js", "REST APIs", "JWT", "RBAC", "Socket.io", "BullMQ", "Redis"],
    },
    {
      title: "Data and infra",
      items: ["PostgreSQL", "Prisma", "Supabase", "TypeORM", "Railway", "GCP", "Docker", "Cloudinary"],
    },
    {
      title: "Integrations",
      items: ["OpenAI", "Gemini", "Cal.com", "Google OAuth", "WhatsApp APIs", "Swagger", "Postman", "Puppeteer"],
    },
  ],
  about:
    "I like products that have real operational complexity behind them: payments, automation, queues, admin actions, messaging, and live state. That usually means the job is not just writing endpoints or screens in isolation. It is shaping the system so teams can move faster, support can see what is happening, and users can complete the task without friction.",
  education: {
    degree: "Bachelor of Science in Computer Science",
    institution: "University of Gujrat (UOG)",
    duration: "Nov 2021 - Jun 2025",
    location: "Gujrat, Pakistan",
  },
  signals: [
    "Built across both backend-heavy fintech workflows and frontend-facing product systems.",
    "Comfortable shipping AI-assisted and real-time features into actual business workflows.",
    "Strong fit for teams that need one engineer to reason across architecture, UX, and delivery.",
  ],
};

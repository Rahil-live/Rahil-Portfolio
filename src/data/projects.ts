export type ProjectCategory = "Frontend" | "Mobile" | "Full Stack" | "AI";

export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  technologies: string[];
  highlights: string[];
  liveUrl?: string;
  githubUrl?: string;
  category: ProjectCategory;
  featured?: boolean;
  image?: string;
  problem?: string;
  solution?: string;
  architecture?: string;
  engineeringDecisions?: string[];
  stats?: { label: string; value: string }[];
  overview?: string;
}

export const projects: Project[] = [
  {
    slug: "dhandamart",
    title: "DhandaMart",
    subtitle: "AI-Powered B2B Procurement Platform",
    description:
      "A B2B procurement marketplace connecting entrepreneurs with manufacturers, suppliers and business service providers.",
    overview:
      "A B2B procurement marketplace connecting entrepreneurs with manufacturers, suppliers and business service providers.",
    technologies: [
      "Next.js 16",
      "React 19",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Prisma",
      "OpenAI",
      "RAG",
      "Razorpay",
      "Cloudflare R2",
      "Socket.IO",
      "Railway",
      "Vercel",
    ],
    highlights: [
      "Designed and built a complete B2B procurement marketplace.",
      "Built the frontend and backend architecture.",
      "Built AI-assisted RFQ workflows.",
      "Converted natural-language procurement requirements into structured RFQs.",
      "Implemented manufacturer matching using product, industry, location and certification criteria.",
      "Designed AI architecture where language understanding is handled by AI while critical pricing, matching and business decisions remain deterministic application logic.",
      "Built RAG functionality on PostgreSQL for domain-specific questions.",
      "Implemented explainable manufacturer scoring based on price, MOQ, lead time, certifications and location.",
      "Integrated Razorpay payments.",
      "Integrated Cloudflare R2 storage.",
      "Implemented Socket.IO real-time communication.",
      "Built administration dashboards.",
      "Built analytics.",
      "Built dynamic forms.",
      "Built manufacturer profiles.",
      "Implemented SEO infrastructure.",
    ],
    liveUrl: "https://dhandamart.com",
    category: "Full Stack",
    featured: true,
    problem:
      "Entrepreneurs need a reliable way to find manufacturers, suppliers and business service providers, and turn procurement requirements into structured RFQs with explainable matching.",
    solution:
      "DhandaMart is a full B2B procurement marketplace with AI-assisted RFQ workflows, manufacturer matching, payments, storage, real-time communication, admin dashboards and analytics.",
    architecture:
      "Frontend on Next.js/React deployed to Vercel. Backend on Node.js/Express with PostgreSQL and Prisma. AI/RAG for language understanding and domain Q&A. Critical pricing, matching and business decisions remain deterministic application logic. Payments via Razorpay, storage via Cloudflare R2, real-time via Socket.IO. Project deployment architecture includes Railway and Vercel.",
    engineeringDecisions: [
      "AI handles language understanding; pricing, matching and business decisions stay in deterministic application logic.",
      "RAG on PostgreSQL for domain-specific questions.",
      "Explainable manufacturer scoring based on price, MOQ, lead time, certifications and location.",
    ],
    stats: [
      { label: "APIs", value: "99" },
      { label: "Database Models", value: "29" },
      { label: "Backend Modules", value: "96" },
      { label: "Pages", value: "41" },
    ],
  },
  {
    slug: "aidloop",
    title: "AidLoop",
    subtitle: "Community Aid Coordination Platform",
    description:
      "A community aid coordination platform built to coordinate food and supply relief, allowing users to raise needs or fulfill requests.",
    overview:
      "A community aid coordination platform built to coordinate food and supply relief, allowing users to raise needs or fulfill requests.",
    technologies: ["Python", "Streamlit", "Supabase", "PostgreSQL", "Storage"],
    highlights: [
      "Two-sided aid workflow.",
      "Users can raise needs.",
      "Users can fulfill requests.",
      "Photo proof.",
      "Live shortage tracking.",
      "Designed for extremely low operating cost.",
    ],
    liveUrl: "https://aidloopcjp.streamlit.app",
    category: "Full Stack",
  },
  {
    slug: "rupeeradar",
    title: "RupeeRadar",
    subtitle: "AI Financial Statement Analyzer",
    description:
      "An AI-powered financial analysis application that processes bank statements and converts transactions into categorized spending insights.",
    overview:
      "An AI-powered financial analysis application that processes bank statements and converts transactions into categorized spending insights.",
    technologies: [
      "FastAPI",
      "React",
      "Tailwind CSS",
      "Groq",
      "LLaMA 3.3",
      "Railway",
      "Vercel",
    ],
    highlights: [
      "Processes HDFC and ICICI bank statements.",
      "Transaction categorization.",
      "Spending insights.",
      "Recurring-payment detection.",
      "Automatic session expiration.",
      "Data removal after 72 hours.",
    ],
    liveUrl: "https://rupee-radar-bay.vercel.app",
    category: "AI",
  },
  {
    slug: "the-draft-desk",
    title: "The Draft Desk",
    subtitle: "AI-Assisted Gmail Workflow",
    description:
      "An AI workflow that analyzes Gmail threads and generates context-aware draft replies while keeping humans in control of sending.",
    overview:
      "An AI workflow that analyzes Gmail threads and generates context-aware draft replies while keeping humans in control of sending.",
    technologies: ["Python", "Streamlit", "Gemini API", "Gmail API"],
    highlights: [
      "Gmail thread analysis.",
      "Context-aware draft generation.",
      "AI email triage.",
      "Explicit human approval before sending.",
      "Exportable review trail.",
    ],
    liveUrl: "https://the-chief-of-staff-rb.streamlit.app",
    category: "AI",
  },
  {
    slug: "study-pilot-engine",
    title: "Study Pilot Engine",
    subtitle: "AI Study Planner",
    description:
      "An AI study-planning application that processes a syllabus PDF and study preferences to generate a personalized study calendar.",
    overview:
      "An AI study-planning application that processes a syllabus PDF and study preferences to generate a personalized study calendar.",
    technologies: [
      "Python",
      "Streamlit",
      "Groq API",
      "Cline Extension",
      "PDF Parsing",
    ],
    highlights: [
      "Processes a syllabus PDF and study preferences.",
      "Generates a personalized study calendar.",
    ],
    liveUrl: "https://rahilstudypilot.streamlit.app",
    category: "AI",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getFeaturedProject(): Project | undefined {
  return projects.find((project) => project.featured);
}

export interface SkillGroup {
  title: string;
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend Engineering",
    skills: [
      "Angular",
      "Ionic",
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript ES6+",
      "HTML5",
      "CSS3",
      "RxJS",
      "Responsive UI",
      "Cross-browser UI",
    ],
  },
  {
    title: "Backend & Data",
    skills: [
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Prisma",
      "REST APIs",
      "Socket.IO",
    ],
  },
  {
    title: "AI & Application Engineering",
    skills: [
      "OpenAI",
      "Gemini",
      "LLaMA 3.3",
      "RAG",
      "Prompt Engineering",
      "AI Orchestration",
      "AI-assisted Development",
      "Cursor",
    ],
  },
  {
    title: "Architecture",
    skills: [
      "Component-based Architecture",
      "Reusable UI Systems",
      "Metadata-driven Frameworks",
      "API Integration",
      "Performance Optimization",
    ],
  },
  {
    title: "Tools & Delivery",
    skills: [
      "Git",
      "GitHub",
      "Bitbucket",
      "CI/CD",
      "Postman",
      "Figma",
      "Capacitor",
      "Cordova",
      "Vercel",
      "Railway",
    ],
  },
];

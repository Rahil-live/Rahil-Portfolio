export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location: string;
  application?: string;
  highlights: string[];
}

export const experience: ExperienceItem[] = [
  {
    company: "Swivelt India Pvt. Ltd.",
    role: "Mobile App Developer / Frontend Developer",
    period: "Sep 2023 – Present",
    location: "Noida, UP, India · Remote",
    application: "Istrives",
    highlights: [
      "Worked on Istrives, a business performance management application deployed on Google Play Store and Apple App Store.",
      "Worked across 20+ modules supporting business operations, including CRM, tasks, tickets, people, payroll and expenses.",
      "Redesigned CRM modules into a configurable Angular framework, reducing the codebase by 100,000+ lines.",
      "Owned REST API integration across product modules.",
      "Validated releases across development, staging and QA environments.",
      "Conducted weekly UI/UX demonstrations with the CEO, managers and design team.",
      "Translated product feedback into component-level improvements and production changes.",
    ],
  },
  {
    company: "Nityo Infotech",
    role: "Mobile App Developer / Frontend Developer",
    period: "Dec 2020 – Sep 2023",
    location: "Noida, India",
    application: "Istrives",
    highlights: [
      "Worked on Istrives and its mobile application delivery.",
      "Built responsive, pixel-accurate Angular/Ionic interfaces.",
      "Built the iGraph analytics module using ApexCharts.",
      "Redesigned filtering logic for data-heavy views to improve rendering performance.",
      "Integrated REST APIs across application modules.",
      "Performed cross-environment testing before production releases.",
      "Worked across frontend architecture, UI implementation, API integration and application delivery.",
    ],
  },
];

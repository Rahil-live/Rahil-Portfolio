export interface EducationItem {
  degree: string;
  period: string;
  institution: string;
  affiliation: string;
}

export interface CertificationItem {
  title: string;
  period: string;
  status: string;
  folderUrl: string;
}

export const education: EducationItem[] = [
  {
    degree: "MBA — IT & Operations",
    period: "2024 – 2026",
    institution:
      "World College of Technology and Management, Gurgaon, India",
    affiliation: "Affiliated with MDU Rohtak",
  },
  {
    degree: "BSc IT",
    period: "2017 – 2020",
    institution:
      "Manav Rachna International Institute of Research and Studies, Faridabad, India",
    affiliation: "Affiliated with AIS St Helens, New Zealand",
  },
];

export const certifications: CertificationItem[] = [
  {
    title: "Data Analytics with Generative AI — IIT Roorkee",
    period: "July 2026 – Jan 2027",
    status: "In progress",
    folderUrl:
      "https://drive.google.com/drive/folders/1Lq1dBuG52rOvIdlfH4erIuFZuOcKNeBM",
  },
];

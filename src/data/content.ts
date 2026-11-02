import {
  Briefcase,
  Layers,
  ShieldCheck,
  Smartphone,
  Target,
  Lightbulb,
  UsersRound,
  BarChart3,
  Pill,
  Users,
  Zap,
  HeartPulse,
  Dumbbell,
  BatteryCharging,
  type LucideIcon,
} from "lucide-react";

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export interface StatItem {
  icon: LucideIcon;
  value: string;
  label: string;
}

export const stats: StatItem[] = [
  { icon: Briefcase, value: "4+", label: "Years of QA Experience" },
  { icon: Layers, value: "20+", label: "Products & Projects Tested" },
  { icon: ShieldCheck, value: "End-to-End", label: "QA Ownership" },
  { icon: Smartphone, value: "Web · Mobile · API", label: "Testing Expertise" },
];

export interface FeatureItem {
  icon: LucideIcon;
  label: string;
}

export const aboutFeatures: FeatureItem[] = [
  { icon: Target, label: "Quality Focused" },
  { icon: Lightbulb, label: "Problem Solver" },
  { icon: UsersRound, label: "Team Player" },
  { icon: BarChart3, label: "Continuous Learner" },
];

export interface SkillGroup {
  category: string;
  items: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    category: "Testing",
    items: [
      "Functional Testing",
      "Regression Testing",
      "Smoke & Sanity Testing",
      "Exploratory Testing",
      "Integration Testing",
      "Compatibility Testing",
      "Mobile Testing",
      "Web Testing",
      "Performance Testing (Lighthouse)",
    ],
  },
  {
    category: "API & Data",
    items: ["REST API Testing", "Postman", "SQL"],
  },
  {
    category: "Automation",
    items: ["Selenium", "TestNG", "Java"],
  },
  {
    category: "Tools & Workflow",
    items: ["JIRA", "GitLab", "BrowserStack", "CI/CD Basics"],
  },
  {
    category: "Methodologies",
    items: ["Agile / Scrum", "SDLC / STLC", "Test Case Design", "Defect Lifecycle"],
  },
];

export interface Project {
  icon: LucideIcon;
  iconBg: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  link: string;
}

export const projects: Project[] = [
  {
    icon: Pill,
    iconBg: "bg-[#0F9D6E]",
    title: "AUM Pharma",
    subtitle: "Online Pharmacy Platform",
    description:
      "End-to-end QA for an online pharmacy platform covering prescription uploads, medicine ordering, and delivery tracking. Designed and executed functional, regression, and exploratory test scenarios across core user journeys, and managed defects through resolution to maintain release stability.",
    tags: ["Functional Testing", "Regression", "Exploratory"],
    link: "https://aumpharmacy.com/",
  },
  {
    icon: HeartPulse,
    iconBg: "bg-[#E11D48]",
    title: "BeatO",
    subtitle: "Healthcare & Diabetes Care Management",
    description:
      "Working on manual quality assurance across multiple modules of BeatO's healthcare management platform, including RM Dashboard, Leads Dashboard, consultation booking, Doctor Dashboard, Doctor Reports, agent management, and automated lead assignment. Validating application workflows, UI functionality, and business logic. Also performing basic database checks using SQL queries such as SELECT, INSERT, and UPDATE to verify records and data accuracy.",
    tags: [
      "Manual Testing",
      "Functional Testing",
      "Web Application Testing",
      "Database Testing",
      "Basic SQL",
    ],
    link: "https://beatoapp.com/",
  },
  {
    icon: Users,
    iconBg: "bg-[#D97706]",
    title: "QuickHire",
    subtitle: "Recruitment Platform",
    description:
      "QA ownership for a recruitment platform covering job postings, candidate management, and interview scheduling. Executed functional, regression, smoke, and API testing (Postman) to validate core hiring workflows and service integrations.",
    tags: ["API Testing", "Postman", "Smoke Testing"],
    link: "https://www.quickhire.services",
  },
  {
    icon: BatteryCharging,
    iconBg: "bg-[#92400E]",
    title: "Altricity",
    subtitle: "Remote Jump Starter App",
    description:
      "Mobile QA for a Flutter-based hardware-companion app that jump-starts vehicle batteries via a connected device. Tested device connectivity across physical and cloud environments, and validated sensor-reading accuracy against reference voltmeter data.",
    tags: ["Mobile Testing", "Integration"],
    link: "https://altricity.io/",
  },
  {
    icon: Zap,
    iconBg: "bg-[#65A30D]",
    title: "Optimum EV Solutions",
    subtitle: "EV Solutions Website",
    description:
      "QA testing for an EV solutions website covering enquiry forms, product modules, and site navigation. Conducted UI/UX validation and cross-browser testing, reporting defects with clear reproduction steps to support timely fixes.",
    tags: ["UI/UX Testing", "Cross-Browser"],
    link: "https://optimumevsolutions-com.stackstaging.com/",
  },
  {
    icon: Dumbbell,
    iconBg: "bg-[#E11D48]",
    title: "Fine-Fit App",
    subtitle: "Fitness & Wellness App",
    description:
      "Mobile QA for a fitness and wellness app covering workout scheduling, membership renewal, and in-app payments. Executed functional, compatibility, and regression testing across devices to validate core flows before release.",
    tags: ["Mobile Testing", "Compatibility"],
    link: "https://play.google.com/store/apps/details?id=com.mycompany.fitness",
  },
];

export const socials = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/rishav-kumar-qa/",
    icon: "linkedin",
  },
  {
    label: "GitHub",
    href: "https://github.com/rishavbarnwal386",
    icon: "github",
  },
  {
    label: "Portfolio",
    href: "https://linktr.ee/rishav0020",
    icon: "link",
  },
  {
    label: "Email",
    href: "mailto:rishavkr386@gmail.com",
    icon: "mail",
  },
];

export const contactEmail = "rishavkr386@gmail.com";

// data/projects.ts
import { FaReact, FaNodeJs, FaPython, FaDatabase, FaLinkedin, FaSyncAlt } from 'react-icons/fa';
import { SiTypescript, SiMongodb, SiTensorflow, SiPostgresql } from 'react-icons/si';

export interface Skill {
  name: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  technologies: string[];
  githubLink: string;
  skills: Skill[];
}

export const projects: Project[] = [
  {
    id: 1,
  title: "Next.js Portfolio Website",
  description: "A single-page application portfolio website built using Next.js, TailwindCSS, and shadcn/ui components.",
  icon: FaReact,
  technologies: ["Next.js", "React", "TypeScript", "TailwindCSS", "shadcn/ui"],
  githubLink: "https://github.com/EmersonCosta0915/portfolio",
  skills: [
    {name: "Frontend Development"},
    { name: "UI/UX Design"},
    { name: "Responsive Web Design"},
    { name: "Performance Optimization"}
  ]
  },
  {
    id: 2,
  title: "Practical.CleanArchitecture",
  description: "Full-stack .Net 8 Clean Architecture (Microservices, Modular Monolith, Monolith), Blazor, Angular 18, React 18, Vue 3, BFF with YARP, Domain-Driven Design, CQRS, SOLID, Asp.Net Core Identity Custom Storage, OpenID Connect, Entity Framework Core, OpenTelemetry, SignalR, Hosted Services, Health Checks, Rate Limiting, Cloud Services (Azure, AWS, GCP).",
  icon: FaReact,
  technologies: ["DotNet", "Blazor", "Angular", "React", "Docker", "Vue"],
  githubLink: "https://github.com/EmersonCosta0915/Practical.CleanArchitecture",
  skills: [
    { name: "Web Scraping"},
    { name: "Data Analysis"},
    { name: "Automation"},
    { name: "Machine Learning"},
    { name: "Document Generation"}
  ]
  },
  {
    id: 2,
  title: "eShopOnAbp",
  description: "Reference microservice solution built with the ABP Framework and .NET, runs on Kubernetes with Helm configuration, includes API Gateways, Angular and ASP.NET Core MVC applications, PostgreSQL and MongoDB databases.",
  icon: FaSyncAlt,
  technologies: ["ASP.NET", "Angular", "API", "PostgreSQL", "MongoDB"],
  githubLink: "https://github.com/EmersonCosta0915/eShopOnAbp",
  skills: [
    { name: "API Integration"},
    { name: "Asynchronous Programming"},
    { name: "Data Synchronization"},
    { name: "Python Development"},
    { name: "Task Automation"}
  ]
  },
];

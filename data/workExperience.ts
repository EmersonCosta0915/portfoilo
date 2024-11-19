// data/workExperience.ts
import { FaBriefcase, FaPython, FaDatabase, FaChartBar, FaAws, FaReact, FaChalkboardTeacher, } from 'react-icons/fa';
import { SiPowerbi } from 'react-icons/si';
import { PiMathOperationsFill } from "react-icons/pi";
import React from 'react';

// export interface Skill {
//   name: string;
//   icon: React.ComponentType<{ className?: string }>;
// }

export interface WorkExperience {
  company: string;
  position: string;
  duration: string;
  year: number;
  description: string[];
  logo: string;
}

export const workExperiences: WorkExperience[] = [
{
    company: "Click Enter",
    position: "FullStack Developer",
    duration: "November 2022 - March 2024",
    year: 2022,
    description: [
      "Built a library on top of a Hadoop and LSF cluster to provide a scalable quant research environment.",
      "Developed a wide range of reporting and data analysis tools for traders and senior managers.",
      "Helped multiple trading teams launch new strategies by building out technology and aiding research efforts.",
      "Worked with database architects to build an end-to-end data pipeline and database architecture to ingest, process, and analyze large volumes of market data from various sources."
    ],
    logo: "./logos/ia-flow.png"
  },
  {
    company: "Voxdata Technology",
    position: "Web Developer",
    duration: "July 2020 - October 2022",
    year: 2020,
    description: [
      "Developed a recommendation engine that increased the average duration of users' visits by more than 10%.",
      "Worked with tabular data. Helped to identify database inconsistencies and patterns.",
      "Conducted data analysis, built visualizations, and developed predictive models.",
    ],
    logo: "./logos/ia-flow.png"
  },
  {
    company: "L. C. PEREIRA AUTOMACAO COMERCIAL LTDA",
    position: "Software Engineer",
    duration: "March 2018 - April 2020",
    year: 2018,
    description: [
      "Developed automated tests for various subsystems of MS SQL Server using C++ and SQL.",
      "Implemented an automated fault analysis system that was later patented.",
      "Improved several test automation tools used by the team."
    ],
    logo: "./logos/ia-flow.png"
  }
];

import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import wargames from "@/public/wargames.png";
import goatimg from "@/public/goat.png";
import networkimg from "@/public/nam.png";
import bradio from "@/public/brad.png";
export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Software Developer   | Amazon ",
    location: "San Diego, CA",
    description:
      "Worked as a Software Developer on the security team, contributing to key projects that enhanced my development skills. Implemented AWS CDK with TypeScript to streamline cloud infrastructure and improve deployment processes.",
    icon: React.createElement(CgWorkAlt),
    date: "May 2023 - July 2023",
  },
  {
    title: "Computer Science Degree | Lamar University",
    location: "Beaumont, TX",
    description:
      "I graduated after 4 years of studying and training!",
    icon: React.createElement(LuGraduationCap),
    date: "2023",
  },
  {
    title: "SCADA Engineer | EDF Trading NA",
    location: "Houston, TX",
    description:
      "Enhanced a legacy SCADA system by optimizing the C codebase and improving core functionality. Collaborated with engineers to boost performance and provided 24/7 support to ensure system reliability and uptime for critical operations.",
    icon: React.createElement(CgWorkAlt),
    date: "December 2023 - September 2024",
  },
  {
    title: "ERP Integration Developer | Lamar State College Orange",
    location: "Orange, TX",
    description:
      "Developed and integrated RESTful APIs for cloud based Ellucian Banner System. Helped migrate in-house system to Ellucian SaaS cloud. Worked with SQL, Powershell, GraphQL, Javascript, Python, to automate and enhance institution needs.", 
    icon: React.createElement(CgWorkAlt),
    date: "December 2024 - Present",
  },
  {
    title: "Seeking Software Engineering Opportunities",
    location: "Open to Software Development Roles",
    description:
      "I've decided to focus my career on software development, driven by a strong passion for coding and building solutions. Now actively seeking roles where I can apply my skills, continue growing, and contribute to impactful projects.",  
    icon: React.createElement(FaReact),
    date: "Present",
  },
  
] as const;

export const projectsData = [
  {
    title: "WarGames",
    description:
      "tic-tac-toe game. The player must defeat the ai in order to win!",
    tags: ["MYSQL", "Java", "JavaFx", "PHP"],
    imageUrl: wargames,
    projectURL:"https://github.com/Sirpip91/Wargames",
    demoURL:"https://www.youtube.com/watch?v=aL7mdJtIvzY",
  },
  {
    title: "Networks Analysis",
    description:
      "Analyzing trace files that are created with NS2 scripts. The trace files are then anaysed with awk scripts.",
    tags: ["AWK", "TCL", "Shell", "NAM"],
    imageUrl: networkimg,
    projectURL:"https://github.com/Sirpip91/NS2-Networks-Trace-File-Analysis",
    demoURL:"https://github.com/Sirpip91/NS2-Networks-Trace-File-Analysis",
  },
  {
    title: "bradleydallen.io",
    description:
      "Contain tutorials, blogs, courses, and everything involving computer science.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "ShadcnUI", "Stripe" ,"SupaBase", "Resend"],
    imageUrl: bradio,
    projectURL:"https://github.com/Sirpip91/bradleydallen.io",
    demoURL:"https://www.bradleydallen.io/",
  },
  {
    title: "Goat-Tastic-Page",
    description:
      "Whether you're here for the humor or because you're a serious goat enthusiast, we have something for everyone.",
    tags: ["HTML","CSS","Love ❤️"],
    imageUrl: goatimg,
    projectURL:"https://github.com/Sirpip91/bradleydallen.io",
    demoURL:"https://sirpip91.github.io/Goat-tasticLanding-Page/",
  },
] as const;

export const skillsData = [
  "C",
  "C++",
  "Java",
  "TypeScript",
  "React",
  "HTML",
  "CSS",
  "JavaScript",
  "Next.js",
  "Node.js",
  "Express",
  "MongoDB",
  "MySQL",
  "AWS",
  "Docker",
  "Tailwind",
  "Git",
  "Bash",
  "Python",
  "Shell Scripting",
  "Linux",
  "Agile",
] as const;

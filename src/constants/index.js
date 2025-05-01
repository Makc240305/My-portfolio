import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.png";
import project4 from "../assets/projects/project-4.png";

export const HERO_CONTENT = `Motivated Computer Science student with hands-on experience in JavaScript, TypeScript, React, and Node.js. Skilled in building responsive, accessible UIs using HTML, SCSS, Tailwind CSS, and modern component-driven architecture. Proficient with Git/GitHub workflows and eager to contribute to real-world projects while continuously improving through practice.`;

export const EXPERIENCES = [
  {
    year: "Aug 2021 - Jan 2025",
    role: "Freelance Image Editor",
    company: "Upwork (Remote)",
    description: `Edited and optimized images for websites using Photoshop. Communicated with international clients in English. Collaborated with front-end developers to integrate graphical elements into web applications.`,
    technologies: ["Photoshop", "Figma", "Illustrator"],
  },
  {
    year: "Jan 2022 - Mar 2022",
    role: "Web Developer Intern",
    company: "Web Kuznya, Khmelnytsky (On-site)",
    description: `Internship focusing on frontend development. Gained practical experience with web technologies while working on real projects in a professional environment.`,
    technologies: ["HTML", "CSS", "JavaScript"],
  },
];

export const PROJECTS = [
  {
    title: "FitApp",
    image: project4,
    description:
      "Full-stack fitness platform for goal tracking and meal planning. Includes a calorie calculator with dynamic Recharts graphs, AI-powered recipe generator, and JWT auth with Google OAuth.",
    technologies: ["React", "Express", "PostgreSQL", "Prisma", "JWT", "Recharts", "OAuth"],
    githubLink: "https://github.com/vakulenko10/fitApp-frontend",
    link: "https://fit-app-frontend.vercel.app",
  },
  {
    title: "Weather App",
    image: project1,
    description:
      "An elegant weather application built using Vanilla JavaScript with Node.js for API interactions.",
    technologies: ["JavaScript", "Node.js", "SCSS", "HTML"],
    githubLink: "https://github.com/Makc240305/Weather-App",
    link: "https://weather-app-makc240305s-projects.vercel.app/",
  },
  {
    title: "Quiz App",
    image: project2,
    description:
      "A dynamic quiz application built with React, featuring a progress bar and real-time score tracking.",
    technologies: ["React", "Vite", "SCSS"],
    githubLink: "https://github.com/Makc240305/Quiz-app",
    link: "https://makc240305.github.io/Quiz-app/",
  },
  {
    title: "Users list",
    image: project3,
    description:
      "This project is a user management application built with React. It allows users to browse a list of users, search for specific individuals, and send them invitations.",
    technologies: ["React", "Vite", "SCSS"],
    githubLink: "https://github.com/Makc240305/Users-list",
    link: "https://users-list-lac.vercel.app/",
  },
];

export const CONTACT = {
  address: "Gdansk, Poland",
  phoneNo: "+48 514 662 024",
  email: "maxim240305@gmail.com",
};

export const PROFESSIONAL_SUMMARY = `Motivated and detail-oriented Computer Science student with foundational expertise in JavaScript, React, and Node.js. Proficient in building responsive interfaces using HTML/CSS, SCSS, Tailwind CSS, and version control with Git. Eager to contribute to real-world projects while expanding skills in front-end development and collaborative workflows.`;

export const EDUCATION = [
  {
    institution: "WSB Merito, Gdansk, Poland",
    degree: "Bachelor of Computer Science (BCompSc), Computer Engineering",
    expected: "2026",
  },
  {
    institution:
      "Khmelnytskyi XKTEI,Khmelnytskyi, Ukraine",
    degree: "Bachelor of Computer Science (BCompSc), Computer Engineering",
    years: "2020 - 2022",
  },
];

export const LANGUAGES = [
  { name: "English", level: "B2"},
  { name: "Polish", level: "B1"},
  { name: "Ukrainian", level: "C2"},
  { name: "Russian", level: "C2"},
];
import project1 from "../assets/projects/project-1.webp";
import project2 from "../assets/projects/project-2.webp";
import project3 from "../assets/projects/project-3.webp";
import project4 from "../assets/projects/project-4.webp";

export const HERO_CONTENT = `I am a motivated Computer Science student with a strong foundation in JavaScript, React, and Node.js. I specialize in front-end technologies like React, HTML, CSS, and SCSS, and I am eager to contribute to real-world projects while expanding my skills in full-stack development.`;

export const ABOUT_TEXT = `I am a passionate Computer Science student with a deep interest in creating efficient and user-friendly web applications. Currently pursuing my Bachelor's degree, I have experience working with JavaScript, React, Node.js, and various front-end technologies. I thrive in collaborative environments and am always looking to improve my skills by learning new technologies and techniques.`;

export const EXPERIENCES = [
  {
    year: "2021 - Present",
    role: "Freelance Image Editor",
    company: "Upwork (Remote)",
    description: `Edited and optimized images for websites, collaborated with front-end developers to integrate graphical elements into web applications.`,
    technologies: ["Photoshop", "Figma", "Illustrator"],
  },
];

export const PROJECTS = [
  {
    title: "Weather-App",
    image: project1,
    description:
      "An elegant weather application built using Vanilla JavaScript with Node.js for API interactions.",
    technologies: ["JavaScript", "Node.js", "SCSS", "HTML"],
    githubLink: "https://github.com/your-username/weather-app",
  },
  {
    title: "Quiz-App",
    image: project2,
    description:
      "A dynamic quiz application built with React, featuring a progress bar and real-time score tracking.",
    technologies: ["React", "Vite", "SCSS"],
    githubLink: "https://github.com/your-username/quiz-app",
  },
  {
    title: "Modal-Window",
    image: project3,
    description:
      "A reusable modal window component built with React, designed for smooth animations and customization.",
    technologies: ["React", "Vite", "SCSS"],
    githubLink: "https://github.com/your-username/modal-window",
  },
  {
    title: "E-Commerce Website",
    image: project4,
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB"],
    githubLink: "https://github.com/your-username/e-commerce-website",
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
    degree: "Bachelor of Engineering",
    expected: "2026",
  },
  {
    institution: "Khmelnytskyi Cooperative Trade and Economic Institute, Ukraine",
    degree: "Bachelor of Computer Science (BCompSc), Computer Engineering",
    years: "2020 - 2022",
  },
];

export const TECHNICAL_SKILLS = [
  "JavaScript (ES6+)", "HTML5", "CSS3", "React.js", "Node.js", "SCSS/SASS", "Tailwind CSS", "Git", "Webpack", "npm", "yarn",
];

export const LANGUAGES = [
  "English – B2 (Upper-Intermediate)", "Polish – B1 (Intermediate)", "Ukrainian – C2 (Native-like)", "Russian – C2 (Native-like)"
];

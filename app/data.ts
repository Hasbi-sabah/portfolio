import { PersonalInfo, Project, Skills, NavigationItem } from "./types";

export const personalInfo: PersonalInfo = {
  name: "Hasbi Sabah",
  about:
    "I am a software engineer with a strong focus on backend development, experienced in building scalable applications and modern web solutions. I specialize in technologies like React, Next.js, NestJS, Flask, and Django, with additional expertise in databases, ORMs, and cloud tools.",
  contact: {
    email: "sabahhasbi13@gmail.com",
  },
  social: [
    {
      name: "GitHub",
      url: "https://github.com/Hasbi-sabah",
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/sabahhasbi",
    },
  ],
};

export const projects: Project[] = [
  {
    title: "OctAPI",
    description:
      "VS Code extension that automatically detects and organizes API routes for Express, NestJS, Koa, and Flask. Published on the VS Code Marketplace with growing adoption and open-source contributions.",
    technologies: ["Node.js", "TypeScript", "Express", "NestJS", "Flask", "Koa"],
    link: "https://marketplace.visualstudio.com/items?itemName=HasbiSabah.octapi",
    screenshots: [
      "https://placehold.co/600x400/000000/FFFFFF?text=OctAPI+1",
      "https://placehold.co/600x400/000000/FFFFFF?text=OctAPI+2",
    ],
  },
  {
    title: "Love Catch Kill",
    description:
      "Real-time multiplayer game with backend and most of frontend built using Next.js, NestJS, and Socket.io. Enabled seamless real-time gameplay and player interactions.",
    technologies: ["Next.js", "NestJS", "MongoDB", "Socket.io"],
    link: "https://youtu.be/2RcTkfiiW-c",
    screenshots: [
      "https://placehold.co/600x400/000000/FFFFFF?text=Love+Catch+Kill+1",
      "https://placehold.co/600x400/000000/FFFFFF?text=Love+Catch+Kill+2",
    ],
  },
  {
    title: "DipLlama",
    description:
      "AI hackathon project: interactive RAG-based app that allows users to chat with documents and generate personalized quizzes, built in under 48 hours.",
    technologies: ["Next.js", "LangChain", "Qdrant"],
    link: "https://lablab.ai/event/llama-3-ai-hackathon/summa-llama/dipllama",
    screenshots: ["https://placehold.co/600x400/000000/FFFFFF?text=DipLlama"],
  },
  {
    title: "ALXhibit",
    description:
      "Platform for ALX students to showcase and share projects. Co-developed frontend and backend with Next.js, ensuring smooth user experience and reliable project management features.",
    technologies: ["Next.js"],
    link: "https://alxhibit.vercel.app/",
    screenshots: ["https://placehold.co/600x400/000000/FFFFFF?text=ALXhibit"],
  },
  {
    title: "VitaSync",
    description:
      "Graduation project: RESTful APIs for patient records, appointments, prescriptions, and histories with Flask. Implemented RBAC, secure storage, and email notification system for reminders.",
    technologies: ["Flask", "Python", "SQLite"],
    link: "https://github.com/Hasbi-sabah/VitaSync",
    screenshots: ["https://placehold.co/600x400/000000/FFFFFF?text=VitaSync"],
  },
];

export const skills: Skills = {
  languages: [
    { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
    { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  ],
  frameworks: [
    { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Next.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
    { name: "NestJS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-plain.svg" },
    { name: "Express.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
    { name: "Tailwind CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" },
    { name: "Redux", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" },
    { name: "Flask", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg" },
    { name: "Django", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" },
    { name: "Socket.io", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg" },
    { name: "LangChain", logo: "https://placehold.co/64x64/000000/FFFFFF?text=LangChain" },
  ],
  databases: [
    { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    { name: "MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    { name: "SQLite", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg" },
    { name: "Redis", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" },
  ],
  orms: [
    { name: "Mongoose", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    { name: "Prisma", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg" },
    { name: "TypeORM", logo: "https://avatars.githubusercontent.com/u/20165699?s=200&v=4" },
    { name: "Sequelize", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sequelize/sequelize-original.svg" },
  ],
  tools: [
    { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
    { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    { name: "Bash", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg" },
    { name: "Cloudinary", logo: "https://placehold.co/64x64/000000/FFFFFF?text=Cloudinary" },
    { name: "Vercel", logo: "https://assets.vercel.com/image/upload/v1662130559/front/favicon/vercel/180x180.png" },
  ],
};

export const navigation: NavigationItem[] = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

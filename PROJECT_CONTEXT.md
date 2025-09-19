# 📂 Project Context File

This file exists to provide AI assistants with all the essential context needed to understand the project and deliver accurate, relevant support. Any AI interacting with this repository should read and respect the instructions and guidelines outlined here.

---

## 🔖 Project Overview
- **Project Name:** Personal Portfolio Website  
- **Purpose:** Showcase my work as a software engineer in a clean, professional, and engaging format.  
- **Audience:** Recruiters, hiring managers, collaborators, and potential clients.  
- **Core Value:** Provides a single, professional digital identity that highlights my skills, projects, and experience.

---

## 🛠️ Tech Stack
- **Languages:** JavaScript (ES6+), TypeScript, HTML5, CSS3  
- **Frameworks & Libraries:** Next.js, React, TailwindCSS, Framer Motion (optional), MDX (optional for blog)  
- **Tools & Services:** Vercel (hosting), GitHub (repo), Figma (design), ESLint + Prettier (code quality)  

---

## 📐 Project Structure & Layout
Expected top-level sections/pages:
1. **Home / Hero** – Name, tagline, intro  
2. **About Me** – Short bio, skills focus  
3. **Projects** – Case studies, screenshots, descriptions  
4. **Experience** – Condensed résumé / roles  
5. **Skills** – Tech logos and tools  
6. **Contact** – Email, LinkedIn, GitHub, form (optional)  

Supporting files/folders:
- `/pages` → Next.js routing  
- `/components` → Reusable UI components  
- `/styles` → Global Tailwind config, CSS  
- `/public` → Assets (images, icons)  
- `/tests` → Unit/integration tests  

---

## 🤖 AI Integration Guidelines
When assisting in development, AI tools should:
- **Code Generation:** Scaffold React components, Next.js pages, and Tailwind layouts. Respect project conventions.  
- **Testing:** Generate Jest/React Testing Library unit tests and integration tests based on component code.  
- **Documentation:** Write docstrings, inline comments, and update README or changelogs when provided with diffs or commits.  
- **Context Awareness:** Accept API specs, file trees, or git diffs to generate context-relevant outputs.  

---

## 🔧 Development Conventions
- **Styling:** TailwindCSS first, no inline styles unless necessary.  
- **Code Quality:** ESLint + Prettier enforced.  
- **Commit Messages:** Conventional Commits format (`feat:`, `fix:`, `docs:`, etc.).  
- **Testing:** Prefer Jest + React Testing Library. Cover core logic and UI behavior.  
- **Documentation:** Keep README and this file up to date as the source of truth.  

---

## 🚀 MVP Scope
- Landing page with hero section, about, featured projects, and contact info.  
- Responsive design for desktop and mobile.  
- Hosted live on Vercel.  
- No blog, CMS, or backend at initial launch.  

---

## 📌 AI Instructions
When generating responses:
1. Stay consistent with this project’s stack and conventions.  
2. Assume this project is for professional, public presentation. No filler, jokes, or irrelevant output inside code/docs.  
3. Default to modern best practices in React/Next.js.  
4. Keep solutions minimal but extensible—avoid unnecessary complexity.  

---

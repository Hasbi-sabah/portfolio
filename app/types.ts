export interface SocialLink {
  name: string;
  url: string;
}

export interface PersonalInfo {
  name: string;
  about: string;
  contact: {
    email: string;
  };
  social: SocialLink[];
}

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  link: string;
  screenshots: string[];
}

export interface SkillItem {
  name: string;
  logo: string;
}

export interface Skills {
  languages: SkillItem[];
  frameworks: SkillItem[];
  databases: SkillItem[];
  orms: SkillItem[];
  tools: SkillItem[];
}

export interface NavigationItem {
  name: string;
  href: string;
}

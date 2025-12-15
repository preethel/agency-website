// Configuration types
export interface SiteConfig {
  siteName: string;
  tagline: string;
  description: string;
  email: string;
  phone: string;
  address: string;
  social: {
    github: string;
    linkedin: string;
    twitter: string;
  };
}

// Team types
export interface TeamMember {
  id: string;
  name: string;
  title: string;
  bio: string;
  linkedin: string;
  skills: string[];
  initials: string;
}

// Project types
export interface Language {
  name: string;
  percentage: number;
}

export interface Project {
  id: string;
  name: string;
  description: string;
  repo: string;
  repoUrl: string;
  languages: Language[];
}

// Review types
export interface Review {
  id: string;
  name: string;
  company: string;
  position: string;
  review: string;
  rating: number;
  initials: string;
}

// Service types
export interface Service {
  id: string;
  icon: string;
  title: string;
  description: string;
}

// Stats types
export interface Stat {
  id: string;
  label: string;
  value: number;
  suffix: string;
}

// Tech Stack types
export interface Tech {
  id: string;
  name: string;
  category: string;
}

// Form types
export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface NewsletterFormData {
  email: string;
}

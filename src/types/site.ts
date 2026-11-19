// [UPDATED] SiteConfig Interface
// Description: Memperluas antarmuka SiteConfig agar mendukung struktur data profil yang lengkap,
// statistik sorotan (stats), pilar fokus profesional (focusAreas), informasi edukasi, serta
// kompatibilitas objek resume dan link sosial.
// Reason: Menyesuaikan kebutuhan integrasi konten portofolio Maulana Rafi sesuai MASTER PROMPT.

export interface SiteStat {
  value: string;
  label: string;
  description?: string;
}

export interface FocusArea {
  title: string;
  description: string;
  icon?: string;
  tags?: string[];
}

export interface EducationItem {
  institution: string;
  degree: string;
  major: string;
  period: string;
  score?: string;
  highlights?: string[];
}

export interface SiteConfig {
  name: string;
  nickname?: string;
  headline: string;
  role: string[];
  shortDescription: string;
  longDescription: string;
  email: string;
  phone?: string;
  location: string;
  availability: string;
  profileImage: string;
  resume: {
    label: string;
    href: string;
  };
  socialLinks: {
    github: string;
    linkedin: string;
    email: string;
    instagram?: string;
  };
  brand: {
    shortName: string;
    logoText: string;
    slogan: string;
  };
  navigation: Array<{
    label: string;
    href: string;
  }>;
  stats: SiteStat[];
  focusAreas: FocusArea[];
  education: EducationItem[];
  seo: {
    title: string;
    description: string;
    keywords: string[];
    author: string;
  };
  footer: {
    copyright: string;
  };
}

// [UPDATED] Project Type Definition
// Description: Menambahkan atribut deskriptif kasus (problem, approach, contribution, outcomes, liveUrl)
// pada tipe Project untuk mendukung visual storytelling terstruktur pada Section 02 Selected Works.
// Reason: Memenuhi panduan MASTER PROMPT agar setiap proyek memiliki latar belakang masalah, peran kontribusi,
// metodologi/tools, serta hasil capaian yang jelas tanpa mengklaim deployment yang tidak terverifikasi.

export interface Project {
  id: string;

  title: string;

  slug: string;

  shortDescription: string;

  longDescription: string;

  role: string;

  teamSize?: number;

  duration?: string;

  status: 'Idea' | 'Prototype' | 'Ongoing' | 'Completed';

  category: 'System Analysis' | 'Project Management' | 'Data Analytics' | 'Research' | 'Business Plan' | 'Fullstack Development';

  technologies: string[];

  tags: string[];

  image: string;

  problem?: string;

  approach?: string;

  contribution?: string;

  outcomes?: string;

  screenshots?: string[];

  documentation?: string[];

  githubUrl?: string;

  figmaUrl?: string;

  demoUrl?: string;

  featured: boolean;
}

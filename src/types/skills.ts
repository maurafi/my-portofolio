// [UPDATED] Skill Type Definition
// Description: Memperluas kategori skill agar selaras dengan 5 kelompok kompetensi di Section 04:
// Data Analytics, Machine Learning, Project & System Management, Productivity & Design Tools,
// serta Programming Fundamentals.
// Reason: Menyesuaikan klasifikasi keahlian profesional sesuai instruksi MASTER PROMPT tanpa persentase arbitrer.

export interface Skill {
  id: string;

  name: string;

  category:
    | 'Data Analytics'
    | 'Machine Learning'
    | 'Project & System Management'
    | 'Productivity & Design Tools'
    | 'Programming Fundamentals'
    | 'Programming'
    | 'Business Analysis'
    | 'UI/UX'
    | 'Database'
    | 'Tools'
    | 'Soft Skills';

  level?: 'Beginner' | 'Intermediate' | 'Advanced' | 'Core' | 'Applied';

  icon?: string;

  color?: string;

  featured: boolean;

  description?: string;
}

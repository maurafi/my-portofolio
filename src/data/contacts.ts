// [NEW] Contact Data Configuration
// Description: Menyediakan data kontak resmi Maulana Rafi mencakup email profesional, profil LinkedIn,
// tautan repositori GitHub, serta pesan ajakan kolaborasi profesional.
// Reason: Mengimplementasikan Section 07 Contact & Footer sesuai panduan MASTER PROMPT.

export interface ContactInfo {
  email: string;
  linkedin: string;
  github: string;
  location: string;
  availability: string;
  invitationText: string;
  collaborationFocus: string[];
}

export const contactData: ContactInfo = {
  email: 'maulanarafi.work@gmail.com',
  linkedin: 'https://www.linkedin.com/in/maulana-rafii/',
  github: 'https://github.com/maurafi',
  location: 'Karawang & Bekasi, Jawa Barat, Indonesia',
  availability: 'Terbuka untuk peluang magang, proyek riset, dan kolaborasi profesional',
  invitationText:
    'Tertarik untuk berkolaborasi dalam proyek seputar analisis proses bisnis, kepemimpinan inisiatif teknologi, atau analitika data terapan? Mari terhubung untuk mendiskusikan peluang dan solusi terstruktur.',
  collaborationFocus: [
    'Project Leadership & Inisiatif Digital',
    'System & Process Requirements Analysis',
    'Exploratory Data Analysis & Dashboard Development',
    'Riset Solusi Berkelanjutan (Circular Economy & AI)',
  ],
};

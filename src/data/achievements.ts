// [UPDATED] Achievements Data List
// Description: Mengisi data prestasi kompetisi dan penghargaan akademik Maulana Rafi secara lengkap,
// terverifikasi, dan bebas dari fabrikasi metrik.
// Mencakup 3x Juara 1 Business Plan Competition (AUP CUP, Veternity Beraksi, Kokesma Fest),
// Proposal Terbaik 1 PKM Centre Fasilkom UNSIKA, Awardee Beasiswa Sobat Bumi Pertamina Foundation,
// Semifinalis Monetion UMS, Grand Finalis Cloud Computing, dan Delegasi LKS IT-NSA Jawa Barat.
// Reason: Mengimplementasikan Section 05 Certifications & Achievements sesuai instruksi MASTER PROMPT.

import type { Achievement } from '@/types/achievements';

export const achievements: Achievement[] = [
  {
    id: 'juara-1-aup-cup-2026',
    title: 'Juara 1 — Business Plan Competition AUP CUP 2026',
    organizer: 'Universitas Bunda Mulia',
    date: '2026',
    level: 'National',
    category: 'Competition',
    position: 'Winner',
    description:
      'Meraih Juara 1 tingkat nasional melalui perancangan proposal inovasi bisnis berkelanjutan dengan pendekatan digital yang terstruktur, analisis kelayakan pasar, dan proyeksi finansial yang matang.',
    featured: true,
    tags: ['Business Plan', 'Project Leadership', 'Innovation'],
  },

  {
    id: 'juara-1-veternity-beraksi-2026',
    title: 'Juara 1 — Business Plan Competition Veternity Beraksi 2026',
    organizer: 'UPN "Veteran" Yogyakarta',
    date: '2026',
    level: 'National',
    category: 'Competition',
    position: 'Winner',
    description:
      'Memenangkan Juara 1 kompetisi rencana bisnis nasional yang menilai keunggulan proposisi nilai, analisis risiko operasional, dan integrasi solusi digital terapan.',
    featured: true,
    tags: ['Business Strategy', 'Market Analysis', 'National Competition'],
  },

  {
    id: 'juara-1-kokesma-fest-2026',
    title: 'Juara 1 — Business Plan Competition Kokesma Fest 2026',
    organizer: 'Universitas Sultan Ageng Tirtayasa (UNTIRTA)',
    date: '2026',
    level: 'National',
    category: 'Competition',
    position: 'Winner',
    description:
      'Meraih peringkat pertama dalam kompetisi business plan nasional berkat perumusan model bisnis sirkular yang adaptif dan potensi adopsi pengguna yang terukur.',
    featured: true,
    tags: ['Business Plan', 'Circular Economy', 'Competition'],
  },

  {
    id: 'juara-1-fasilkom-unsika-2025',
    title: 'Juara 1 — Business Plan Competition Fasilkom UNSIKA 2025',
    organizer: 'Fakultas Ilmu Komputer, Universitas Singaperbangsa Karawang',
    date: '2025',
    level: 'University',
    category: 'Competition',
    position: 'Winner',
    description:
      'Juara 1 kompetisi rencana bisnis teknologi informasi tingkat fakultas dengan menyajikan platform solusi digital terintegrasi.',
    featured: true,
    tags: ['Technology Innovation', 'UNSIKA', 'Business Plan'],
  },

  {
    id: 'proposal-terbaik-pkm-centre-2025',
    title: 'Proposal Terbaik 1 — PKM Centre Fasilkom UNSIKA 2025',
    organizer: 'PKM Centre Fasilkom, Universitas Singaperbangsa Karawang',
    date: '2025',
    level: 'University',
    category: 'Academic',
    position: 'Winner',
    description:
      'Terpilih sebagai Proposal Penelitian Terbaik 1 dalam skema Program Kreativitas Mahasiswa (PKM) bidang riset dan inovasi teknologi.',
    featured: true,
    tags: ['PKM', 'Research Proposal', 'Academic Writing'],
  },

  {
    id: 'pertamina-sobat-bumi-awardee-2026',
    title: 'Penerima Beasiswa Sobat Bumi — Pertamina Foundation',
    organizer: 'Pertamina Foundation',
    date: '2025 – 2026',
    level: 'National',
    category: 'Leadership',
    position: 'Awardee',
    description:
      'Dianugerahi beasiswa bergengsi Pertamina Foundation dengan kontribusi kepemimpinan aktif pada inisiatif edukasi dan lingkungan Desa Energi Berdikari (DEB).',
    featured: true,
    tags: ['Scholarship', 'Community Service', 'Renewable Energy'],
  },

  {
    id: 'semifinalis-monetion-2025',
    title: 'Semifinalis — Business Plan Competition Monetion 2025',
    organizer: 'Universitas Muhammadiyah Surakarta (UMS)',
    date: '2025',
    level: 'National',
    category: 'Competition',
    position: 'Finalist',
    description:
      'Menembus babak semifinal pada kompetisi ide bisnis berskala nasional dari puluhan tim perguruan tinggi se-Indonesia.',
    featured: false,
    tags: ['Business Plan', 'National Finalist'],
  },

  {
    id: 'grand-finalis-cloud-computing-2023',
    title: 'Grand Finalis — Cloud Computing Competition 2023',
    organizer: 'Kompetisi Cloud Computing Nasional',
    date: '2023',
    level: 'National',
    category: 'Competition',
    position: 'Finalist',
    description:
      'Menembus babak Grand Final dalam kompetisi perancangan arsitektur server, konfigurasi layanan cloud, dan keandalan sistem.',
    featured: false,
    tags: ['Cloud Computing', 'Infrastructure', 'Networking'],
  },

  {
    id: 'delegasi-lks-it-nsa-jabar-2023',
    title: 'Delegasi Kabupaten Bekasi — LKS IT Network Systems Administration',
    organizer: 'Dinas Pendidikan Provinsi Jawa Barat',
    date: '2023',
    level: 'Regional',
    category: 'Competition',
    position: 'Finalist',
    description:
      'Terpilih sebagai perwakilan resmi Kabupaten Bekasi pada ajang Lomba Kompetensi Siswa (LKS) IT-NSA tingkat Provinsi Jawa Barat.',
    featured: false,
    tags: ['LKS IT-NSA', 'Network Systems', 'Jawa Barat'],
  },

  {
    id: 'juara-harapan-3-esai-bekasi',
    title: 'Juara Harapan 3 — Lomba Menulis Esai Kabupaten Bekasi',
    organizer: 'Pemerintah Kabupaten Bekasi',
    date: '2021',
    level: 'Regional',
    category: 'Academic',
    position: 'Runner Up',
    description:
      'Penghargaan penulisan esai kritis bertema inovasi dan kepemudaan tingkat pelajar se-Kabupaten Bekasi.',
    featured: false,
    tags: ['Essay Writing', 'Literacy', 'Critical Thinking'],
  },
];

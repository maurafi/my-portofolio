// [UPDATED] Site Configuration Data
// Description: Memperbarui data profil utama Maulana Rafi dengan positioning: Project Leadership,
// System Analysis, dan Data Analytics. Menyediakan teks pengantar profesional dalam Bahasa Indonesia,
// highlight statistik (IPK 3.93, 3x Juara 1, 1600+ peserta Edufair, 2000+ dataset stunting),
// dan data pendidikan (UNSIKA & SMKN 1 Cikarang Selatan).
// Reason: Mengimplementasikan konten Section 01 dan 06 sesuai instruksi MASTER PROMPT.

import type { SiteConfig } from '@/types/site';

export const siteConfig: SiteConfig = {
  name: 'Maulana Rafi',
  nickname: 'Rafi',
  headline: 'Turning Problems Into Structured Solutions.',
  role: ['Project Leadership', 'System Analysis', 'Data Analytics'],
  shortDescription:
    'Mahasiswa Sistem Informasi dengan fokus pada Project Leadership, System Analysis, dan Data Analytics. Memiliki pengalaman dalam mengelola inisiatif organisasi, khususnya sebagai Ketua Divisi Edukasi Himsika, menganalisis proses operasional, mengolah data, serta mengembangkan solusi berbasis teknologi.',
  longDescription:
    'Fokus mengeksplorasi aktivitas yang mengembangkan kemampuan kepemimpinan, analisis sistem, dan analitika data untuk mengubah tantangan kompleks menjadi solusi nyata yang terstruktur, berdampak, dan terukur. Berfokus pada pemecahan masalah operasional industri, inisiatif keberlanjutan, serta pengembangan prototipe berbasis teknologi.',
  email: 'maulanarafi.work@gmail.com',
  location: 'Karawang & Bekasi, Indonesia',
  availability: 'Open for Project Leadership, System Analysis & Data Roles',
  profileImage: '/assets/profile/profiles.jpg',
  resume: {
    label: 'Download CV',
    href: '/resume/Maulana_Rafi_Resume.pdf',
  },
  socialLinks: {
    github: 'https://github.com/maurafi',
    linkedin: 'https://www.linkedin.com/in/maulana-rafii/',
    email: 'mailto:maulanarafi96002@gmail.com',
  },
  brand: {
    shortName: 'MR',
    logoText: 'Maulana Rafi',
    slogan: 'Turning Problems Into Structured Solutions.',
  },
  navigation: [
    { label: 'Beranda', href: '#home' },
    { label: 'Karya Terpilih', href: '#projects' },
    { label: 'Pengalaman', href: '#experience' },
    { label: 'Keahlian', href: '#skills' },
    { label: 'Prestasi & Sertifikasi', href: '#achievements' },
    { label: 'Kontak', href: '#contact' },
  ],
  stats: [
    {
      value: '3.93',
      label: 'IPK / 4.00',
      description: 'Universitas Singaperbangsa Karawang (Sistem Informasi)',
    },
    {
      value: '4×',
      label: 'Juara 1 Business Plan',
      description: 'AUP CUP 2026, Veternity Beraksi 2026, Kokesma Fest 2026, Compfair Fasilkom 2025',
    },
    {
      value: '5',
      label: 'Kontribusi Projek',
      description: 'Dashboard Quality Analysis, Fashlova, Smart Stunting, Palmora, IT Inventory',
    },
    {
      value: '2.000+',
      label: 'Dataset Riset Stunting',
      description: 'Eksperimen computer vision & transfer learning',
    },
  ],
  focusAreas: [
    {
      title: 'Project Management',
      description: 'Memimpin koordinasi tim multidisiplin, menyusun perencanaan strategis, mengelola risiko, dan mengawal eksekusi inisiatif organisasi maupun kompetisi hingga tuntas.',
      tags: ['Cross-functional Coordination', 'Strategic Planning', 'Risk Mitigation', 'Stakeholder Management'],
    },
    {
      title: 'System Analysis',
      description: 'Mengidentifikasi permasalahan proses bisnis, memetakan alur operasional, merumuskan spesifikasi kebutuhan sistem, dan menyelaraskan alur data dengan dokumentasi kendali.',
      tags: ['Requirements Analysis', 'Process Mapping', 'Change Management', 'Traceability Flow'],
    },
    {
      title: 'Data Analytics',
      description: 'Mengolah dan memvalidasi dataset mentah, melakukan exploratory data analysis (EDA), serta membangun visualisasi metrik dan dashboard interaktif untuk mendukung pengambilan keputusan.',
      tags: ['Python', 'Pandas', 'Streamlit', 'Exploratory Data Analysis', 'Data Validation'],
    },
  ],
  education: [
    {
      institution: 'Universitas Singaperbangsa Karawang (UNSIKA)',
      degree: 'Sarjana (S1)',
      major: 'Sistem Informasi',
      period: 'Agu 2024 – Sekarang',
      score: 'IPK 3.93 / 4.00',
      highlights: [
        'Penerima Beasiswa Sobat Bumi — Pertamina Foundation untuk dedikasi program pengabdian masyarakat.',
        'Aktif dalam berbagai program pengembangan akademik, pelatihan data analytics, dan kepanitiaan universitas.',
        'Juara 1 Business Plan Competition Fasilkom UNSIKA 2025 & Proposal Terbaik PKM Centre 2025.',
      ],
    },
    {
      institution: 'SMKN 1 Cikarang Selatan',
      degree: 'Sekolah Menengah Kejuruan (SMK)',
      major: 'Teknik Jaringan Komputer dan Telekomunikasi (TJKT)',
      period: 'Jul 2021 – Jun 2024',
      score: 'Nilai Akhir: 86.5 / 100',
      highlights: [
        'Ketua OSIS memimpin 50+ pengurus di 9 divisi serta menginisiasi unit usaha mandiri BUMO.',
        'Delegasi Kabupaten Bekasi pada Lomba Kompetensi Siswa (LKS) IT-NSA tingkat Provinsi Jawa Barat 2023.',
        'Grand Finalis Cloud Computing Competition tingkat nasional tahun 2023.',
      ],
    },
  ],
  seo: {
    title: 'Maulana Rafi — Portfolio | Project Leadership, System Analysis & Data Analytics',
    description: 'Portofolio profesional Maulana Rafi, mahasiswa Sistem Informasi dengan fokus pada Project Leadership, System Analysis, dan Data Analytics.',
    keywords: ['Maulana Rafi', 'Portofolio Sistem Informasi', 'Project Leadership', 'System Analysis', 'Data Analytics', 'UNSIKA', 'Fashlova', 'Palmora', 'Smart Stunting'],
    author: 'Maulana Rafi',
  },
  footer: {
    copyright: `© ${new Date().getFullYear()} Maulana Rafi. All rights reserved.`,
  },
};

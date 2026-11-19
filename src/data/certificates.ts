// [UPDATED] Certificates Data List
// Description: Mengisi daftar sertifikasi resmi Maulana Rafi mencakup AWS Certified AI Practitioner,
// Alibaba Cloud Certified Associate (ACA), Google Play Academy Listing Store Certificate,
// dan sertifikasi keahlian Dicoding (Analisis Data dengan Python, Machine Learning Pemula, Dasar AI).
// Menjaga kerahasiaan nomor registrasi sensitif (Candidate ID / Score ID) sesuai instruksi MASTER PROMPT.
// Reason: Mengimplementasikan sub-bagian Certifications pada Section 05.

import type { Certificate } from '@/types/certificates';

export const certificates: Certificate[] = [
  {
    id: 'aws-certified-ai-practitioner',
    title: 'AWS Certified AI Practitioner',
    issuer: 'Amazon Web Services (AWS)',
    issueDate: '23 Okt 2026',
    category: 'Technical',
    skills: ['Artificial Intelligence', 'AWS Cloud Services', 'Machine Learning Concepts', 'GenAI Governance'],
    featured: true,
    credentialUrl: 'https://aws.amazon.com/verification',
  },

  {
    id: 'alibaba-cloud-certified-associate',
    title: 'Alibaba Cloud Certified Associate (ACA) — Cloud Computing',
    issuer: 'Alibaba Cloud',
    issueDate: '2024',
    category: 'Technical',
    skills: ['Cloud Computing Fundamentals', 'Data Pipeline', 'Elastic Compute Service', 'Server Architecture'],
    featured: true,
    credentialUrl: 'https://alibabacloud.com',
  },

  {
    id: 'google-play-academy-listing-store',
    title: 'Google Play Academy — Listing Store Certificate',
    issuer: 'Google Play Academy',
    issueDate: '2024',
    category: 'Business',
    skills: ['Store Listing Optimization', 'App Discovery', 'Digital Product Performance', 'App Growth'],
    featured: true,
    credentialUrl: 'https://play.google.com/console/about/guides/',
  },

  {
    id: 'dicoding-analisis-data-python',
    title: 'Belajar Analisis Data dengan Python',
    issuer: 'Dicoding Indonesia',
    issueDate: '2024',
    category: 'Data',
    skills: ['Python', 'Data Wrangling', 'Exploratory Data Analysis', 'Data Visualization', 'Pandas'],
    featured: true,
    credentialUrl: 'https://www.dicoding.com/certificates',
  },

  {
    id: 'dicoding-machine-learning-pemula',
    title: 'Belajar Machine Learning untuk Pemula',
    issuer: 'Dicoding Indonesia',
    issueDate: '2024',
    category: 'Technical',
    skills: ['Supervised Learning', 'Model Evaluation', 'Scikit-Learn', 'Classification & Regression'],
    featured: true,
    credentialUrl: 'https://www.dicoding.com/certificates',
  },

  {
    id: 'dicoding-dasar-ai',
    title: 'Belajar Dasar Artificial Intelligence',
    issuer: 'Dicoding Indonesia',
    issueDate: '2024',
    category: 'Technical',
    skills: ['Artificial Intelligence Basics', 'Heuristic Search', 'Neural Networks Overview', 'Ethics in AI'],
    featured: false,
    credentialUrl: 'https://www.dicoding.com/certificates',
  },
];

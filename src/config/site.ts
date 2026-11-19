// [UPDATED] Config Site Settings
// Description: Menyelaraskan konfigurasi global website dengan data profil resmi Maulana Rafi di src/data/site.ts.
// Menjamin konsistensi metadata, navigasi anchor link responsif, resume, dan tautan sosial untuk komponen layout.
// Reason: Menghilangkan inkonsistensi tipe antara config/site dan data/site, serta mendukung navigasi single-page portofolio.

import { siteConfig as baseSiteConfig } from '@/data/site';

export const siteConfig = baseSiteConfig;

export type SiteConfig = typeof siteConfig;

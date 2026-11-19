// [NEW] Achievements Section Component
// Description: Komponen Section 05 yang memisahkan dan menampilkan prestasi kompetisi bisnis/akademik
// (menggunakan AchievementCard) dan sertifikasi resmi industri (menggunakan CertificateCard).
// Mencakup 3x Juara 1 Business Plan, Proposal Terbaik 1 PKM, Beasiswa Sobat Bumi, AWS Certified AI Practitioner, dsb.
// Purpose: Menyajikan bukti pengakuan keunggulan kompetitif dan validasi sertifikasi profesional Maulana Rafi.

'use client';

import { useState } from 'react';
import Container from '@/components/layout/Container';
import Section from '@/components/layout/Section';
import SectionHeader from '@/components/layout/SectionHeader';
import AchievementCard from '@/components/cards/AchievementCard';
import CertificateCard from '@/components/cards/CertificateCard';
import { achievements } from '@/data/achievements';
import { certificates } from '@/data/certificates';

export default function Achievements() {
  const [activeTab, setActiveTab] = useState<'all' | 'achievements' | 'certificates'>('all');

  return (
    <Section id="achievements" className="py-20 bg-muted/20 border-t border-border">
      <Container>
        <SectionHeader
          eyebrow="Honors & Credentials"
          title="Prestasi Kompetisi & Sertifikasi Profesional"
          description="Rekognisi keunggulan inovasi bisnis melalui kompetisi nasional, proposal riset terbaik, beasiswa pengabdian masyarakat, dan kredensial sertifikasi teknologi komputasi awan dan AI."
        >
          {/* View Mode Toggle Buttons */}
          <div className="flex flex-wrap items-center gap-2 pt-2">
            <button
              type="button"
              onClick={() => setActiveTab('all')}
              className={`
                rounded-full px-4 py-1.5 text-xs font-semibold transition-all
                ${
                  activeTab === 'all'
                    ? 'bg-primary text-primary-foreground shadow-sm'
                    : 'border border-border bg-card text-muted-foreground hover:bg-muted hover:text-foreground'
                }
              `}
            >
              Semua ({achievements.length + certificates.length})
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('achievements')}
              className={`
                rounded-full px-4 py-1.5 text-xs font-semibold transition-all
                ${
                  activeTab === 'achievements'
                    ? 'bg-primary text-primary-foreground shadow-sm'
                    : 'border border-border bg-card text-muted-foreground hover:bg-muted hover:text-foreground'
                }
              `}
            >
              Prestasi &amp; Penghargaan ({achievements.length})
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('certificates')}
              className={`
                rounded-full px-4 py-1.5 text-xs font-semibold transition-all
                ${
                  activeTab === 'certificates'
                    ? 'bg-primary text-primary-foreground shadow-sm'
                    : 'border border-border bg-card text-muted-foreground hover:bg-muted hover:text-foreground'
                }
              `}
            >
              Sertifikasi Resmi ({certificates.length})
            </button>
          </div>
        </SectionHeader>

        {/* Part 1: Competition & Academic Achievements */}
        {(activeTab === 'all' || activeTab === 'achievements') && (
          <div className="space-y-6 mt-10">
            <div className="flex items-center justify-between border-b border-border pb-3">
              <h3 className="text-xl font-bold text-foreground">
                🏆 Prestasi Kompetisi &amp; Penghargaan Akademik
              </h3>
              <span className="text-xs font-semibold text-muted-foreground">
                {achievements.length} Penghargaan Terverifikasi
              </span>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {achievements.map((item) => (
                <AchievementCard key={item.id} achievement={item} />
              ))}
            </div>
          </div>
        )}

        {/* Part 2: Professional Certifications */}
        {(activeTab === 'all' || activeTab === 'certificates') && (
          <div className={`space-y-6 ${activeTab === 'all' ? 'mt-20 pt-10 border-t border-border' : 'mt-10'}`}>
            <div className="flex items-center justify-between border-b border-border pb-3">
              <h3 className="text-xl font-bold text-foreground">
                📜 Sertifikasi Profesional &amp; Kredensial Industri
              </h3>
              <span className="text-xs font-semibold text-muted-foreground">
                {certificates.length} Kredensial Resmi
              </span>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {certificates.map((cert) => (
                <CertificateCard key={cert.id} certificate={cert} />
              ))}
            </div>
          </div>
        )}
      </Container>
    </Section>
  );
}

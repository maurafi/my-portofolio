// [NEW] Experiences Section Component
// Description: Komponen Section 03 & Section 06 yang mengintegrasikan pengalaman profesional industri
// (PT Asama, PT Takagi), kepemimpinan organisasi (HIMSIKA, Edufair, Sobat Bumi, OSIS),
// serta riwayat pendidikan formal (UNSIKA & SMKN 1 Cikarang Selatan) dengan penyajian visual interaktif.
// Purpose: Mendemonstrasikan kematangan profesional, kepemimpinan tim, dan konsistensi rekam jejak akademik.

'use client';

import { useState } from 'react';
import Container from '@/components/layout/Container';
import Section from '@/components/layout/Section';
import SectionHeader from '@/components/layout/SectionHeader';
import ExperienceCard from '@/components/cards/ExperienceCard';
import Badge from '@/components/common/Badge';
import { experiences } from '@/data/experiences';
import { siteConfig } from '@/data/site';

export default function Experiences() {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = [
    { key: 'All', label: 'Semua Pengalaman' },
    { key: 'Professional', label: 'Profesional & Industri' },
    { key: 'Leadership', label: 'Kepemimpinan Organisasi' },
    { key: 'Volunteer', label: 'Pengabdian Masyarakat' },
  ];

  const filteredExperiences =
    activeCategory === 'All'
      ? experiences
      : experiences.filter((exp) => exp.category === activeCategory);

  return (
    <Section id="experience" className="py-20 bg-muted/20 border-t border-border">
      <Container>
        <SectionHeader
          eyebrow="Experience & Leadership"
          title="Pengalaman Profesional & Kepemimpinan"
          description="Rekam jejak keterlibatan aktif dalam operasional teknologi manufaktur, kepemimpinan inisiatif berskala nasional, pengabdian masyarakat berkelanjutan, dan tata kelola organisasi."
        >
          {/* Filter Categories */}
          <div className="flex flex-wrap items-center gap-2 pt-2">
            {categories.map((cat) => (
              <button
                key={cat.key}
                type="button"
                onClick={() => setActiveCategory(cat.key)}
                className={`
                  rounded-full px-4 py-1.5 text-xs font-semibold transition-all
                  ${
                    activeCategory === cat.key
                      ? 'bg-primary text-primary-foreground shadow-sm'
                      : 'border border-border bg-card text-muted-foreground hover:bg-muted hover:text-foreground'
                  }
                `}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </SectionHeader>

        {/* Experience Cards Grid */}
        <div className="grid gap-8 md:grid-cols-2 mt-10">
          {filteredExperiences.map((experience) => (
            <ExperienceCard key={experience.id} experience={experience} />
          ))}
        </div>

        {/* SECTION 06 — EDUCATION TIMELINE & CARDS */}
        <div className="mt-24 pt-16 border-t border-border">
          <SectionHeader
            eyebrow="Academic Background"
            title="Riwayat Pendidikan Formal"
            description="Fondasi akademis Sistem Informasi dan keteknikan jaringan yang menopang pola pikir analitis, kedisiplinan riset, dan kemampuan pemecahan masalah."
          />

          <div className="grid gap-8 md:grid-cols-2 mt-8">
            {siteConfig.education.map((edu) => (
              <div
                key={edu.institution}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-2xl
                  border
                  border-border
                  bg-card
                  p-8
                  shadow-sm
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:shadow-lg
                  flex
                  flex-col
                  justify-between
                "
              >
                <div className="space-y-5">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <Badge>{edu.degree}</Badge>
                    <span className="text-xs font-semibold text-muted-foreground">
                      {edu.period}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {edu.institution}
                    </h3>
                    <p className="text-base font-semibold text-primary mt-1">
                      {edu.major}
                    </p>
                    {edu.score && (
                      <div className="mt-2 inline-flex items-center gap-1.5 rounded-lg bg-primary/10 px-3 py-1 text-xs font-bold text-primary">
                        <span>Prestasi Akademik:</span>
                        <span>{edu.score}</span>
                      </div>
                    )}
                  </div>

                  {edu.highlights && edu.highlights.length > 0 && (
                    <div className="space-y-2 pt-2 border-t border-border">
                      <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                        Sorotan Capaian &amp; Aktivitas:
                      </p>
                      <ul className="space-y-2 text-xs text-muted-foreground">
                        {edu.highlights.map((h, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-primary font-bold">●</span>
                            <span className="leading-relaxed">{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}

// [NEW] Skills Preview Section Component
// Description: Komponen Section 04 Skills & Technical Expertise yang mengelompokkan keahlian ke dalam 5
// kategori kompetensi (Data Analytics, Machine Learning, Project & System Management, Productivity & Design,
// Programming Fundamentals) menggunakan kartu kompetensi terstruktur dan badge tanpa persentase arbitrer.
// Purpose: Menyajikan kredibilitas keahlian analitis, kepemimpinan, dan teknis Maulana Rafi secara profesional.

'use client';

import { useState } from 'react';
import Container from '@/components/layout/Container';
import Section from '@/components/layout/Section';
import SectionHeader from '@/components/layout/SectionHeader';
import Tag from '@/components/common/Tag';
import { skills } from '@/data/skills';

export default function SkillsPreview() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = [
    { key: 'All', label: 'Semua Kategori', icon: '⚡' },
    { key: 'Data Analytics', label: 'Data Analytics', icon: '📊' },
    { key: 'Machine Learning', label: 'Machine Learning & AI', icon: '🤖' },
    { key: 'Project & System Management', label: 'Project & System Management', icon: '🎯' },
    { key: 'Productivity & Design Tools', label: 'Productivity & Design', icon: '🎨' },
    { key: 'Programming Fundamentals', label: 'Programming Fundamentals', icon: '⚙️' },
  ];

  const filteredSkills =
    selectedCategory === 'All'
      ? skills
      : skills.filter((s) => s.category === selectedCategory);

  // Grouping for structured matrix view
  const categoryKeys = [
    'Data Analytics',
    'Machine Learning',
    'Project & System Management',
    'Productivity & Design Tools',
    'Programming Fundamentals',
  ];

  return (
    <Section id="skills" className="py-20 border-t border-border">
      <Container>
        <SectionHeader
          eyebrow="Skills & Technical Expertise"
          title="Keahlian Teknis & Metodologis"
          description="Struktur kompetensi analitis, pemodelan sistem informasi, dan perangkat lunak pendukung kerja. Disusun berdasarkan kapabilitas terapan tanpa representasi persentase keahlian artifisial."
        >
          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 pt-2">
            {categories.map((c) => (
              <button
                key={c.key}
                type="button"
                onClick={() => setSelectedCategory(c.key)}
                className={`
                  inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 text-xs font-semibold transition-all
                  ${
                    selectedCategory === c.key
                      ? 'bg-primary text-primary-foreground shadow-sm'
                      : 'border border-border bg-card text-muted-foreground hover:bg-muted hover:text-foreground'
                  }
                `}
              >
                <span>{c.icon}</span>
                <span>{c.label}</span>
              </button>
            ))}
          </div>
        </SectionHeader>

        {/* Dynamic Skill Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-10">
          {filteredSkills.map((skill) => (
            <div
              key={skill.id}
              className="
                group
                flex
                flex-col
                justify-between
                rounded-2xl
                border
                border-border
                bg-card
                p-5
                shadow-sm
                transition-all
                duration-200
                hover:-translate-y-1
                hover:border-primary/50
                hover:shadow-md
              "
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-2xl">{skill.icon ?? '🛠️'}</span>
                  <span className="text-[10px] font-bold tracking-wider uppercase text-muted-foreground bg-muted px-2 py-0.5 rounded-md">
                    {skill.category.split(' ')[0]}
                  </span>
                </div>

                <div>
                  <h4 className="text-base font-bold text-foreground group-hover:text-primary transition-colors">
                    {skill.name}
                  </h4>
                  {skill.description && (
                    <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                      {skill.description}
                    </p>
                  )}
                </div>
              </div>

              {skill.level && (
                <div className="mt-4 pt-3 border-t border-border flex items-center justify-between text-xs">
                  <span className="text-muted-foreground">Kompetensi:</span>
                  <span className="font-semibold text-primary">{skill.level}</span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Structured Competency Matrix Overview */}
        <div className="mt-16 rounded-2xl border border-border bg-muted/20 p-6 md:p-8">
          <h3 className="text-lg font-bold text-foreground mb-4">
            Ringkasan Matriks Keahlian Terpadu
          </h3>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {categoryKeys.map((catKey) => {
              const catSkills = skills.filter((s) => s.category === catKey);
              return (
                <div key={catKey} className="space-y-2.5">
                  <p className="text-xs font-bold uppercase tracking-wider text-primary">
                    {catKey}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {catSkills.map((s) => (
                      <Tag key={s.id}>{s.name}</Tag>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </Section>
  );
}

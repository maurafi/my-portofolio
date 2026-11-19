// [NEW] Projects Section Component
// Description: Komponen Section 02 Selected Works yang menampilkan 5 proyek utama
// (Dashboard Quality Analysis, Fashlova, Smart Stunting, Palmora, PT Asama IT Inventory)
// menggunakan kartu ProjectCard responsif dengan filter kategori interaktif.
// Purpose: Menyajikan bukti nyata kemampuan Data Analytics, Project Leadership, System Analysis, dan Riset.

'use client';

import { useState } from 'react';
import Container from '@/components/layout/Container';
import Section from '@/components/layout/Section';
import SectionHeader from '@/components/layout/SectionHeader';
import ProjectCard from '@/components/cards/ProjectCard';
import { projects } from '@/data/projects';

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Data Analytics', 'Project Management', 'System Analysis', 'Research'];

  const filteredProjects =
    activeCategory === 'All'
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <Section id="projects" className="py-20">
      <Container>
        <SectionHeader
          eyebrow="Selected Works"
          title="Karya Terpilih & Studi Kasus"
          description="Inisiatif dan proyek yang membuktikan kemampuan pemecahan masalah nyata, perumusan arsitektur sistem, kepemimpinan koordinasi tim, serta analitika data."
        >
          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2 pt-2">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`
                  rounded-full px-4 py-1.5 text-xs font-semibold transition-all
                  ${
                    activeCategory === cat
                      ? 'bg-primary text-primary-foreground shadow-sm'
                      : 'border border-border bg-card text-muted-foreground hover:bg-muted hover:text-foreground'
                  }
                `}
              >
                {cat === 'All' ? 'Semua Proyek' : cat}
              </button>
            ))}
          </div>
        </SectionHeader>

        {/* Project Grid */}
        <div className="grid gap-8 md:grid-cols-2 mt-10">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </Container>
    </Section>
  );
}

// [NEW] Professional Focus Section
// Description: Komponen pendukung Section 01 yang menampilkan 3 pilar fokus profesional
// (Project Leadership, System Analysis, Data Analytics) beserta 4 metrik capaian utama
// (IPK 3.93, 3x Juara 1 Business Plan, 1.600+ peserta Edufair, 2.000+ dataset stunting).
// Purpose: Membangun narasi kredibel mengenai kapabilitas problem-solving dan kepemimpinan Maulana Rafi.

import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import SectionHeader from "@/components/layout/SectionHeader";
import Tag from "@/components/common/Tag";
import { siteConfig } from "@/data/site";

export default function ProfessionalFocus() {
  return (
    <Section className="py-16 bg-muted/30 border-y border-border">
      <Container>
        {/* Highlight Numbers & Metrics Grid */}
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:gap-6 mb-16">
          {siteConfig.stats.map((stat) => (
            <div
              key={stat.label}
              className="
                group
                relative
                overflow-hidden
                rounded-2xl
                border
                border-border
                bg-card
                p-6
                shadow-sm
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-md
              "
            >
              <div className="space-y-2">
                <span className="text-3xl font-extrabold tracking-tight text-primary md:text-4xl lg:text-5xl">
                  {stat.value}
                </span>
                <p className="text-sm font-bold text-foreground">{stat.label}</p>
                {stat.description && (
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {stat.description}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* 3 Core Competency Pillars */}
        <SectionHeader
          eyebrow="Core Competency"
          title="Tiga Pilar Fokus Profesional"
          description="Mengintegrasikan kepemimpinan inisiatif, pemodelan sistem informasi, dan analitika data untuk menghasilkan solusi yang terstruktur dan berdampak."
          align="center"
        />

        <div className="grid gap-6 md:grid-cols-3 mt-8">
          {siteConfig.focusAreas.map((area, idx) => (
            <div
              key={area.title}
              className="
                group
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
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary font-bold text-sm">
                    0{idx + 1}
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Area Keahlian
                  </span>
                </div>

                <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {area.title}
                </h3>

                <p className="text-sm leading-relaxed text-muted-foreground">
                  {area.description}
                </p>
              </div>

              {area.tags && (
                <div className="mt-6 flex flex-wrap gap-1.5 pt-4 border-t border-border">
                  {area.tags.map((tag) => (
                    <Tag key={tag}>{tag}</Tag>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}

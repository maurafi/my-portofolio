// [UPDATED] Experience Card Component
// Description: Menyempurnakan ExperienceCard agar menampilkan poin tanggung jawab (responsibilities),
// capaian kunci (achievements), keahlian terkait (skills), serta galeri dokumentasi foto nyata (images)
// dengan aspek rasio rapi dan alt text deskriptif.
// Reason: Memenuhi instruksi MASTER PROMPT Step 4 & 5 Asset Integration pada Section 03 Experience & Leadership.

import Image from 'next/image';
import Badge from '@/components/common/Badge';
import Tag from '@/components/common/Tag';
import type { Experience } from '@/types/experiences';

interface ExperienceCardProps {
  experience: Experience;
}

export default function ExperienceCard({ experience }: ExperienceCardProps) {
  return (
    <article
      className="
        group
        flex
        flex-col
        justify-between
        rounded-2xl
        border
        border-border
        bg-card
        p-6
        shadow-sm
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-lg
      "
    >
      <div className="space-y-6">
        {/* Header: Badges & Duration */}
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex flex-wrap gap-2">
            {experience.featured && <Badge>Featured</Badge>}
            <Badge>{experience.category}</Badge>
            {experience.employmentType && <Badge>{experience.employmentType}</Badge>}
          </div>

          <div className="text-xs font-semibold text-muted-foreground">
            <span>{experience.startDate} — {experience.endDate}</span>
          </div>
        </div>

        {/* Position & Organization */}
        <div>
          <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
            {experience.position}
          </h3>

          <p className="font-semibold text-primary mt-1">
            {experience.organization}
          </p>

          {experience.location && (
            <p className="text-xs text-muted-foreground mt-0.5">
              📍 {experience.location}
            </p>
          )}
        </div>

        {/* Summary */}
        <p className="text-sm leading-relaxed text-muted-foreground">
          {experience.summary}
        </p>

        {/* Responsibilities */}
        {experience.responsibilities && experience.responsibilities.length > 0 && (
          <div className="space-y-2">
            <p className="text-xs font-bold uppercase tracking-wider text-foreground">
              Tanggung Jawab &amp; Kontribusi:
            </p>
            <ul className="space-y-1.5 text-xs text-muted-foreground">
              {experience.responsibilities.map((resp, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                  <span className="leading-relaxed">{resp}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Achievements / Metrics */}
        {experience.achievements && experience.achievements.length > 0 && (
          <div className="rounded-xl bg-emerald-500/10 border border-emerald-500/20 p-3.5 space-y-1.5">
            <p className="text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400">
              Hasil &amp; Dampak Terukur:
            </p>
            <ul className="space-y-1 text-xs text-emerald-900 dark:text-emerald-300">
              {experience.achievements.map((ach, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="font-bold">✓</span>
                  <span className="leading-relaxed">{ach}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Supporting Photographic Documentation Gallery */}
        {experience.images && experience.images.length > 0 && (
          <div className="space-y-2 pt-2">
            <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
              Dokumentasi Kegiatan ({experience.images.length} Foto):
            </p>
            <div className="grid grid-cols-3 gap-2">
              {experience.images.slice(0, 3).map((imgUrl, idx) => (
                <div
                  key={imgUrl}
                  className="relative aspect-4/3 overflow-hidden rounded-lg border border-border bg-muted shadow-xs transition hover:opacity-90"
                >
                  <Image
                    src={imgUrl}
                    alt={`${experience.position} ${experience.organization} - Dokumentasi ${idx + 1}`}
                    fill
                    sizes="(max-width: 768px) 33vw, 20vw"
                    className="object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Skills Footer */}
      <div className="mt-6 pt-4 border-t border-border">
        <div className="flex flex-wrap gap-1.5">
          {experience.skills.map((skill) => (
            <Tag key={skill}>{skill}</Tag>
          ))}
        </div>
      </div>
    </article>
  );
}

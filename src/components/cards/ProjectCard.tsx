// [UPDATED] Project Card Component
// Description: Menyempurnakan kartu proyek agar menampilkan informasi terstruktur: peran, durasi,
// ringkasan latar belakang masalah, hasil capaian, teknologi, dan tombol aksi (Live Demo, GitHub, Figma).
// Reason: Memenuhi standar visual storytelling Section 02 Selected Works sesuai instruksi MASTER PROMPT.

import Image from 'next/image';
import Link from 'next/link';

import Badge from '@/components/common/Badge';
import Tag from '@/components/common/Tag';
import { Button } from '@/components/ui/button';

import type { Project } from '@/types/projects';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article
      className="
        group
        flex
        flex-col
        justify-between
        overflow-hidden
        rounded-2xl
        border
        border-border
        bg-card
        shadow-sm
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-xl
      "
    >
      <div>
        {/* Thumbnail Preview */}
        <div className="relative aspect-video w-full overflow-hidden bg-muted">
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />

          {/* Featured & Status Badges */}
          <div className="absolute top-4 left-4 flex flex-wrap gap-2">
            {project.featured && <Badge>Featured</Badge>}
            <Badge>{project.status}</Badge>
          </div>

          {project.duration && (
            <div className="absolute top-4 right-4">
              <span className="rounded-md bg-background/80 backdrop-blur-md px-2.5 py-1 text-xs font-medium text-foreground">
                {project.duration}
              </span>
            </div>
          )}
        </div>

        {/* Content Body */}
        <div className="space-y-5 p-6">
          {/* Category */}
          <div className="flex flex-wrap items-center justify-between gap-2">
            <span className="text-xs font-bold uppercase tracking-wider text-primary">
              {project.category}
            </span>
            {project.teamSize && (
              <span className="text-xs text-muted-foreground">
                Tim: {project.teamSize} orang
              </span>
            )}
          </div>

          {/* Title & Short Description */}
          <div>
            <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
              {project.title}
            </h3>

            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {project.shortDescription}
            </p>
          </div>

          {/* Role */}
          <div className="rounded-lg bg-muted/40 p-3 border border-border/60">
            <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Peran Utama
            </p>
            <p className="text-sm font-semibold text-foreground mt-0.5">
              {project.role}
            </p>
          </div>

          {/* Structured Analytical Case Details (Problem & Outcomes) */}
          {(project.problem || project.outcomes) && (
            <div className="space-y-2.5 text-xs text-muted-foreground">
              {project.problem && (
                <div>
                  <span className="font-semibold text-foreground">Latar Masalah: </span>
                  <span>{project.problem}</span>
                </div>
              )}
              {project.outcomes && (
                <div>
                  <span className="font-semibold text-foreground">Capaian: </span>
                  <span className="text-emerald-600 dark:text-emerald-400 font-medium">
                    {project.outcomes}
                  </span>
                </div>
              )}
            </div>
          )}

          {/* Tech Stack Tags */}
          <div className="flex flex-wrap gap-1.5 pt-2">
            {project.technologies.map((tech) => (
              <Tag key={tech}>{tech}</Tag>
            ))}
          </div>
        </div>
      </div>

      {/* Action Links */}
      <div className="p-6 pt-0">
        <div className="flex flex-wrap gap-3 border-t border-border pt-4">
          {project.demoUrl && (
            <Link href={project.demoUrl} target="_blank" rel="noopener noreferrer">
              <Button size="sm">Buka Live Demo</Button>
            </Link>
          )}

          {project.githubUrl && (
            <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="sm">
                Lihat GitHub
              </Button>
            </Link>
          )}

          {project.figmaUrl && (
            <Link href={project.figmaUrl} target="_blank" rel="noopener noreferrer">
              <Button variant="secondary" size="sm">
                Prototipe Figma
              </Button>
            </Link>
          )}
        </div>
      </div>
    </article>
  );
}

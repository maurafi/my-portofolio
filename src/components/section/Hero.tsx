// [UPDATED] Hero Section Component
// Description: Memperbaiki referensi tipe resume dan socialLinks, mengintegrasikan avatar foto profil Maulana Rafi,
// menambahkan call-to-action (CTA) interaktif ke Selected Works (#projects), Download CV, dan Contact (#contact).
// Reason: Mengimplementasikan Section 01 Profile & Introduction secara responsif, elegan, dan bebas error TypeScript.

import Link from 'next/link';
import Container from '@/components/layout/Container';
import Section from '@/components/layout/Section';
import Tag from '@/components/common/Tag';
import Avatar from '@/components/common/Avatar';
import ExternalLink from '@/components/common/ExternalLink';
import { Button } from '@/components/ui/button';
import { siteConfig } from '@/data/site';

export default function Hero() {
  return (
    <Section id="home" className="pt-6 pb-20 md:pt-10 md:pb-28">
      {' '}
      {/* [UPDATED] Kurangi gap atas antara navbar dan hero: pt-16→pt-6, md:pt-24→md:pt-10 */}
      <Container>
        <div className="flex flex-col-reverse items-start justify-between gap-12 lg:flex-row lg:items-center">
          {/* Main Hero Copy */}
          <div className="max-w-3xl space-y-6">
            {/* Eyebrow & Status */}
            <div className="flex flex-wrap items-center gap-3">
              <Tag>Information Systems Student</Tag>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-600 dark:text-emerald-400">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                {siteConfig.availability}
              </span>
            </div>

            {/* Headline & Name */}
            <div className="space-y-3">
              <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl text-foreground">{siteConfig.name}</h1>

              <p className="text-xl font-semibold text-primary sm:text-2xl md:text-3xl leading-snug">{siteConfig.headline}</p>
            </div>

            {/* Positioning Pill Badges */}
            <div className="flex flex-wrap gap-2 pt-1">
              {siteConfig.role.map((r) => (
                <span key={r} className="rounded-lg border border-border bg-muted/60 px-3 py-1 text-xs font-semibold tracking-wide text-foreground uppercase">
                  {r}
                </span>
              ))}
            </div>

            {/* Descriptions */}
            <div className="space-y-3 text-base leading-relaxed text-muted-foreground sm:text-lg">
              <p>{siteConfig.shortDescription}</p>
              <p className="text-sm sm:text-base text-muted-foreground/90 font-normal">{siteConfig.longDescription}</p>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Link href="#projects">
                <Button size="lg" className="font-semibold shadow-sm">
                  Lihat Karya Terpilih
                </Button>
              </Link>

              {siteConfig.resume.href && (
                <Link href={siteConfig.resume.href} target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="lg" className="font-medium">
                    {siteConfig.resume.label}
                  </Button>
                </Link>
              )}

              <Link href="#contact">
                <Button variant="secondary" size="lg" className="font-medium">
                  Hubungi Saya
                </Button>
              </Link>
            </div>

            {/* Social Links */}
            <div className="flex flex-wrap items-center gap-6 pt-4 text-sm">
              {siteConfig.socialLinks.linkedin && <ExternalLink href={siteConfig.socialLinks.linkedin}>LinkedIn Profile</ExternalLink>}

              {siteConfig.socialLinks.github && <ExternalLink href={siteConfig.socialLinks.github}>GitHub</ExternalLink>}

              {siteConfig.socialLinks.email && <ExternalLink href={siteConfig.socialLinks.email}>Email</ExternalLink>}
            </div>
          </div>

          {/* Profile Photograph & Graphic Avatar */}
          <div className="flex flex-col items-center justify-center lg:items-end">
            <div className="relative group">
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-blue-600 to-indigo-600 opacity-20 blur-lg transition duration-500 group-hover:opacity-40" />
              <div className="relative overflow-hidden rounded-3xl border-2 border-border bg-card p-3 shadow-xl">
                <Avatar src={siteConfig.profileImage} alt={siteConfig.name} fallback="MR" size="xl" className="h-44 w-44 md:h-75 md:w-75 rounded-2xl shadow-inner" />
                <div className="mt-3 text-center">
                  <p className="text-sm font-bold text-foreground">{siteConfig.name}</p>
                  <p className="text-xs text-muted-foreground">Sistem Informasi · UNSIKA</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}

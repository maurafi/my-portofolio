// [NEW] Contact CTA Section Component
// Description: Komponen Section 07 Contact yang menyajikan kartu ajakan kolaborasi profesional,
// tombol interaktif email, LinkedIn, GitHub, dan Download CV, serta area fokus kolaborasi.
// Menjaga privasi data personal (tanpa alamat rumah/kontak privat berlebih).
// Purpose: Mempermudah perekrut, kolaborator, dan stakeholder untuk terhubung dengan Maulana Rafi.

import Link from 'next/link';
import Container from '@/components/layout/Container';
import Section from '@/components/layout/Section';
import ExternalLink from '@/components/common/ExternalLink';
import { Button } from '@/components/ui/button';
import { contactData } from '@/data/contacts';
import { siteConfig } from '@/data/site';

export default function ContactCTA() {
  return (
    <Section id="contact" className="py-24 border-t border-border">
      <Container>
        <div className="relative overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-card via-card to-muted/40 p-8 md:p-12 lg:p-16 shadow-lg">
          <div className="max-w-3xl space-y-8">
            {/* Eyebrow */}
            <span className="text-xs font-bold uppercase tracking-widest text-primary">
              Let&apos;s Connect &amp; Collaborate
            </span>

            {/* Heading */}
            <div className="space-y-4">
              <h2 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl md:text-5xl">
                Siap Mengubah Tantangan Menjadi Solusi Nyata.
              </h2>
              <p className="text-base sm:text-lg leading-relaxed text-muted-foreground">
                {contactData.invitationText}
              </p>
            </div>

            {/* Collaboration Focus Badges */}
            <div className="space-y-3">
              <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                Fokus Minat Kolaborasi:
              </p>
              <div className="flex flex-wrap gap-2">
                {contactData.collaborationFocus.map((focus) => (
                  <span
                    key={focus}
                    className="rounded-lg border border-border bg-background px-3 py-1.5 text-xs font-medium text-foreground shadow-xs"
                  >
                    ✦ {focus}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Link href={`mailto:${siteConfig.email}`}>
                <Button size="lg" className="font-semibold shadow-md">
                  Kirim Email Profesional
                </Button>
              </Link>

              {siteConfig.resume.href && (
                <Link
                  href={siteConfig.resume.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline" size="lg" className="font-medium">
                    {siteConfig.resume.label}
                  </Button>
                </Link>
              )}
            </div>

            {/* Quick Links */}
            <div className="flex flex-wrap items-center gap-6 pt-6 border-t border-border text-sm">
              <ExternalLink href={siteConfig.socialLinks.linkedin}>
                LinkedIn: maulana-rafii
              </ExternalLink>

              <ExternalLink href={siteConfig.socialLinks.github}>
                GitHub: maurafi
              </ExternalLink>

              <span className="text-muted-foreground text-xs">
                📍 {contactData.location}
              </span>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}

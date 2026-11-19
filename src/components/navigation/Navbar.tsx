// [UPDATED] Navbar Navigation Component
// Description: Mengintegrasikan MobileMenu sheet pada tampilan mobile dan menyelaraskan navigasi
// anchor links (#home, #projects, #experience, #skills, #achievements, #contact).
// Reason: Menjamin navigasi responsif berfungsi optimal di perangkat desktop, tablet, dan ponsel.

'use client';

import Link from 'next/link';
import Container from '@/components/layout/Container';
import MobileMenu from '@/components/navigation/MobileMenu';
import { siteConfig } from '@/config/site';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <Container>
        <div className="flex h-16 items-center justify-between">
          {/* Brand Logo */}
          <Link href="/" className="text-lg font-bold tracking-tight text-foreground hover:text-primary transition-colors">
            {siteConfig.brand.logoText}
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-6 lg:gap-8 md:flex">
            {siteConfig.navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Right Side Desktop Action */}
          <div className="hidden items-center gap-3 md:flex">
            {siteConfig.resume.href && (
              <Link
                href={siteConfig.resume.href}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-xs transition hover:opacity-90"
              >
                {siteConfig.resume.label}
              </Link>
            )}
          </div>

          {/* Mobile Navigation Sheet */}
          <div className="md:hidden">
            <MobileMenu />
          </div>
        </div>
      </Container>
    </header>
  );
}

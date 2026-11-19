import Link from 'next/link';

import Container from '@/components/layout/Container';
import Divider from '@/components/layout/Divider';
import Section from '@/components/layout/Section';

import { siteConfig } from '@/config/site';

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <Section className="py-12">
        <Container>
          <div className="space-y-10">
            {/* Brand */}
            <div className="space-y-3">
              <h2 className="text-2xl font-bold">{siteConfig.brand.logoText}</h2>

              <p className="max-w-md text-muted-foreground">{siteConfig.brand.slogan}</p>
            </div>

            <Divider />

            {/* Footer Bottom */}
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              {/* Social */}
              <div className="flex gap-6 text-sm">
                <Link href={siteConfig.socialLinks.github} target="_blank" className="hover:text-primary transition-colors">
                  GitHub
                </Link>

                <Link href={siteConfig.socialLinks.linkedin} target="_blank" className="hover:text-primary transition-colors">
                  LinkedIn
                </Link>

                <Link href={siteConfig.socialLinks.email} className="hover:text-primary transition-colors">
                  Email
                </Link>
              </div>

              {/* Copyright */}
              <p className="text-sm text-muted-foreground">{siteConfig.footer.copyright}</p>
            </div>
          </div>
        </Container>
      </Section>
    </footer>
  );
}

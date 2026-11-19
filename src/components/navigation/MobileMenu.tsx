'use client';

import Link from 'next/link';

import { Menu01Icon } from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react';

import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';

import { siteConfig } from '@/config/site';

export default function MobileMenu() {
  return (
    <Sheet>
      <SheetTrigger
        render={
          <Button variant="ghost" size="icon" className="md:hidden">
            <HugeiconsIcon icon={Menu01Icon} strokeWidth={2} />
          </Button>
        }
      />

      <SheetContent side="right">
        <SheetHeader>
          <SheetTitle>{siteConfig.brand.logoText}</SheetTitle>

          <p className="text-sm text-muted-foreground">{siteConfig.brand.slogan}</p>
        </SheetHeader>

        <nav className="mt-8 flex flex-col gap-4 px-6">
          {siteConfig.navigation.map((item) => (
            <Link key={item.href} href={item.href} className="text-base font-medium transition-colors hover:text-primary">
              {item.label}
            </Link>
          ))}
        </nav>

        <Link href={siteConfig.resume.href} className="block">
          <Button className="w-full">{siteConfig.resume.label}</Button>
        </Link>

        <div className="mt-8 flex flex-col gap-3 px-6 text-sm text-muted-foreground">
          <Link href={siteConfig.socialLinks.github}>GitHub</Link>

          <Link href={siteConfig.socialLinks.linkedin}>LinkedIn</Link>

          <Link href={siteConfig.socialLinks.email}>Email</Link>
        </div>
      </SheetContent>
    </Sheet>
  );
}

// [UPDATED] Section Layout Component
// Description: Menambahkan prop id?: string pada interface SectionProps dan elemen <section>.
// Reason: Mendukung penanda anchor link (misal: #projects, #experience, #skills, #achievements, #contact)
// untuk kelancaran navigasi internal website portofolio.

import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface SectionProps {
  children: ReactNode;
  className?: string;
  fullHeight?: boolean;
  id?: string;
}

export default function Section({ children, className, fullHeight = false, id }: SectionProps) {
  return (
    <section id={id} className={cn('py-24 md:py-28', fullHeight && 'min-h-screen', className)}>
      {children}
    </section>
  );
}

import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  children?: ReactNode;
  className?: string;
}

export default function SectionHeader({ eyebrow, title, description, align = 'left', children, className }: SectionHeaderProps) {
  return (
    <div className={cn('mb-12 flex flex-col gap-4', align === 'center' && 'items-center text-center', className)}>
      {eyebrow && <span className="text-sm font-semibold uppercase tracking-widest text-blue-600">{eyebrow}</span>}

      <h2 className="text-3xl font-bold tracking-tight md:text-4xl">{title}</h2>

      {description && <p className="max-w-2xl text-base leading-7 text-muted-foreground">{description}</p>}

      {children}
    </div>
  );
}

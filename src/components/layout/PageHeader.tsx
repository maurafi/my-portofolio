import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface PageHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  children?: ReactNode;
  className?: string;
}

export default function PageHeader({ eyebrow, title, description, children, className }: PageHeaderProps) {
  return (
    <header className={cn('flex flex-col items-center justify-center py-20 text-center', className)}>
      {eyebrow && <span className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">{eyebrow}</span>}

      <h1 className="text-4xl font-bold tracking-tight md:text-5xl">{title}</h1>

      {description && <p className="mt-6 max-w-3xl text-lg leading-8 text-muted-foreground">{description}</p>}

      {children}
    </header>
  );
}

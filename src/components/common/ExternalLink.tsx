import Link from 'next/link';
import { ArrowUpRight01Icon } from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react';

import { cn } from '@/lib/utils';

interface ExternalLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export default function ExternalLink({ href, children, className }: ExternalLinkProps) {
  return (
    <Link href={href} target="_blank" rel="noopener noreferrer" className={cn('inline-flex items-center gap-1.5', 'text-sm font-medium', 'text-primary', 'transition-all duration-200', 'hover:underline hover:underline-offset-4', className)}>
      <span>{children}</span>

      <HugeiconsIcon icon={ArrowUpRight01Icon} size={16} strokeWidth={2} />
    </Link>
  );
}

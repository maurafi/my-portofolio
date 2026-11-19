import { cn } from '@/lib/utils';

interface TagProps {
  children: React.ReactNode;
  className?: string;
}

export default function Tag({ children, className }: TagProps) {
  return (
    <span
      className={cn('inline-flex items-center rounded-md', 'border border-border', 'bg-muted', 'px-2.5 py-1', 'text-xs font-medium', 'text-muted-foreground', 'transition-colors', 'hover:bg-accent hover:text-accent-foreground', className)}
    >
      {children}
    </span>
  );
}

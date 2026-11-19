import { cn } from '@/lib/utils';

interface DividerProps {
  orientation?: 'horizontal' | 'vertical';
  className?: string;
}

export default function Divider({ orientation = 'horizontal', className }: DividerProps) {
  return <div aria-hidden="true" className={cn('bg-border', orientation === 'horizontal' ? 'h-px w-full' : 'h-full w-px', className)} />;
}

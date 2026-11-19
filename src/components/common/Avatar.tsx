'use client';

import Image from 'next/image';
import { useState } from 'react';
import { cn } from '@/lib/utils';

interface AvatarProps {
  src?: string;
  alt: string;
  fallback: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

const sizes = {
  sm: 'h-10 w-10 text-sm',
  md: 'h-14 w-14 text-base',
  lg: 'h-24 w-24 text-xl',
  xl: 'h-40 w-40 text-4xl',
};

export default function Avatar({ src, alt, fallback, size = 'md', className }: AvatarProps) {
  const [error, setError] = useState(false);

  return (
    <div className={cn('relative overflow-hidden rounded-full', 'border border-border', 'bg-muted', 'flex items-center justify-center', 'font-semibold text-muted-foreground', sizes[size], className)}>
      {!error && src ? <Image src={src} alt={alt} fill className="object-cover" onError={() => setError(true)} /> : fallback}
    </div>
  );
}

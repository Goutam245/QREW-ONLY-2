import React from 'react';
import { cn } from '@/lib/utils';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
  align?: 'left' | 'center';
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  subtitle,
  className,
  align = 'center',
}) => {
  return (
    <div
      className={cn(
        'space-y-4 mb-12',
        align === 'center' ? 'text-center' : 'text-left',
        className
      )}
    >
      <div className="inline-block">
        <div className="flex items-center gap-3 mb-2">
          <span className="text-primary font-mono text-sm">{'>'}</span>
          <div className="h-px flex-1 bg-gradient-to-r from-primary/50 to-transparent min-w-[40px]" />
        </div>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-display font-bold text-foreground">
          {title}
        </h2>
        <div className="flex items-center gap-3 mt-2">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent to-primary/50 min-w-[40px]" />
          <span className="text-primary font-mono text-sm">{'<'}</span>
        </div>
      </div>
      {subtitle && (
        <p className="text-foreground-secondary max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
};

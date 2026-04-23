import React from 'react';

interface ChipProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'active' | 'neutral' | 'error';
  children: React.ReactNode;
}

export function Chip({ variant = 'neutral', className = '', children, ...props }: ChipProps) {
  const baseStyles = 'inline-flex items-center px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase';
  
  const variants = {
    active: 'bg-sunlight-yellow text-deep-ink',
    neutral: 'bg-earth-brown/10 text-earth-brown',
    error: 'bg-error-red/10 text-error-red',
  };

  return (
    <span className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
      {children}
    </span>
  );
}

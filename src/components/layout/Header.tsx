import React from 'react';

interface HeaderProps {
  title: string;
  subtitle?: string;
  action?: React.ReactNode;
}

export function Header({ title, subtitle, action }: HeaderProps) {
  return (
    <header className="px-6 pt-10 pb-8 bg-nature-green text-white rounded-b-3xl shadow-md">
      <div className="flex justify-between items-start">
        <div>
          {subtitle && <p className="text-sm font-medium text-white/70 mb-1 tracking-wider uppercase">{subtitle}</p>}
          <h1 className="text-3xl font-bold leading-tight">{title}</h1>
        </div>
        {action && (
          <div>{action}</div>
        )}
      </div>
    </header>
  );
}

import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export function Input({ label, error, className = '', id, ...props }: InputProps) {
  const inputId = id || label?.toLowerCase().replace(/\s+/g, '-');
  
  return (
    <div className={`flex flex-col gap-1 ${className}`}>
      {label && (
        <label htmlFor={inputId} className="text-sm font-medium text-earth-brown tracking-wide">
          {label}
        </label>
      )}
      <input
        id={inputId}
        className={`min-h-[48px] rounded-lg border-2 border-gray-300 px-4 py-2 bg-white text-deep-ink focus:outline-none focus:border-nature-green focus:ring-2 focus:ring-nature-green/20 transition-all ${
          error ? 'border-error-red focus:border-error-red focus:ring-error-red/20' : ''
        }`}
        {...props}
      />
      {error && <span className="text-xs font-semibold text-error-red">{error}</span>}
    </div>
  );
}

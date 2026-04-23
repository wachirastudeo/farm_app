import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'pill';
  children: React.ReactNode;
}

export function Button({ variant = 'primary', className = '', children, ...props }: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center font-medium transition-colors focus:outline-none min-h-[48px] min-w-[48px] px-4 py-2';
  
  const variants = {
    primary: 'bg-nature-green text-white hover:bg-nature-green-container rounded-lg',
    secondary: 'bg-earth-brown text-white hover:bg-opacity-90 rounded-lg',
    outline: 'border-2 border-earth-brown text-earth-brown hover:bg-earth-brown hover:text-white rounded-lg',
    pill: 'bg-nature-green text-white hover:bg-nature-green-container rounded-full px-8',
  };

  return (
    <button className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}

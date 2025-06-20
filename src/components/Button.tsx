import React from 'react';
import { cn } from '../utils/cn';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'accent';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  theme?: 'gradient' | 'organic' | 'flat' | 'kanagawa';
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  className,
  children,
  theme = 'gradient',
  ...props
}) => {
  const baseClasses = `
    relative overflow-hidden rounded-full font-semibold transition-all duration-300 ease-out
    focus:outline-none focus:ring-2 focus:ring-stone-400/50 focus:ring-offset-2
    active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed
    border-2 tracking-[0.05em] uppercase text-sm
    transform hover:shadow-lg
  `;

  const variants = {
    primary: theme === 'flat' ? `
      bg-orange-300 text-stone-700
      border-stone-500/30 hover:bg-orange-400
      shadow-md hover:shadow-lg
    ` : `
      bg-gradient-to-br from-orange-300 to-orange-400 text-stone-700
      border-stone-500/30 hover:from-orange-400 hover:to-orange-500
      shadow-lg hover:shadow-xl
    `,
    secondary: theme === 'flat' ? `
      bg-stone-200 text-stone-700
      border-stone-400/40 hover:bg-stone-300
      shadow-sm hover:shadow-md
    ` : theme === 'kanagawa' ? `
      bg-white/30 text-stone-800
      border-white/50 hover:bg-white/50
      backdrop-blur-sm shadow-md hover:shadow-lg font-bold
    ` : `
      bg-gradient-to-br from-stone-200/80 to-stone-300/80 text-stone-700
      border-stone-400/40 hover:from-stone-300/90 hover:to-stone-400/90
      backdrop-blur-sm shadow-md hover:shadow-lg
    `,
    accent: theme === 'flat' ? `
      bg-rose-300 text-stone-700
      border-stone-500/30 hover:bg-rose-400
      shadow-md hover:shadow-lg
    ` : `
      bg-gradient-to-br from-rose-300 to-rose-400 text-stone-700
      border-stone-500/30 hover:from-rose-400 hover:to-rose-500
      shadow-lg hover:shadow-xl
    `
  };

  const sizes = {
    sm: 'px-6 py-2 text-xs',
    md: 'px-8 py-3 text-sm',
    lg: 'px-12 py-4 text-base'
  };

  return (
    <button
      className={cn(baseClasses, variants[variant], sizes[size], className)}
      {...props}
    >
      <span className="relative z-10">{children}</span>
    </button>
  );
};
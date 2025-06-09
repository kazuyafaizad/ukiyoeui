import React from 'react';
import { cn } from '../utils/cn';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  className,
  hover = false
}) => {
  return (
    <div
      className={cn(
        `
        bg-gradient-to-br from-stone-100/60 to-stone-200/40 backdrop-blur-md
        rounded-3xl p-8 shadow-lg border border-stone-300/30
        transition-all duration-500 ease-out
        animate-fade-in-up
        `,
        hover && `
          hover:bg-gradient-to-br hover:from-stone-100/80 hover:to-stone-200/60
          hover:shadow-2xl
          cursor-pointer hover:border-stone-400/40
        `,
        className
      )}
    >
      {children}
    </div>
  );
};
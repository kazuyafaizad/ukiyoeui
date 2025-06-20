import React, { useState } from 'react';
import { cn } from '../utils/cn';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const Input: React.FC<InputProps> = ({
  label,
  error,
  className,
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [hasValue, setHasValue] = useState(false);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    setIsFocused(false);
    setHasValue(e.target.value.length > 0);
  };

  return (
    <div className="relative w-full">
      <div className="relative">
        <input
          className={cn(
            `
            w-full px-6 py-4 bg-gradient-to-br from-stone-100/50 to-stone-200/30
            backdrop-blur-sm border-2 border-stone-300/40
            rounded-full transition-all duration-300 ease-out
            focus:outline-none focus:ring-2 focus:ring-stone-400/50 focus:border-stone-400/60
            focus:bg-gradient-to-br focus:from-stone-100/70 focus:to-stone-200/50
            focus:shadow-lg focus:scale-[1.02]
            placeholder-stone-500 text-stone-700 tracking-widest
            `,
            error && 'border-rose-300/60 focus:ring-rose-400/50 focus:border-rose-400/60',
            className
          )}
          onFocus={handleFocus}
          onBlur={handleBlur}
          {...props}
        />
        {label && (
          <label
            className={cn(
              `
              absolute left-6 transition-all duration-300 ease-out pointer-events-none
              text-stone-500 tracking-widest
              `,
              isFocused || hasValue || props.value || props.placeholder
                ? 'top-2 text-xs font-medium'
                : 'top-4 text-base'
            )}
          >
            {label}
          </label>
        )}
      </div>
      {error && (
        <p className="mt-2 text-sm text-rose-500 tracking-widest ml-2">
          {error}
        </p>
      )}
    </div>
  );
};
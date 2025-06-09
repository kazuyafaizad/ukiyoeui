import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '../utils/cn';

interface MenuOption {
  label: string;
  value: string;
  disabled?: boolean;
}

interface MenuProps {
  options: MenuOption[];
  onSelect: (value: string) => void;
  placeholder?: string;
  className?: string;
}

export const Menu: React.FC<MenuProps> = ({ 
  options, 
  onSelect, 
  placeholder = "Select an option",
  className 
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<string>('');
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (option: MenuOption) => {
    if (option.disabled) return;
    setSelected(option.label);
    onSelect(option.value);
    setIsOpen(false);
  };

  return (
    <div ref={menuRef} className={cn("relative w-full", className)}>
      <button
        className={cn(
          `
          w-full px-6 py-4 bg-gradient-to-br from-stone-100/50 to-stone-200/30 
          backdrop-blur-sm border-2 border-stone-300/40
          rounded-full transition-all duration-300 ease-out text-left
          focus:outline-none focus:ring-2 focus:ring-stone-400/50 focus:border-stone-400/60
          focus:bg-gradient-to-br focus:from-stone-100/70 focus:to-stone-200/50 
          hover:bg-gradient-to-br hover:from-stone-100/60 hover:to-stone-200/40
          text-stone-700 tracking-[0.01em] flex items-center justify-between
          `,
          isOpen && 'bg-gradient-to-br from-stone-100/70 to-stone-200/50 shadow-lg ring-2 ring-stone-400/50'
        )}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className={selected ? 'text-stone-800' : 'text-stone-500'}>
          {selected || placeholder}
        </span>
        <ChevronDown 
          size={20} 
          className={cn(
            "transition-transform duration-200",
            isOpen && "rotate-180"
          )}
        />
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-2 z-50">
          <div className="bg-gradient-to-br from-stone-100/90 to-stone-200/80 backdrop-blur-md rounded-3xl shadow-2xl border border-stone-300/40 overflow-hidden">
            {options.map((option, index) => (
              <button
                key={option.value}
                className={cn(
                  `
                  w-full px-6 py-3 text-left transition-all duration-200
                  hover:bg-stone-200/60 focus:bg-stone-200/60 focus:outline-none
                  text-stone-700 tracking-[0.01em]
                  `,
                  option.disabled && 'opacity-50 cursor-not-allowed',
                  index !== options.length - 1 && 'border-b border-stone-200/50'
                )}
                onClick={() => handleSelect(option)}
                disabled={option.disabled}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
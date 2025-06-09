import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import { cn } from '../utils/cn';
import { Button } from './Button';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  className?: string;
}

export const Modal: React.FC<ModalProps> = ({ 
  isOpen, 
  onClose, 
  title, 
  children, 
  className 
}) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop with organic blur */}
      <div 
        className="absolute inset-0 backdrop-blur-md"
        style={{
          background: 'rgba(120, 113, 108, 0.2)'
        }}
        onClick={onClose}
      />
      
      {/* Modal */}
      <div
        className={cn(
          `
          relative bg-gradient-to-br from-stone-100/90 to-stone-200/80 backdrop-blur-md 
          rounded-3xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto
          transform transition-all duration-300 ease-out
          border-2 border-stone-300/40
          `,
          className
        )}
        style={{
          animation: isOpen ? 'modalSlideIn 0.3s ease-out' : 'modalSlideOut 0.3s ease-out'
        }}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-stone-200/50">
          {title && (
            <h2 className="text-2xl font-light text-stone-800 tracking-[0.02em]">
              {title}
            </h2>
          )}
          <Button
            variant="secondary"
            size="sm"
            onClick={onClose}
            className="!p-2 !rounded-full !min-w-0"
          >
            <X size={16} />
          </Button>
        </div>
        
        {/* Content */}
        <div className="p-6">
          {children}
        </div>
      </div>
      
      <style jsx>{`
        @keyframes modalSlideIn {
          from {
            opacity: 0;
            transform: translateY(-20px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        
        @keyframes modalSlideOut {
          from {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
          to {
            opacity: 0;
            transform: translateY(-20px) scale(0.95);
          }
        }
      `}</style>
    </div>
  );
};
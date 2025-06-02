import { InputHTMLAttributes } from 'react';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  variant?: 'default' | 'ghost';
}

export function Input({ className, variant = 'default', ...props }: InputProps) {
  return (
    <input
      className={`px-4 py-2 rounded border ${
        variant === 'ghost' ? 'border-transparent bg-transparent' : 'border-gray-300'
      } ${className ?? ''}`}
      {...props}
    />
  );
}

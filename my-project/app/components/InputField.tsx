'use client';
import React from 'react';

interface InputProps {
  label: string;
  name: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  pattern?: string;
  placeholder?: string;
  size?: 'sm' | 'md' | 'lg';
  error?: string;
}

export const InputField: React.FC<InputProps> = ({
  label,
  name,
  type = 'text',
  value,
  onChange,
  required,
  pattern,
  placeholder,
  size = 'md',
  error,
}) => {
  const sizeClasses = {
    sm: 'p-1 text-sm',
    md: 'p-2 text-base',
    lg: 'p-3 text-lg',
  };

  return (
    <div className="mb-4">
      <label htmlFor={name} className="block mb-1 font-semibold">{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        pattern={pattern}
        placeholder={placeholder}
        className={`border rounded w-full ${sizeClasses[size]}`}
      />
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};

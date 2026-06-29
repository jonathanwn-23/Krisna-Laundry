'use client';

import React from 'react';

interface WhatsAppButtonProps {
  label: string;
  onClick: () => void;
  className?: string;
  variant?: 'primary' | 'outline';
}

export function WhatsAppButton({ label, onClick, className = '', variant = 'primary' }: WhatsAppButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-200 shadow-sm hover:shadow-md active:scale-95';
  
  const variants = {
    primary: 'bg-green-600 text-white hover:bg-green-700 hover:-translate-y-0.5',
    outline: 'bg-transparent border-2 border-green-600 text-green-600 hover:bg-green-50'
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-5 h-5"
      >
        <path d="M11.972 0C5.361 0 0 5.36 0 11.972c0 2.115.553 4.182 1.6 6.007L.17 23.821l6.002-1.573c1.745.952 3.702 1.455 5.72 1.455 6.611 0 11.972-5.36 11.972-11.972S18.583 0 11.972 0zm0 21.734c-1.802 0-3.565-.483-5.112-1.401l-.367-.217-3.793.994.998-3.699-.239-.38C2.518 15.42 1.968 13.725 1.968 11.972c0-5.523 4.493-10.016 10.016-10.016 5.523 0 10.016 4.493 10.016 10.016 0 5.523-4.493 10.016-10.016 10.016zm5.495-7.502c-.301-.151-1.782-.88-2.057-.98-.275-.1-.476-.151-.676.151-.201.301-.777.98-.952 1.18-.176.2-.351.226-.652.076-.301-.151-1.272-.469-2.423-1.496-.896-.8-1.503-1.788-1.678-2.089-.176-.301-.019-.464.131-.614.135-.135.301-.351.452-.526.151-.176.201-.301.301-.502.1-.2.05-.376-.025-.526-.075-.151-.676-1.63-.926-2.231-.243-.587-.49-.508-.676-.516-.176-.008-.376-.008-.576-.008s-.526.075-.801.376c-.275.301-1.052 1.028-1.052 2.508 0 1.48 1.077 2.909 1.227 3.109.151.2 2.115 3.228 5.127 4.529.717.31 1.276.495 1.713.633.72.228 1.376.196 1.892.119.577-.086 1.782-.728 2.032-1.431.25-.703.25-1.304.176-1.431-.075-.126-.276-.201-.577-.352z"/>
      </svg>
      {label}
    </button>
  );
}

'use client';

import React from 'react';

export interface ServiceCardProps {
  id: string;
  name: string;
  description: string;
  duration: string;
  imageUrl?: string;
}

export function ServiceCard({ name, description, duration, imageUrl }: ServiceCardProps) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col h-full w-full min-w-[280px] md:min-w-[320px] snap-center">
      {imageUrl ? (
        <div className="w-full h-48 bg-gray-100 rounded-xl mb-6 overflow-hidden flex-shrink-0">
          <img src={imageUrl} alt={name} className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500" />
        </div>
      ) : (
        <div className="w-full h-48 bg-gray-50 rounded-xl mb-6 flex flex-col items-center justify-center text-gray-300 flex-shrink-0 border border-gray-100 border-dashed">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mb-2">
            <rect width="18" height="18" x="3" y="3" rx="2" ry="2"/>
            <circle cx="9" cy="9" r="2"/>
            <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/>
          </svg>
          <span className="text-xs">Gambar menyusul</span>
        </div>
      )}
      <div className="flex-grow">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{name}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
      </div>
      
      <div className="flex items-center gap-2 text-sm font-medium text-primary-700 bg-primary-50 w-fit px-3 py-1.5 rounded-lg mt-auto">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"/>
          <polyline points="12 6 12 12 16 14"/>
        </svg>
        {duration}
      </div>
    </div>
  );
}

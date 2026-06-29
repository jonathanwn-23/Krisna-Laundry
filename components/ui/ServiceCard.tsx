'use client';

import React from 'react';
import { generateWAUrl, ServiceOrder } from '@/lib/wa-template';
import { WhatsAppButton } from './WhatsAppButton';

export interface ServiceCardProps {
  id: string;
  name: string;
  description: string;
  duration: string;
  waNumber: string;
}

export function ServiceCard({ name, description, duration, waNumber }: ServiceCardProps) {
  const handleOrder = () => {
    // Kita arahkan pengguna untuk bertanya via WA terkait layanan ini
    const order: ServiceOrder = {
      serviceName: name,
      pricingType: 'kiloan', // Default placeholder jika cuma nanya layanan
      price: 0,
      unit: 'tanya admin',
      duration: duration
    };
    
    // Namun untuk layanan general, kita bisa buat URL khusus atau pakai WAUrl standar
    const text = `Halo, saya ingin bertanya tentang layanan *${name}*.\n\nEstimasi: ${duration}\nMohon info lebih lanjut. Terima kasih!`;
    const formattedNumber = waNumber.replace(/^0/, '62').replace(/^\+/, '');
    const url = `https://wa.me/${formattedNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
      <div className="w-14 h-14 bg-primary-50 text-primary-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
          <polyline points="7 10 12 15 17 10" />
          <line x1="12" x2="12" y1="15" y2="3" />
        </svg>
      </div>
      
      <h3 className="text-xl font-bold text-gray-900 mb-2">{name}</h3>
      <p className="text-gray-600 mb-4 h-12 overflow-hidden">{description}</p>
      
      <div className="flex items-center gap-2 text-sm text-gray-500 mb-6 bg-gray-50 w-fit px-3 py-1.5 rounded-lg">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"/>
          <polyline points="12 6 12 12 16 14"/>
        </svg>
        {duration}
      </div>
      
      <WhatsAppButton 
        label="Tanya via WA" 
        onClick={handleOrder} 
        variant="outline"
        className="w-full"
      />
    </div>
  );
}

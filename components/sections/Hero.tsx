'use client';

import React from 'react';

export function Hero() {
  const handleScrollToServices = () => {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative bg-primary-50 pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-primary-100 rounded-bl-[100px] opacity-50 transform translate-x-1/3 -translate-y-1/4"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-6">
            <span className="flex h-2 w-2 rounded-full bg-primary-500"></span>
            Layanan Laundry Profesional
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-extrabold text-gray-900 tracking-tight mb-8">
            Bersih, Cepat, <br className="hidden sm:block" />
            <span className="text-primary-600">Terpercaya.</span>
          </h1>
          
          <p className="text-lg lg:text-xl text-gray-600 mb-10 leading-relaxed">
            Solusi tepat untuk cucian menumpuk. Kami merawat pakaian Anda dengan sepenuh hati, memberikan hasil bersih maksimal dalam waktu singkat.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button 
              onClick={handleScrollToServices}
              className="w-full sm:w-auto px-8 py-4 bg-primary-600 text-white rounded-full font-bold text-lg hover:bg-primary-700 hover:-translate-y-1 transition-all duration-300 shadow-lg shadow-primary-500/30"
            >
              Lihat Layanan Kami
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

'use client';

import React from 'react';

export function Hero() {
  const handleScrollToServices = () => {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative bg-primary-50 pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden" id="beranda">
      {/* Background Ornaments */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Kanan atas */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary-100 opacity-70 clip-triangle-top-right"></div>
        {/* Kiri bawah */}
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary-200/40 rounded-tr-[100px] opacity-60"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">
          
          {/* Teks - Kiri */}
          <div className="text-left w-full lg:w-1/2 lg:pl-10 xl:pl-16">
            <h1 className="text-5xl lg:text-7xl font-extrabold text-slate-800 tracking-tight mb-6 leading-tight">
              Bersih, Cepat, <br />
              Terpercaya.
            </h1>
            
            <p className="text-lg text-slate-700 mb-10 leading-relaxed max-w-lg">
              Solusi tepat untuk cucian menumpuk. Kami merawat pakaian Anda dengan sepenuh hati, memberikan hasil bersih maksimal dalam waktu singkat.
            </p>
            
            <button 
              onClick={handleScrollToServices}
              className="px-8 py-3.5 bg-primary-500/90 hover:bg-primary-600 text-white rounded-full font-semibold text-lg transition-all duration-300 shadow-md inline-block"
            >
              Lihat Layanan Kami
            </button>
          </div>

          {/* Gambar - Kanan */}
          <div className="relative w-full lg:w-5/12 h-[350px] lg:h-[450px] rounded-2xl overflow-hidden shadow-2xl lg:mr-8 xl:mr-12 border-4 border-white/50">
            <img 
              src="/logo laundry.png" 
              alt="Hasil Cucian Rapi dan Bersih" 
              className="w-full h-full object-cover"
            />
          </div>

        </div>
      </div>
    </section>
  );
}

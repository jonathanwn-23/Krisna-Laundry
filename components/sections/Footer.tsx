'use client';

import React from 'react';

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-950 text-gray-400 py-12 border-t border-gray-900">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          
          <div>
            <h3 className="text-white text-xl font-bold mb-4">Krisna<span className="text-primary-500">Laundry</span></h3>
            <p className="text-sm">
              Solusi laundry profesional, bersih, dan cepat. Kami siap membantu mengatasi tumpukan cucian Anda setiap hari.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Navigasi Cepat</h4>
            <ul className="space-y-2 text-sm">
              <li><button onClick={() => scrollTo('services')} className="hover:text-primary-400 transition-colors">Layanan</button></li>
              <li><button onClick={() => scrollTo('pricing')} className="hover:text-primary-400 transition-colors">Harga</button></li>
              <li><button onClick={() => scrollTo('how-to-order')} className="hover:text-primary-400 transition-colors">Cara Pesan</button></li>
              <li><button onClick={() => scrollTo('about')} className="hover:text-primary-400 transition-colors">Tentang Kami</button></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Butuh Bantuan?</h4>
            <p className="text-sm mb-4">
              Punya pertanyaan seputar layanan kami? Jangan ragu untuk menghubungi admin kami.
            </p>
            <button 
              onClick={() => scrollTo('about')}
              className="text-primary-400 hover:text-white transition-colors text-sm font-medium"
            >
              Lihat Kontak &rarr;
            </button>
          </div>
          
        </div>
        
        <div className="pt-8 border-t border-gray-800 text-sm text-center flex flex-col md:flex-row justify-between items-center gap-4">
          <p>&copy; {currentYear} Krisna Laundry. Hak Cipta Dilindungi.</p>
        </div>
      </div>
    </footer>
  );
}

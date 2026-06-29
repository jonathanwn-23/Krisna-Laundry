import React from 'react';
import { MousePointerClick, MessageCircle, Truck } from 'lucide-react';

export function HowToOrder() {
  const steps = [
    {
      icon: <MousePointerClick className="w-8 h-8" />,
      title: 'Pilih Layanan',
      description: 'Lihat daftar layanan dan harga kami. Pilih yang paling sesuai dengan kebutuhan Anda.'
    },
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: 'Pesan via WhatsApp',
      description: 'Klik tombol pesan, dan Anda akan otomatis terhubung ke admin kami dengan detail pesanan.'
    },
    {
      icon: <Truck className="w-8 h-8" />,
      title: 'Pickup & Antar',
      description: 'Diskusikan waktu penjemputan. Kami akan mengambil, memproses, dan mengantar kembali pakaian Anda.'
    }
  ];

  return (
    <section id="how-to-order" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Cara Pesan</h2>
          <p className="text-gray-600">
            Hanya butuh 3 langkah mudah untuk mulai menikmati waktu luang Anda tanpa repot memikirkan cucian.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto relative">
          {/* Connector line for desktop */}
          <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-0.5 bg-gray-100 -z-10"></div>
          
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center group">
              <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center text-primary-600 shadow-[0_0_40px_rgba(20,184,166,0.1)] mb-6 border border-primary-100 group-hover:scale-110 group-hover:bg-primary-50 transition-all duration-300">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

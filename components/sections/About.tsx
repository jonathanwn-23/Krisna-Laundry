import React from 'react';
import { MapPin, Clock, Phone } from 'lucide-react';

interface AboutProps {
  businessInfo: Record<string, string>;
}

export function About({ businessInfo }: AboutProps) {
  const address = businessInfo['address'] || '-';
  const openHours = businessInfo['open_hours'] || '-';
  const phone = businessInfo['wa_number'] || '-';
  const formattedPhone = phone.replace(/^62/, '0'); // untuk display

  return (
    <section id="about" className="py-20 bg-primary-900 text-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          
          {/* Info */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Tentang Krisna Laundry</h2>
            <p className="text-primary-100 mb-10 text-lg leading-relaxed">
              Kami berdedikasi untuk memberikan layanan laundry terbaik dengan mengutamakan kebersihan, kerapihan, dan ketepatan waktu. Percayakan pakaian kotor Anda kepada kami, dan nikmati waktu berharga Anda untuk hal lain yang lebih penting.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary-800 flex items-center justify-center shrink-0">
                  <MapPin className="text-primary-300" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">Lokasi Kami</h4>
                  <p className="text-primary-200">{address}</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary-800 flex items-center justify-center shrink-0">
                  <Clock className="text-primary-300" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">Jam Operasional</h4>
                  <p className="text-primary-200">{openHours}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary-800 flex items-center justify-center shrink-0">
                  <Phone className="text-primary-300" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">Hubungi Kami</h4>
                  <p className="text-primary-200">{formattedPhone}</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Map Placeholder */}
          <div className="bg-primary-800 rounded-3xl p-2 h-[400px] w-full shadow-2xl border border-primary-700/50 flex items-center justify-center text-primary-400">
            {/* Nantinya bisa diganti dengan iframe Google Maps sungguhan */}
            <div className="text-center">
              <MapPin className="w-12 h-12 mx-auto mb-4 opacity-50" />
              <p>Area Map Location</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

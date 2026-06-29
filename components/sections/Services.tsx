import React from 'react';
import { ServiceCard, ServiceCardProps } from '../ui/ServiceCard';

interface ServicesProps {
  services: Omit<ServiceCardProps, 'waNumber'>[];
  waNumber: string;
}

export function Services({ services, waNumber }: ServicesProps) {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Layanan Kami</h2>
          <p className="text-gray-600">
            Pilih layanan yang sesuai dengan kebutuhan Anda. Dari cucian kiloan hingga perawatan khusus untuk barang kesayangan Anda.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {services.length > 0 ? (
            services.map((service) => (
              <ServiceCard 
                key={service.id}
                id={service.id}
                name={service.name}
                description={service.description}
                duration={service.duration}
                waNumber={waNumber}
              />
            ))
          ) : (
            <div className="col-span-full text-center text-gray-500 py-10">
              Belum ada layanan yang tersedia.
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

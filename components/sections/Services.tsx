'use client';

import React, { useRef } from 'react';
import { ServiceCard, ServiceCardProps } from '../ui/ServiceCard';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ServicesProps {
  services: ServiceCardProps[];
  waNumber: string; // Keep for now in case needed elsewhere, even though not used in ServiceCard
}

export function Services({ services }: ServicesProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -320, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 320, behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Layanan Kami</h2>
          <p className="text-gray-600">
            Pilih layanan yang sesuai dengan kebutuhan Anda. Dari cucian kiloan hingga perawatan khusus untuk barang kesayangan Anda.
          </p>
        </div>
        
        <div className="relative max-w-7xl mx-auto">
          {services.length > 0 ? (
            <>
              {/* Left Button */}
              <button 
                onClick={scrollLeft}
                className="absolute left-0 top-1/2 -translate-y-1/2 -ml-4 md:-ml-6 z-10 bg-white shadow-md hover:shadow-lg border border-gray-100 rounded-full p-2 text-gray-600 hover:text-primary-600 transition-all focus:outline-none hidden md:flex items-center justify-center"
                aria-label="Geser ke kiri"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              {/* Scroll Container */}
              <div 
                ref={scrollRef}
                className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory scroll-smooth hide-scrollbar"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              >
                {services.map((service) => (
                  <ServiceCard 
                    key={service.id}
                    id={service.id}
                    name={service.name}
                    description={service.description}
                    duration={service.duration}
                    imageUrl={service.imageUrl}
                  />
                ))}
              </div>

              {/* Right Button */}
              <button 
                onClick={scrollRight}
                className="absolute right-0 top-1/2 -translate-y-1/2 -mr-4 md:-mr-6 z-10 bg-white shadow-md hover:shadow-lg border border-gray-100 rounded-full p-2 text-gray-600 hover:text-primary-600 transition-all focus:outline-none hidden md:flex items-center justify-center"
                aria-label="Geser ke kanan"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </>
          ) : (
            <div className="text-center text-gray-500 py-10">
              Belum ada layanan yang tersedia.
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

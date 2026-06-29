import React from 'react';
import { PricingTable, PricingItem } from '../ui/PricingTable';

interface PricingProps {
  items: PricingItem[];
  waNumber: string;
}

export function Pricing({ items, waNumber }: PricingProps) {
  return (
    <section id="pricing" className="py-20 bg-gray-50/50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Daftar Harga</h2>
          <p className="text-gray-600">
            Transparan dan terjangkau. Temukan paket layanan yang paling pas untuk kebutuhan Anda.
          </p>
        </div>
        
        <PricingTable items={items} waNumber={waNumber} />
      </div>
    </section>
  );
}

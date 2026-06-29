'use client';

import React, { useState } from 'react';
import { generateWAUrl } from '@/lib/wa-template';
import { WhatsAppButton } from './WhatsAppButton';

export interface PricingItem {
  id: string;
  service_id: string;
  service_name: string;
  package_name?: string;
  pricing_type: 'kiloan' | 'paketan' | 'satuan';
  price: number;
  unit: string;
  allow_quantity: boolean;
  note?: string;
  duration_estimate: string;
}

interface PricingTableProps {
  items: PricingItem[];
  waNumber: string;
}

export function PricingTable({ items, waNumber }: PricingTableProps) {
  const [activeTab, setActiveTab] = useState<'kiloan' | 'paketan' | 'satuan'>('kiloan');
  const [quantities, setQuantities] = useState<Record<string, number>>({});

  const filteredItems = items.filter(item => item.pricing_type === activeTab);

  const handleQuantityChange = (id: string, value: string) => {
    const qty = parseInt(value) || 0;
    setQuantities(prev => ({ ...prev, [id]: qty }));
  };

  const handleOrder = (item: PricingItem) => {
    const qty = quantities[item.id] || 0;
    
    if (item.allow_quantity && qty <= 0) {
      alert('Silakan masukkan jumlah item terlebih dahulu.');
      return;
    }

    const url = generateWAUrl(waNumber, {
      serviceName: item.package_name ? `${item.service_name} - ${item.package_name}` : item.service_name,
      pricingType: item.pricing_type,
      price: item.price,
      unit: item.unit,
      duration: item.duration_estimate,
      quantity: item.allow_quantity ? qty : undefined
    });
    
    window.open(url, '_blank');
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div className="w-full max-w-5xl mx-auto">
      {/* Tabs */}
      <div className="flex justify-center mb-10">
        <div className="bg-gray-100 p-1 rounded-xl inline-flex space-x-1 shadow-inner">
          {(['kiloan', 'paketan', 'satuan'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 capitalize ${
                activeTab === tab
                  ? 'bg-white text-primary-700 shadow-sm'
                  : 'text-gray-500 hover:text-gray-900 hover:bg-gray-200'
              }`}
            >
              Layanan {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Table / List */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        {filteredItems.length === 0 ? (
          <div className="p-8 text-center text-gray-500">
            Belum ada layanan untuk kategori ini.
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-100 text-sm text-gray-600">
                  <th className="p-4 font-semibold">Layanan / Paket</th>
                  <th className="p-4 font-semibold">Harga</th>
                  <th className="p-4 font-semibold">Estimasi</th>
                  <th className="p-4 font-semibold">Keterangan</th>
                  <th className="p-4 font-semibold text-right">Pesan</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {filteredItems.map((item) => (
                  <tr key={item.id} className="hover:bg-gray-50/50 transition-colors">
                    <td className="p-4">
                      <div className="font-semibold text-gray-900">{item.service_name}</div>
                      {item.package_name && (
                        <div className="text-sm text-gray-500">{item.package_name}</div>
                      )}
                    </td>
                    <td className="p-4 font-medium text-primary-600">
                      {formatPrice(item.price)}
                      <span className="text-sm text-gray-500 font-normal"> / {item.unit}</span>
                    </td>
                    <td className="p-4 text-sm text-gray-600">
                      {item.duration_estimate}
                    </td>
                    <td className="p-4 text-sm text-gray-500">
                      {item.note || '-'}
                    </td>
                    <td className="p-4 text-right">
                      <div className="flex items-center justify-end gap-3">
                        {item.allow_quantity && (
                          <input
                            type="number"
                            min="1"
                            placeholder="Jml"
                            className="w-16 px-2 py-2 text-center text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500"
                            value={quantities[item.id] || ''}
                            onChange={(e) => handleQuantityChange(item.id, e.target.value)}
                          />
                        )}
                        <WhatsAppButton
                          label="Pesan"
                          onClick={() => handleOrder(item)}
                          className="!px-4 !py-2 text-sm"
                        />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

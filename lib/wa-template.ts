export interface ServiceOrder {
  serviceName: string;
  pricingType: 'kiloan' | 'paketan' | 'satuan';
  price: number;
  unit: string;
  duration: string;
  quantity?: number; // khusus untuk tipe satuan
}

export function generateWAUrl(waNumber: string, order: ServiceOrder): string {
  // Pastikan nomor diawali dengan 62 bukan 0 atau +62
  const formattedNumber = waNumber.replace(/^0/, '62').replace(/^\+/, '');

  const priceFormatted = new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
  }).format(order.price);

  let detail = `Layanan   : ${order.serviceName}
Tipe      : ${order.pricingType.charAt(0).toUpperCase() + order.pricingType.slice(1)}
Harga     : ${priceFormatted} / ${order.unit}
Estimasi  : ${order.duration}`;

  // Tambahkan jumlah & subtotal khusus untuk satuan
  if (order.pricingType === 'satuan' && order.quantity && order.quantity > 0) {
    const subtotal = new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(order.price * order.quantity);

    detail += `
Jumlah    : ${order.quantity} item
Subtotal  : ${subtotal}`;
  }

  const message = `Halo, saya ingin memesan layanan Krisna Laundry:

${detail}

Mohon info lebih lanjut untuk proses pemesanan. Terima kasih!`;

  const encoded = encodeURIComponent(message);
  return `https://wa.me/${formattedNumber}?text=${encoded}`;
}

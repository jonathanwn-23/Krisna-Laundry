# PRD — Web Jasa Laundry
**Versi:** 1.0  
**Tanggal:** 29 Juni 2026  
**Stack:** Next.js 16 · Supabase · Tailwind CSS  
**Status:** Draft

---

## 1. Latar belakang & tujuan

Pemilik usaha laundry membutuhkan kehadiran digital yang memudahkan calon pelanggan menemukan informasi layanan, harga, dan menghubungi pemilik secara langsung. Tidak ada sistem login, payment gateway, maupun admin panel — semua proses lanjutan dilakukan melalui WhatsApp.

**Tujuan utama:**
- Menampilkan layanan dan harga secara transparan.
- Mempermudah pelanggan memulai order cukup dengan satu klik.
- Memberikan kesan profesional dan terpercaya.

---

## 2. Target pengguna

| Segmen | Deskripsi |
|---|---|
| Pelanggan rumahan | Individu yang ingin mencuci pakaian tanpa repot |
| Kos / mahasiswa | Pengguna yang butuh layanan kiloan terjangkau |
| Pelanggan express | Yang butuh hasil cepat dalam 1 hari |

---

## 3. Ruang lingkup (scope)

### In scope
- Landing page publik (satu halaman / single page)
- Seksi: Hero, Layanan, Harga, Cara Order, Tentang Kami, Footer
- Tombol order per layanan/paket → redirect WA dengan template pesan otomatis
- Konten dikelola via Supabase (layanan & harga bisa diupdate tanpa deploy ulang)

### Out of scope
- Sistem login / akun pelanggan
- Payment gateway
- Admin dashboard
- Notifikasi / tracking order
- Ulasan / rating pelanggan

---

## 4. Struktur halaman

### 4.1 Hero
- Tagline utama bisnis laundry (misal: "Bersih, Cepat, Terpercaya")
- Sub-tagline singkat (1–2 kalimat)
- CTA utama: **Pesan Sekarang** → scroll ke seksi layanan
- Gambar/ilustrasi pendukung (bisa foto laundry atau ilustrasi flat)

### 4.2 Layanan
- Menampilkan kartu-kartu layanan yang tersedia
- Setiap kartu memuat:
  - Nama layanan (contoh: Cuci Kiloan, Cuci Setrika, Express, Satuan)
  - Deskripsi singkat (1–2 kalimat)
  - Estimasi waktu pengerjaan
  - Harga mulai dari (opsional, bisa hanya tampilkan di seksi harga)
  - Tombol **Pesan via WA** → redirect dengan template pesan

### 4.3 Harga
- **Tab/toggle pemilihan mode:** Pelanggan dapat memilih tampilan harga berdasarkan dua kategori:
  - **Per Kiloan** — layanan dihitung berdasarkan berat (kg)
  - **Paketan** — layanan dalam bentuk paket dengan harga tetap
- Saat tab dipilih, tabel harga hanya menampilkan item sesuai kategori tersebut
- Kolom tabel: Layanan · Harga · Estimasi · Keterangan
- Jika layanan bertipe **satuan** (`per item`), tampilkan input kuantitas (angka) di samping tombol pesan agar pelanggan bisa menentukan jumlah item
- Untuk tipe **kiloan** dan **paketan**, tidak perlu input kuantitas — detail berat/jumlah didiskusikan via WA
- Harga diambil dari Supabase (dinamis)
- Setiap baris memiliki tombol **Pesan** → redirect WA dengan template sesuai baris tersebut (termasuk kuantitas jika satuan)

### 4.4 Cara order
- Langkah-langkah singkat (3–4 step):
  1. Pilih layanan di website
  2. Klik tombol pesan → otomatis diarahkan ke WA
  3. Diskusikan detail dengan pemilik (estimasi berat, pickup/antar)
  4. Laundry dijemput / diantar sesuai kesepakatan

### 4.5 Tentang Kami
- Nama usaha & deskripsi singkat
- Jam operasional
- Alamat / area layanan (dengan embed Google Maps opsional)
- Nomor telepon (klik-to-call)
- Link WhatsApp (umum, tanpa template layanan)
- Ikon sosial media (jika ada)

### 4.6 Footer
- Nama usaha + tagline singkat
- Link navigasi cepat
- Nomor WA
- Hak cipta

---

## 5. Fitur utama

### 5.1 Order via WhatsApp (core feature)
Ketika pelanggan menekan tombol **Pesan** pada suatu layanan atau paket, sistem akan:

1. Mengambil data layanan yang dipilih (nama, harga, deskripsi, tipe harga)
2. Jika layanan bertipe **satuan** (`per item`) dan pelanggan mengisi kuantitas, sertakan jumlah item dan subtotal dalam template pesan
3. Generate URL `wa.me/{nomor_pemilik}?text={pesan_encoded}`
4. Template pesan yang di-generate:

**Template untuk layanan kiloan / paketan:**
```
Halo, saya ingin memesan layanan Krisna Laundry:

Layanan   : [nama layanan]
Tipe      : [Kiloan / Paketan]
Harga     : [harga]
Estimasi  : [estimasi waktu]

Mohon info lebih lanjut untuk proses pemesanan. Terima kasih!
```

**Template untuk layanan satuan (per item):**
```
Halo, saya ingin memesan layanan Krisna Laundry:

Layanan   : [nama layanan]
Tipe      : Satuan
Harga     : [harga] / item
Jumlah    : [kuantitas] item
Subtotal  : [harga × kuantitas]
Estimasi  : [estimasi waktu]

Mohon info lebih lanjut untuk proses pemesanan. Terima kasih!
```

> **Catatan:** Input kuantitas hanya muncul untuk layanan bertipe satuan. Jika pelanggan tidak mengisi kuantitas, baris Jumlah dan Subtotal tidak disertakan dalam template.

5. Redirect ke WhatsApp (tab baru di desktop, deep link di mobile)

### 5.2 Konten dinamis via Supabase
- Tabel `services` → menyimpan data layanan (nama, deskripsi, estimasi, aktif/nonaktif)
- Tabel `pricing` → menyimpan harga per layanan/paket
- Tabel `business_info` → menyimpan info usaha (nama, nomor WA, alamat, jam buka)
- Data di-fetch saat build (SSG) atau on-demand (ISR) untuk performa optimal

---

## 6. Struktur database Supabase

### Tabel `services`
| Kolom | Tipe | Keterangan |
|---|---|---|
| id | uuid | Primary key |
| name | text | Nama layanan |
| description | text | Deskripsi singkat |
| duration_estimate | text | Contoh: "1–2 hari" |
| icon | text | Nama ikon (opsional) |
| is_active | boolean | Tampil/tidak di website |
| sort_order | int | Urutan tampil |
| created_at | timestamp | Auto |

### Tabel `pricing`
| Kolom | Tipe | Keterangan |
|---|---|---|
| id | uuid | Primary key |
| service_id | uuid | FK → services.id |
| package_name | text | Nama paket (opsional) |
| pricing_type | text | Kategori harga: `kiloan`, `paketan`, atau `satuan` — digunakan untuk filter tab di UI |
| price | numeric | Harga dalam rupiah |
| unit | text | `"per kg"`, `"per item"`, `"per paket"`, dll. |
| allow_quantity | boolean | `true` hanya untuk tipe satuan — menampilkan input kuantitas di UI |
| note | text | Keterangan tambahan |
| is_active | boolean | Tampil/tidak |
| sort_order | int | Urutan tampil |

### Tabel `business_info`
| Kolom | Tipe | Keterangan |
|---|---|---|
| id | uuid | Primary key |
| key | text | Unique key (misal: `wa_number`) |
| value | text | Nilai (misal: `6281234567890`) |
| label | text | Label tampilan |

---

## 7. Struktur proyek Next.js

```
/
├── app/
│   ├── page.tsx              ← Landing page utama
│   ├── layout.tsx
│   └── globals.css
├── components/
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── Services.tsx
│   │   ├── Pricing.tsx
│   │   ├── HowToOrder.tsx
│   │   ├── About.tsx
│   │   └── Footer.tsx
│   └── ui/
│       ├── ServiceCard.tsx
│       ├── PricingTable.tsx
│       └── WhatsAppButton.tsx
├── lib/
│   ├── supabase.ts           ← Supabase client
│   └── wa-template.ts        ← Helper generate URL WA
└── types/
    └── index.ts              ← TypeScript types
```

---

## 8. Logika generate URL WhatsApp

```typescript
// lib/wa-template.ts

interface ServiceOrder {
  serviceName: string;
  pricingType: 'kiloan' | 'paketan' | 'satuan';
  price: number;
  unit: string;
  duration: string;
  quantity?: number; // hanya untuk tipe satuan
}

export function generateWAUrl(waNumber: string, order: ServiceOrder): string {
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
  return `https://wa.me/${waNumber}?text=${encoded}`;
}
```

---

## 9. Strategi fetching data

| Seksi | Strategi | Alasan |
|---|---|---|
| Layanan | ISR (revalidate: 3600) | Jarang berubah, butuh performa |
| Harga | ISR (revalidate: 1800) | Bisa berubah sewaktu-waktu |
| Info bisnis | ISR (revalidate: 86400) | Sangat jarang berubah |

Semua data dibaca sebagai **public** di Supabase (Row Level Security: SELECT allowed for anon).

---

## 10. Desain & UI

**Palet warna (rekomendasi):**
- Primary: biru-teal (bersih, profesional, kepercayaan)
- Accent: putih bersih
- Background: off-white / abu sangat muda
- Text: abu tua / near-black

**Tipografi:**
- Heading: font tebal, modern, mudah dibaca
- Body: font reguler, jarak baris nyaman

**Komponen utama:**
- Kartu layanan dengan hover effect ringan
- Tabel harga clean dengan baris bergantian
- Tombol WA berwarna hijau (brand WhatsApp) atau primary
- Ikon WhatsApp pada setiap CTA

**Responsif:** Mobile-first — mayoritas pengguna akses dari HP.

---

## 11. SEO & performa

- Meta title & description sesuai nama usaha
- Open Graph image (untuk share di WA/medsos)
- Image optimization via `next/image`
- Font loading via `next/font`
- Minimal JS di client — preferensikan Server Components

---

## 12. Deployment

- **Hosting:** Vercel (free tier cukup untuk traffic kecil-menengah)
- **Database:** Supabase free tier
- **Domain:** Opsional (bisa pakai subdomain Vercel dulu)

---

## 13. Estimasi pengerjaan (solo dev)

| Hari | Pekerjaan |
|---|---|
| Hari 1 | Setup project, Supabase schema, koneksi |
| Hari 2 | Komponen Hero + Layanan |
| Hari 3 | Komponen Harga + logika WA template |
| Hari 4 | Komponen Cara Order + Tentang Kami + Footer |
| Hari 5 | Styling, responsif, polish UI |
| Hari 6 | Seed data Supabase, testing lintas device |
| Hari 7 | Deploy ke Vercel, finishing & review |

---

## 14. Kriteria selesai (done criteria)

- [ ] Semua seksi tampil dengan benar di mobile & desktop
- [ ] Setiap tombol "Pesan" membuka WA dengan template pesan yang sesuai
- [ ] Data layanan & harga terbaca dari Supabase
- [ ] Nomor WA, alamat, dan jam operasional tampil di seksi Tentang Kami
- [ ] Halaman load < 3 detik di koneksi mobile (Lighthouse ≥ 85)
- [ ] Tidak ada error konsol di production

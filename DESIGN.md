# Panduan Desain (Design Guidelines) - Krisna Laundry

Dokumen ini berisi panduan dan aturan terkait desain antarmuka pengguna (UI), khususnya mengenai penanganan warna di dalam proyek.

## Aturan Perubahan Warna

1. **Persetujuan Wajib untuk Mengubah Warna**: 
   Setiap perubahan, penggantian, atau penambahan warna baru pada komponen mana pun (teks, tombol, latar belakang, dll.) **WAJIB** mendapatkan persetujuan (konfirmasi) secara eksplisit dari User (Pemilik Proyek) sebelum diimplementasikan.

2. **Mempertahankan Warna yang Ada**:
   Jika ada instruksi untuk mengubah desain atau *layout*, AI atau Developer harus mempertahankan palet warna yang sudah ada (termasuk *branding* warna `primary` atau *slate* yang sedang digunakan) kecuali jika User secara spesifik meminta untuk mengubah warnanya.

3. **Konsistensi Desain**:
   Gunakan kelas Tailwind CSS yang sudah dikonfigurasi di dalam `tailwind.config.ts` untuk menjaga konsistensi. Jika membutuhkan warna di luar palet yang ada, kembali ke Aturan nomor 1 (minta persetujuan).

## Palet Warna Saat Ini (Referensi)
- **Primary (Teal/Cyan)**: Digunakan untuk branding utama, ikon, tulisan Krisna, dan tombol aksi (misal: `text-primary-500`, `bg-primary-600`).
- **Slate/Gray**: Digunakan untuk teks deskripsi, tulisan Laundry, latar belakang sekunder, dan garis tepi (*border*).
- **White/Transparent**: Digunakan untuk latar belakang utama dan *navbar* yang di-*scroll*.

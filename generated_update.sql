-- 1. Update Nomor WA
UPDATE public.business_info SET value = '6282115146439' WHERE key = 'wa_number';

-- 2. Nonaktifkan harga lama
UPDATE public.pricing SET is_active = false WHERE is_active = true;

-- 3. Masukkan harga baru
INSERT INTO public.pricing (service_id, package_name, pricing_type, price, unit, allow_quantity, is_active, sort_order, note) VALUES
('38c1309b-88aa-4c86-8ee1-4743484f880b', 'Cuci + Setrika', 'kiloan', 6000, 'per kg', true, true, 1, 'Antar jemput laundry gratis, akan kami hubungi jika pelayanan sudah selesai'),
('38c1309b-88aa-4c86-8ee1-4743484f880b', 'Setrika', 'kiloan', 4000, 'per kg', true, true, 2, 'Antar jemput laundry gratis, akan kami hubungi jika pelayanan sudah selesai'),
('12827232-c120-4152-9e68-f857cb90c4ef', NULL, 'satuan', 10000, 'per item', true, true, 3, 'Antar jemput laundry gratis, akan kami hubungi jika pelayanan sudah selesai'),
('eeb1f52f-e955-4faf-af3f-2275969170f7', NULL, 'satuan', 3000, 'per item', true, true, 4, 'Antar jemput laundry gratis, akan kami hubungi jika pelayanan sudah selesai'),
('141c5baf-3687-47a2-a7bb-39f74b4b0cde', 'Selimut Kecil (K)', 'satuan', 5000, 'per item', true, true, 5, 'Antar jemput laundry gratis, akan kami hubungi jika pelayanan sudah selesai'),
('141c5baf-3687-47a2-a7bb-39f74b4b0cde', 'Selimut Besar (B)', 'satuan', 7000, 'per item', true, true, 6, 'Antar jemput laundry gratis, akan kami hubungi jika pelayanan sudah selesai'),
('18cb1c77-229d-437b-8f00-89778404cf42', NULL, 'satuan', 10000, 'per item', true, true, 7, 'Antar jemput laundry gratis, akan kami hubungi jika pelayanan sudah selesai'),
('b9bc002a-4863-418d-be33-7b4b2aa43aba', NULL, 'satuan', 15000, 'per item', true, true, 8, 'Antar jemput laundry gratis, akan kami hubungi jika pelayanan sudah selesai'),
('0db35210-f798-4d79-bdf7-f84b8f80985b', NULL, 'satuan', 4000, 'per pasang', true, true, 9, 'Antar jemput laundry gratis, akan kami hubungi jika pelayanan sudah selesai'),
('bc3c1f75-9409-4594-ac0c-0d950cd5ab25', NULL, 'satuan', 0, 'per item', true, true, 10, 'Antar jemput laundry gratis, akan kami hubungi jika pelayanan sudah selesai');

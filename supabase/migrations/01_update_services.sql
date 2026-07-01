ALTER TABLE public.services ADD COLUMN IF NOT EXISTS image_url TEXT;
UPDATE public.services SET is_active = false;

INSERT INTO public.services (name, description, duration_estimate, is_active, sort_order)
VALUES 
('Cuci Pakaian', 'Cuci + Setrika atau Setrika aja', '1-2 Hari', true, 1),
('Cuci Seprei 1 set', 'Seprei Kasur, Sarung Bantal, Sarung Guling', '2-3 Hari', true, 2),
('Cuci Handuk', 'Cuci Kering', '1-2 Hari', true, 3),
('Cuci Selimut', 'Selimut K dan Selimut B', '2-3 Hari', true, 4),
('Cuci Bed Cover', 'Cuci Kering', '3-4 Hari', true, 5),
('Cuci Bed Cover Rumbai', 'Cuci Kering', '3-4 Hari', true, 6),
('Cuci Sepatu', 'Cuci Kering', '1-2 Hari', true, 7),
('Cuci Boneka', 'Boneka tergantung ukuran', '2-3 Hari', true, 8);

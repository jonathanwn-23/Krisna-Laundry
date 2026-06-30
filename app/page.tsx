import { Navbar } from '@/components/sections/Navbar';
import { Hero } from '@/components/sections/Hero';
import { Services } from '@/components/sections/Services';
import { Pricing } from '@/components/sections/Pricing';
import { HowToOrder } from '@/components/sections/HowToOrder';
import { About } from '@/components/sections/About';
import { Footer } from '@/components/sections/Footer';
import { supabase } from '@/lib/supabase';
import { PricingItem } from '@/components/ui/PricingTable';

// Enable ISR
export const revalidate = 3600; // revalidate at most every hour

export default async function Home() {
  // Fetch services
  const { data: servicesData } = await supabase
    .from('services')
    .select('*')
    .eq('is_active', true)
    .order('sort_order', { ascending: true });

  // Fetch pricing joined with services
  const { data: pricingData } = await supabase
    .from('pricing')
    .select(`
      id,
      service_id,
      package_name,
      pricing_type,
      price,
      unit,
      allow_quantity,
      note,
      sort_order,
      services ( name, duration_estimate )
    `)
    .eq('is_active', true)
    .order('sort_order', { ascending: true });

  // Fetch business info
  const { data: infoData } = await supabase
    .from('business_info')
    .select('key, value');

  const businessInfo = (infoData || []).reduce((acc: Record<string, string>, item) => {
    acc[item.key] = item.value;
    return acc;
  }, {});

  const waNumber = businessInfo['wa_number'] || '6280000000000';

  // Format services
  const services = (servicesData || []).map(s => ({
    id: s.id,
    name: s.name,
    description: s.description,
    duration: s.duration_estimate,
    imageUrl: s.image_url || undefined,
  }));

  // Format pricing items
  const pricingItems: PricingItem[] = (pricingData || []).map(p => {
    // @ts-ignore - Supabase join type might be complex
    const serviceName = p.services?.name || 'Unknown';
    // @ts-ignore
    const durationEstimate = p.services?.duration_estimate || '-';

    return {
      id: p.id,
      service_id: p.service_id,
      service_name: serviceName,
      package_name: p.package_name,
      pricing_type: p.pricing_type as any,
      price: p.price,
      unit: p.unit,
      allow_quantity: p.allow_quantity,
      note: p.note,
      duration_estimate: durationEstimate,
    };
  });

  return (
    <main id="beranda" className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      <Hero />
      <Services services={services} waNumber={waNumber} />
      <Pricing items={pricingItems} waNumber={waNumber} />
      <HowToOrder />
      <About businessInfo={businessInfo} />
      <Footer />
    </main>
  );
}

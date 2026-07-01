const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = 'https://qxdstsxwakfrxusgpuvg.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF4ZHN0c3h3YWtmcnh1c2dwdXZnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODI3MDExMDksImV4cCI6MjA5ODI3NzEwOX0.69nyaTA5VGg7WZHUNScNB3B863c0is23rj90q8WKP7g';
const supabase = createClient(supabaseUrl, supabaseKey);

async function main() {
  const { data, error } = await supabase
    .from('services')
    .select('id, name, image_url, is_active')
    .eq('is_active', true)
    .order('sort_order', { ascending: true });

  if (error) {
    console.error('Error:', error);
  } else {
    console.log(data);
  }
}

main();

const { createClient } = require('@supabase/supabase-js');

// Supabase credentials loaded from environment
const supabaseUrl = process.env.SUPABASE_URL;
const serviceKey = process.env.SUPABASE_SERVICE_KEY || process.env.SUPABASE_ANON_KEY;

// Use service key when provided for secure access
const supabase = createClient(supabaseUrl, serviceKey);

module.exports = { supabase };

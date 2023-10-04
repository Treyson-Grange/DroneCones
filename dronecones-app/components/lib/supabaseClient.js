import { createClient } from '@supabase/supabase-js'

export const supabase = createClient('https://kaclifohgdnakblyiaia.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImthY2xpZm9oZ2RuYWtibHlpYWlhIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTUwNTU4NTMsImV4cCI6MjAxMDYzMTg1M30.KlWj3S1z-5CB6cuavm7ozXCANpMtHHtruktRBPpH-QE')
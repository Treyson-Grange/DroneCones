import { supabase } from '../components/lib/supabaseClient'

export const db = {
	cones: () => supabase.from('cones'),
    icecreamFlavors: () => supabase.from('icecreamFlavors'),
    toppings: () => supabase.from('toppings')
};

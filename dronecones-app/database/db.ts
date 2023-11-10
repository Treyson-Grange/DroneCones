import { supabase } from '../components/lib/supabaseClient'

export const db = {
	cones: () => supabase.from('cones'),
    icecreamFlavors: () => supabase.from('icecreamFlavors'),
    toppings: () => supabase.from('toppings'),
    userType: () => supabase.from('userType'),
    users: () => supabase.from('users'),
    addresses: () => supabase.from('addresses'),
    transactions: () => supabase.from('transactions'),
    orderItem: () => supabase.from('orderItem'),
    droneDelivery: () => supabase.from('droneDelivery'),
    drones: () => supabase.from('drones'),
    droneSize: () => supabase.from('droneSizes'),
    supportForms: () => supabase.from('supportForms'),
    itemsInProgress: () => supabase.from('itemsInProgress'),
    restockHistory: () => supabase.from('restockHistory')
};

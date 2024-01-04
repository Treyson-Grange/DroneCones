import { supabase } from '../components/lib/supabaseClient'
import type { Cone, IcecreamFlavor, Topping, RestockHistory } from './databaseTypes'
import { db } from './db'


/* 
Cone functions
*/
export async function getCones(): Promise<Cone[] | null> {
    // returns an array of all cones in database as cone types
    const { data, error } = await db.cones()
        .select()
        .order('id');
    return data
}

export async function getCone(id: number): Promise<Cone | null>{
    // returns the cone with the provided id, as a cone type
    const { data, error } = await db.cones()
        .select()
        .eq('id', id);

    let cone: Cone | null;
    if (data == null || data?.length == 0) {
        cone = null
    } else {       
        cone = data?.at(0)
    }

    return cone;
}

export async function addNewCone(name: string, amount: number, price: number, available: boolean = true, image: any) {
    // add a new row into cone database with given information
    uploadConeImage(image)
    const imagePath = `https://kaclifohgdnakblyiaia.supabase.co/storage/v1/object/public/stockImages/cones/${image.name}`
    
    const { data, error } = await db.cones()
        .insert({name: name, amount: amount, price: price, available: available, image: imagePath})
        .select()

}

export async function removeCone(id: number) {
    // remove cone with specified id from the database
    const { error } = await db.cones()
        .delete()
        .eq('id', id)
}

export async function addConeAmount(id: number, increment_num: number) {
    //adds the amount given to the amount of the cone with given id
    const { error } = await supabase.rpc('add_cone_amount', {
        quote_id: id, increment_num: increment_num
    })
}

export async function useOneCone(id: number) {
    // reduces the amount of the given cone id by 1
    const { error } = await supabase.rpc('add_cone_amount', {
        quote_id: id, increment_num: -1
    })
}

export async function toggleConeAvailability(id: number) {
    // update the Available column of cone with given ID to opposite boolean value
    const { error } = await supabase.rpc('toggle_cone_availability', {quote_id: id})
}

export async function updateCone(id: number, cone: Cone) {
    // update the cone with given id
    const { error } = await db.cones()
        .update(cone)
        .eq('id', id)
}

async function uploadConeImage(image: any) {
    // uploads a image to a 'stockImages' storage bucket at path of 'cones/'
    const { data, error } = await supabase
        .storage
        .from('stockImages')
        .upload(`cones/${image.name}`, image, {
            cacheControl: '3600',
            upsert: false
    })
}

export async function restockCones(items: any) {
    // makes a restock order for each item in the list
    for (const item of items) {
        makeRestockOrder('cone', item)
    }
}



/* 
Ice cream flavors functions
*/
export async function getIcecreamFlavors(): Promise<IcecreamFlavor[] | null> {
    // returns an array of all ice cream flavors in database as IcecreamFlavor types
    const { data, error } = await db.icecreamFlavors()
        .select()
        .order('id');
    return data
}

export async function getIcecreamFlavor(id: number): Promise<IcecreamFlavor | null>{
    // returns the ice cream flavor with the provided id, as a IcecreamFlavor type
    const { data, error } = await db.icecreamFlavors()
        .select()
        .eq('id', id);

    let flavor: IcecreamFlavor | null;
    if (data == null || data?.length == 0) {
        flavor = null
    } else {       
        flavor = data?.at(0)
    }

    return flavor;
}

export async function addNewIcecreamFlavor(name: string, amount: number, pricePerScoop: number, available: boolean = true, image: any) {
    // add a new row into icecream flavors database with given information
    uploadIcecreamImage(image)
    const imagePath = `https://kaclifohgdnakblyiaia.supabase.co/storage/v1/object/public/stockImages/icecreamFlavors/${image.name}`
    
    const { data, error } = await db.icecreamFlavors()
        .insert({name: name, amount: amount, price_per_scoop: pricePerScoop, available: available})
        .select()
}

export async function removeIcecreamFlavor(id: number) {
    // remove ice cream flavor with specified id from the database
    const { error } = await db.icecreamFlavors()
        .delete()
        .eq('id', id)
}

export async function addIcecreamFlavorAmount(id: number, increment_num: number) {
    //adds the amount given to the amount of the ice cream flavor with given id
    const { error } = await supabase.rpc('add_flavor_amount', {
        quote_id: id, increment_num: increment_num
    })
}

export async function useOneIcecreamFlavor(id: number) {
    // reduces the amount of the given flavor id by 1
    const { error } = await supabase.rpc('add_flavor_amount', {
        quote_id: id, increment_num: -1
    })
}

export async function toggleIcecreamFlavorAvailability(id: number) {
    // update the Available column of cone with given ID to opposite boolean value
    const { error } = await supabase.rpc('toggle_flavor_availability', {quote_id: id})
}

export async function updateIcecreamFlavor(id: number, flavor: IcecreamFlavor) {
    // update the ice cream flavor with given id
    const { error } = await db.icecreamFlavors()
        .update(flavor)
        .eq('id', id)
}

async function uploadIcecreamImage(image: any) {
    // uploads a image to a 'stockImages' storage bucket at path of 'icecreamFlavors/' 
    const { data, error } = await supabase
        .storage
        .from('stockImages')
        .upload(`icecreamFlavors/${image.name}`, image, {
            cacheControl: '3600',
            upsert: false
    })
}

export async function restockFlavors(items: any) {
    // makes a restock order for each item in the list
    for (const item of items) {
        makeRestockOrder('flavor', item)
    }
}



/* 
Toppings functions
*/
export async function getToppings(): Promise<Topping[] | null> {
    // returns an array of all toppings in database as topping types
    const { data, error } = await db.toppings()
        .select()
        .order('id');
    return data
}

export async function getTopping(id: number): Promise<Topping | null>{
    // returns the topping with the provided id, as a Topping type
    const { data, error } = await db.toppings()
        .select()
        .eq('id', id);

    let topping: Topping | null;
    if (data == null || data?.length == 0) {
        topping = null
    } else {       
        topping = data?.at(0)
    }

    return topping;
}

export async function addNewTopping(name: string, amount: number, price: number, available: boolean = true, image:any) {
    // add a new row into topping database with given information
    uploadToppingImage(image)
    const imagePath = `https://kaclifohgdnakblyiaia.supabase.co/storage/v1/object/public/stockImages/toppings/${image.name}`
    
    const { data, error } = await db.toppings()
        .insert({name: name, amount: amount, price: price, available: available})
        .select()
}

export async function removeTopping(id: number) {
    // remove topping with specified id from the database
    const { error } = await db.toppings()
        .delete()
        .eq('id', id)
}

export async function addToppingAmount(id: number, increment_num: number) {
    //adds the amount given to the amount of the topping with given id
    const { error } = await supabase.rpc('add_topping_amount', {
        quote_id: id, increment_num: increment_num
    })
}

export async function useOneTopping(id: number) {
    // reduces the amount of the given topping id by 1
    const { error } = await supabase.rpc('add_topping_amount', {
        quote_id: id, increment_num: -1
    })
}

export async function toggleToppingAvailability(id: number) {
    // update the Available column of topping with given ID to opposite boolean value
    const { error } = await supabase.rpc('toggle_topping_availability', {quote_id: id})
}

export async function updateTopping(id: number, topping: Topping) {
    // update the topping with given id
    const { error } = await db.toppings()
        .update(topping)
        .eq('id', id)
}

async function uploadToppingImage(image: any) {
    // uploads a image to a 'stockImages' storage bucket at path of 'toppings/' 
    const { data, error } = await supabase
        .storage
        .from('stockImages')
        .upload(`toppings/${image.name}`, image, {
            cacheControl: '3600',
            upsert: false
    })
}

export async function restockToppings(items: any) {
    // makes a restock order for each item in the list
    for (const item of items) {
        makeRestockOrder('topping', item)
    }
}


async function makeRestockOrder(type: string, item: any) {
    // Makes a restock order for the proper table of type 'cone', 'flavor' or 'topping'
    // Inserts a row into RestockHistory table
    // Starts development timer that changes status from 'placed', to 'shipped', then 'completed'
    // Updates the amount of that item
    let restockOrder: RestockHistory = {
        type: type,
        status: 'placed',
        amount: item.quantity,
    }
    if (type == 'cone') {
        restockOrder.cone = item.id
    } else if (type == 'flavor') {
        restockOrder.flavor = item.id
    } else if (type == 'topping') {
        restockOrder.topping = item.id
    }
    var { data, error } = await db.restockHistory()
        .insert(restockOrder)
        .select()


    if (data == null) return

    await new Promise(r => setTimeout(r, 20 * 1000));

    restockOrder.status = 'shipped'
    await db.restockHistory()
        .update(restockOrder)
        .eq('id', data[0].id)

    await new Promise(r => setTimeout(r, 20 * 1000));
    
    restockOrder.status = 'completed'
    await db.restockHistory()
        .update(restockOrder)
        .eq('id', data[0].id) 
        
    if (restockOrder.cone != null && restockOrder.amount != null) {
        addIcecreamFlavorAmount(restockOrder.cone, restockOrder.amount)
    } else if (restockOrder.flavor != null && restockOrder.amount != null)  {
        addIcecreamFlavorAmount(restockOrder.flavor, restockOrder.amount)
    } else if (restockOrder.topping != null && restockOrder.amount != null)  {
        addToppingAmount(restockOrder.topping, restockOrder.amount)
    }
}

export async function getRestockHistory() {
    // Returns a list of all rows in restockHistory table
    const { data, error } = await db.restockHistory()
        .select(`
            id,
            created_at,
            type,
            amount,
            status,
            cone (
                name
            ),
            flavor (
                name
            ),
            topping (
                name
            )
        `)
        .order('created_at', { ascending: false })


    return data
}




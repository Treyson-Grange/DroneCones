import { any } from '0g';
import { supabase } from '../components/lib/supabaseClient'
// import type {IcecreamFlavor, Cone, Topping} from "@/types"
import type { Cone, IcecreamFlavor, Topping } from './databaseTypes'
import { db } from './db'


/* 
Cone functions
*/
export async function getCones(): Promise<Cone[] | null> {
    // returns an array of all cones in database as cone types
    const { data, error } = await db.cones()
        .select();

    // let cones : Cone[] = [];
    // if (data) {
    //     data?.forEach( (element) => {
    //         cones.push(element)
    //     });
    // }
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
    console.log(cone)

    return cone;
}

export async function addNewCone(name: string, amount: number, price: number, available: boolean = true) {
    // add a new row into cone database with given information
    const { data, error } = await db.cones()
        .insert({name: name, amount: amount, price: price, available: available})
        .select()
    // TODO maybe return created cone or id of cone
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

export async function toggleConeAvailability(id: number) {
    // update the Available column of cone with given ID to opposite boolean value
    const { error } = await supabase.rpc('toggle_cone_availability', {quote_id: id})
}

export async function updateConePrice(id: number, price: number) {
    // update the price of cone with given id
    const { error } = await db.cones()
        .update({ price: price })
        .eq('id', id)
}



/* 
Ice cream flavors functions
*/
export async function getIcecreamFlavors(): Promise<IcecreamFlavor[] | null> {
    // returns an array of all ice cream flavors in database as IcecreamFlavor types
    const { data, error } = await db.icecreamFlavors()
        .select();

    // let flavors : IcecreamFlavor[] = [];
    // if (data) {
    //     data?.forEach( (element) => {
    //         flavors.push(element)
    //     });
    // }
    console.log(data)
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
    console.log(flavor)

    return flavor;
}

export async function addNewIcecreamFlavor(name: string, amount: number, pricePerScoop: number, available: boolean = true) {
    // add a new row into icecream flavors database with given information
    const { data, error } = await db.icecreamFlavors()
        .insert({name: name, amount: amount, pricePerScoop: pricePerScoop, available: available})
        .select()
    // TODO maybe return created cone or id of cone
}

export async function removeIcecreamFlavor(id: number) {
    // remove ice cream flavor with specified id from the database
    const { error } = await db.icecreamFlavors()
        .delete()
        .eq('id', id)
}

export async function updateIcecreamFlavorAmount(id: number, increment_num: number) {
    //adds the amount given to the amount of the ice cream flavor with given id
    const { error } = await supabase.rpc('add_flavor_amount', {
        quote_id: id, increment_num: increment_num
    })
}

export async function toggleIcecreamFlavorAvailability(id: number) {
    // update the Available column of cone with given ID to opposite boolean value
    const { error } = await supabase.rpc('toggle_flavor_availability', {quote_id: id})
}

export async function updateIcecreamFlavorPrice(id: number, pricePerScoop: number) {
    // update the price per scoop of ice cream flavor with given id
    const { error } = await db.icecreamFlavors()
        .update({ pricePerScoop: pricePerScoop })
        .eq('id', id)
    console.log(error)
}





/* 
Toppings functions
*/
export async function getToppings(): Promise<Topping[] | null> {
    // returns an array of all toppings in database as topping types
    const { data, error } = await db.toppings()
        .select();

    // let toppings : Topping[] = [];
    // if (data) {
    //     data?.forEach( (element) => {
    //         toppings.push(element)
    //     });
    // }
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
    console.log(topping)

    return topping;
}

export async function addNewTopping(name: string, amount: number, price: number, available: boolean = true) {
    // add a new row into topping database with given information
    const { data, error } = await db.toppings()
        .insert({name: name, amount: amount, price: price, available: available})
        .select()
    // TODO maybe return created topping or id of toppings
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

export async function toggleToppingAvailability(id: number) {
    // update the Available column of topping with given ID to opposite boolean value
    const { error } = await supabase.rpc('toggle_topping_availability', {quote_id: id})
}

export async function updateToppingPrice(id: number, price: number) {
    // update the price of topping with given id
    const { error } = await db.toppings()
        .update({ price: price })
        .eq('id', id)
}

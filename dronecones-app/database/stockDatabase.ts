import { any } from '0g';
import { supabase } from '../components/lib/supabaseClient'
// import type {IcecreamFlavor, Cone, Topping} from "@/types"
import type { Cone, IcecreamFlavor, Topping } from './databaseTypes'
import { db } from './db'



export async function getCones(): Promise<Cone[] | null> {
    // returns an array of all cones in database as cone types
    const { data, error } = await db.cones()
        .select();

    let cones : Cone[] = [];
    if (data) {
        data?.forEach( (element) => {
            cones.push(element)
        });
    }
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

export async function updateConeAmount(id: number, increment_num: number) {
    //adds the amount given to the amount of the cone with given id
    const { error } = await supabase.rpc('add_cone_amount', {
        quote_id: id, increment_num: increment_num
    })
}

export async function toggleConeAvailability(id: number) {
    // update the Available column of cone with given ID to opposite boolean value
    const { error } = await supabase.rpc('toggle_cone_availability', {quote_id: id})
    console.log(error)
}


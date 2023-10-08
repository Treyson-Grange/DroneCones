import { any } from '0g';
import { supabase } from '../components/lib/supabaseClient'
import type {IcecreamFlavor, Cone, Topping} from "@/types"

export async function getCones(): Promise<Cone[]> {
    // returns an array of all cones in database as cone types
    const { data, error } = await supabase
        .from('cones')
        .select();

    let cones : Cone[] = [];
    if (data) {
        data?.forEach( (element) => {
            cones.push({
                id: element.id,
                cone: element.name,
                price: element.price,
                amount: element.amount,
                available: element.available
            });
        });
    }
    return cones
}

export async function getCone(id: number): Promise<Cone | null>{
    // returns the cone with the provided id, as a cone type
    const { data, error } = await supabase
        .from('cones')
        .select()
        .eq('id', id);

    let cone: Cone | null;
    if (data == null || data?.length == 0) {
        cone = null
    } else {
        cone = {
            id: data?.at(0).id,
            cone: data?.at(0).name,
            price: data?.at(0).price,
            amount: data?.at(0).amount,
            available: data?.at(0).available,
        };
        console.log(cone);
    }

    return cone;
}

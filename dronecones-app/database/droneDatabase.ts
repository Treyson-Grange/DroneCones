import { supabase } from '../components/lib/supabaseClient'
import { db } from './db'
import type { Drone, DroneSize, DroneDelivery,  } from './databaseTypes'

export async function getDrone(droneID: number): Promise<Drone | null> {
    // Returns all information for the drone with given droneID
    const { data, error } = await db.drones()
        .select()
        .eq('id', droneID);

    let drone: Drone | null;
    if (data == null || data?.length == 0) {
        drone = null;
    } else {
        drone = data?.at(0)
    }

    return drone
}

export async function addDrone(userID: string, name: string, size: number) {
    // Adds a drone to the database with all the given information
    const { data, error } = await db.drones()
        .insert({
            owner_id: userID,
            name: name,
            size: size,
            available: true,
            in_use: false,
        })
}

export async function toggleDroneAvailability(droneID: number) {
    // changes the availability boolean for the drone with given droneID
    const { error } = await supabase.rpc('toggle_drone_availability', {quote_id:droneID})
}

export async function editDrone(id: number, drone: Drone) {
    // update the drone with given id, only need to pass information that's changed, but can pass all
    const { error } = await db.drones()
        .update(drone)
        .eq('id', id)
}

export async function removeDrone(id: number) {
    // remove drone with specified id from the database
    const { error } = await db.drones()
        .delete()
        .eq('id', id)
}

export async function getDrones(limit = 10, userID?: number | null): Promise<Drone[] | null> {
    /* 
        Returns a list of drone objects with all information about those drones
        The limit argument will determine how many drones to return, defaults to 10
        If userID is not given, it will return a slist of all drones,
        If userID is given, it will only return drones with that user as the owner
    */
    if (userID) {
        const { data, error } = await db.drones()
            .select()
            .eq('owner_id', userID)
            .limit(limit)
        console.log(data)
        return data
    } else {
        const { data, error } = await db.drones()
            .select()
            .limit(limit)
        console.log(data)
        return data
    }
}

export async function getDronesForDelivery(count: number): Promise<number[] | null> {
    /*
        This function will return a list of droneIDs that can carry a delivery of count number of cones
        If the function returns null, then there are not enough drones to carry the delivery, and it must be tried again or added to a queue
    */
    var droneIDs: number[] = []

    const { data, error } = await db.drones()
        .select(`
            id,
            size (
                id,
                count
            ),
            name,
            last_delivery
        `)
        .eq('available', true)
        .eq('in_use', false) 
        .order('size', {'ascending': false})
        .order('last_delivery', {'ascending': true});
    
    if (data === null) {
        return null
    }
    const drones: any[] = data
    const large = drones.filter(obj => {
        return obj.size.id == 2
    })
    const medium = drones.filter(obj => {
        return obj.size.id == 1
    })
    const small = drones.filter(obj => {
        return obj.size.id == 0
    })

    
    while (count > 0) {
        if (count > 4 && large.length > 0) {
            const currentDrone = large.pop()
            droneIDs.push(currentDrone.id)
            count -= 8
            continue
        }
        
        if (count > 1 && medium.length > 0) {
            const currentDrone = medium.pop()
            droneIDs.push(currentDrone.id)
            count -= 4
            continue
        }
        
        if (count > 0 && small.length > 0) {
            const currentDrone = small.pop()
            droneIDs.push(currentDrone.id)
            count -= 1
            continue
        }
        break
    }

    if (count > 0) {
        return null
    }

    return droneIDs
}

export async function availableDroneCount(): Promise<number | null> {
    // Returns the number of currently available drones
    const { count, error } = await db.drones()
        .select('*', { count: 'exact', head: true})
        .eq('available', true)
        .eq('in_use', false)

    return count
}



export async function getDroneDeliveries(queryType: string, ID: number): Promise<DroneDelivery[] | null> {
    /*
        Returns a list of drones deliveries, which include both the droneID and transactionID for some drone flight
        The first argument, queryType, determines whether to query based on a droneID or a transactionID
        Valid options for queryType are "drone" and "transaction", anything else will return null
        The second argument, ID, will be the of either the drone or transaction
    */
    
    if (queryType == "drone") {
        const { data, error } = await db.droneDelivery()
            .select()
            .eq('drone_id', ID)

        return data
    }
    else if (queryType == "transaction") {
        const { data, error } = await db.droneDelivery()
            .select()
            .eq('transaction_id', ID)

        return data
    } else {
        return null
    }
}

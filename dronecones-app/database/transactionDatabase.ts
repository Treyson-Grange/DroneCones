import { supabase } from '../components/lib/supabaseClient'
import { db } from './db'
import type { Transaction, OrderItem, DroneDelivery } from './databaseTypes'

type Order = {
    completed: any;
    final_price: any;
    id: any;
    item_count: any;
    order_time: any;
    sales_price: any;
    tax: any;
    user_id: any;
    orderItem: OrderItem[];
}


export async function addTransaction(transaction: Transaction, droneIDs: number[], items: OrderItem[]): Promise<number> {
    /*
        Adds a new row to transaction database with the data in transaciton object,
        Adds new rows to drone deliveries database for each droneID in droneIDs
        Adds new rows to soldItems database, for each item in the items list
    */
    const { data, error } = await db.transactions()
        .insert(transaction)
        .select()
    const transData = data?.at(0)

    droneIDs.forEach( (droneID) => {
        if (transData !== null) {
            addDroneDelivery(transData.id, droneID)
        }
    })

    items.forEach( (item) => {
        if (transData !== null) {
            addSoldItem(transData.id, item)
        }
    })

    return transData.id
}

export async function getTransactions(): Promise<Transaction[] | null> {
    const { data, error } = await db.transactions()
        .select()
    console.log(data)
    return data
}

export async function getUserOrderHistory(userID: string, limit: number = 3) {    
    const { data, error } = await db.transactions()
        .select(`
            id,
            user_id,
            sales_price,
            tax,
            final_price,
            completed,
            item_count,
            order_time,
            orderItem (
                id,
                cone,
                flavor1,
                flavor2,
                flavor3,
                topping,
                scoops
            )
        `)
        .eq('user_id',userID)
        .order('order_time')
        .limit(limit)

    return data

}

async function addSoldItem(transactionID: number, item: OrderItem) {
    // Adds one row to soldItems database with given information
    item['transaction_id'] = transactionID
    
    const { data, error } = await db.orderItem()
        .insert(item)
}

// async function getSoldItems() {

// }

async function addDroneDelivery(transactionID: number, droneID: number) {
    const { data, error } = await db.droneDelivery()
        .insert({
            transaction_id: transactionID,
            drone_id: droneID
        })

}




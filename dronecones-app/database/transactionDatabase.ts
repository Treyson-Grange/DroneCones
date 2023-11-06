import { supabase } from '../components/lib/supabaseClient'
import { db } from './db'
import type { Transaction, OrderItem, DroneDelivery, ItemInProgress } from './databaseTypes'

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


export async function addTransaction(transaction: Transaction, droneIDs: number[]): Promise<number> {
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

    addAllSoldItems(transaction['user_id'], transData.id)

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
export async function getTransaction(transactionID: string) {    
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
        .eq('id',transactionID)

    return data

}
export async function removeSalesPrice(transactionID: string) {
    const { data, error } = await db.transactions()
        .update({ sales_price: 0 })
        .eq('id', transactionID)
        
}

export async function addItemInProgress(item: ItemInProgress) {
    const { data, error } = await db.itemsInProgress()
        .insert(item)
    console.log(error)
}

export async function getItemInProgress(itemId: number): Promise<ItemInProgress | null> {
    const { data, error } = await db.itemsInProgress()
        .select()
        .eq('id', itemId)

    let item: ItemInProgress | null;
    if (data == null || data?.length == 0) {
        item = null;
    } else {
        item = data?.at(0)
    }
    
    return item
}

export async function removeItemInProgress(itemId: number) {
    const { error } = await db.itemsInProgress()
        .delete()
        .eq('id', itemId)
}

export async function getUsersItemsInProgress(userId: string) : Promise<ItemInProgress[] | null> {
    const { data, error } = await db.itemsInProgress()
        .select()
        .eq('user_id', userId)

    return data
}

export async function removeUsersItemsInProgress(userId: string) {
    const { error } = await db.itemsInProgress()
        .delete()
        .eq('user_id', userId)
}

async function addAllSoldItems(userId: string, transactionID: number) {
    const { data, error } = await db.itemsInProgress()
        .select()
        .eq('user_id', userId)
    console.log('items in progress')
    console.log(data)
    console.log(error)
    if (data == null) return
    data.forEach( (item) => {
        console.log(item)
        delete item.user_id
        delete item.id
        addSoldItem(transactionID, item)
    })

    removeUsersItemsInProgress(userId)
}

async function addSoldItem(transactionID: number, item: OrderItem) {
    // Adds one row to soldItems database with given information
    item['transaction_id'] = transactionID
    
    const { data, error } = await db.orderItem()
        .insert(item)
    console.log(error)
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



import { supabase } from '../components/lib/supabaseClient'
import { db } from './db'
import type { Transaction, OrderItem, DroneDelivery, ItemInProgress } from './databaseTypes'
import * as stockdb from './stockDatabase'

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
    transaction.completed = false
    transaction.final_price = Math.floor(transaction.final_price)
    transaction.tax = Math.floor(transaction.tax)
    const { data, error } = await db.transactions()
        .insert(transaction)
        .select()
    const transData = data?.at(0)
    console.log(error);
    console.log(transaction)
    console.log(data);

    droneIDs.forEach( (droneID) => {
        if (transData !== null) {
            addDroneDelivery(transData.id, droneID)
        }
    })

    addAllSoldItems(transaction['user_id'], transData.id)

    return transData.id
}

export async function getTransactions(): Promise<Transaction[] | null> {
    // returns all transactions in the database
    const { data, error } = await db.transactions()
        .select()
    return data
}

export async function getUserOrderHistory(userID: string, limit: number = 3) {  
    // returns all transactions tied to given UserID, including all items in the order. 
    // If limit is specified, it returns that many, otherwise returns three most recent
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
                scoops,
                price
            )
        `)
        .eq('user_id',userID)
        .order('order_time')
        .limit(limit)

    return data

}
export async function getTransaction(transactionID: number) {
    // returns transaction with given transactionID as a transaction object    
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
    // adds the specified item into the itemsInProgress table
    const { data, error } = await db.itemsInProgress()
        .insert(item)
        
}

export async function getItemInProgress(itemId: number): Promise<ItemInProgress | null> {
    // returns the itemInProgress with specified itemID from database
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
    // deletes the itemInProgress with specified itemID from the database
    const { error } = await db.itemsInProgress()
        .delete()
        .eq('id', itemId)
}

export async function getUsersItemsInProgress(userId: string) : Promise<ItemInProgress[] | null> {
    // returns a list of all itemsInProgress with the given userID
    const { data, error } = await db.itemsInProgress()
        .select()
        .eq('user_id', userId)

    return data
}

export async function removeUsersItemsInProgress(userId: string) {
    // deletes all itemInProgress rows with the given userID from the database
    const { error } = await db.itemsInProgress()
        .delete()
        .eq('user_id', userId)
}

async function addAllSoldItems(userId: string, transactionID: number) {
    // Retrieves all itemsInProgress for the given userID
    // For each one, it calls addSoldItem, passing in the given transaction id, and updates the stock of those items
    // calls removeUsersItemsInProgress to delete those items    
    const { data, error } = await db.itemsInProgress()
        .select()
        .eq('user_id', userId)
    if (data == null) return
    data.forEach( (item) => {
        delete item.user_id
        delete item.id
        addSoldItem(transactionID, item)
        updateStock(item)
    })

    removeUsersItemsInProgress(userId)
}

async function updateStock(item: OrderItem) {
    // Goes through each part of the OrderItem and reduces the amount of each by 1
    if (typeof item.cone === 'number') {
        stockdb.useOneCone(item.cone)
    }
    if (typeof item.flavor1 === 'number') {
        stockdb.useOneIcecreamFlavor(item.flavor1)
    }
    if (typeof item.flavor2 === 'number') {
        stockdb.useOneIcecreamFlavor(item.flavor2)
    }
    if (typeof item.flavor3 === 'number') {
        stockdb.useOneIcecreamFlavor(item.flavor3)
    }
    if (typeof item.topping === 'number') {
        stockdb.useOneTopping(item.topping)
    }
}

async function addSoldItem(transactionID: number, item: OrderItem) {
    // Adds one row to soldItems database with given information
    item['transaction_id'] = transactionID
    
    const { data, error } = await db.orderItem()
        .insert(item)
}

async function addDroneDelivery(transactionID: number, droneID: number) {
    // adds a new row in DroneDelivery database with given information
    const { data, error } = await db.droneDelivery()
        .insert({
            transaction_id: transactionID,
            drone_id: droneID
        })

}


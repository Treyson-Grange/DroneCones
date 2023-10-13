import { supabase } from '../components/lib/supabaseClient'
import { db } from './db'
import type { Transaction, OrderItem, DroneDelivery } from './databaseTypes'


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

export async function getTransactions() {

}

export async function getUserOrderHistory() {

}

async function addSoldItem(transactionID: number, item: OrderItem) {
    // Adds one row to soldItems database with given information
    // item['transactionID'] = transactionID
    
    const { data, error } = await db.orderItem()
        .insert(item)
}

async function getSoldItems() {

}

async function addDroneDelivery(transactionID: number, droneID: number) {
    const { data, error } = await db.droneDelivery()
        .insert({
            transactionID: transactionID,
            droneID: droneID
        })
}




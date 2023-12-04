import { supabase } from '../components/lib/supabaseClient'
import { db } from './db'
import type { User, UserType, Address, UserUpdate } from './databaseTypes'




// export async function addUser(userID: number, userType: number, username: string, firstName: string, lastName: string, email: string) {
//     // adds a new row to user database
//     const { data, error } = await db.users()
//         .insert({
//             id: userID,
//             usertype: userType, 
//             username: username, 
//             firstname: firstName, 
//             lastname: lastName, 
//             email: email,
//             banned: false
//         })
// }

export async function getUser(userID: string):  Promise<User | null> {
    // returns the row with given UserID as a user object
    const { data, error } = await db.users()
        .select()
        .eq('id', userID);

    let user: User | null;
    if (data == null || data?.length == 0) {
        user = null;
    } else {
        user = data?.at(0)
    }

    return user
}

export async function updateUser(userID: string, userUpdate: UserUpdate) {
    // updates the row of user database with given UserID, changing the columns of any arguments that are given
    const { error } = await db.users()
        .update(userUpdate)
        .eq('id', userID)
}

export async function toggleUserBan(userID: string) {
    // toggles the banned column of the user with UserID
    const { error } = await supabase.rpc('toggle_user_ban', {quote_id: userID})
}

export async function getUsers(userType?: number): Promise<User[] | null> {
    // returns a list of all user in database as user objects. If a UserType is specified, it only returns those types of users
    if (userType) {
        const { data, error } = await db.users()
            .select()
            .eq('userType', userType)
        return data
    } else {
        const { data, error } = await db.users()
            .select()
        return data
    }
    
}

export async function addAddress(userID: string, country: string, city: string, state: string, zipCode: string, streetAddress: string, aptNum?: string) {
    // Adds a row into address database with given information
    const { data, error } = await db.addresses()
        .insert({
            user_id: userID,
            country: country, 
            city: city, 
            state: state, 
            zipcode: zipCode, 
            street_address: streetAddress,
            apt_num: aptNum
        })
}

export async function getUsersAddress(userID: string): Promise<Address | null> {
    /*  returns the rows from address database with the given userID
        currently only returns the first address if there are multiple,
        possible future change to implement storing multiple addresses per user */
    const { data, error } = await db.addresses()
        .select()
        .eq('userID', userID);

    let address: Address | null;
    if (data == null || data?.length == 0) {
        address = null;
    } else {
        address = data?.at(0)
    }

    return address
}
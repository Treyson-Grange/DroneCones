import { supabase } from '../components/lib/supabaseClient'
import { db } from './db'
import type { User, UserType, Address, UserUpdate } from './databaseTypes'




export async function addUser(userID: number, userType: number, username: string, firstName: string, lastName: string, email: string) {
    // adds a new row to user database
    const { data, error } = await db.users()
        .insert({
            userID: userID,
            userType: userType, 
            username: username, 
            firstName: firstName, 
            lastName: lastName, 
            email: email
        })
}

export async function getUser(userID: number):  Promise<User | null> {
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
    console.log(user)

    return user
}

export async function updateUser(userID: number, userType?: number, username?: string, firstName?: string, lastName?: string, email?: string) {
    // updates the row of user database with given UserID, changing the columns of any arguments that are given
    
    let toUpdate: UserUpdate = {}
    if (userType) toUpdate['userType'] = userType
    if (username) toUpdate['username'] = username
    if (firstName) toUpdate['firstName'] = firstName
    if (lastName) toUpdate['lastName'] = lastName
    if (email) toUpdate['email'] = email


    const { data, error } = await db.users()
        .update(toUpdate)
        .eq('id', userID)
}

export async function toggleUserBan(userID: number) {
    // toggles the banned column of the user with UserID
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

export async function addAddress(userID: number, country: string, city: string, state: string, zipCode: string, streetAddress: string) {
    // Adds a row into address database with given information
}

export async function getUsersAddress(userID: number) {
    // returns the rows from address database with the given userID
}
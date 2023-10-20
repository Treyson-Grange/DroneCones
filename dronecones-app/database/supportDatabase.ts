import { supabase } from '../components/lib/supabaseClient'
import { db } from './db'
import type { SupportForm } from './databaseTypes'

export async function addForm(userID: string, formField: string) {
    // Add a form to the supportForms database with the given information

    const { data, error } = await db.supportForms()
        .insert({
            'user_id': userID,
            'form_field': formField,
            'resolved': false
        })
}

export async function getForms(limit: number = 25, includeResolved: Boolean = true ): Promise<SupportForm[] | null> {
    /*
        Return a list of forms, from the database
        The limit argument determines the max number of forms to return
        includeResolved argument will determine if forms that have been resolved are returned or not
    */
    const resolved = includeResolved ? '(TRUE, FALSE)' : '(FALSE)'
    const { data, error } = await db.supportForms()
        .select()
        .filter('resolved', 'in', resolved)
        .order('created_at', {'ascending': false})
        .limit(limit)

    return data
}

export async function toggleFormResolved(formID: number) {
    const { error } = await supabase.rpc('toggle_form_resolved', {quote_id:formID}) 
}
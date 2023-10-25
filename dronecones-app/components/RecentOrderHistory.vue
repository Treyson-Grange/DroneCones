<script>
    import { getUserOrderHistory } from '../database/transactionDatabase'
    import { supabase } from './lib/supabaseClient'

    export default {
        data() {
            return {
                pastOrders: [],
            };
        },
        async created() {
            try {
                const { data, error } = 
                    getUserOrderHistory(userId = supabase.auth.user().id, limit = 3);
                if (error) {
                    console.error('Error fetching transactions:', error);
                } else {
                    this.pastOrders = data;
                }
            } catch (error) {
                console.error('An error occurred:', error);
            }
        },

    };
</script>

<template>
    <div>
        <h2>Ice Cream Order History</h2>
        <ul>
            <li v-for="order in pastOrders">
                <div>
                    <!-- Display the past order details -->
                    {{ order.cone }}
                </div>
                <button @click="reorderOrder(order)">Reorder</button>
            </li>
        </ul>
    </div>
</template>

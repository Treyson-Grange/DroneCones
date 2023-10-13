<script>
    import { supabase } from '../components/lib/supabaseClient'

    export default {
        data() {
            return {
                pastOrders: [],
            };
        },
        async created() {
            try {
                const { data, error } = await supabase
                    .from('transactions')
                    .select()
                    .eq('userID', supabase.auth.user().id)
                    .order('orderTime', { ascending: false })
                    .limit(3);

                if (error) {
                    console.error('Error fetching transactions:', error);
                } else {
                    this.pastOrders = data;
                }
            } catch (error) {
                console.error('An error occurred:', error);
            }
        },
        methods: {
            reorderOrder(order) {
                // Implement logic to create a new order with the items from the selected past order.
                // You can display a confirmation or navigate to the order page.
            },
        },
    };
</script>

<template>
    <div>
        <h2>Ice Cream Order History</h2>
        <ul>
            <li v-for="order in pastOrders" :key="order.id">
                <div>
                    <!-- Display the past order details -->
                    <p>Order Time: {{ order.orderTime }}</p>
                    <p v-for="item in order.items">
                        {{ item.quantity }} x {{ item.name }}
                    </p>
                </div>
                <button @click="reorderOrder(order)">Reorder</button>
            </li>
        </ul>
    </div>
</template>

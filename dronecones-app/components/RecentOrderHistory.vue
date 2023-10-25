<script>
    import { getUserOrderHistory } from '../database/transactionDatabase'
    export default {
        data() {
            return {
                pastOrders: [],
            };
        },
        async created() {
            try {
                const { data, error } = 
                    getUserOrderHistory(localStorage.getItem('userID'), 3);
                if (error) {
                    console.error('Error fetching transactions:', error);
                } else {
                    this.pastOrders = data;
                    console.log(data);
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
                {{ order.final_price }}
            </li>
        </ul>
    </div>
</template>

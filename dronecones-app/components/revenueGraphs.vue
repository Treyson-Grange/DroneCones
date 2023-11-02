<script>
    import { getRevenueHistory } from '../database/transactionDatabase'
    export default {
        data() {
            return {
                pastOrders: [],
            };
        },
        async created() {
            try {
                const data = await getRevenueHistory();
                this.pastOrders = data;
            } catch (error) {
                console.error('An error occurred:', error);
            }
        },
    };
</script>

<template>
    <div>
        <h2>Revenue</h2>
        <ul>
            <li v-for="order in pastOrders" :key="order.id">
                This part will display the information for past order number {{ order }} I can click to reorder.
            </li>
        </ul>
    </div>
</template>

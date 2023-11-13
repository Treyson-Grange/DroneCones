<template>
    <div>
        <table class="table">
            <thead>
                <tr class="header">
                    <th>Date</th>
                    <th>Name</th>
                    <th>Amount</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(order, index) in pastOrders" :key="order.id">
                    <td>{{ this.formatDate(order.created_at) }}</td>
                    <td>{{ this.getName(order) }}</td>
                    <td>{{ order.amount }}</td>
                    <td>{{ order.status }}</td>
                </tr>
            </tbody>
        </table>
    </div>

</template>

<script>
import * as stockdb from './../database/stockDatabase'
export default {
    data() {
        return {
            pastOrders: [],
        };
    },
    created() {
        stockdb.getRestockHistory()
            .then(pastOrders => {
                this.pastOrders = pastOrders
            })
    },
    methods: {
        formatDate(date) {
            const day = date.slice(8,10)
            const month = date.slice(5,7)
            const year = date.slice(2,4)
            return `${month}/${day}/${year}`
        },
        getName(order) {
            if (order.type == 'cone') {
                return order.cone.name
            } else if (order.type == 'flavor') {
                return order.flavor.name
            } else if (order.type == 'topping') {
                return order.topping.name
            }
            return 'Error'
        },
    }
}

</script>

<style>

.table {
  border: 1px solid #ccc;
  border-collapse: collapse;
  width: 700px;
  left:0;
}

.header {
  background-color: #333;
  color: #fff;
}

tr {
  border-bottom: 1px solid #ccc;
  background-color: var(--secondary-color);
}

td, th {
  padding: 10px;
  text-align: center;
  color: white;
}

td {
  padding: 15px;
}
</style>
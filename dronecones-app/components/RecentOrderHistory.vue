<script>
    import { getUserOrderHistory } from '../database/transactionDatabase'
    import { getCones, getIcecreamFlavors, getToppings } from '~/database/stockDatabase'
    import * as transDb from '../database/transactionDatabase'
    import { ref } from 'vue'
    export default {
        data() {
            return {
                pastOrders: [],
                flavors: [],
                cones: [],
                toppings: [],
                scoops: [],
                userID: 0,
            };
        },
        
        async created() {
            try {
                this.userID = localStorage.getItem("userID");
                const data = await getUserOrderHistory(localStorage.getItem('userID'), 3);
                this.pastOrders = data;
                
                await getIcecreamFlavors().then(data => {
                    for (let flavor of data) {
                    this.flavors[flavor.id] = flavor.name;
                    }
                })
                await getToppings().then(data => {
                    for (let topping of data) {
                    this.toppings[topping.id] = topping.name
                    }
                })
                await getCones().then(data => {
                    for (let cone of data) {
                    this.cones[cone.id] = cone.name
                    }
                });
            } catch (error) {
                console.error('An error occurred:', error);
            }
        },

    };

</script>

<template>
    <div>
        <h2 style="text-align: center">Ice Cream Order History</h2>
        <ul style="text-align: center">
            <li v-for="order in pastOrders" :key="order.id">
                <h3 style="text-align: center">Cone: </h3>
                {{ this.cones[order.orderItem[0].cone] }}
                <h3 style="text-align: center">Flavors (per scoop): </h3>
                {{ this.flavors[order.orderItem[0].flavor1] }}
                {{ this.flavors[order.orderItem[0].flavor2] }}
                {{ this.flavors[order.orderItem[0].flavor3] }}
                <h3 style="text-align: center">Topping: </h3>
                {{ this.toppings[order.orderItem[0].topping] }}
                <p v-if="this.toppings[order.orderItem[0].topping] == null">
                    None
                </p>
                <h3 style="text-align: center">Price: </h3>
                {{ order.orderItem[0].price }}
                <p></p>
                <button class="order-button" :disabled="order.orderItem[0].flavor1 == null || order.orderItem[0].cone == null" @click="transDb.addItemInProgress({ cone:order.orderItem[0].cone, flavor1:order.orderItem[0].flavor1, flavor2:order.orderItem[0].flavor2, flavor3:order.orderItem[0].flavor3, price:order.orderItem[0].price, scoops:order.orderItem[0].scoops, topping:order.orderItem[0].topping, user_id:this.userID})">Add to Cart</button>
            </li>
        </ul>
    </div>
</template>

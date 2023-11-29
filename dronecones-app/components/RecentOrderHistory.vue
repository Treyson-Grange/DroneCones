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

    methods: {
    async addItemInProgress(item) {
        await transDb.addItemInProgress(item);
    },
},

};
</script>

<template>
    <div>
        <h2 style="text-align: center">Ice Cream Order History</h2>
        <div style="text-align: center">
            <div style="display: inline-block" v-for="order in pastOrders" :key="order.id">
                <div class="order-history-item">
                    <div class="history-container">
                        <p v-if="order.orderItem[0].cone != null">{{ this.cones[order.orderItem[0].cone] }}</p>
                        <p v-if="order.orderItem[0].flavor1 != null">Scoop 1: {{ this.flavors[order.orderItem[0].flavor1] }}</p>   
                        <p v-if="order.orderItem[0].flavor2 != null">Scoop 2: {{ this.flavors[order.orderItem[0].flavor2] }}</p>
                        <p v-if="order.orderItem[0].flavor3 != null">Scoop 3: {{ this.flavors[order.orderItem[0].flavor3] }}</p>
                        <p v-if="order.orderItem[0].topping != null">Topping: {{ this.toppings[order.orderItem[0].topping] }}</p>
                        <p v-if="order.orderItem[0].price != null">Price: {{ order.orderItem[0].price }}</p>
                    </div>
                    <button class="order-button" :disabled="order.orderItem[0].flavor1 == null || order.orderItem[0].cone == null" @click="addItemInProgress({ cone:order.orderItem[0].cone, flavor1:order.orderItem[0].flavor1, flavor2:order.orderItem[0].flavor2, flavor3:order.orderItem[0].flavor3, price:order.orderItem[0].price, scoops:order.orderItem[0].scoops, topping:order.orderItem[0].topping, user_id:this.userID});">Add to Cart</button>
                </div>
            </div>
        </div>
    </div>
</template>

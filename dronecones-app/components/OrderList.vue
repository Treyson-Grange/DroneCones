<script setup>
import { ref, onMounted } from 'vue'
import { supabase } from './lib/supabaseClient'
import * as stockDb from '../database/stockDatabase'
import * as db from '../database/db'
import * as droneDb from '../database/droneDatabase'
import * as transDb from '../database/transactionDatabase'

const Flavors = ref([]);
const Toppings = ref([]);
const Cones = ref([]);


async function getFlavors() {
    const { data } = await supabase.from('icecreamFlavors').select()
    Flavors.value = data
}
async function getToppings() {
    const { data } = await supabase.from('toppings').select()
    Toppings.value = data
}
async function getCones() {
    const { data } = await supabase.from('cones').select()
    Cones.value = data
}


onMounted(() => {
    getFlavors();
    getToppings();
    getCones();
    user_id.value = localStorage.getItem('userID')
    
})


const user_id = ref(null);
const cone = ref(null);
const flavor1 = ref(null);
const flavor2 = ref(null);
const flavor3 = ref(null);
const topping = ref(null);
const scoops = ref(0);
const price = ref(0);
const amountScoops = ref(0);

async function getPrice(){
    price.value = 0
    if (flavor1.value != null){
        price.value += flavor1.value.price_per_scoop
    }
    if (flavor2.value != null){
        price.value += flavor2.value.price_per_scoop
    }
    if (flavor3.value != null){
        price.value += flavor3.value.price_per_scoop
    }
    if (cone.value != null){
        price.value += cone.value.price
    }
    if (topping.value != null){
        price.value += topping.value.price
    } 
}

async function getScoop(){
    scoops.value = 0
    if (flavor1.value != null){
        scoops.value += 1
    }
    if (flavor2.value != null){
        scoops.value += 1
    }
    if (flavor3.value != null){
        scoops.value += 1
    } 
}


</script>

<template>
    <div>
        
        <h1 style="text-align: center">Drone Cone Order Menu</h1>
        
        <h2 style="text-align: center">Ice Cream Flavors</h2>
            <div style="text-align: center">
                <div v-for="(item, index) in Flavors" :key="index" style="display: inline-block">
                    <img :src="item.image" width="200" style="margin: 10px">
                    <p>{{ item.name }}</p>
                </div>
            </div>
        <div style="text-align: center">    
            <div style="display: inline-block; margin: 50px; vertical-align: top">
                <h3>First Flavor</h3>
                <p v-if="flavor1 != null">First Flavor is {{ flavor1.name }}</p>
                <div v-for="(item, index) in Flavors" :key="index">
                    <p>{{ item.name }} ${{ item.price_per_scoop }}</p>
                    <button class="order-button" :disabled="item.available !== true" @click="flavor1=item">Add to Order</button>
                </div>
            </div>
            
            <div style="display: inline-block; margin: 50px; vertical-align: top">
                <h3>Second Flavor</h3>
                <p v-if="flavor2 != null">Second Flavor is {{ flavor2.name }}</p>
                <div v-for="(item, index) in Flavors" :key="index">
                    <p>{{ item.name }} ${{ item.price_per_scoop }}</p>
                    <button class="order-button" :disabled="flavor1==null || item.available !== true" @click="flavor2=item">Add to Order</button>
                </div>
                <button class="order-button" :disabled="flavor1==null" style=" margin-top: 60px" @click="flavor2=null;flavor3=null">No Second Scoop</button>
            </div>

            <div style="display: inline-block; margin: 50px; vertical-align: top">
                <h3>Third Flavor</h3>
                <p v-if="flavor3 != null">Third Flavor is {{ flavor3.name }}</p>
                <div v-for="(item, index) in Flavors" :key="index">
                    <p>{{ item.name }} ${{ item.price_per_scoop }}</p>
                    <button class="order-button" :disabled="flavor1==null || flavor2==null || item.available !== true" @click="flavor3=item">Add to Order</button>
                </div>
                <button class="order-button" :disabled="flavor1==null || flavor2==null" style=" margin-top: 60px" @click="flavor3=null">No Third Scoop</button>
            </div>
        </div>
        

        <h2 style="text-align: center">Cones</h2>
        <div style="text-align: center">
            <div v-for="(item, index) in Cones" :key="index" style="display: inline-block">
                <img :src="item.image" width="200" height="200" style="margin: 10px">
                <p>{{ item.name }}</p>
            </div>
        </div>

        <div style="text-align: center">
            <p v-if="cone != null">Cone is {{ cone.name }}</p>
            <div v-for="(item, index) in Cones" :key="index">
                <p>{{ item.name }} ${{ item.price}}</p>
                <button class="order-button" :disabled="item.available !== true" @click="cone=item">Add to Order</button>
            </div>
        </div>


        <h2 style="text-align: center">Toppings</h2>
        <div style="text-align: center">
            <div v-for="(item, index) in Toppings" :key="index" style="display: inline-block">
                <img :src="item.image" width="200" style="margin: 10px">
                <p>{{ item.name }}</p>
            </div>
        </div>
        <div style="text-align: center">
            <p v-if="topping != null">Topping is {{ topping.name }}</p>
            <div v-for="item in Toppings">
                <p>{{ item.name}} ${{ item.price }}</p>
                <button  class="order-button" :disabled="item.available !== true" @click="topping=item">Add to Order</button>
            </div>
        </div>
        

        <div style="text-align: center; margin-top: 50px; margin-bottom: 100px">
            <button class="order-button" :disabled="flavor1 == null || cone == null" @click="getPrice(); getScoop(); transDb.addItemInProgress({ cone:cone.id, flavor1:flavor1.id, flavor2:flavor2.id, flavor3:flavor3.id, price:price, scoops:scoops, topping:topping.id, user_id:user_id})">Add to Cart</button>
            <a href="order">
                <button class="order-button">Create New Order</button>
            </a>
            <a href="cart">
                <button class="order-button">Your Cart</button>
            </a>
        </div>
    </div>
</template>
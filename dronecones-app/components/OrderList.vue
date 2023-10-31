<script setup>
import { ref, onMounted } from 'vue'
import { supabase } from './lib/supabaseClient'
import * as stockDb from '../database/stockDatabase'
import * as db from '../database/db'
import * as droneDb from '../database/droneDatabase'
import * as transDb from '../database/transactionDatabase'

// import type {IcecreamFlavor, Cone, Topping} from "@/types"
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
    
    
})

const coneChoice = ref(null);
const flavor1 = ref(null);
const flavor2 = ref(null);
const flavor3 = ref(null);
const topping = ref(null);
const scoops = ref(0);
const price = ref(0);


const amountScoops = [1,2,3];
const selectedScoops = ref({});

</script>

<template>
    <div>
        
        <h1 style="text-align: center">Drone Cone Order Menu</h1>
        <h2 style="text-align: center">Ice Cream Flavors</h2>
        <div style="text-align: center">
            
            
            <div style="display: inline-block; margin: 50px; vertical-align: top">
                <h3>First Flavor</h3>
                <p v-if="flavor1 != null">First Flavor is {{ flavor1.name }}</p>
                <div v-for="(item, index) in Flavors" :key="index">
                    <p>{{ item.name }} ${{ item.price_per_scoop }}</p>
                    <button class="order-button" @click="flavor1=item">Add to Order</button>
                </div>
            </div>
            
            <div style="display: inline-block; margin: 50px; vertical-align: top">
                <h3>Second Flavor</h3>
                <p v-if="flavor2 != null">Second Flavor is {{ flavor2.name }}</p>
                <div v-for="(item, index) in Flavors" :key="index">
                    <p>{{ item.name }} ${{ item.price_per_scoop }}</p>
                    <button class="order-button" :disabled="flavor1==null" @click="flavor2=item">Add to Order</button>
                </div>
                <button class="order-button" :disabled="flavor1==null" style=" margin-top: 60px" @click="flavor2=null;flavor3=null">No Second Scoop</button>
            </div>

            <div style="display: inline-block; margin: 50px; vertical-align: top">
                <h3>Third Flavor</h3>
                <p v-if="flavor3 != null">Third Flavor is {{ flavor3.name }}</p>
                <div v-for="(item, index) in Flavors" :key="index">
                    <p>{{ item.name }} ${{ item.price_per_scoop }}</p>
                    <button class="order-button" :disabled="flavor1==null || flavor2==null" @click="flavor3=item">Add to Order</button>
                </div>
                <button class="order-button" :disabled="flavor1==null || flavor2==null" style=" margin-top: 60px" @click="flavor3=null">No Third Scoop</button>
            </div>
        </div>
        

        <h2 style="text-align: center">Cones</h2>
        <div style="text-align: center">
            <p v-if="coneChoice != null">Cone is {{ coneChoice.name }}</p>
            <div v-for="(item, index) in Cones" :key="index">
                <p>{{ item.name }} ${{ item.price}}</p>
                <button class="order-button" @click="coneChoice=item">Add to Order</button>
            </div>
        </div>


        <h2 style="text-align: center">Toppings</h2>
        <div style="text-align: center">
            <p v-if="topping != null">Topping is {{ topping.name }}</p>
            <div v-for="item in Toppings">
                <p>{{ item.name}} ${{ item.price }}</p>
                <button  class="order-button" @click="topping=item">Add to Order</button>
            </div>
        </div>

        <div style="text-align: center; margin-top: 50px; margin-bottom: 100px">
            <button class="order-button">Save Order</button>
            <button class="order-button">Add to Cart</button>
            <a href="order">
                <button class="order-button">Create New Order</button>
            </a>
            <button class="order-button">Your Cart</button>
        </div>
    </div>
</template>
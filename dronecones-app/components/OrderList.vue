<script setup>
import { ref, onMounted } from 'vue'
import { supabase } from './lib/supabaseClient'
import * as stockDb from '../database/stockDatabase'
import * as db from '../database/db'

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
// Figure out num scoops
const numScoopsEach = ref([])



</script>

<template>
    <div>
        
        <h1>Drone Cone Order Menu</h1>
        <h2>Ice Cream Flavors</h2>
        <div>
            
            <!-- <p>{{ Flavors.length }}</p> -->
            
            <div v-for="item in Flavors">
                <p>{{ item.name }} ${{ item.price_per_scoop }}</p>

                <button @click="">-</button>
                <p></p>
                <button @click="">+</button>
            
            </div>
        </div>
        

        <h2>Cones</h2>
        <div>
            <div v-for="item in Cones">
                <p>{{ item.name}} ${{ item.price}}</p>
                <!-- <p>{{ item.buyingAmount }}</p> -->
                <!-- <button @click="item.buyingAmount++"></button>
                <button @click="item.buyingAmount--"></button> -->

            </div>
        </div>


        <h2>Toppings</h2>
        <div>
            <div v-for="item in Toppings">
                <p>{{ item.name}} ${{ item.price }}</p>
                <!-- <p>{{ item.buyingAmount }}</p>
                <button @click="item.buyingAmount++"></button>
                <button @click="item.buyingAmount--"></button> -->

            </div>
        </div>
        <button>Submit Order</button>

    </div>
</template>
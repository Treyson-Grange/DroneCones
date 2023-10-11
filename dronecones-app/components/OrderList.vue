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
    // let flavors;
    // stockDb;
    // db;
    // stockDb.getIcecreamFlavors().then( (value) => flavors = value)
    // flavors = stockDb.getIcecreamFlavors().
    // return flavors
    
})


// defineProps<{
//     icecreamItems: IcecreamFlavor[];
//     cones: Cone[];
//     toppings: Topping[];
// }>();

</script>

<template>
    <div>
        
        <h1>Drone Cone Order Menu</h1>
        <h2>Ice Cream Flavors</h2>
        <div>
            
            <div v-for="item in Flavors">
                <p>{{ item.name }} ${{ item.pricePerScoop }}</p>
                <!-- <p>{{ item }} ${{ item }}</p>
                <p>{{  }}</p>
                <button @click="item.buyingAmount++"></button>
                <button @click="item.buyingAmount--"></button> -->
            
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

    </div>
</template>
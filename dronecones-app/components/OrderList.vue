<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { supabase } from './lib/supabaseClient'

import type {IcecreamFlavor, Cone, Topping} from "@/types"
const countIceCream = ref(0);
const countToppings = ref(0);
const countCones = ref(0);
defineProps<{
    icecreamItems: IcecreamFlavor[];
    cones: Cone[];
    toppings: Topping[];
}>();

</script>

<template>
    <div>
        
        <h1>Drone Cone Order Menu</h1>
        <h2>Ice Cream Flavors</h2>
        <div>
            <div v-for="item in icecreamItems">
                <p>{{ item.flavor}} ${{ item.pricePerScoop }}</p>
                <p>{{ item.buyingAmount }}</p>
                <button @click="item.buyingAmount++"></button>
                <button @click="item.buyingAmount--"></button>
            
            </div>
        </div>
        

        <h2>Cones</h2>
        <div>
            <div v-for="item in cones">
                <p>{{ item.cone}} ${{ item.price}}</p>
                <p>{{ item.buyingAmount }}</p>
                <button @click="item.buyingAmount++"></button>
                <button @click="item.buyingAmount--"></button>

            </div>
        </div>


        <h2>Toppings</h2>
        <div>
            <div v-for="item in toppings">
                <p>{{ item.topping}} ${{ item.price }}</p>
                <p>{{ item.buyingAmount }}</p>
                <button @click="item.buyingAmount++"></button>
                <button @click="item.buyingAmount--"></button>

            </div>
        </div>

    </div>
</template>
<script setup lang="ts">
// Use JSON files for content that will not be changed
// use database for content that will change

import type {IcecreamFlavor, Cone, Topping} from "@/types"
defineProps<{
    icecreamItems: IcecreamFlavor[];
    cones: Cone[];
    toppings: Topping[];
}>();
</script>

<template>
    <div>
        
        <h1>Drone Cones Menu</h1>
        <h2>Ice Cream Flavors</h2>
        <p v-for="item in icecreamItems"> 
            {{ item.flavor}} ${{ item.pricePerScoop }}
        </p>
        <h2>Cones</h2>
        <p v-for="item in cones"> 
            {{ item.cone}} ${{ item.price}}
        </p>
        <h2>Toppings</h2>
        <p v-for="item in toppings"> 
            {{ item.topping}} ${{ item.price }}
        </p>
    </div>
</template>
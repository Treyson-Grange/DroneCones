<script setup lang="ts">
import data from '../content/home.json'
</script>

<template>
    <SiteHeader />
    <MenuList
        :icecream-items="data.icecreamFlavors"
        :cones="data.Cones"
        :toppings="data.Toppings"
    />
</template>
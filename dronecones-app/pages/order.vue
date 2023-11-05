<script setup lang="ts">
    import data from '../content/home.json'
</script>



<template>
    <Navbar>
        <a href="/order">Order</a>
        <a href="/cart">Cart</a>
        <a href="/support">Support</a>
    </Navbar>
    <RecentOrderHistory />
    <OrderList
        :icecream-items="data.icecreamFlavors"
        :cones="data.Cones"
        :toppings="data.Toppings"
        
    />
</template>


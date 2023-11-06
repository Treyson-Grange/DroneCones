<script setup lang="ts">
    import data from '../content/home.json'
</script>



<template>
    <Navbar>
        <a href="/order">Order</a>
        <a href="/cart">Cart</a>
        <a>Support</a>
    </Navbar>
    <RecentOrderHistory />
    <OrderList/>
</template>


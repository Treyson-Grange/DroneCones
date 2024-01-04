<script setup lang="ts">
    import data from '../content/home.json'
</script>



<template>
    <Navbar>
        <a href="/order">
          <img src = "./../assets/ice-cream.png" class = "invert" width = "16">
          <span style = "padding-left: 8px;">Order</span>
        </a>
        <a href="/cart">
          <img src = "./../assets/cart.png" class = "invert" width = "16">
          <span style = "padding-left: 8px;">Cart</span>
        </a>
        <a href="/support">
          <img src = "./../assets/help.png" class = "invert" width = "16">
          <span style = "padding-left: 8px">Support</span>
        </a>
    </Navbar>
    <RecentOrderHistory />
    <droneQueue />
    <OrderList/>
</template>


<script setup lang="ts">
    import data from '../content/home.json'
</script>



<template>
    <Navbar>
        <a href="managerHome">Inventory</a>
        <a href="managerAccountInfo">Account Information</a>
        <a href="managerSupport">Support</a>
    </Navbar>
    <InventoryComp style="padding-top: 100px;" />
</template>


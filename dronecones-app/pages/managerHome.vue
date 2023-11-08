<script lang="ts">
    import data from '../content/home.json'
    export default {
    data() {
        return {
            usertype: localStorage.getItem('usertype'),
        }
    }
}
</script>



<template>
    <div v-if="usertype == '3'">
        <Navbar>
            <a href="managerHome">Inventory</a>
            <a href="managerAccountInfo">Account Information</a>
            <a href="managerSupport">Support</a>
        </Navbar>
        <InventoryComp style="padding-top: 100px;" />
    </div>
    <div v-else>
        <Forbidden/>
    </div>
</template>


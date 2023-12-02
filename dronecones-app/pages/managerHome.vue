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
            <a href="managerHome">
                <img src = "./../assets/inventory.png" class = "invert" width = "16">
                <span>Inventory</span>
            </a>
            <a href="managerSupport">
                <img src = "./../assets/help.png" class = "invert" width = "16">
                <span style = "padding-left: 8px">Support</span>
            </a>
            <a href="managerAccountInfo">
                <img src = "./../assets/user.png" class = "invert" width = "16">
                <span style = "padding-left: 8px;">Account</span>
            </a>
        </Navbar>
        <InventoryComp style="padding-top: 100px;" />
    </div>
    <div v-else>
        <Forbidden/>
    </div>
</template>


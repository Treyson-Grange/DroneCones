<script setup>
    import {getUser} from '../database/userDatabase'
</script>


<template>
    
    <Navbar v-if="this.usertype == '2'">
        <a href = "/droneHome">Drones</a>
        <a href="/support">Support</a>
        <a href = "/droneOwnerAccountInfo">Account</a>
    </Navbar>
    <Navbar v-else-if="this.usertype = '1'">
        <a href="/order">Order</a>
        <a href="/cart">Cart</a>
        <a href="/support">Support</a>
    </Navbar>
    <Support/>
</template>


<script>
export default {
  data() {
    return {
      usertype: localStorage.getItem('usertype')
    };
  },
};
</script>
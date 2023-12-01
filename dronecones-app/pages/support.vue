<script setup>
    import {getUser} from '../database/userDatabase'
</script>


<template>
    
    <Navbar v-if="this.usertype == '2'">
      <a href="/droneHome">
          <img src = "./../assets/drone.png" class = "invert" width = "16">
          <span style = "padding-left: 8px">Drones</span>
      </a>
      <a href="/support">
          <img src = "./../assets/help.png" class = "invert" width = "16">
          <span style = "padding-left: 8px">Support</span>
      </a>
      <a href="/droneOwnerAccountInfo">
          <img src = "./../assets/user.png" class = "invert" width = "16">
          <span style = "padding-left: 8px;">Account</span>
      </a>
    </Navbar>
    <Navbar v-else-if="this.usertype = '1'">
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
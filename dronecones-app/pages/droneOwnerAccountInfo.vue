<script setup>
    import {getUser} from '../database/userDatabase'
</script>

<style>@import url('/assets/style.css');</style>
<style>@import url('/assets/navbar.css');</style>

<template>
    
    <Navbar v-if="this.user.id = 2">
        <a href = "/droneHome">Drones</a>
        <a href="/support">Support</a>
        <a href="/droneOwnerAccountInfo">Account</a>
    </Navbar>
    <Navbar v-else-if="this.user.id = 1">
        <a href="/order">Order</a>
        <a href="/cart">Cart</a>
        <a href="/support">Support</a>
    </Navbar>
    <DroneOwnerRevenue />
</template>

<script>
export default {
  data() {
    return {
      user: []
    };
  },
  async mounted() {
    try {
      this.user = await getUser(localStorage.getItem('userID'));
      console.log('User:', this.user);
    } catch (error) {
      console.error('Error fetching user:', error);
    }
  }
};
</script>
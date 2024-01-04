<script setup>
    import {getUser} from '../database/userDatabase'
</script>

<style>@import url('/assets/style.css');</style>
<style>@import url('/assets/navbar.css');</style>

<template>
    
    <Navbar v-if="this.user.id = 2">
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
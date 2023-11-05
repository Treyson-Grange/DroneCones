<script setup>
    import {getUser} from '../database/userDatabase'
</script>


<template>
    
    <Navbar v-if="this.user.id = 2">
        <a href = "/droneHome">Drones</a>
        <a href="/support">Support</a>
    </Navbar>
    <Navbar v-else-if="this.user.id = 1">
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
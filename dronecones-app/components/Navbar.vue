<template>
    <div class = "navbar-under"></div>
    <nav class = "navbar">
        <button class = "menu-button" @click="openClose">Menu</button>
        <div class = "title">
            Drone Cones
        </div>
        <div class = "links">
            <a href="order">Order</a>
            <a href="droneHome">Drones</a>
            <a href="/">Signout</a>
        </div>
    </nav>
    <div class = "menu-bar" :class="{'open' : isopen}">
        <a href="order">Order</a>
        <a href="droneHome">Drones</a>
        <a href="/">Signout</a>
    </div>
</template>

<script>
export default {
  data() {
    return {
      isopen: false
    };
  },
  methods: {
    openClose() {
      this.isopen = !this.isopen;
    }
  }
};
</script>
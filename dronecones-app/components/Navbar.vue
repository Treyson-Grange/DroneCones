<script setup>
  defineProps(['type']);
</script>


<template>
    <div class = "navbar-under"></div>
    <nav class = "navbar">
        <button class = "menu-button" @click="openClose">Menu</button>
        <div class = "title">
            Drone Cones
        </div>
        <div class = "links">
            <slot />
            <a href = "/">Account</a>
        </div>
    </nav>
    <div class = "menu-bar" :class="{'open' : isopen}">
        <slot />
        <a href = "/">Account</a>
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
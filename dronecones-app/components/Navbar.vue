<template>
    <div class = "navbar-under"></div>
    <nav class = "navbar">
        <button class = "menu-button" @click="openClose">Menu</button>
        <div class = "title">
            Drone Cones
        </div>
        <div class = "links">
            <slot />
        </div>
    </nav>
    <div class = "menu-bar" :class="{'open' : isopen}">
        <slot />
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
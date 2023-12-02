<template>
    <div class = "navbar-under"></div>
    <nav class = "navbar">
        <button class = "menu-button" @click="openClose">
          <img src = "./../assets/menu.png" class = "invert" width="32" height="32">
        </button>
        <div class = "title">
            Drone Cones
        </div>
        <div class = "links">
            <slot />
            <a href = "/">
              <img src = "./../assets/exit.png" class = "invert" width = "16">
              <span style = "padding-left: 8px;">Logout</span>
            </a>
        </div>
    </nav>
    <div class = "menu-bar" :class="{'open' : isopen}">
        <slot />
        <a href = "/">
              <img src = "./../assets/exit.png" class = "invert" width = "16">
              <span style = "padding-left: 8px;">Logout</span>
        </a>
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
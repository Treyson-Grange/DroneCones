<script setup>
    import { supabase } from './lib/supabaseClient'
    function navigateToAddDrone(){
        window.location.href = '/addDrone'
    }
</script>

<template>
    <div class = "page2">
        <div class = "drone-header">
            <h1>Drones</h1>
            <button @click = "navigateToAddDrone">Add Drone</button>
        </div>
        <div class = 'drone-item'>
            <h2 @click = "showDroneOptions">Example Name</h2>
            <div class = 'drone-info' @click = "showDroneOptions">
                <div>Size: medium</div>
                <div>Status: disabled</div>
            </div>
            <form class = "choices" :class="{'show-choices' : showOptions}">
                <button>Enable</button>
                <button>Disabled</button>
                <button>Delete</button>
            </form>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      showOptions: false
    };
  },
  methods: {
    showDroneOptions() {
      this.showOptions = !this.showOptions;
    }
  }
};
</script>

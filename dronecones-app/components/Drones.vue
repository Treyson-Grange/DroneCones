<script setup>
    import { supabase } from './lib/supabaseClient'
    import {getDrones} from '../database/droneDatabase'
    
    function navigateToAddDrone(){
        window.location.href = '/addDrone'
    }
</script>

<template>
    <div class = "page2">
        <div>{{localStorage.getItem('userID')}}</div>
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
      showOptions: false,
      drones: [],
      userID: localStorage.getItem('userID')
    };
  },
  methods: {
    showDroneOptions() {
      this.showOptions = !this.showOptions;
    },
    async mounted() {
    // You can call the getDrones function here or in any method as needed
    try {
      const limit = 10; // Specify your desired limit
      this.drones = await getDrones(limit, this.userID);
      console.log('Drones:', this.drones[0]);
    } catch (error) {
      console.error('Error fetching drones:', error);
    }
  }
  }
};
</script>

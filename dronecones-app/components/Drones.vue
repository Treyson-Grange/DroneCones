<script setup>
    import { supabase } from './lib/supabaseClient'
    import {getDrones} from '../database/droneDatabase'
</script>

<template>
    <div class = "page2">
        <div class = "drone-header">
            <h1>Drones</h1>
            <slot/>
        </div>
        <div class = 'drone-item' v-for="drone in drones" :key="drone.id">
            <h2>{{drone.name}}</h2>
            <div class = 'drone-info'>
                <div>Size: 
                    <span v-if = "drone.size == 0">Small</span>
                    <span v-else-if = "drone.size == 1">Medium</span>
                    <span v-else>Large</span>
                </div>
                <div>Status: 
                    <span v-if = "drone.available == 0">Disabled</span>
                    <span v-else>Enabled</span>
                </div>
            </div>
            <form :class="{'show-choices' : showOptions, 'hide-choices': !showOptions}">
              <div class="radio-button-container">
                    <input class = "radio" type="radio" name="name1" id="radio-1">
                    <label class = "radio-button" for="radio-1">Enable</label>

                    <input class = "radio" type="radio" name="name1" id="radio-2">
                    <label class = "radio-button" for="radio-2">Disable</label>

                    <input class = "radio" type="radio" name="name1" id="radio-3">
                    <label class = "radio-button" for="radio-3">Delete</label>
                </div>
            </form>
        </div>
        <button class = "floating" @click = "showDroneOptions">
            Edit
        </button>
    </div>
</template>

<script>
export default {
  data() {
    return {
      showOptions: false,
      drones: [],
      id: localStorage.getItem('userID') || 'Data not set'
    };
  },
  methods: {
    showDroneOptions() {
      this.showOptions = !this.showOptions;
    },
  },
  async mounted() {
    // You can call the getDrones function here or in any method as needed
    try {
      const limit = 10; // Specify your desired limit
      this.drones = await getDrones(limit, this.id);
      console.log('Drones:', this.drones);
    } catch (error) {
      console.error('Error fetching drones:', error);
    }
  }
};
</script>

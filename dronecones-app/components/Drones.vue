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
        <div class = 'drone-item' v-for="(drone, index) in drones" :key="index">
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
            <form :class="{'show-choices' : showOptions, 'hide-choices': !showOptions}" style = "width:100%;">
              <div class = "form-group">
                <label for = "name">Enter new name:</label>
                <input type = "text" id = "name" v-model="drone.name">
              </div>
              <div class = "form-group">
                <label for="size">Change Status:</label>
                <div class="radio-button-container" style="margin-top: 0px;" id = "size" :key="index">
                      <input class = "radio" type="radio" name="size1" id="radio-1">
                      <label class = "radio-button" for="radio-1">Small</label>

                      <input class = "radio" type="radio" name="size1" id="radio-2">
                      <label class = "radio-button" for="radio-2">Medium</label>

                      <input class = "radio" type="radio" name="size1" id="radio-3">
                      <label class = "radio-button" for="radio-3">Large</label>
                  </div>
              </div>
              <div class = "form-group">
                <label for="status">Change Status:</label>
                <div class="radio-button-container" style="margin-top: 0px;" id = "status">
                      <input class = "radio" type="radio" name="name1" id="radio-1">
                      <label class = "radio-button" for="radio-1">Enable</label>

                      <input class = "radio" type="radio" name="name1" id="radio-2">
                      <label class = "radio-button" for="radio-2">Disable</label>

                      <input class = "radio" type="radio" name="name1" id="radio-3">
                      <label class = "radio-button" for="radio-3">Delete</label>
                  </div>
              </div>
              <div class = "end">
                <button 
                style = "background-color: var(--accent-color); color: var(--font-accent);"
                type="submit">
                  Save
                </button>
              </div>
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
      const limit = 1000; // Specify your desired limit
      this.drones = await getDrones(limit, this.id);
      console.log('Drones:', this.drones);
    } catch (error) {
      console.error('Error fetching drones:', error);
    }
  }
};
</script>

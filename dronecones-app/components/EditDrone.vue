<template>
  <form :class="{'show-choices' : showForm, 'hide-choices': !showForm}" style = "width:100%;">
    <div class = "form-group">
      <label for = "name">Enter new name:</label>
      <input type = "text" id = "name">
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
</template>

<script>
import * as dronedb from './../database/droneDatabase'
  export default {
    data() {
      return {
        drone: null,
        showForm: false,
        formData: {
          name: '',
          size: 0,
          available: true,
        },
      };
    },
    methods: {
      openForm(drone) {
        this.showForm = true;
        this.drone = drone;
        this.formData.name = drone.name;
        this.formData.size = drone.size;
        this.formData.enable = drone.available;
        console.log(this.formData)
        
      },
      closeForm() {
        this.formData= {
          name: '',
          size: 0,
          available: true
        }
        this.drone = null
        this.showForm = false;
        
      },
      async saveEdits() {
        // Handle the form submission here, e.g., send data to the server
        // After successful submission, you can close the form
        dronedb.editDrone(this.drone.id, this.formData)
        await new Promise(r => setTimeout(r, 300));
        this.$parent.updateFlavors();
        this.closeForm();
        
      },
      async deleteFlavor() {
        stockdb.removeIcecreamFlavor(this.flavor.id)
        await new Promise(r => setTimeout(r, 300));
        this.closeForm();
        this.$parent.updateFlavors();
      },
    },
  };
</script>
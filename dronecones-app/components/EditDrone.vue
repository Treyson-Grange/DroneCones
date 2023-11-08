<template>
  <div class = "page2" :class="{'show-choices' : showForm, 'hide-choices': !showForm}">
    <div class = "form-list">
    <form>
      <div class = "form-group">
        <label for = "name">Enter new name:</label>
        <input type = "text" id = "name" v-model="formData.name">
      </div>
      <div class = "form-group">
        <legend for="size">Change Status:</legend>
        <fieldset class="radio-button-container" style="margin-top: 0px; border: none;" id = "size">
          <input class = "radio" type="radio" name="size" id="size-1" value = "0" v-model="formData.size">
          <label class = "radio-button" for="size-1">Small</label>

          <input class = "radio" type="radio" name="size" id="size-2" value = "1" v-model="formData.size">
          <label class = "radio-button" for="size-2">Medium</label>

          <input class = "radio" type="radio" name="size" id="size-3" value = "2" v-model="formData.size">
          <label class = "radio-button" for="size-3">Large</label>
        </fieldset>
      </div>
      <div class = "form-group">
        <legend for="status">Change Status:</legend>
        <fieldset class="radio-button-container" style="margin-top: 0px; border: none;" id = "status">
          <input class = "radio" type="radio" name="status" id="status-1" value = "true" v-model="formData.available">
          <label class = "radio-button" for="status-1">Enable</label>

          <input class = "radio" type="radio" name="status" id="status-2" value = "false" v-model="formData.available">
          <label class = "radio-button" for="status-2">Disable</label>

          <input class = "radio" type="radio" name="status" id="status-3" value = "true" v-model="del">
          <label class = "radio-button" for="status-3">Delete</label>
        </fieldset>
      </div>
      <div class = "spacer">
        <button 
        style = "background-color: var(--accent-color); color: var(--font-accent);"
        type="submit"
        @click = "saveEdits"
        >
          Save
        </button>
        <button type = "button" @click = "closeForm">Cancel</button>
      </div>
    </form>
  </div>
  </div>
</template>

<script>
import * as dronedb from './../database/droneDatabase'
  export default {
    data() {
      return {
        drone: null,
        del: 'false',
        available: 'true',
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
        this.formData.available = drone.available;
        console.log(this.formData)
        
      },
      closeForm() {
        this.formData= {
          name: '',
          size: 0,
          available: ''
        }
        this.drone = null
        this.showForm = false;
        
      },
      async saveEdits() {
        this.formData.available = this.formData.available === "true" ? true : false;
        if(this.del === "true"){
          console.log("deleting");
          this.deleteDrone();
        }
        else{
          console.log("editing");
          dronedb.editDrone(this.drone.id, this.formData)
          if(this.drone.available !== this.formData.available){
            console.log("toggling");
            dronedb.toggleDroneAvailability(this.drone.id);
          }
          await new Promise(r => setTimeout(r, 300));
          this.$parent.updateDrones();
          this.closeForm();
        }
      },
      async deleteDrone() {
        dronedb.removeDrone(this.drone.id)
        await new Promise(r => setTimeout(r, 300));
        this.$parent.updateDrones();
        this.closeForm();
      },
    },
  };
</script>
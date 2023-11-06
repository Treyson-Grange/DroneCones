<template>
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
</template>

<script>
import * as stockdb from './../database/stockDatabase'
  export default {
    data() {
      return {
        flavor: null,
        showForm: false,
        formData: {
          name: '',
          price_per_scoop: null,
          amount: null,
          available: false,
        },
      };
    },
    methods: {
      openForm(flavor) {
        this.showForm = true;
        this.flavor = flavor;
        this.formData.name = flavor.name;
        this.formData.price_per_scoop = flavor.price_per_scoop;
        this.formData.amount = flavor.amount;
        this.formData.available = flavor.available;
        console.log(this.formData)
        
      },
      closeForm() {
        this.formData= {
          name: '',
          price_per_scoop: null,
          amount: null,
          available: false,
        }
        this.flavor = null
        this.showForm = false;
        
      },
      async saveEdits() {
        // Handle the form submission here, e.g., send data to the server
        // After successful submission, you can close the form
        stockdb.updateIcecreamFlavor(this.flavor.id, this.formData)
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
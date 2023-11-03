<template>
    <div class="restock-form" v-if="showForm">
      <div class="form-container">
        <h2>Restock</h2>
        <form @submit.prevent="submitForm">
          <div v-for="(cone, index) in selectedItems" :key="index">
            <div class="form-group">
              <label>{{ cone.name }}</label>
              <input type="number" v-model="cone.quantity" min="0" placeholder="0" required />
            </div>
          </div>
          <div class="button-container">
            <button class="cancel-button" @click="closeForm">Cancel</button>
            <button type="submit" class="submit-button">Submit</button>
          </div>
        </form>
      </div>
    </div>
  </template>
  
<script>
import * as stockdb from './../database/stockDatabase'

export default {

    data() {
      return {
        showForm: false,
        selectedItems: this.$parent.selectedItems,
      };
    },
    methods: {
      openForm() {
        this.showForm = true;
        this.selectedItems = this.$parent.selectedItems
      },
      closeForm() {
        this.showForm = false;
      },
      async submitForm() {
        // Handle the form submission here, e.g., send restock data to the server
        // After successful submission, you can close the form
        for (const cone of this.selectedItems) {
          stockdb.addConeAmount(cone.id, cone.quantity)
          delete cone.quantity
        }

        this.closeForm();
        this.$parent.selectedItems = []
        await new Promise(r => setTimeout(r, 300));
        this.$parent.updateCones();
        },
    },
};
</script>
  
  <style scoped>
  .restock-form {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 999;
  }
  
  .form-container {
    background: var(--secondary-color);
    padding: 25px;
    border-radius: 5px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    max-width: 400px;
  }
  
  /* Style for form elements */
  .form-group {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 10px;
  }
  
  label {
    height: 30px;
    width: 200px;
    margin-bottom: 5px;
    color:white;
  }

  input {
  border: none;
  width: 50px;
  height: 48px;
  border-radius: 16px;
  padding: 0px 16px 0px 16px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16) inset, 0 3px 6px rgba(0, 0, 0, 0.23) inset;
  transition: all 0.3s cubic-bezier(.25, .8, .25, 1);
  background: var(--primary-color);
  color: var(--font-primary);
  font-family: var(--the-font);
  font-size: var(--body-font-size);
}

input:focus {
  box-shadow: none;
}
  
/* Style for buttons */
.button-container {
    text-align: right;
    display: flex;
}
  
.cancel-button {
    background: #bbb;
    color: #fff;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    margin-right: 10px;
    cursor: pointer;
}
  
.submit-button {
    background: var(--primary-color);
    color: #fff;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}  </style>
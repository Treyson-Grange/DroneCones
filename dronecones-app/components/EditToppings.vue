<template>
    <div class="add-topping-form" v-if="showForm">
      <div class="form-container">
        <h2 style="color:white">Edit Topping</h2>
        <form @submit.prevent="submitForm">
          <div class="form-group">
            <label for="name">Name:</label>
            <input type="text" id="name" v-model="formData.name" required />
          </div>
          <div class="form-group">
            <label for="price">Price:</label>
            <input type="number" id="price" name="price" step="1" min="0" placeholder="0.00" v-model="formData.price" />
          </div>
          <div class="form-group">
            <label for="amount">Amount:</label>
            <input type="number" id="amount" min="0" placeholder="0" v-model="formData.amount" />
          </div>
          <div class="form-group">
              <label for="available">Available:</label>
              <div class="toggle-button">
                <input type="checkbox" id="toggle" v-model="formData.available" class="hidden-input" />
                <label for="toggle" class="toggle"></label>
              </div>
          </div>
          <div class="button-container">
            <button class="delete-button" @click="deleteTopping">Delete</button>
            <button class="cancel-button" @click="closeForm">Cancel</button>
            <button type="submit" class="submit-button" @click="saveEdits()">Save</button>
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
        topping: null,
        showForm: false,
        formData: {
          name: '',
          price: null,
          amount: null,
          available: false,
        },
      };
    },
    methods: {
      openForm(topping) {
        this.showForm = true;
        this.topping = topping;
        this.formData.name = topping.name;
        this.formData.price = topping.price;
        this.formData.amount = topping.amount;
        this.formData.available = topping.available;
        console.log(this.formData)
        
      },
      closeForm() {
        this.formData= {
          name: '',
          price: null,
          amount: null,
          available: false,
        }
        this.topping = null
        this.showForm = false;
        
      },
      async saveEdits() {
        // Handle the form submission here, e.g., send data to the server
        // After successful submission, you can close the form
        stockdb.updateTopping(this.topping.id, this.formData)
        await new Promise(r => setTimeout(r, 200));
        this.$parent.updateToppings();
        this.closeForm();
        
      },
      async deleteTopping() {
        stockdb.removeTopping(this.topping.id)
        await new Promise(r => setTimeout(r, 300));
        this.closeForm();
        this.$parent.updateToppings();
      },
    },
  };
</script>
  
<style scoped>
  /* Style for the form and its container */
  .add-topping-form {
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
    margin-bottom: 8px;
  }
  
  label {
    display: block;
    margin-bottom: 5px;
    color:white
  }

  input {
  border: none;
  width: calc(100% - 32px);
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
}

.delete-button {
    background: #bbb;
    color: #fff;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin-right: 10px;
}
  </style>
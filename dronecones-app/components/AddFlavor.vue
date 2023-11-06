<template>
    <div class="add-flavor-form" v-if="showForm">
      <div class="form-container">
        <h1>Add New Flavor</h1>
        <form @submit.prevent="submitForm">
          <div class="form-group">
            <label for="name">Name:</label>
            <input type="text" id="name" v-model="formData.name" required />
          </div>
          <div>
            <label for="picture">Picture:</label>
            <input type="file" id="picture" ref="file" accept="image/x-png,image/gif,image/jpeg" @change="setFile"/>
          </div>
          <div class="form-row">
            <div class="form-group">
              <label for="price">Price:</label>
              <input type="number" id="price" name="price" step="0.01" min="0" placeholder="0.00" v-model="formData.price" />
            </div>
            <div class="form-group">
              <label for="amount">Amount:</label>
              <input type="number" id="amount" min="0" placeholder="0" v-model="formData.amount" />
            </div>
          </div>
          <div class="form-group">
              <label for="available">Available:</label>
              <div class="toggle-button">
                <input type="checkbox" id="toggle" v-model="formData.available" class="hidden-input" />
                <label for="toggle" class="toggle"></label>
              </div>
          </div>
          <div class="button-container">
            <button class="cancel-button" @click="closeForm">Cancel</button>
            <button type="submit" class="submit-button" @click="submitForm()">Submit</button>
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
        formData: {
          name: '',
          price: null,
          amount: null,
          available: false,
        },
        image: null,
      };
    },

    methods: {
      openForm() {
        this.showForm = true;
      },
      closeForm() {
        this.showForm = false;
      },
      setFile() {
        this.image = this.$refs.file.files[0]
      },
      async submitForm() {
        stockdb.addNewIcecreamFlavor(this.formData.name, this.formData.amount, this.formData.price * 100, this.formData.available, this.image)
        this.formData = {
          name: '',
          price: null,
          amount: null,
          available: false,
        };
        this.image = null
        this.closeForm();
        await new Promise(r => setTimeout(r, 300));
        this.$parent.updateFlavors();
      },
    },
  };
</script>
  
<style scoped>
  /* Style for the form and its container */
  .add-flavor-form {
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

  .form-row {
    display: flex;
    justify-content: space-between;
  }
  
  label {
    display: block;
    margin-bottom: 5px;
    color:white
  }

input[type=text] {
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

input[type=number] {
  border: none;
  width: 75%;
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
  </style>
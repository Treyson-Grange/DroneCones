<template>
    
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
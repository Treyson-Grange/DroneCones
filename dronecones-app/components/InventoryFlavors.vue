<template>
    <div>
        <table class="flavor-table">
          <thead>
            <tr class="header">
              <th></th>
              <th class="name-cell">Name</th>
              <th>Price</th>
              <th>Amount</th>
              <th>Available</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(flavor, index) in flavors" :key="flavor.id">
              <td>
                <input type="checkbox" v-model="selectedItems" :value="flavor" />
              </td>
              <td class="name-cell">{{ flavor.name }}</td>
              <td>{{ flavor.price_per_scoop === null ? 'N/A' : getDollarAmount(flavor.price_per_scoop)  }}</td>
              <td>{{ flavor.amount === null ? 'N/A' : flavor.amount }}</td>
              <td>{{ flavor.available === null ? 'N/A' : availableString(flavor.available) }}</td>
              <td>
                <img @click="editFlavor(index)" src=".\..\assets\edit.ico" width="20"/>
              </td>
            </tr>
          </tbody>
        </table>
        <div class="buttons-row">
          <button class="table-button" @click="addFlavorView()">Add Flavor</button>
          <button class="table-button" @click="restockView()">Restock</button>
        </div>
      </div>
      <div>
        <AddFlavor ref="addFlavorView" />
      </div>
      <div>
        <RestockFlavors ref="restockView" />
      </div>
      <div>
        <EditFlavor ref="editFlavorView"/>
      </div>
    
    </template>
    
    <script>
    import * as stockdb from './../database/stockDatabase'
    export default {
      data() {
        return {
          flavors: [],
          selectedItems: [],
        };
      },
      created() {
          stockdb.getIcecreamFlavors()
              .then(flavors => {
                  this.flavors = flavors
              })
          
      },
    
      methods: {
        updateFlavors() {
          stockdb.getIcecreamFlavors()
              .then(flavors => {
                  this.flavors = flavors
              })
        },
        editFlavor(index) {
          this.$refs.editFlavorView.openForm(this.flavors[index])

        },
        availableString(available) {
          return available ? "In stock" : "Out of stock"
        },
        addFlavorView() {
          this.$refs.addFlavorView.openForm()
        },
        restockView() {
          this.$refs.restockView.openForm()
        },
        getDollarAmount(amount) {
          return `$${(amount / 100).toFixed(2)}`
        }
      },
    };
    </script>
    
    <style scoped>
    
    /* Table styling */
    .flavor-table {
      border: 1px solid #ccc;
      border-collapse: collapse;
      width: 700px;
      left:0;
    }
    
    
    .buttons-row {
      display:flex;
      flex-direction: row;
      gap: 8px;
      justify-content: flex-end;
    }
    
    .table-button {
      background-color: var(--secondary-color); 
      width: 150px
    
    }
    
    .name-cell {
      padding-right: 150px; 
    }
    /* Header row styling */
    .header {
      background-color: #333;
      color: #fff;
    }
    
    /* Row styling */
    tr {
      border-bottom: 1px solid #ccc;
      background-color: var(--secondary-color);
    }
    
    /* Cell styling */
    td, th {
      padding: 10px;
      text-align: center;
      color: white;
    }
    
    /* Add more space between items in the rows */
    td {
      padding: 15px;
    }
    </style>
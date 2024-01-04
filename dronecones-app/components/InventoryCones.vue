<template>
<div>
    <table class="cone-table">
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
        <tr v-for="(cone, index) in cones" :key="cone.id">
          <td>
            <input type="checkbox" v-model="selectedItems" :value="cone" />
          </td>
          <td class="name-cell">{{ cone.name }}</td>
          <td>{{ cone.price === null ? 'N/A' : getDollarAmount(cone.price)  }}</td>
          <td>{{ cone.amount === null ? 'N/A' : cone.amount }}</td>
          <td>{{ cone.available === null ? 'N/A' : availableString(cone.available) }}</td>
          <td>
            <img @click="editCone(index)" src=".\..\assets\edit.png" width="20" class = "invert"/>
          </td>
        </tr>
      </tbody>
    </table>
    <div class="buttons-row">
      <button class="table-button" @click="addConeView()">Add Cone</button>
      <button class="table-button" @click="restockView()">Restock</button>
    </div>
  </div>
  <div>
    <AddCone ref="addConeView" />
  </div>
  <div>
    <RestockCones ref="restockView" />
  </div>
  <div>
    <EditCone ref="editConeView"/>
  </div>

</template>

<script>
import * as stockdb from './../database/stockDatabase'
export default {
  data() {
    return {
      cones: [],
      selectedItems: [],
    };
  },
  created() {
      stockdb.getCones()
          .then(cones => {
              this.cones = cones
          })
  },

  methods: {
    updateCones() {
      stockdb.getCones()
          .then(cones => {
              this.cones = cones
          })
    },
    editCone(index) {
      this.$refs.editConeView.openForm(this.cones[index])
      // Handle the edit action for the selected Cone object
      // You can access the selected Cone using this.cones[index]
    },
    availableString(available) {
      return available ? "In stock" : "Out of stock"
    },
    addConeView() {
      this.$refs.addConeView.openForm()
    },
    restockView() {
      this.$refs.restockView.openForm()
      console.log(this.cones)
    },
    getDollarAmount(amount) {
      return `$${(amount / 100).toFixed(2)}`
    }
  },
};
</script>

<style scoped>

/* Table styling */
.cone-table {
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
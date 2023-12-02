<template>
    <div>
        <table class="topping-table">
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
            <tr v-for="(topping, index) in toppings" :key="topping.id">
              <td>
                <input type="checkbox" v-model="selectedItems" :value="topping" />
              </td>
              <td class="name-cell">{{ topping.name }}</td>
              <td>{{ topping.price === null ? 'N/A' : getDollarAmount(topping.price)  }}</td>
              <td>{{ topping.amount === null ? 'N/A' : topping.amount }}</td>
              <td>{{ topping.available === null ? 'N/A' : availableString(topping.available) }}</td>
              <td>
                <img @click="editToppings(index)" src=".\..\assets\edit.png" width="20" class = "invert"/>
              </td>
            </tr>
          </tbody>
        </table>
        <div class="buttons-row">
          <button class="table-button" @click="addToppingView()">Add Topping</button>
          <button class="table-button" @click="restockView()">Restock</button>
        </div>
      </div>
      <div>
        <AddToppings ref="addToppingsView" />
      </div>
      <div>
        <RestockToppings ref="restockView" />
      </div>
      <div>
        <EditToppings ref="editToppingView"/>
      </div>
    
</template>

<script>
import * as stockdb from './../database/stockDatabase'
export default {
    data() {
    return {
        toppings: [],
        selectedItems: [],
    };
    },
    created() {
        stockdb.getToppings()
            .then(toppings => {
                this.toppings = toppings
            })
    },

    methods: {
    updateToppings() {
        stockdb.getToppings()
            .then(toppings => {
                this.toppings = toppings
            })
    },
    editToppings(index) {
        this.$refs.editToppingView.openForm(this.toppings[index])

    },
    availableString(available) {
        return available ? "In stock" : "Out of stock"
    },
    addToppingView() {
        this.$refs.addToppingsView.openForm()
    },
    restockView() {
        this.$refs.restockView.openForm()
        console.log(this.toppings)
    },
    getDollarAmount(amount) {
        return `$${(amount / 100).toFixed(2)}`
    }
    },
};
</script>

<style scoped>

/* Table styling */
.topping-table {
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
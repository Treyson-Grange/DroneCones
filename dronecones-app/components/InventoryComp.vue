<template>
  <div class="spaced-row">
    <h1>Inventory</h1>
    <p v-if="availableDrones != null">There are  {{ this.availableDrones }} available drones</p>

  </div>
  <div class="type-buttons-row">
    <div class="type-button" @click="toCones()">Cones</div>
    <div class="type-button" @click="toFlavors()">Flavors</div>
    <div class="type-button" @click="toToppings()">Toppings</div>
  </div>
  <div v-if="this.type=='cones'">
    <InventoryCones/>
  </div>
  <div v-if="this.type=='flavors'">
    <InventoryFlavors/>
  </div>
  <div v-if="this.type=='toppings'">
    <InventoryToppings/>
  </div>
    
</template>

<script>
import * as transdb from './../database/transactionDatabase'
import * as dronedb from './../database/droneDatabase'

export default {
  data() {
    return {
      type: 'cones',
      availableDrones: null
    }
  },
  async mounted(){
    dronedb.availableDroneCount()
      .then(count => this.availableDrones = count)
    
  },
  methods: {
    toCones() {
      this.type = 'cones'
    },
    toFlavors() {
      this.type = 'flavors'
    },
    toToppings() {
      this.type = 'toppings'
    }
  }
}

</script>
  

<style>

p {
  color: #fff
}

.spaced-row {
  display: flex;
  justify-content: space-between;
}

.type-buttons-row {
  padding-top: 10px;
  padding-bottom: 20px;  
  display: flex;
  flex-direction: row;
  width: 700px;
  justify-content: space-between;
}

.type-button {
  margin: auto;
  padding-top: 15px;
  padding-bottom: 5px;
  text-align: center;
  height: 30px;
  width: 33%;
  border: 2px solid #ccc;
  background-color: var(--secondary-color);
  color: #fff
}


</style>


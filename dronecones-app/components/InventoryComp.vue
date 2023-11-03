<template>
  <h1>Inventory</h1>
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
export default {
  data() {
    return {
      type: 'cones'
    }
  },
  methods: {
    toCones() {
      this.type = 'cones'
      console.log(this.type)
    },
    toFlavors() {
      this.type = 'flavors'
      console.log(this.type)
    },
    toToppings() {
      this.type = 'toppings'
      console.log(this.type)
    }
  }
}

</script>
  

<style>

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


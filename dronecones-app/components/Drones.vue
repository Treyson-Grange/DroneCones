<script setup>
    import { supabase } from './lib/supabaseClient'
    import { getDroneDeliveries, getDrones } from '~/database/droneDatabase';
    import { getTransaction } from '~/database/transactionDatabase'
</script>

<template>
    <div class = "page2">
        <div class = "drone-header">
            <h1>Drones</h1>
            <slot/>
        </div>
        <div class = 'drone-item' v-for="(drone, index) in drones" :key="index">
            <div class = 'drone-title spacer'>
              <button @click="this.$parent.editDrone(this.drones[index])"
              style="margin: 0px; align-self: center; width:48px; padding: 0px;"
              >
                <img src = "./../assets/edit.png" class = "invert" width="24" height="24">
              </button>
              <h2>{{drone.name}}</h2>
            </div>
            <div class = 'drone-info'>
                <div> 
                    <strong>Size: </strong>
                    <span v-if = "drone.size == 0">Small</span>
                    <span v-else-if = "drone.size == 1">Medium</span>
                    <span v-else>Large</span>
                </div>
                <div> 
                    <strong>Status: </strong>
                    <span v-if = "drone.available == 0">Disabled</span>
                    <span v-else>Enabled</span>
                </div>
                <div>
                  <strong>Revenue:</strong> ${{ this.revenues[index] }}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      showOptions: false,
      drones: [],
      revenues: [],
      id: localStorage.getItem('userID') || 'Data not set'
    };
  },
  async created(){
    await this.retrieveDrones();
    this.getTotalRevenue();
  },
  methods: {
    refreshDrones(){
      dronedb.getDrones()
              .then(drones => {
                  this.drones = drones
              })
    },
    async retrieveDrones() {
      // You can call the getDrones function here or in any method as needed
      try {
        const limit = 50; // Specify your desired limit
        this.drones = await getDrones(limit, this.id);
        console.log('Drones:', this.drones);
      } catch (error) {
        console.error('Error fetching drones:', error);
      }
    },
    async getTotalRevenue() {
      console.log("hello");
      try {
          for(let i = 0; i < this.drones.length; i++) {
              this.revenues[i] = 0;
              let droneDeliveries = await getDroneDeliveries("drone", this.drones[i].id)
              if (droneDeliveries.length >= 1){
                  for(let j = 0; j < droneDeliveries.length; j++) {
                      let transaction = await getTransaction(droneDeliveries[j].transaction_id);
                      let revenueFromJob = transaction[0].sales_price / 2;
                      this.revenues[i] += revenueFromJob;
                  }
                  
              }
              
          }
          console.log('Revenues: ', this.revenues);
      } catch (error) {
          console.log(error);
      }
    },
  },
};
</script>

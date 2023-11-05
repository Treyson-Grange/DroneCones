
  
  <script>
    import { getDrone, getDroneDeliveries, getDrones } from '~/database/droneDatabase';
    import { removeSalesPrice, getTransaction } from '~/database/transactionDatabase'

    export default {
        data() {
            return {
                myData: localStorage.getItem('userID') || 'Data not set yet',
                totalRevenues: 0
            };
        },
        created() {
            this.getTotalRevenue();
        },
        methods: {
            async getTotalRevenue() {
                try {
                    let totalRevenue = 0;
                    let droneList = await getDrones(20,localStorage.getItem('userID'))
                    for(let i = 0; i < droneList.length; i++) {
                        let droneDeliveries = await getDroneDeliveries("drone", droneList[i].id)
                        if(droneDeliveries == []) {
                            
                        }
                        else if (droneDeliveries.length >= 1){
                            for(let j = 0; j < droneDeliveries.length; j++) {
                                let transaction = await getTransaction(droneDeliveries[j].transaction_id);
                                let revenueFromJob = transaction[0].sales_price / 2;
                                totalRevenue += revenueFromJob;
                            }
                            
                        }
                        
                    }

                    this.totalRevenues += totalRevenue;
                } catch (error) {
                    console.log(error);
                }
            },
            async emptyRevenue() {
                let load = document.getElementById('loading');
                if(this.totalRevenues == 0) {
                    load.innerHTML = "You don't have any revenue."
                }
                else {
                    load.innerHTML = "Loading..."
                    try {
                        let droneList = await getDrones(20,localStorage.getItem('userID'))
                        for(let i = 0; i < droneList.length; i++) {
                            let droneDeliveries = await getDroneDeliveries("drone", droneList[i].id)
                            if(droneDeliveries == []) {
                                
                            }
                            else if (droneDeliveries.length >= 1){
                                for(let j = 0; j < droneDeliveries.length; j++) {
                                    await removeSalesPrice(droneDeliveries[j].transaction_id);
                                    load.innerHTML = "Done!";
                                    this.totalRevenues = 0;
                                }
                                
                            }
                            
                        }
                    } catch (error) {
                        load.innerHTML = error;
                    }
                }
            }
        }
    };
  </script>

<template>
    <div class="page2">
        <p>Data from localStorage: {{ myData }}</p>
        <div class="form-list">
            <h1>Total Revenue</h1>
            <p>Please allow time to load all of your drone deliveries</p>
            <p id="rev">Total Revenue: {{ totalRevenues }}</p>
        </div>
        <br>
        <div class="form-list">
            <h1>Transfer Funds</h1>
            <button @click="emptyRevenue">Transfer Funds</button>
            <br>
            <div id="loading"></div>
        </div>
    </div>
</template>
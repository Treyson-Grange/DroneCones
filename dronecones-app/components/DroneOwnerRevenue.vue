
  
  <script>
    import { getDrone, getDroneDeliveries, getDrones } from '~/database/droneDatabase';
    import { getTransaction } from '~/database/transactionDatabase'

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
            }
        }
    };
    
    

  </script>

<template>
    <div>
      <p>Data from localStorage: {{ myData }}</p>
      <h1>Total Revenue</h1>
      <p>Please allow time to load all of your drone deliveries</p>
      <div class="form-list">
      <p id="rev">Total Revenue: {{ totalRevenues }}</p>
    </div>
      <ul>

        <li><strike>Total revenue in app</strike></li>
        <li>Transfer to bank button which has defaults to the last bank information specified. It also has a drop down menu to toggle to a different bank previously specified. If there has never been a bank specified or the user wants to add a bank to transfer to there will be a button to route to bank information form (i.e., which when filled out will take you back to the page and put the bank information in as default)</li>
        <li>Bank info form:</li>
        <ul>
            <li>Routing number text field</li>
            <li>Account number text field</li>
            <li>Submit button to save changed</li>
        </ul>


      </ul>
    </div>
</template>
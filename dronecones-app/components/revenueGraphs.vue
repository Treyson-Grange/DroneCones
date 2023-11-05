<template>
    <div>
      <h2>Revenue</h2>
      <canvas ref="myChart"></canvas>
    </div>
  </template>
  
<script>
import { Chart } from 'chart.js/auto';
import { getRevenueHistory } from '../database/transactionDatabase';

  
export default {
    data() {
        return {
            chartData: [],
        };
    },

    async created() {
        try {
            const data = await getRevenueHistory();
            this.chartData = data;
        } catch (error) {
            console.error('An error occurred:', error);
        }
    },


    async mounted() {
        // Ensure that the data fetching and processing is complete
        await this.loadData();
        const currentDate = new Date();
        const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        
        // filter chart data for current year
        this.chartData = this.chartData.filter((data) => new Date(data.order_time).getFullYear() == currentDate.getFullYear());
        var monthList = Array.from({ length: currentDate.getMonth() + 1 }, (_, i) => i); // .getMonth() starts at 0 for january and ends at 11 for december so we add one to make it the number of months we want
        var theLabels = monthList.map((month) => monthNames[month]);
        var monthRevenues = new Array(monthList.length).fill(0);
        this.chartData.forEach((data) => {
            var order_time = new Date(data.order_time);
            if (monthList.includes(order_time.getMonth())) {
                monthRevenues[order_time.getMonth()] += data.final_price;
            }
        });
        
        new Chart(this.$refs.myChart, {
            type: 'bar',
            data: {
                datasets: [{
                    label: 'Current Year Revenue',
                    data: monthRevenues,
                    // this dataset is drawn below
                    order: 1
                }],
                labels: theLabels
            },
            options: {
                responsive: true,
            },
            });
    },

    methods: {
        async loadData() {
            if (this.chartData.length === 0) {
                // If finalPrices is empty, wait for a short time and retry
                await new Promise(resolve => setTimeout(resolve, 100));
                await this.loadData();
            }
        },
    },
}
</script>

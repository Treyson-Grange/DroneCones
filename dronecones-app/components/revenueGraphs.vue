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
            orderTimes: [],
            finalPrices: [],
        };
    },

    async created() {
        try {
            const data = await getRevenueHistory();
            this.chartData = data;

            // Extract order_time and final_price data for charting
            this.orderTimes = this.chartData.map((order) => order.order_time);
            this.finalPrices = this.chartData.map((order) => order.final_price);
        } catch (error) {
            console.error('An error occurred:', error);
        }
    },


    async mounted() {
        // Ensure that the data fetching and processing is complete
        await this.loadData();
        new Chart(this.$refs.myChart, {
            type: 'bar',
            data: {
                datasets: [{
                    label: 'Bar Dataset',
                    data: this.finalPrices,
                    // this dataset is drawn below
                    order: 2
                }],
                labels: [
                "January",
                "February",
                "March",
                "April",
                "May",
                "June",
                "July",
                "August",
                "September",
                "October",]
            },
            options: {
                responsive: true,
            },
            });

        // new Chart(this.$refs.myChart, {
        //     type: 'scatter',
        //     data: {
                // labels: [
                // "January",
                // "February",
                // "March",
                // "April",
                // "May",
                // "June",
                // "July",
                // "August",
                // "September",
                // "October",
                // ],
        //         datasets: [{
        //         backgroundColor:"rgba(0,0,255,1.0)",
        //         borderColor: "rgba(0,0,255,0.1)",
        //         data: this.finalPrices
        //         }]
        //     },
        //     options: {
        //         responsive: true,
        //     },
        // });
    },

    methods: {
        async loadData() {
            if (this.finalPrices.length === 0) {
                // If finalPrices is empty, wait for a short time and retry
                await new Promise(resolve => setTimeout(resolve, 100));
                await this.loadData();
            }
        },
    },
}
</script>

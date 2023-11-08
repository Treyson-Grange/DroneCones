<template>
    <div class="page2">
        <div class="form-list">
            <h1>Order Status</h1>
            <p v-if="orderStatus !=='delivered'">Do not leave the page</p>
            <h2 v-if="orderStatus === 'placed'">Order Placed</h2>
            <h2 v-else-if="orderStatus === 'ready'">Ready</h2>
            <h2 v-else-if="orderStatus === 'in_transit'">In Transit</h2>
            <h2 v-else-if="orderStatus === 'delivered'">Delivered</h2>
            <a style=" width: 250%; display: flex; justify-content: center;" v-if="orderStatus === 'delivered'" href="/order"><button>Back to Order Page</button></a>
        </div>
    </div>
</template>

  <script>
  export default {
    data() {
      return {
        orderStatus: 'placed',
      };
    },
    created() {
      setTimeout(() => {
        this.orderStatus = 'ready';
      }, 3000);
  
      setTimeout(() => {
        this.orderStatus = 'in_transit';
      }, 6000);
  
      setTimeout(() => {
        this.orderStatus = 'delivered';
      }, 9000);
    },
  };
  </script>
  
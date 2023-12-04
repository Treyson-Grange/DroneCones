<script>
  import { supabase } from '../components/lib/supabaseClient'
  import { getUsersItemsInProgress, removeItemInProgress, addTransaction } from '../database/transactionDatabase'
  import { getCones, getIcecreamFlavors, getToppings } from '~/database/stockDatabase'
  import { getDronesForDelivery } from '~/database/droneDatabase';
  // import { Transaction, ItemInProgress } from '../database/databaseTypes'

  // let id = localStorage.getItem('userId')
  // console.log(id)

  // const orderItems = ref([])
  export default {
    data() {
      return {
        loading: true,
        orderItems: [],
        flavors: [],
        cones: [],
        toppings: [],
        subtotal: 0,
        tax: 0,
        total: 0,
        id: localStorage.getItem('userID') || 'Data not set yet',
        formData: {
          cardName: '',
          cardNumber: '',
          cardExpiration: '',
          securityCode: '',
          address: '',
          apt: '',
          city: '',
          state: '',
          zip: '',
        },
        errorMessage: ''
      };
    },
  
    async mounted() {
      await getUsersItemsInProgress(this.id).then(data => {
        this.orderItems.value = data
        for (let datum of data) {
          this.orderItems.push(datum)
          this.subtotal += datum.price
        }
      });
      await getIcecreamFlavors().then(data => {
        for (let flavor of data) {
          this.flavors[flavor.id] = flavor.name
          
        }
      })
      await getToppings().then(data => {
        for (let topping of data) {
          this.toppings[topping.id] = topping.name
        }
      })
      await getCones().then(data => {
        for (let cone of data) {
          this.cones[cone.id] = cone.name
        }
      });
      this.getTax()
      this.getTotal()
      this.loading=false

    },
    methods: {
      getTax() {
        this.tax = parseFloat((this.subtotal * .07).toFixed(2))
      },
      getTotal() {
        this.total = this.subtotal + this.tax
      },
      async placeOrder() {
        let drones = []
        await getDronesForDelivery(this.orderItems.length).then(data => {
          if (data != null) drones = data
          else {
            this.errorMessage = "Cannot order right now"
          }
        })
        let ID=0;
        console.log(`{completed: ${false}, final_price: ${this.total}, item_count: ${this.orderItems.length}, sales_price: ${this.subtotal}, tax: ${this.tax}, user_id: ${this.id}}, drones: ${drones}`)
        await addTransaction({completed: false, final_price: this.total, item_count: this.orderItems.length, sales_price: this.subtotal, tax: this.tax, user_id: this.id}, drones).then(
          data => ID= data,
          )
        console.log(this.id);
        console.log(ID);
        localStorage.setItem('orderID', ID);
        for(let i = 0; i < this.orderItems.length; i++) {
          await removeItemInProgress(this.orderItems[i].id)
        }
        window.location = '/orderPlaced';

      },
      async removeItem(item) {
        let index = this.orderItems.indexOf(item)
        this.orderItems.splice(index, 1)
        this.subtotal -= item.price
        this.getTax()
        this.getTotal()
        await removeItemInProgress(item.id)
      }
      
    }
    
  };
</script>

<template>
    <div class="checkout">
      <h2>Your Cart</h2>
      <div v-if="loading">
        Loading...
      </div>
      <div v-else class="order" v-for="item in orderItems">
        <div class="order-item">
          <div class="item-container">
            <p v-if="item.cone != null">{{ cones[item.cone] }}</p>
            <p v-if="item.flavor1 != null">Scoop 1: {{ flavors[item.flavor1] }}</p>   
            <p v-if="item.flavor2 != null">Scoop 2: {{ flavors[item.flavor2] }}</p>
            <p v-if="item.flavor3 != null">Scoop 3: {{ flavors[item.flavor3] }}</p>
            <p v-if="item.topping != null">Topping: {{ toppings[item.topping] }}</p>
            <p v-if="item.price != null">Price: {{ item.price }}</p>
          </div>
          <div class="delete-container">
            <div class="delete" v-on:click="removeItem(item)">
             x
            </div>
          </div>
        </div>
      </div>
      <h4 id="subtotal">Subtotal: {{ subtotal }}</h4>
      <h4 id="tax">Tax: {{ tax }}</h4>
      <h3 id="total">Your total is ${{ total }}</h3>
      <form v-on:submit="submitForm">
        <div class="form-group payment-input">
          <label for="card-name">Name on card</label>
          <input type="text" id="card-name" v-model="formData.cardName" required/>
        </div>
        <div class="form-group payment-input">
          <label for="card-number">Card Number</label>
          <input type="text" id="card-number" v-model="formData.cardNumber" required/>
        </div>
        <div class="form-row centered payment-input">
          <div class="form-group">
            <label for="card-expiration">Card Expiration</label>
            <input type="text" id="card-expiration" v-model="formData.cardExpiration" required/>
          </div>
          <div class="form-group payment-input">
            <label for="security-code">Security code</label>
            <input type="text" id="security-code" v-model="formData.securityCode" required/>
          </div>
        </div>
        <div class="form-row centered payment-input">
          <div class="form-group address">
            <label for="address">Address Line 1</label>
            <input type="text" id="address" v-model="formData.address" required/>
          </div>
          <div class="form-group apt payment-input">
            <label for="apt">Apt #</label>
            <input type="text" id="apt" v-model="formData.apt" />
          </div>
        </div>
        <div class="form-group payment-input">
          <label for="city">City</label>
          <input type="text" id="city" v-model="formData.city" required/>
        </div>
        <div class="form-group payment-input">
          <label for="state">State</label>
          <input type="text" id="state" v-model="formData.state" required/>
        </div>
        <div class="form-group payment-input">
          <label for="zip">Zip code</label>
          <input type="text" id="zip" v-model="formData.zip" required/>
        </div>
        <div class="form-group centered payment-input">
          <button class="place-order-button" type="submit" v-on:submit="placeOrder()">Order</button>
          <p id="error_message">{{ errorMessage }}</p>
        </div>
      </form>
    </div>
</template>

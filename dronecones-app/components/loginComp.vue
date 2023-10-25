<script setup>
  import { supabase } from '../components/lib/supabaseClient';

  const formData = {
    email: '',
    password: ''
  };
  function redirectToProfilePage(user) {
    //Get user from db
    //set is as a varialbe. I think you can use vuex
    //redirect to profile
    window.location.href = '/order';
  }

  function navigateToRegister(){
    window.location.href = '/register'
  }
    //Write a function that validates login, and forwards to corresponding page. 
  async function attemptLogin() {
    
    console.log(formData.email);
    
    const { data, error } = await supabase.auth.signInWithPassword({
      email: formData.email,
      password: formData.password, 
    })

    console.log("asdf")
    if (error) {
      console.error('Login error:', error.message);
    } else {
      console.log('Logged in as', data); 
      redirectToProfilePage();         // Redirect or perform actions after a successful login
    }
  }
</script>
<!-- <script setup>
import { supabase } from '../components/lib/supabaseClient';

const formData = {
  email: '',
  password: '',
};

async function attemptLogin() {
  // Your login logic here

  if (/* login is successful */) {
    redirectToProfilePage(/* user data */);
  } else {
    console.error('Login failed.');
  }
}
</script> -->
<template>
  <div class="page">
    <div class="login">
      <h2>Login</h2>
      <form @submit.prevent="attemptLogin">
        <div class="form-group">
          <label for="email">Email:</label>
          <input type="email" id="email" v-model="formData.email" />
        </div>
        <div class="form-group">
          <label for="password">Password:</label>
          <input type="password" id="password" v-model="formData.password" />
        </div>
        <div class="spacer">
          <button type="submit" @click="navigateToRegister">Register</button>
          <button
            style="background-color: var(--accent-color); color: var(--font-accent)"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  </div>
</template>



  
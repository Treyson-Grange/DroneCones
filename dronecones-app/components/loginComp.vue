<script setup>
  import { supabase } from '../components/lib/supabaseClient';

  const formData = {
    email: '',
    password: ''
  };
  
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
      console.log('Logged in as', data);          // Redirect or perform actions after a successful login
    }
  }
</script>

<template>
    <div class = "page">
      <div class="login">
        <h2>Login</h2>
        <form v-on:submit="attemptLogin">
          <div class="form-group">
            <label for="email">Email:</label>
            <input type="email" id="email" v-model="formData.email"/>
          </div>
          <div class="form-group">
            <label for="password">Password:</label>
            <input type="password" id="password" v-model="formData.password"/>
          </div>
          <div class = "spacer">
            <button type = "submit" formaction = "register">Register</button>
            <button 
            style="background-color: var(--accent-color); color: var(--font-accent)"
            type="submit">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  </template>


  
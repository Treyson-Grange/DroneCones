<template>
    <div class="login">
        <h2>Login</h2>
        <form>
          <div class="form-group">
            <label for="email">Email:</label>
            <input type="email" id="email" />
          </div>
          <div class="form-group">
            <label for="password">Password:</label>
            <input type="password" id="password" />
          </div>
          <div class = "spacer">
            <button type = "submit" formaction = "register">Register</button>
            <button 
            style="background-color: var(--accent-color); color: var(--font-accent)"
            type="submit" @click="attemptLogin">
              Login
            </button>
          </div>
        </form>
    </div>
  </template>

<script setup lang="ts">
  
    //Write a function that validates login, and forwards to corresponding page. 
    function attemptLogin() {
      console.log("asdf");
      //Grab from database
      //if user is real
        //forward to thing based on user info.
      //if user is not real
        //error on screen
    }
</script>


  
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
        <button type="submit" @click="attemptLogin">Login</button><br><br>
        
      </form>
      <a href="register"><button>Register</button></a>
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


  
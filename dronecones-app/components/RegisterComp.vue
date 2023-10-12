<script setup>
import { addUser } from '../database/userDatabase.ts';
import { supabase } from '../components/lib/supabaseClient'
import { db } from '../database/db'



async function registerUser(email, password) {
  console.log("got herer lmao")
      try {
        const { user, error } = await supabase.auth.signUp({
          email: email,
          password: password,
        });
        if (error) {
          console.error(error.message);
        } else {
          console.log("User registered:", user);
        }
      } catch (error) {
        console.error("Error registering user:", error);
      }
    };

const formData = {
  username: '',
  email: '',
  password: '',
  errors: {
    username: '',
    email: '',
    password: '',
  },
};


const submitForm = () => {
    registerUser(formData.email.toString(), formData.password.toString());
    //This 1 needs to be incremented based on return
    addUser(1, 2, formData.username.toString(), "test" , "last", formData.email.toString());
    console.log("AHFKLJLKFJKSDF:");

};
</script>

<script>

</script>

<template>
  <div class="login">
    <h2>Login</h2>
    <form v-on:submit="submitForm">
      <div class="form-group">
        <label for="username">Username:</label>
        <input type="text" id="username" v-model="formData.username" />
        <span class="error">{{ formData.errors.username }}</span>
      </div>
      <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="formData.email" />
        <span class="error">{{ formData.errors.email }}</span>
      </div>
      <div class="form-group">
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="formData.password" />
        <span class="error">{{ formData.errors.password }}</span>
      </div>
      <button type="submit">register</button><br><br>
    </form>
  </div>
</template>

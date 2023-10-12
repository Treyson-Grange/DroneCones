<template>
    <div class="login">
      
      <h2>Register</h2>
      <form>
        <div class="form-group">
            <label for="username">Username:</label>
            <input type="username" id="username" />
        </div>
        <div class="form-group">
          <label for="email">Email:</label>
          <input type="email" id="email"/>
        </div>
        <div class="form-group">
          <label for="password">Password:</label>
          <input type="password" id="password"/>
        </div>
        <button type="submit">Login</button>
        <button type = "submit" formaction = "register">Register</button>
      </form>
    </div>
  </template>
  
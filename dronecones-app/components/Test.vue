<template>
    <div>
      <p>Data from localStorage: {{ myData }}</p>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        myData: localStorage.getItem('userID') || 'Data not set yet',
      };
    },
  };
  </script>
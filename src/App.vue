<template>
  <div>
    <div class="wrapper">
      <Navbar/>
       <router-view/>
    </div>
  </div>
</template>

<script setup>
import Navbar from './components/Navbar/Navbar.vue';
</script>

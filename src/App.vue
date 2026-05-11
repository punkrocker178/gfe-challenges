<script setup lang="ts">
import '@/styles/style.css';
</script>

<template>
  <nav class="navbar">
    <div class="container mx-auto flex hidden">
      <h1 class="logo">GFE</h1>
      <ul class="nav-links flex flex-row gap-4 items-center">
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/products">Products</router-link></li>
      </ul>
    </div>
  </nav>
  <div class="container mx-auto">
    <router-view />
  </div>
</template>

<style scoped></style>

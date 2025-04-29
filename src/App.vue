<script setup lang="ts"></script>

<template>
  <nav>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/todo">Todo</RouterLink>
    <RouterLink to="/solo">Solo</RouterLink>
    <RouterLink to="/multi">Multi</RouterLink>
  </nav>
  <RouterView />
</template>

<style scoped>
nav {
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
}
</style>

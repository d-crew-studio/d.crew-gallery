<script setup lang="ts">

</script>

<template>
  <header class="fixed top-0 left-0 w-full z-50 py-5">
    <div class="container">
      <div class="flex justify-between items-center">
        <NuxtLink to="/">
          <NuxtImg src="svg/logo-deeple.svg" alt="logo" class="w-10 mr-2" />
        </NuxtLink>

        <div class="flex items-center gap-4">
          <NuxtLink to="/collections">Collections</NuxtLink>
          <NuxtLink to="/about">About</NuxtLink>
        </div>

        <div class="flex items-center gap-4">
          <button class="bg-accent text-white px-4 py-2 rounded-md">
            Login
          </button>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>

</style>
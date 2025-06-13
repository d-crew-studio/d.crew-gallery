<script setup lang="ts">
  const LenisOptions = {
    smooth: true,
    duration: 1.2,
    autoRaf: true,
    direction: 'vertical'
  }
</script>

<template>
  <lenis id="default" :options="LenisOptions">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </lenis>
</template>

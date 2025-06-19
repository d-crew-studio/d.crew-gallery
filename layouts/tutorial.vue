<script lang="ts">

</script>

<template>
  <div>
    <AppHeader />
    <main class="relative min-h-screen flex flex-row flex-wrap">
      <TutorialAnchors />
      <slot />
      <TutorialSidebar />
    </main>
    <AppFooter />
  </div>
</template>

<script setup lang="ts">

  const code = `
  <div class='container'>
    <div class='card'>
      <h1>Hello World</h1>
    </div>
  </div>
  `
</script>

<template>
  <div class="mt-20">
    <h3 class="text-[40px] mb-5">HTML Structure</h3>

    <p class="text-[16px] leading-[1.25] mb-5">
      The HTML structure for this effect is fairly straightforward. All cards are placed inside a container that’s centered both horizontally and vertically.
    </p>


    <TutorialCode :code="code" language="html" showCopyButton />
  </div>
</template>
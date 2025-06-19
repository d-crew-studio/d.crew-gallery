<script setup lang="ts">
  definePageMeta({
    layout: 'tutorial',
  });

  const collections = ref([
    {
      id: 1,
      name: "Collection 1",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      name: "Collection 2",
      image: "https://via.placeholder.com/150",
    },
  ]);
</script>

<template>
  <!-- <AppBgStripes /> -->

  <div class="relative z-2 pt-20 lg:pt-32">
    <h1 class="heading text-center mb-20">Collections</h1>

    <section class="flex flex-col">
      <CollectionsTile v-for="collection in collections" :key="collection.id" :collection="collection" />
    </section>
  </div>
</template>

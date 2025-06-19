<template>
  <div>
    <div class="h-[12vh] w-screen fixed bottom-0 left-0 z-10">
      <div
        v-for="index in 8"
        :key="index"
        :style="{
          position: 'absolute',
          inset: 0,
          zIndex: index,
          backdropFilter: `blur(${[0.5, 0.5625, 1.125, 2.25, 4.5, 9, 18, 36][index-1]}px)`,
          WebkitBackdropFilter: `blur(${[0.5, 0.5625, 1.125, 2.25, 4.5, 9, 18, 36][index-1]}px)`,
          maskImage: 'linear-gradient(to bottom, ' + [
            'rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 12.5%, rgba(0, 0, 0, 1) 25%, rgba(0, 0, 0, 0) 37.5%',
            'rgba(0, 0, 0, 0) 12.5%, rgba(0, 0, 0, 1) 25%, rgba(0, 0, 0, 1) 37.5%, rgba(0, 0, 0, 0) 50%',
            'rgba(0, 0, 0, 0) 25%, rgba(0, 0, 0, 1) 37.5%, rgba(0, 0, 0, 1) 50%, rgba(0, 0, 0, 0) 62.5%',
            'rgba(0, 0, 0, 0) 37.5%, rgba(0, 0, 0, 1) 50%, rgba(0, 0, 0, 1) 62.5%, rgba(0, 0, 0, 0) 75%',
            'rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 1) 62.5%, rgba(0, 0, 0, 1) 75%, rgba(0, 0, 0, 0) 87.5%',
            'rgba(0, 0, 0, 0) 62.5%, rgba(0, 0, 0, 1) 75%, rgba(0, 0, 0, 1) 87.5%, rgba(0, 0, 0, 0) 100%',
            'rgba(0, 0, 0, 0) 75%, rgba(0, 0, 0, 1) 87.5%, rgba(0, 0, 0, 1) 100%',
            'rgba(0, 0, 0, 0) 87.5%, rgba(0, 0, 0, 1) 100%'
          ][index-1] + ')',
          WebkitMaskImage: 'linear-gradient(to bottom, ' + [
            'rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 12.5%, rgba(0, 0, 0, 1) 25%, rgba(0, 0, 0, 0) 37.5%',
            'rgba(0, 0, 0, 0) 12.5%, rgba(0, 0, 0, 1) 25%, rgba(0, 0, 0, 1) 37.5%, rgba(0, 0, 0, 0) 50%',
            'rgba(0, 0, 0, 0) 25%, rgba(0, 0, 0, 1) 37.5%, rgba(0, 0, 0, 1) 50%, rgba(0, 0, 0, 0) 62.5%',
            'rgba(0, 0, 0, 0) 37.5%, rgba(0, 0, 0, 1) 50%, rgba(0, 0, 0, 1) 62.5%, rgba(0, 0, 0, 0) 75%',
            'rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 1) 62.5%, rgba(0, 0, 0, 1) 75%, rgba(0, 0, 0, 0) 87.5%',
            'rgba(0, 0, 0, 0) 62.5%, rgba(0, 0, 0, 1) 75%, rgba(0, 0, 0, 1) 87.5%, rgba(0, 0, 0, 0) 100%',
            'rgba(0, 0, 0, 0) 75%, rgba(0, 0, 0, 1) 87.5%, rgba(0, 0, 0, 1) 100%',
            'rgba(0, 0, 0, 0) 87.5%, rgba(0, 0, 0, 1) 100%'
          ][index-1] + ')',
          borderRadius: '12px',
          pointerEvents: 'none'
        }"
        class="w-full h-full"
      />
    </div>
    <div class="h-1/2 w-screen fixed bottom-0 left-0" />
  </div>
</template>

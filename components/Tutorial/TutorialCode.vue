<script setup lang="ts">
  import Prism from 'prismjs';
  import '~/assets/css/prism-one-dark.css';

  interface Props {
    code: string;
    language?: string;
    showCopyButton?: boolean;
  }

  const props = withDefaults(defineProps<Props>(), {
    language: 'javascript',
    showCopyButton: true
  });

  const codeElement = ref<HTMLElement>();

  onMounted(() => {
    if (codeElement.value) {
      Prism.highlightElement(codeElement.value);
    }
  });

  const copyCode = () => {
    if (props.code) {
      navigator.clipboard.writeText(props.code);
    }
  };
</script>

<template>
  <div class="mt-5 relative">
    <button 
      v-if="showCopyButton" 
      class="bg-dark-gray h-10 w-10 flex items-center justify-center rounded-md absolute top-4 right-4 z-10" 
      @click="copyCode"
    >
      <Icon name="deeple:copy" class="w-4 h-4" />
    </button>
    <pre class="relative">
      <code 
        ref="codeElement"
        :class="`language-${language}`"
      >{{ code }}</code>
    </pre>
  </div>
</template>
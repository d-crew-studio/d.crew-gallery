export interface CodeBlock {
  code: string;
  language: string;
  title?: string;
  description?: string;
}

export interface CodeSection {
  id: string;
  title: string;
  description?: string;
  codeBlocks: CodeBlock[];
}

export const useCodeBlocks = () => {
  // Example code blocks data
  const codeSections = ref<CodeSection[]>([
    {
      id: 'basic-setup',
      title: 'Basic Setup',
      description: 'Get started with the basic configuration',
      codeBlocks: [
        {
          code: `const app = createApp({
  data() {
    return {
      message: 'Hello Vue!'
    }
  }
})`,
          language: 'javascript',
          title: 'Vue App Creation',
          description: 'Create a basic Vue application'
        },
        {
          code: `<template>
  <div id="app">
    <h1>{{ message }}</h1>
  </div>
</template>`,
          language: 'vue',
          title: 'Template Structure',
          description: 'Basic template with data binding'
        }
      ]
    },
    {
      id: 'advanced-features',
      title: 'Advanced Features',
      description: 'Learn about advanced Vue features',
      codeBlocks: [
        {
          code: `import { ref, computed } from 'vue'

const count = ref(0)
const doubleCount = computed(() => count.value * 2)

const increment = () => {
  count.value++
}`,
          language: 'javascript',
          title: 'Composition API',
          description: 'Using refs and computed properties'
        }
      ]
    }
  ]);

  // Get code section by ID
  const getCodeSection = (id: string) => {
    return codeSections.value.find(section => section.id === id);
  };

  // Get all code sections
  const getAllCodeSections = () => {
    return codeSections.value;
  };

  // Add new code section
  const addCodeSection = (section: CodeSection) => {
    codeSections.value.push(section);
  };

  // Update code section
  const updateCodeSection = (id: string, updates: Partial<CodeSection>) => {
    const index = codeSections.value.findIndex(section => section.id === id);
    if (index !== -1) {
      codeSections.value[index] = { ...codeSections.value[index], ...updates };
    }
  };

  // Remove code section
  const removeCodeSection = (id: string) => {
    const index = codeSections.value.findIndex(section => section.id === id);
    if (index !== -1) {
      codeSections.value.splice(index, 1);
    }
  };

  return {
    codeSections: readonly(codeSections),
    getCodeSection,
    getAllCodeSections,
    addCodeSection,
    updateCodeSection,
    removeCodeSection
  };
}; 
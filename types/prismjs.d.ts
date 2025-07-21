declare module 'prismjs' {
  export function highlightElement(element: HTMLElement): void;
  export function highlightAll(): void;
  export function highlight(code: string, grammar: any, language: string): string;
} 
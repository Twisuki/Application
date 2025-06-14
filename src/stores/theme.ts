import { defineStore } from "pinia";
import { ref, watchEffect } from "vue";

export const useThemeStore = defineStore('theme', () => {
  const mode = ref<'light' | 'dark'>(
    typeof localStorage !== 'undefined'
      ? (localStorage.getItem('theme') as 'light' | 'dark') || 'light'
      : 'light'
  );

  const colors = {
    light: {
      '--text': '#000000',
      '--bgc': '#ffffff',

      '--navbar-bgc': '#ffffff',
      '--sidebar-bgc': '#ffffff',
      '--sidebar-backdrop-bgc': '#55555555',
      '--footer-bgc': '#eeeeee',

      '--a-color': '#00bd7e',
      '--a-underline-color': '#0cc739',

      '--btn-bgc': '#1eb88e',
      '--btn-hover-bgc': '#26c49a',

      '--text-dark': '#222222',
      '--text-dark-gray': '#aaaaaa',
      '--text-gray': '#cccccc',
      '--text-light': '#ffffff',

      '--primary': '#52b394',
      '--primary-light': '#5bd2aa',
    },
    dark: {
      '--text': '#dddddd',
      '--bgc': '#1a1a1a',

      '--navbar-bgc': '#1a1a1a',
      '--sidebar-bgc': '#1a1a1a',
      '--sidebar-backdrop-bgc': '#22222288',
      '--footer-bgc': '#0b0b0b',

      '--a-color': '#00bd7e',
      '--a-underline-color': '#0cc739',

      '--btn-bgc': '#1eb88e',
      '--btn-hover-bgc': '#26c49a',

      '--text-dark': '#dddddd',
      '--text-dark-gray': '#777777',
      '--text-gray': '#555555',
      '--text-light': '#000000',

      '--primary': '#52b394',
      '--primary-light': '#5bd2aa',
    }
  }
// 应用主题的函数（提取为独立函数）
  const applyTheme = () => {
    const root = document.documentElement;
    const themeColors = colors[mode.value];

    Object.entries(themeColors).forEach(([key, value]) => {
      root.style.setProperty(key, value);
    });

    localStorage.setItem('theme', mode.value);
  };

  // 初始化时立即应用（解决刷新问题）
  if (typeof document !== 'undefined') {
    applyTheme();
  }

  // 监听主题变化
  watchEffect(() => {
    applyTheme();
  });

  const toggleTheme = () => {
    mode.value = mode.value === 'light' ? 'dark' : 'light';
  };

  return { mode, toggleTheme };
})

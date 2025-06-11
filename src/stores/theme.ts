import { defineStore } from "pinia";
import { ref, watchEffect } from "vue";

export const useThemeStore = defineStore('theme', () => {
  const mode = ref<'light' | 'dark'>('light')

  const colors = {
    light: {
      '--text': '#000000',
      '--bgc': '#ffffff',

      '--navbar-bgc': '#ffffff',

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

  // 切换主题
  const toggleTheme = () => {
    mode.value = mode.value === 'light' ? 'dark' : 'light'
  }

  // 监听主题变化并应用到根元素
  watchEffect(() => {
    const root = document.documentElement
    const themeColors = colors[mode.value]

    Object.entries(themeColors).forEach(([key, value]) => {
      root.style.setProperty(key, value)
    })

    // 可选：保存到 localStorage
    localStorage.setItem('theme', mode.value)
  })

  // 初始化时检查 localStorage
  const savedTheme = localStorage.getItem('theme')
  if (savedTheme === 'light' || savedTheme === 'dark') {
    mode.value = savedTheme
  }

  return { mode, toggleTheme }
})

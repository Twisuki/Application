// src/stores/useAppStore.js

import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
  state: () => ({
    user: null,
    darkMode: false,
    docCategories: []
  }),
  actions: {
    setUser(user) {
      this.user = user
    },
    toggleDarkMode() {
      this.darkMode = !this.darkMode
    },
    async fetchDocCategories() {
      this.docCategories = await fetch('/api/categories').then(res => res.json())
    }
  },
  getters: {
    isAuthenticated: state => !!state.user,
    getCategoryById: state => id => state.docCategories.find(cat => cat.id === id)
  }
})

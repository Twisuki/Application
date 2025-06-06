// src/store/index.js

import { createStore } from 'vuex'

export default createStore({
  state: {
    user: null,
    darkMode: false,
    docCategories: []
  },
  mutations: {
    setUser(state, user) {
      state.user = user
    },
    toggleDarkMode(state) {
      state.darkMode = !state.darkMode
    },
    setDocCategories(state, categories) {
      state.docCategories = categories
    }
  },
  actions: {
    async fetchDocCategories({ commit }) {
      const categories = await fetch('/api/categories').then(res => res.json())
      commit('setDocCategories', categories)
    }
  },
  getters: {
    isAuthenticated: state => !!state.user,
    getCategoryById: state => id => state.docCategories.find(cat => cat.id === id)
  }
})

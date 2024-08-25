import { defineStore } from 'pinia'

export const useStore = defineStore('storeIndex', {
  state: () => (
    { 
      titleApp: "Exercie à la con, mais pas si con"
    }
  ),
  getters: {
    double: state => state.count * 2,
  },
  actions: {
    increment() {
      this.count++
    },
  },
})
import { defineStore } from 'pinia'

export const useStoreInStore = defineStore('storeInStore', {
  state: () => (
    {
      tasks: [],
    }
  ),
  actions: {
    addTask(task) {
      this.tasks.push(task);
    },
    removeTask(index) {
      this.tasks.splice(index, 1);
    },
  },
})

import { defineStore } from 'pinia'
import { ref, computed } from 'vue';

export const useStoreInStore = defineStore('storeInStore', () => {
  // STATE
  const tasks = ref([]);

  // ACTIONS
  const addTask = (task) => {
    tasks.value.push(task)
  }
  const removeTask = (index) => {
    tasks.value.splice(index, 1);
  }

  return { tasks, addTask, removeTask, displayOldestDate }
})

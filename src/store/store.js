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

  // GETTERS
  const displayOldestDate = computed(() => {  
    if (tasks.value.length === 0) return null;
    return tasks.value.reduce((oldest, current) => {
      return new Date(current.dateTask) < new Date(oldest.dateTask) ? current : oldest;
    });
  });

  return { tasks, addTask, removeTask, displayOldestDate }
})

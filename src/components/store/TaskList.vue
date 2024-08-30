<template>
    <div class="d-flex justify-space-between w-100 pa-3 mb-3 rounded-lg item-list"  v-for="(task, index) in tasks" :key="index">
        <div class="text">
            {{ task }} 
        </div>
        <button @click="removeTask(index)">
            <v-icon icon="mdi-delete"></v-icon>
        </button>
    </div>
</template>
  
<script>
import { useStoreInStore } from '@/store/store';

export default {
    setup() {
        const taskStore = useStoreInStore();
        const tasks = taskStore.tasks;

        const removeTask = (index) => {
            taskStore.removeTask(index);
        };

        return { tasks, removeTask };
    },
};
</script>
<style scoped>
.item-list {
    background-color: #2f2f2f;
}
</style>
<template>
    <div 
        class="d-flex justify-space-between w-100 pa-3 mb-3 rounded-lg bg-grey-lighten-4 text-grey-darken-3" 
        
        v-for="(task, index) in tasksList":key="index"
    >
        <div class="text">
            {{ task }}
        </div>
        <button @click="removeTask(index)">
            <v-icon icon="mdi-delete"></v-icon>
        </button>
    </div>
</template>

<script setup>
import { useStoreInStore } from '@/store/store';

const store = useStoreInStore();

const props = defineProps({
    tasksList: {
        type: Object,
        require: true,
    }
})


const removeTask = (index) => {
    store.removeTask(index);
};

</script>

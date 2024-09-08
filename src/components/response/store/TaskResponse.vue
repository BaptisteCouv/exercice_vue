<template>
    <div class="d-flex w-100">
      <v-text-field
        v-model="newTask"
        class="txt-field"
        label="Ajouter une tâche"
        variant="outlined"
        @keyup.enter="addTask"
      ></v-text-field>
      <v-btn icon="mdi-plus" class="ml-4" @click="addTask"></v-btn>
    </div>
  </template>
  
  <script setup>
  import { ref } from "vue";
  import { useStoreInStore } from "@/store/store";
  
  const newTask = ref("");
  const taskStore = useStoreInStore();
  
  const addTask = () => {
    if (newTask.value.trim() !== "") {
      taskStore.addTask(newTask.value.trim());
      newTask.value = "";
    }
  };
  
  </script>
  
  <style scoped>
  .txt-field {
    width: 250px;
  }
  </style>
  
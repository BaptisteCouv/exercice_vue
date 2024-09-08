<template>
  <v-container class="d-flex align-center" fluid>
    <v-row class="d-flex justify-center" no-gutters>
      <v-col cols="6" class="d-flex flex-column align-center pa-10">
        <h1 class="mb-4">Gestionnaire de tâches</h1>
        <TaskInput />
        <TaskList />
      </v-col>
      <v-col
        v-if="store.isSolutionActive"
        cols="6"
        class="d-flex flex-column align-center pa-10"
        backgroundColor="#212020"
      >
        <TaskResponse />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import TaskInput from "@/components/store/TaskInput.vue";
import TaskList from "@/components/store/TaskList.vue";

import { useStore } from "@/store/index.js";

const store = useStore();
</script>

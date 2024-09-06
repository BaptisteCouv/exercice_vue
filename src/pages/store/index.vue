<template>
  <v-container
      class="d-flex align-center"
  >
  <v-row
    class="d-flex justify-center"
    no-gutters
  >
    <v-col
      cols="5"
      class="d-flex flex-column align-center"
    >
      <h1 class="mb-4">Gestionnaire de tâches</h1>
      <!-- ENFANT -->
      <TaskInput />
      <TaskList />
    </v-col>
  </v-row>
</v-container>
</template>


<script>
import TaskInput from '@/components/store/Taskinput.vue';
import TaskList from '@/components/store/TaskList.vue';

export default {
  components: {
    TaskInput,
    TaskList,
  },
};
</script>


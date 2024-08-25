<template>
  <v-app-bar :elevation="2">
    <template v-slot:prepend>
      <v-img
        class="ml-3"
        :width="30"
        src="/src/assets/Pinialogo.svg"
      ></v-img>
    </template>
    <v-app-bar-title> {{ useStore.titleApp }} </v-app-bar-title>
    <template v-slot:append>
      <div class="d-flex">
        <v-btn variant="outlined" class="btn-header"> Exercice 1</v-btn>
        <v-btn variant="outlined" class="btn-header"> Exercice 2</v-btn>
        <v-btn variant="outlined" class="btn-header"> Exercice 3</v-btn>
      </div>
    </template>
  </v-app-bar>
</template>
<script>
import { useStore } from "@/store/index.js";

export default {
  data() {
    return {
      useStore: useStore(),
    };
  },
};
</script>
<style scoped>
.btn-header {
  margin-right: 20px;
}
</style>

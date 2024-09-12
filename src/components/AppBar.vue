<template>
  <v-app-bar :elevation="2">
    <v-app-bar-nav-icon
      variant="text"
      @click.stop="drawer = !drawer"
    ></v-app-bar-nav-icon>
    <v-app-bar-title @click="$router.push('/')" class="cursor-pointer">
      <v-img width="55" src="@/assets/logo-classic.png"></v-img>
    </v-app-bar-title>
    <template v-slot:append>
      <v-btn
        :color="store.isSolutionActive ? 'green' : 'red'"
        :prepend-icon="
          store.isSolutionActive
            ? 'mdi-lightbulb-outline'
            : 'mdi-lightbulb-off-outline'
        "
        variant="outlined"
        @click="store.changeSolutionActive()"
      >
        Solution
        <v-tooltip activator="parent" location="start">Affiche la solution aux exercices si elle est active</v-tooltip>
      </v-btn>
    </template>
  </v-app-bar>
  <v-navigation-drawer
    v-model="drawer"
    :location="$vuetify.display.mobile ? 'bottom' : undefined"
    temporary
  >
    <v-list-item
      prepend-icon="mdi-home"
      title="Maison"
      value="home"
      @click="$router.push('/')"
    ></v-list-item>
    <v-list-item
      prepend-icon="mdi-fruit-pineapple"
      title="Les stores"
      value="stores"
      @click="$router.push('/store')"
    ></v-list-item>
  </v-navigation-drawer>
</template>

<script setup>
import { ref } from "vue";
import { useStore } from "@/store/index.js";

const store = useStore();
const drawer = ref(false);
</script>
<style scoped>
.btn-header {
  margin-right: 20px;
}
</style>

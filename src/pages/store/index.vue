<template>
  <v-container class="d-flex align-center" fluid>
    <v-row class="d-flex justify-center" no-gutters>
      <v-col cols="12" md="12" lg="6" class="pa-10">
        <v-row>
          <v-col cols="12">
            <v-alert border="start" color="green-darken-2" icon="$vuetify" prominent
              title="Exercice 1 : Liste de tâches"
              text="Vous disposez d'une liste de tâches déjà fonctionnelle. Prenez le temps de vous familiariser avec le code et n'hésitez pas à explorer les différentes parties pour comprendre la gestion des composants, ainsi que l'utilisation du store avec Pinia. Après avoir bien analysé le code, vous pourrez commencer par réaliser deux petites tâches afin de vous entraîner." />
          </v-col>
          <v-col cols="12">
            <v-alert border="start" color="green-lighten-1" icon="mdi-bookshelf" prominent
              title="1. Enregistrer la date et l'heure lors de l'ajout d'une tâche :"
              text="Lorsque vous ajoutez une nouvelle tâche à la liste, assurez-vous que la date et l'heure actuelles sont également enregistrées avec cette tâche. Et affichez la date à côté de l'icon supprimer." />
          </v-col>
          <v-col cols="12">
            <v-alert border="start" color="green-lighten-1" icon="mdi-bookshelf" prominent
              title="2. Afficher la tâche la plus ancienne sur la page d'accueil :"
              text="Sur la page d'accueil, affichez en priorité la tâche la plus ancienne, c'est-à-dire celle qui a été ajoutée en premier." />
          </v-col>
          <!-- <v-col cols="12">
            <v-alert border="start" color="green-lighten-1" icon="mdi-bookshelf" prominent
              title="3. Corriger le problème de persistance des données entre les pages :"
              text="Vous avez peut-être remarqué que lorsque vous changez de page et revenez à la liste de tâches, les données ne s'affichent plus correctement, bien qu'elles soient encore présentes dans le store Pinia. Vérifiez pourquoi les données ne sont pas visibles et implémentez une solution pour que les tâches s'affichent correctement même après un changement de page." />
          </v-col> -->
        </v-row>
        <v-row class="mt-10">
          <h1 class="mb-4">Gestionnaire de tâches</h1>
          <TaskInput />
          <TaskList :tasksList="store.tasks"/>
        </v-row>
      </v-col>
      <v-col v-if="storeIndex.isSolutionActive" cols="12" md="12" lg="6" class="pa-10">
        <TaskResponse />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import TaskInput from "@/components/store/TaskInput.vue";
import TaskList from "@/components/store/TaskList.vue";
import TaskResponse from "@/components/response/store/TaskResponse.vue";

import { useStore } from "@/store/index.js";
import { useStoreInStore } from '@/store/store';

const store = useStoreInStore();
const storeIndex = useStore();
</script>

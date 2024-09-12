<template>
    <v-row>
        <v-col cols="12">
            <v-alert border="start" color="green-lighten-1" icon="mdi-bookshelf" prominent
                title="1. Enregistrer la date et l'heure lors de l'ajout d'une tâche :"
                text="Lorsque vous ajoutez une nouvelle tâche à la liste, assurez-vous que la date et l'heure actuelles sont également enregistrées avec cette tâche." />
        </v-col>
        <v-col cols="12">
            <v-alert border="start" color="grey-darken-3" icon="mdi-help" prominent title="Aide :"
                text="Il faut se diriger vers le composant qui affiche la liste des tâches, ensuite comprendre le fonctionnement de l'ajout du nom de la tâches dans le store." />
        </v-col>
        <v-col cols="12">
            <p>Pour le composant TaskInput.vue :</p>
            <Spoiler>
                <template #text>
                    <CodeEditor width="100%" :copy-code="false" :value="codeResponseTaskInput"></CodeEditor>
                </template>
            </Spoiler>
        </v-col>
        <v-col cols="12">
            <p>Pour le composant TaskList.vue :</p>
            <Spoiler>
                <template #text>
                    <CodeEditor width="100%" :copy-code="false" :languages="[['html', 'HTML']]"
                        :value="codeResponseTaskList"></CodeEditor>
                </template>
            </Spoiler>
        </v-col>
    </v-row>
    <v-row class="mt-10">
        <v-col cols="12">
            <v-alert border="start" color="green-lighten-1" icon="mdi-bookshelf" prominent
                title="2. Afficher la tâche la plus ancienne sur la page d'accueil :"
                text="Sur la page d'accueil, affichez en priorité la tâche la plus ancienne, c'est-à-dire celle qui a été ajoutée en premier." />
        </v-col>
        <v-col cols="12">
            <v-alert border="start" color="grey-darken-3" icon="mdi-help" prominent title="Aide :"
                text="Il suffier d'aller dans la page d'accueil HomePage.vue, et d'appeler le store pour y afficher la liste des tâches. Maintenant on veut filtrer sur la tâche la plus ancienne, il suffit de créer une méthode ou une propriété calculé dans le store et l'afficher dans la page acceuil" />
        </v-col>
        <v-col cols="12">
            <p>Store à mettre dans la page d'accueil HomePage.vue :</p>
            <Spoiler>
                <template #text>
                    <p class="mb-2">L'exemple si dessous affiche pas la tâche avec le composant TaskList.vue. Mais vous pouvez très bien utiliser le composant TaskList.vue en lui passant en props task.titleTask</p>
                    <CodeEditor width="100%" :copy-code="false" :languages="[['html', 'HTML']]"
                        :value="codeResponseHome"></CodeEditor>
                </template>
            </Spoiler>
        </v-col>
        <v-col cols="12">
            <p>Computed dans le store : </p>
            <Spoiler>
                <template #text>
                    <CodeEditor width="100%" :copy-code="false" :value="codeResponseStore"></CodeEditor>
                </template>
            </Spoiler>
        </v-col>
    </v-row>
</template>

<script setup>
import Spoiler from "@/components/Spoiler.vue";
import { ref } from "vue";

const codeResponseTaskInput = ref(`const addTask = () => {
    if (newTask.value.trim() !== "") {
      const dateTime = new Date();
      // toLocaleDateString('fr-FR') permet de convertir la date
      taskStore.addTask({
        titleTask: newTask.value.trim(),
        dateTask: dateTime.toLocaleDateString('fr-FR')
      });
      newTask.value = "";
    }
  };`)

const codeResponseTaskList = ref(`<!-- class="..." pour éviter d'afficher toutes les classes -->
<div class="..." v-for="(task, index) in store.tasks":key="index">
    <div class="text">
        {{ task.titleTask }}
    </div>
    <div>
        <span>{{ task.dateTask }}</span>
        <button @click="removeTask(index)">
            <v-icon icon="mdi-delete"></v-icon>
        </button>
    </div>
</div>`)

const codeResponseStore = ref(`const displayOldestDate = computed(() => {  
    if (tasks.value.length === 0) return null;
    return tasks.value.reduce((old, cur) => {
      return new Date(cur.dateTask) < new Date(old.dateTask) ? cur : old;
    });
  });`)

  const codeResponseHome = ref(`<div> {{ taskStore.displayOldestDate }} <div/>`)
</script>

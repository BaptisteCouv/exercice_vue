<template>
    <v-row>
        <v-col cols="12">
            <v-alert border="start" color="green-lighten-1" icon="mdi-bookshelf" prominent
                title="1. Enregistrer la date et l'heure lors de l'ajout d'une tâche :"
                text="Lorsque vous ajoutez une nouvelle tâche à la liste, assurez-vous que la date et l'heure actuelles sont également enregistrées avec cette tâche." />
        </v-col>
    </v-row>
    <v-row>
        <v-col cols="12">
            <!-- <v-sheet elevation="4" rounded borde color="grey-darken-3" class="d-flex pa-4">
                Aide : Il faut se diriger vers le composant qui affiche la liste des tâches, ensuite comprendre le fonctionnement de l'ajout du nom de la tâches dans le store. 
            </v-sheet> -->
            <v-alert border="start" color="grey-darken-3" icon="mdi-help" prominent
                title="Aide :"
                text="Il faut se diriger vers le composant qui affiche la liste des tâches, ensuite comprendre le fonctionnement de l'ajout du nom de la tâches dans le store." />
        </v-col>
        <v-col cols="12">
            <Spoiler>
                <template #text>
                    c'est bon pour le moral
                </template>
            </Spoiler>
        </v-col>
    </v-row>
</template>

<script setup>
import Spoiler from "@/components/Spoiler.vue";
</script>

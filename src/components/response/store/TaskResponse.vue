<template>
    <v-row>
        <v-col cols="12">
            <v-alert border="start" color="green-lighten-1" icon="mdi-bookshelf" prominent
                title="1. Enregistrer la date et l'heure lors de l'ajout d'une tâche :"
                text="Lorsque vous ajoutez une nouvelle tâche à la liste, assurez-vous que la date et l'heure actuelles sont également enregistrées avec cette tâche." />
        </v-col>
    </v-row>
</template>

<script setup>
import TaskInput from "@/components/store/TaskInput.vue";
</script>


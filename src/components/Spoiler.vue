<template>
     <v-alert
        class="cursor-pointer"
        density="compact"
        type="warning"
        @click="upHere = !upHere"
    >
        <div v-if="upHere" class="spoiler-slot">
            <slot name="text"></slot>
        </div>
        <div v-else class="spoiler-text">Cliquez pour voir le <span class="font-weight-black">spoiler</span></div>
    </v-alert>   
    <!-- <div class="spolier-area d-flex rounded-lg mx-2 px-2" >
        <div v-if="upHere" class="spoiler-slot">
            <slot name="text"></slot>
        </div>
        <div v-else class="spoiler-text">spoiler</div>
    </div> -->
</template>
<script setup>
import { ref } from "vue";

const upHere = ref(false);
</script>


<template>
  <v-container>
    <v-row>
      <v-col cols="12" class="d-flex justify-center my-4">
        <div>
          <v-img width="300" src="@/assets/logo-hookto.png"></v-img>
        </div>   
      </v-col>
      <v-col cols="6">
        <v-row>
          <v-col cols="12" class="text-center">
            <span class="text-h4">Qu'est ce que CodeWave</span>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" class="text-center">
            <p class="text-subtitle-1 text-justify">
              CodeWave est une plateforme d'apprentissage spécialement conçue
              pour accompagner les débutants dans leur parcours
              de développeur. Avec un focus initial sur Vue.js, et prochainement sur Ruby on Rails, CodeWave propose
              des
              exercices pratiques adaptés à tous les niveaux. Chaque exercice est conçu pour renforcer les compétences
              essentielles, étape par étape, permettant aux utilisateurs de progresser à leur propre rythme.
              Que vous soyez un apprenant curieux de découvrir le développement ou un professionnel cherchant à
              acquérir de
              nouvelles compétences, CodeWave est votre allié pour passer de novice à expert, un exercice à la fois !
            </p>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="6">
        <v-row>
          <v-col cols="12" class="text-center">
            <span class="text-h4">Tâche du jour</span>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" class="text-center">
            <span class="text-subtitle-1 task-of-day">
              <!-- Insérer ici la tache du jour -->
            </span>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
  <!-- <div class="main-title">CodeWave</div> -->

</template>

<style scoped>
.main-title {
  font-size: 4rem;
  display: flex;
  justify-content: center;
}
</style>

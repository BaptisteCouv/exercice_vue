import { defineStore } from "pinia";

export const useStore = defineStore("storeIndex", {
  state: () => ({
    titleApp: "CodeWave",
    isSolutionActive: false,
  }),
  getters: {
    double: (state) => state.count * 2,
  },
  actions: {
    increment() {
      this.count++;
    },
    changeSolutionActive() {
      this.isSolutionActive = !this.isSolutionActive;
    },
  },
});

import { acceptHMRUpdate, defineStore } from "pinia";
import { useSolo } from "./useSolo";

export const useSoloStore = defineStore("soloStore", () => {
  const solo = useSolo();

  return {
    ...solo,
  };
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useSoloStore, import.meta.hot));
}

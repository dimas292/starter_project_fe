import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useOpenStroe = defineStore("open", () => {
  const open = ref(false);
  const initOpen = computed(() => open.value);
  function toOpen() {
    open.value = true;
    console.log(open.value);
  }

  return { open, initOpen, toOpen };
});

<script setup>
import { computed } from "vue";
import { useCustomizerStore } from "@/stores/customizer";
import {RouterLink} from "vue-router";

const customizer = useCustomizerStore();

//const dark = ref(false);
const dark = computed(() => {
  if (
      customizer.actTheme === "DARK_BLUE_THEME" ||
      customizer.actTheme === "DARK_AQUA_THEME" ||
      customizer.actTheme === "DARK_ORANGE_THEME" ||
      customizer.actTheme === "DARK_PURPLE_THEME" ||
      customizer.actTheme === "DARK_GREEN_THEME" ||
      customizer.actTheme === "DARK_CYAN_THEME"
  ) {
    return true;
  } else {
    return false;
  }
});


</script>
<template>

  <div class="logo">
    <RouterLink to="/">
      <img src="@/assets/images/logos/sample.png" height="26" class="mx-2" alt="logo" />
      <img src="@/assets/images/logos/next-to-sample.png" height="26" width="" alt="logo" />
    </RouterLink>
  </div>

</template>

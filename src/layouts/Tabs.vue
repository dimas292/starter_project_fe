<script setup lang="ts">
import Button from "@/components/ui/button/Button.vue";
import { CirclePlus, X } from "lucide-vue-next";

import sidebarMenu from "@/lib/menu";
</script>

<template>
  <div class="flex gap-1 border-b-2 border-[#EAEFEF] h-10 items-center">
    <!-- components tabs -->
    <div
      class="items-center hover:bg-green-50 hover:text-green-800 flex px-2 border-t-rounded border-b-green-500"
      v-for="value in sidebarMenu.navMain"
    >
      <p>{{ value.title }}</p>
      <Button class="hover:text-red-600"><X /></Button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Search, Command } from "lucide-vue-next";
import { Label } from "@/components/ui/label";
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarInput,
} from "@/components/ui/sidebar";
</script>

<template>
  <form v-bind="$attrs">
    <SidebarGroup class="py-0">
      <SidebarGroupContent class="relative text-white">
        <Label for="search" class="sr-only"> Search </Label>
        <SidebarInput
          id="search"
          placeholder="Search..."
          class="pl-8 border-none cursor-pointer bg-[#2C2C2C]"
        />
        <Search
          class="pointer-events-none absolute top-1/2 left-2 size-4 -translate-y-1/2 opacity-50 select-none"
        />
        <Command
          class="pointer-events-none absolute top-1/2 right-4.5 size-4 -translate-y-1/2 opacity-50 select-none"
        />
        <h1
          class="pointer-events-none absolute top-3.5 text-md right-1 size-4 -translate-y-1/2 opacity-50 select-none"
        >
          K
        </h1>
      </SidebarGroupContent>
    </SidebarGroup>
  </form>
</template>

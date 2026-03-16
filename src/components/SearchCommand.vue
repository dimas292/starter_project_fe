<script setup lang="ts">
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import SearchForm from "./ui/SearchForm.vue";

import { useOpenStroe } from "@/stores/searchDisable";

const openSearch = useOpenStroe();

import sidebarMenu from "@/lib/menu";
</script>

<template>
  <button @click="openSearch.toOpen(true)">
    <SearchForm />
  </button>

  <CommandDialog
    :open="openSearch.open"
    @update:open="openSearch.$patch({ open: false })"
  >
    <Command>
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup v-for="value in sidebarMenu.navMain">
          <CommandItem v-for="items in value.items" 
            >{{ items.title }}
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  </CommandDialog>
</template>

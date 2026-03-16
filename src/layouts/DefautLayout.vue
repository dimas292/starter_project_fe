<script setup lang="ts">
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import AppSideBar from "@/components/AppSideBar.vue";
</script>

<template>
  <div>
    <SidebarProvider>
      <AppSideBar />
      <SidebarInset>
        <header
          class="flex h-8 shrink-0 items-center gap-2 border-b border-[var(--line-sidebar)] px-4 justify-between"
        >
          <div class="flex items-center gap-2">
            <SidebarTrigger class="-ml-1" />
            <Separator orientation="vertical" />
          </div>
        </header>
        <main class="m-4 p-6">
          <RouterView />
        </main>
      </SidebarInset>
    </SidebarProvider>
  </div>
</template>

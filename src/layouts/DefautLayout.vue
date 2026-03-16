<script setup lang="ts">
import { Separator } from "@/components/ui/separator";
import { X } from "lucide-vue-next";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import AppSideBar from "@/components/AppSideBar.vue";
import Tabs from "./Tabs.vue";
</script>

<template>
  <div>
    <SidebarProvider>
      <AppSideBar />
      <SidebarInset>
        <header
          class="flex h-10 shrink-0 items-center gap-2 border-b-2 border-[#EAEFEF] px-4 justify-between"
        >
          <div class="flex items-center gap-2">
            <SidebarTrigger class="-ml-1" />
            <Separator orientation="vertical" />
          </div>
        </header>
        <!-- tabs to shortcut move side menu  -->
        <Tabs />
        <main class="bg-[#F8FAFC] h-full">
          <RouterView />
        </main>
      </SidebarInset>
    </SidebarProvider>
  </div>
</template>

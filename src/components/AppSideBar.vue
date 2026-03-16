<script setup lang="ts">
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import { ChevronRight, Database } from "lucide-vue-next";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import SearchCommand from "./SearchCommand.vue";

import sidebarMenu from "@/lib/menu";
</script>

<template>
  <Sidebar>
    <SidebarHeader>
      <img src="../assets/logo.svg" alt="" class="h-16" />
      <h1 class="font-bold p-2 text-2xl">
        Your App <span class="text-sm font-normal">v.0</span>
      </h1>
      <SearchCommand />
    </SidebarHeader>
    <SidebarContent>
      <SidebarGroup v-for="navItem in sidebarMenu.navMain" :key="navItem.title">
        <SidebarGroupContent>
          <SidebarMenu>
            <Collapsible
              asChild
              :default-open="navItem.active"
              class="group/collapsible"
            >
              <SidebarMenuItem>
                <CollapsibleTrigger asChild>
                  <SidebarMenuButton :tooltip="navItem.title" size="md">
                    <component
                      v-if="navItem.icons"
                      :is="navItem.icons"
                      class="mr-2"
                    />
                    <span class="text-md">{{ navItem.title }}</span>
                    <ChevronRight
                      class="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90"
                    />
                  </SidebarMenuButton>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <SidebarMenuSub>
                    <SidebarMenuSubItem
                      v-for="subItem in navItem.items"
                      :key="subItem.title"
                    >
                      <SidebarMenuSubButton asChild size="md">
                        <a :href="subItem.url">
                          <span>{{ subItem.title }}</span>
                        </a>
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                  </SidebarMenuSub>
                </CollapsibleContent>
              </SidebarMenuItem>
            </Collapsible>
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
    </SidebarContent>
    <SidebarRail />
  </Sidebar>
</template>

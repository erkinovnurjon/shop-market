<script setup lang="ts">
import UseColorMode from "@/layouts/theme.vue";
import { useScrolled } from "@/hooks/use-scrolled";
import { Icon } from "@iconify/vue";

const isScrolled = useScrolled();
</script>

<template>
  <div
    class="w-full flex items-center min-h-16 bg-slate-200 dark:bg-black"
    :class="isScrolled ? 'shadow-md' : ''"
  >
    <div class="container">
      <div class="flex justify-between items-center">
        <div>logo</div>
        <div class="flex items-center justify-between">
          <UseColorMode />
          <Button variant="outline" class="flex items-center ml-2">
            <Icon
              icon="radix-icons:person"
              class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
            />
          </Button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>

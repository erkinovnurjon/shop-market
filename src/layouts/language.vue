<template>
  <DropdownMenu>
    <DropdownMenuTrigger as-child>
      <Button variant="outline" class="flex items-center justify-between gap-4">
        <Icon
          :icon="selectedIcon"
          class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
        />
        <Icon
          :icon="selectedIcon"
          class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
        />
        <span>{{ $t("changeLanguage") }}</span>
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent align="end">
      <DropdownMenuItem @click="setLanguage('uz_latn')">{{
        t("uzlatn")
      }}</DropdownMenuItem>
      <DropdownMenuItem @click="setLanguage('uz_cryl')">{{
        t("uzcryl")
      }}</DropdownMenuItem>
      <DropdownMenuItem @click="setLanguage('ru')">{{
        t("russian")
      }}</DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
</template>

<script setup lang="ts">
import { ref, watch, computed } from "vue";
import { useI18n } from "vue-i18n";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Icon } from "@iconify/vue";

const { locale, t } = useI18n();

const selectedLanguage = ref(locale.value);

watch(selectedLanguage, (newLang) => {
  locale.value = newLang;
});

const setLanguage = (lang: string) => {
  selectedLanguage.value = lang;
};

const selectedIcon = computed(() => {
  return selectedLanguage.value === "uz_latn"
    ? "flag:uz-4x3"
    : selectedLanguage.value === "uz_cryl"
    ? "flag:uz-4x3"
    : "flag:ru-4x3";
});
</script>

<style scoped></style>

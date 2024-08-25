<script setup lang="ts">
import Bannerbg from "@/assets/images/banner-bg.png";
import TextJustify from "@/assets/icons/textJustify.svg";
import Button from "../ui/button/Button.vue";
import Select from "../my/select.vue";
import Search from "../my/search.vue";
import Language from "@/layouts/language.vue";
import { ShoppingCart } from "lucide-vue-next";
import { Icon } from "@iconify/vue";
</script>

<template>
  <div class="hero-container">
    <div class="hero-background">
      <img :src="Bannerbg" alt="Banner Background" class="hero-bg" />
    </div>
    <div class="hero-content mt-3">
      <div class="container">
        <div class="hero-title">
          <h1 class="font-bold text-[65px] text-yellow-950 text-center">
            Your Title
          </h1>
        </div>
        <div class="flex items-center w-full justify-between">
          <div class="flex items-center justify-between w-1/6">
            <img :src="TextJustify" alt="" />
            <Select />
          </div>
          <div class="flex items-center justify-between w-1/2">
            <Search class="w-full" />
          </div>
          <div class="flex items-center justify-between w-1/4">
            <Language />
            <Button class="flex justify-between items-center">
              <Icon
                icon="radix-icons:person"
                class="h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
              />
              <span>{{ $t("login") }}</span>
            </Button>
            <Button class="flex justify-between gap-2 items-center">
              <ShoppingCart />
              <span>{{ $t("cart") }}</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.hero-container {
  position: relative;
  width: 100%;
  height: 100vh;
}

.hero-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.hero-bg {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.hero-content {
  position: absolute;
  top: 5%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  z-index: 10;
}
</style>

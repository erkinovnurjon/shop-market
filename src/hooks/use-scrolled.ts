import { ref, onMounted, onUnmounted } from "vue";

export function useScrolled() {
  const scrolled = ref(false);

  const handleScroll = () => {
    if (window.scrollY > 10) {
      scrolled.value = true;
    } else {
      scrolled.value = false;
    }
  };

  onMounted(() => {
    window.addEventListener("scroll", handleScroll);
  });

  onUnmounted(() => {
    window.removeEventListener("scroll", handleScroll);
  });

  return scrolled;
}

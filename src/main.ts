import { createApp } from "vue";
import App from "./App.vue";
import i18n from "./locale";
import "./assets/index.css";

const app = createApp(App);

app.use(i18n);

app.mount("#app");

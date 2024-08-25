import uz_latn from "./messages/uz_latn.json";
import uz_cyrl from "./messages/uz_cyrl.json";
import ru from "./messages/ru.json";

import { createI18n } from "vue-i18n";
const messages = {
  uz_latn: uz_latn,
  uz_cyrl: uz_cyrl,
  ru: ru,
};

export const LOCALE = localStorage.getItem("lang") || "uz_cyrl";

const i18n = createI18n({
  legacy: false,
  locale: LOCALE,
  messages: messages,
  silentTranslationWarn: true,
  silentFallbackWarn: true,
  globalInjection: true,
});
export default i18n;
